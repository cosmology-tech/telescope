import * as _153 from "./applications/transfer/v1/genesis";
import * as _154 from "./applications/transfer/v1/query";
import * as _155 from "./applications/transfer/v1/transfer";
import * as _156 from "./applications/transfer/v1/tx";
import * as _157 from "./applications/transfer/v2/packet";
import * as _158 from "./core/channel/v1/channel";
import * as _159 from "./core/channel/v1/genesis";
import * as _160 from "./core/channel/v1/query";
import * as _161 from "./core/channel/v1/tx";
import * as _162 from "./core/client/v1/client";
import * as _163 from "./core/client/v1/genesis";
import * as _164 from "./core/client/v1/query";
import * as _165 from "./core/client/v1/tx";
import * as _166 from "./core/commitment/v1/commitment";
import * as _167 from "./core/connection/v1/connection";
import * as _168 from "./core/connection/v1/genesis";
import * as _169 from "./core/connection/v1/query";
import * as _170 from "./core/connection/v1/tx";
import * as _171 from "./core/port/v1/query";
import * as _172 from "./core/types/v1/genesis";
import * as _173 from "./lightclients/localhost/v1/localhost";
import * as _174 from "./lightclients/solomachine/v1/solomachine";
import * as _175 from "./lightclients/solomachine/v2/solomachine";
import * as _176 from "./lightclients/tendermint/v1/tendermint";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _156.MsgTransfer): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _156.MsgTransfer): {
                            typeUrl: string;
                            value: _156.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _156.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _156.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _156.MsgTransfer): {
                            typeUrl: string;
                            value: _156.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _156.MsgTransfer) => {
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
                        }) => _156.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _156.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgTransfer;
                    fromJSON(object: any): _156.MsgTransfer;
                    toJSON(message: _156.MsgTransfer): unknown;
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
                        } & Record<Exclude<keyof I["timeoutHeight"], keyof _162.Height>, never>;
                        timeoutTimestamp?: any;
                    } & Record<Exclude<keyof I, keyof _156.MsgTransfer>, never>>(object: I): _156.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _156.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgTransferResponse;
                    fromJSON(_: any): _156.MsgTransferResponse;
                    toJSON(_: _156.MsgTransferResponse): unknown;
                    fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _156.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _155.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.DenomTrace;
                    fromJSON(object: any): _155.DenomTrace;
                    toJSON(message: _155.DenomTrace): unknown;
                    fromPartial<I_2 extends {
                        path?: string;
                        baseDenom?: string;
                    } & {
                        path?: string;
                        baseDenom?: string;
                    } & Record<Exclude<keyof I_2, keyof _155.DenomTrace>, never>>(object: I_2): _155.DenomTrace;
                };
                Params: {
                    encode(message: _155.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Params;
                    fromJSON(object: any): _155.Params;
                    toJSON(message: _155.Params): unknown;
                    fromPartial<I_3 extends {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    } & {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    } & Record<Exclude<keyof I_3, keyof _155.Params>, never>>(object: I_3): _155.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _154.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryDenomTraceRequest;
                    fromJSON(object: any): _154.QueryDenomTraceRequest;
                    toJSON(message: _154.QueryDenomTraceRequest): unknown;
                    fromPartial<I_4 extends {
                        hash?: string;
                    } & {
                        hash?: string;
                    } & Record<Exclude<keyof I_4, "hash">, never>>(object: I_4): _154.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _154.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryDenomTraceResponse;
                    fromJSON(object: any): _154.QueryDenomTraceResponse;
                    toJSON(message: _154.QueryDenomTraceResponse): unknown;
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
                        } & Record<Exclude<keyof I_5["denomTrace"], keyof _155.DenomTrace>, never>;
                    } & Record<Exclude<keyof I_5, "denomTrace">, never>>(object: I_5): _154.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _154.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryDenomTracesRequest;
                    fromJSON(object: any): _154.QueryDenomTracesRequest;
                    toJSON(message: _154.QueryDenomTracesRequest): unknown;
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
                    } & Record<Exclude<keyof I_6, "pagination">, never>>(object: I_6): _154.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _154.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryDenomTracesResponse;
                    fromJSON(object: any): _154.QueryDenomTracesResponse;
                    toJSON(message: _154.QueryDenomTracesResponse): unknown;
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
                        } & Record<Exclude<keyof I_7["denomTraces"][number], keyof _155.DenomTrace>, never>)[] & Record<Exclude<keyof I_7["denomTraces"], keyof {
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
                    } & Record<Exclude<keyof I_7, keyof _154.QueryDenomTracesResponse>, never>>(object: I_7): _154.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _154.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryParamsRequest;
                    fromJSON(_: any): _154.QueryParamsRequest;
                    toJSON(_: _154.QueryParamsRequest): unknown;
                    fromPartial<I_8 extends {} & {} & Record<Exclude<keyof I_8, never>, never>>(_: I_8): _154.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _154.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryParamsResponse;
                    fromJSON(object: any): _154.QueryParamsResponse;
                    toJSON(message: _154.QueryParamsResponse): unknown;
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
                        } & Record<Exclude<keyof I_9["params"], keyof _155.Params>, never>;
                    } & Record<Exclude<keyof I_9, "params">, never>>(object: I_9): _154.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _153.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.GenesisState;
                    fromJSON(object: any): _153.GenesisState;
                    toJSON(message: _153.GenesisState): unknown;
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
                        } & Record<Exclude<keyof I_10["denomTraces"][number], keyof _155.DenomTrace>, never>)[] & Record<Exclude<keyof I_10["denomTraces"], keyof {
                            path?: string;
                            baseDenom?: string;
                        }[]>, never>;
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        } & {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        } & Record<Exclude<keyof I_10["params"], keyof _155.Params>, never>;
                    } & Record<Exclude<keyof I_10, keyof _153.GenesisState>, never>>(object: I_10): _153.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _157.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.FungibleTokenPacketData;
                    fromJSON(object: any): _157.FungibleTokenPacketData;
                    toJSON(message: _157.FungibleTokenPacketData): unknown;
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
                    } & Record<Exclude<keyof I, keyof _157.FungibleTokenPacketData>, never>>(object: I): _157.FungibleTokenPacketData;
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
                        channelOpenInit(value: _161.MsgChannelOpenInit): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _161.MsgChannelOpenTry): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _161.MsgChannelOpenAck): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _161.MsgChannelOpenConfirm): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _161.MsgChannelCloseInit): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _161.MsgChannelCloseConfirm): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _161.MsgRecvPacket): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        timeout(value: _161.MsgTimeout): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _161.MsgTimeoutOnClose): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _161.MsgAcknowledgement): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _161.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _161.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _161.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _161.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _161.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _161.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _161.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _161.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _161.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _161.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _161.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _161.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _161.MsgRecvPacket): {
                            typeUrl: string;
                            value: _161.MsgRecvPacket;
                        };
                        timeout(value: _161.MsgTimeout): {
                            typeUrl: string;
                            value: _161.MsgTimeout;
                        };
                        timeoutOnClose(value: _161.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _161.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _161.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _161.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _161.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _161.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _161.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _161.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _161.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _161.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _161.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _161.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _161.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _161.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _161.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _161.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _161.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _161.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _161.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _161.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _161.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _161.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _161.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _161.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _161.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _161.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _161.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _161.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _161.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _161.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _161.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _161.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _161.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _161.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _161.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _161.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _161.MsgRecvPacket): {
                            typeUrl: string;
                            value: _161.MsgRecvPacket;
                        };
                        timeout(value: _161.MsgTimeout): {
                            typeUrl: string;
                            value: _161.MsgTimeout;
                        };
                        timeoutOnClose(value: _161.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _161.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _161.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _161.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _161.MsgChannelOpenInit) => {
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
                        }) => _161.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _161.MsgChannelOpenTry) => {
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
                        }) => _161.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _161.MsgChannelOpenAck) => {
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
                        }) => _161.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _161.MsgChannelOpenConfirm) => {
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
                        }) => _161.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _161.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _161.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _161.MsgChannelCloseConfirm) => {
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
                        }) => _161.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _161.MsgRecvPacket) => {
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
                        }) => _161.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _161.MsgTimeout) => {
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
                        }) => _161.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _161.MsgTimeoutOnClose) => {
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
                        }) => _161.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _161.MsgAcknowledgement) => {
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
                        }) => _161.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _161.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgChannelOpenInit;
                    fromJSON(object: any): _161.MsgChannelOpenInit;
                    toJSON(message: _161.MsgChannelOpenInit): unknown;
                    fromPartial<I extends {
                        portId?: string;
                        channel?: {
                            state?: _158.State;
                            ordering?: _158.Order;
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
                            state?: _158.State;
                            ordering?: _158.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _158.State;
                            ordering?: _158.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I["channel"]["counterparty"], keyof _158.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I["channel"], keyof _158.Channel>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I, keyof _161.MsgChannelOpenInit>, never>>(object: I): _161.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _161.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _161.MsgChannelOpenInitResponse;
                    toJSON(_: _161.MsgChannelOpenInitResponse): unknown;
                    fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _161.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _161.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgChannelOpenTry;
                    fromJSON(object: any): _161.MsgChannelOpenTry;
                    toJSON(message: _161.MsgChannelOpenTry): unknown;
                    fromPartial<I_2 extends {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _158.State;
                            ordering?: _158.Order;
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
                            state?: _158.State;
                            ordering?: _158.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _158.State;
                            ordering?: _158.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_2["channel"]["counterparty"], keyof _158.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_2["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I_2["channel"], keyof _158.Channel>, never>;
                        counterpartyVersion?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_2["proofHeight"], keyof _162.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_2, keyof _161.MsgChannelOpenTry>, never>>(object: I_2): _161.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _161.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _161.MsgChannelOpenTryResponse;
                    toJSON(_: _161.MsgChannelOpenTryResponse): unknown;
                    fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _161.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _161.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgChannelOpenAck;
                    fromJSON(object: any): _161.MsgChannelOpenAck;
                    toJSON(message: _161.MsgChannelOpenAck): unknown;
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
                        } & Record<Exclude<keyof I_4["proofHeight"], keyof _162.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_4, keyof _161.MsgChannelOpenAck>, never>>(object: I_4): _161.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _161.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _161.MsgChannelOpenAckResponse;
                    toJSON(_: _161.MsgChannelOpenAckResponse): unknown;
                    fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _161.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _161.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgChannelOpenConfirm;
                    fromJSON(object: any): _161.MsgChannelOpenConfirm;
                    toJSON(message: _161.MsgChannelOpenConfirm): unknown;
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
                        } & Record<Exclude<keyof I_6["proofHeight"], keyof _162.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_6, keyof _161.MsgChannelOpenConfirm>, never>>(object: I_6): _161.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _161.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _161.MsgChannelOpenConfirmResponse;
                    toJSON(_: _161.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends {} & {} & Record<Exclude<keyof I_7, never>, never>>(_: I_7): _161.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _161.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgChannelCloseInit;
                    fromJSON(object: any): _161.MsgChannelCloseInit;
                    toJSON(message: _161.MsgChannelCloseInit): unknown;
                    fromPartial<I_8 extends {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    } & Record<Exclude<keyof I_8, keyof _161.MsgChannelCloseInit>, never>>(object: I_8): _161.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _161.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _161.MsgChannelCloseInitResponse;
                    toJSON(_: _161.MsgChannelCloseInitResponse): unknown;
                    fromPartial<I_9 extends {} & {} & Record<Exclude<keyof I_9, never>, never>>(_: I_9): _161.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _161.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgChannelCloseConfirm;
                    fromJSON(object: any): _161.MsgChannelCloseConfirm;
                    toJSON(message: _161.MsgChannelCloseConfirm): unknown;
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
                        } & Record<Exclude<keyof I_10["proofHeight"], keyof _162.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_10, keyof _161.MsgChannelCloseConfirm>, never>>(object: I_10): _161.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _161.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _161.MsgChannelCloseConfirmResponse;
                    toJSON(_: _161.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial<I_11 extends {} & {} & Record<Exclude<keyof I_11, never>, never>>(_: I_11): _161.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _161.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgRecvPacket;
                    fromJSON(object: any): _161.MsgRecvPacket;
                    toJSON(message: _161.MsgRecvPacket): unknown;
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
                            } & Record<Exclude<keyof I_12["packet"]["timeoutHeight"], keyof _162.Height>, never>;
                            timeoutTimestamp?: any;
                        } & Record<Exclude<keyof I_12["packet"], keyof _158.Packet>, never>;
                        proofCommitment?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_12["proofHeight"], keyof _162.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_12, keyof _161.MsgRecvPacket>, never>>(object: I_12): _161.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _161.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgRecvPacketResponse;
                    fromJSON(_: any): _161.MsgRecvPacketResponse;
                    toJSON(_: _161.MsgRecvPacketResponse): unknown;
                    fromPartial<I_13 extends {} & {} & Record<Exclude<keyof I_13, never>, never>>(_: I_13): _161.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _161.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgTimeout;
                    fromJSON(object: any): _161.MsgTimeout;
                    toJSON(message: _161.MsgTimeout): unknown;
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
                            } & Record<Exclude<keyof I_14["packet"]["timeoutHeight"], keyof _162.Height>, never>;
                            timeoutTimestamp?: any;
                        } & Record<Exclude<keyof I_14["packet"], keyof _158.Packet>, never>;
                        proofUnreceived?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_14["proofHeight"], keyof _162.Height>, never>;
                        nextSequenceRecv?: any;
                        signer?: string;
                    } & Record<Exclude<keyof I_14, keyof _161.MsgTimeout>, never>>(object: I_14): _161.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _161.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgTimeoutResponse;
                    fromJSON(_: any): _161.MsgTimeoutResponse;
                    toJSON(_: _161.MsgTimeoutResponse): unknown;
                    fromPartial<I_15 extends {} & {} & Record<Exclude<keyof I_15, never>, never>>(_: I_15): _161.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _161.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgTimeoutOnClose;
                    fromJSON(object: any): _161.MsgTimeoutOnClose;
                    toJSON(message: _161.MsgTimeoutOnClose): unknown;
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
                            } & Record<Exclude<keyof I_16["packet"]["timeoutHeight"], keyof _162.Height>, never>;
                            timeoutTimestamp?: any;
                        } & Record<Exclude<keyof I_16["packet"], keyof _158.Packet>, never>;
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_16["proofHeight"], keyof _162.Height>, never>;
                        nextSequenceRecv?: any;
                        signer?: string;
                    } & Record<Exclude<keyof I_16, keyof _161.MsgTimeoutOnClose>, never>>(object: I_16): _161.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _161.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _161.MsgTimeoutOnCloseResponse;
                    toJSON(_: _161.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial<I_17 extends {} & {} & Record<Exclude<keyof I_17, never>, never>>(_: I_17): _161.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _161.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgAcknowledgement;
                    fromJSON(object: any): _161.MsgAcknowledgement;
                    toJSON(message: _161.MsgAcknowledgement): unknown;
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
                            } & Record<Exclude<keyof I_18["packet"]["timeoutHeight"], keyof _162.Height>, never>;
                            timeoutTimestamp?: any;
                        } & Record<Exclude<keyof I_18["packet"], keyof _158.Packet>, never>;
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_18["proofHeight"], keyof _162.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_18, keyof _161.MsgAcknowledgement>, never>>(object: I_18): _161.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _161.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgAcknowledgementResponse;
                    fromJSON(_: any): _161.MsgAcknowledgementResponse;
                    toJSON(_: _161.MsgAcknowledgementResponse): unknown;
                    fromPartial<I_19 extends {} & {} & Record<Exclude<keyof I_19, never>, never>>(_: I_19): _161.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _160.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryChannelRequest;
                    fromJSON(object: any): _160.QueryChannelRequest;
                    toJSON(message: _160.QueryChannelRequest): unknown;
                    fromPartial<I_20 extends {
                        portId?: string;
                        channelId?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_20, keyof _160.QueryChannelRequest>, never>>(object: I_20): _160.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _160.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryChannelResponse;
                    fromJSON(object: any): _160.QueryChannelResponse;
                    toJSON(message: _160.QueryChannelResponse): unknown;
                    fromPartial<I_21 extends {
                        channel?: {
                            state?: _158.State;
                            ordering?: _158.Order;
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
                            state?: _158.State;
                            ordering?: _158.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _158.State;
                            ordering?: _158.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_21["channel"]["counterparty"], keyof _158.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_21["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I_21["channel"], keyof _158.Channel>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_21["proofHeight"], keyof _162.Height>, never>;
                    } & Record<Exclude<keyof I_21, keyof _160.QueryChannelResponse>, never>>(object: I_21): _160.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _160.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryChannelsRequest;
                    fromJSON(object: any): _160.QueryChannelsRequest;
                    toJSON(message: _160.QueryChannelsRequest): unknown;
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
                    } & Record<Exclude<keyof I_22, "pagination">, never>>(object: I_22): _160.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _160.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryChannelsResponse;
                    fromJSON(object: any): _160.QueryChannelsResponse;
                    toJSON(message: _160.QueryChannelsResponse): unknown;
                    fromPartial<I_23 extends {
                        channels?: {
                            state?: _158.State;
                            ordering?: _158.Order;
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
                            state?: _158.State;
                            ordering?: _158.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[] & ({
                            state?: _158.State;
                            ordering?: _158.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & {
                            state?: _158.State;
                            ordering?: _158.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_23["channels"][number]["counterparty"], keyof _158.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_23["channels"][number]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_23["channels"][number], keyof _158.IdentifiedChannel>, never>)[] & Record<Exclude<keyof I_23["channels"], keyof {
                            state?: _158.State;
                            ordering?: _158.Order;
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
                        } & Record<Exclude<keyof I_23["height"], keyof _162.Height>, never>;
                    } & Record<Exclude<keyof I_23, keyof _160.QueryChannelsResponse>, never>>(object: I_23): _160.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _160.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _160.QueryConnectionChannelsRequest;
                    toJSON(message: _160.QueryConnectionChannelsRequest): unknown;
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
                    } & Record<Exclude<keyof I_24, keyof _160.QueryConnectionChannelsRequest>, never>>(object: I_24): _160.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _160.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _160.QueryConnectionChannelsResponse;
                    toJSON(message: _160.QueryConnectionChannelsResponse): unknown;
                    fromPartial<I_25 extends {
                        channels?: {
                            state?: _158.State;
                            ordering?: _158.Order;
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
                            state?: _158.State;
                            ordering?: _158.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[] & ({
                            state?: _158.State;
                            ordering?: _158.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & {
                            state?: _158.State;
                            ordering?: _158.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_25["channels"][number]["counterparty"], keyof _158.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_25["channels"][number]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_25["channels"][number], keyof _158.IdentifiedChannel>, never>)[] & Record<Exclude<keyof I_25["channels"], keyof {
                            state?: _158.State;
                            ordering?: _158.Order;
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
                        } & Record<Exclude<keyof I_25["height"], keyof _162.Height>, never>;
                    } & Record<Exclude<keyof I_25, keyof _160.QueryConnectionChannelsResponse>, never>>(object: I_25): _160.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _160.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryChannelClientStateRequest;
                    fromJSON(object: any): _160.QueryChannelClientStateRequest;
                    toJSON(message: _160.QueryChannelClientStateRequest): unknown;
                    fromPartial<I_26 extends {
                        portId?: string;
                        channelId?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_26, keyof _160.QueryChannelClientStateRequest>, never>>(object: I_26): _160.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _160.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryChannelClientStateResponse;
                    fromJSON(object: any): _160.QueryChannelClientStateResponse;
                    toJSON(message: _160.QueryChannelClientStateResponse): unknown;
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
                        } & Record<Exclude<keyof I_27["identifiedClientState"], keyof _162.IdentifiedClientState>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_27["proofHeight"], keyof _162.Height>, never>;
                    } & Record<Exclude<keyof I_27, keyof _160.QueryChannelClientStateResponse>, never>>(object: I_27): _160.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _160.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _160.QueryChannelConsensusStateRequest;
                    toJSON(message: _160.QueryChannelConsensusStateRequest): unknown;
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
                    } & Record<Exclude<keyof I_28, keyof _160.QueryChannelConsensusStateRequest>, never>>(object: I_28): _160.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _160.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _160.QueryChannelConsensusStateResponse;
                    toJSON(message: _160.QueryChannelConsensusStateResponse): unknown;
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
                        } & Record<Exclude<keyof I_29["proofHeight"], keyof _162.Height>, never>;
                    } & Record<Exclude<keyof I_29, keyof _160.QueryChannelConsensusStateResponse>, never>>(object: I_29): _160.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _160.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _160.QueryPacketCommitmentRequest;
                    toJSON(message: _160.QueryPacketCommitmentRequest): unknown;
                    fromPartial<I_30 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & Record<Exclude<keyof I_30, keyof _160.QueryPacketCommitmentRequest>, never>>(object: I_30): _160.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _160.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _160.QueryPacketCommitmentResponse;
                    toJSON(message: _160.QueryPacketCommitmentResponse): unknown;
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
                        } & Record<Exclude<keyof I_31["proofHeight"], keyof _162.Height>, never>;
                    } & Record<Exclude<keyof I_31, keyof _160.QueryPacketCommitmentResponse>, never>>(object: I_31): _160.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _160.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _160.QueryPacketCommitmentsRequest;
                    toJSON(message: _160.QueryPacketCommitmentsRequest): unknown;
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
                    } & Record<Exclude<keyof I_32, keyof _160.QueryPacketCommitmentsRequest>, never>>(object: I_32): _160.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _160.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _160.QueryPacketCommitmentsResponse;
                    toJSON(message: _160.QueryPacketCommitmentsResponse): unknown;
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
                        } & Record<Exclude<keyof I_33["commitments"][number], keyof _158.PacketState>, never>)[] & Record<Exclude<keyof I_33["commitments"], keyof {
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
                        } & Record<Exclude<keyof I_33["height"], keyof _162.Height>, never>;
                    } & Record<Exclude<keyof I_33, keyof _160.QueryPacketCommitmentsResponse>, never>>(object: I_33): _160.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _160.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryPacketReceiptRequest;
                    fromJSON(object: any): _160.QueryPacketReceiptRequest;
                    toJSON(message: _160.QueryPacketReceiptRequest): unknown;
                    fromPartial<I_34 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & Record<Exclude<keyof I_34, keyof _160.QueryPacketReceiptRequest>, never>>(object: I_34): _160.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _160.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryPacketReceiptResponse;
                    fromJSON(object: any): _160.QueryPacketReceiptResponse;
                    toJSON(message: _160.QueryPacketReceiptResponse): unknown;
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
                        } & Record<Exclude<keyof I_35["proofHeight"], keyof _162.Height>, never>;
                    } & Record<Exclude<keyof I_35, keyof _160.QueryPacketReceiptResponse>, never>>(object: I_35): _160.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _160.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _160.QueryPacketAcknowledgementRequest;
                    toJSON(message: _160.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial<I_36 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & Record<Exclude<keyof I_36, keyof _160.QueryPacketAcknowledgementRequest>, never>>(object: I_36): _160.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _160.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _160.QueryPacketAcknowledgementResponse;
                    toJSON(message: _160.QueryPacketAcknowledgementResponse): unknown;
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
                        } & Record<Exclude<keyof I_37["proofHeight"], keyof _162.Height>, never>;
                    } & Record<Exclude<keyof I_37, keyof _160.QueryPacketAcknowledgementResponse>, never>>(object: I_37): _160.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _160.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _160.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _160.QueryPacketAcknowledgementsRequest): unknown;
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
                    } & Record<Exclude<keyof I_38, keyof _160.QueryPacketAcknowledgementsRequest>, never>>(object: I_38): _160.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _160.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _160.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _160.QueryPacketAcknowledgementsResponse): unknown;
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
                        } & Record<Exclude<keyof I_39["acknowledgements"][number], keyof _158.PacketState>, never>)[] & Record<Exclude<keyof I_39["acknowledgements"], keyof {
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
                        } & Record<Exclude<keyof I_39["height"], keyof _162.Height>, never>;
                    } & Record<Exclude<keyof I_39, keyof _160.QueryPacketAcknowledgementsResponse>, never>>(object: I_39): _160.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _160.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _160.QueryUnreceivedPacketsRequest;
                    toJSON(message: _160.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial<I_40 extends {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: any[];
                    } & {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: any[] & any[] & Record<Exclude<keyof I_40["packetCommitmentSequences"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I_40, keyof _160.QueryUnreceivedPacketsRequest>, never>>(object: I_40): _160.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _160.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _160.QueryUnreceivedPacketsResponse;
                    toJSON(message: _160.QueryUnreceivedPacketsResponse): unknown;
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
                        } & Record<Exclude<keyof I_41["height"], keyof _162.Height>, never>;
                    } & Record<Exclude<keyof I_41, keyof _160.QueryUnreceivedPacketsResponse>, never>>(object: I_41): _160.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _160.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _160.QueryUnreceivedAcksRequest;
                    toJSON(message: _160.QueryUnreceivedAcksRequest): unknown;
                    fromPartial<I_42 extends {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: any[];
                    } & {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: any[] & any[] & Record<Exclude<keyof I_42["packetAckSequences"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I_42, keyof _160.QueryUnreceivedAcksRequest>, never>>(object: I_42): _160.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _160.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _160.QueryUnreceivedAcksResponse;
                    toJSON(message: _160.QueryUnreceivedAcksResponse): unknown;
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
                        } & Record<Exclude<keyof I_43["height"], keyof _162.Height>, never>;
                    } & Record<Exclude<keyof I_43, keyof _160.QueryUnreceivedAcksResponse>, never>>(object: I_43): _160.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _160.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _160.QueryNextSequenceReceiveRequest;
                    toJSON(message: _160.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial<I_44 extends {
                        portId?: string;
                        channelId?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_44, keyof _160.QueryNextSequenceReceiveRequest>, never>>(object: I_44): _160.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _160.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _160.QueryNextSequenceReceiveResponse;
                    toJSON(message: _160.QueryNextSequenceReceiveResponse): unknown;
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
                        } & Record<Exclude<keyof I_45["proofHeight"], keyof _162.Height>, never>;
                    } & Record<Exclude<keyof I_45, keyof _160.QueryNextSequenceReceiveResponse>, never>>(object: I_45): _160.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _159.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.GenesisState;
                    fromJSON(object: any): _159.GenesisState;
                    toJSON(message: _159.GenesisState): unknown;
                    fromPartial<I_46 extends {
                        channels?: {
                            state?: _158.State;
                            ordering?: _158.Order;
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
                            state?: _158.State;
                            ordering?: _158.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[] & ({
                            state?: _158.State;
                            ordering?: _158.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & {
                            state?: _158.State;
                            ordering?: _158.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_46["channels"][number]["counterparty"], keyof _158.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_46["channels"][number]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_46["channels"][number], keyof _158.IdentifiedChannel>, never>)[] & Record<Exclude<keyof I_46["channels"], keyof {
                            state?: _158.State;
                            ordering?: _158.Order;
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
                        } & Record<Exclude<keyof I_46["acknowledgements"][number], keyof _158.PacketState>, never>)[] & Record<Exclude<keyof I_46["acknowledgements"], keyof {
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
                        } & Record<Exclude<keyof I_46["commitments"][number], keyof _158.PacketState>, never>)[] & Record<Exclude<keyof I_46["commitments"], keyof {
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
                        } & Record<Exclude<keyof I_46["receipts"][number], keyof _158.PacketState>, never>)[] & Record<Exclude<keyof I_46["receipts"], keyof {
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
                        } & Record<Exclude<keyof I_46["sendSequences"][number], keyof _159.PacketSequence>, never>)[] & Record<Exclude<keyof I_46["sendSequences"], keyof {
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
                        } & Record<Exclude<keyof I_46["recvSequences"][number], keyof _159.PacketSequence>, never>)[] & Record<Exclude<keyof I_46["recvSequences"], keyof {
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
                        } & Record<Exclude<keyof I_46["ackSequences"][number], keyof _159.PacketSequence>, never>)[] & Record<Exclude<keyof I_46["ackSequences"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[]>, never>;
                        nextChannelSequence?: any;
                    } & Record<Exclude<keyof I_46, keyof _159.GenesisState>, never>>(object: I_46): _159.GenesisState;
                };
                PacketSequence: {
                    encode(message: _159.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.PacketSequence;
                    fromJSON(object: any): _159.PacketSequence;
                    toJSON(message: _159.PacketSequence): unknown;
                    fromPartial<I_47 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & Record<Exclude<keyof I_47, keyof _159.PacketSequence>, never>>(object: I_47): _159.PacketSequence;
                };
                stateFromJSON(object: any): _158.State;
                stateToJSON(object: _158.State): string;
                orderFromJSON(object: any): _158.Order;
                orderToJSON(object: _158.Order): string;
                State: typeof _158.State;
                Order: typeof _158.Order;
                Channel: {
                    encode(message: _158.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Channel;
                    fromJSON(object: any): _158.Channel;
                    toJSON(message: _158.Channel): unknown;
                    fromPartial<I_48 extends {
                        state?: _158.State;
                        ordering?: _158.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                    } & {
                        state?: _158.State;
                        ordering?: _158.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        } & {
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_48["counterparty"], keyof _158.Counterparty>, never>;
                        connectionHops?: string[] & string[] & Record<Exclude<keyof I_48["connectionHops"], keyof string[]>, never>;
                        version?: string;
                    } & Record<Exclude<keyof I_48, keyof _158.Channel>, never>>(object: I_48): _158.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _158.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.IdentifiedChannel;
                    fromJSON(object: any): _158.IdentifiedChannel;
                    toJSON(message: _158.IdentifiedChannel): unknown;
                    fromPartial<I_49 extends {
                        state?: _158.State;
                        ordering?: _158.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    } & {
                        state?: _158.State;
                        ordering?: _158.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        } & {
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_49["counterparty"], keyof _158.Counterparty>, never>;
                        connectionHops?: string[] & string[] & Record<Exclude<keyof I_49["connectionHops"], keyof string[]>, never>;
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_49, keyof _158.IdentifiedChannel>, never>>(object: I_49): _158.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _158.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Counterparty;
                    fromJSON(object: any): _158.Counterparty;
                    toJSON(message: _158.Counterparty): unknown;
                    fromPartial<I_50 extends {
                        portId?: string;
                        channelId?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_50, keyof _158.Counterparty>, never>>(object: I_50): _158.Counterparty;
                };
                Packet: {
                    encode(message: _158.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Packet;
                    fromJSON(object: any): _158.Packet;
                    toJSON(message: _158.Packet): unknown;
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
                        } & Record<Exclude<keyof I_51["timeoutHeight"], keyof _162.Height>, never>;
                        timeoutTimestamp?: any;
                    } & Record<Exclude<keyof I_51, keyof _158.Packet>, never>>(object: I_51): _158.Packet;
                };
                PacketState: {
                    encode(message: _158.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.PacketState;
                    fromJSON(object: any): _158.PacketState;
                    toJSON(message: _158.PacketState): unknown;
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
                    } & Record<Exclude<keyof I_52, keyof _158.PacketState>, never>>(object: I_52): _158.PacketState;
                };
                Acknowledgement: {
                    encode(message: _158.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Acknowledgement;
                    fromJSON(object: any): _158.Acknowledgement;
                    toJSON(message: _158.Acknowledgement): unknown;
                    fromPartial<I_53 extends {
                        result?: Uint8Array;
                        error?: string;
                    } & {
                        result?: Uint8Array;
                        error?: string;
                    } & Record<Exclude<keyof I_53, keyof _158.Acknowledgement>, never>>(object: I_53): _158.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _165.MsgCreateClient): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _165.MsgUpdateClient): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _165.MsgUpgradeClient): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _165.MsgSubmitMisbehaviour): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _165.MsgCreateClient): {
                            typeUrl: string;
                            value: _165.MsgCreateClient;
                        };
                        updateClient(value: _165.MsgUpdateClient): {
                            typeUrl: string;
                            value: _165.MsgUpdateClient;
                        };
                        upgradeClient(value: _165.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _165.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _165.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _165.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _165.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _165.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _165.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _165.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _165.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _165.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _165.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _165.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _165.MsgCreateClient): {
                            typeUrl: string;
                            value: _165.MsgCreateClient;
                        };
                        updateClient(value: _165.MsgUpdateClient): {
                            typeUrl: string;
                            value: _165.MsgUpdateClient;
                        };
                        upgradeClient(value: _165.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _165.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _165.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _165.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _165.MsgCreateClient) => {
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
                        }) => _165.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _165.MsgUpdateClient) => {
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
                        }) => _165.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _165.MsgUpgradeClient) => {
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
                        }) => _165.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _165.MsgSubmitMisbehaviour) => {
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
                        }) => _165.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _165.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgCreateClient;
                    fromJSON(object: any): _165.MsgCreateClient;
                    toJSON(message: _165.MsgCreateClient): unknown;
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
                    } & Record<Exclude<keyof I, keyof _165.MsgCreateClient>, never>>(object: I): _165.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _165.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgCreateClientResponse;
                    fromJSON(_: any): _165.MsgCreateClientResponse;
                    toJSON(_: _165.MsgCreateClientResponse): unknown;
                    fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _165.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _165.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgUpdateClient;
                    fromJSON(object: any): _165.MsgUpdateClient;
                    toJSON(message: _165.MsgUpdateClient): unknown;
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
                    } & Record<Exclude<keyof I_2, keyof _165.MsgUpdateClient>, never>>(object: I_2): _165.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _165.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgUpdateClientResponse;
                    fromJSON(_: any): _165.MsgUpdateClientResponse;
                    toJSON(_: _165.MsgUpdateClientResponse): unknown;
                    fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _165.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _165.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgUpgradeClient;
                    fromJSON(object: any): _165.MsgUpgradeClient;
                    toJSON(message: _165.MsgUpgradeClient): unknown;
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
                    } & Record<Exclude<keyof I_4, keyof _165.MsgUpgradeClient>, never>>(object: I_4): _165.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _165.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgUpgradeClientResponse;
                    fromJSON(_: any): _165.MsgUpgradeClientResponse;
                    toJSON(_: _165.MsgUpgradeClientResponse): unknown;
                    fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _165.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _165.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _165.MsgSubmitMisbehaviour;
                    toJSON(message: _165.MsgSubmitMisbehaviour): unknown;
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
                    } & Record<Exclude<keyof I_6, keyof _165.MsgSubmitMisbehaviour>, never>>(object: I_6): _165.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _165.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _165.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _165.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial<I_7 extends {} & {} & Record<Exclude<keyof I_7, never>, never>>(_: I_7): _165.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _164.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryClientStateRequest;
                    fromJSON(object: any): _164.QueryClientStateRequest;
                    toJSON(message: _164.QueryClientStateRequest): unknown;
                    fromPartial<I_8 extends {
                        clientId?: string;
                    } & {
                        clientId?: string;
                    } & Record<Exclude<keyof I_8, "clientId">, never>>(object: I_8): _164.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _164.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryClientStateResponse;
                    fromJSON(object: any): _164.QueryClientStateResponse;
                    toJSON(message: _164.QueryClientStateResponse): unknown;
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
                        } & Record<Exclude<keyof I_9["proofHeight"], keyof _162.Height>, never>;
                    } & Record<Exclude<keyof I_9, keyof _164.QueryClientStateResponse>, never>>(object: I_9): _164.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _164.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryClientStatesRequest;
                    fromJSON(object: any): _164.QueryClientStatesRequest;
                    toJSON(message: _164.QueryClientStatesRequest): unknown;
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
                    } & Record<Exclude<keyof I_10, "pagination">, never>>(object: I_10): _164.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _164.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryClientStatesResponse;
                    fromJSON(object: any): _164.QueryClientStatesResponse;
                    toJSON(message: _164.QueryClientStatesResponse): unknown;
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
                        } & Record<Exclude<keyof I_11["clientStates"][number], keyof _162.IdentifiedClientState>, never>)[] & Record<Exclude<keyof I_11["clientStates"], keyof {
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
                    } & Record<Exclude<keyof I_11, keyof _164.QueryClientStatesResponse>, never>>(object: I_11): _164.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _164.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryConsensusStateRequest;
                    fromJSON(object: any): _164.QueryConsensusStateRequest;
                    toJSON(message: _164.QueryConsensusStateRequest): unknown;
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
                    } & Record<Exclude<keyof I_12, keyof _164.QueryConsensusStateRequest>, never>>(object: I_12): _164.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _164.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryConsensusStateResponse;
                    fromJSON(object: any): _164.QueryConsensusStateResponse;
                    toJSON(message: _164.QueryConsensusStateResponse): unknown;
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
                        } & Record<Exclude<keyof I_13["proofHeight"], keyof _162.Height>, never>;
                    } & Record<Exclude<keyof I_13, keyof _164.QueryConsensusStateResponse>, never>>(object: I_13): _164.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _164.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryConsensusStatesRequest;
                    fromJSON(object: any): _164.QueryConsensusStatesRequest;
                    toJSON(message: _164.QueryConsensusStatesRequest): unknown;
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
                    } & Record<Exclude<keyof I_14, keyof _164.QueryConsensusStatesRequest>, never>>(object: I_14): _164.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _164.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryConsensusStatesResponse;
                    fromJSON(object: any): _164.QueryConsensusStatesResponse;
                    toJSON(message: _164.QueryConsensusStatesResponse): unknown;
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
                            } & Record<Exclude<keyof I_15["consensusStates"][number]["height"], keyof _162.Height>, never>;
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_15["consensusStates"][number]["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_15["consensusStates"][number], keyof _162.ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I_15["consensusStates"], keyof {
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
                    } & Record<Exclude<keyof I_15, keyof _164.QueryConsensusStatesResponse>, never>>(object: I_15): _164.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _164.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryClientStatusRequest;
                    fromJSON(object: any): _164.QueryClientStatusRequest;
                    toJSON(message: _164.QueryClientStatusRequest): unknown;
                    fromPartial<I_16 extends {
                        clientId?: string;
                    } & {
                        clientId?: string;
                    } & Record<Exclude<keyof I_16, "clientId">, never>>(object: I_16): _164.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _164.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryClientStatusResponse;
                    fromJSON(object: any): _164.QueryClientStatusResponse;
                    toJSON(message: _164.QueryClientStatusResponse): unknown;
                    fromPartial<I_17 extends {
                        status?: string;
                    } & {
                        status?: string;
                    } & Record<Exclude<keyof I_17, "status">, never>>(object: I_17): _164.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _164.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryClientParamsRequest;
                    fromJSON(_: any): _164.QueryClientParamsRequest;
                    toJSON(_: _164.QueryClientParamsRequest): unknown;
                    fromPartial<I_18 extends {} & {} & Record<Exclude<keyof I_18, never>, never>>(_: I_18): _164.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _164.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryClientParamsResponse;
                    fromJSON(object: any): _164.QueryClientParamsResponse;
                    toJSON(message: _164.QueryClientParamsResponse): unknown;
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
                    } & Record<Exclude<keyof I_19, "params">, never>>(object: I_19): _164.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _164.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _164.QueryUpgradedClientStateRequest;
                    toJSON(_: _164.QueryUpgradedClientStateRequest): unknown;
                    fromPartial<I_20 extends {} & {} & Record<Exclude<keyof I_20, never>, never>>(_: I_20): _164.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _164.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _164.QueryUpgradedClientStateResponse;
                    toJSON(message: _164.QueryUpgradedClientStateResponse): unknown;
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
                    } & Record<Exclude<keyof I_21, "upgradedClientState">, never>>(object: I_21): _164.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _164.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _164.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _164.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial<I_22 extends {} & {} & Record<Exclude<keyof I_22, never>, never>>(_: I_22): _164.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _164.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _164.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _164.QueryUpgradedConsensusStateResponse): unknown;
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
                    } & Record<Exclude<keyof I_23, "upgradedConsensusState">, never>>(object: I_23): _164.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _163.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.GenesisState;
                    fromJSON(object: any): _163.GenesisState;
                    toJSON(message: _163.GenesisState): unknown;
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
                        } & Record<Exclude<keyof I_24["clients"][number], keyof _162.IdentifiedClientState>, never>)[] & Record<Exclude<keyof I_24["clients"], keyof {
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
                                } & Record<Exclude<keyof I_24["clientsConsensus"][number]["consensusStates"][number]["height"], keyof _162.Height>, never>;
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                } & {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                } & Record<Exclude<keyof I_24["clientsConsensus"][number]["consensusStates"][number]["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                            } & Record<Exclude<keyof I_24["clientsConsensus"][number]["consensusStates"][number], keyof _162.ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I_24["clientsConsensus"][number]["consensusStates"], keyof {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[]>, never>;
                        } & Record<Exclude<keyof I_24["clientsConsensus"][number], keyof _162.ClientConsensusStates>, never>)[] & Record<Exclude<keyof I_24["clientsConsensus"], keyof {
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
                            } & Record<Exclude<keyof I_24["clientsMetadata"][number]["clientMetadata"][number], keyof _163.GenesisMetadata>, never>)[] & Record<Exclude<keyof I_24["clientsMetadata"][number]["clientMetadata"], keyof {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_24["clientsMetadata"][number], keyof _163.IdentifiedGenesisMetadata>, never>)[] & Record<Exclude<keyof I_24["clientsMetadata"], keyof {
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
                    } & Record<Exclude<keyof I_24, keyof _163.GenesisState>, never>>(object: I_24): _163.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _163.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.GenesisMetadata;
                    fromJSON(object: any): _163.GenesisMetadata;
                    toJSON(message: _163.GenesisMetadata): unknown;
                    fromPartial<I_25 extends {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I_25, keyof _163.GenesisMetadata>, never>>(object: I_25): _163.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _163.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _163.IdentifiedGenesisMetadata;
                    toJSON(message: _163.IdentifiedGenesisMetadata): unknown;
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
                        } & Record<Exclude<keyof I_26["clientMetadata"][number], keyof _163.GenesisMetadata>, never>)[] & Record<Exclude<keyof I_26["clientMetadata"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_26, keyof _163.IdentifiedGenesisMetadata>, never>>(object: I_26): _163.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _162.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.IdentifiedClientState;
                    fromJSON(object: any): _162.IdentifiedClientState;
                    toJSON(message: _162.IdentifiedClientState): unknown;
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
                    } & Record<Exclude<keyof I_27, keyof _162.IdentifiedClientState>, never>>(object: I_27): _162.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _162.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ConsensusStateWithHeight;
                    fromJSON(object: any): _162.ConsensusStateWithHeight;
                    toJSON(message: _162.ConsensusStateWithHeight): unknown;
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
                        } & Record<Exclude<keyof I_28["height"], keyof _162.Height>, never>;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_28["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_28, keyof _162.ConsensusStateWithHeight>, never>>(object: I_28): _162.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _162.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ClientConsensusStates;
                    fromJSON(object: any): _162.ClientConsensusStates;
                    toJSON(message: _162.ClientConsensusStates): unknown;
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
                            } & Record<Exclude<keyof I_29["consensusStates"][number]["height"], keyof _162.Height>, never>;
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_29["consensusStates"][number]["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_29["consensusStates"][number], keyof _162.ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I_29["consensusStates"], keyof {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[]>, never>;
                    } & Record<Exclude<keyof I_29, keyof _162.ClientConsensusStates>, never>>(object: I_29): _162.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _162.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ClientUpdateProposal;
                    fromJSON(object: any): _162.ClientUpdateProposal;
                    toJSON(message: _162.ClientUpdateProposal): unknown;
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
                    } & Record<Exclude<keyof I_30, keyof _162.ClientUpdateProposal>, never>>(object: I_30): _162.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _162.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.UpgradeProposal;
                    fromJSON(object: any): _162.UpgradeProposal;
                    toJSON(message: _162.UpgradeProposal): unknown;
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
                    } & Record<Exclude<keyof I_31, keyof _162.UpgradeProposal>, never>>(object: I_31): _162.UpgradeProposal;
                };
                Height: {
                    encode(message: _162.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Height;
                    fromJSON(object: any): _162.Height;
                    toJSON(message: _162.Height): unknown;
                    fromPartial<I_32 extends {
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & {
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & Record<Exclude<keyof I_32, keyof _162.Height>, never>>(object: I_32): _162.Height;
                };
                Params: {
                    encode(message: _162.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Params;
                    fromJSON(object: any): _162.Params;
                    toJSON(message: _162.Params): unknown;
                    fromPartial<I_33 extends {
                        allowedClients?: string[];
                    } & {
                        allowedClients?: string[] & string[] & Record<Exclude<keyof I_33["allowedClients"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_33, "allowedClients">, never>>(object: I_33): _162.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _166.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MerkleRoot;
                    fromJSON(object: any): _166.MerkleRoot;
                    toJSON(message: _166.MerkleRoot): unknown;
                    fromPartial<I extends {
                        hash?: Uint8Array;
                    } & {
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I, "hash">, never>>(object: I): _166.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _166.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MerklePrefix;
                    fromJSON(object: any): _166.MerklePrefix;
                    toJSON(message: _166.MerklePrefix): unknown;
                    fromPartial<I_1 extends {
                        keyPrefix?: Uint8Array;
                    } & {
                        keyPrefix?: Uint8Array;
                    } & Record<Exclude<keyof I_1, "keyPrefix">, never>>(object: I_1): _166.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _166.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MerklePath;
                    fromJSON(object: any): _166.MerklePath;
                    toJSON(message: _166.MerklePath): unknown;
                    fromPartial<I_2 extends {
                        keyPath?: string[];
                    } & {
                        keyPath?: string[] & string[] & Record<Exclude<keyof I_2["keyPath"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_2, "keyPath">, never>>(object: I_2): _166.MerklePath;
                };
                MerkleProof: {
                    encode(message: _166.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MerkleProof;
                    fromJSON(object: any): _166.MerkleProof;
                    toJSON(message: _166.MerkleProof): unknown;
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
                    } & Record<Exclude<keyof I_3, "proofs">, never>>(object: I_3): _166.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _170.MsgConnectionOpenInit): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _170.MsgConnectionOpenTry): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _170.MsgConnectionOpenAck): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _170.MsgConnectionOpenConfirm): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _170.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _170.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _170.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _170.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _170.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _170.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _170.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _170.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _170.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _170.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _170.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _170.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _170.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _170.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _170.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _170.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _170.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _170.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _170.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _170.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _170.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _170.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _170.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _170.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _170.MsgConnectionOpenInit) => {
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
                        }) => _170.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _170.MsgConnectionOpenTry) => {
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
                        }) => _170.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _170.MsgConnectionOpenAck) => {
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
                        }) => _170.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _170.MsgConnectionOpenConfirm) => {
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
                        }) => _170.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _170.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgConnectionOpenInit;
                    fromJSON(object: any): _170.MsgConnectionOpenInit;
                    toJSON(message: _170.MsgConnectionOpenInit): unknown;
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
                        } & Record<Exclude<keyof I["counterparty"], keyof _167.Counterparty>, never>;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        } & {
                            identifier?: string;
                            features?: string[] & string[] & Record<Exclude<keyof I["version"]["features"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I["version"], keyof _167.Version>, never>;
                        delayPeriod?: any;
                        signer?: string;
                    } & Record<Exclude<keyof I, keyof _170.MsgConnectionOpenInit>, never>>(object: I): _170.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _170.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _170.MsgConnectionOpenInitResponse;
                    toJSON(_: _170.MsgConnectionOpenInitResponse): unknown;
                    fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _170.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _170.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgConnectionOpenTry;
                    fromJSON(object: any): _170.MsgConnectionOpenTry;
                    toJSON(message: _170.MsgConnectionOpenTry): unknown;
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
                        } & Record<Exclude<keyof I_2["counterparty"], keyof _167.Counterparty>, never>;
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
                        } & Record<Exclude<keyof I_2["counterpartyVersions"][number], keyof _167.Version>, never>)[] & Record<Exclude<keyof I_2["counterpartyVersions"], keyof {
                            identifier?: string;
                            features?: string[];
                        }[]>, never>;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_2["proofHeight"], keyof _162.Height>, never>;
                        proofInit?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_2["consensusHeight"], keyof _162.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_2, keyof _170.MsgConnectionOpenTry>, never>>(object: I_2): _170.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _170.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _170.MsgConnectionOpenTryResponse;
                    toJSON(_: _170.MsgConnectionOpenTryResponse): unknown;
                    fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _170.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _170.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgConnectionOpenAck;
                    fromJSON(object: any): _170.MsgConnectionOpenAck;
                    toJSON(message: _170.MsgConnectionOpenAck): unknown;
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
                        } & Record<Exclude<keyof I_4["version"], keyof _167.Version>, never>;
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
                        } & Record<Exclude<keyof I_4["proofHeight"], keyof _162.Height>, never>;
                        proofTry?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_4["consensusHeight"], keyof _162.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_4, keyof _170.MsgConnectionOpenAck>, never>>(object: I_4): _170.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _170.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _170.MsgConnectionOpenAckResponse;
                    toJSON(_: _170.MsgConnectionOpenAckResponse): unknown;
                    fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _170.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _170.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _170.MsgConnectionOpenConfirm;
                    toJSON(message: _170.MsgConnectionOpenConfirm): unknown;
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
                        } & Record<Exclude<keyof I_6["proofHeight"], keyof _162.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_6, keyof _170.MsgConnectionOpenConfirm>, never>>(object: I_6): _170.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _170.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _170.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _170.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends {} & {} & Record<Exclude<keyof I_7, never>, never>>(_: I_7): _170.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _169.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryConnectionRequest;
                    fromJSON(object: any): _169.QueryConnectionRequest;
                    toJSON(message: _169.QueryConnectionRequest): unknown;
                    fromPartial<I_8 extends {
                        connectionId?: string;
                    } & {
                        connectionId?: string;
                    } & Record<Exclude<keyof I_8, "connectionId">, never>>(object: I_8): _169.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _169.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryConnectionResponse;
                    fromJSON(object: any): _169.QueryConnectionResponse;
                    toJSON(message: _169.QueryConnectionResponse): unknown;
                    fromPartial<I_9 extends {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _167.State;
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
                            state?: _167.State;
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
                            } & Record<Exclude<keyof I_9["connection"]["versions"][number], keyof _167.Version>, never>)[] & Record<Exclude<keyof I_9["connection"]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _167.State;
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
                            } & Record<Exclude<keyof I_9["connection"]["counterparty"], keyof _167.Counterparty>, never>;
                            delayPeriod?: any;
                        } & Record<Exclude<keyof I_9["connection"], keyof _167.ConnectionEnd>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_9["proofHeight"], keyof _162.Height>, never>;
                    } & Record<Exclude<keyof I_9, keyof _169.QueryConnectionResponse>, never>>(object: I_9): _169.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _169.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryConnectionsRequest;
                    fromJSON(object: any): _169.QueryConnectionsRequest;
                    toJSON(message: _169.QueryConnectionsRequest): unknown;
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
                    } & Record<Exclude<keyof I_10, "pagination">, never>>(object: I_10): _169.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _169.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryConnectionsResponse;
                    fromJSON(object: any): _169.QueryConnectionsResponse;
                    toJSON(message: _169.QueryConnectionsResponse): unknown;
                    fromPartial<I_11 extends {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _167.State;
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
                            state?: _167.State;
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
                            state?: _167.State;
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
                            } & Record<Exclude<keyof I_11["connections"][number]["versions"][number], keyof _167.Version>, never>)[] & Record<Exclude<keyof I_11["connections"][number]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _167.State;
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
                            } & Record<Exclude<keyof I_11["connections"][number]["counterparty"], keyof _167.Counterparty>, never>;
                            delayPeriod?: any;
                        } & Record<Exclude<keyof I_11["connections"][number], keyof _167.IdentifiedConnection>, never>)[] & Record<Exclude<keyof I_11["connections"], keyof {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _167.State;
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
                        } & Record<Exclude<keyof I_11["height"], keyof _162.Height>, never>;
                    } & Record<Exclude<keyof I_11, keyof _169.QueryConnectionsResponse>, never>>(object: I_11): _169.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _169.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryClientConnectionsRequest;
                    fromJSON(object: any): _169.QueryClientConnectionsRequest;
                    toJSON(message: _169.QueryClientConnectionsRequest): unknown;
                    fromPartial<I_12 extends {
                        clientId?: string;
                    } & {
                        clientId?: string;
                    } & Record<Exclude<keyof I_12, "clientId">, never>>(object: I_12): _169.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _169.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryClientConnectionsResponse;
                    fromJSON(object: any): _169.QueryClientConnectionsResponse;
                    toJSON(message: _169.QueryClientConnectionsResponse): unknown;
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
                        } & Record<Exclude<keyof I_13["proofHeight"], keyof _162.Height>, never>;
                    } & Record<Exclude<keyof I_13, keyof _169.QueryClientConnectionsResponse>, never>>(object: I_13): _169.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _169.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _169.QueryConnectionClientStateRequest;
                    toJSON(message: _169.QueryConnectionClientStateRequest): unknown;
                    fromPartial<I_14 extends {
                        connectionId?: string;
                    } & {
                        connectionId?: string;
                    } & Record<Exclude<keyof I_14, "connectionId">, never>>(object: I_14): _169.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _169.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _169.QueryConnectionClientStateResponse;
                    toJSON(message: _169.QueryConnectionClientStateResponse): unknown;
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
                        } & Record<Exclude<keyof I_15["identifiedClientState"], keyof _162.IdentifiedClientState>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_15["proofHeight"], keyof _162.Height>, never>;
                    } & Record<Exclude<keyof I_15, keyof _169.QueryConnectionClientStateResponse>, never>>(object: I_15): _169.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _169.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _169.QueryConnectionConsensusStateRequest;
                    toJSON(message: _169.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial<I_16 extends {
                        connectionId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & {
                        connectionId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & Record<Exclude<keyof I_16, keyof _169.QueryConnectionConsensusStateRequest>, never>>(object: I_16): _169.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _169.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _169.QueryConnectionConsensusStateResponse;
                    toJSON(message: _169.QueryConnectionConsensusStateResponse): unknown;
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
                        } & Record<Exclude<keyof I_17["proofHeight"], keyof _162.Height>, never>;
                    } & Record<Exclude<keyof I_17, keyof _169.QueryConnectionConsensusStateResponse>, never>>(object: I_17): _169.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _168.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.GenesisState;
                    fromJSON(object: any): _168.GenesisState;
                    toJSON(message: _168.GenesisState): unknown;
                    fromPartial<I_18 extends {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _167.State;
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
                            state?: _167.State;
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
                            state?: _167.State;
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
                            } & Record<Exclude<keyof I_18["connections"][number]["versions"][number], keyof _167.Version>, never>)[] & Record<Exclude<keyof I_18["connections"][number]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _167.State;
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
                            } & Record<Exclude<keyof I_18["connections"][number]["counterparty"], keyof _167.Counterparty>, never>;
                            delayPeriod?: any;
                        } & Record<Exclude<keyof I_18["connections"][number], keyof _167.IdentifiedConnection>, never>)[] & Record<Exclude<keyof I_18["connections"], keyof {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _167.State;
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
                        } & Record<Exclude<keyof I_18["clientConnectionPaths"][number], keyof _167.ConnectionPaths>, never>)[] & Record<Exclude<keyof I_18["clientConnectionPaths"], keyof {
                            clientId?: string;
                            paths?: string[];
                        }[]>, never>;
                        nextConnectionSequence?: any;
                        params?: {
                            maxExpectedTimePerBlock?: any;
                        } & {
                            maxExpectedTimePerBlock?: any;
                        } & Record<Exclude<keyof I_18["params"], "maxExpectedTimePerBlock">, never>;
                    } & Record<Exclude<keyof I_18, keyof _168.GenesisState>, never>>(object: I_18): _168.GenesisState;
                };
                stateFromJSON(object: any): _167.State;
                stateToJSON(object: _167.State): string;
                State: typeof _167.State;
                ConnectionEnd: {
                    encode(message: _167.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.ConnectionEnd;
                    fromJSON(object: any): _167.ConnectionEnd;
                    toJSON(message: _167.ConnectionEnd): unknown;
                    fromPartial<I_19 extends {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _167.State;
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
                        } & Record<Exclude<keyof I_19["versions"][number], keyof _167.Version>, never>)[] & Record<Exclude<keyof I_19["versions"], keyof {
                            identifier?: string;
                            features?: string[];
                        }[]>, never>;
                        state?: _167.State;
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
                        } & Record<Exclude<keyof I_19["counterparty"], keyof _167.Counterparty>, never>;
                        delayPeriod?: any;
                    } & Record<Exclude<keyof I_19, keyof _167.ConnectionEnd>, never>>(object: I_19): _167.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _167.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.IdentifiedConnection;
                    fromJSON(object: any): _167.IdentifiedConnection;
                    toJSON(message: _167.IdentifiedConnection): unknown;
                    fromPartial<I_20 extends {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _167.State;
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
                        } & Record<Exclude<keyof I_20["versions"][number], keyof _167.Version>, never>)[] & Record<Exclude<keyof I_20["versions"], keyof {
                            identifier?: string;
                            features?: string[];
                        }[]>, never>;
                        state?: _167.State;
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
                        } & Record<Exclude<keyof I_20["counterparty"], keyof _167.Counterparty>, never>;
                        delayPeriod?: any;
                    } & Record<Exclude<keyof I_20, keyof _167.IdentifiedConnection>, never>>(object: I_20): _167.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _167.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.Counterparty;
                    fromJSON(object: any): _167.Counterparty;
                    toJSON(message: _167.Counterparty): unknown;
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
                    } & Record<Exclude<keyof I_21, keyof _167.Counterparty>, never>>(object: I_21): _167.Counterparty;
                };
                ClientPaths: {
                    encode(message: _167.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.ClientPaths;
                    fromJSON(object: any): _167.ClientPaths;
                    toJSON(message: _167.ClientPaths): unknown;
                    fromPartial<I_22 extends {
                        paths?: string[];
                    } & {
                        paths?: string[] & string[] & Record<Exclude<keyof I_22["paths"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_22, "paths">, never>>(object: I_22): _167.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _167.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.ConnectionPaths;
                    fromJSON(object: any): _167.ConnectionPaths;
                    toJSON(message: _167.ConnectionPaths): unknown;
                    fromPartial<I_23 extends {
                        clientId?: string;
                        paths?: string[];
                    } & {
                        clientId?: string;
                        paths?: string[] & string[] & Record<Exclude<keyof I_23["paths"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_23, keyof _167.ConnectionPaths>, never>>(object: I_23): _167.ConnectionPaths;
                };
                Version: {
                    encode(message: _167.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.Version;
                    fromJSON(object: any): _167.Version;
                    toJSON(message: _167.Version): unknown;
                    fromPartial<I_24 extends {
                        identifier?: string;
                        features?: string[];
                    } & {
                        identifier?: string;
                        features?: string[] & string[] & Record<Exclude<keyof I_24["features"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_24, keyof _167.Version>, never>>(object: I_24): _167.Version;
                };
                Params: {
                    encode(message: _167.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.Params;
                    fromJSON(object: any): _167.Params;
                    toJSON(message: _167.Params): unknown;
                    fromPartial<I_25 extends {
                        maxExpectedTimePerBlock?: any;
                    } & {
                        maxExpectedTimePerBlock?: any;
                    } & Record<Exclude<keyof I_25, "maxExpectedTimePerBlock">, never>>(object: I_25): _167.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryAppVersionRequest: {
                    encode(message: _171.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryAppVersionRequest;
                    fromJSON(object: any): _171.QueryAppVersionRequest;
                    toJSON(message: _171.QueryAppVersionRequest): unknown;
                    fromPartial<I extends {
                        portId?: string;
                        connectionId?: string;
                        ordering?: _158.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        proposedVersion?: string;
                    } & {
                        portId?: string;
                        connectionId?: string;
                        ordering?: _158.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        } & {
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I["counterparty"], keyof _158.Counterparty>, never>;
                        proposedVersion?: string;
                    } & Record<Exclude<keyof I, keyof _171.QueryAppVersionRequest>, never>>(object: I): _171.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _171.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryAppVersionResponse;
                    fromJSON(object: any): _171.QueryAppVersionResponse;
                    toJSON(message: _171.QueryAppVersionResponse): unknown;
                    fromPartial<I_1 extends {
                        portId?: string;
                        version?: string;
                    } & {
                        portId?: string;
                        version?: string;
                    } & Record<Exclude<keyof I_1, keyof _171.QueryAppVersionResponse>, never>>(object: I_1): _171.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _172.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.GenesisState;
                    fromJSON(object: any): _172.GenesisState;
                    toJSON(message: _172.GenesisState): unknown;
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
                                state?: _167.State;
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
                                state?: _158.State;
                                ordering?: _158.Order;
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
                            } & Record<Exclude<keyof I["clientGenesis"]["clients"][number], keyof _162.IdentifiedClientState>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clients"], keyof {
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
                                    } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["height"], keyof _162.Height>, never>;
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    } & {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                                } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number], keyof _162.ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"], keyof {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[]>, never>;
                            } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number], keyof _162.ClientConsensusStates>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"], keyof {
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
                                } & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number]["clientMetadata"][number], keyof _163.GenesisMetadata>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number]["clientMetadata"], keyof {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[]>, never>;
                            } & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number], keyof _163.IdentifiedGenesisMetadata>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"], keyof {
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
                        } & Record<Exclude<keyof I["clientGenesis"], keyof _163.GenesisState>, never>;
                        connectionGenesis?: {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _167.State;
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
                                state?: _167.State;
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
                                state?: _167.State;
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
                                } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"][number], keyof _167.Version>, never>)[] & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"], keyof {
                                    identifier?: string;
                                    features?: string[];
                                }[]>, never>;
                                state?: _167.State;
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
                                } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["counterparty"], keyof _167.Counterparty>, never>;
                                delayPeriod?: any;
                            } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number], keyof _167.IdentifiedConnection>, never>)[] & Record<Exclude<keyof I["connectionGenesis"]["connections"], keyof {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _167.State;
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
                            } & Record<Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"][number], keyof _167.ConnectionPaths>, never>)[] & Record<Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"], keyof {
                                clientId?: string;
                                paths?: string[];
                            }[]>, never>;
                            nextConnectionSequence?: any;
                            params?: {
                                maxExpectedTimePerBlock?: any;
                            } & {
                                maxExpectedTimePerBlock?: any;
                            } & Record<Exclude<keyof I["connectionGenesis"]["params"], "maxExpectedTimePerBlock">, never>;
                        } & Record<Exclude<keyof I["connectionGenesis"], keyof _168.GenesisState>, never>;
                        channelGenesis?: {
                            channels?: {
                                state?: _158.State;
                                ordering?: _158.Order;
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
                                state?: _158.State;
                                ordering?: _158.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[] & ({
                                state?: _158.State;
                                ordering?: _158.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            } & {
                                state?: _158.State;
                                ordering?: _158.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                } & {
                                    portId?: string;
                                    channelId?: string;
                                } & Record<Exclude<keyof I["channelGenesis"]["channels"][number]["counterparty"], keyof _158.Counterparty>, never>;
                                connectionHops?: string[] & string[] & Record<Exclude<keyof I["channelGenesis"]["channels"][number]["connectionHops"], keyof string[]>, never>;
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I["channelGenesis"]["channels"][number], keyof _158.IdentifiedChannel>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["channels"], keyof {
                                state?: _158.State;
                                ordering?: _158.Order;
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
                            } & Record<Exclude<keyof I["channelGenesis"]["acknowledgements"][number], keyof _158.PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["acknowledgements"], keyof {
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
                            } & Record<Exclude<keyof I["channelGenesis"]["commitments"][number], keyof _158.PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["commitments"], keyof {
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
                            } & Record<Exclude<keyof I["channelGenesis"]["receipts"][number], keyof _158.PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["receipts"], keyof {
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
                            } & Record<Exclude<keyof I["channelGenesis"]["sendSequences"][number], keyof _159.PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["sendSequences"], keyof {
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
                            } & Record<Exclude<keyof I["channelGenesis"]["recvSequences"][number], keyof _159.PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["recvSequences"], keyof {
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
                            } & Record<Exclude<keyof I["channelGenesis"]["ackSequences"][number], keyof _159.PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["ackSequences"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[]>, never>;
                            nextChannelSequence?: any;
                        } & Record<Exclude<keyof I["channelGenesis"], keyof _159.GenesisState>, never>;
                    } & Record<Exclude<keyof I, keyof _172.GenesisState>, never>>(object: I): _172.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _173.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ClientState;
                    fromJSON(object: any): _173.ClientState;
                    toJSON(message: _173.ClientState): unknown;
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
                        } & Record<Exclude<keyof I["height"], keyof _162.Height>, never>;
                    } & Record<Exclude<keyof I, keyof _173.ClientState>, never>>(object: I): _173.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _174.DataType;
                dataTypeToJSON(object: _174.DataType): string;
                DataType: typeof _174.DataType;
                ClientState: {
                    encode(message: _174.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ClientState;
                    fromJSON(object: any): _174.ClientState;
                    toJSON(message: _174.ClientState): unknown;
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
                        } & Record<Exclude<keyof I["consensusState"], keyof _174.ConsensusState>, never>;
                        allowUpdateAfterProposal?: boolean;
                    } & Record<Exclude<keyof I, keyof _174.ClientState>, never>>(object: I): _174.ClientState;
                };
                ConsensusState: {
                    encode(message: _174.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ConsensusState;
                    fromJSON(object: any): _174.ConsensusState;
                    toJSON(message: _174.ConsensusState): unknown;
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
                    } & Record<Exclude<keyof I_1, keyof _174.ConsensusState>, never>>(object: I_1): _174.ConsensusState;
                };
                Header: {
                    encode(message: _174.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Header;
                    fromJSON(object: any): _174.Header;
                    toJSON(message: _174.Header): unknown;
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
                    } & Record<Exclude<keyof I_2, keyof _174.Header>, never>>(object: I_2): _174.Header;
                };
                Misbehaviour: {
                    encode(message: _174.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Misbehaviour;
                    fromJSON(object: any): _174.Misbehaviour;
                    toJSON(message: _174.Misbehaviour): unknown;
                    fromPartial<I_3 extends {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _174.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _174.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    } & {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _174.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & {
                            signature?: Uint8Array;
                            dataType?: _174.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & Record<Exclude<keyof I_3["signatureOne"], keyof _174.SignatureAndData>, never>;
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _174.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & {
                            signature?: Uint8Array;
                            dataType?: _174.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & Record<Exclude<keyof I_3["signatureTwo"], keyof _174.SignatureAndData>, never>;
                    } & Record<Exclude<keyof I_3, keyof _174.Misbehaviour>, never>>(object: I_3): _174.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _174.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.SignatureAndData;
                    fromJSON(object: any): _174.SignatureAndData;
                    toJSON(message: _174.SignatureAndData): unknown;
                    fromPartial<I_4 extends {
                        signature?: Uint8Array;
                        dataType?: _174.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    } & {
                        signature?: Uint8Array;
                        dataType?: _174.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_4, keyof _174.SignatureAndData>, never>>(object: I_4): _174.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _174.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.TimestampedSignatureData;
                    fromJSON(object: any): _174.TimestampedSignatureData;
                    toJSON(message: _174.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    } & {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_5, keyof _174.TimestampedSignatureData>, never>>(object: I_5): _174.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _174.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.SignBytes;
                    fromJSON(object: any): _174.SignBytes;
                    toJSON(message: _174.SignBytes): unknown;
                    fromPartial<I_6 extends {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _174.DataType;
                        data?: Uint8Array;
                    } & {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _174.DataType;
                        data?: Uint8Array;
                    } & Record<Exclude<keyof I_6, keyof _174.SignBytes>, never>>(object: I_6): _174.SignBytes;
                };
                HeaderData: {
                    encode(message: _174.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.HeaderData;
                    fromJSON(object: any): _174.HeaderData;
                    toJSON(message: _174.HeaderData): unknown;
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
                    } & Record<Exclude<keyof I_7, keyof _174.HeaderData>, never>>(object: I_7): _174.HeaderData;
                };
                ClientStateData: {
                    encode(message: _174.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ClientStateData;
                    fromJSON(object: any): _174.ClientStateData;
                    toJSON(message: _174.ClientStateData): unknown;
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
                    } & Record<Exclude<keyof I_8, keyof _174.ClientStateData>, never>>(object: I_8): _174.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _174.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ConsensusStateData;
                    fromJSON(object: any): _174.ConsensusStateData;
                    toJSON(message: _174.ConsensusStateData): unknown;
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
                    } & Record<Exclude<keyof I_9, keyof _174.ConsensusStateData>, never>>(object: I_9): _174.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _174.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ConnectionStateData;
                    fromJSON(object: any): _174.ConnectionStateData;
                    toJSON(message: _174.ConnectionStateData): unknown;
                    fromPartial<I_10 extends {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _167.State;
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
                            state?: _167.State;
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
                            } & Record<Exclude<keyof I_10["connection"]["versions"][number], keyof _167.Version>, never>)[] & Record<Exclude<keyof I_10["connection"]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _167.State;
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
                            } & Record<Exclude<keyof I_10["connection"]["counterparty"], keyof _167.Counterparty>, never>;
                            delayPeriod?: any;
                        } & Record<Exclude<keyof I_10["connection"], keyof _167.ConnectionEnd>, never>;
                    } & Record<Exclude<keyof I_10, keyof _174.ConnectionStateData>, never>>(object: I_10): _174.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _174.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ChannelStateData;
                    fromJSON(object: any): _174.ChannelStateData;
                    toJSON(message: _174.ChannelStateData): unknown;
                    fromPartial<I_11 extends {
                        path?: Uint8Array;
                        channel?: {
                            state?: _158.State;
                            ordering?: _158.Order;
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
                            state?: _158.State;
                            ordering?: _158.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _158.State;
                            ordering?: _158.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_11["channel"]["counterparty"], keyof _158.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_11["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I_11["channel"], keyof _158.Channel>, never>;
                    } & Record<Exclude<keyof I_11, keyof _174.ChannelStateData>, never>>(object: I_11): _174.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _174.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.PacketCommitmentData;
                    fromJSON(object: any): _174.PacketCommitmentData;
                    toJSON(message: _174.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    } & Record<Exclude<keyof I_12, keyof _174.PacketCommitmentData>, never>>(object: I_12): _174.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _174.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.PacketAcknowledgementData;
                    fromJSON(object: any): _174.PacketAcknowledgementData;
                    toJSON(message: _174.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    } & Record<Exclude<keyof I_13, keyof _174.PacketAcknowledgementData>, never>>(object: I_13): _174.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _174.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.PacketReceiptAbsenceData;
                    fromJSON(object: any): _174.PacketReceiptAbsenceData;
                    toJSON(message: _174.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends {
                        path?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                    } & Record<Exclude<keyof I_14, "path">, never>>(object: I_14): _174.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _174.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.NextSequenceRecvData;
                    fromJSON(object: any): _174.NextSequenceRecvData;
                    toJSON(message: _174.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    } & {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    } & Record<Exclude<keyof I_15, keyof _174.NextSequenceRecvData>, never>>(object: I_15): _174.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _175.DataType;
                dataTypeToJSON(object: _175.DataType): string;
                DataType: typeof _175.DataType;
                ClientState: {
                    encode(message: _175.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ClientState;
                    fromJSON(object: any): _175.ClientState;
                    toJSON(message: _175.ClientState): unknown;
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
                        } & Record<Exclude<keyof I["consensusState"], keyof _175.ConsensusState>, never>;
                        allowUpdateAfterProposal?: boolean;
                    } & Record<Exclude<keyof I, keyof _175.ClientState>, never>>(object: I): _175.ClientState;
                };
                ConsensusState: {
                    encode(message: _175.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ConsensusState;
                    fromJSON(object: any): _175.ConsensusState;
                    toJSON(message: _175.ConsensusState): unknown;
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
                    } & Record<Exclude<keyof I_1, keyof _175.ConsensusState>, never>>(object: I_1): _175.ConsensusState;
                };
                Header: {
                    encode(message: _175.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Header;
                    fromJSON(object: any): _175.Header;
                    toJSON(message: _175.Header): unknown;
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
                    } & Record<Exclude<keyof I_2, keyof _175.Header>, never>>(object: I_2): _175.Header;
                };
                Misbehaviour: {
                    encode(message: _175.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Misbehaviour;
                    fromJSON(object: any): _175.Misbehaviour;
                    toJSON(message: _175.Misbehaviour): unknown;
                    fromPartial<I_3 extends {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _175.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _175.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    } & {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _175.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & {
                            signature?: Uint8Array;
                            dataType?: _175.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & Record<Exclude<keyof I_3["signatureOne"], keyof _175.SignatureAndData>, never>;
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _175.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & {
                            signature?: Uint8Array;
                            dataType?: _175.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & Record<Exclude<keyof I_3["signatureTwo"], keyof _175.SignatureAndData>, never>;
                    } & Record<Exclude<keyof I_3, keyof _175.Misbehaviour>, never>>(object: I_3): _175.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _175.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.SignatureAndData;
                    fromJSON(object: any): _175.SignatureAndData;
                    toJSON(message: _175.SignatureAndData): unknown;
                    fromPartial<I_4 extends {
                        signature?: Uint8Array;
                        dataType?: _175.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    } & {
                        signature?: Uint8Array;
                        dataType?: _175.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_4, keyof _175.SignatureAndData>, never>>(object: I_4): _175.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _175.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.TimestampedSignatureData;
                    fromJSON(object: any): _175.TimestampedSignatureData;
                    toJSON(message: _175.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    } & {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_5, keyof _175.TimestampedSignatureData>, never>>(object: I_5): _175.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _175.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.SignBytes;
                    fromJSON(object: any): _175.SignBytes;
                    toJSON(message: _175.SignBytes): unknown;
                    fromPartial<I_6 extends {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _175.DataType;
                        data?: Uint8Array;
                    } & {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _175.DataType;
                        data?: Uint8Array;
                    } & Record<Exclude<keyof I_6, keyof _175.SignBytes>, never>>(object: I_6): _175.SignBytes;
                };
                HeaderData: {
                    encode(message: _175.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.HeaderData;
                    fromJSON(object: any): _175.HeaderData;
                    toJSON(message: _175.HeaderData): unknown;
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
                    } & Record<Exclude<keyof I_7, keyof _175.HeaderData>, never>>(object: I_7): _175.HeaderData;
                };
                ClientStateData: {
                    encode(message: _175.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ClientStateData;
                    fromJSON(object: any): _175.ClientStateData;
                    toJSON(message: _175.ClientStateData): unknown;
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
                    } & Record<Exclude<keyof I_8, keyof _175.ClientStateData>, never>>(object: I_8): _175.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _175.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ConsensusStateData;
                    fromJSON(object: any): _175.ConsensusStateData;
                    toJSON(message: _175.ConsensusStateData): unknown;
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
                    } & Record<Exclude<keyof I_9, keyof _175.ConsensusStateData>, never>>(object: I_9): _175.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _175.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ConnectionStateData;
                    fromJSON(object: any): _175.ConnectionStateData;
                    toJSON(message: _175.ConnectionStateData): unknown;
                    fromPartial<I_10 extends {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _167.State;
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
                            state?: _167.State;
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
                            } & Record<Exclude<keyof I_10["connection"]["versions"][number], keyof _167.Version>, never>)[] & Record<Exclude<keyof I_10["connection"]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _167.State;
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
                            } & Record<Exclude<keyof I_10["connection"]["counterparty"], keyof _167.Counterparty>, never>;
                            delayPeriod?: any;
                        } & Record<Exclude<keyof I_10["connection"], keyof _167.ConnectionEnd>, never>;
                    } & Record<Exclude<keyof I_10, keyof _175.ConnectionStateData>, never>>(object: I_10): _175.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _175.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ChannelStateData;
                    fromJSON(object: any): _175.ChannelStateData;
                    toJSON(message: _175.ChannelStateData): unknown;
                    fromPartial<I_11 extends {
                        path?: Uint8Array;
                        channel?: {
                            state?: _158.State;
                            ordering?: _158.Order;
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
                            state?: _158.State;
                            ordering?: _158.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _158.State;
                            ordering?: _158.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_11["channel"]["counterparty"], keyof _158.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_11["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I_11["channel"], keyof _158.Channel>, never>;
                    } & Record<Exclude<keyof I_11, keyof _175.ChannelStateData>, never>>(object: I_11): _175.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _175.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.PacketCommitmentData;
                    fromJSON(object: any): _175.PacketCommitmentData;
                    toJSON(message: _175.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    } & Record<Exclude<keyof I_12, keyof _175.PacketCommitmentData>, never>>(object: I_12): _175.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _175.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.PacketAcknowledgementData;
                    fromJSON(object: any): _175.PacketAcknowledgementData;
                    toJSON(message: _175.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    } & Record<Exclude<keyof I_13, keyof _175.PacketAcknowledgementData>, never>>(object: I_13): _175.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _175.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.PacketReceiptAbsenceData;
                    fromJSON(object: any): _175.PacketReceiptAbsenceData;
                    toJSON(message: _175.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends {
                        path?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                    } & Record<Exclude<keyof I_14, "path">, never>>(object: I_14): _175.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _175.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.NextSequenceRecvData;
                    fromJSON(object: any): _175.NextSequenceRecvData;
                    toJSON(message: _175.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    } & {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    } & Record<Exclude<keyof I_15, keyof _175.NextSequenceRecvData>, never>>(object: I_15): _175.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _176.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ClientState;
                    fromJSON(object: any): _176.ClientState;
                    toJSON(message: _176.ClientState): unknown;
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
                        } & Record<Exclude<keyof I["trustLevel"], keyof _176.Fraction>, never>;
                        trustingPeriod?: string;
                        unbondingPeriod?: string;
                        maxClockDrift?: string;
                        frozenHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I["frozenHeight"], keyof _162.Height>, never>;
                        latestHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I["latestHeight"], keyof _162.Height>, never>;
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
                    } & Record<Exclude<keyof I, keyof _176.ClientState>, never>>(object: I): _176.ClientState;
                };
                ConsensusState: {
                    encode(message: _176.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ConsensusState;
                    fromJSON(object: any): _176.ConsensusState;
                    toJSON(message: _176.ConsensusState): unknown;
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
                    } & Record<Exclude<keyof I_1, keyof _176.ConsensusState>, never>>(object: I_1): _176.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _176.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.Misbehaviour;
                    fromJSON(object: any): _176.Misbehaviour;
                    toJSON(message: _176.Misbehaviour): unknown;
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
                            } & Record<Exclude<keyof I_2["header_1"]["trustedHeight"], keyof _162.Height>, never>;
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
                        } & Record<Exclude<keyof I_2["header_1"], keyof _176.Header>, never>;
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
                            } & Record<Exclude<keyof I_2["header_2"]["trustedHeight"], keyof _162.Height>, never>;
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
                        } & Record<Exclude<keyof I_2["header_2"], keyof _176.Header>, never>;
                    } & Record<Exclude<keyof I_2, keyof _176.Misbehaviour>, never>>(object: I_2): _176.Misbehaviour;
                };
                Header: {
                    encode(message: _176.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.Header;
                    fromJSON(object: any): _176.Header;
                    toJSON(message: _176.Header): unknown;
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
                        } & Record<Exclude<keyof I_3["trustedHeight"], keyof _162.Height>, never>;
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
                    } & Record<Exclude<keyof I_3, keyof _176.Header>, never>>(object: I_3): _176.Header;
                };
                Fraction: {
                    encode(message: _176.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.Fraction;
                    fromJSON(object: any): _176.Fraction;
                    toJSON(message: _176.Fraction): unknown;
                    fromPartial<I_4 extends {
                        numerator?: any;
                        denominator?: any;
                    } & {
                        numerator?: any;
                        denominator?: any;
                    } & Record<Exclude<keyof I_4, keyof _176.Fraction>, never>>(object: I_4): _176.Fraction;
                };
            };
        }
    }
}
