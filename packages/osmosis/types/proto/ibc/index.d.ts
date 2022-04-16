import * as _1002 from "./applications/transfer/v1/genesis";
import * as _1004 from "./applications/transfer/v1/query";
import * as _1006 from "./applications/transfer/v1/transfer";
import * as _1008 from "./applications/transfer/v1/tx";
import * as _1016 from "./applications/transfer/v2/packet";
import * as _1018 from "./core/channel/v1/channel";
import * as _1020 from "./core/channel/v1/genesis";
import * as _1022 from "./core/channel/v1/query";
import * as _1024 from "./core/channel/v1/tx";
import * as _1032 from "./core/client/v1/client";
import * as _1034 from "./core/client/v1/genesis";
import * as _1036 from "./core/client/v1/query";
import * as _1038 from "./core/client/v1/tx";
import * as _1046 from "./core/commitment/v1/commitment";
import * as _1048 from "./core/connection/v1/connection";
import * as _1050 from "./core/connection/v1/genesis";
import * as _1052 from "./core/connection/v1/query";
import * as _1054 from "./core/connection/v1/tx";
import * as _1062 from "./core/port/v1/query";
import * as _1064 from "./core/types/v1/genesis";
import * as _1066 from "./lightclients/localhost/v1/localhost";
import * as _1068 from "./lightclients/solomachine/v1/solomachine";
import * as _1070 from "./lightclients/solomachine/v2/solomachine";
import * as _1072 from "./lightclients/tendermint/v1/tendermint";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgTransfer: {
                    encode(message: _1008.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1008.MsgTransfer;
                    fromJSON(object: any): _1008.MsgTransfer;
                    toJSON(message: _1008.MsgTransfer): unknown;
                    fromPartial<I extends {
                        sourcePort?: string;
                        sourceChannel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        sender?: string;
                        receiver?: string;
                        timeoutHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                        timeoutTimestamp?: string;
                    } & {
                        sourcePort?: string;
                        sourceChannel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I["token"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                        sender?: string;
                        receiver?: string;
                        timeoutHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I["timeoutHeight"], keyof _1032.Height>, never>;
                        timeoutTimestamp?: string;
                    } & Record<Exclude<keyof I, keyof _1008.MsgTransfer>, never>>(object: I): _1008.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _1008.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1008.MsgTransferResponse;
                    fromJSON(_: any): _1008.MsgTransferResponse;
                    toJSON(_: _1008.MsgTransferResponse): unknown;
                    fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _1008.MsgTransferResponse;
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _1008.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../amino.helpers").AminoHeight;
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../amino.helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _1008.MsgTransfer;
                    };
                };
                encoded: {
                    transfer(value: _1008.MsgTransfer): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    transfer(value: any): {
                        typeUrl: string;
                        value: _1008.MsgTransfer;
                    };
                };
                toJSON: {
                    transfer(value: _1008.MsgTransfer): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    transfer(value: _1008.MsgTransfer): {
                        typeUrl: string;
                        value: _1008.MsgTransfer;
                    };
                };
                messages: {
                    transfer(value: _1008.MsgTransfer): {
                        typeUrl: string;
                        value: _1008.MsgTransfer;
                    };
                };
                DenomTrace: {
                    encode(message: _1006.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1006.DenomTrace;
                    fromJSON(object: any): _1006.DenomTrace;
                    toJSON(message: _1006.DenomTrace): unknown;
                    fromPartial<I_2 extends {
                        path?: string;
                        baseDenom?: string;
                    } & {
                        path?: string;
                        baseDenom?: string;
                    } & Record<Exclude<keyof I_2, keyof _1006.DenomTrace>, never>>(object: I_2): _1006.DenomTrace;
                };
                Params: {
                    encode(message: _1006.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1006.Params;
                    fromJSON(object: any): _1006.Params;
                    toJSON(message: _1006.Params): unknown;
                    fromPartial<I_3 extends {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    } & {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    } & Record<Exclude<keyof I_3, keyof _1006.Params>, never>>(object: I_3): _1006.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _1004.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1004.QueryDenomTraceRequest;
                    fromJSON(object: any): _1004.QueryDenomTraceRequest;
                    toJSON(message: _1004.QueryDenomTraceRequest): unknown;
                    fromPartial<I_4 extends {
                        hash?: string;
                    } & {
                        hash?: string;
                    } & Record<Exclude<keyof I_4, "hash">, never>>(object: I_4): _1004.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _1004.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1004.QueryDenomTraceResponse;
                    fromJSON(object: any): _1004.QueryDenomTraceResponse;
                    toJSON(message: _1004.QueryDenomTraceResponse): unknown;
                    fromPartial<I_5 extends {
                        denomTrace?: {
                            path?: string;
                            baseDenom?: string;
                        };
                    } & {
                        denomTrace?: {
                            path?: string;
                            baseDenom?: string;
                        } & {
                            path?: string;
                            baseDenom?: string;
                        } & Record<Exclude<keyof I_5["denomTrace"], keyof _1006.DenomTrace>, never>;
                    } & Record<Exclude<keyof I_5, "denomTrace">, never>>(object: I_5): _1004.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _1004.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1004.QueryDenomTracesRequest;
                    fromJSON(object: any): _1004.QueryDenomTracesRequest;
                    toJSON(message: _1004.QueryDenomTracesRequest): unknown;
                    fromPartial<I_6 extends {
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
                        } & Record<Exclude<keyof I_6["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_6, "pagination">, never>>(object: I_6): _1004.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _1004.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1004.QueryDenomTracesResponse;
                    fromJSON(object: any): _1004.QueryDenomTracesResponse;
                    toJSON(message: _1004.QueryDenomTracesResponse): unknown;
                    fromPartial<I_7 extends {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string;
                        };
                    } & {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[] & ({
                            path?: string;
                            baseDenom?: string;
                        } & {
                            path?: string;
                            baseDenom?: string;
                        } & Record<Exclude<keyof I_7["denomTraces"][number], keyof _1006.DenomTrace>, never>)[] & Record<Exclude<keyof I_7["denomTraces"], keyof {
                            path?: string;
                            baseDenom?: string;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string;
                        } & {
                            nextKey?: Uint8Array;
                            total?: string;
                        } & Record<Exclude<keyof I_7["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                    } & Record<Exclude<keyof I_7, keyof _1004.QueryDenomTracesResponse>, never>>(object: I_7): _1004.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _1004.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1004.QueryParamsRequest;
                    fromJSON(_: any): _1004.QueryParamsRequest;
                    toJSON(_: _1004.QueryParamsRequest): unknown;
                    fromPartial<I_8 extends {} & {} & Record<Exclude<keyof I_8, never>, never>>(_: I_8): _1004.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _1004.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1004.QueryParamsResponse;
                    fromJSON(object: any): _1004.QueryParamsResponse;
                    toJSON(message: _1004.QueryParamsResponse): unknown;
                    fromPartial<I_9 extends {
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    } & {
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        } & {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        } & Record<Exclude<keyof I_9["params"], keyof _1006.Params>, never>;
                    } & Record<Exclude<keyof I_9, "params">, never>>(object: I_9): _1004.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _1002.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1002.GenesisState;
                    fromJSON(object: any): _1002.GenesisState;
                    toJSON(message: _1002.GenesisState): unknown;
                    fromPartial<I_10 extends {
                        portId?: string;
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    } & {
                        portId?: string;
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[] & ({
                            path?: string;
                            baseDenom?: string;
                        } & {
                            path?: string;
                            baseDenom?: string;
                        } & Record<Exclude<keyof I_10["denomTraces"][number], keyof _1006.DenomTrace>, never>)[] & Record<Exclude<keyof I_10["denomTraces"], keyof {
                            path?: string;
                            baseDenom?: string;
                        }[]>, never>;
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        } & {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        } & Record<Exclude<keyof I_10["params"], keyof _1006.Params>, never>;
                    } & Record<Exclude<keyof I_10, keyof _1002.GenesisState>, never>>(object: I_10): _1002.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _1016.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1016.FungibleTokenPacketData;
                    fromJSON(object: any): _1016.FungibleTokenPacketData;
                    toJSON(message: _1016.FungibleTokenPacketData): unknown;
                    fromPartial<I extends {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    } & Record<Exclude<keyof I, keyof _1016.FungibleTokenPacketData>, never>>(object: I): _1016.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgChannelOpenInit: {
                    encode(message: _1024.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelOpenInit;
                    fromJSON(object: any): _1024.MsgChannelOpenInit;
                    toJSON(message: _1024.MsgChannelOpenInit): unknown;
                    fromPartial<I extends {
                        portId?: string;
                        channel?: {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    } & {
                        portId?: string;
                        channel?: {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I["channel"]["counterparty"], keyof _1018.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I["channel"], keyof _1018.Channel>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I, keyof _1024.MsgChannelOpenInit>, never>>(object: I): _1024.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _1024.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _1024.MsgChannelOpenInitResponse;
                    toJSON(_: _1024.MsgChannelOpenInitResponse): unknown;
                    fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _1024.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _1024.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelOpenTry;
                    fromJSON(object: any): _1024.MsgChannelOpenTry;
                    toJSON(message: _1024.MsgChannelOpenTry): unknown;
                    fromPartial<I_2 extends {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        counterpartyVersion?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                        signer?: string;
                    } & {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_2["channel"]["counterparty"], keyof _1018.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_2["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I_2["channel"], keyof _1018.Channel>, never>;
                        counterpartyVersion?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_2["proofHeight"], keyof _1032.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_2, keyof _1024.MsgChannelOpenTry>, never>>(object: I_2): _1024.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _1024.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _1024.MsgChannelOpenTryResponse;
                    toJSON(_: _1024.MsgChannelOpenTryResponse): unknown;
                    fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _1024.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _1024.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelOpenAck;
                    fromJSON(object: any): _1024.MsgChannelOpenAck;
                    toJSON(message: _1024.MsgChannelOpenAck): unknown;
                    fromPartial<I_4 extends {
                        portId?: string;
                        channelId?: string;
                        counterpartyChannelId?: string;
                        counterpartyVersion?: string;
                        proofTry?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                        signer?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        counterpartyChannelId?: string;
                        counterpartyVersion?: string;
                        proofTry?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_4["proofHeight"], keyof _1032.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_4, keyof _1024.MsgChannelOpenAck>, never>>(object: I_4): _1024.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _1024.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _1024.MsgChannelOpenAckResponse;
                    toJSON(_: _1024.MsgChannelOpenAckResponse): unknown;
                    fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _1024.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _1024.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelOpenConfirm;
                    fromJSON(object: any): _1024.MsgChannelOpenConfirm;
                    toJSON(message: _1024.MsgChannelOpenConfirm): unknown;
                    fromPartial<I_6 extends {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                        signer?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_6["proofHeight"], keyof _1032.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_6, keyof _1024.MsgChannelOpenConfirm>, never>>(object: I_6): _1024.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _1024.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _1024.MsgChannelOpenConfirmResponse;
                    toJSON(_: _1024.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends {} & {} & Record<Exclude<keyof I_7, never>, never>>(_: I_7): _1024.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _1024.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelCloseInit;
                    fromJSON(object: any): _1024.MsgChannelCloseInit;
                    toJSON(message: _1024.MsgChannelCloseInit): unknown;
                    fromPartial<I_8 extends {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    } & Record<Exclude<keyof I_8, keyof _1024.MsgChannelCloseInit>, never>>(object: I_8): _1024.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _1024.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _1024.MsgChannelCloseInitResponse;
                    toJSON(_: _1024.MsgChannelCloseInitResponse): unknown;
                    fromPartial<I_9 extends {} & {} & Record<Exclude<keyof I_9, never>, never>>(_: I_9): _1024.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _1024.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelCloseConfirm;
                    fromJSON(object: any): _1024.MsgChannelCloseConfirm;
                    toJSON(message: _1024.MsgChannelCloseConfirm): unknown;
                    fromPartial<I_10 extends {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                        signer?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_10["proofHeight"], keyof _1032.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_10, keyof _1024.MsgChannelCloseConfirm>, never>>(object: I_10): _1024.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _1024.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _1024.MsgChannelCloseConfirmResponse;
                    toJSON(_: _1024.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial<I_11 extends {} & {} & Record<Exclude<keyof I_11, never>, never>>(_: I_11): _1024.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _1024.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgRecvPacket;
                    fromJSON(object: any): _1024.MsgRecvPacket;
                    toJSON(message: _1024.MsgRecvPacket): unknown;
                    fromPartial<I_12 extends {
                        packet?: {
                            sequence?: string;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            };
                            timeoutTimestamp?: string;
                        };
                        proofCommitment?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                        signer?: string;
                    } & {
                        packet?: {
                            sequence?: string;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            };
                            timeoutTimestamp?: string;
                        } & {
                            sequence?: string;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            } & {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            } & Record<Exclude<keyof I_12["packet"]["timeoutHeight"], keyof _1032.Height>, never>;
                            timeoutTimestamp?: string;
                        } & Record<Exclude<keyof I_12["packet"], keyof _1018.Packet>, never>;
                        proofCommitment?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_12["proofHeight"], keyof _1032.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_12, keyof _1024.MsgRecvPacket>, never>>(object: I_12): _1024.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _1024.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgRecvPacketResponse;
                    fromJSON(_: any): _1024.MsgRecvPacketResponse;
                    toJSON(_: _1024.MsgRecvPacketResponse): unknown;
                    fromPartial<I_13 extends {} & {} & Record<Exclude<keyof I_13, never>, never>>(_: I_13): _1024.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _1024.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgTimeout;
                    fromJSON(object: any): _1024.MsgTimeout;
                    toJSON(message: _1024.MsgTimeout): unknown;
                    fromPartial<I_14 extends {
                        packet?: {
                            sequence?: string;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            };
                            timeoutTimestamp?: string;
                        };
                        proofUnreceived?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                        nextSequenceRecv?: string;
                        signer?: string;
                    } & {
                        packet?: {
                            sequence?: string;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            };
                            timeoutTimestamp?: string;
                        } & {
                            sequence?: string;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            } & {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            } & Record<Exclude<keyof I_14["packet"]["timeoutHeight"], keyof _1032.Height>, never>;
                            timeoutTimestamp?: string;
                        } & Record<Exclude<keyof I_14["packet"], keyof _1018.Packet>, never>;
                        proofUnreceived?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_14["proofHeight"], keyof _1032.Height>, never>;
                        nextSequenceRecv?: string;
                        signer?: string;
                    } & Record<Exclude<keyof I_14, keyof _1024.MsgTimeout>, never>>(object: I_14): _1024.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _1024.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgTimeoutResponse;
                    fromJSON(_: any): _1024.MsgTimeoutResponse;
                    toJSON(_: _1024.MsgTimeoutResponse): unknown;
                    fromPartial<I_15 extends {} & {} & Record<Exclude<keyof I_15, never>, never>>(_: I_15): _1024.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _1024.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgTimeoutOnClose;
                    fromJSON(object: any): _1024.MsgTimeoutOnClose;
                    toJSON(message: _1024.MsgTimeoutOnClose): unknown;
                    fromPartial<I_16 extends {
                        packet?: {
                            sequence?: string;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            };
                            timeoutTimestamp?: string;
                        };
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                        nextSequenceRecv?: string;
                        signer?: string;
                    } & {
                        packet?: {
                            sequence?: string;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            };
                            timeoutTimestamp?: string;
                        } & {
                            sequence?: string;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            } & {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            } & Record<Exclude<keyof I_16["packet"]["timeoutHeight"], keyof _1032.Height>, never>;
                            timeoutTimestamp?: string;
                        } & Record<Exclude<keyof I_16["packet"], keyof _1018.Packet>, never>;
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_16["proofHeight"], keyof _1032.Height>, never>;
                        nextSequenceRecv?: string;
                        signer?: string;
                    } & Record<Exclude<keyof I_16, keyof _1024.MsgTimeoutOnClose>, never>>(object: I_16): _1024.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _1024.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _1024.MsgTimeoutOnCloseResponse;
                    toJSON(_: _1024.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial<I_17 extends {} & {} & Record<Exclude<keyof I_17, never>, never>>(_: I_17): _1024.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _1024.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgAcknowledgement;
                    fromJSON(object: any): _1024.MsgAcknowledgement;
                    toJSON(message: _1024.MsgAcknowledgement): unknown;
                    fromPartial<I_18 extends {
                        packet?: {
                            sequence?: string;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            };
                            timeoutTimestamp?: string;
                        };
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                        signer?: string;
                    } & {
                        packet?: {
                            sequence?: string;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            };
                            timeoutTimestamp?: string;
                        } & {
                            sequence?: string;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            } & {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            } & Record<Exclude<keyof I_18["packet"]["timeoutHeight"], keyof _1032.Height>, never>;
                            timeoutTimestamp?: string;
                        } & Record<Exclude<keyof I_18["packet"], keyof _1018.Packet>, never>;
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_18["proofHeight"], keyof _1032.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_18, keyof _1024.MsgAcknowledgement>, never>>(object: I_18): _1024.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _1024.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgAcknowledgementResponse;
                    fromJSON(_: any): _1024.MsgAcknowledgementResponse;
                    toJSON(_: _1024.MsgAcknowledgementResponse): unknown;
                    fromPartial<I_19 extends {} & {} & Record<Exclude<keyof I_19, never>, never>>(_: I_19): _1024.MsgAcknowledgementResponse;
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _1024.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _1024.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _1024.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        }) => _1024.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _1024.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        }) => _1024.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _1024.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        }) => _1024.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _1024.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _1024.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _1024.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        }) => _1024.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _1024.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        }) => _1024.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _1024.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _1024.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _1024.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _1024.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _1024.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        }) => _1024.MsgAcknowledgement;
                    };
                };
                encoded: {
                    channelOpenInit(value: _1024.MsgChannelOpenInit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelOpenTry(value: _1024.MsgChannelOpenTry): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelOpenAck(value: _1024.MsgChannelOpenAck): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelOpenConfirm(value: _1024.MsgChannelOpenConfirm): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelCloseInit(value: _1024.MsgChannelCloseInit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelCloseConfirm(value: _1024.MsgChannelCloseConfirm): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    recvPacket(value: _1024.MsgRecvPacket): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    timeout(value: _1024.MsgTimeout): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    timeoutOnClose(value: _1024.MsgTimeoutOnClose): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    acknowledgement(value: _1024.MsgAcknowledgement): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    channelOpenInit(value: any): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenInit;
                    };
                    channelOpenTry(value: any): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenTry;
                    };
                    channelOpenAck(value: any): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenAck;
                    };
                    channelOpenConfirm(value: any): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenConfirm;
                    };
                    channelCloseInit(value: any): {
                        typeUrl: string;
                        value: _1024.MsgChannelCloseInit;
                    };
                    channelCloseConfirm(value: any): {
                        typeUrl: string;
                        value: _1024.MsgChannelCloseConfirm;
                    };
                    recvPacket(value: any): {
                        typeUrl: string;
                        value: _1024.MsgRecvPacket;
                    };
                    timeout(value: any): {
                        typeUrl: string;
                        value: _1024.MsgTimeout;
                    };
                    timeoutOnClose(value: any): {
                        typeUrl: string;
                        value: _1024.MsgTimeoutOnClose;
                    };
                    acknowledgement(value: any): {
                        typeUrl: string;
                        value: _1024.MsgAcknowledgement;
                    };
                };
                toJSON: {
                    channelOpenInit(value: _1024.MsgChannelOpenInit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelOpenTry(value: _1024.MsgChannelOpenTry): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelOpenAck(value: _1024.MsgChannelOpenAck): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelOpenConfirm(value: _1024.MsgChannelOpenConfirm): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelCloseInit(value: _1024.MsgChannelCloseInit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelCloseConfirm(value: _1024.MsgChannelCloseConfirm): {
                        typeUrl: string;
                        value: unknown;
                    };
                    recvPacket(value: _1024.MsgRecvPacket): {
                        typeUrl: string;
                        value: unknown;
                    };
                    timeout(value: _1024.MsgTimeout): {
                        typeUrl: string;
                        value: unknown;
                    };
                    timeoutOnClose(value: _1024.MsgTimeoutOnClose): {
                        typeUrl: string;
                        value: unknown;
                    };
                    acknowledgement(value: _1024.MsgAcknowledgement): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    channelOpenInit(value: _1024.MsgChannelOpenInit): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenInit;
                    };
                    channelOpenTry(value: _1024.MsgChannelOpenTry): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenTry;
                    };
                    channelOpenAck(value: _1024.MsgChannelOpenAck): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenAck;
                    };
                    channelOpenConfirm(value: _1024.MsgChannelOpenConfirm): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenConfirm;
                    };
                    channelCloseInit(value: _1024.MsgChannelCloseInit): {
                        typeUrl: string;
                        value: _1024.MsgChannelCloseInit;
                    };
                    channelCloseConfirm(value: _1024.MsgChannelCloseConfirm): {
                        typeUrl: string;
                        value: _1024.MsgChannelCloseConfirm;
                    };
                    recvPacket(value: _1024.MsgRecvPacket): {
                        typeUrl: string;
                        value: _1024.MsgRecvPacket;
                    };
                    timeout(value: _1024.MsgTimeout): {
                        typeUrl: string;
                        value: _1024.MsgTimeout;
                    };
                    timeoutOnClose(value: _1024.MsgTimeoutOnClose): {
                        typeUrl: string;
                        value: _1024.MsgTimeoutOnClose;
                    };
                    acknowledgement(value: _1024.MsgAcknowledgement): {
                        typeUrl: string;
                        value: _1024.MsgAcknowledgement;
                    };
                };
                messages: {
                    channelOpenInit(value: _1024.MsgChannelOpenInit): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenInit;
                    };
                    channelOpenTry(value: _1024.MsgChannelOpenTry): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenTry;
                    };
                    channelOpenAck(value: _1024.MsgChannelOpenAck): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenAck;
                    };
                    channelOpenConfirm(value: _1024.MsgChannelOpenConfirm): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenConfirm;
                    };
                    channelCloseInit(value: _1024.MsgChannelCloseInit): {
                        typeUrl: string;
                        value: _1024.MsgChannelCloseInit;
                    };
                    channelCloseConfirm(value: _1024.MsgChannelCloseConfirm): {
                        typeUrl: string;
                        value: _1024.MsgChannelCloseConfirm;
                    };
                    recvPacket(value: _1024.MsgRecvPacket): {
                        typeUrl: string;
                        value: _1024.MsgRecvPacket;
                    };
                    timeout(value: _1024.MsgTimeout): {
                        typeUrl: string;
                        value: _1024.MsgTimeout;
                    };
                    timeoutOnClose(value: _1024.MsgTimeoutOnClose): {
                        typeUrl: string;
                        value: _1024.MsgTimeoutOnClose;
                    };
                    acknowledgement(value: _1024.MsgAcknowledgement): {
                        typeUrl: string;
                        value: _1024.MsgAcknowledgement;
                    };
                };
                QueryChannelRequest: {
                    encode(message: _1022.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryChannelRequest;
                    fromJSON(object: any): _1022.QueryChannelRequest;
                    toJSON(message: _1022.QueryChannelRequest): unknown;
                    fromPartial<I_20 extends {
                        portId?: string;
                        channelId?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_20, keyof _1022.QueryChannelRequest>, never>>(object: I_20): _1022.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _1022.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryChannelResponse;
                    fromJSON(object: any): _1022.QueryChannelResponse;
                    toJSON(message: _1022.QueryChannelResponse): unknown;
                    fromPartial<I_21 extends {
                        channel?: {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                    } & {
                        channel?: {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_21["channel"]["counterparty"], keyof _1018.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_21["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I_21["channel"], keyof _1018.Channel>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_21["proofHeight"], keyof _1032.Height>, never>;
                    } & Record<Exclude<keyof I_21, keyof _1022.QueryChannelResponse>, never>>(object: I_21): _1022.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _1022.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryChannelsRequest;
                    fromJSON(object: any): _1022.QueryChannelsRequest;
                    toJSON(message: _1022.QueryChannelsRequest): unknown;
                    fromPartial<I_22 extends {
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
                        } & Record<Exclude<keyof I_22["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_22, "pagination">, never>>(object: I_22): _1022.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _1022.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryChannelsResponse;
                    fromJSON(object: any): _1022.QueryChannelsResponse;
                    toJSON(message: _1022.QueryChannelsResponse): unknown;
                    fromPartial<I_23 extends {
                        channels?: {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string;
                        };
                        height?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                    } & {
                        channels?: {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[] & ({
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_23["channels"][number]["counterparty"], keyof _1018.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_23["channels"][number]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_23["channels"][number], keyof _1018.IdentifiedChannel>, never>)[] & Record<Exclude<keyof I_23["channels"], keyof {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string;
                        } & {
                            nextKey?: Uint8Array;
                            total?: string;
                        } & Record<Exclude<keyof I_23["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                        height?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_23["height"], keyof _1032.Height>, never>;
                    } & Record<Exclude<keyof I_23, keyof _1022.QueryChannelsResponse>, never>>(object: I_23): _1022.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _1022.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _1022.QueryConnectionChannelsRequest;
                    toJSON(message: _1022.QueryConnectionChannelsRequest): unknown;
                    fromPartial<I_24 extends {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string;
                            limit?: string;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    } & {
                        connection?: string;
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
                        } & Record<Exclude<keyof I_24["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_24, keyof _1022.QueryConnectionChannelsRequest>, never>>(object: I_24): _1022.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _1022.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _1022.QueryConnectionChannelsResponse;
                    toJSON(message: _1022.QueryConnectionChannelsResponse): unknown;
                    fromPartial<I_25 extends {
                        channels?: {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string;
                        };
                        height?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                    } & {
                        channels?: {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[] & ({
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_25["channels"][number]["counterparty"], keyof _1018.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_25["channels"][number]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_25["channels"][number], keyof _1018.IdentifiedChannel>, never>)[] & Record<Exclude<keyof I_25["channels"], keyof {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string;
                        } & {
                            nextKey?: Uint8Array;
                            total?: string;
                        } & Record<Exclude<keyof I_25["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                        height?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_25["height"], keyof _1032.Height>, never>;
                    } & Record<Exclude<keyof I_25, keyof _1022.QueryConnectionChannelsResponse>, never>>(object: I_25): _1022.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _1022.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryChannelClientStateRequest;
                    fromJSON(object: any): _1022.QueryChannelClientStateRequest;
                    toJSON(message: _1022.QueryChannelClientStateRequest): unknown;
                    fromPartial<I_26 extends {
                        portId?: string;
                        channelId?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_26, keyof _1022.QueryChannelClientStateRequest>, never>>(object: I_26): _1022.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _1022.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryChannelClientStateResponse;
                    fromJSON(object: any): _1022.QueryChannelClientStateResponse;
                    toJSON(message: _1022.QueryChannelClientStateResponse): unknown;
                    fromPartial<I_27 extends {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                    } & {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_27["identifiedClientState"]["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_27["identifiedClientState"], keyof _1032.IdentifiedClientState>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_27["proofHeight"], keyof _1032.Height>, never>;
                    } & Record<Exclude<keyof I_27, keyof _1022.QueryChannelClientStateResponse>, never>>(object: I_27): _1022.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _1022.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _1022.QueryChannelConsensusStateRequest;
                    toJSON(message: _1022.QueryChannelConsensusStateRequest): unknown;
                    fromPartial<I_28 extends {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: string;
                        revisionHeight?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: string;
                        revisionHeight?: string;
                    } & Record<Exclude<keyof I_28, keyof _1022.QueryChannelConsensusStateRequest>, never>>(object: I_28): _1022.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _1022.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _1022.QueryChannelConsensusStateResponse;
                    toJSON(message: _1022.QueryChannelConsensusStateResponse): unknown;
                    fromPartial<I_29 extends {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                    } & {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_29["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_29["proofHeight"], keyof _1032.Height>, never>;
                    } & Record<Exclude<keyof I_29, keyof _1022.QueryChannelConsensusStateResponse>, never>>(object: I_29): _1022.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _1022.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _1022.QueryPacketCommitmentRequest;
                    toJSON(message: _1022.QueryPacketCommitmentRequest): unknown;
                    fromPartial<I_30 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: string;
                    } & Record<Exclude<keyof I_30, keyof _1022.QueryPacketCommitmentRequest>, never>>(object: I_30): _1022.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _1022.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _1022.QueryPacketCommitmentResponse;
                    toJSON(message: _1022.QueryPacketCommitmentResponse): unknown;
                    fromPartial<I_31 extends {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                    } & {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_31["proofHeight"], keyof _1032.Height>, never>;
                    } & Record<Exclude<keyof I_31, keyof _1022.QueryPacketCommitmentResponse>, never>>(object: I_31): _1022.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _1022.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _1022.QueryPacketCommitmentsRequest;
                    toJSON(message: _1022.QueryPacketCommitmentsRequest): unknown;
                    fromPartial<I_32 extends {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string;
                            limit?: string;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    } & {
                        portId?: string;
                        channelId?: string;
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
                        } & Record<Exclude<keyof I_32["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_32, keyof _1022.QueryPacketCommitmentsRequest>, never>>(object: I_32): _1022.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _1022.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _1022.QueryPacketCommitmentsResponse;
                    toJSON(message: _1022.QueryPacketCommitmentsResponse): unknown;
                    fromPartial<I_33 extends {
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string;
                        };
                        height?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                    } & {
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_33["commitments"][number], keyof _1018.PacketState>, never>)[] & Record<Exclude<keyof I_33["commitments"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string;
                        } & {
                            nextKey?: Uint8Array;
                            total?: string;
                        } & Record<Exclude<keyof I_33["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                        height?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_33["height"], keyof _1032.Height>, never>;
                    } & Record<Exclude<keyof I_33, keyof _1022.QueryPacketCommitmentsResponse>, never>>(object: I_33): _1022.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _1022.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryPacketReceiptRequest;
                    fromJSON(object: any): _1022.QueryPacketReceiptRequest;
                    toJSON(message: _1022.QueryPacketReceiptRequest): unknown;
                    fromPartial<I_34 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: string;
                    } & Record<Exclude<keyof I_34, keyof _1022.QueryPacketReceiptRequest>, never>>(object: I_34): _1022.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _1022.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryPacketReceiptResponse;
                    fromJSON(object: any): _1022.QueryPacketReceiptResponse;
                    toJSON(message: _1022.QueryPacketReceiptResponse): unknown;
                    fromPartial<I_35 extends {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                    } & {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_35["proofHeight"], keyof _1032.Height>, never>;
                    } & Record<Exclude<keyof I_35, keyof _1022.QueryPacketReceiptResponse>, never>>(object: I_35): _1022.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _1022.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _1022.QueryPacketAcknowledgementRequest;
                    toJSON(message: _1022.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial<I_36 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: string;
                    } & Record<Exclude<keyof I_36, keyof _1022.QueryPacketAcknowledgementRequest>, never>>(object: I_36): _1022.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _1022.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _1022.QueryPacketAcknowledgementResponse;
                    toJSON(message: _1022.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial<I_37 extends {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                    } & {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_37["proofHeight"], keyof _1032.Height>, never>;
                    } & Record<Exclude<keyof I_37, keyof _1022.QueryPacketAcknowledgementResponse>, never>>(object: I_37): _1022.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _1022.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _1022.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _1022.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial<I_38 extends {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string;
                            limit?: string;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                        packetCommitmentSequences?: string[];
                    } & {
                        portId?: string;
                        channelId?: string;
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
                        } & Record<Exclude<keyof I_38["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                        packetCommitmentSequences?: string[] & string[] & Record<Exclude<keyof I_38["packetCommitmentSequences"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_38, keyof _1022.QueryPacketAcknowledgementsRequest>, never>>(object: I_38): _1022.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _1022.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _1022.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _1022.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial<I_39 extends {
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string;
                        };
                        height?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                    } & {
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_39["acknowledgements"][number], keyof _1018.PacketState>, never>)[] & Record<Exclude<keyof I_39["acknowledgements"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string;
                        } & {
                            nextKey?: Uint8Array;
                            total?: string;
                        } & Record<Exclude<keyof I_39["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                        height?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_39["height"], keyof _1032.Height>, never>;
                    } & Record<Exclude<keyof I_39, keyof _1022.QueryPacketAcknowledgementsResponse>, never>>(object: I_39): _1022.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _1022.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _1022.QueryUnreceivedPacketsRequest;
                    toJSON(message: _1022.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial<I_40 extends {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: string[];
                    } & {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: string[] & string[] & Record<Exclude<keyof I_40["packetCommitmentSequences"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_40, keyof _1022.QueryUnreceivedPacketsRequest>, never>>(object: I_40): _1022.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _1022.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _1022.QueryUnreceivedPacketsResponse;
                    toJSON(message: _1022.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial<I_41 extends {
                        sequences?: string[];
                        height?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                    } & {
                        sequences?: string[] & string[] & Record<Exclude<keyof I_41["sequences"], keyof string[]>, never>;
                        height?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_41["height"], keyof _1032.Height>, never>;
                    } & Record<Exclude<keyof I_41, keyof _1022.QueryUnreceivedPacketsResponse>, never>>(object: I_41): _1022.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _1022.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _1022.QueryUnreceivedAcksRequest;
                    toJSON(message: _1022.QueryUnreceivedAcksRequest): unknown;
                    fromPartial<I_42 extends {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: string[];
                    } & {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: string[] & string[] & Record<Exclude<keyof I_42["packetAckSequences"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_42, keyof _1022.QueryUnreceivedAcksRequest>, never>>(object: I_42): _1022.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _1022.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _1022.QueryUnreceivedAcksResponse;
                    toJSON(message: _1022.QueryUnreceivedAcksResponse): unknown;
                    fromPartial<I_43 extends {
                        sequences?: string[];
                        height?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                    } & {
                        sequences?: string[] & string[] & Record<Exclude<keyof I_43["sequences"], keyof string[]>, never>;
                        height?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_43["height"], keyof _1032.Height>, never>;
                    } & Record<Exclude<keyof I_43, keyof _1022.QueryUnreceivedAcksResponse>, never>>(object: I_43): _1022.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _1022.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _1022.QueryNextSequenceReceiveRequest;
                    toJSON(message: _1022.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial<I_44 extends {
                        portId?: string;
                        channelId?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_44, keyof _1022.QueryNextSequenceReceiveRequest>, never>>(object: I_44): _1022.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _1022.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _1022.QueryNextSequenceReceiveResponse;
                    toJSON(message: _1022.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial<I_45 extends {
                        nextSequenceReceive?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                    } & {
                        nextSequenceReceive?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_45["proofHeight"], keyof _1032.Height>, never>;
                    } & Record<Exclude<keyof I_45, keyof _1022.QueryNextSequenceReceiveResponse>, never>>(object: I_45): _1022.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _1020.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1020.GenesisState;
                    fromJSON(object: any): _1020.GenesisState;
                    toJSON(message: _1020.GenesisState): unknown;
                    fromPartial<I_46 extends {
                        channels?: {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        }[];
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        }[];
                        receipts?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        }[];
                        sendSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                        }[];
                        recvSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                        }[];
                        ackSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                        }[];
                        nextChannelSequence?: string;
                    } & {
                        channels?: {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[] & ({
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_46["channels"][number]["counterparty"], keyof _1018.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_46["channels"][number]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_46["channels"][number], keyof _1018.IdentifiedChannel>, never>)[] & Record<Exclude<keyof I_46["channels"], keyof {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[]>, never>;
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_46["acknowledgements"][number], keyof _1018.PacketState>, never>)[] & Record<Exclude<keyof I_46["acknowledgements"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        }[]>, never>;
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_46["commitments"][number], keyof _1018.PacketState>, never>)[] & Record<Exclude<keyof I_46["commitments"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        }[]>, never>;
                        receipts?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_46["receipts"][number], keyof _1018.PacketState>, never>)[] & Record<Exclude<keyof I_46["receipts"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                            data?: Uint8Array;
                        }[]>, never>;
                        sendSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                        } & Record<Exclude<keyof I_46["sendSequences"][number], keyof _1020.PacketSequence>, never>)[] & Record<Exclude<keyof I_46["sendSequences"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                        }[]>, never>;
                        recvSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                        } & Record<Exclude<keyof I_46["recvSequences"][number], keyof _1020.PacketSequence>, never>)[] & Record<Exclude<keyof I_46["recvSequences"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                        }[]>, never>;
                        ackSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                        } & Record<Exclude<keyof I_46["ackSequences"][number], keyof _1020.PacketSequence>, never>)[] & Record<Exclude<keyof I_46["ackSequences"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: string;
                        }[]>, never>;
                        nextChannelSequence?: string;
                    } & Record<Exclude<keyof I_46, keyof _1020.GenesisState>, never>>(object: I_46): _1020.GenesisState;
                };
                PacketSequence: {
                    encode(message: _1020.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1020.PacketSequence;
                    fromJSON(object: any): _1020.PacketSequence;
                    toJSON(message: _1020.PacketSequence): unknown;
                    fromPartial<I_47 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: string;
                    } & Record<Exclude<keyof I_47, keyof _1020.PacketSequence>, never>>(object: I_47): _1020.PacketSequence;
                };
                stateFromJSON(object: any): _1018.State;
                stateToJSON(object: _1018.State): string;
                orderFromJSON(object: any): _1018.Order;
                orderToJSON(object: _1018.Order): string;
                State: typeof _1018.State;
                Order: typeof _1018.Order;
                Channel: {
                    encode(message: _1018.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1018.Channel;
                    fromJSON(object: any): _1018.Channel;
                    toJSON(message: _1018.Channel): unknown;
                    fromPartial<I_48 extends {
                        state?: _1018.State;
                        ordering?: _1018.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                    } & {
                        state?: _1018.State;
                        ordering?: _1018.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        } & {
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_48["counterparty"], keyof _1018.Counterparty>, never>;
                        connectionHops?: string[] & string[] & Record<Exclude<keyof I_48["connectionHops"], keyof string[]>, never>;
                        version?: string;
                    } & Record<Exclude<keyof I_48, keyof _1018.Channel>, never>>(object: I_48): _1018.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _1018.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1018.IdentifiedChannel;
                    fromJSON(object: any): _1018.IdentifiedChannel;
                    toJSON(message: _1018.IdentifiedChannel): unknown;
                    fromPartial<I_49 extends {
                        state?: _1018.State;
                        ordering?: _1018.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    } & {
                        state?: _1018.State;
                        ordering?: _1018.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        } & {
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_49["counterparty"], keyof _1018.Counterparty>, never>;
                        connectionHops?: string[] & string[] & Record<Exclude<keyof I_49["connectionHops"], keyof string[]>, never>;
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_49, keyof _1018.IdentifiedChannel>, never>>(object: I_49): _1018.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _1018.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1018.Counterparty;
                    fromJSON(object: any): _1018.Counterparty;
                    toJSON(message: _1018.Counterparty): unknown;
                    fromPartial<I_50 extends {
                        portId?: string;
                        channelId?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_50, keyof _1018.Counterparty>, never>>(object: I_50): _1018.Counterparty;
                };
                Packet: {
                    encode(message: _1018.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1018.Packet;
                    fromJSON(object: any): _1018.Packet;
                    toJSON(message: _1018.Packet): unknown;
                    fromPartial<I_51 extends {
                        sequence?: string;
                        sourcePort?: string;
                        sourceChannel?: string;
                        destinationPort?: string;
                        destinationChannel?: string;
                        data?: Uint8Array;
                        timeoutHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                        timeoutTimestamp?: string;
                    } & {
                        sequence?: string;
                        sourcePort?: string;
                        sourceChannel?: string;
                        destinationPort?: string;
                        destinationChannel?: string;
                        data?: Uint8Array;
                        timeoutHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_51["timeoutHeight"], keyof _1032.Height>, never>;
                        timeoutTimestamp?: string;
                    } & Record<Exclude<keyof I_51, keyof _1018.Packet>, never>>(object: I_51): _1018.Packet;
                };
                PacketState: {
                    encode(message: _1018.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1018.PacketState;
                    fromJSON(object: any): _1018.PacketState;
                    toJSON(message: _1018.PacketState): unknown;
                    fromPartial<I_52 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: string;
                        data?: Uint8Array;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: string;
                        data?: Uint8Array;
                    } & Record<Exclude<keyof I_52, keyof _1018.PacketState>, never>>(object: I_52): _1018.PacketState;
                };
                Acknowledgement: {
                    encode(message: _1018.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1018.Acknowledgement;
                    fromJSON(object: any): _1018.Acknowledgement;
                    toJSON(message: _1018.Acknowledgement): unknown;
                    fromPartial<I_53 extends {
                        result?: Uint8Array;
                        error?: string;
                    } & {
                        result?: Uint8Array;
                        error?: string;
                    } & Record<Exclude<keyof I_53, keyof _1018.Acknowledgement>, never>>(object: I_53): _1018.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgCreateClient: {
                    encode(message: _1038.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1038.MsgCreateClient;
                    fromJSON(object: any): _1038.MsgCreateClient;
                    toJSON(message: _1038.MsgCreateClient): unknown;
                    fromPartial<I extends {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    } & {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I, keyof _1038.MsgCreateClient>, never>>(object: I): _1038.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _1038.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1038.MsgCreateClientResponse;
                    fromJSON(_: any): _1038.MsgCreateClientResponse;
                    toJSON(_: _1038.MsgCreateClientResponse): unknown;
                    fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _1038.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _1038.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1038.MsgUpdateClient;
                    fromJSON(object: any): _1038.MsgUpdateClient;
                    toJSON(message: _1038.MsgUpdateClient): unknown;
                    fromPartial<I_2 extends {
                        clientId?: string;
                        header?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    } & {
                        clientId?: string;
                        header?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_2["header"], keyof import("../google/protobuf/any").Any>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_2, keyof _1038.MsgUpdateClient>, never>>(object: I_2): _1038.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _1038.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1038.MsgUpdateClientResponse;
                    fromJSON(_: any): _1038.MsgUpdateClientResponse;
                    toJSON(_: _1038.MsgUpdateClientResponse): unknown;
                    fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _1038.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _1038.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1038.MsgUpgradeClient;
                    fromJSON(object: any): _1038.MsgUpgradeClient;
                    toJSON(message: _1038.MsgUpgradeClient): unknown;
                    fromPartial<I_4 extends {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofUpgradeClient?: Uint8Array;
                        proofUpgradeConsensusState?: Uint8Array;
                        signer?: string;
                    } & {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_4["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_4["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        proofUpgradeClient?: Uint8Array;
                        proofUpgradeConsensusState?: Uint8Array;
                        signer?: string;
                    } & Record<Exclude<keyof I_4, keyof _1038.MsgUpgradeClient>, never>>(object: I_4): _1038.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _1038.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1038.MsgUpgradeClientResponse;
                    fromJSON(_: any): _1038.MsgUpgradeClientResponse;
                    toJSON(_: _1038.MsgUpgradeClientResponse): unknown;
                    fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _1038.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _1038.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1038.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _1038.MsgSubmitMisbehaviour;
                    toJSON(message: _1038.MsgSubmitMisbehaviour): unknown;
                    fromPartial<I_6 extends {
                        clientId?: string;
                        misbehaviour?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    } & {
                        clientId?: string;
                        misbehaviour?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_6["misbehaviour"], keyof import("../google/protobuf/any").Any>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_6, keyof _1038.MsgSubmitMisbehaviour>, never>>(object: I_6): _1038.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _1038.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1038.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _1038.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _1038.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial<I_7 extends {} & {} & Record<Exclude<keyof I_7, never>, never>>(_: I_7): _1038.MsgSubmitMisbehaviourResponse;
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _1038.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _1038.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _1038.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _1038.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _1038.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _1038.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _1038.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _1038.MsgSubmitMisbehaviour;
                    };
                };
                encoded: {
                    createClient(value: _1038.MsgCreateClient): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    updateClient(value: _1038.MsgUpdateClient): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    upgradeClient(value: _1038.MsgUpgradeClient): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    submitMisbehaviour(value: _1038.MsgSubmitMisbehaviour): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    createClient(value: any): {
                        typeUrl: string;
                        value: _1038.MsgCreateClient;
                    };
                    updateClient(value: any): {
                        typeUrl: string;
                        value: _1038.MsgUpdateClient;
                    };
                    upgradeClient(value: any): {
                        typeUrl: string;
                        value: _1038.MsgUpgradeClient;
                    };
                    submitMisbehaviour(value: any): {
                        typeUrl: string;
                        value: _1038.MsgSubmitMisbehaviour;
                    };
                };
                toJSON: {
                    createClient(value: _1038.MsgCreateClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClient(value: _1038.MsgUpdateClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    upgradeClient(value: _1038.MsgUpgradeClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitMisbehaviour(value: _1038.MsgSubmitMisbehaviour): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    createClient(value: _1038.MsgCreateClient): {
                        typeUrl: string;
                        value: _1038.MsgCreateClient;
                    };
                    updateClient(value: _1038.MsgUpdateClient): {
                        typeUrl: string;
                        value: _1038.MsgUpdateClient;
                    };
                    upgradeClient(value: _1038.MsgUpgradeClient): {
                        typeUrl: string;
                        value: _1038.MsgUpgradeClient;
                    };
                    submitMisbehaviour(value: _1038.MsgSubmitMisbehaviour): {
                        typeUrl: string;
                        value: _1038.MsgSubmitMisbehaviour;
                    };
                };
                messages: {
                    createClient(value: _1038.MsgCreateClient): {
                        typeUrl: string;
                        value: _1038.MsgCreateClient;
                    };
                    updateClient(value: _1038.MsgUpdateClient): {
                        typeUrl: string;
                        value: _1038.MsgUpdateClient;
                    };
                    upgradeClient(value: _1038.MsgUpgradeClient): {
                        typeUrl: string;
                        value: _1038.MsgUpgradeClient;
                    };
                    submitMisbehaviour(value: _1038.MsgSubmitMisbehaviour): {
                        typeUrl: string;
                        value: _1038.MsgSubmitMisbehaviour;
                    };
                };
                QueryClientStateRequest: {
                    encode(message: _1036.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryClientStateRequest;
                    fromJSON(object: any): _1036.QueryClientStateRequest;
                    toJSON(message: _1036.QueryClientStateRequest): unknown;
                    fromPartial<I_8 extends {
                        clientId?: string;
                    } & {
                        clientId?: string;
                    } & Record<Exclude<keyof I_8, "clientId">, never>>(object: I_8): _1036.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _1036.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryClientStateResponse;
                    fromJSON(object: any): _1036.QueryClientStateResponse;
                    toJSON(message: _1036.QueryClientStateResponse): unknown;
                    fromPartial<I_9 extends {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                    } & {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_9["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_9["proofHeight"], keyof _1032.Height>, never>;
                    } & Record<Exclude<keyof I_9, keyof _1036.QueryClientStateResponse>, never>>(object: I_9): _1036.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _1036.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryClientStatesRequest;
                    fromJSON(object: any): _1036.QueryClientStatesRequest;
                    toJSON(message: _1036.QueryClientStatesRequest): unknown;
                    fromPartial<I_10 extends {
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
                        } & Record<Exclude<keyof I_10["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_10, "pagination">, never>>(object: I_10): _1036.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _1036.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryClientStatesResponse;
                    fromJSON(object: any): _1036.QueryClientStatesResponse;
                    toJSON(message: _1036.QueryClientStatesResponse): unknown;
                    fromPartial<I_11 extends {
                        clientStates?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string;
                        };
                    } & {
                        clientStates?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[] & ({
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_11["clientStates"][number]["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_11["clientStates"][number], keyof _1032.IdentifiedClientState>, never>)[] & Record<Exclude<keyof I_11["clientStates"], keyof {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string;
                        } & {
                            nextKey?: Uint8Array;
                            total?: string;
                        } & Record<Exclude<keyof I_11["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                    } & Record<Exclude<keyof I_11, keyof _1036.QueryClientStatesResponse>, never>>(object: I_11): _1036.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _1036.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryConsensusStateRequest;
                    fromJSON(object: any): _1036.QueryConsensusStateRequest;
                    toJSON(message: _1036.QueryConsensusStateRequest): unknown;
                    fromPartial<I_12 extends {
                        clientId?: string;
                        revisionNumber?: string;
                        revisionHeight?: string;
                        latestHeight?: boolean;
                    } & {
                        clientId?: string;
                        revisionNumber?: string;
                        revisionHeight?: string;
                        latestHeight?: boolean;
                    } & Record<Exclude<keyof I_12, keyof _1036.QueryConsensusStateRequest>, never>>(object: I_12): _1036.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _1036.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryConsensusStateResponse;
                    fromJSON(object: any): _1036.QueryConsensusStateResponse;
                    toJSON(message: _1036.QueryConsensusStateResponse): unknown;
                    fromPartial<I_13 extends {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                    } & {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_13["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_13["proofHeight"], keyof _1032.Height>, never>;
                    } & Record<Exclude<keyof I_13, keyof _1036.QueryConsensusStateResponse>, never>>(object: I_13): _1036.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _1036.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryConsensusStatesRequest;
                    fromJSON(object: any): _1036.QueryConsensusStatesRequest;
                    toJSON(message: _1036.QueryConsensusStatesRequest): unknown;
                    fromPartial<I_14 extends {
                        clientId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string;
                            limit?: string;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    } & {
                        clientId?: string;
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
                        } & Record<Exclude<keyof I_14["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_14, keyof _1036.QueryConsensusStatesRequest>, never>>(object: I_14): _1036.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _1036.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryConsensusStatesResponse;
                    fromJSON(object: any): _1036.QueryConsensusStatesResponse;
                    toJSON(message: _1036.QueryConsensusStatesResponse): unknown;
                    fromPartial<I_15 extends {
                        consensusStates?: {
                            height?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string;
                        };
                    } & {
                        consensusStates?: {
                            height?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[] & ({
                            height?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            height?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            } & {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            } & Record<Exclude<keyof I_15["consensusStates"][number]["height"], keyof _1032.Height>, never>;
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_15["consensusStates"][number]["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_15["consensusStates"][number], keyof _1032.ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I_15["consensusStates"], keyof {
                            height?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string;
                        } & {
                            nextKey?: Uint8Array;
                            total?: string;
                        } & Record<Exclude<keyof I_15["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                    } & Record<Exclude<keyof I_15, keyof _1036.QueryConsensusStatesResponse>, never>>(object: I_15): _1036.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _1036.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryClientStatusRequest;
                    fromJSON(object: any): _1036.QueryClientStatusRequest;
                    toJSON(message: _1036.QueryClientStatusRequest): unknown;
                    fromPartial<I_16 extends {
                        clientId?: string;
                    } & {
                        clientId?: string;
                    } & Record<Exclude<keyof I_16, "clientId">, never>>(object: I_16): _1036.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _1036.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryClientStatusResponse;
                    fromJSON(object: any): _1036.QueryClientStatusResponse;
                    toJSON(message: _1036.QueryClientStatusResponse): unknown;
                    fromPartial<I_17 extends {
                        status?: string;
                    } & {
                        status?: string;
                    } & Record<Exclude<keyof I_17, "status">, never>>(object: I_17): _1036.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _1036.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryClientParamsRequest;
                    fromJSON(_: any): _1036.QueryClientParamsRequest;
                    toJSON(_: _1036.QueryClientParamsRequest): unknown;
                    fromPartial<I_18 extends {} & {} & Record<Exclude<keyof I_18, never>, never>>(_: I_18): _1036.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _1036.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryClientParamsResponse;
                    fromJSON(object: any): _1036.QueryClientParamsResponse;
                    toJSON(message: _1036.QueryClientParamsResponse): unknown;
                    fromPartial<I_19 extends {
                        params?: {
                            allowedClients?: string[];
                        };
                    } & {
                        params?: {
                            allowedClients?: string[];
                        } & {
                            allowedClients?: string[] & string[] & Record<Exclude<keyof I_19["params"]["allowedClients"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_19["params"], "allowedClients">, never>;
                    } & Record<Exclude<keyof I_19, "params">, never>>(object: I_19): _1036.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _1036.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _1036.QueryUpgradedClientStateRequest;
                    toJSON(_: _1036.QueryUpgradedClientStateRequest): unknown;
                    fromPartial<I_20 extends {} & {} & Record<Exclude<keyof I_20, never>, never>>(_: I_20): _1036.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _1036.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _1036.QueryUpgradedClientStateResponse;
                    toJSON(message: _1036.QueryUpgradedClientStateResponse): unknown;
                    fromPartial<I_21 extends {
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_21["upgradedClientState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_21, "upgradedClientState">, never>>(object: I_21): _1036.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _1036.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _1036.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _1036.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial<I_22 extends {} & {} & Record<Exclude<keyof I_22, never>, never>>(_: I_22): _1036.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _1036.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _1036.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _1036.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial<I_23 extends {
                        upgradedConsensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        upgradedConsensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_23["upgradedConsensusState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_23, "upgradedConsensusState">, never>>(object: I_23): _1036.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _1034.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1034.GenesisState;
                    fromJSON(object: any): _1034.GenesisState;
                    toJSON(message: _1034.GenesisState): unknown;
                    fromPartial<I_24 extends {
                        clients?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        clientsConsensus?: {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: string;
                                    revisionHeight?: string;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[];
                        clientsMetadata?: {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[];
                        params?: {
                            allowedClients?: string[];
                        };
                        createLocalhost?: boolean;
                        nextClientSequence?: string;
                    } & {
                        clients?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[] & ({
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_24["clients"][number]["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_24["clients"][number], keyof _1032.IdentifiedClientState>, never>)[] & Record<Exclude<keyof I_24["clients"], keyof {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[]>, never>;
                        clientsConsensus?: {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: string;
                                    revisionHeight?: string;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[] & ({
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: string;
                                    revisionHeight?: string;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        } & {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: string;
                                    revisionHeight?: string;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[] & ({
                                height?: {
                                    revisionNumber?: string;
                                    revisionHeight?: string;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            } & {
                                height?: {
                                    revisionNumber?: string;
                                    revisionHeight?: string;
                                } & {
                                    revisionNumber?: string;
                                    revisionHeight?: string;
                                } & Record<Exclude<keyof I_24["clientsConsensus"][number]["consensusStates"][number]["height"], keyof _1032.Height>, never>;
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                } & {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                } & Record<Exclude<keyof I_24["clientsConsensus"][number]["consensusStates"][number]["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                            } & Record<Exclude<keyof I_24["clientsConsensus"][number]["consensusStates"][number], keyof _1032.ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I_24["clientsConsensus"][number]["consensusStates"], keyof {
                                height?: {
                                    revisionNumber?: string;
                                    revisionHeight?: string;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[]>, never>;
                        } & Record<Exclude<keyof I_24["clientsConsensus"][number], keyof _1032.ClientConsensusStates>, never>)[] & Record<Exclude<keyof I_24["clientsConsensus"], keyof {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: string;
                                    revisionHeight?: string;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[]>, never>;
                        clientsMetadata?: {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[] & ({
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        } & {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[] & ({
                                key?: Uint8Array;
                                value?: Uint8Array;
                            } & {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_24["clientsMetadata"][number]["clientMetadata"][number], keyof _1034.GenesisMetadata>, never>)[] & Record<Exclude<keyof I_24["clientsMetadata"][number]["clientMetadata"], keyof {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_24["clientsMetadata"][number], keyof _1034.IdentifiedGenesisMetadata>, never>)[] & Record<Exclude<keyof I_24["clientsMetadata"], keyof {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[]>, never>;
                        params?: {
                            allowedClients?: string[];
                        } & {
                            allowedClients?: string[] & string[] & Record<Exclude<keyof I_24["params"]["allowedClients"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_24["params"], "allowedClients">, never>;
                        createLocalhost?: boolean;
                        nextClientSequence?: string;
                    } & Record<Exclude<keyof I_24, keyof _1034.GenesisState>, never>>(object: I_24): _1034.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _1034.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1034.GenesisMetadata;
                    fromJSON(object: any): _1034.GenesisMetadata;
                    toJSON(message: _1034.GenesisMetadata): unknown;
                    fromPartial<I_25 extends {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I_25, keyof _1034.GenesisMetadata>, never>>(object: I_25): _1034.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _1034.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1034.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _1034.IdentifiedGenesisMetadata;
                    toJSON(message: _1034.IdentifiedGenesisMetadata): unknown;
                    fromPartial<I_26 extends {
                        clientId?: string;
                        clientMetadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    } & {
                        clientId?: string;
                        clientMetadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[] & ({
                            key?: Uint8Array;
                            value?: Uint8Array;
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_26["clientMetadata"][number], keyof _1034.GenesisMetadata>, never>)[] & Record<Exclude<keyof I_26["clientMetadata"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_26, keyof _1034.IdentifiedGenesisMetadata>, never>>(object: I_26): _1034.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _1032.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1032.IdentifiedClientState;
                    fromJSON(object: any): _1032.IdentifiedClientState;
                    toJSON(message: _1032.IdentifiedClientState): unknown;
                    fromPartial<I_27 extends {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_27["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_27, keyof _1032.IdentifiedClientState>, never>>(object: I_27): _1032.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _1032.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1032.ConsensusStateWithHeight;
                    fromJSON(object: any): _1032.ConsensusStateWithHeight;
                    toJSON(message: _1032.ConsensusStateWithHeight): unknown;
                    fromPartial<I_28 extends {
                        height?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        height?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_28["height"], keyof _1032.Height>, never>;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_28["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_28, keyof _1032.ConsensusStateWithHeight>, never>>(object: I_28): _1032.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _1032.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1032.ClientConsensusStates;
                    fromJSON(object: any): _1032.ClientConsensusStates;
                    toJSON(message: _1032.ClientConsensusStates): unknown;
                    fromPartial<I_29 extends {
                        clientId?: string;
                        consensusStates?: {
                            height?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    } & {
                        clientId?: string;
                        consensusStates?: {
                            height?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[] & ({
                            height?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            height?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            } & {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            } & Record<Exclude<keyof I_29["consensusStates"][number]["height"], keyof _1032.Height>, never>;
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_29["consensusStates"][number]["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_29["consensusStates"][number], keyof _1032.ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I_29["consensusStates"], keyof {
                            height?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[]>, never>;
                    } & Record<Exclude<keyof I_29, keyof _1032.ClientConsensusStates>, never>>(object: I_29): _1032.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _1032.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1032.ClientUpdateProposal;
                    fromJSON(object: any): _1032.ClientUpdateProposal;
                    toJSON(message: _1032.ClientUpdateProposal): unknown;
                    fromPartial<I_30 extends {
                        title?: string;
                        description?: string;
                        subjectClientId?: string;
                        substituteClientId?: string;
                    } & {
                        title?: string;
                        description?: string;
                        subjectClientId?: string;
                        substituteClientId?: string;
                    } & Record<Exclude<keyof I_30, keyof _1032.ClientUpdateProposal>, never>>(object: I_30): _1032.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _1032.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1032.UpgradeProposal;
                    fromJSON(object: any): _1032.UpgradeProposal;
                    toJSON(message: _1032.UpgradeProposal): unknown;
                    fromPartial<I_31 extends {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: Date;
                            height?: string;
                            info?: string;
                            upgradedClientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: Date;
                            height?: string;
                            info?: string;
                            upgradedClientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            name?: string;
                            time?: Date;
                            height?: string;
                            info?: string;
                            upgradedClientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_31["plan"]["upgradedClientState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_31["plan"], keyof import("../cosmos/upgrade/v1beta1/upgrade").Plan>, never>;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_31["upgradedClientState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_31, keyof _1032.UpgradeProposal>, never>>(object: I_31): _1032.UpgradeProposal;
                };
                Height: {
                    encode(message: _1032.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1032.Height;
                    fromJSON(object: any): _1032.Height;
                    toJSON(message: _1032.Height): unknown;
                    fromPartial<I_32 extends {
                        revisionNumber?: string;
                        revisionHeight?: string;
                    } & {
                        revisionNumber?: string;
                        revisionHeight?: string;
                    } & Record<Exclude<keyof I_32, keyof _1032.Height>, never>>(object: I_32): _1032.Height;
                };
                Params: {
                    encode(message: _1032.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1032.Params;
                    fromJSON(object: any): _1032.Params;
                    toJSON(message: _1032.Params): unknown;
                    fromPartial<I_33 extends {
                        allowedClients?: string[];
                    } & {
                        allowedClients?: string[] & string[] & Record<Exclude<keyof I_33["allowedClients"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_33, "allowedClients">, never>>(object: I_33): _1032.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _1046.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1046.MerkleRoot;
                    fromJSON(object: any): _1046.MerkleRoot;
                    toJSON(message: _1046.MerkleRoot): unknown;
                    fromPartial<I extends {
                        hash?: Uint8Array;
                    } & {
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I, "hash">, never>>(object: I): _1046.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _1046.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1046.MerklePrefix;
                    fromJSON(object: any): _1046.MerklePrefix;
                    toJSON(message: _1046.MerklePrefix): unknown;
                    fromPartial<I_1 extends {
                        keyPrefix?: Uint8Array;
                    } & {
                        keyPrefix?: Uint8Array;
                    } & Record<Exclude<keyof I_1, "keyPrefix">, never>>(object: I_1): _1046.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _1046.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1046.MerklePath;
                    fromJSON(object: any): _1046.MerklePath;
                    toJSON(message: _1046.MerklePath): unknown;
                    fromPartial<I_2 extends {
                        keyPath?: string[];
                    } & {
                        keyPath?: string[] & string[] & Record<Exclude<keyof I_2["keyPath"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_2, "keyPath">, never>>(object: I_2): _1046.MerklePath;
                };
                MerkleProof: {
                    encode(message: _1046.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1046.MerkleProof;
                    fromJSON(object: any): _1046.MerkleProof;
                    toJSON(message: _1046.MerkleProof): unknown;
                    fromPartial<I_3 extends {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[];
                    } & {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[] & ({
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        } & {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            } & {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                } & {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                } & Record<Exclude<keyof I_3["proofs"][number]["exist"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[] & ({
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                } & {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                } & Record<Exclude<keyof I_3["proofs"][number]["exist"]["path"][number], keyof import("../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["exist"]["path"], keyof {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[]>, never>;
                            } & Record<Exclude<keyof I_3["proofs"][number]["exist"], keyof import("../confio/proofs").ExistenceProof>, never>;
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            } & {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                } & {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    } & {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["left"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[] & ({
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    } & {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["left"]["path"][number], keyof import("../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["left"]["path"], keyof {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[]>, never>;
                                } & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["left"], keyof import("../confio/proofs").ExistenceProof>, never>;
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                } & {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    } & {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["right"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[] & ({
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    } & {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["right"]["path"][number], keyof import("../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["right"]["path"], keyof {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[]>, never>;
                                } & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["right"], keyof import("../confio/proofs").ExistenceProof>, never>;
                            } & Record<Exclude<keyof I_3["proofs"][number]["nonexist"], keyof import("../confio/proofs").NonExistenceProof>, never>;
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            } & {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[] & ({
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                } & {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    } & {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        } & {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["exist"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[] & ({
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        } & {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["exist"]["path"][number], keyof import("../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["exist"]["path"], keyof {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[]>, never>;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["exist"], keyof import("../confio/proofs").ExistenceProof>, never>;
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    } & {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        } & {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[] & ({
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            } & {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["path"][number], keyof import("../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["path"], keyof {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[]>, never>;
                                        } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"], keyof import("../confio/proofs").ExistenceProof>, never>;
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        } & {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[] & ({
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            } & {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["path"][number], keyof import("../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["path"], keyof {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[]>, never>;
                                        } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"], keyof import("../confio/proofs").ExistenceProof>, never>;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"], keyof import("../confio/proofs").NonExistenceProof>, never>;
                                } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number], keyof import("../confio/proofs").BatchEntry>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"], keyof {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[]>, never>;
                            } & Record<Exclude<keyof I_3["proofs"][number]["batch"], "entries">, never>;
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            } & {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[] & ({
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                } & {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    } & {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        } & {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["exist"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                        path?: number[] & number[] & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["exist"]["path"], keyof number[]>, never>;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["exist"], keyof import("../confio/proofs").CompressedExistenceProof>, never>;
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    } & {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        } & {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                            path?: number[] & number[] & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"]["path"], keyof number[]>, never>;
                                        } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"], keyof import("../confio/proofs").CompressedExistenceProof>, never>;
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        } & {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                            path?: number[] & number[] & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"]["path"], keyof number[]>, never>;
                                        } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"], keyof import("../confio/proofs").CompressedExistenceProof>, never>;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["nonexist"], keyof import("../confio/proofs").CompressedNonExistenceProof>, never>;
                                } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number], keyof import("../confio/proofs").CompressedBatchEntry>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"], keyof {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[]>, never>;
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[] & ({
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                } & {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["lookupInners"][number], keyof import("../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["lookupInners"], keyof {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[]>, never>;
                            } & Record<Exclude<keyof I_3["proofs"][number]["compressed"], keyof import("../confio/proofs").CompressedBatchProof>, never>;
                        } & Record<Exclude<keyof I_3["proofs"][number], keyof import("../confio/proofs").CommitmentProof>, never>)[] & Record<Exclude<keyof I_3["proofs"], keyof {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[]>, never>;
                    } & Record<Exclude<keyof I_3, "proofs">, never>>(object: I_3): _1046.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgConnectionOpenInit: {
                    encode(message: _1054.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1054.MsgConnectionOpenInit;
                    fromJSON(object: any): _1054.MsgConnectionOpenInit;
                    toJSON(message: _1054.MsgConnectionOpenInit): unknown;
                    fromPartial<I extends {
                        clientId?: string;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        delayPeriod?: string;
                        signer?: string;
                    } & {
                        clientId?: string;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            } & {
                                keyPrefix?: Uint8Array;
                            } & Record<Exclude<keyof I["counterparty"]["prefix"], "keyPrefix">, never>;
                        } & Record<Exclude<keyof I["counterparty"], keyof _1048.Counterparty>, never>;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        } & {
                            identifier?: string;
                            features?: string[] & string[] & Record<Exclude<keyof I["version"]["features"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I["version"], keyof _1048.Version>, never>;
                        delayPeriod?: string;
                        signer?: string;
                    } & Record<Exclude<keyof I, keyof _1054.MsgConnectionOpenInit>, never>>(object: I): _1054.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _1054.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1054.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _1054.MsgConnectionOpenInitResponse;
                    toJSON(_: _1054.MsgConnectionOpenInitResponse): unknown;
                    fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _1054.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _1054.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1054.MsgConnectionOpenTry;
                    fromJSON(object: any): _1054.MsgConnectionOpenTry;
                    toJSON(message: _1054.MsgConnectionOpenTry): unknown;
                    fromPartial<I_2 extends {
                        clientId?: string;
                        previousConnectionId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: string;
                        counterpartyVersions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                        proofInit?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                        signer?: string;
                    } & {
                        clientId?: string;
                        previousConnectionId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_2["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            } & {
                                keyPrefix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["counterparty"]["prefix"], "keyPrefix">, never>;
                        } & Record<Exclude<keyof I_2["counterparty"], keyof _1048.Counterparty>, never>;
                        delayPeriod?: string;
                        counterpartyVersions?: {
                            identifier?: string;
                            features?: string[];
                        }[] & ({
                            identifier?: string;
                            features?: string[];
                        } & {
                            identifier?: string;
                            features?: string[] & string[] & Record<Exclude<keyof I_2["counterpartyVersions"][number]["features"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_2["counterpartyVersions"][number], keyof _1048.Version>, never>)[] & Record<Exclude<keyof I_2["counterpartyVersions"], keyof {
                            identifier?: string;
                            features?: string[];
                        }[]>, never>;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_2["proofHeight"], keyof _1032.Height>, never>;
                        proofInit?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_2["consensusHeight"], keyof _1032.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_2, keyof _1054.MsgConnectionOpenTry>, never>>(object: I_2): _1054.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _1054.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1054.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _1054.MsgConnectionOpenTryResponse;
                    toJSON(_: _1054.MsgConnectionOpenTryResponse): unknown;
                    fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _1054.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _1054.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1054.MsgConnectionOpenAck;
                    fromJSON(object: any): _1054.MsgConnectionOpenAck;
                    toJSON(message: _1054.MsgConnectionOpenAck): unknown;
                    fromPartial<I_4 extends {
                        connectionId?: string;
                        counterpartyConnectionId?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                        proofTry?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                        signer?: string;
                    } & {
                        connectionId?: string;
                        counterpartyConnectionId?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        } & {
                            identifier?: string;
                            features?: string[] & string[] & Record<Exclude<keyof I_4["version"]["features"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_4["version"], keyof _1048.Version>, never>;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_4["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_4["proofHeight"], keyof _1032.Height>, never>;
                        proofTry?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_4["consensusHeight"], keyof _1032.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_4, keyof _1054.MsgConnectionOpenAck>, never>>(object: I_4): _1054.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _1054.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1054.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _1054.MsgConnectionOpenAckResponse;
                    toJSON(_: _1054.MsgConnectionOpenAckResponse): unknown;
                    fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _1054.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _1054.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1054.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _1054.MsgConnectionOpenConfirm;
                    toJSON(message: _1054.MsgConnectionOpenConfirm): unknown;
                    fromPartial<I_6 extends {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                        signer?: string;
                    } & {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_6["proofHeight"], keyof _1032.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_6, keyof _1054.MsgConnectionOpenConfirm>, never>>(object: I_6): _1054.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _1054.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1054.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _1054.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _1054.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends {} & {} & Record<Exclude<keyof I_7, never>, never>>(_: I_7): _1054.MsgConnectionOpenConfirmResponse;
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _1054.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                port_id: string;
                                channel_id: string;
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                port_id: string;
                                channel_id: string;
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _1054.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _1054.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                port_id: string;
                                channel_id: string;
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../amino.helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                port_id: string;
                                channel_id: string;
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../amino.helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        }) => _1054.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _1054.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../amino.helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../amino.helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        }) => _1054.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _1054.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        }) => _1054.MsgConnectionOpenConfirm;
                    };
                };
                encoded: {
                    connectionOpenInit(value: _1054.MsgConnectionOpenInit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    connectionOpenTry(value: _1054.MsgConnectionOpenTry): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    connectionOpenAck(value: _1054.MsgConnectionOpenAck): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    connectionOpenConfirm(value: _1054.MsgConnectionOpenConfirm): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    connectionOpenInit(value: any): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenInit;
                    };
                    connectionOpenTry(value: any): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenTry;
                    };
                    connectionOpenAck(value: any): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenAck;
                    };
                    connectionOpenConfirm(value: any): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenConfirm;
                    };
                };
                toJSON: {
                    connectionOpenInit(value: _1054.MsgConnectionOpenInit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    connectionOpenTry(value: _1054.MsgConnectionOpenTry): {
                        typeUrl: string;
                        value: unknown;
                    };
                    connectionOpenAck(value: _1054.MsgConnectionOpenAck): {
                        typeUrl: string;
                        value: unknown;
                    };
                    connectionOpenConfirm(value: _1054.MsgConnectionOpenConfirm): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    connectionOpenInit(value: _1054.MsgConnectionOpenInit): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenInit;
                    };
                    connectionOpenTry(value: _1054.MsgConnectionOpenTry): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenTry;
                    };
                    connectionOpenAck(value: _1054.MsgConnectionOpenAck): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenAck;
                    };
                    connectionOpenConfirm(value: _1054.MsgConnectionOpenConfirm): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenConfirm;
                    };
                };
                messages: {
                    connectionOpenInit(value: _1054.MsgConnectionOpenInit): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenInit;
                    };
                    connectionOpenTry(value: _1054.MsgConnectionOpenTry): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenTry;
                    };
                    connectionOpenAck(value: _1054.MsgConnectionOpenAck): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenAck;
                    };
                    connectionOpenConfirm(value: _1054.MsgConnectionOpenConfirm): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenConfirm;
                    };
                };
                QueryConnectionRequest: {
                    encode(message: _1052.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryConnectionRequest;
                    fromJSON(object: any): _1052.QueryConnectionRequest;
                    toJSON(message: _1052.QueryConnectionRequest): unknown;
                    fromPartial<I_8 extends {
                        connectionId?: string;
                    } & {
                        connectionId?: string;
                    } & Record<Exclude<keyof I_8, "connectionId">, never>>(object: I_8): _1052.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _1052.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryConnectionResponse;
                    fromJSON(object: any): _1052.QueryConnectionResponse;
                    toJSON(message: _1052.QueryConnectionResponse): unknown;
                    fromPartial<I_9 extends {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _1048.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                    } & {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _1048.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string;
                        } & {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[] & ({
                                identifier?: string;
                                features?: string[];
                            } & {
                                identifier?: string;
                                features?: string[] & string[] & Record<Exclude<keyof I_9["connection"]["versions"][number]["features"], keyof string[]>, never>;
                            } & Record<Exclude<keyof I_9["connection"]["versions"][number], keyof _1048.Version>, never>)[] & Record<Exclude<keyof I_9["connection"]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _1048.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            } & {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                } & {
                                    keyPrefix?: Uint8Array;
                                } & Record<Exclude<keyof I_9["connection"]["counterparty"]["prefix"], "keyPrefix">, never>;
                            } & Record<Exclude<keyof I_9["connection"]["counterparty"], keyof _1048.Counterparty>, never>;
                            delayPeriod?: string;
                        } & Record<Exclude<keyof I_9["connection"], keyof _1048.ConnectionEnd>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_9["proofHeight"], keyof _1032.Height>, never>;
                    } & Record<Exclude<keyof I_9, keyof _1052.QueryConnectionResponse>, never>>(object: I_9): _1052.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _1052.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryConnectionsRequest;
                    fromJSON(object: any): _1052.QueryConnectionsRequest;
                    toJSON(message: _1052.QueryConnectionsRequest): unknown;
                    fromPartial<I_10 extends {
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
                        } & Record<Exclude<keyof I_10["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_10, "pagination">, never>>(object: I_10): _1052.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _1052.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryConnectionsResponse;
                    fromJSON(object: any): _1052.QueryConnectionsResponse;
                    toJSON(message: _1052.QueryConnectionsResponse): unknown;
                    fromPartial<I_11 extends {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _1048.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string;
                        };
                        height?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                    } & {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _1048.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string;
                        }[] & ({
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _1048.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string;
                        } & {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[] & ({
                                identifier?: string;
                                features?: string[];
                            } & {
                                identifier?: string;
                                features?: string[] & string[] & Record<Exclude<keyof I_11["connections"][number]["versions"][number]["features"], keyof string[]>, never>;
                            } & Record<Exclude<keyof I_11["connections"][number]["versions"][number], keyof _1048.Version>, never>)[] & Record<Exclude<keyof I_11["connections"][number]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _1048.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            } & {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                } & {
                                    keyPrefix?: Uint8Array;
                                } & Record<Exclude<keyof I_11["connections"][number]["counterparty"]["prefix"], "keyPrefix">, never>;
                            } & Record<Exclude<keyof I_11["connections"][number]["counterparty"], keyof _1048.Counterparty>, never>;
                            delayPeriod?: string;
                        } & Record<Exclude<keyof I_11["connections"][number], keyof _1048.IdentifiedConnection>, never>)[] & Record<Exclude<keyof I_11["connections"], keyof {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _1048.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string;
                        } & {
                            nextKey?: Uint8Array;
                            total?: string;
                        } & Record<Exclude<keyof I_11["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                        height?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_11["height"], keyof _1032.Height>, never>;
                    } & Record<Exclude<keyof I_11, keyof _1052.QueryConnectionsResponse>, never>>(object: I_11): _1052.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _1052.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryClientConnectionsRequest;
                    fromJSON(object: any): _1052.QueryClientConnectionsRequest;
                    toJSON(message: _1052.QueryClientConnectionsRequest): unknown;
                    fromPartial<I_12 extends {
                        clientId?: string;
                    } & {
                        clientId?: string;
                    } & Record<Exclude<keyof I_12, "clientId">, never>>(object: I_12): _1052.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _1052.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryClientConnectionsResponse;
                    fromJSON(object: any): _1052.QueryClientConnectionsResponse;
                    toJSON(message: _1052.QueryClientConnectionsResponse): unknown;
                    fromPartial<I_13 extends {
                        connectionPaths?: string[];
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                    } & {
                        connectionPaths?: string[] & string[] & Record<Exclude<keyof I_13["connectionPaths"], keyof string[]>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_13["proofHeight"], keyof _1032.Height>, never>;
                    } & Record<Exclude<keyof I_13, keyof _1052.QueryClientConnectionsResponse>, never>>(object: I_13): _1052.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _1052.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _1052.QueryConnectionClientStateRequest;
                    toJSON(message: _1052.QueryConnectionClientStateRequest): unknown;
                    fromPartial<I_14 extends {
                        connectionId?: string;
                    } & {
                        connectionId?: string;
                    } & Record<Exclude<keyof I_14, "connectionId">, never>>(object: I_14): _1052.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _1052.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _1052.QueryConnectionClientStateResponse;
                    toJSON(message: _1052.QueryConnectionClientStateResponse): unknown;
                    fromPartial<I_15 extends {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                    } & {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_15["identifiedClientState"]["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_15["identifiedClientState"], keyof _1032.IdentifiedClientState>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_15["proofHeight"], keyof _1032.Height>, never>;
                    } & Record<Exclude<keyof I_15, keyof _1052.QueryConnectionClientStateResponse>, never>>(object: I_15): _1052.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _1052.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _1052.QueryConnectionConsensusStateRequest;
                    toJSON(message: _1052.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial<I_16 extends {
                        connectionId?: string;
                        revisionNumber?: string;
                        revisionHeight?: string;
                    } & {
                        connectionId?: string;
                        revisionNumber?: string;
                        revisionHeight?: string;
                    } & Record<Exclude<keyof I_16, keyof _1052.QueryConnectionConsensusStateRequest>, never>>(object: I_16): _1052.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _1052.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _1052.QueryConnectionConsensusStateResponse;
                    toJSON(message: _1052.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial<I_17 extends {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                    } & {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_17["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_17["proofHeight"], keyof _1032.Height>, never>;
                    } & Record<Exclude<keyof I_17, keyof _1052.QueryConnectionConsensusStateResponse>, never>>(object: I_17): _1052.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _1050.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1050.GenesisState;
                    fromJSON(object: any): _1050.GenesisState;
                    toJSON(message: _1050.GenesisState): unknown;
                    fromPartial<I_18 extends {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _1048.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string;
                        }[];
                        clientConnectionPaths?: {
                            clientId?: string;
                            paths?: string[];
                        }[];
                        nextConnectionSequence?: string;
                        params?: {
                            maxExpectedTimePerBlock?: string;
                        };
                    } & {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _1048.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string;
                        }[] & ({
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _1048.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string;
                        } & {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[] & ({
                                identifier?: string;
                                features?: string[];
                            } & {
                                identifier?: string;
                                features?: string[] & string[] & Record<Exclude<keyof I_18["connections"][number]["versions"][number]["features"], keyof string[]>, never>;
                            } & Record<Exclude<keyof I_18["connections"][number]["versions"][number], keyof _1048.Version>, never>)[] & Record<Exclude<keyof I_18["connections"][number]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _1048.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            } & {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                } & {
                                    keyPrefix?: Uint8Array;
                                } & Record<Exclude<keyof I_18["connections"][number]["counterparty"]["prefix"], "keyPrefix">, never>;
                            } & Record<Exclude<keyof I_18["connections"][number]["counterparty"], keyof _1048.Counterparty>, never>;
                            delayPeriod?: string;
                        } & Record<Exclude<keyof I_18["connections"][number], keyof _1048.IdentifiedConnection>, never>)[] & Record<Exclude<keyof I_18["connections"], keyof {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _1048.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string;
                        }[]>, never>;
                        clientConnectionPaths?: {
                            clientId?: string;
                            paths?: string[];
                        }[] & ({
                            clientId?: string;
                            paths?: string[];
                        } & {
                            clientId?: string;
                            paths?: string[] & string[] & Record<Exclude<keyof I_18["clientConnectionPaths"][number]["paths"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_18["clientConnectionPaths"][number], keyof _1048.ConnectionPaths>, never>)[] & Record<Exclude<keyof I_18["clientConnectionPaths"], keyof {
                            clientId?: string;
                            paths?: string[];
                        }[]>, never>;
                        nextConnectionSequence?: string;
                        params?: {
                            maxExpectedTimePerBlock?: string;
                        } & {
                            maxExpectedTimePerBlock?: string;
                        } & Record<Exclude<keyof I_18["params"], "maxExpectedTimePerBlock">, never>;
                    } & Record<Exclude<keyof I_18, keyof _1050.GenesisState>, never>>(object: I_18): _1050.GenesisState;
                };
                stateFromJSON(object: any): _1048.State;
                stateToJSON(object: _1048.State): string;
                State: typeof _1048.State;
                ConnectionEnd: {
                    encode(message: _1048.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1048.ConnectionEnd;
                    fromJSON(object: any): _1048.ConnectionEnd;
                    toJSON(message: _1048.ConnectionEnd): unknown;
                    fromPartial<I_19 extends {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _1048.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: string;
                    } & {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[] & ({
                            identifier?: string;
                            features?: string[];
                        } & {
                            identifier?: string;
                            features?: string[] & string[] & Record<Exclude<keyof I_19["versions"][number]["features"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_19["versions"][number], keyof _1048.Version>, never>)[] & Record<Exclude<keyof I_19["versions"], keyof {
                            identifier?: string;
                            features?: string[];
                        }[]>, never>;
                        state?: _1048.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            } & {
                                keyPrefix?: Uint8Array;
                            } & Record<Exclude<keyof I_19["counterparty"]["prefix"], "keyPrefix">, never>;
                        } & Record<Exclude<keyof I_19["counterparty"], keyof _1048.Counterparty>, never>;
                        delayPeriod?: string;
                    } & Record<Exclude<keyof I_19, keyof _1048.ConnectionEnd>, never>>(object: I_19): _1048.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _1048.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1048.IdentifiedConnection;
                    fromJSON(object: any): _1048.IdentifiedConnection;
                    toJSON(message: _1048.IdentifiedConnection): unknown;
                    fromPartial<I_20 extends {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _1048.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: string;
                    } & {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[] & ({
                            identifier?: string;
                            features?: string[];
                        } & {
                            identifier?: string;
                            features?: string[] & string[] & Record<Exclude<keyof I_20["versions"][number]["features"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_20["versions"][number], keyof _1048.Version>, never>)[] & Record<Exclude<keyof I_20["versions"], keyof {
                            identifier?: string;
                            features?: string[];
                        }[]>, never>;
                        state?: _1048.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            } & {
                                keyPrefix?: Uint8Array;
                            } & Record<Exclude<keyof I_20["counterparty"]["prefix"], "keyPrefix">, never>;
                        } & Record<Exclude<keyof I_20["counterparty"], keyof _1048.Counterparty>, never>;
                        delayPeriod?: string;
                    } & Record<Exclude<keyof I_20, keyof _1048.IdentifiedConnection>, never>>(object: I_20): _1048.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _1048.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1048.Counterparty;
                    fromJSON(object: any): _1048.Counterparty;
                    toJSON(message: _1048.Counterparty): unknown;
                    fromPartial<I_21 extends {
                        clientId?: string;
                        connectionId?: string;
                        prefix?: {
                            keyPrefix?: Uint8Array;
                        };
                    } & {
                        clientId?: string;
                        connectionId?: string;
                        prefix?: {
                            keyPrefix?: Uint8Array;
                        } & {
                            keyPrefix?: Uint8Array;
                        } & Record<Exclude<keyof I_21["prefix"], "keyPrefix">, never>;
                    } & Record<Exclude<keyof I_21, keyof _1048.Counterparty>, never>>(object: I_21): _1048.Counterparty;
                };
                ClientPaths: {
                    encode(message: _1048.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1048.ClientPaths;
                    fromJSON(object: any): _1048.ClientPaths;
                    toJSON(message: _1048.ClientPaths): unknown;
                    fromPartial<I_22 extends {
                        paths?: string[];
                    } & {
                        paths?: string[] & string[] & Record<Exclude<keyof I_22["paths"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_22, "paths">, never>>(object: I_22): _1048.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _1048.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1048.ConnectionPaths;
                    fromJSON(object: any): _1048.ConnectionPaths;
                    toJSON(message: _1048.ConnectionPaths): unknown;
                    fromPartial<I_23 extends {
                        clientId?: string;
                        paths?: string[];
                    } & {
                        clientId?: string;
                        paths?: string[] & string[] & Record<Exclude<keyof I_23["paths"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_23, keyof _1048.ConnectionPaths>, never>>(object: I_23): _1048.ConnectionPaths;
                };
                Version: {
                    encode(message: _1048.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1048.Version;
                    fromJSON(object: any): _1048.Version;
                    toJSON(message: _1048.Version): unknown;
                    fromPartial<I_24 extends {
                        identifier?: string;
                        features?: string[];
                    } & {
                        identifier?: string;
                        features?: string[] & string[] & Record<Exclude<keyof I_24["features"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_24, keyof _1048.Version>, never>>(object: I_24): _1048.Version;
                };
                Params: {
                    encode(message: _1048.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1048.Params;
                    fromJSON(object: any): _1048.Params;
                    toJSON(message: _1048.Params): unknown;
                    fromPartial<I_25 extends {
                        maxExpectedTimePerBlock?: string;
                    } & {
                        maxExpectedTimePerBlock?: string;
                    } & Record<Exclude<keyof I_25, "maxExpectedTimePerBlock">, never>>(object: I_25): _1048.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryAppVersionRequest: {
                    encode(message: _1062.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1062.QueryAppVersionRequest;
                    fromJSON(object: any): _1062.QueryAppVersionRequest;
                    toJSON(message: _1062.QueryAppVersionRequest): unknown;
                    fromPartial<I extends {
                        portId?: string;
                        connectionId?: string;
                        ordering?: _1018.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        proposedVersion?: string;
                    } & {
                        portId?: string;
                        connectionId?: string;
                        ordering?: _1018.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        } & {
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I["counterparty"], keyof _1018.Counterparty>, never>;
                        proposedVersion?: string;
                    } & Record<Exclude<keyof I, keyof _1062.QueryAppVersionRequest>, never>>(object: I): _1062.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _1062.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1062.QueryAppVersionResponse;
                    fromJSON(object: any): _1062.QueryAppVersionResponse;
                    toJSON(message: _1062.QueryAppVersionResponse): unknown;
                    fromPartial<I_1 extends {
                        portId?: string;
                        version?: string;
                    } & {
                        portId?: string;
                        version?: string;
                    } & Record<Exclude<keyof I_1, keyof _1062.QueryAppVersionResponse>, never>>(object: I_1): _1062.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _1064.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1064.GenesisState;
                    fromJSON(object: any): _1064.GenesisState;
                    toJSON(message: _1064.GenesisState): unknown;
                    fromPartial<I extends {
                        clientGenesis?: {
                            clients?: {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                            clientsConsensus?: {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: string;
                                        revisionHeight?: string;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[];
                            clientsMetadata?: {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[];
                            params?: {
                                allowedClients?: string[];
                            };
                            createLocalhost?: boolean;
                            nextClientSequence?: string;
                        };
                        connectionGenesis?: {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _1048.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: string;
                            }[];
                            clientConnectionPaths?: {
                                clientId?: string;
                                paths?: string[];
                            }[];
                            nextConnectionSequence?: string;
                            params?: {
                                maxExpectedTimePerBlock?: string;
                            };
                        };
                        channelGenesis?: {
                            channels?: {
                                state?: _1018.State;
                                ordering?: _1018.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[];
                            acknowledgements?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                                data?: Uint8Array;
                            }[];
                            commitments?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                                data?: Uint8Array;
                            }[];
                            receipts?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                                data?: Uint8Array;
                            }[];
                            sendSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                            }[];
                            recvSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                            }[];
                            ackSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                            }[];
                            nextChannelSequence?: string;
                        };
                    } & {
                        clientGenesis?: {
                            clients?: {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                            clientsConsensus?: {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: string;
                                        revisionHeight?: string;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[];
                            clientsMetadata?: {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[];
                            params?: {
                                allowedClients?: string[];
                            };
                            createLocalhost?: boolean;
                            nextClientSequence?: string;
                        } & {
                            clients?: {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[] & ({
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            } & {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                } & {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                } & Record<Exclude<keyof I["clientGenesis"]["clients"][number]["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                            } & Record<Exclude<keyof I["clientGenesis"]["clients"][number], keyof _1032.IdentifiedClientState>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clients"], keyof {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[]>, never>;
                            clientsConsensus?: {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: string;
                                        revisionHeight?: string;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[] & ({
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: string;
                                        revisionHeight?: string;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            } & {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: string;
                                        revisionHeight?: string;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[] & ({
                                    height?: {
                                        revisionNumber?: string;
                                        revisionHeight?: string;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                } & {
                                    height?: {
                                        revisionNumber?: string;
                                        revisionHeight?: string;
                                    } & {
                                        revisionNumber?: string;
                                        revisionHeight?: string;
                                    } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["height"], keyof _1032.Height>, never>;
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    } & {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                                } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number], keyof _1032.ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"], keyof {
                                    height?: {
                                        revisionNumber?: string;
                                        revisionHeight?: string;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[]>, never>;
                            } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number], keyof _1032.ClientConsensusStates>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"], keyof {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: string;
                                        revisionHeight?: string;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[]>, never>;
                            clientsMetadata?: {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[] & ({
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            } & {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[] & ({
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                } & {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                } & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number]["clientMetadata"][number], keyof _1034.GenesisMetadata>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number]["clientMetadata"], keyof {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[]>, never>;
                            } & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number], keyof _1034.IdentifiedGenesisMetadata>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"], keyof {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[]>, never>;
                            params?: {
                                allowedClients?: string[];
                            } & {
                                allowedClients?: string[] & string[] & Record<Exclude<keyof I["clientGenesis"]["params"]["allowedClients"], keyof string[]>, never>;
                            } & Record<Exclude<keyof I["clientGenesis"]["params"], "allowedClients">, never>;
                            createLocalhost?: boolean;
                            nextClientSequence?: string;
                        } & Record<Exclude<keyof I["clientGenesis"], keyof _1034.GenesisState>, never>;
                        connectionGenesis?: {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _1048.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: string;
                            }[];
                            clientConnectionPaths?: {
                                clientId?: string;
                                paths?: string[];
                            }[];
                            nextConnectionSequence?: string;
                            params?: {
                                maxExpectedTimePerBlock?: string;
                            };
                        } & {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _1048.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: string;
                            }[] & ({
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _1048.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: string;
                            } & {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[] & ({
                                    identifier?: string;
                                    features?: string[];
                                } & {
                                    identifier?: string;
                                    features?: string[] & string[] & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"][number]["features"], keyof string[]>, never>;
                                } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"][number], keyof _1048.Version>, never>)[] & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"], keyof {
                                    identifier?: string;
                                    features?: string[];
                                }[]>, never>;
                                state?: _1048.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                } & {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    } & {
                                        keyPrefix?: Uint8Array;
                                    } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["counterparty"]["prefix"], "keyPrefix">, never>;
                                } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["counterparty"], keyof _1048.Counterparty>, never>;
                                delayPeriod?: string;
                            } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number], keyof _1048.IdentifiedConnection>, never>)[] & Record<Exclude<keyof I["connectionGenesis"]["connections"], keyof {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _1048.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: string;
                            }[]>, never>;
                            clientConnectionPaths?: {
                                clientId?: string;
                                paths?: string[];
                            }[] & ({
                                clientId?: string;
                                paths?: string[];
                            } & {
                                clientId?: string;
                                paths?: string[] & string[] & Record<Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"][number]["paths"], keyof string[]>, never>;
                            } & Record<Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"][number], keyof _1048.ConnectionPaths>, never>)[] & Record<Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"], keyof {
                                clientId?: string;
                                paths?: string[];
                            }[]>, never>;
                            nextConnectionSequence?: string;
                            params?: {
                                maxExpectedTimePerBlock?: string;
                            } & {
                                maxExpectedTimePerBlock?: string;
                            } & Record<Exclude<keyof I["connectionGenesis"]["params"], "maxExpectedTimePerBlock">, never>;
                        } & Record<Exclude<keyof I["connectionGenesis"], keyof _1050.GenesisState>, never>;
                        channelGenesis?: {
                            channels?: {
                                state?: _1018.State;
                                ordering?: _1018.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[];
                            acknowledgements?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                                data?: Uint8Array;
                            }[];
                            commitments?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                                data?: Uint8Array;
                            }[];
                            receipts?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                                data?: Uint8Array;
                            }[];
                            sendSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                            }[];
                            recvSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                            }[];
                            ackSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                            }[];
                            nextChannelSequence?: string;
                        } & {
                            channels?: {
                                state?: _1018.State;
                                ordering?: _1018.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[] & ({
                                state?: _1018.State;
                                ordering?: _1018.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            } & {
                                state?: _1018.State;
                                ordering?: _1018.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                } & {
                                    portId?: string;
                                    channelId?: string;
                                } & Record<Exclude<keyof I["channelGenesis"]["channels"][number]["counterparty"], keyof _1018.Counterparty>, never>;
                                connectionHops?: string[] & string[] & Record<Exclude<keyof I["channelGenesis"]["channels"][number]["connectionHops"], keyof string[]>, never>;
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I["channelGenesis"]["channels"][number], keyof _1018.IdentifiedChannel>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["channels"], keyof {
                                state?: _1018.State;
                                ordering?: _1018.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[]>, never>;
                            acknowledgements?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                                data?: Uint8Array;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                                data?: Uint8Array;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                                data?: Uint8Array;
                            } & Record<Exclude<keyof I["channelGenesis"]["acknowledgements"][number], keyof _1018.PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["acknowledgements"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                                data?: Uint8Array;
                            }[]>, never>;
                            commitments?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                                data?: Uint8Array;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                                data?: Uint8Array;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                                data?: Uint8Array;
                            } & Record<Exclude<keyof I["channelGenesis"]["commitments"][number], keyof _1018.PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["commitments"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                                data?: Uint8Array;
                            }[]>, never>;
                            receipts?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                                data?: Uint8Array;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                                data?: Uint8Array;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                                data?: Uint8Array;
                            } & Record<Exclude<keyof I["channelGenesis"]["receipts"][number], keyof _1018.PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["receipts"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                                data?: Uint8Array;
                            }[]>, never>;
                            sendSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                            } & Record<Exclude<keyof I["channelGenesis"]["sendSequences"][number], keyof _1020.PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["sendSequences"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                            }[]>, never>;
                            recvSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                            } & Record<Exclude<keyof I["channelGenesis"]["recvSequences"][number], keyof _1020.PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["recvSequences"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                            }[]>, never>;
                            ackSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                            } & Record<Exclude<keyof I["channelGenesis"]["ackSequences"][number], keyof _1020.PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["ackSequences"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: string;
                            }[]>, never>;
                            nextChannelSequence?: string;
                        } & Record<Exclude<keyof I["channelGenesis"], keyof _1020.GenesisState>, never>;
                    } & Record<Exclude<keyof I, keyof _1064.GenesisState>, never>>(object: I): _1064.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _1066.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1066.ClientState;
                    fromJSON(object: any): _1066.ClientState;
                    toJSON(message: _1066.ClientState): unknown;
                    fromPartial<I extends {
                        chainId?: string;
                        height?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                    } & {
                        chainId?: string;
                        height?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I["height"], keyof _1032.Height>, never>;
                    } & Record<Exclude<keyof I, keyof _1066.ClientState>, never>>(object: I): _1066.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _1068.DataType;
                dataTypeToJSON(object: _1068.DataType): string;
                DataType: typeof _1068.DataType;
                ClientState: {
                    encode(message: _1068.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.ClientState;
                    fromJSON(object: any): _1068.ClientState;
                    toJSON(message: _1068.ClientState): unknown;
                    fromPartial<I extends {
                        sequence?: string;
                        frozenSequence?: string;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: string;
                        };
                        allowUpdateAfterProposal?: boolean;
                    } & {
                        sequence?: string;
                        frozenSequence?: string;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: string;
                        } & {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I["consensusState"]["publicKey"], keyof import("../google/protobuf/any").Any>, never>;
                            diversifier?: string;
                            timestamp?: string;
                        } & Record<Exclude<keyof I["consensusState"], keyof _1068.ConsensusState>, never>;
                        allowUpdateAfterProposal?: boolean;
                    } & Record<Exclude<keyof I, keyof _1068.ClientState>, never>>(object: I): _1068.ClientState;
                };
                ConsensusState: {
                    encode(message: _1068.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.ConsensusState;
                    fromJSON(object: any): _1068.ConsensusState;
                    toJSON(message: _1068.ConsensusState): unknown;
                    fromPartial<I_1 extends {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: string;
                    } & {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_1["publicKey"], keyof import("../google/protobuf/any").Any>, never>;
                        diversifier?: string;
                        timestamp?: string;
                    } & Record<Exclude<keyof I_1, keyof _1068.ConsensusState>, never>>(object: I_1): _1068.ConsensusState;
                };
                Header: {
                    encode(message: _1068.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.Header;
                    fromJSON(object: any): _1068.Header;
                    toJSON(message: _1068.Header): unknown;
                    fromPartial<I_2 extends {
                        sequence?: string;
                        timestamp?: string;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    } & {
                        sequence?: string;
                        timestamp?: string;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_2["newPublicKey"], keyof import("../google/protobuf/any").Any>, never>;
                        newDiversifier?: string;
                    } & Record<Exclude<keyof I_2, keyof _1068.Header>, never>>(object: I_2): _1068.Header;
                };
                Misbehaviour: {
                    encode(message: _1068.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.Misbehaviour;
                    fromJSON(object: any): _1068.Misbehaviour;
                    toJSON(message: _1068.Misbehaviour): unknown;
                    fromPartial<I_3 extends {
                        clientId?: string;
                        sequence?: string;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _1068.DataType;
                            data?: Uint8Array;
                            timestamp?: string;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _1068.DataType;
                            data?: Uint8Array;
                            timestamp?: string;
                        };
                    } & {
                        clientId?: string;
                        sequence?: string;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _1068.DataType;
                            data?: Uint8Array;
                            timestamp?: string;
                        } & {
                            signature?: Uint8Array;
                            dataType?: _1068.DataType;
                            data?: Uint8Array;
                            timestamp?: string;
                        } & Record<Exclude<keyof I_3["signatureOne"], keyof _1068.SignatureAndData>, never>;
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _1068.DataType;
                            data?: Uint8Array;
                            timestamp?: string;
                        } & {
                            signature?: Uint8Array;
                            dataType?: _1068.DataType;
                            data?: Uint8Array;
                            timestamp?: string;
                        } & Record<Exclude<keyof I_3["signatureTwo"], keyof _1068.SignatureAndData>, never>;
                    } & Record<Exclude<keyof I_3, keyof _1068.Misbehaviour>, never>>(object: I_3): _1068.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _1068.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.SignatureAndData;
                    fromJSON(object: any): _1068.SignatureAndData;
                    toJSON(message: _1068.SignatureAndData): unknown;
                    fromPartial<I_4 extends {
                        signature?: Uint8Array;
                        dataType?: _1068.DataType;
                        data?: Uint8Array;
                        timestamp?: string;
                    } & {
                        signature?: Uint8Array;
                        dataType?: _1068.DataType;
                        data?: Uint8Array;
                        timestamp?: string;
                    } & Record<Exclude<keyof I_4, keyof _1068.SignatureAndData>, never>>(object: I_4): _1068.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _1068.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.TimestampedSignatureData;
                    fromJSON(object: any): _1068.TimestampedSignatureData;
                    toJSON(message: _1068.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends {
                        signatureData?: Uint8Array;
                        timestamp?: string;
                    } & {
                        signatureData?: Uint8Array;
                        timestamp?: string;
                    } & Record<Exclude<keyof I_5, keyof _1068.TimestampedSignatureData>, never>>(object: I_5): _1068.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _1068.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.SignBytes;
                    fromJSON(object: any): _1068.SignBytes;
                    toJSON(message: _1068.SignBytes): unknown;
                    fromPartial<I_6 extends {
                        sequence?: string;
                        timestamp?: string;
                        diversifier?: string;
                        dataType?: _1068.DataType;
                        data?: Uint8Array;
                    } & {
                        sequence?: string;
                        timestamp?: string;
                        diversifier?: string;
                        dataType?: _1068.DataType;
                        data?: Uint8Array;
                    } & Record<Exclude<keyof I_6, keyof _1068.SignBytes>, never>>(object: I_6): _1068.SignBytes;
                };
                HeaderData: {
                    encode(message: _1068.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.HeaderData;
                    fromJSON(object: any): _1068.HeaderData;
                    toJSON(message: _1068.HeaderData): unknown;
                    fromPartial<I_7 extends {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    } & {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_7["newPubKey"], keyof import("../google/protobuf/any").Any>, never>;
                        newDiversifier?: string;
                    } & Record<Exclude<keyof I_7, keyof _1068.HeaderData>, never>>(object: I_7): _1068.HeaderData;
                };
                ClientStateData: {
                    encode(message: _1068.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.ClientStateData;
                    fromJSON(object: any): _1068.ClientStateData;
                    toJSON(message: _1068.ClientStateData): unknown;
                    fromPartial<I_8 extends {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_8["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_8, keyof _1068.ClientStateData>, never>>(object: I_8): _1068.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _1068.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.ConsensusStateData;
                    fromJSON(object: any): _1068.ConsensusStateData;
                    toJSON(message: _1068.ConsensusStateData): unknown;
                    fromPartial<I_9 extends {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_9["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_9, keyof _1068.ConsensusStateData>, never>>(object: I_9): _1068.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _1068.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.ConnectionStateData;
                    fromJSON(object: any): _1068.ConnectionStateData;
                    toJSON(message: _1068.ConnectionStateData): unknown;
                    fromPartial<I_10 extends {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _1048.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string;
                        };
                    } & {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _1048.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string;
                        } & {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[] & ({
                                identifier?: string;
                                features?: string[];
                            } & {
                                identifier?: string;
                                features?: string[] & string[] & Record<Exclude<keyof I_10["connection"]["versions"][number]["features"], keyof string[]>, never>;
                            } & Record<Exclude<keyof I_10["connection"]["versions"][number], keyof _1048.Version>, never>)[] & Record<Exclude<keyof I_10["connection"]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _1048.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            } & {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                } & {
                                    keyPrefix?: Uint8Array;
                                } & Record<Exclude<keyof I_10["connection"]["counterparty"]["prefix"], "keyPrefix">, never>;
                            } & Record<Exclude<keyof I_10["connection"]["counterparty"], keyof _1048.Counterparty>, never>;
                            delayPeriod?: string;
                        } & Record<Exclude<keyof I_10["connection"], keyof _1048.ConnectionEnd>, never>;
                    } & Record<Exclude<keyof I_10, keyof _1068.ConnectionStateData>, never>>(object: I_10): _1068.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _1068.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.ChannelStateData;
                    fromJSON(object: any): _1068.ChannelStateData;
                    toJSON(message: _1068.ChannelStateData): unknown;
                    fromPartial<I_11 extends {
                        path?: Uint8Array;
                        channel?: {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    } & {
                        path?: Uint8Array;
                        channel?: {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_11["channel"]["counterparty"], keyof _1018.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_11["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I_11["channel"], keyof _1018.Channel>, never>;
                    } & Record<Exclude<keyof I_11, keyof _1068.ChannelStateData>, never>>(object: I_11): _1068.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _1068.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.PacketCommitmentData;
                    fromJSON(object: any): _1068.PacketCommitmentData;
                    toJSON(message: _1068.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    } & Record<Exclude<keyof I_12, keyof _1068.PacketCommitmentData>, never>>(object: I_12): _1068.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _1068.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.PacketAcknowledgementData;
                    fromJSON(object: any): _1068.PacketAcknowledgementData;
                    toJSON(message: _1068.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    } & Record<Exclude<keyof I_13, keyof _1068.PacketAcknowledgementData>, never>>(object: I_13): _1068.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _1068.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.PacketReceiptAbsenceData;
                    fromJSON(object: any): _1068.PacketReceiptAbsenceData;
                    toJSON(message: _1068.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends {
                        path?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                    } & Record<Exclude<keyof I_14, "path">, never>>(object: I_14): _1068.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _1068.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.NextSequenceRecvData;
                    fromJSON(object: any): _1068.NextSequenceRecvData;
                    toJSON(message: _1068.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends {
                        path?: Uint8Array;
                        nextSeqRecv?: string;
                    } & {
                        path?: Uint8Array;
                        nextSeqRecv?: string;
                    } & Record<Exclude<keyof I_15, keyof _1068.NextSequenceRecvData>, never>>(object: I_15): _1068.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _1070.DataType;
                dataTypeToJSON(object: _1070.DataType): string;
                DataType: typeof _1070.DataType;
                ClientState: {
                    encode(message: _1070.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.ClientState;
                    fromJSON(object: any): _1070.ClientState;
                    toJSON(message: _1070.ClientState): unknown;
                    fromPartial<I extends {
                        sequence?: string;
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: string;
                        };
                        allowUpdateAfterProposal?: boolean;
                    } & {
                        sequence?: string;
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: string;
                        } & {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I["consensusState"]["publicKey"], keyof import("../google/protobuf/any").Any>, never>;
                            diversifier?: string;
                            timestamp?: string;
                        } & Record<Exclude<keyof I["consensusState"], keyof _1070.ConsensusState>, never>;
                        allowUpdateAfterProposal?: boolean;
                    } & Record<Exclude<keyof I, keyof _1070.ClientState>, never>>(object: I): _1070.ClientState;
                };
                ConsensusState: {
                    encode(message: _1070.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.ConsensusState;
                    fromJSON(object: any): _1070.ConsensusState;
                    toJSON(message: _1070.ConsensusState): unknown;
                    fromPartial<I_1 extends {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: string;
                    } & {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_1["publicKey"], keyof import("../google/protobuf/any").Any>, never>;
                        diversifier?: string;
                        timestamp?: string;
                    } & Record<Exclude<keyof I_1, keyof _1070.ConsensusState>, never>>(object: I_1): _1070.ConsensusState;
                };
                Header: {
                    encode(message: _1070.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.Header;
                    fromJSON(object: any): _1070.Header;
                    toJSON(message: _1070.Header): unknown;
                    fromPartial<I_2 extends {
                        sequence?: string;
                        timestamp?: string;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    } & {
                        sequence?: string;
                        timestamp?: string;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_2["newPublicKey"], keyof import("../google/protobuf/any").Any>, never>;
                        newDiversifier?: string;
                    } & Record<Exclude<keyof I_2, keyof _1070.Header>, never>>(object: I_2): _1070.Header;
                };
                Misbehaviour: {
                    encode(message: _1070.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.Misbehaviour;
                    fromJSON(object: any): _1070.Misbehaviour;
                    toJSON(message: _1070.Misbehaviour): unknown;
                    fromPartial<I_3 extends {
                        clientId?: string;
                        sequence?: string;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _1070.DataType;
                            data?: Uint8Array;
                            timestamp?: string;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _1070.DataType;
                            data?: Uint8Array;
                            timestamp?: string;
                        };
                    } & {
                        clientId?: string;
                        sequence?: string;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _1070.DataType;
                            data?: Uint8Array;
                            timestamp?: string;
                        } & {
                            signature?: Uint8Array;
                            dataType?: _1070.DataType;
                            data?: Uint8Array;
                            timestamp?: string;
                        } & Record<Exclude<keyof I_3["signatureOne"], keyof _1070.SignatureAndData>, never>;
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _1070.DataType;
                            data?: Uint8Array;
                            timestamp?: string;
                        } & {
                            signature?: Uint8Array;
                            dataType?: _1070.DataType;
                            data?: Uint8Array;
                            timestamp?: string;
                        } & Record<Exclude<keyof I_3["signatureTwo"], keyof _1070.SignatureAndData>, never>;
                    } & Record<Exclude<keyof I_3, keyof _1070.Misbehaviour>, never>>(object: I_3): _1070.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _1070.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.SignatureAndData;
                    fromJSON(object: any): _1070.SignatureAndData;
                    toJSON(message: _1070.SignatureAndData): unknown;
                    fromPartial<I_4 extends {
                        signature?: Uint8Array;
                        dataType?: _1070.DataType;
                        data?: Uint8Array;
                        timestamp?: string;
                    } & {
                        signature?: Uint8Array;
                        dataType?: _1070.DataType;
                        data?: Uint8Array;
                        timestamp?: string;
                    } & Record<Exclude<keyof I_4, keyof _1070.SignatureAndData>, never>>(object: I_4): _1070.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _1070.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.TimestampedSignatureData;
                    fromJSON(object: any): _1070.TimestampedSignatureData;
                    toJSON(message: _1070.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends {
                        signatureData?: Uint8Array;
                        timestamp?: string;
                    } & {
                        signatureData?: Uint8Array;
                        timestamp?: string;
                    } & Record<Exclude<keyof I_5, keyof _1070.TimestampedSignatureData>, never>>(object: I_5): _1070.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _1070.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.SignBytes;
                    fromJSON(object: any): _1070.SignBytes;
                    toJSON(message: _1070.SignBytes): unknown;
                    fromPartial<I_6 extends {
                        sequence?: string;
                        timestamp?: string;
                        diversifier?: string;
                        dataType?: _1070.DataType;
                        data?: Uint8Array;
                    } & {
                        sequence?: string;
                        timestamp?: string;
                        diversifier?: string;
                        dataType?: _1070.DataType;
                        data?: Uint8Array;
                    } & Record<Exclude<keyof I_6, keyof _1070.SignBytes>, never>>(object: I_6): _1070.SignBytes;
                };
                HeaderData: {
                    encode(message: _1070.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.HeaderData;
                    fromJSON(object: any): _1070.HeaderData;
                    toJSON(message: _1070.HeaderData): unknown;
                    fromPartial<I_7 extends {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    } & {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_7["newPubKey"], keyof import("../google/protobuf/any").Any>, never>;
                        newDiversifier?: string;
                    } & Record<Exclude<keyof I_7, keyof _1070.HeaderData>, never>>(object: I_7): _1070.HeaderData;
                };
                ClientStateData: {
                    encode(message: _1070.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.ClientStateData;
                    fromJSON(object: any): _1070.ClientStateData;
                    toJSON(message: _1070.ClientStateData): unknown;
                    fromPartial<I_8 extends {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_8["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_8, keyof _1070.ClientStateData>, never>>(object: I_8): _1070.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _1070.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.ConsensusStateData;
                    fromJSON(object: any): _1070.ConsensusStateData;
                    toJSON(message: _1070.ConsensusStateData): unknown;
                    fromPartial<I_9 extends {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_9["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_9, keyof _1070.ConsensusStateData>, never>>(object: I_9): _1070.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _1070.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.ConnectionStateData;
                    fromJSON(object: any): _1070.ConnectionStateData;
                    toJSON(message: _1070.ConnectionStateData): unknown;
                    fromPartial<I_10 extends {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _1048.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string;
                        };
                    } & {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _1048.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string;
                        } & {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[] & ({
                                identifier?: string;
                                features?: string[];
                            } & {
                                identifier?: string;
                                features?: string[] & string[] & Record<Exclude<keyof I_10["connection"]["versions"][number]["features"], keyof string[]>, never>;
                            } & Record<Exclude<keyof I_10["connection"]["versions"][number], keyof _1048.Version>, never>)[] & Record<Exclude<keyof I_10["connection"]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _1048.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            } & {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                } & {
                                    keyPrefix?: Uint8Array;
                                } & Record<Exclude<keyof I_10["connection"]["counterparty"]["prefix"], "keyPrefix">, never>;
                            } & Record<Exclude<keyof I_10["connection"]["counterparty"], keyof _1048.Counterparty>, never>;
                            delayPeriod?: string;
                        } & Record<Exclude<keyof I_10["connection"], keyof _1048.ConnectionEnd>, never>;
                    } & Record<Exclude<keyof I_10, keyof _1070.ConnectionStateData>, never>>(object: I_10): _1070.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _1070.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.ChannelStateData;
                    fromJSON(object: any): _1070.ChannelStateData;
                    toJSON(message: _1070.ChannelStateData): unknown;
                    fromPartial<I_11 extends {
                        path?: Uint8Array;
                        channel?: {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    } & {
                        path?: Uint8Array;
                        channel?: {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _1018.State;
                            ordering?: _1018.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_11["channel"]["counterparty"], keyof _1018.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_11["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I_11["channel"], keyof _1018.Channel>, never>;
                    } & Record<Exclude<keyof I_11, keyof _1070.ChannelStateData>, never>>(object: I_11): _1070.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _1070.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.PacketCommitmentData;
                    fromJSON(object: any): _1070.PacketCommitmentData;
                    toJSON(message: _1070.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    } & Record<Exclude<keyof I_12, keyof _1070.PacketCommitmentData>, never>>(object: I_12): _1070.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _1070.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.PacketAcknowledgementData;
                    fromJSON(object: any): _1070.PacketAcknowledgementData;
                    toJSON(message: _1070.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    } & Record<Exclude<keyof I_13, keyof _1070.PacketAcknowledgementData>, never>>(object: I_13): _1070.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _1070.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.PacketReceiptAbsenceData;
                    fromJSON(object: any): _1070.PacketReceiptAbsenceData;
                    toJSON(message: _1070.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends {
                        path?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                    } & Record<Exclude<keyof I_14, "path">, never>>(object: I_14): _1070.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _1070.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.NextSequenceRecvData;
                    fromJSON(object: any): _1070.NextSequenceRecvData;
                    toJSON(message: _1070.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends {
                        path?: Uint8Array;
                        nextSeqRecv?: string;
                    } & {
                        path?: Uint8Array;
                        nextSeqRecv?: string;
                    } & Record<Exclude<keyof I_15, keyof _1070.NextSequenceRecvData>, never>>(object: I_15): _1070.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _1072.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1072.ClientState;
                    fromJSON(object: any): _1072.ClientState;
                    toJSON(message: _1072.ClientState): unknown;
                    fromPartial<I extends {
                        chainId?: string;
                        trustLevel?: {
                            numerator?: string;
                            denominator?: string;
                        };
                        trustingPeriod?: string;
                        unbondingPeriod?: string;
                        maxClockDrift?: string;
                        frozenHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                        latestHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                        proofSpecs?: {
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        }[];
                        upgradePath?: string[];
                        allowUpdateAfterExpiry?: boolean;
                        allowUpdateAfterMisbehaviour?: boolean;
                    } & {
                        chainId?: string;
                        trustLevel?: {
                            numerator?: string;
                            denominator?: string;
                        } & {
                            numerator?: string;
                            denominator?: string;
                        } & Record<Exclude<keyof I["trustLevel"], keyof _1072.Fraction>, never>;
                        trustingPeriod?: string;
                        unbondingPeriod?: string;
                        maxClockDrift?: string;
                        frozenHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I["frozenHeight"], keyof _1032.Height>, never>;
                        latestHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I["latestHeight"], keyof _1032.Height>, never>;
                        proofSpecs?: {
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        }[] & ({
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        } & {
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I["proofSpecs"][number]["leafSpec"], keyof import("../confio/proofs").LeafOp>, never>;
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            } & {
                                childOrder?: number[] & number[] & Record<Exclude<keyof I["proofSpecs"][number]["innerSpec"]["childOrder"], keyof number[]>, never>;
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            } & Record<Exclude<keyof I["proofSpecs"][number]["innerSpec"], keyof import("../confio/proofs").InnerSpec>, never>;
                            maxDepth?: number;
                            minDepth?: number;
                        } & Record<Exclude<keyof I["proofSpecs"][number], keyof import("../confio/proofs").ProofSpec>, never>)[] & Record<Exclude<keyof I["proofSpecs"], keyof {
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        }[]>, never>;
                        upgradePath?: string[] & string[] & Record<Exclude<keyof I["upgradePath"], keyof string[]>, never>;
                        allowUpdateAfterExpiry?: boolean;
                        allowUpdateAfterMisbehaviour?: boolean;
                    } & Record<Exclude<keyof I, keyof _1072.ClientState>, never>>(object: I): _1072.ClientState;
                };
                ConsensusState: {
                    encode(message: _1072.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1072.ConsensusState;
                    fromJSON(object: any): _1072.ConsensusState;
                    toJSON(message: _1072.ConsensusState): unknown;
                    fromPartial<I_1 extends {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        };
                        nextValidatorsHash?: Uint8Array;
                    } & {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        } & {
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_1["root"], "hash">, never>;
                        nextValidatorsHash?: Uint8Array;
                    } & Record<Exclude<keyof I_1, keyof _1072.ConsensusState>, never>>(object: I_1): _1072.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _1072.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1072.Misbehaviour;
                    fromJSON(object: any): _1072.Misbehaviour;
                    toJSON(message: _1072.Misbehaviour): unknown;
                    fromPartial<I_2 extends {
                        clientId?: string;
                        header1?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string;
                                        app?: string;
                                    };
                                    chainId?: string;
                                    height?: string;
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
                                commit?: {
                                    height?: string;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                };
                                totalVotingPower?: string;
                            };
                            trustedHeight?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                };
                                totalVotingPower?: string;
                            };
                        };
                        header2?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string;
                                        app?: string;
                                    };
                                    chainId?: string;
                                    height?: string;
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
                                commit?: {
                                    height?: string;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                };
                                totalVotingPower?: string;
                            };
                            trustedHeight?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                };
                                totalVotingPower?: string;
                            };
                        };
                    } & {
                        clientId?: string;
                        header1?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string;
                                        app?: string;
                                    };
                                    chainId?: string;
                                    height?: string;
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
                                commit?: {
                                    height?: string;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                };
                                totalVotingPower?: string;
                            };
                            trustedHeight?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                };
                                totalVotingPower?: string;
                            };
                        } & {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string;
                                        app?: string;
                                    };
                                    chainId?: string;
                                    height?: string;
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
                                commit?: {
                                    height?: string;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            } & {
                                header?: {
                                    version?: {
                                        block?: string;
                                        app?: string;
                                    };
                                    chainId?: string;
                                    height?: string;
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
                                        block?: string;
                                        app?: string;
                                    } & {
                                        block?: string;
                                        app?: string;
                                    } & Record<Exclude<keyof I_2["header1"]["signedHeader"]["header"]["version"], keyof import("../tendermint/version/types").Consensus>, never>;
                                    chainId?: string;
                                    height?: string;
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
                                        } & Record<Exclude<keyof I_2["header1"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_2["header1"]["signedHeader"]["header"]["lastBlockId"], keyof import("../tendermint/types/types").BlockID>, never>;
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                } & Record<Exclude<keyof I_2["header1"]["signedHeader"]["header"], keyof import("../tendermint/types/types").Header>, never>;
                                commit?: {
                                    height?: string;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                } & {
                                    height?: string;
                                    round?: number;
                                    blockId?: {
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
                                        } & Record<Exclude<keyof I_2["header1"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_2["header1"]["signedHeader"]["commit"]["blockId"], keyof import("../tendermint/types/types").BlockID>, never>;
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[] & ({
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header1"]["signedHeader"]["commit"]["signatures"][number], keyof import("../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I_2["header1"]["signedHeader"]["commit"]["signatures"], keyof {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[]>, never>;
                                } & Record<Exclude<keyof I_2["header1"]["signedHeader"]["commit"], keyof import("../tendermint/types/types").Commit>, never>;
                            } & Record<Exclude<keyof I_2["header1"]["signedHeader"], keyof import("../tendermint/types/types").SignedHeader>, never>;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                };
                                totalVotingPower?: string;
                            } & {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[] & ({
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header1"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: string;
                                    proposerPriority?: string;
                                } & Record<Exclude<keyof I_2["header1"]["validatorSet"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_2["header1"]["validatorSet"]["validators"], keyof {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[]>, never>;
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header1"]["validatorSet"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: string;
                                    proposerPriority?: string;
                                } & Record<Exclude<keyof I_2["header1"]["validatorSet"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                                totalVotingPower?: string;
                            } & Record<Exclude<keyof I_2["header1"]["validatorSet"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                            trustedHeight?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            } & {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            } & Record<Exclude<keyof I_2["header1"]["trustedHeight"], keyof _1032.Height>, never>;
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                };
                                totalVotingPower?: string;
                            } & {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[] & ({
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header1"]["trustedValidators"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: string;
                                    proposerPriority?: string;
                                } & Record<Exclude<keyof I_2["header1"]["trustedValidators"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_2["header1"]["trustedValidators"]["validators"], keyof {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[]>, never>;
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header1"]["trustedValidators"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: string;
                                    proposerPriority?: string;
                                } & Record<Exclude<keyof I_2["header1"]["trustedValidators"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                                totalVotingPower?: string;
                            } & Record<Exclude<keyof I_2["header1"]["trustedValidators"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                        } & Record<Exclude<keyof I_2["header1"], keyof _1072.Header>, never>;
                        header2?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string;
                                        app?: string;
                                    };
                                    chainId?: string;
                                    height?: string;
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
                                commit?: {
                                    height?: string;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                };
                                totalVotingPower?: string;
                            };
                            trustedHeight?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                };
                                totalVotingPower?: string;
                            };
                        } & {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string;
                                        app?: string;
                                    };
                                    chainId?: string;
                                    height?: string;
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
                                commit?: {
                                    height?: string;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            } & {
                                header?: {
                                    version?: {
                                        block?: string;
                                        app?: string;
                                    };
                                    chainId?: string;
                                    height?: string;
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
                                        block?: string;
                                        app?: string;
                                    } & {
                                        block?: string;
                                        app?: string;
                                    } & Record<Exclude<keyof I_2["header2"]["signedHeader"]["header"]["version"], keyof import("../tendermint/version/types").Consensus>, never>;
                                    chainId?: string;
                                    height?: string;
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
                                        } & Record<Exclude<keyof I_2["header2"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_2["header2"]["signedHeader"]["header"]["lastBlockId"], keyof import("../tendermint/types/types").BlockID>, never>;
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                } & Record<Exclude<keyof I_2["header2"]["signedHeader"]["header"], keyof import("../tendermint/types/types").Header>, never>;
                                commit?: {
                                    height?: string;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                } & {
                                    height?: string;
                                    round?: number;
                                    blockId?: {
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
                                        } & Record<Exclude<keyof I_2["header2"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_2["header2"]["signedHeader"]["commit"]["blockId"], keyof import("../tendermint/types/types").BlockID>, never>;
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[] & ({
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header2"]["signedHeader"]["commit"]["signatures"][number], keyof import("../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I_2["header2"]["signedHeader"]["commit"]["signatures"], keyof {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[]>, never>;
                                } & Record<Exclude<keyof I_2["header2"]["signedHeader"]["commit"], keyof import("../tendermint/types/types").Commit>, never>;
                            } & Record<Exclude<keyof I_2["header2"]["signedHeader"], keyof import("../tendermint/types/types").SignedHeader>, never>;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                };
                                totalVotingPower?: string;
                            } & {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[] & ({
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header2"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: string;
                                    proposerPriority?: string;
                                } & Record<Exclude<keyof I_2["header2"]["validatorSet"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_2["header2"]["validatorSet"]["validators"], keyof {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[]>, never>;
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header2"]["validatorSet"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: string;
                                    proposerPriority?: string;
                                } & Record<Exclude<keyof I_2["header2"]["validatorSet"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                                totalVotingPower?: string;
                            } & Record<Exclude<keyof I_2["header2"]["validatorSet"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                            trustedHeight?: {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            } & {
                                revisionNumber?: string;
                                revisionHeight?: string;
                            } & Record<Exclude<keyof I_2["header2"]["trustedHeight"], keyof _1032.Height>, never>;
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                };
                                totalVotingPower?: string;
                            } & {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[] & ({
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header2"]["trustedValidators"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: string;
                                    proposerPriority?: string;
                                } & Record<Exclude<keyof I_2["header2"]["trustedValidators"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_2["header2"]["trustedValidators"]["validators"], keyof {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[]>, never>;
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header2"]["trustedValidators"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: string;
                                    proposerPriority?: string;
                                } & Record<Exclude<keyof I_2["header2"]["trustedValidators"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                                totalVotingPower?: string;
                            } & Record<Exclude<keyof I_2["header2"]["trustedValidators"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                        } & Record<Exclude<keyof I_2["header2"], keyof _1072.Header>, never>;
                    } & Record<Exclude<keyof I_2, keyof _1072.Misbehaviour>, never>>(object: I_2): _1072.Misbehaviour;
                };
                Header: {
                    encode(message: _1072.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1072.Header;
                    fromJSON(object: any): _1072.Header;
                    toJSON(message: _1072.Header): unknown;
                    fromPartial<I_3 extends {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: string;
                                    app?: string;
                                };
                                chainId?: string;
                                height?: string;
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
                            commit?: {
                                height?: string;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            };
                            totalVotingPower?: string;
                        };
                        trustedHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        };
                        trustedValidators?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            };
                            totalVotingPower?: string;
                        };
                    } & {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: string;
                                    app?: string;
                                };
                                chainId?: string;
                                height?: string;
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
                            commit?: {
                                height?: string;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        } & {
                            header?: {
                                version?: {
                                    block?: string;
                                    app?: string;
                                };
                                chainId?: string;
                                height?: string;
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
                                    block?: string;
                                    app?: string;
                                } & {
                                    block?: string;
                                    app?: string;
                                } & Record<Exclude<keyof I_3["signedHeader"]["header"]["version"], keyof import("../tendermint/version/types").Consensus>, never>;
                                chainId?: string;
                                height?: string;
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
                                    } & Record<Exclude<keyof I_3["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_3["signedHeader"]["header"]["lastBlockId"], keyof import("../tendermint/types/types").BlockID>, never>;
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            } & Record<Exclude<keyof I_3["signedHeader"]["header"], keyof import("../tendermint/types/types").Header>, never>;
                            commit?: {
                                height?: string;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            } & {
                                height?: string;
                                round?: number;
                                blockId?: {
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
                                    } & Record<Exclude<keyof I_3["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_3["signedHeader"]["commit"]["blockId"], keyof import("../tendermint/types/types").BlockID>, never>;
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[] & ({
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                } & {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                } & Record<Exclude<keyof I_3["signedHeader"]["commit"]["signatures"][number], keyof import("../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I_3["signedHeader"]["commit"]["signatures"], keyof {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[]>, never>;
                            } & Record<Exclude<keyof I_3["signedHeader"]["commit"], keyof import("../tendermint/types/types").Commit>, never>;
                        } & Record<Exclude<keyof I_3["signedHeader"], keyof import("../tendermint/types/types").SignedHeader>, never>;
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            };
                            totalVotingPower?: string;
                        } & {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            }[] & ({
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_3["validatorSet"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                votingPower?: string;
                                proposerPriority?: string;
                            } & Record<Exclude<keyof I_3["validatorSet"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_3["validatorSet"]["validators"], keyof {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            }[]>, never>;
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_3["validatorSet"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                votingPower?: string;
                                proposerPriority?: string;
                            } & Record<Exclude<keyof I_3["validatorSet"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                            totalVotingPower?: string;
                        } & Record<Exclude<keyof I_3["validatorSet"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                        trustedHeight?: {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & {
                            revisionNumber?: string;
                            revisionHeight?: string;
                        } & Record<Exclude<keyof I_3["trustedHeight"], keyof _1032.Height>, never>;
                        trustedValidators?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            };
                            totalVotingPower?: string;
                        } & {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            }[] & ({
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_3["trustedValidators"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                votingPower?: string;
                                proposerPriority?: string;
                            } & Record<Exclude<keyof I_3["trustedValidators"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_3["trustedValidators"]["validators"], keyof {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            }[]>, never>;
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_3["trustedValidators"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                votingPower?: string;
                                proposerPriority?: string;
                            } & Record<Exclude<keyof I_3["trustedValidators"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                            totalVotingPower?: string;
                        } & Record<Exclude<keyof I_3["trustedValidators"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                    } & Record<Exclude<keyof I_3, keyof _1072.Header>, never>>(object: I_3): _1072.Header;
                };
                Fraction: {
                    encode(message: _1072.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1072.Fraction;
                    fromJSON(object: any): _1072.Fraction;
                    toJSON(message: _1072.Fraction): unknown;
                    fromPartial<I_4 extends {
                        numerator?: string;
                        denominator?: string;
                    } & {
                        numerator?: string;
                        denominator?: string;
                    } & Record<Exclude<keyof I_4, keyof _1072.Fraction>, never>>(object: I_4): _1072.Fraction;
                };
            };
        }
    }
}
