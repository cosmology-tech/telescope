import * as _108 from "./applications/transfer/v1/genesis";
import * as _109 from "./applications/transfer/v1/query";
import * as _110 from "./applications/transfer/v1/transfer";
import * as _111 from "./applications/transfer/v1/tx";
import * as _112 from "./applications/transfer/v2/packet";
import * as _113 from "./core/channel/v1/channel";
import * as _114 from "./core/channel/v1/genesis";
import * as _115 from "./core/channel/v1/query";
import * as _116 from "./core/channel/v1/tx";
import * as _117 from "./core/client/v1/client";
import * as _118 from "./core/client/v1/genesis";
import * as _119 from "./core/client/v1/query";
import * as _120 from "./core/client/v1/tx";
import * as _121 from "./core/commitment/v1/commitment";
import * as _122 from "./core/connection/v1/connection";
import * as _123 from "./core/connection/v1/genesis";
import * as _124 from "./core/connection/v1/query";
import * as _125 from "./core/connection/v1/tx";
import * as _126 from "./core/port/v1/query";
import * as _127 from "./core/types/v1/genesis";
import * as _128 from "./lightclients/localhost/v1/localhost";
import * as _129 from "./lightclients/solomachine/v1/solomachine";
import * as _130 from "./lightclients/solomachine/v2/solomachine";
import * as _131 from "./lightclients/tendermint/v1/tendermint";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _111.MsgTransfer): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _111.MsgTransfer): {
                            typeUrl: string;
                            value: _111.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _111.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _111.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _111.MsgTransfer): {
                            typeUrl: string;
                            value: _111.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _111.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: {
                                revision_number: string;
                                revision_height: string;
                            };
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
                            timeout_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            timeout_timestamp: string;
                        }) => _111.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _111.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgTransfer;
                    fromJSON(object: any): _111.MsgTransfer;
                    toJSON(message: _111.MsgTransfer): unknown;
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
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        timeoutTimestamp?: any;
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
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I["timeoutHeight"], keyof _117.Height>, never>;
                        timeoutTimestamp?: any;
                    } & Record<Exclude<keyof I, keyof _111.MsgTransfer>, never>>(object: I): _111.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _111.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgTransferResponse;
                    fromJSON(_: any): _111.MsgTransferResponse;
                    toJSON(_: _111.MsgTransferResponse): unknown;
                    fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _111.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _110.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.DenomTrace;
                    fromJSON(object: any): _110.DenomTrace;
                    toJSON(message: _110.DenomTrace): unknown;
                    fromPartial<I_2 extends {
                        path?: string;
                        baseDenom?: string;
                    } & {
                        path?: string;
                        baseDenom?: string;
                    } & Record<Exclude<keyof I_2, keyof _110.DenomTrace>, never>>(object: I_2): _110.DenomTrace;
                };
                Params: {
                    encode(message: _110.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Params;
                    fromJSON(object: any): _110.Params;
                    toJSON(message: _110.Params): unknown;
                    fromPartial<I_3 extends {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    } & {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    } & Record<Exclude<keyof I_3, keyof _110.Params>, never>>(object: I_3): _110.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _109.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryDenomTraceRequest;
                    fromJSON(object: any): _109.QueryDenomTraceRequest;
                    toJSON(message: _109.QueryDenomTraceRequest): unknown;
                    fromPartial<I_4 extends {
                        hash?: string;
                    } & {
                        hash?: string;
                    } & Record<Exclude<keyof I_4, "hash">, never>>(object: I_4): _109.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _109.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryDenomTraceResponse;
                    fromJSON(object: any): _109.QueryDenomTraceResponse;
                    toJSON(message: _109.QueryDenomTraceResponse): unknown;
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
                        } & Record<Exclude<keyof I_5["denomTrace"], keyof _110.DenomTrace>, never>;
                    } & Record<Exclude<keyof I_5, "denomTrace">, never>>(object: I_5): _109.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _109.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryDenomTracesRequest;
                    fromJSON(object: any): _109.QueryDenomTracesRequest;
                    toJSON(message: _109.QueryDenomTracesRequest): unknown;
                    fromPartial<I_6 extends {
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
                        } & Record<Exclude<keyof I_6["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_6, "pagination">, never>>(object: I_6): _109.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _109.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryDenomTracesResponse;
                    fromJSON(object: any): _109.QueryDenomTracesResponse;
                    toJSON(message: _109.QueryDenomTracesResponse): unknown;
                    fromPartial<I_7 extends {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
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
                        } & Record<Exclude<keyof I_7["denomTraces"][number], keyof _110.DenomTrace>, never>)[] & Record<Exclude<keyof I_7["denomTraces"], keyof {
                            path?: string;
                            baseDenom?: string;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_7["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                    } & Record<Exclude<keyof I_7, keyof _109.QueryDenomTracesResponse>, never>>(object: I_7): _109.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _109.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryParamsRequest;
                    fromJSON(_: any): _109.QueryParamsRequest;
                    toJSON(_: _109.QueryParamsRequest): unknown;
                    fromPartial<I_8 extends {} & {} & Record<Exclude<keyof I_8, never>, never>>(_: I_8): _109.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _109.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryParamsResponse;
                    fromJSON(object: any): _109.QueryParamsResponse;
                    toJSON(message: _109.QueryParamsResponse): unknown;
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
                        } & Record<Exclude<keyof I_9["params"], keyof _110.Params>, never>;
                    } & Record<Exclude<keyof I_9, "params">, never>>(object: I_9): _109.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _108.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GenesisState;
                    fromJSON(object: any): _108.GenesisState;
                    toJSON(message: _108.GenesisState): unknown;
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
                        } & Record<Exclude<keyof I_10["denomTraces"][number], keyof _110.DenomTrace>, never>)[] & Record<Exclude<keyof I_10["denomTraces"], keyof {
                            path?: string;
                            baseDenom?: string;
                        }[]>, never>;
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        } & {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        } & Record<Exclude<keyof I_10["params"], keyof _110.Params>, never>;
                    } & Record<Exclude<keyof I_10, keyof _108.GenesisState>, never>>(object: I_10): _108.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _112.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.FungibleTokenPacketData;
                    fromJSON(object: any): _112.FungibleTokenPacketData;
                    toJSON(message: _112.FungibleTokenPacketData): unknown;
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
                    } & Record<Exclude<keyof I, keyof _112.FungibleTokenPacketData>, never>>(object: I): _112.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _116.MsgChannelOpenInit): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _116.MsgChannelOpenTry): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _116.MsgChannelOpenAck): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _116.MsgChannelOpenConfirm): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _116.MsgChannelCloseInit): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _116.MsgChannelCloseConfirm): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _116.MsgRecvPacket): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        timeout(value: _116.MsgTimeout): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _116.MsgTimeoutOnClose): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _116.MsgAcknowledgement): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _116.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _116.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _116.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _116.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _116.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _116.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _116.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _116.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _116.MsgRecvPacket): {
                            typeUrl: string;
                            value: _116.MsgRecvPacket;
                        };
                        timeout(value: _116.MsgTimeout): {
                            typeUrl: string;
                            value: _116.MsgTimeout;
                        };
                        timeoutOnClose(value: _116.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _116.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _116.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _116.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _116.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _116.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _116.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _116.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _116.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _116.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _116.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _116.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _116.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _116.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _116.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _116.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _116.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _116.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _116.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _116.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _116.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _116.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _116.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _116.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _116.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _116.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _116.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _116.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _116.MsgRecvPacket): {
                            typeUrl: string;
                            value: _116.MsgRecvPacket;
                        };
                        timeout(value: _116.MsgTimeout): {
                            typeUrl: string;
                            value: _116.MsgTimeout;
                        };
                        timeoutOnClose(value: _116.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _116.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _116.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _116.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _116.MsgChannelOpenInit) => {
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
                        }) => _116.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _116.MsgChannelOpenTry) => {
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
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
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
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _116.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _116.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _116.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _116.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _116.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _116.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _116.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _116.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _116.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _116.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
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
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _116.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _116.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
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
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            next_sequence_recv: string;
                            signer: string;
                        }) => _116.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _116.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
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
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            next_sequence_recv: string;
                            signer: string;
                        }) => _116.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _116.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
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
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _116.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _116.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenInit;
                    fromJSON(object: any): _116.MsgChannelOpenInit;
                    toJSON(message: _116.MsgChannelOpenInit): unknown;
                    fromPartial<I extends {
                        portId?: string;
                        channel?: {
                            state?: _113.State;
                            ordering?: _113.Order;
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
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I["channel"]["counterparty"], keyof _113.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I["channel"], keyof _113.Channel>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I, keyof _116.MsgChannelOpenInit>, never>>(object: I): _116.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _116.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _116.MsgChannelOpenInitResponse;
                    toJSON(_: _116.MsgChannelOpenInitResponse): unknown;
                    fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _116.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _116.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenTry;
                    fromJSON(object: any): _116.MsgChannelOpenTry;
                    toJSON(message: _116.MsgChannelOpenTry): unknown;
                    fromPartial<I_2 extends {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _113.State;
                            ordering?: _113.Order;
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
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_2["channel"]["counterparty"], keyof _113.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_2["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I_2["channel"], keyof _113.Channel>, never>;
                        counterpartyVersion?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_2["proofHeight"], keyof _117.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_2, keyof _116.MsgChannelOpenTry>, never>>(object: I_2): _116.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _116.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _116.MsgChannelOpenTryResponse;
                    toJSON(_: _116.MsgChannelOpenTryResponse): unknown;
                    fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _116.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _116.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenAck;
                    fromJSON(object: any): _116.MsgChannelOpenAck;
                    toJSON(message: _116.MsgChannelOpenAck): unknown;
                    fromPartial<I_4 extends {
                        portId?: string;
                        channelId?: string;
                        counterpartyChannelId?: string;
                        counterpartyVersion?: string;
                        proofTry?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        counterpartyChannelId?: string;
                        counterpartyVersion?: string;
                        proofTry?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_4["proofHeight"], keyof _117.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_4, keyof _116.MsgChannelOpenAck>, never>>(object: I_4): _116.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _116.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _116.MsgChannelOpenAckResponse;
                    toJSON(_: _116.MsgChannelOpenAckResponse): unknown;
                    fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _116.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _116.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenConfirm;
                    fromJSON(object: any): _116.MsgChannelOpenConfirm;
                    toJSON(message: _116.MsgChannelOpenConfirm): unknown;
                    fromPartial<I_6 extends {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_6["proofHeight"], keyof _117.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_6, keyof _116.MsgChannelOpenConfirm>, never>>(object: I_6): _116.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _116.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _116.MsgChannelOpenConfirmResponse;
                    toJSON(_: _116.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends {} & {} & Record<Exclude<keyof I_7, never>, never>>(_: I_7): _116.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _116.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelCloseInit;
                    fromJSON(object: any): _116.MsgChannelCloseInit;
                    toJSON(message: _116.MsgChannelCloseInit): unknown;
                    fromPartial<I_8 extends {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    } & Record<Exclude<keyof I_8, keyof _116.MsgChannelCloseInit>, never>>(object: I_8): _116.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _116.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _116.MsgChannelCloseInitResponse;
                    toJSON(_: _116.MsgChannelCloseInitResponse): unknown;
                    fromPartial<I_9 extends {} & {} & Record<Exclude<keyof I_9, never>, never>>(_: I_9): _116.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _116.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelCloseConfirm;
                    fromJSON(object: any): _116.MsgChannelCloseConfirm;
                    toJSON(message: _116.MsgChannelCloseConfirm): unknown;
                    fromPartial<I_10 extends {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_10["proofHeight"], keyof _117.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_10, keyof _116.MsgChannelCloseConfirm>, never>>(object: I_10): _116.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _116.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _116.MsgChannelCloseConfirmResponse;
                    toJSON(_: _116.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial<I_11 extends {} & {} & Record<Exclude<keyof I_11, never>, never>>(_: I_11): _116.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _116.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgRecvPacket;
                    fromJSON(object: any): _116.MsgRecvPacket;
                    toJSON(message: _116.MsgRecvPacket): unknown;
                    fromPartial<I_12 extends {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        proofCommitment?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        } & {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_12["packet"]["timeoutHeight"], keyof _117.Height>, never>;
                            timeoutTimestamp?: any;
                        } & Record<Exclude<keyof I_12["packet"], keyof _113.Packet>, never>;
                        proofCommitment?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_12["proofHeight"], keyof _117.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_12, keyof _116.MsgRecvPacket>, never>>(object: I_12): _116.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _116.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgRecvPacketResponse;
                    fromJSON(_: any): _116.MsgRecvPacketResponse;
                    toJSON(_: _116.MsgRecvPacketResponse): unknown;
                    fromPartial<I_13 extends {} & {} & Record<Exclude<keyof I_13, never>, never>>(_: I_13): _116.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _116.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgTimeout;
                    fromJSON(object: any): _116.MsgTimeout;
                    toJSON(message: _116.MsgTimeout): unknown;
                    fromPartial<I_14 extends {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        proofUnreceived?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        nextSequenceRecv?: any;
                        signer?: string;
                    } & {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        } & {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_14["packet"]["timeoutHeight"], keyof _117.Height>, never>;
                            timeoutTimestamp?: any;
                        } & Record<Exclude<keyof I_14["packet"], keyof _113.Packet>, never>;
                        proofUnreceived?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_14["proofHeight"], keyof _117.Height>, never>;
                        nextSequenceRecv?: any;
                        signer?: string;
                    } & Record<Exclude<keyof I_14, keyof _116.MsgTimeout>, never>>(object: I_14): _116.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _116.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgTimeoutResponse;
                    fromJSON(_: any): _116.MsgTimeoutResponse;
                    toJSON(_: _116.MsgTimeoutResponse): unknown;
                    fromPartial<I_15 extends {} & {} & Record<Exclude<keyof I_15, never>, never>>(_: I_15): _116.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _116.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgTimeoutOnClose;
                    fromJSON(object: any): _116.MsgTimeoutOnClose;
                    toJSON(message: _116.MsgTimeoutOnClose): unknown;
                    fromPartial<I_16 extends {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        nextSequenceRecv?: any;
                        signer?: string;
                    } & {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        } & {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_16["packet"]["timeoutHeight"], keyof _117.Height>, never>;
                            timeoutTimestamp?: any;
                        } & Record<Exclude<keyof I_16["packet"], keyof _113.Packet>, never>;
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_16["proofHeight"], keyof _117.Height>, never>;
                        nextSequenceRecv?: any;
                        signer?: string;
                    } & Record<Exclude<keyof I_16, keyof _116.MsgTimeoutOnClose>, never>>(object: I_16): _116.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _116.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _116.MsgTimeoutOnCloseResponse;
                    toJSON(_: _116.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial<I_17 extends {} & {} & Record<Exclude<keyof I_17, never>, never>>(_: I_17): _116.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _116.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgAcknowledgement;
                    fromJSON(object: any): _116.MsgAcknowledgement;
                    toJSON(message: _116.MsgAcknowledgement): unknown;
                    fromPartial<I_18 extends {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        } & {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_18["packet"]["timeoutHeight"], keyof _117.Height>, never>;
                            timeoutTimestamp?: any;
                        } & Record<Exclude<keyof I_18["packet"], keyof _113.Packet>, never>;
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_18["proofHeight"], keyof _117.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_18, keyof _116.MsgAcknowledgement>, never>>(object: I_18): _116.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _116.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgAcknowledgementResponse;
                    fromJSON(_: any): _116.MsgAcknowledgementResponse;
                    toJSON(_: _116.MsgAcknowledgementResponse): unknown;
                    fromPartial<I_19 extends {} & {} & Record<Exclude<keyof I_19, never>, never>>(_: I_19): _116.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _115.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelRequest;
                    fromJSON(object: any): _115.QueryChannelRequest;
                    toJSON(message: _115.QueryChannelRequest): unknown;
                    fromPartial<I_20 extends {
                        portId?: string;
                        channelId?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_20, keyof _115.QueryChannelRequest>, never>>(object: I_20): _115.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _115.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelResponse;
                    fromJSON(object: any): _115.QueryChannelResponse;
                    toJSON(message: _115.QueryChannelResponse): unknown;
                    fromPartial<I_21 extends {
                        channel?: {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        channel?: {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_21["channel"]["counterparty"], keyof _113.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_21["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I_21["channel"], keyof _113.Channel>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_21["proofHeight"], keyof _117.Height>, never>;
                    } & Record<Exclude<keyof I_21, keyof _115.QueryChannelResponse>, never>>(object: I_21): _115.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _115.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelsRequest;
                    fromJSON(object: any): _115.QueryChannelsRequest;
                    toJSON(message: _115.QueryChannelsRequest): unknown;
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
                    } & Record<Exclude<keyof I_22, "pagination">, never>>(object: I_22): _115.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _115.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelsResponse;
                    fromJSON(object: any): _115.QueryChannelsResponse;
                    toJSON(message: _115.QueryChannelsResponse): unknown;
                    fromPartial<I_23 extends {
                        channels?: {
                            state?: _113.State;
                            ordering?: _113.Order;
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
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        channels?: {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[] & ({
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_23["channels"][number]["counterparty"], keyof _113.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_23["channels"][number]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_23["channels"][number], keyof _113.IdentifiedChannel>, never>)[] & Record<Exclude<keyof I_23["channels"], keyof {
                            state?: _113.State;
                            ordering?: _113.Order;
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
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_23["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_23["height"], keyof _117.Height>, never>;
                    } & Record<Exclude<keyof I_23, keyof _115.QueryChannelsResponse>, never>>(object: I_23): _115.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _115.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _115.QueryConnectionChannelsRequest;
                    toJSON(message: _115.QueryConnectionChannelsRequest): unknown;
                    fromPartial<I_24 extends {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    } & {
                        connection?: string;
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
                        } & Record<Exclude<keyof I_24["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_24, keyof _115.QueryConnectionChannelsRequest>, never>>(object: I_24): _115.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _115.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _115.QueryConnectionChannelsResponse;
                    toJSON(message: _115.QueryConnectionChannelsResponse): unknown;
                    fromPartial<I_25 extends {
                        channels?: {
                            state?: _113.State;
                            ordering?: _113.Order;
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
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        channels?: {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[] & ({
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_25["channels"][number]["counterparty"], keyof _113.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_25["channels"][number]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_25["channels"][number], keyof _113.IdentifiedChannel>, never>)[] & Record<Exclude<keyof I_25["channels"], keyof {
                            state?: _113.State;
                            ordering?: _113.Order;
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
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_25["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_25["height"], keyof _117.Height>, never>;
                    } & Record<Exclude<keyof I_25, keyof _115.QueryConnectionChannelsResponse>, never>>(object: I_25): _115.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _115.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelClientStateRequest;
                    fromJSON(object: any): _115.QueryChannelClientStateRequest;
                    toJSON(message: _115.QueryChannelClientStateRequest): unknown;
                    fromPartial<I_26 extends {
                        portId?: string;
                        channelId?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_26, keyof _115.QueryChannelClientStateRequest>, never>>(object: I_26): _115.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _115.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelClientStateResponse;
                    fromJSON(object: any): _115.QueryChannelClientStateResponse;
                    toJSON(message: _115.QueryChannelClientStateResponse): unknown;
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
                            revisionNumber?: any;
                            revisionHeight?: any;
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
                        } & Record<Exclude<keyof I_27["identifiedClientState"], keyof _117.IdentifiedClientState>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_27["proofHeight"], keyof _117.Height>, never>;
                    } & Record<Exclude<keyof I_27, keyof _115.QueryChannelClientStateResponse>, never>>(object: I_27): _115.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _115.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _115.QueryChannelConsensusStateRequest;
                    toJSON(message: _115.QueryChannelConsensusStateRequest): unknown;
                    fromPartial<I_28 extends {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & Record<Exclude<keyof I_28, keyof _115.QueryChannelConsensusStateRequest>, never>>(object: I_28): _115.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _115.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _115.QueryChannelConsensusStateResponse;
                    toJSON(message: _115.QueryChannelConsensusStateResponse): unknown;
                    fromPartial<I_29 extends {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
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
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_29["proofHeight"], keyof _117.Height>, never>;
                    } & Record<Exclude<keyof I_29, keyof _115.QueryChannelConsensusStateResponse>, never>>(object: I_29): _115.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _115.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _115.QueryPacketCommitmentRequest;
                    toJSON(message: _115.QueryPacketCommitmentRequest): unknown;
                    fromPartial<I_30 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & Record<Exclude<keyof I_30, keyof _115.QueryPacketCommitmentRequest>, never>>(object: I_30): _115.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _115.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _115.QueryPacketCommitmentResponse;
                    toJSON(message: _115.QueryPacketCommitmentResponse): unknown;
                    fromPartial<I_31 extends {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_31["proofHeight"], keyof _117.Height>, never>;
                    } & Record<Exclude<keyof I_31, keyof _115.QueryPacketCommitmentResponse>, never>>(object: I_31): _115.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _115.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _115.QueryPacketCommitmentsRequest;
                    toJSON(message: _115.QueryPacketCommitmentsRequest): unknown;
                    fromPartial<I_32 extends {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    } & {
                        portId?: string;
                        channelId?: string;
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
                        } & Record<Exclude<keyof I_32["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_32, keyof _115.QueryPacketCommitmentsRequest>, never>>(object: I_32): _115.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _115.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _115.QueryPacketCommitmentsResponse;
                    toJSON(message: _115.QueryPacketCommitmentsResponse): unknown;
                    fromPartial<I_33 extends {
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_33["commitments"][number], keyof _113.PacketState>, never>)[] & Record<Exclude<keyof I_33["commitments"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_33["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_33["height"], keyof _117.Height>, never>;
                    } & Record<Exclude<keyof I_33, keyof _115.QueryPacketCommitmentsResponse>, never>>(object: I_33): _115.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _115.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketReceiptRequest;
                    fromJSON(object: any): _115.QueryPacketReceiptRequest;
                    toJSON(message: _115.QueryPacketReceiptRequest): unknown;
                    fromPartial<I_34 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & Record<Exclude<keyof I_34, keyof _115.QueryPacketReceiptRequest>, never>>(object: I_34): _115.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _115.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketReceiptResponse;
                    fromJSON(object: any): _115.QueryPacketReceiptResponse;
                    toJSON(message: _115.QueryPacketReceiptResponse): unknown;
                    fromPartial<I_35 extends {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_35["proofHeight"], keyof _117.Height>, never>;
                    } & Record<Exclude<keyof I_35, keyof _115.QueryPacketReceiptResponse>, never>>(object: I_35): _115.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _115.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _115.QueryPacketAcknowledgementRequest;
                    toJSON(message: _115.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial<I_36 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & Record<Exclude<keyof I_36, keyof _115.QueryPacketAcknowledgementRequest>, never>>(object: I_36): _115.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _115.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _115.QueryPacketAcknowledgementResponse;
                    toJSON(message: _115.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial<I_37 extends {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_37["proofHeight"], keyof _117.Height>, never>;
                    } & Record<Exclude<keyof I_37, keyof _115.QueryPacketAcknowledgementResponse>, never>>(object: I_37): _115.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _115.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _115.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _115.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial<I_38 extends {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                        packetCommitmentSequences?: any[];
                    } & {
                        portId?: string;
                        channelId?: string;
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
                        } & Record<Exclude<keyof I_38["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                        packetCommitmentSequences?: any[] & any[] & Record<Exclude<keyof I_38["packetCommitmentSequences"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I_38, keyof _115.QueryPacketAcknowledgementsRequest>, never>>(object: I_38): _115.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _115.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _115.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _115.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial<I_39 extends {
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_39["acknowledgements"][number], keyof _113.PacketState>, never>)[] & Record<Exclude<keyof I_39["acknowledgements"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_39["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_39["height"], keyof _117.Height>, never>;
                    } & Record<Exclude<keyof I_39, keyof _115.QueryPacketAcknowledgementsResponse>, never>>(object: I_39): _115.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _115.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _115.QueryUnreceivedPacketsRequest;
                    toJSON(message: _115.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial<I_40 extends {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: any[];
                    } & {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: any[] & any[] & Record<Exclude<keyof I_40["packetCommitmentSequences"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I_40, keyof _115.QueryUnreceivedPacketsRequest>, never>>(object: I_40): _115.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _115.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _115.QueryUnreceivedPacketsResponse;
                    toJSON(message: _115.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial<I_41 extends {
                        sequences?: any[];
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        sequences?: any[] & any[] & Record<Exclude<keyof I_41["sequences"], keyof any[]>, never>;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_41["height"], keyof _117.Height>, never>;
                    } & Record<Exclude<keyof I_41, keyof _115.QueryUnreceivedPacketsResponse>, never>>(object: I_41): _115.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _115.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _115.QueryUnreceivedAcksRequest;
                    toJSON(message: _115.QueryUnreceivedAcksRequest): unknown;
                    fromPartial<I_42 extends {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: any[];
                    } & {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: any[] & any[] & Record<Exclude<keyof I_42["packetAckSequences"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I_42, keyof _115.QueryUnreceivedAcksRequest>, never>>(object: I_42): _115.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _115.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _115.QueryUnreceivedAcksResponse;
                    toJSON(message: _115.QueryUnreceivedAcksResponse): unknown;
                    fromPartial<I_43 extends {
                        sequences?: any[];
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        sequences?: any[] & any[] & Record<Exclude<keyof I_43["sequences"], keyof any[]>, never>;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_43["height"], keyof _117.Height>, never>;
                    } & Record<Exclude<keyof I_43, keyof _115.QueryUnreceivedAcksResponse>, never>>(object: I_43): _115.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _115.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _115.QueryNextSequenceReceiveRequest;
                    toJSON(message: _115.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial<I_44 extends {
                        portId?: string;
                        channelId?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_44, keyof _115.QueryNextSequenceReceiveRequest>, never>>(object: I_44): _115.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _115.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _115.QueryNextSequenceReceiveResponse;
                    toJSON(message: _115.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial<I_45 extends {
                        nextSequenceReceive?: any;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        nextSequenceReceive?: any;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_45["proofHeight"], keyof _117.Height>, never>;
                    } & Record<Exclude<keyof I_45, keyof _115.QueryNextSequenceReceiveResponse>, never>>(object: I_45): _115.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _114.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.GenesisState;
                    fromJSON(object: any): _114.GenesisState;
                    toJSON(message: _114.GenesisState): unknown;
                    fromPartial<I_46 extends {
                        channels?: {
                            state?: _113.State;
                            ordering?: _113.Order;
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
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        receipts?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        sendSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        recvSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        ackSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        nextChannelSequence?: any;
                    } & {
                        channels?: {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[] & ({
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_46["channels"][number]["counterparty"], keyof _113.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_46["channels"][number]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_46["channels"][number], keyof _113.IdentifiedChannel>, never>)[] & Record<Exclude<keyof I_46["channels"], keyof {
                            state?: _113.State;
                            ordering?: _113.Order;
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
                            sequence?: any;
                            data?: Uint8Array;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_46["acknowledgements"][number], keyof _113.PacketState>, never>)[] & Record<Exclude<keyof I_46["acknowledgements"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[]>, never>;
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_46["commitments"][number], keyof _113.PacketState>, never>)[] & Record<Exclude<keyof I_46["commitments"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[]>, never>;
                        receipts?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_46["receipts"][number], keyof _113.PacketState>, never>)[] & Record<Exclude<keyof I_46["receipts"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[]>, never>;
                        sendSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        } & Record<Exclude<keyof I_46["sendSequences"][number], keyof _114.PacketSequence>, never>)[] & Record<Exclude<keyof I_46["sendSequences"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[]>, never>;
                        recvSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        } & Record<Exclude<keyof I_46["recvSequences"][number], keyof _114.PacketSequence>, never>)[] & Record<Exclude<keyof I_46["recvSequences"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[]>, never>;
                        ackSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        } & Record<Exclude<keyof I_46["ackSequences"][number], keyof _114.PacketSequence>, never>)[] & Record<Exclude<keyof I_46["ackSequences"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[]>, never>;
                        nextChannelSequence?: any;
                    } & Record<Exclude<keyof I_46, keyof _114.GenesisState>, never>>(object: I_46): _114.GenesisState;
                };
                PacketSequence: {
                    encode(message: _114.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.PacketSequence;
                    fromJSON(object: any): _114.PacketSequence;
                    toJSON(message: _114.PacketSequence): unknown;
                    fromPartial<I_47 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & Record<Exclude<keyof I_47, keyof _114.PacketSequence>, never>>(object: I_47): _114.PacketSequence;
                };
                stateFromJSON(object: any): _113.State;
                stateToJSON(object: _113.State): string;
                orderFromJSON(object: any): _113.Order;
                orderToJSON(object: _113.Order): string;
                State: typeof _113.State;
                Order: typeof _113.Order;
                Channel: {
                    encode(message: _113.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Channel;
                    fromJSON(object: any): _113.Channel;
                    toJSON(message: _113.Channel): unknown;
                    fromPartial<I_48 extends {
                        state?: _113.State;
                        ordering?: _113.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                    } & {
                        state?: _113.State;
                        ordering?: _113.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        } & {
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_48["counterparty"], keyof _113.Counterparty>, never>;
                        connectionHops?: string[] & string[] & Record<Exclude<keyof I_48["connectionHops"], keyof string[]>, never>;
                        version?: string;
                    } & Record<Exclude<keyof I_48, keyof _113.Channel>, never>>(object: I_48): _113.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _113.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.IdentifiedChannel;
                    fromJSON(object: any): _113.IdentifiedChannel;
                    toJSON(message: _113.IdentifiedChannel): unknown;
                    fromPartial<I_49 extends {
                        state?: _113.State;
                        ordering?: _113.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    } & {
                        state?: _113.State;
                        ordering?: _113.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        } & {
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_49["counterparty"], keyof _113.Counterparty>, never>;
                        connectionHops?: string[] & string[] & Record<Exclude<keyof I_49["connectionHops"], keyof string[]>, never>;
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_49, keyof _113.IdentifiedChannel>, never>>(object: I_49): _113.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _113.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Counterparty;
                    fromJSON(object: any): _113.Counterparty;
                    toJSON(message: _113.Counterparty): unknown;
                    fromPartial<I_50 extends {
                        portId?: string;
                        channelId?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_50, keyof _113.Counterparty>, never>>(object: I_50): _113.Counterparty;
                };
                Packet: {
                    encode(message: _113.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Packet;
                    fromJSON(object: any): _113.Packet;
                    toJSON(message: _113.Packet): unknown;
                    fromPartial<I_51 extends {
                        sequence?: any;
                        sourcePort?: string;
                        sourceChannel?: string;
                        destinationPort?: string;
                        destinationChannel?: string;
                        data?: Uint8Array;
                        timeoutHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        timeoutTimestamp?: any;
                    } & {
                        sequence?: any;
                        sourcePort?: string;
                        sourceChannel?: string;
                        destinationPort?: string;
                        destinationChannel?: string;
                        data?: Uint8Array;
                        timeoutHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_51["timeoutHeight"], keyof _117.Height>, never>;
                        timeoutTimestamp?: any;
                    } & Record<Exclude<keyof I_51, keyof _113.Packet>, never>>(object: I_51): _113.Packet;
                };
                PacketState: {
                    encode(message: _113.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.PacketState;
                    fromJSON(object: any): _113.PacketState;
                    toJSON(message: _113.PacketState): unknown;
                    fromPartial<I_52 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                        data?: Uint8Array;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                        data?: Uint8Array;
                    } & Record<Exclude<keyof I_52, keyof _113.PacketState>, never>>(object: I_52): _113.PacketState;
                };
                Acknowledgement: {
                    encode(message: _113.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Acknowledgement;
                    fromJSON(object: any): _113.Acknowledgement;
                    toJSON(message: _113.Acknowledgement): unknown;
                    fromPartial<I_53 extends {
                        result?: Uint8Array;
                        error?: string;
                    } & {
                        result?: Uint8Array;
                        error?: string;
                    } & Record<Exclude<keyof I_53, keyof _113.Acknowledgement>, never>>(object: I_53): _113.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _120.MsgCreateClient): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _120.MsgUpdateClient): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _120.MsgUpgradeClient): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _120.MsgSubmitMisbehaviour): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _120.MsgCreateClient): {
                            typeUrl: string;
                            value: _120.MsgCreateClient;
                        };
                        updateClient(value: _120.MsgUpdateClient): {
                            typeUrl: string;
                            value: _120.MsgUpdateClient;
                        };
                        upgradeClient(value: _120.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _120.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _120.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _120.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _120.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _120.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _120.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _120.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _120.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _120.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _120.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _120.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _120.MsgCreateClient): {
                            typeUrl: string;
                            value: _120.MsgCreateClient;
                        };
                        updateClient(value: _120.MsgUpdateClient): {
                            typeUrl: string;
                            value: _120.MsgUpdateClient;
                        };
                        upgradeClient(value: _120.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _120.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _120.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _120.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _120.MsgCreateClient) => {
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
                        }) => _120.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _120.MsgUpdateClient) => {
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
                        }) => _120.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _120.MsgUpgradeClient) => {
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
                        }) => _120.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _120.MsgSubmitMisbehaviour) => {
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
                        }) => _120.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _120.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgCreateClient;
                    fromJSON(object: any): _120.MsgCreateClient;
                    toJSON(message: _120.MsgCreateClient): unknown;
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
                    } & Record<Exclude<keyof I, keyof _120.MsgCreateClient>, never>>(object: I): _120.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _120.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgCreateClientResponse;
                    fromJSON(_: any): _120.MsgCreateClientResponse;
                    toJSON(_: _120.MsgCreateClientResponse): unknown;
                    fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _120.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _120.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgUpdateClient;
                    fromJSON(object: any): _120.MsgUpdateClient;
                    toJSON(message: _120.MsgUpdateClient): unknown;
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
                    } & Record<Exclude<keyof I_2, keyof _120.MsgUpdateClient>, never>>(object: I_2): _120.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _120.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgUpdateClientResponse;
                    fromJSON(_: any): _120.MsgUpdateClientResponse;
                    toJSON(_: _120.MsgUpdateClientResponse): unknown;
                    fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _120.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _120.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgUpgradeClient;
                    fromJSON(object: any): _120.MsgUpgradeClient;
                    toJSON(message: _120.MsgUpgradeClient): unknown;
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
                    } & Record<Exclude<keyof I_4, keyof _120.MsgUpgradeClient>, never>>(object: I_4): _120.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _120.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgUpgradeClientResponse;
                    fromJSON(_: any): _120.MsgUpgradeClientResponse;
                    toJSON(_: _120.MsgUpgradeClientResponse): unknown;
                    fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _120.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _120.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _120.MsgSubmitMisbehaviour;
                    toJSON(message: _120.MsgSubmitMisbehaviour): unknown;
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
                    } & Record<Exclude<keyof I_6, keyof _120.MsgSubmitMisbehaviour>, never>>(object: I_6): _120.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _120.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _120.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _120.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial<I_7 extends {} & {} & Record<Exclude<keyof I_7, never>, never>>(_: I_7): _120.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _119.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientStateRequest;
                    fromJSON(object: any): _119.QueryClientStateRequest;
                    toJSON(message: _119.QueryClientStateRequest): unknown;
                    fromPartial<I_8 extends {
                        clientId?: string;
                    } & {
                        clientId?: string;
                    } & Record<Exclude<keyof I_8, "clientId">, never>>(object: I_8): _119.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _119.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientStateResponse;
                    fromJSON(object: any): _119.QueryClientStateResponse;
                    toJSON(message: _119.QueryClientStateResponse): unknown;
                    fromPartial<I_9 extends {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
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
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_9["proofHeight"], keyof _117.Height>, never>;
                    } & Record<Exclude<keyof I_9, keyof _119.QueryClientStateResponse>, never>>(object: I_9): _119.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _119.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientStatesRequest;
                    fromJSON(object: any): _119.QueryClientStatesRequest;
                    toJSON(message: _119.QueryClientStatesRequest): unknown;
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
                    } & Record<Exclude<keyof I_10, "pagination">, never>>(object: I_10): _119.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _119.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientStatesResponse;
                    fromJSON(object: any): _119.QueryClientStatesResponse;
                    toJSON(message: _119.QueryClientStatesResponse): unknown;
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
                            total?: any;
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
                        } & Record<Exclude<keyof I_11["clientStates"][number], keyof _117.IdentifiedClientState>, never>)[] & Record<Exclude<keyof I_11["clientStates"], keyof {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_11["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                    } & Record<Exclude<keyof I_11, keyof _119.QueryClientStatesResponse>, never>>(object: I_11): _119.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _119.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryConsensusStateRequest;
                    fromJSON(object: any): _119.QueryConsensusStateRequest;
                    toJSON(message: _119.QueryConsensusStateRequest): unknown;
                    fromPartial<I_12 extends {
                        clientId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                        latestHeight?: boolean;
                    } & {
                        clientId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                        latestHeight?: boolean;
                    } & Record<Exclude<keyof I_12, keyof _119.QueryConsensusStateRequest>, never>>(object: I_12): _119.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _119.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryConsensusStateResponse;
                    fromJSON(object: any): _119.QueryConsensusStateResponse;
                    toJSON(message: _119.QueryConsensusStateResponse): unknown;
                    fromPartial<I_13 extends {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
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
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_13["proofHeight"], keyof _117.Height>, never>;
                    } & Record<Exclude<keyof I_13, keyof _119.QueryConsensusStateResponse>, never>>(object: I_13): _119.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _119.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryConsensusStatesRequest;
                    fromJSON(object: any): _119.QueryConsensusStatesRequest;
                    toJSON(message: _119.QueryConsensusStatesRequest): unknown;
                    fromPartial<I_14 extends {
                        clientId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    } & {
                        clientId?: string;
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
                    } & Record<Exclude<keyof I_14, keyof _119.QueryConsensusStatesRequest>, never>>(object: I_14): _119.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _119.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryConsensusStatesResponse;
                    fromJSON(object: any): _119.QueryConsensusStatesResponse;
                    toJSON(message: _119.QueryConsensusStatesResponse): unknown;
                    fromPartial<I_15 extends {
                        consensusStates?: {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    } & {
                        consensusStates?: {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[] & ({
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_15["consensusStates"][number]["height"], keyof _117.Height>, never>;
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_15["consensusStates"][number]["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_15["consensusStates"][number], keyof _117.ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I_15["consensusStates"], keyof {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_15["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                    } & Record<Exclude<keyof I_15, keyof _119.QueryConsensusStatesResponse>, never>>(object: I_15): _119.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _119.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientStatusRequest;
                    fromJSON(object: any): _119.QueryClientStatusRequest;
                    toJSON(message: _119.QueryClientStatusRequest): unknown;
                    fromPartial<I_16 extends {
                        clientId?: string;
                    } & {
                        clientId?: string;
                    } & Record<Exclude<keyof I_16, "clientId">, never>>(object: I_16): _119.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _119.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientStatusResponse;
                    fromJSON(object: any): _119.QueryClientStatusResponse;
                    toJSON(message: _119.QueryClientStatusResponse): unknown;
                    fromPartial<I_17 extends {
                        status?: string;
                    } & {
                        status?: string;
                    } & Record<Exclude<keyof I_17, "status">, never>>(object: I_17): _119.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _119.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientParamsRequest;
                    fromJSON(_: any): _119.QueryClientParamsRequest;
                    toJSON(_: _119.QueryClientParamsRequest): unknown;
                    fromPartial<I_18 extends {} & {} & Record<Exclude<keyof I_18, never>, never>>(_: I_18): _119.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _119.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientParamsResponse;
                    fromJSON(object: any): _119.QueryClientParamsResponse;
                    toJSON(message: _119.QueryClientParamsResponse): unknown;
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
                    } & Record<Exclude<keyof I_19, "params">, never>>(object: I_19): _119.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _119.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _119.QueryUpgradedClientStateRequest;
                    toJSON(_: _119.QueryUpgradedClientStateRequest): unknown;
                    fromPartial<I_20 extends {} & {} & Record<Exclude<keyof I_20, never>, never>>(_: I_20): _119.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _119.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _119.QueryUpgradedClientStateResponse;
                    toJSON(message: _119.QueryUpgradedClientStateResponse): unknown;
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
                    } & Record<Exclude<keyof I_21, "upgradedClientState">, never>>(object: I_21): _119.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _119.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _119.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _119.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial<I_22 extends {} & {} & Record<Exclude<keyof I_22, never>, never>>(_: I_22): _119.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _119.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _119.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _119.QueryUpgradedConsensusStateResponse): unknown;
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
                    } & Record<Exclude<keyof I_23, "upgradedConsensusState">, never>>(object: I_23): _119.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _118.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.GenesisState;
                    fromJSON(object: any): _118.GenesisState;
                    toJSON(message: _118.GenesisState): unknown;
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
                                    revisionNumber?: any;
                                    revisionHeight?: any;
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
                        nextClientSequence?: any;
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
                        } & Record<Exclude<keyof I_24["clients"][number], keyof _117.IdentifiedClientState>, never>)[] & Record<Exclude<keyof I_24["clients"], keyof {
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
                                    revisionNumber?: any;
                                    revisionHeight?: any;
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
                                    revisionNumber?: any;
                                    revisionHeight?: any;
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
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[] & ({
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            } & {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                } & {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                } & Record<Exclude<keyof I_24["clientsConsensus"][number]["consensusStates"][number]["height"], keyof _117.Height>, never>;
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                } & {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                } & Record<Exclude<keyof I_24["clientsConsensus"][number]["consensusStates"][number]["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                            } & Record<Exclude<keyof I_24["clientsConsensus"][number]["consensusStates"][number], keyof _117.ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I_24["clientsConsensus"][number]["consensusStates"], keyof {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[]>, never>;
                        } & Record<Exclude<keyof I_24["clientsConsensus"][number], keyof _117.ClientConsensusStates>, never>)[] & Record<Exclude<keyof I_24["clientsConsensus"], keyof {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
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
                            } & Record<Exclude<keyof I_24["clientsMetadata"][number]["clientMetadata"][number], keyof _118.GenesisMetadata>, never>)[] & Record<Exclude<keyof I_24["clientsMetadata"][number]["clientMetadata"], keyof {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_24["clientsMetadata"][number], keyof _118.IdentifiedGenesisMetadata>, never>)[] & Record<Exclude<keyof I_24["clientsMetadata"], keyof {
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
                        nextClientSequence?: any;
                    } & Record<Exclude<keyof I_24, keyof _118.GenesisState>, never>>(object: I_24): _118.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _118.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.GenesisMetadata;
                    fromJSON(object: any): _118.GenesisMetadata;
                    toJSON(message: _118.GenesisMetadata): unknown;
                    fromPartial<I_25 extends {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I_25, keyof _118.GenesisMetadata>, never>>(object: I_25): _118.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _118.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _118.IdentifiedGenesisMetadata;
                    toJSON(message: _118.IdentifiedGenesisMetadata): unknown;
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
                        } & Record<Exclude<keyof I_26["clientMetadata"][number], keyof _118.GenesisMetadata>, never>)[] & Record<Exclude<keyof I_26["clientMetadata"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_26, keyof _118.IdentifiedGenesisMetadata>, never>>(object: I_26): _118.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _117.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.IdentifiedClientState;
                    fromJSON(object: any): _117.IdentifiedClientState;
                    toJSON(message: _117.IdentifiedClientState): unknown;
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
                    } & Record<Exclude<keyof I_27, keyof _117.IdentifiedClientState>, never>>(object: I_27): _117.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _117.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ConsensusStateWithHeight;
                    fromJSON(object: any): _117.ConsensusStateWithHeight;
                    toJSON(message: _117.ConsensusStateWithHeight): unknown;
                    fromPartial<I_28 extends {
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_28["height"], keyof _117.Height>, never>;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_28["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_28, keyof _117.ConsensusStateWithHeight>, never>>(object: I_28): _117.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _117.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ClientConsensusStates;
                    fromJSON(object: any): _117.ClientConsensusStates;
                    toJSON(message: _117.ClientConsensusStates): unknown;
                    fromPartial<I_29 extends {
                        clientId?: string;
                        consensusStates?: {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
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
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[] & ({
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_29["consensusStates"][number]["height"], keyof _117.Height>, never>;
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_29["consensusStates"][number]["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_29["consensusStates"][number], keyof _117.ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I_29["consensusStates"], keyof {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[]>, never>;
                    } & Record<Exclude<keyof I_29, keyof _117.ClientConsensusStates>, never>>(object: I_29): _117.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _117.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ClientUpdateProposal;
                    fromJSON(object: any): _117.ClientUpdateProposal;
                    toJSON(message: _117.ClientUpdateProposal): unknown;
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
                    } & Record<Exclude<keyof I_30, keyof _117.ClientUpdateProposal>, never>>(object: I_30): _117.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _117.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.UpgradeProposal;
                    fromJSON(object: any): _117.UpgradeProposal;
                    toJSON(message: _117.UpgradeProposal): unknown;
                    fromPartial<I_31 extends {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: Date;
                            height?: any;
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
                            height?: any;
                            info?: string;
                            upgradedClientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            name?: string;
                            time?: Date;
                            height?: any;
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
                    } & Record<Exclude<keyof I_31, keyof _117.UpgradeProposal>, never>>(object: I_31): _117.UpgradeProposal;
                };
                Height: {
                    encode(message: _117.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Height;
                    fromJSON(object: any): _117.Height;
                    toJSON(message: _117.Height): unknown;
                    fromPartial<I_32 extends {
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & {
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & Record<Exclude<keyof I_32, keyof _117.Height>, never>>(object: I_32): _117.Height;
                };
                Params: {
                    encode(message: _117.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Params;
                    fromJSON(object: any): _117.Params;
                    toJSON(message: _117.Params): unknown;
                    fromPartial<I_33 extends {
                        allowedClients?: string[];
                    } & {
                        allowedClients?: string[] & string[] & Record<Exclude<keyof I_33["allowedClients"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_33, "allowedClients">, never>>(object: I_33): _117.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _121.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MerkleRoot;
                    fromJSON(object: any): _121.MerkleRoot;
                    toJSON(message: _121.MerkleRoot): unknown;
                    fromPartial<I extends {
                        hash?: Uint8Array;
                    } & {
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I, "hash">, never>>(object: I): _121.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _121.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MerklePrefix;
                    fromJSON(object: any): _121.MerklePrefix;
                    toJSON(message: _121.MerklePrefix): unknown;
                    fromPartial<I_1 extends {
                        keyPrefix?: Uint8Array;
                    } & {
                        keyPrefix?: Uint8Array;
                    } & Record<Exclude<keyof I_1, "keyPrefix">, never>>(object: I_1): _121.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _121.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MerklePath;
                    fromJSON(object: any): _121.MerklePath;
                    toJSON(message: _121.MerklePath): unknown;
                    fromPartial<I_2 extends {
                        keyPath?: string[];
                    } & {
                        keyPath?: string[] & string[] & Record<Exclude<keyof I_2["keyPath"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_2, "keyPath">, never>>(object: I_2): _121.MerklePath;
                };
                MerkleProof: {
                    encode(message: _121.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MerkleProof;
                    fromJSON(object: any): _121.MerkleProof;
                    toJSON(message: _121.MerkleProof): unknown;
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
                    } & Record<Exclude<keyof I_3, "proofs">, never>>(object: I_3): _121.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _125.MsgConnectionOpenInit): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _125.MsgConnectionOpenTry): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _125.MsgConnectionOpenAck): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _125.MsgConnectionOpenConfirm): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _125.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _125.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _125.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _125.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _125.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _125.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _125.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _125.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _125.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _125.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _125.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _125.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _125.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
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
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _125.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _125.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: {
                                revision_number: string;
                                revision_height: string;
                            };
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
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _125.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _125.MsgConnectionOpenAck) => {
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
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: {
                                revision_number: string;
                                revision_height: string;
                            };
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
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _125.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _125.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _125.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _125.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenInit;
                    fromJSON(object: any): _125.MsgConnectionOpenInit;
                    toJSON(message: _125.MsgConnectionOpenInit): unknown;
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
                        delayPeriod?: any;
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
                        } & Record<Exclude<keyof I["counterparty"], keyof _122.Counterparty>, never>;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        } & {
                            identifier?: string;
                            features?: string[] & string[] & Record<Exclude<keyof I["version"]["features"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I["version"], keyof _122.Version>, never>;
                        delayPeriod?: any;
                        signer?: string;
                    } & Record<Exclude<keyof I, keyof _125.MsgConnectionOpenInit>, never>>(object: I): _125.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _125.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _125.MsgConnectionOpenInitResponse;
                    toJSON(_: _125.MsgConnectionOpenInitResponse): unknown;
                    fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _125.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _125.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenTry;
                    fromJSON(object: any): _125.MsgConnectionOpenTry;
                    toJSON(message: _125.MsgConnectionOpenTry): unknown;
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
                        delayPeriod?: any;
                        counterpartyVersions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        proofInit?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
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
                        } & Record<Exclude<keyof I_2["counterparty"], keyof _122.Counterparty>, never>;
                        delayPeriod?: any;
                        counterpartyVersions?: {
                            identifier?: string;
                            features?: string[];
                        }[] & ({
                            identifier?: string;
                            features?: string[];
                        } & {
                            identifier?: string;
                            features?: string[] & string[] & Record<Exclude<keyof I_2["counterpartyVersions"][number]["features"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_2["counterpartyVersions"][number], keyof _122.Version>, never>)[] & Record<Exclude<keyof I_2["counterpartyVersions"], keyof {
                            identifier?: string;
                            features?: string[];
                        }[]>, never>;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_2["proofHeight"], keyof _117.Height>, never>;
                        proofInit?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_2["consensusHeight"], keyof _117.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_2, keyof _125.MsgConnectionOpenTry>, never>>(object: I_2): _125.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _125.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _125.MsgConnectionOpenTryResponse;
                    toJSON(_: _125.MsgConnectionOpenTryResponse): unknown;
                    fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _125.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _125.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenAck;
                    fromJSON(object: any): _125.MsgConnectionOpenAck;
                    toJSON(message: _125.MsgConnectionOpenAck): unknown;
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
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        proofTry?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
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
                        } & Record<Exclude<keyof I_4["version"], keyof _122.Version>, never>;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_4["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_4["proofHeight"], keyof _117.Height>, never>;
                        proofTry?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_4["consensusHeight"], keyof _117.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_4, keyof _125.MsgConnectionOpenAck>, never>>(object: I_4): _125.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _125.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _125.MsgConnectionOpenAckResponse;
                    toJSON(_: _125.MsgConnectionOpenAckResponse): unknown;
                    fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _125.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _125.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _125.MsgConnectionOpenConfirm;
                    toJSON(message: _125.MsgConnectionOpenConfirm): unknown;
                    fromPartial<I_6 extends {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_6["proofHeight"], keyof _117.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_6, keyof _125.MsgConnectionOpenConfirm>, never>>(object: I_6): _125.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _125.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _125.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _125.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends {} & {} & Record<Exclude<keyof I_7, never>, never>>(_: I_7): _125.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _124.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionRequest;
                    fromJSON(object: any): _124.QueryConnectionRequest;
                    toJSON(message: _124.QueryConnectionRequest): unknown;
                    fromPartial<I_8 extends {
                        connectionId?: string;
                    } & {
                        connectionId?: string;
                    } & Record<Exclude<keyof I_8, "connectionId">, never>>(object: I_8): _124.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _124.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionResponse;
                    fromJSON(object: any): _124.QueryConnectionResponse;
                    toJSON(message: _124.QueryConnectionResponse): unknown;
                    fromPartial<I_9 extends {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _122.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _122.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
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
                            } & Record<Exclude<keyof I_9["connection"]["versions"][number], keyof _122.Version>, never>)[] & Record<Exclude<keyof I_9["connection"]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _122.State;
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
                            } & Record<Exclude<keyof I_9["connection"]["counterparty"], keyof _122.Counterparty>, never>;
                            delayPeriod?: any;
                        } & Record<Exclude<keyof I_9["connection"], keyof _122.ConnectionEnd>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_9["proofHeight"], keyof _117.Height>, never>;
                    } & Record<Exclude<keyof I_9, keyof _124.QueryConnectionResponse>, never>>(object: I_9): _124.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _124.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionsRequest;
                    fromJSON(object: any): _124.QueryConnectionsRequest;
                    toJSON(message: _124.QueryConnectionsRequest): unknown;
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
                    } & Record<Exclude<keyof I_10, "pagination">, never>>(object: I_10): _124.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _124.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionsResponse;
                    fromJSON(object: any): _124.QueryConnectionsResponse;
                    toJSON(message: _124.QueryConnectionsResponse): unknown;
                    fromPartial<I_11 extends {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _122.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _122.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[] & ({
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _122.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
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
                            } & Record<Exclude<keyof I_11["connections"][number]["versions"][number], keyof _122.Version>, never>)[] & Record<Exclude<keyof I_11["connections"][number]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _122.State;
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
                            } & Record<Exclude<keyof I_11["connections"][number]["counterparty"], keyof _122.Counterparty>, never>;
                            delayPeriod?: any;
                        } & Record<Exclude<keyof I_11["connections"][number], keyof _122.IdentifiedConnection>, never>)[] & Record<Exclude<keyof I_11["connections"], keyof {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _122.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_11["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_11["height"], keyof _117.Height>, never>;
                    } & Record<Exclude<keyof I_11, keyof _124.QueryConnectionsResponse>, never>>(object: I_11): _124.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _124.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryClientConnectionsRequest;
                    fromJSON(object: any): _124.QueryClientConnectionsRequest;
                    toJSON(message: _124.QueryClientConnectionsRequest): unknown;
                    fromPartial<I_12 extends {
                        clientId?: string;
                    } & {
                        clientId?: string;
                    } & Record<Exclude<keyof I_12, "clientId">, never>>(object: I_12): _124.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _124.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryClientConnectionsResponse;
                    fromJSON(object: any): _124.QueryClientConnectionsResponse;
                    toJSON(message: _124.QueryClientConnectionsResponse): unknown;
                    fromPartial<I_13 extends {
                        connectionPaths?: string[];
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        connectionPaths?: string[] & string[] & Record<Exclude<keyof I_13["connectionPaths"], keyof string[]>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_13["proofHeight"], keyof _117.Height>, never>;
                    } & Record<Exclude<keyof I_13, keyof _124.QueryClientConnectionsResponse>, never>>(object: I_13): _124.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _124.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _124.QueryConnectionClientStateRequest;
                    toJSON(message: _124.QueryConnectionClientStateRequest): unknown;
                    fromPartial<I_14 extends {
                        connectionId?: string;
                    } & {
                        connectionId?: string;
                    } & Record<Exclude<keyof I_14, "connectionId">, never>>(object: I_14): _124.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _124.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _124.QueryConnectionClientStateResponse;
                    toJSON(message: _124.QueryConnectionClientStateResponse): unknown;
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
                            revisionNumber?: any;
                            revisionHeight?: any;
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
                        } & Record<Exclude<keyof I_15["identifiedClientState"], keyof _117.IdentifiedClientState>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_15["proofHeight"], keyof _117.Height>, never>;
                    } & Record<Exclude<keyof I_15, keyof _124.QueryConnectionClientStateResponse>, never>>(object: I_15): _124.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _124.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _124.QueryConnectionConsensusStateRequest;
                    toJSON(message: _124.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial<I_16 extends {
                        connectionId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & {
                        connectionId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & Record<Exclude<keyof I_16, keyof _124.QueryConnectionConsensusStateRequest>, never>>(object: I_16): _124.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _124.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _124.QueryConnectionConsensusStateResponse;
                    toJSON(message: _124.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial<I_17 extends {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
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
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_17["proofHeight"], keyof _117.Height>, never>;
                    } & Record<Exclude<keyof I_17, keyof _124.QueryConnectionConsensusStateResponse>, never>>(object: I_17): _124.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _123.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.GenesisState;
                    fromJSON(object: any): _123.GenesisState;
                    toJSON(message: _123.GenesisState): unknown;
                    fromPartial<I_18 extends {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _122.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[];
                        clientConnectionPaths?: {
                            clientId?: string;
                            paths?: string[];
                        }[];
                        nextConnectionSequence?: any;
                        params?: {
                            maxExpectedTimePerBlock?: any;
                        };
                    } & {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _122.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[] & ({
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _122.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
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
                            } & Record<Exclude<keyof I_18["connections"][number]["versions"][number], keyof _122.Version>, never>)[] & Record<Exclude<keyof I_18["connections"][number]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _122.State;
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
                            } & Record<Exclude<keyof I_18["connections"][number]["counterparty"], keyof _122.Counterparty>, never>;
                            delayPeriod?: any;
                        } & Record<Exclude<keyof I_18["connections"][number], keyof _122.IdentifiedConnection>, never>)[] & Record<Exclude<keyof I_18["connections"], keyof {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _122.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
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
                        } & Record<Exclude<keyof I_18["clientConnectionPaths"][number], keyof _122.ConnectionPaths>, never>)[] & Record<Exclude<keyof I_18["clientConnectionPaths"], keyof {
                            clientId?: string;
                            paths?: string[];
                        }[]>, never>;
                        nextConnectionSequence?: any;
                        params?: {
                            maxExpectedTimePerBlock?: any;
                        } & {
                            maxExpectedTimePerBlock?: any;
                        } & Record<Exclude<keyof I_18["params"], "maxExpectedTimePerBlock">, never>;
                    } & Record<Exclude<keyof I_18, keyof _123.GenesisState>, never>>(object: I_18): _123.GenesisState;
                };
                stateFromJSON(object: any): _122.State;
                stateToJSON(object: _122.State): string;
                State: typeof _122.State;
                ConnectionEnd: {
                    encode(message: _122.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ConnectionEnd;
                    fromJSON(object: any): _122.ConnectionEnd;
                    toJSON(message: _122.ConnectionEnd): unknown;
                    fromPartial<I_19 extends {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _122.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
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
                        } & Record<Exclude<keyof I_19["versions"][number], keyof _122.Version>, never>)[] & Record<Exclude<keyof I_19["versions"], keyof {
                            identifier?: string;
                            features?: string[];
                        }[]>, never>;
                        state?: _122.State;
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
                        } & Record<Exclude<keyof I_19["counterparty"], keyof _122.Counterparty>, never>;
                        delayPeriod?: any;
                    } & Record<Exclude<keyof I_19, keyof _122.ConnectionEnd>, never>>(object: I_19): _122.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _122.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.IdentifiedConnection;
                    fromJSON(object: any): _122.IdentifiedConnection;
                    toJSON(message: _122.IdentifiedConnection): unknown;
                    fromPartial<I_20 extends {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _122.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
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
                        } & Record<Exclude<keyof I_20["versions"][number], keyof _122.Version>, never>)[] & Record<Exclude<keyof I_20["versions"], keyof {
                            identifier?: string;
                            features?: string[];
                        }[]>, never>;
                        state?: _122.State;
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
                        } & Record<Exclude<keyof I_20["counterparty"], keyof _122.Counterparty>, never>;
                        delayPeriod?: any;
                    } & Record<Exclude<keyof I_20, keyof _122.IdentifiedConnection>, never>>(object: I_20): _122.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _122.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Counterparty;
                    fromJSON(object: any): _122.Counterparty;
                    toJSON(message: _122.Counterparty): unknown;
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
                    } & Record<Exclude<keyof I_21, keyof _122.Counterparty>, never>>(object: I_21): _122.Counterparty;
                };
                ClientPaths: {
                    encode(message: _122.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ClientPaths;
                    fromJSON(object: any): _122.ClientPaths;
                    toJSON(message: _122.ClientPaths): unknown;
                    fromPartial<I_22 extends {
                        paths?: string[];
                    } & {
                        paths?: string[] & string[] & Record<Exclude<keyof I_22["paths"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_22, "paths">, never>>(object: I_22): _122.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _122.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ConnectionPaths;
                    fromJSON(object: any): _122.ConnectionPaths;
                    toJSON(message: _122.ConnectionPaths): unknown;
                    fromPartial<I_23 extends {
                        clientId?: string;
                        paths?: string[];
                    } & {
                        clientId?: string;
                        paths?: string[] & string[] & Record<Exclude<keyof I_23["paths"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_23, keyof _122.ConnectionPaths>, never>>(object: I_23): _122.ConnectionPaths;
                };
                Version: {
                    encode(message: _122.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Version;
                    fromJSON(object: any): _122.Version;
                    toJSON(message: _122.Version): unknown;
                    fromPartial<I_24 extends {
                        identifier?: string;
                        features?: string[];
                    } & {
                        identifier?: string;
                        features?: string[] & string[] & Record<Exclude<keyof I_24["features"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_24, keyof _122.Version>, never>>(object: I_24): _122.Version;
                };
                Params: {
                    encode(message: _122.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Params;
                    fromJSON(object: any): _122.Params;
                    toJSON(message: _122.Params): unknown;
                    fromPartial<I_25 extends {
                        maxExpectedTimePerBlock?: any;
                    } & {
                        maxExpectedTimePerBlock?: any;
                    } & Record<Exclude<keyof I_25, "maxExpectedTimePerBlock">, never>>(object: I_25): _122.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryAppVersionRequest: {
                    encode(message: _126.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAppVersionRequest;
                    fromJSON(object: any): _126.QueryAppVersionRequest;
                    toJSON(message: _126.QueryAppVersionRequest): unknown;
                    fromPartial<I extends {
                        portId?: string;
                        connectionId?: string;
                        ordering?: _113.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        proposedVersion?: string;
                    } & {
                        portId?: string;
                        connectionId?: string;
                        ordering?: _113.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        } & {
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I["counterparty"], keyof _113.Counterparty>, never>;
                        proposedVersion?: string;
                    } & Record<Exclude<keyof I, keyof _126.QueryAppVersionRequest>, never>>(object: I): _126.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _126.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAppVersionResponse;
                    fromJSON(object: any): _126.QueryAppVersionResponse;
                    toJSON(message: _126.QueryAppVersionResponse): unknown;
                    fromPartial<I_1 extends {
                        portId?: string;
                        version?: string;
                    } & {
                        portId?: string;
                        version?: string;
                    } & Record<Exclude<keyof I_1, keyof _126.QueryAppVersionResponse>, never>>(object: I_1): _126.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _127.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.GenesisState;
                    fromJSON(object: any): _127.GenesisState;
                    toJSON(message: _127.GenesisState): unknown;
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
                                        revisionNumber?: any;
                                        revisionHeight?: any;
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
                            nextClientSequence?: any;
                        };
                        connectionGenesis?: {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _122.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: any;
                            }[];
                            clientConnectionPaths?: {
                                clientId?: string;
                                paths?: string[];
                            }[];
                            nextConnectionSequence?: any;
                            params?: {
                                maxExpectedTimePerBlock?: any;
                            };
                        };
                        channelGenesis?: {
                            channels?: {
                                state?: _113.State;
                                ordering?: _113.Order;
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
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            commitments?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            receipts?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            sendSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            recvSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            ackSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            nextChannelSequence?: any;
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
                                        revisionNumber?: any;
                                        revisionHeight?: any;
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
                            nextClientSequence?: any;
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
                            } & Record<Exclude<keyof I["clientGenesis"]["clients"][number], keyof _117.IdentifiedClientState>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clients"], keyof {
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
                                        revisionNumber?: any;
                                        revisionHeight?: any;
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
                                        revisionNumber?: any;
                                        revisionHeight?: any;
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
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[] & ({
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                } & {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    } & {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["height"], keyof _117.Height>, never>;
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    } & {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                                } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number], keyof _117.ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"], keyof {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[]>, never>;
                            } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number], keyof _117.ClientConsensusStates>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"], keyof {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
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
                                } & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number]["clientMetadata"][number], keyof _118.GenesisMetadata>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number]["clientMetadata"], keyof {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[]>, never>;
                            } & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number], keyof _118.IdentifiedGenesisMetadata>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"], keyof {
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
                            nextClientSequence?: any;
                        } & Record<Exclude<keyof I["clientGenesis"], keyof _118.GenesisState>, never>;
                        connectionGenesis?: {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _122.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: any;
                            }[];
                            clientConnectionPaths?: {
                                clientId?: string;
                                paths?: string[];
                            }[];
                            nextConnectionSequence?: any;
                            params?: {
                                maxExpectedTimePerBlock?: any;
                            };
                        } & {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _122.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: any;
                            }[] & ({
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _122.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: any;
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
                                } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"][number], keyof _122.Version>, never>)[] & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"], keyof {
                                    identifier?: string;
                                    features?: string[];
                                }[]>, never>;
                                state?: _122.State;
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
                                } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["counterparty"], keyof _122.Counterparty>, never>;
                                delayPeriod?: any;
                            } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number], keyof _122.IdentifiedConnection>, never>)[] & Record<Exclude<keyof I["connectionGenesis"]["connections"], keyof {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _122.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: any;
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
                            } & Record<Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"][number], keyof _122.ConnectionPaths>, never>)[] & Record<Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"], keyof {
                                clientId?: string;
                                paths?: string[];
                            }[]>, never>;
                            nextConnectionSequence?: any;
                            params?: {
                                maxExpectedTimePerBlock?: any;
                            } & {
                                maxExpectedTimePerBlock?: any;
                            } & Record<Exclude<keyof I["connectionGenesis"]["params"], "maxExpectedTimePerBlock">, never>;
                        } & Record<Exclude<keyof I["connectionGenesis"], keyof _123.GenesisState>, never>;
                        channelGenesis?: {
                            channels?: {
                                state?: _113.State;
                                ordering?: _113.Order;
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
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            commitments?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            receipts?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            sendSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            recvSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            ackSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            nextChannelSequence?: any;
                        } & {
                            channels?: {
                                state?: _113.State;
                                ordering?: _113.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[] & ({
                                state?: _113.State;
                                ordering?: _113.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            } & {
                                state?: _113.State;
                                ordering?: _113.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                } & {
                                    portId?: string;
                                    channelId?: string;
                                } & Record<Exclude<keyof I["channelGenesis"]["channels"][number]["counterparty"], keyof _113.Counterparty>, never>;
                                connectionHops?: string[] & string[] & Record<Exclude<keyof I["channelGenesis"]["channels"][number]["connectionHops"], keyof string[]>, never>;
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I["channelGenesis"]["channels"][number], keyof _113.IdentifiedChannel>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["channels"], keyof {
                                state?: _113.State;
                                ordering?: _113.Order;
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
                                sequence?: any;
                                data?: Uint8Array;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            } & Record<Exclude<keyof I["channelGenesis"]["acknowledgements"][number], keyof _113.PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["acknowledgements"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[]>, never>;
                            commitments?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            } & Record<Exclude<keyof I["channelGenesis"]["commitments"][number], keyof _113.PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["commitments"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[]>, never>;
                            receipts?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            } & Record<Exclude<keyof I["channelGenesis"]["receipts"][number], keyof _113.PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["receipts"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[]>, never>;
                            sendSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            } & Record<Exclude<keyof I["channelGenesis"]["sendSequences"][number], keyof _114.PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["sendSequences"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[]>, never>;
                            recvSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            } & Record<Exclude<keyof I["channelGenesis"]["recvSequences"][number], keyof _114.PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["recvSequences"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[]>, never>;
                            ackSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            } & Record<Exclude<keyof I["channelGenesis"]["ackSequences"][number], keyof _114.PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["ackSequences"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[]>, never>;
                            nextChannelSequence?: any;
                        } & Record<Exclude<keyof I["channelGenesis"], keyof _114.GenesisState>, never>;
                    } & Record<Exclude<keyof I, keyof _127.GenesisState>, never>>(object: I): _127.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _128.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ClientState;
                    fromJSON(object: any): _128.ClientState;
                    toJSON(message: _128.ClientState): unknown;
                    fromPartial<I extends {
                        chainId?: string;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        chainId?: string;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I["height"], keyof _117.Height>, never>;
                    } & Record<Exclude<keyof I, keyof _128.ClientState>, never>>(object: I): _128.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _129.DataType;
                dataTypeToJSON(object: _129.DataType): string;
                DataType: typeof _129.DataType;
                ClientState: {
                    encode(message: _129.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ClientState;
                    fromJSON(object: any): _129.ClientState;
                    toJSON(message: _129.ClientState): unknown;
                    fromPartial<I extends {
                        sequence?: any;
                        frozenSequence?: any;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allowUpdateAfterProposal?: boolean;
                    } & {
                        sequence?: any;
                        frozenSequence?: any;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        } & {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I["consensusState"]["publicKey"], keyof import("../google/protobuf/any").Any>, never>;
                            diversifier?: string;
                            timestamp?: any;
                        } & Record<Exclude<keyof I["consensusState"], keyof _129.ConsensusState>, never>;
                        allowUpdateAfterProposal?: boolean;
                    } & Record<Exclude<keyof I, keyof _129.ClientState>, never>>(object: I): _129.ClientState;
                };
                ConsensusState: {
                    encode(message: _129.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ConsensusState;
                    fromJSON(object: any): _129.ConsensusState;
                    toJSON(message: _129.ConsensusState): unknown;
                    fromPartial<I_1 extends {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    } & {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_1["publicKey"], keyof import("../google/protobuf/any").Any>, never>;
                        diversifier?: string;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_1, keyof _129.ConsensusState>, never>>(object: I_1): _129.ConsensusState;
                };
                Header: {
                    encode(message: _129.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.Header;
                    fromJSON(object: any): _129.Header;
                    toJSON(message: _129.Header): unknown;
                    fromPartial<I_2 extends {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    } & {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_2["newPublicKey"], keyof import("../google/protobuf/any").Any>, never>;
                        newDiversifier?: string;
                    } & Record<Exclude<keyof I_2, keyof _129.Header>, never>>(object: I_2): _129.Header;
                };
                Misbehaviour: {
                    encode(message: _129.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.Misbehaviour;
                    fromJSON(object: any): _129.Misbehaviour;
                    toJSON(message: _129.Misbehaviour): unknown;
                    fromPartial<I_3 extends {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _129.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _129.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    } & {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _129.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & {
                            signature?: Uint8Array;
                            dataType?: _129.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & Record<Exclude<keyof I_3["signatureOne"], keyof _129.SignatureAndData>, never>;
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _129.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & {
                            signature?: Uint8Array;
                            dataType?: _129.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & Record<Exclude<keyof I_3["signatureTwo"], keyof _129.SignatureAndData>, never>;
                    } & Record<Exclude<keyof I_3, keyof _129.Misbehaviour>, never>>(object: I_3): _129.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _129.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.SignatureAndData;
                    fromJSON(object: any): _129.SignatureAndData;
                    toJSON(message: _129.SignatureAndData): unknown;
                    fromPartial<I_4 extends {
                        signature?: Uint8Array;
                        dataType?: _129.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    } & {
                        signature?: Uint8Array;
                        dataType?: _129.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_4, keyof _129.SignatureAndData>, never>>(object: I_4): _129.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _129.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.TimestampedSignatureData;
                    fromJSON(object: any): _129.TimestampedSignatureData;
                    toJSON(message: _129.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    } & {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_5, keyof _129.TimestampedSignatureData>, never>>(object: I_5): _129.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _129.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.SignBytes;
                    fromJSON(object: any): _129.SignBytes;
                    toJSON(message: _129.SignBytes): unknown;
                    fromPartial<I_6 extends {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _129.DataType;
                        data?: Uint8Array;
                    } & {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _129.DataType;
                        data?: Uint8Array;
                    } & Record<Exclude<keyof I_6, keyof _129.SignBytes>, never>>(object: I_6): _129.SignBytes;
                };
                HeaderData: {
                    encode(message: _129.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.HeaderData;
                    fromJSON(object: any): _129.HeaderData;
                    toJSON(message: _129.HeaderData): unknown;
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
                    } & Record<Exclude<keyof I_7, keyof _129.HeaderData>, never>>(object: I_7): _129.HeaderData;
                };
                ClientStateData: {
                    encode(message: _129.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ClientStateData;
                    fromJSON(object: any): _129.ClientStateData;
                    toJSON(message: _129.ClientStateData): unknown;
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
                    } & Record<Exclude<keyof I_8, keyof _129.ClientStateData>, never>>(object: I_8): _129.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _129.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ConsensusStateData;
                    fromJSON(object: any): _129.ConsensusStateData;
                    toJSON(message: _129.ConsensusStateData): unknown;
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
                    } & Record<Exclude<keyof I_9, keyof _129.ConsensusStateData>, never>>(object: I_9): _129.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _129.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ConnectionStateData;
                    fromJSON(object: any): _129.ConnectionStateData;
                    toJSON(message: _129.ConnectionStateData): unknown;
                    fromPartial<I_10 extends {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _122.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                    } & {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _122.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
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
                            } & Record<Exclude<keyof I_10["connection"]["versions"][number], keyof _122.Version>, never>)[] & Record<Exclude<keyof I_10["connection"]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _122.State;
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
                            } & Record<Exclude<keyof I_10["connection"]["counterparty"], keyof _122.Counterparty>, never>;
                            delayPeriod?: any;
                        } & Record<Exclude<keyof I_10["connection"], keyof _122.ConnectionEnd>, never>;
                    } & Record<Exclude<keyof I_10, keyof _129.ConnectionStateData>, never>>(object: I_10): _129.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _129.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ChannelStateData;
                    fromJSON(object: any): _129.ChannelStateData;
                    toJSON(message: _129.ChannelStateData): unknown;
                    fromPartial<I_11 extends {
                        path?: Uint8Array;
                        channel?: {
                            state?: _113.State;
                            ordering?: _113.Order;
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
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_11["channel"]["counterparty"], keyof _113.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_11["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I_11["channel"], keyof _113.Channel>, never>;
                    } & Record<Exclude<keyof I_11, keyof _129.ChannelStateData>, never>>(object: I_11): _129.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _129.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.PacketCommitmentData;
                    fromJSON(object: any): _129.PacketCommitmentData;
                    toJSON(message: _129.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    } & Record<Exclude<keyof I_12, keyof _129.PacketCommitmentData>, never>>(object: I_12): _129.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _129.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.PacketAcknowledgementData;
                    fromJSON(object: any): _129.PacketAcknowledgementData;
                    toJSON(message: _129.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    } & Record<Exclude<keyof I_13, keyof _129.PacketAcknowledgementData>, never>>(object: I_13): _129.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _129.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.PacketReceiptAbsenceData;
                    fromJSON(object: any): _129.PacketReceiptAbsenceData;
                    toJSON(message: _129.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends {
                        path?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                    } & Record<Exclude<keyof I_14, "path">, never>>(object: I_14): _129.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _129.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.NextSequenceRecvData;
                    fromJSON(object: any): _129.NextSequenceRecvData;
                    toJSON(message: _129.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    } & {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    } & Record<Exclude<keyof I_15, keyof _129.NextSequenceRecvData>, never>>(object: I_15): _129.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _130.DataType;
                dataTypeToJSON(object: _130.DataType): string;
                DataType: typeof _130.DataType;
                ClientState: {
                    encode(message: _130.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ClientState;
                    fromJSON(object: any): _130.ClientState;
                    toJSON(message: _130.ClientState): unknown;
                    fromPartial<I extends {
                        sequence?: any;
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allowUpdateAfterProposal?: boolean;
                    } & {
                        sequence?: any;
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        } & {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I["consensusState"]["publicKey"], keyof import("../google/protobuf/any").Any>, never>;
                            diversifier?: string;
                            timestamp?: any;
                        } & Record<Exclude<keyof I["consensusState"], keyof _130.ConsensusState>, never>;
                        allowUpdateAfterProposal?: boolean;
                    } & Record<Exclude<keyof I, keyof _130.ClientState>, never>>(object: I): _130.ClientState;
                };
                ConsensusState: {
                    encode(message: _130.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ConsensusState;
                    fromJSON(object: any): _130.ConsensusState;
                    toJSON(message: _130.ConsensusState): unknown;
                    fromPartial<I_1 extends {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    } & {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_1["publicKey"], keyof import("../google/protobuf/any").Any>, never>;
                        diversifier?: string;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_1, keyof _130.ConsensusState>, never>>(object: I_1): _130.ConsensusState;
                };
                Header: {
                    encode(message: _130.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Header;
                    fromJSON(object: any): _130.Header;
                    toJSON(message: _130.Header): unknown;
                    fromPartial<I_2 extends {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    } & {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_2["newPublicKey"], keyof import("../google/protobuf/any").Any>, never>;
                        newDiversifier?: string;
                    } & Record<Exclude<keyof I_2, keyof _130.Header>, never>>(object: I_2): _130.Header;
                };
                Misbehaviour: {
                    encode(message: _130.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Misbehaviour;
                    fromJSON(object: any): _130.Misbehaviour;
                    toJSON(message: _130.Misbehaviour): unknown;
                    fromPartial<I_3 extends {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _130.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _130.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    } & {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _130.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & {
                            signature?: Uint8Array;
                            dataType?: _130.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & Record<Exclude<keyof I_3["signatureOne"], keyof _130.SignatureAndData>, never>;
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _130.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & {
                            signature?: Uint8Array;
                            dataType?: _130.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & Record<Exclude<keyof I_3["signatureTwo"], keyof _130.SignatureAndData>, never>;
                    } & Record<Exclude<keyof I_3, keyof _130.Misbehaviour>, never>>(object: I_3): _130.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _130.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.SignatureAndData;
                    fromJSON(object: any): _130.SignatureAndData;
                    toJSON(message: _130.SignatureAndData): unknown;
                    fromPartial<I_4 extends {
                        signature?: Uint8Array;
                        dataType?: _130.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    } & {
                        signature?: Uint8Array;
                        dataType?: _130.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_4, keyof _130.SignatureAndData>, never>>(object: I_4): _130.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _130.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.TimestampedSignatureData;
                    fromJSON(object: any): _130.TimestampedSignatureData;
                    toJSON(message: _130.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    } & {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_5, keyof _130.TimestampedSignatureData>, never>>(object: I_5): _130.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _130.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.SignBytes;
                    fromJSON(object: any): _130.SignBytes;
                    toJSON(message: _130.SignBytes): unknown;
                    fromPartial<I_6 extends {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _130.DataType;
                        data?: Uint8Array;
                    } & {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _130.DataType;
                        data?: Uint8Array;
                    } & Record<Exclude<keyof I_6, keyof _130.SignBytes>, never>>(object: I_6): _130.SignBytes;
                };
                HeaderData: {
                    encode(message: _130.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.HeaderData;
                    fromJSON(object: any): _130.HeaderData;
                    toJSON(message: _130.HeaderData): unknown;
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
                    } & Record<Exclude<keyof I_7, keyof _130.HeaderData>, never>>(object: I_7): _130.HeaderData;
                };
                ClientStateData: {
                    encode(message: _130.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ClientStateData;
                    fromJSON(object: any): _130.ClientStateData;
                    toJSON(message: _130.ClientStateData): unknown;
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
                    } & Record<Exclude<keyof I_8, keyof _130.ClientStateData>, never>>(object: I_8): _130.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _130.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ConsensusStateData;
                    fromJSON(object: any): _130.ConsensusStateData;
                    toJSON(message: _130.ConsensusStateData): unknown;
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
                    } & Record<Exclude<keyof I_9, keyof _130.ConsensusStateData>, never>>(object: I_9): _130.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _130.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ConnectionStateData;
                    fromJSON(object: any): _130.ConnectionStateData;
                    toJSON(message: _130.ConnectionStateData): unknown;
                    fromPartial<I_10 extends {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _122.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                    } & {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _122.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
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
                            } & Record<Exclude<keyof I_10["connection"]["versions"][number], keyof _122.Version>, never>)[] & Record<Exclude<keyof I_10["connection"]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _122.State;
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
                            } & Record<Exclude<keyof I_10["connection"]["counterparty"], keyof _122.Counterparty>, never>;
                            delayPeriod?: any;
                        } & Record<Exclude<keyof I_10["connection"], keyof _122.ConnectionEnd>, never>;
                    } & Record<Exclude<keyof I_10, keyof _130.ConnectionStateData>, never>>(object: I_10): _130.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _130.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ChannelStateData;
                    fromJSON(object: any): _130.ChannelStateData;
                    toJSON(message: _130.ChannelStateData): unknown;
                    fromPartial<I_11 extends {
                        path?: Uint8Array;
                        channel?: {
                            state?: _113.State;
                            ordering?: _113.Order;
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
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_11["channel"]["counterparty"], keyof _113.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_11["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I_11["channel"], keyof _113.Channel>, never>;
                    } & Record<Exclude<keyof I_11, keyof _130.ChannelStateData>, never>>(object: I_11): _130.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _130.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.PacketCommitmentData;
                    fromJSON(object: any): _130.PacketCommitmentData;
                    toJSON(message: _130.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    } & Record<Exclude<keyof I_12, keyof _130.PacketCommitmentData>, never>>(object: I_12): _130.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _130.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.PacketAcknowledgementData;
                    fromJSON(object: any): _130.PacketAcknowledgementData;
                    toJSON(message: _130.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    } & Record<Exclude<keyof I_13, keyof _130.PacketAcknowledgementData>, never>>(object: I_13): _130.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _130.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.PacketReceiptAbsenceData;
                    fromJSON(object: any): _130.PacketReceiptAbsenceData;
                    toJSON(message: _130.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends {
                        path?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                    } & Record<Exclude<keyof I_14, "path">, never>>(object: I_14): _130.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _130.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.NextSequenceRecvData;
                    fromJSON(object: any): _130.NextSequenceRecvData;
                    toJSON(message: _130.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    } & {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    } & Record<Exclude<keyof I_15, keyof _130.NextSequenceRecvData>, never>>(object: I_15): _130.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _131.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ClientState;
                    fromJSON(object: any): _131.ClientState;
                    toJSON(message: _131.ClientState): unknown;
                    fromPartial<I extends {
                        chainId?: string;
                        trustLevel?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        trustingPeriod?: string;
                        unbondingPeriod?: string;
                        maxClockDrift?: string;
                        frozenHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        latestHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
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
                            numerator?: any;
                            denominator?: any;
                        } & {
                            numerator?: any;
                            denominator?: any;
                        } & Record<Exclude<keyof I["trustLevel"], keyof _131.Fraction>, never>;
                        trustingPeriod?: string;
                        unbondingPeriod?: string;
                        maxClockDrift?: string;
                        frozenHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I["frozenHeight"], keyof _117.Height>, never>;
                        latestHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I["latestHeight"], keyof _117.Height>, never>;
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
                    } & Record<Exclude<keyof I, keyof _131.ClientState>, never>>(object: I): _131.ClientState;
                };
                ConsensusState: {
                    encode(message: _131.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ConsensusState;
                    fromJSON(object: any): _131.ConsensusState;
                    toJSON(message: _131.ConsensusState): unknown;
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
                    } & Record<Exclude<keyof I_1, keyof _131.ConsensusState>, never>>(object: I_1): _131.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _131.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Misbehaviour;
                    fromJSON(object: any): _131.Misbehaviour;
                    toJSON(message: _131.Misbehaviour): unknown;
                    fromPartial<I_2 extends {
                        clientId?: string;
                        header_1?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
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
                                    height?: any;
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
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        header_2?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
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
                                    height?: any;
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
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                    } & {
                        clientId?: string;
                        header_1?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
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
                                    height?: any;
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
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        } & {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
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
                                    height?: any;
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
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
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
                                        block?: any;
                                        app?: any;
                                    } & {
                                        block?: any;
                                        app?: any;
                                    } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["header"]["version"], keyof import("../tendermint/version/types").Consensus>, never>;
                                    chainId?: string;
                                    height?: any;
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
                                        } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["header"]["lastBlockId"], keyof import("../tendermint/types/types").BlockID>, never>;
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["header"], keyof import("../tendermint/types/types").Header>, never>;
                                commit?: {
                                    height?: any;
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
                                    height?: any;
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
                                        } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["commit"]["blockId"], keyof import("../tendermint/types/types").BlockID>, never>;
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
                                    } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["commit"]["signatures"][number], keyof import("../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["commit"]["signatures"], keyof {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[]>, never>;
                                } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["commit"], keyof import("../tendermint/types/types").Commit>, never>;
                            } & Record<Exclude<keyof I_2["header_1"]["signedHeader"], keyof import("../tendermint/types/types").SignedHeader>, never>;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            } & {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[] & ({
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_1"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_1"]["validatorSet"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_2["header_1"]["validatorSet"]["validators"], keyof {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[]>, never>;
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_1"]["validatorSet"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_1"]["validatorSet"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                                totalVotingPower?: any;
                            } & Record<Exclude<keyof I_2["header_1"]["validatorSet"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_2["header_1"]["trustedHeight"], keyof _117.Height>, never>;
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            } & {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[] & ({
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_1"]["trustedValidators"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_1"]["trustedValidators"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_2["header_1"]["trustedValidators"]["validators"], keyof {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[]>, never>;
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_1"]["trustedValidators"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_1"]["trustedValidators"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                                totalVotingPower?: any;
                            } & Record<Exclude<keyof I_2["header_1"]["trustedValidators"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                        } & Record<Exclude<keyof I_2["header_1"], keyof _131.Header>, never>;
                        header_2?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
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
                                    height?: any;
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
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        } & {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
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
                                    height?: any;
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
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
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
                                        block?: any;
                                        app?: any;
                                    } & {
                                        block?: any;
                                        app?: any;
                                    } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["header"]["version"], keyof import("../tendermint/version/types").Consensus>, never>;
                                    chainId?: string;
                                    height?: any;
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
                                        } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["header"]["lastBlockId"], keyof import("../tendermint/types/types").BlockID>, never>;
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["header"], keyof import("../tendermint/types/types").Header>, never>;
                                commit?: {
                                    height?: any;
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
                                    height?: any;
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
                                        } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["commit"]["blockId"], keyof import("../tendermint/types/types").BlockID>, never>;
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
                                    } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["commit"]["signatures"][number], keyof import("../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["commit"]["signatures"], keyof {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[]>, never>;
                                } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["commit"], keyof import("../tendermint/types/types").Commit>, never>;
                            } & Record<Exclude<keyof I_2["header_2"]["signedHeader"], keyof import("../tendermint/types/types").SignedHeader>, never>;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            } & {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[] & ({
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_2"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_2"]["validatorSet"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_2["header_2"]["validatorSet"]["validators"], keyof {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[]>, never>;
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_2"]["validatorSet"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_2"]["validatorSet"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                                totalVotingPower?: any;
                            } & Record<Exclude<keyof I_2["header_2"]["validatorSet"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_2["header_2"]["trustedHeight"], keyof _117.Height>, never>;
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            } & {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[] & ({
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_2"]["trustedValidators"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_2"]["trustedValidators"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_2["header_2"]["trustedValidators"]["validators"], keyof {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[]>, never>;
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_2"]["trustedValidators"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_2"]["trustedValidators"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                                totalVotingPower?: any;
                            } & Record<Exclude<keyof I_2["header_2"]["trustedValidators"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                        } & Record<Exclude<keyof I_2["header_2"], keyof _131.Header>, never>;
                    } & Record<Exclude<keyof I_2, keyof _131.Misbehaviour>, never>>(object: I_2): _131.Misbehaviour;
                };
                Header: {
                    encode(message: _131.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Header;
                    fromJSON(object: any): _131.Header;
                    toJSON(message: _131.Header): unknown;
                    fromPartial<I_3 extends {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
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
                                height?: any;
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
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        };
                        trustedHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        trustedValidators?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        };
                    } & {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
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
                                height?: any;
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
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
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
                                    block?: any;
                                    app?: any;
                                } & {
                                    block?: any;
                                    app?: any;
                                } & Record<Exclude<keyof I_3["signedHeader"]["header"]["version"], keyof import("../tendermint/version/types").Consensus>, never>;
                                chainId?: string;
                                height?: any;
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
                                height?: any;
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
                                height?: any;
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
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        } & {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[] & ({
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_3["validatorSet"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_3["validatorSet"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_3["validatorSet"]["validators"], keyof {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[]>, never>;
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_3["validatorSet"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_3["validatorSet"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                            totalVotingPower?: any;
                        } & Record<Exclude<keyof I_3["validatorSet"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                        trustedHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_3["trustedHeight"], keyof _117.Height>, never>;
                        trustedValidators?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        } & {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[] & ({
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_3["trustedValidators"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_3["trustedValidators"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_3["trustedValidators"]["validators"], keyof {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[]>, never>;
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_3["trustedValidators"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_3["trustedValidators"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                            totalVotingPower?: any;
                        } & Record<Exclude<keyof I_3["trustedValidators"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                    } & Record<Exclude<keyof I_3, keyof _131.Header>, never>>(object: I_3): _131.Header;
                };
                Fraction: {
                    encode(message: _131.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Fraction;
                    fromJSON(object: any): _131.Fraction;
                    toJSON(message: _131.Fraction): unknown;
                    fromPartial<I_4 extends {
                        numerator?: any;
                        denominator?: any;
                    } & {
                        numerator?: any;
                        denominator?: any;
                    } & Record<Exclude<keyof I_4, keyof _131.Fraction>, never>>(object: I_4): _131.Fraction;
                };
            };
        }
    }
}
