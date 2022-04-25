import * as _925 from "./applications/transfer/v1/genesis";
import * as _926 from "./applications/transfer/v1/query";
import * as _927 from "./applications/transfer/v1/transfer";
import * as _928 from "./applications/transfer/v1/tx";
import * as _937 from "./applications/transfer/v2/packet";
import * as _938 from "./core/channel/v1/channel";
import * as _939 from "./core/channel/v1/genesis";
import * as _940 from "./core/channel/v1/query";
import * as _941 from "./core/channel/v1/tx";
import * as _950 from "./core/client/v1/client";
import * as _951 from "./core/client/v1/genesis";
import * as _952 from "./core/client/v1/query";
import * as _953 from "./core/client/v1/tx";
import * as _962 from "./core/commitment/v1/commitment";
import * as _963 from "./core/connection/v1/connection";
import * as _964 from "./core/connection/v1/genesis";
import * as _965 from "./core/connection/v1/query";
import * as _966 from "./core/connection/v1/tx";
import * as _975 from "./core/port/v1/query";
import * as _976 from "./core/types/v1/genesis";
import * as _977 from "./lightclients/localhost/v1/localhost";
import * as _978 from "./lightclients/solomachine/v1/solomachine";
import * as _979 from "./lightclients/solomachine/v2/solomachine";
import * as _980 from "./lightclients/tendermint/v1/tendermint";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgTransfer: {
                    encode(message: _928.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _928.MsgTransfer;
                    fromJSON(object: any): _928.MsgTransfer;
                    toJSON(message: _928.MsgTransfer): unknown;
                    fromPartial<I extends unknown>(object: I): _928.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _928.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _928.MsgTransferResponse;
                    fromJSON(_: any): _928.MsgTransferResponse;
                    toJSON(_: _928.MsgTransferResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _928.MsgTransferResponse;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _928.MsgTransfer) => {
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
                        }) => _928.MsgTransfer;
                    };
                };
                encoded: {
                    transfer(value: _928.MsgTransfer): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    transfer(value: any): {
                        typeUrl: string;
                        value: _928.MsgTransfer;
                    };
                };
                toJSON: {
                    transfer(value: _928.MsgTransfer): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    transfer(value: _928.MsgTransfer): {
                        typeUrl: string;
                        value: _928.MsgTransfer;
                    };
                };
                messages: {
                    transfer(value: _928.MsgTransfer): {
                        typeUrl: string;
                        value: _928.MsgTransfer;
                    };
                };
                DenomTrace: {
                    encode(message: _927.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _927.DenomTrace;
                    fromJSON(object: any): _927.DenomTrace;
                    toJSON(message: _927.DenomTrace): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _927.DenomTrace;
                };
                Params: {
                    encode(message: _927.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _927.Params;
                    fromJSON(object: any): _927.Params;
                    toJSON(message: _927.Params): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _927.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _926.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _926.QueryDenomTraceRequest;
                    fromJSON(object: any): _926.QueryDenomTraceRequest;
                    toJSON(message: _926.QueryDenomTraceRequest): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _926.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _926.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _926.QueryDenomTraceResponse;
                    fromJSON(object: any): _926.QueryDenomTraceResponse;
                    toJSON(message: _926.QueryDenomTraceResponse): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _926.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _926.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _926.QueryDenomTracesRequest;
                    fromJSON(object: any): _926.QueryDenomTracesRequest;
                    toJSON(message: _926.QueryDenomTracesRequest): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _926.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _926.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _926.QueryDenomTracesResponse;
                    fromJSON(object: any): _926.QueryDenomTracesResponse;
                    toJSON(message: _926.QueryDenomTracesResponse): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _926.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _926.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _926.QueryParamsRequest;
                    fromJSON(_: any): _926.QueryParamsRequest;
                    toJSON(_: _926.QueryParamsRequest): unknown;
                    fromPartial<I_8 extends unknown>(_: I_8): _926.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _926.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _926.QueryParamsResponse;
                    fromJSON(object: any): _926.QueryParamsResponse;
                    toJSON(message: _926.QueryParamsResponse): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _926.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _925.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _925.GenesisState;
                    fromJSON(object: any): _925.GenesisState;
                    toJSON(message: _925.GenesisState): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _925.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _937.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _937.FungibleTokenPacketData;
                    fromJSON(object: any): _937.FungibleTokenPacketData;
                    toJSON(message: _937.FungibleTokenPacketData): unknown;
                    fromPartial<I extends unknown>(object: I): _937.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgChannelOpenInit: {
                    encode(message: _941.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _941.MsgChannelOpenInit;
                    fromJSON(object: any): _941.MsgChannelOpenInit;
                    toJSON(message: _941.MsgChannelOpenInit): unknown;
                    fromPartial<I extends unknown>(object: I): _941.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _941.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _941.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _941.MsgChannelOpenInitResponse;
                    toJSON(_: _941.MsgChannelOpenInitResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _941.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _941.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _941.MsgChannelOpenTry;
                    fromJSON(object: any): _941.MsgChannelOpenTry;
                    toJSON(message: _941.MsgChannelOpenTry): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _941.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _941.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _941.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _941.MsgChannelOpenTryResponse;
                    toJSON(_: _941.MsgChannelOpenTryResponse): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _941.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _941.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _941.MsgChannelOpenAck;
                    fromJSON(object: any): _941.MsgChannelOpenAck;
                    toJSON(message: _941.MsgChannelOpenAck): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _941.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _941.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _941.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _941.MsgChannelOpenAckResponse;
                    toJSON(_: _941.MsgChannelOpenAckResponse): unknown;
                    fromPartial<I_5 extends unknown>(_: I_5): _941.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _941.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _941.MsgChannelOpenConfirm;
                    fromJSON(object: any): _941.MsgChannelOpenConfirm;
                    toJSON(message: _941.MsgChannelOpenConfirm): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _941.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _941.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _941.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _941.MsgChannelOpenConfirmResponse;
                    toJSON(_: _941.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _941.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _941.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _941.MsgChannelCloseInit;
                    fromJSON(object: any): _941.MsgChannelCloseInit;
                    toJSON(message: _941.MsgChannelCloseInit): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _941.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _941.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _941.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _941.MsgChannelCloseInitResponse;
                    toJSON(_: _941.MsgChannelCloseInitResponse): unknown;
                    fromPartial<I_9 extends unknown>(_: I_9): _941.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _941.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _941.MsgChannelCloseConfirm;
                    fromJSON(object: any): _941.MsgChannelCloseConfirm;
                    toJSON(message: _941.MsgChannelCloseConfirm): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _941.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _941.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _941.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _941.MsgChannelCloseConfirmResponse;
                    toJSON(_: _941.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial<I_11 extends unknown>(_: I_11): _941.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _941.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _941.MsgRecvPacket;
                    fromJSON(object: any): _941.MsgRecvPacket;
                    toJSON(message: _941.MsgRecvPacket): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _941.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _941.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _941.MsgRecvPacketResponse;
                    fromJSON(_: any): _941.MsgRecvPacketResponse;
                    toJSON(_: _941.MsgRecvPacketResponse): unknown;
                    fromPartial<I_13 extends unknown>(_: I_13): _941.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _941.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _941.MsgTimeout;
                    fromJSON(object: any): _941.MsgTimeout;
                    toJSON(message: _941.MsgTimeout): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _941.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _941.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _941.MsgTimeoutResponse;
                    fromJSON(_: any): _941.MsgTimeoutResponse;
                    toJSON(_: _941.MsgTimeoutResponse): unknown;
                    fromPartial<I_15 extends unknown>(_: I_15): _941.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _941.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _941.MsgTimeoutOnClose;
                    fromJSON(object: any): _941.MsgTimeoutOnClose;
                    toJSON(message: _941.MsgTimeoutOnClose): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _941.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _941.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _941.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _941.MsgTimeoutOnCloseResponse;
                    toJSON(_: _941.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial<I_17 extends unknown>(_: I_17): _941.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _941.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _941.MsgAcknowledgement;
                    fromJSON(object: any): _941.MsgAcknowledgement;
                    toJSON(message: _941.MsgAcknowledgement): unknown;
                    fromPartial<I_18 extends unknown>(object: I_18): _941.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _941.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _941.MsgAcknowledgementResponse;
                    fromJSON(_: any): _941.MsgAcknowledgementResponse;
                    toJSON(_: _941.MsgAcknowledgementResponse): unknown;
                    fromPartial<I_19 extends unknown>(_: I_19): _941.MsgAcknowledgementResponse;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _941.MsgChannelOpenInit) => {
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
                        }) => _941.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _941.MsgChannelOpenTry) => {
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
                        }) => _941.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _941.MsgChannelOpenAck) => {
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
                        }) => _941.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _941.MsgChannelOpenConfirm) => {
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
                        }) => _941.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _941.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _941.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _941.MsgChannelCloseConfirm) => {
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
                        }) => _941.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _941.MsgRecvPacket) => {
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
                        }) => _941.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _941.MsgTimeout) => {
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
                        }) => _941.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _941.MsgTimeoutOnClose) => {
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
                        }) => _941.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _941.MsgAcknowledgement) => {
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
                        }) => _941.MsgAcknowledgement;
                    };
                };
                encoded: {
                    channelOpenInit(value: _941.MsgChannelOpenInit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelOpenTry(value: _941.MsgChannelOpenTry): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelOpenAck(value: _941.MsgChannelOpenAck): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelOpenConfirm(value: _941.MsgChannelOpenConfirm): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelCloseInit(value: _941.MsgChannelCloseInit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelCloseConfirm(value: _941.MsgChannelCloseConfirm): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    recvPacket(value: _941.MsgRecvPacket): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    timeout(value: _941.MsgTimeout): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    timeoutOnClose(value: _941.MsgTimeoutOnClose): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    acknowledgement(value: _941.MsgAcknowledgement): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    channelOpenInit(value: any): {
                        typeUrl: string;
                        value: _941.MsgChannelOpenInit;
                    };
                    channelOpenTry(value: any): {
                        typeUrl: string;
                        value: _941.MsgChannelOpenTry;
                    };
                    channelOpenAck(value: any): {
                        typeUrl: string;
                        value: _941.MsgChannelOpenAck;
                    };
                    channelOpenConfirm(value: any): {
                        typeUrl: string;
                        value: _941.MsgChannelOpenConfirm;
                    };
                    channelCloseInit(value: any): {
                        typeUrl: string;
                        value: _941.MsgChannelCloseInit;
                    };
                    channelCloseConfirm(value: any): {
                        typeUrl: string;
                        value: _941.MsgChannelCloseConfirm;
                    };
                    recvPacket(value: any): {
                        typeUrl: string;
                        value: _941.MsgRecvPacket;
                    };
                    timeout(value: any): {
                        typeUrl: string;
                        value: _941.MsgTimeout;
                    };
                    timeoutOnClose(value: any): {
                        typeUrl: string;
                        value: _941.MsgTimeoutOnClose;
                    };
                    acknowledgement(value: any): {
                        typeUrl: string;
                        value: _941.MsgAcknowledgement;
                    };
                };
                toJSON: {
                    channelOpenInit(value: _941.MsgChannelOpenInit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelOpenTry(value: _941.MsgChannelOpenTry): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelOpenAck(value: _941.MsgChannelOpenAck): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelOpenConfirm(value: _941.MsgChannelOpenConfirm): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelCloseInit(value: _941.MsgChannelCloseInit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelCloseConfirm(value: _941.MsgChannelCloseConfirm): {
                        typeUrl: string;
                        value: unknown;
                    };
                    recvPacket(value: _941.MsgRecvPacket): {
                        typeUrl: string;
                        value: unknown;
                    };
                    timeout(value: _941.MsgTimeout): {
                        typeUrl: string;
                        value: unknown;
                    };
                    timeoutOnClose(value: _941.MsgTimeoutOnClose): {
                        typeUrl: string;
                        value: unknown;
                    };
                    acknowledgement(value: _941.MsgAcknowledgement): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    channelOpenInit(value: _941.MsgChannelOpenInit): {
                        typeUrl: string;
                        value: _941.MsgChannelOpenInit;
                    };
                    channelOpenTry(value: _941.MsgChannelOpenTry): {
                        typeUrl: string;
                        value: _941.MsgChannelOpenTry;
                    };
                    channelOpenAck(value: _941.MsgChannelOpenAck): {
                        typeUrl: string;
                        value: _941.MsgChannelOpenAck;
                    };
                    channelOpenConfirm(value: _941.MsgChannelOpenConfirm): {
                        typeUrl: string;
                        value: _941.MsgChannelOpenConfirm;
                    };
                    channelCloseInit(value: _941.MsgChannelCloseInit): {
                        typeUrl: string;
                        value: _941.MsgChannelCloseInit;
                    };
                    channelCloseConfirm(value: _941.MsgChannelCloseConfirm): {
                        typeUrl: string;
                        value: _941.MsgChannelCloseConfirm;
                    };
                    recvPacket(value: _941.MsgRecvPacket): {
                        typeUrl: string;
                        value: _941.MsgRecvPacket;
                    };
                    timeout(value: _941.MsgTimeout): {
                        typeUrl: string;
                        value: _941.MsgTimeout;
                    };
                    timeoutOnClose(value: _941.MsgTimeoutOnClose): {
                        typeUrl: string;
                        value: _941.MsgTimeoutOnClose;
                    };
                    acknowledgement(value: _941.MsgAcknowledgement): {
                        typeUrl: string;
                        value: _941.MsgAcknowledgement;
                    };
                };
                messages: {
                    channelOpenInit(value: _941.MsgChannelOpenInit): {
                        typeUrl: string;
                        value: _941.MsgChannelOpenInit;
                    };
                    channelOpenTry(value: _941.MsgChannelOpenTry): {
                        typeUrl: string;
                        value: _941.MsgChannelOpenTry;
                    };
                    channelOpenAck(value: _941.MsgChannelOpenAck): {
                        typeUrl: string;
                        value: _941.MsgChannelOpenAck;
                    };
                    channelOpenConfirm(value: _941.MsgChannelOpenConfirm): {
                        typeUrl: string;
                        value: _941.MsgChannelOpenConfirm;
                    };
                    channelCloseInit(value: _941.MsgChannelCloseInit): {
                        typeUrl: string;
                        value: _941.MsgChannelCloseInit;
                    };
                    channelCloseConfirm(value: _941.MsgChannelCloseConfirm): {
                        typeUrl: string;
                        value: _941.MsgChannelCloseConfirm;
                    };
                    recvPacket(value: _941.MsgRecvPacket): {
                        typeUrl: string;
                        value: _941.MsgRecvPacket;
                    };
                    timeout(value: _941.MsgTimeout): {
                        typeUrl: string;
                        value: _941.MsgTimeout;
                    };
                    timeoutOnClose(value: _941.MsgTimeoutOnClose): {
                        typeUrl: string;
                        value: _941.MsgTimeoutOnClose;
                    };
                    acknowledgement(value: _941.MsgAcknowledgement): {
                        typeUrl: string;
                        value: _941.MsgAcknowledgement;
                    };
                };
                QueryChannelRequest: {
                    encode(message: _940.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryChannelRequest;
                    fromJSON(object: any): _940.QueryChannelRequest;
                    toJSON(message: _940.QueryChannelRequest): unknown;
                    fromPartial<I_20 extends unknown>(object: I_20): _940.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _940.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryChannelResponse;
                    fromJSON(object: any): _940.QueryChannelResponse;
                    toJSON(message: _940.QueryChannelResponse): unknown;
                    fromPartial<I_21 extends unknown>(object: I_21): _940.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _940.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryChannelsRequest;
                    fromJSON(object: any): _940.QueryChannelsRequest;
                    toJSON(message: _940.QueryChannelsRequest): unknown;
                    fromPartial<I_22 extends unknown>(object: I_22): _940.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _940.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryChannelsResponse;
                    fromJSON(object: any): _940.QueryChannelsResponse;
                    toJSON(message: _940.QueryChannelsResponse): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _940.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _940.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _940.QueryConnectionChannelsRequest;
                    toJSON(message: _940.QueryConnectionChannelsRequest): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _940.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _940.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _940.QueryConnectionChannelsResponse;
                    toJSON(message: _940.QueryConnectionChannelsResponse): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _940.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _940.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryChannelClientStateRequest;
                    fromJSON(object: any): _940.QueryChannelClientStateRequest;
                    toJSON(message: _940.QueryChannelClientStateRequest): unknown;
                    fromPartial<I_26 extends unknown>(object: I_26): _940.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _940.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryChannelClientStateResponse;
                    fromJSON(object: any): _940.QueryChannelClientStateResponse;
                    toJSON(message: _940.QueryChannelClientStateResponse): unknown;
                    fromPartial<I_27 extends unknown>(object: I_27): _940.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _940.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _940.QueryChannelConsensusStateRequest;
                    toJSON(message: _940.QueryChannelConsensusStateRequest): unknown;
                    fromPartial<I_28 extends unknown>(object: I_28): _940.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _940.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _940.QueryChannelConsensusStateResponse;
                    toJSON(message: _940.QueryChannelConsensusStateResponse): unknown;
                    fromPartial<I_29 extends unknown>(object: I_29): _940.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _940.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _940.QueryPacketCommitmentRequest;
                    toJSON(message: _940.QueryPacketCommitmentRequest): unknown;
                    fromPartial<I_30 extends unknown>(object: I_30): _940.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _940.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _940.QueryPacketCommitmentResponse;
                    toJSON(message: _940.QueryPacketCommitmentResponse): unknown;
                    fromPartial<I_31 extends unknown>(object: I_31): _940.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _940.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _940.QueryPacketCommitmentsRequest;
                    toJSON(message: _940.QueryPacketCommitmentsRequest): unknown;
                    fromPartial<I_32 extends unknown>(object: I_32): _940.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _940.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _940.QueryPacketCommitmentsResponse;
                    toJSON(message: _940.QueryPacketCommitmentsResponse): unknown;
                    fromPartial<I_33 extends unknown>(object: I_33): _940.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _940.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryPacketReceiptRequest;
                    fromJSON(object: any): _940.QueryPacketReceiptRequest;
                    toJSON(message: _940.QueryPacketReceiptRequest): unknown;
                    fromPartial<I_34 extends unknown>(object: I_34): _940.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _940.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryPacketReceiptResponse;
                    fromJSON(object: any): _940.QueryPacketReceiptResponse;
                    toJSON(message: _940.QueryPacketReceiptResponse): unknown;
                    fromPartial<I_35 extends unknown>(object: I_35): _940.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _940.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _940.QueryPacketAcknowledgementRequest;
                    toJSON(message: _940.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial<I_36 extends unknown>(object: I_36): _940.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _940.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _940.QueryPacketAcknowledgementResponse;
                    toJSON(message: _940.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial<I_37 extends unknown>(object: I_37): _940.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _940.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _940.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _940.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial<I_38 extends unknown>(object: I_38): _940.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _940.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _940.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _940.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial<I_39 extends unknown>(object: I_39): _940.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _940.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _940.QueryUnreceivedPacketsRequest;
                    toJSON(message: _940.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial<I_40 extends unknown>(object: I_40): _940.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _940.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _940.QueryUnreceivedPacketsResponse;
                    toJSON(message: _940.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial<I_41 extends unknown>(object: I_41): _940.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _940.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _940.QueryUnreceivedAcksRequest;
                    toJSON(message: _940.QueryUnreceivedAcksRequest): unknown;
                    fromPartial<I_42 extends unknown>(object: I_42): _940.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _940.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _940.QueryUnreceivedAcksResponse;
                    toJSON(message: _940.QueryUnreceivedAcksResponse): unknown;
                    fromPartial<I_43 extends unknown>(object: I_43): _940.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _940.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _940.QueryNextSequenceReceiveRequest;
                    toJSON(message: _940.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial<I_44 extends unknown>(object: I_44): _940.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _940.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _940.QueryNextSequenceReceiveResponse;
                    toJSON(message: _940.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial<I_45 extends unknown>(object: I_45): _940.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _939.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _939.GenesisState;
                    fromJSON(object: any): _939.GenesisState;
                    toJSON(message: _939.GenesisState): unknown;
                    fromPartial<I_46 extends unknown>(object: I_46): _939.GenesisState;
                };
                PacketSequence: {
                    encode(message: _939.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _939.PacketSequence;
                    fromJSON(object: any): _939.PacketSequence;
                    toJSON(message: _939.PacketSequence): unknown;
                    fromPartial<I_47 extends unknown>(object: I_47): _939.PacketSequence;
                };
                stateFromJSON(object: any): _938.State;
                stateToJSON(object: _938.State): string;
                orderFromJSON(object: any): _938.Order;
                orderToJSON(object: _938.Order): string;
                State: typeof _938.State;
                Order: typeof _938.Order;
                Channel: {
                    encode(message: _938.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _938.Channel;
                    fromJSON(object: any): _938.Channel;
                    toJSON(message: _938.Channel): unknown;
                    fromPartial<I_48 extends unknown>(object: I_48): _938.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _938.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _938.IdentifiedChannel;
                    fromJSON(object: any): _938.IdentifiedChannel;
                    toJSON(message: _938.IdentifiedChannel): unknown;
                    fromPartial<I_49 extends unknown>(object: I_49): _938.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _938.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _938.Counterparty;
                    fromJSON(object: any): _938.Counterparty;
                    toJSON(message: _938.Counterparty): unknown;
                    fromPartial<I_50 extends unknown>(object: I_50): _938.Counterparty;
                };
                Packet: {
                    encode(message: _938.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _938.Packet;
                    fromJSON(object: any): _938.Packet;
                    toJSON(message: _938.Packet): unknown;
                    fromPartial<I_51 extends unknown>(object: I_51): _938.Packet;
                };
                PacketState: {
                    encode(message: _938.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _938.PacketState;
                    fromJSON(object: any): _938.PacketState;
                    toJSON(message: _938.PacketState): unknown;
                    fromPartial<I_52 extends unknown>(object: I_52): _938.PacketState;
                };
                Acknowledgement: {
                    encode(message: _938.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _938.Acknowledgement;
                    fromJSON(object: any): _938.Acknowledgement;
                    toJSON(message: _938.Acknowledgement): unknown;
                    fromPartial<I_53 extends unknown>(object: I_53): _938.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgCreateClient: {
                    encode(message: _953.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _953.MsgCreateClient;
                    fromJSON(object: any): _953.MsgCreateClient;
                    toJSON(message: _953.MsgCreateClient): unknown;
                    fromPartial<I extends unknown>(object: I): _953.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _953.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _953.MsgCreateClientResponse;
                    fromJSON(_: any): _953.MsgCreateClientResponse;
                    toJSON(_: _953.MsgCreateClientResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _953.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _953.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _953.MsgUpdateClient;
                    fromJSON(object: any): _953.MsgUpdateClient;
                    toJSON(message: _953.MsgUpdateClient): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _953.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _953.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _953.MsgUpdateClientResponse;
                    fromJSON(_: any): _953.MsgUpdateClientResponse;
                    toJSON(_: _953.MsgUpdateClientResponse): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _953.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _953.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _953.MsgUpgradeClient;
                    fromJSON(object: any): _953.MsgUpgradeClient;
                    toJSON(message: _953.MsgUpgradeClient): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _953.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _953.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _953.MsgUpgradeClientResponse;
                    fromJSON(_: any): _953.MsgUpgradeClientResponse;
                    toJSON(_: _953.MsgUpgradeClientResponse): unknown;
                    fromPartial<I_5 extends unknown>(_: I_5): _953.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _953.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _953.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _953.MsgSubmitMisbehaviour;
                    toJSON(message: _953.MsgSubmitMisbehaviour): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _953.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _953.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _953.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _953.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _953.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _953.MsgSubmitMisbehaviourResponse;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _953.MsgCreateClient) => {
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
                        }) => _953.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _953.MsgUpdateClient) => {
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
                        }) => _953.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _953.MsgUpgradeClient) => {
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
                        }) => _953.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _953.MsgSubmitMisbehaviour) => {
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
                        }) => _953.MsgSubmitMisbehaviour;
                    };
                };
                encoded: {
                    createClient(value: _953.MsgCreateClient): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    updateClient(value: _953.MsgUpdateClient): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    upgradeClient(value: _953.MsgUpgradeClient): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    submitMisbehaviour(value: _953.MsgSubmitMisbehaviour): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    createClient(value: any): {
                        typeUrl: string;
                        value: _953.MsgCreateClient;
                    };
                    updateClient(value: any): {
                        typeUrl: string;
                        value: _953.MsgUpdateClient;
                    };
                    upgradeClient(value: any): {
                        typeUrl: string;
                        value: _953.MsgUpgradeClient;
                    };
                    submitMisbehaviour(value: any): {
                        typeUrl: string;
                        value: _953.MsgSubmitMisbehaviour;
                    };
                };
                toJSON: {
                    createClient(value: _953.MsgCreateClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClient(value: _953.MsgUpdateClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    upgradeClient(value: _953.MsgUpgradeClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitMisbehaviour(value: _953.MsgSubmitMisbehaviour): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    createClient(value: _953.MsgCreateClient): {
                        typeUrl: string;
                        value: _953.MsgCreateClient;
                    };
                    updateClient(value: _953.MsgUpdateClient): {
                        typeUrl: string;
                        value: _953.MsgUpdateClient;
                    };
                    upgradeClient(value: _953.MsgUpgradeClient): {
                        typeUrl: string;
                        value: _953.MsgUpgradeClient;
                    };
                    submitMisbehaviour(value: _953.MsgSubmitMisbehaviour): {
                        typeUrl: string;
                        value: _953.MsgSubmitMisbehaviour;
                    };
                };
                messages: {
                    createClient(value: _953.MsgCreateClient): {
                        typeUrl: string;
                        value: _953.MsgCreateClient;
                    };
                    updateClient(value: _953.MsgUpdateClient): {
                        typeUrl: string;
                        value: _953.MsgUpdateClient;
                    };
                    upgradeClient(value: _953.MsgUpgradeClient): {
                        typeUrl: string;
                        value: _953.MsgUpgradeClient;
                    };
                    submitMisbehaviour(value: _953.MsgSubmitMisbehaviour): {
                        typeUrl: string;
                        value: _953.MsgSubmitMisbehaviour;
                    };
                };
                QueryClientStateRequest: {
                    encode(message: _952.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _952.QueryClientStateRequest;
                    fromJSON(object: any): _952.QueryClientStateRequest;
                    toJSON(message: _952.QueryClientStateRequest): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _952.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _952.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _952.QueryClientStateResponse;
                    fromJSON(object: any): _952.QueryClientStateResponse;
                    toJSON(message: _952.QueryClientStateResponse): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _952.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _952.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _952.QueryClientStatesRequest;
                    fromJSON(object: any): _952.QueryClientStatesRequest;
                    toJSON(message: _952.QueryClientStatesRequest): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _952.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _952.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _952.QueryClientStatesResponse;
                    fromJSON(object: any): _952.QueryClientStatesResponse;
                    toJSON(message: _952.QueryClientStatesResponse): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _952.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _952.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _952.QueryConsensusStateRequest;
                    fromJSON(object: any): _952.QueryConsensusStateRequest;
                    toJSON(message: _952.QueryConsensusStateRequest): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _952.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _952.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _952.QueryConsensusStateResponse;
                    fromJSON(object: any): _952.QueryConsensusStateResponse;
                    toJSON(message: _952.QueryConsensusStateResponse): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _952.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _952.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _952.QueryConsensusStatesRequest;
                    fromJSON(object: any): _952.QueryConsensusStatesRequest;
                    toJSON(message: _952.QueryConsensusStatesRequest): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _952.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _952.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _952.QueryConsensusStatesResponse;
                    fromJSON(object: any): _952.QueryConsensusStatesResponse;
                    toJSON(message: _952.QueryConsensusStatesResponse): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _952.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _952.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _952.QueryClientStatusRequest;
                    fromJSON(object: any): _952.QueryClientStatusRequest;
                    toJSON(message: _952.QueryClientStatusRequest): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _952.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _952.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _952.QueryClientStatusResponse;
                    fromJSON(object: any): _952.QueryClientStatusResponse;
                    toJSON(message: _952.QueryClientStatusResponse): unknown;
                    fromPartial<I_17 extends unknown>(object: I_17): _952.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _952.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _952.QueryClientParamsRequest;
                    fromJSON(_: any): _952.QueryClientParamsRequest;
                    toJSON(_: _952.QueryClientParamsRequest): unknown;
                    fromPartial<I_18 extends unknown>(_: I_18): _952.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _952.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _952.QueryClientParamsResponse;
                    fromJSON(object: any): _952.QueryClientParamsResponse;
                    toJSON(message: _952.QueryClientParamsResponse): unknown;
                    fromPartial<I_19 extends unknown>(object: I_19): _952.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _952.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _952.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _952.QueryUpgradedClientStateRequest;
                    toJSON(_: _952.QueryUpgradedClientStateRequest): unknown;
                    fromPartial<I_20 extends unknown>(_: I_20): _952.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _952.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _952.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _952.QueryUpgradedClientStateResponse;
                    toJSON(message: _952.QueryUpgradedClientStateResponse): unknown;
                    fromPartial<I_21 extends unknown>(object: I_21): _952.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _952.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _952.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _952.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _952.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial<I_22 extends unknown>(_: I_22): _952.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _952.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _952.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _952.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _952.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _952.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _951.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _951.GenesisState;
                    fromJSON(object: any): _951.GenesisState;
                    toJSON(message: _951.GenesisState): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _951.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _951.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _951.GenesisMetadata;
                    fromJSON(object: any): _951.GenesisMetadata;
                    toJSON(message: _951.GenesisMetadata): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _951.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _951.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _951.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _951.IdentifiedGenesisMetadata;
                    toJSON(message: _951.IdentifiedGenesisMetadata): unknown;
                    fromPartial<I_26 extends unknown>(object: I_26): _951.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _950.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _950.IdentifiedClientState;
                    fromJSON(object: any): _950.IdentifiedClientState;
                    toJSON(message: _950.IdentifiedClientState): unknown;
                    fromPartial<I_27 extends unknown>(object: I_27): _950.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _950.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _950.ConsensusStateWithHeight;
                    fromJSON(object: any): _950.ConsensusStateWithHeight;
                    toJSON(message: _950.ConsensusStateWithHeight): unknown;
                    fromPartial<I_28 extends unknown>(object: I_28): _950.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _950.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _950.ClientConsensusStates;
                    fromJSON(object: any): _950.ClientConsensusStates;
                    toJSON(message: _950.ClientConsensusStates): unknown;
                    fromPartial<I_29 extends unknown>(object: I_29): _950.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _950.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _950.ClientUpdateProposal;
                    fromJSON(object: any): _950.ClientUpdateProposal;
                    toJSON(message: _950.ClientUpdateProposal): unknown;
                    fromPartial<I_30 extends unknown>(object: I_30): _950.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _950.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _950.UpgradeProposal;
                    fromJSON(object: any): _950.UpgradeProposal;
                    toJSON(message: _950.UpgradeProposal): unknown;
                    fromPartial<I_31 extends unknown>(object: I_31): _950.UpgradeProposal;
                };
                Height: {
                    encode(message: _950.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _950.Height;
                    fromJSON(object: any): _950.Height;
                    toJSON(message: _950.Height): unknown;
                    fromPartial<I_32 extends unknown>(object: I_32): _950.Height;
                };
                Params: {
                    encode(message: _950.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _950.Params;
                    fromJSON(object: any): _950.Params;
                    toJSON(message: _950.Params): unknown;
                    fromPartial<I_33 extends unknown>(object: I_33): _950.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _962.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _962.MerkleRoot;
                    fromJSON(object: any): _962.MerkleRoot;
                    toJSON(message: _962.MerkleRoot): unknown;
                    fromPartial<I extends unknown>(object: I): _962.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _962.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _962.MerklePrefix;
                    fromJSON(object: any): _962.MerklePrefix;
                    toJSON(message: _962.MerklePrefix): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _962.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _962.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _962.MerklePath;
                    fromJSON(object: any): _962.MerklePath;
                    toJSON(message: _962.MerklePath): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _962.MerklePath;
                };
                MerkleProof: {
                    encode(message: _962.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _962.MerkleProof;
                    fromJSON(object: any): _962.MerkleProof;
                    toJSON(message: _962.MerkleProof): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _962.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgConnectionOpenInit: {
                    encode(message: _966.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.MsgConnectionOpenInit;
                    fromJSON(object: any): _966.MsgConnectionOpenInit;
                    toJSON(message: _966.MsgConnectionOpenInit): unknown;
                    fromPartial<I extends unknown>(object: I): _966.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _966.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _966.MsgConnectionOpenInitResponse;
                    toJSON(_: _966.MsgConnectionOpenInitResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _966.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _966.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.MsgConnectionOpenTry;
                    fromJSON(object: any): _966.MsgConnectionOpenTry;
                    toJSON(message: _966.MsgConnectionOpenTry): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _966.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _966.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _966.MsgConnectionOpenTryResponse;
                    toJSON(_: _966.MsgConnectionOpenTryResponse): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _966.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _966.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.MsgConnectionOpenAck;
                    fromJSON(object: any): _966.MsgConnectionOpenAck;
                    toJSON(message: _966.MsgConnectionOpenAck): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _966.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _966.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _966.MsgConnectionOpenAckResponse;
                    toJSON(_: _966.MsgConnectionOpenAckResponse): unknown;
                    fromPartial<I_5 extends unknown>(_: I_5): _966.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _966.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _966.MsgConnectionOpenConfirm;
                    toJSON(message: _966.MsgConnectionOpenConfirm): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _966.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _966.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _966.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _966.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _966.MsgConnectionOpenConfirmResponse;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _966.MsgConnectionOpenInit) => {
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
                        }) => _966.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _966.MsgConnectionOpenTry) => {
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
                        }) => _966.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _966.MsgConnectionOpenAck) => {
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
                        }) => _966.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _966.MsgConnectionOpenConfirm) => {
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
                        }) => _966.MsgConnectionOpenConfirm;
                    };
                };
                encoded: {
                    connectionOpenInit(value: _966.MsgConnectionOpenInit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    connectionOpenTry(value: _966.MsgConnectionOpenTry): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    connectionOpenAck(value: _966.MsgConnectionOpenAck): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    connectionOpenConfirm(value: _966.MsgConnectionOpenConfirm): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    connectionOpenInit(value: any): {
                        typeUrl: string;
                        value: _966.MsgConnectionOpenInit;
                    };
                    connectionOpenTry(value: any): {
                        typeUrl: string;
                        value: _966.MsgConnectionOpenTry;
                    };
                    connectionOpenAck(value: any): {
                        typeUrl: string;
                        value: _966.MsgConnectionOpenAck;
                    };
                    connectionOpenConfirm(value: any): {
                        typeUrl: string;
                        value: _966.MsgConnectionOpenConfirm;
                    };
                };
                toJSON: {
                    connectionOpenInit(value: _966.MsgConnectionOpenInit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    connectionOpenTry(value: _966.MsgConnectionOpenTry): {
                        typeUrl: string;
                        value: unknown;
                    };
                    connectionOpenAck(value: _966.MsgConnectionOpenAck): {
                        typeUrl: string;
                        value: unknown;
                    };
                    connectionOpenConfirm(value: _966.MsgConnectionOpenConfirm): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    connectionOpenInit(value: _966.MsgConnectionOpenInit): {
                        typeUrl: string;
                        value: _966.MsgConnectionOpenInit;
                    };
                    connectionOpenTry(value: _966.MsgConnectionOpenTry): {
                        typeUrl: string;
                        value: _966.MsgConnectionOpenTry;
                    };
                    connectionOpenAck(value: _966.MsgConnectionOpenAck): {
                        typeUrl: string;
                        value: _966.MsgConnectionOpenAck;
                    };
                    connectionOpenConfirm(value: _966.MsgConnectionOpenConfirm): {
                        typeUrl: string;
                        value: _966.MsgConnectionOpenConfirm;
                    };
                };
                messages: {
                    connectionOpenInit(value: _966.MsgConnectionOpenInit): {
                        typeUrl: string;
                        value: _966.MsgConnectionOpenInit;
                    };
                    connectionOpenTry(value: _966.MsgConnectionOpenTry): {
                        typeUrl: string;
                        value: _966.MsgConnectionOpenTry;
                    };
                    connectionOpenAck(value: _966.MsgConnectionOpenAck): {
                        typeUrl: string;
                        value: _966.MsgConnectionOpenAck;
                    };
                    connectionOpenConfirm(value: _966.MsgConnectionOpenConfirm): {
                        typeUrl: string;
                        value: _966.MsgConnectionOpenConfirm;
                    };
                };
                QueryConnectionRequest: {
                    encode(message: _965.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _965.QueryConnectionRequest;
                    fromJSON(object: any): _965.QueryConnectionRequest;
                    toJSON(message: _965.QueryConnectionRequest): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _965.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _965.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _965.QueryConnectionResponse;
                    fromJSON(object: any): _965.QueryConnectionResponse;
                    toJSON(message: _965.QueryConnectionResponse): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _965.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _965.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _965.QueryConnectionsRequest;
                    fromJSON(object: any): _965.QueryConnectionsRequest;
                    toJSON(message: _965.QueryConnectionsRequest): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _965.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _965.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _965.QueryConnectionsResponse;
                    fromJSON(object: any): _965.QueryConnectionsResponse;
                    toJSON(message: _965.QueryConnectionsResponse): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _965.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _965.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _965.QueryClientConnectionsRequest;
                    fromJSON(object: any): _965.QueryClientConnectionsRequest;
                    toJSON(message: _965.QueryClientConnectionsRequest): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _965.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _965.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _965.QueryClientConnectionsResponse;
                    fromJSON(object: any): _965.QueryClientConnectionsResponse;
                    toJSON(message: _965.QueryClientConnectionsResponse): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _965.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _965.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _965.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _965.QueryConnectionClientStateRequest;
                    toJSON(message: _965.QueryConnectionClientStateRequest): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _965.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _965.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _965.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _965.QueryConnectionClientStateResponse;
                    toJSON(message: _965.QueryConnectionClientStateResponse): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _965.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _965.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _965.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _965.QueryConnectionConsensusStateRequest;
                    toJSON(message: _965.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _965.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _965.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _965.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _965.QueryConnectionConsensusStateResponse;
                    toJSON(message: _965.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial<I_17 extends unknown>(object: I_17): _965.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _964.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _964.GenesisState;
                    fromJSON(object: any): _964.GenesisState;
                    toJSON(message: _964.GenesisState): unknown;
                    fromPartial<I_18 extends unknown>(object: I_18): _964.GenesisState;
                };
                stateFromJSON(object: any): _963.State;
                stateToJSON(object: _963.State): string;
                State: typeof _963.State;
                ConnectionEnd: {
                    encode(message: _963.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _963.ConnectionEnd;
                    fromJSON(object: any): _963.ConnectionEnd;
                    toJSON(message: _963.ConnectionEnd): unknown;
                    fromPartial<I_19 extends unknown>(object: I_19): _963.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _963.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _963.IdentifiedConnection;
                    fromJSON(object: any): _963.IdentifiedConnection;
                    toJSON(message: _963.IdentifiedConnection): unknown;
                    fromPartial<I_20 extends unknown>(object: I_20): _963.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _963.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _963.Counterparty;
                    fromJSON(object: any): _963.Counterparty;
                    toJSON(message: _963.Counterparty): unknown;
                    fromPartial<I_21 extends unknown>(object: I_21): _963.Counterparty;
                };
                ClientPaths: {
                    encode(message: _963.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _963.ClientPaths;
                    fromJSON(object: any): _963.ClientPaths;
                    toJSON(message: _963.ClientPaths): unknown;
                    fromPartial<I_22 extends unknown>(object: I_22): _963.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _963.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _963.ConnectionPaths;
                    fromJSON(object: any): _963.ConnectionPaths;
                    toJSON(message: _963.ConnectionPaths): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _963.ConnectionPaths;
                };
                Version: {
                    encode(message: _963.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _963.Version;
                    fromJSON(object: any): _963.Version;
                    toJSON(message: _963.Version): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _963.Version;
                };
                Params: {
                    encode(message: _963.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _963.Params;
                    fromJSON(object: any): _963.Params;
                    toJSON(message: _963.Params): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _963.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryAppVersionRequest: {
                    encode(message: _975.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _975.QueryAppVersionRequest;
                    fromJSON(object: any): _975.QueryAppVersionRequest;
                    toJSON(message: _975.QueryAppVersionRequest): unknown;
                    fromPartial<I extends unknown>(object: I): _975.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _975.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _975.QueryAppVersionResponse;
                    fromJSON(object: any): _975.QueryAppVersionResponse;
                    toJSON(message: _975.QueryAppVersionResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _975.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _976.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _976.GenesisState;
                    fromJSON(object: any): _976.GenesisState;
                    toJSON(message: _976.GenesisState): unknown;
                    fromPartial<I extends unknown>(object: I): _976.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _977.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _977.ClientState;
                    fromJSON(object: any): _977.ClientState;
                    toJSON(message: _977.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _977.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _978.DataType;
                dataTypeToJSON(object: _978.DataType): string;
                DataType: typeof _978.DataType;
                ClientState: {
                    encode(message: _978.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.ClientState;
                    fromJSON(object: any): _978.ClientState;
                    toJSON(message: _978.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _978.ClientState;
                };
                ConsensusState: {
                    encode(message: _978.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.ConsensusState;
                    fromJSON(object: any): _978.ConsensusState;
                    toJSON(message: _978.ConsensusState): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _978.ConsensusState;
                };
                Header: {
                    encode(message: _978.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.Header;
                    fromJSON(object: any): _978.Header;
                    toJSON(message: _978.Header): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _978.Header;
                };
                Misbehaviour: {
                    encode(message: _978.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.Misbehaviour;
                    fromJSON(object: any): _978.Misbehaviour;
                    toJSON(message: _978.Misbehaviour): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _978.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _978.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.SignatureAndData;
                    fromJSON(object: any): _978.SignatureAndData;
                    toJSON(message: _978.SignatureAndData): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _978.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _978.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.TimestampedSignatureData;
                    fromJSON(object: any): _978.TimestampedSignatureData;
                    toJSON(message: _978.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _978.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _978.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.SignBytes;
                    fromJSON(object: any): _978.SignBytes;
                    toJSON(message: _978.SignBytes): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _978.SignBytes;
                };
                HeaderData: {
                    encode(message: _978.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.HeaderData;
                    fromJSON(object: any): _978.HeaderData;
                    toJSON(message: _978.HeaderData): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _978.HeaderData;
                };
                ClientStateData: {
                    encode(message: _978.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.ClientStateData;
                    fromJSON(object: any): _978.ClientStateData;
                    toJSON(message: _978.ClientStateData): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _978.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _978.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.ConsensusStateData;
                    fromJSON(object: any): _978.ConsensusStateData;
                    toJSON(message: _978.ConsensusStateData): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _978.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _978.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.ConnectionStateData;
                    fromJSON(object: any): _978.ConnectionStateData;
                    toJSON(message: _978.ConnectionStateData): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _978.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _978.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.ChannelStateData;
                    fromJSON(object: any): _978.ChannelStateData;
                    toJSON(message: _978.ChannelStateData): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _978.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _978.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.PacketCommitmentData;
                    fromJSON(object: any): _978.PacketCommitmentData;
                    toJSON(message: _978.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _978.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _978.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.PacketAcknowledgementData;
                    fromJSON(object: any): _978.PacketAcknowledgementData;
                    toJSON(message: _978.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _978.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _978.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.PacketReceiptAbsenceData;
                    fromJSON(object: any): _978.PacketReceiptAbsenceData;
                    toJSON(message: _978.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _978.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _978.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.NextSequenceRecvData;
                    fromJSON(object: any): _978.NextSequenceRecvData;
                    toJSON(message: _978.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _978.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _979.DataType;
                dataTypeToJSON(object: _979.DataType): string;
                DataType: typeof _979.DataType;
                ClientState: {
                    encode(message: _979.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _979.ClientState;
                    fromJSON(object: any): _979.ClientState;
                    toJSON(message: _979.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _979.ClientState;
                };
                ConsensusState: {
                    encode(message: _979.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _979.ConsensusState;
                    fromJSON(object: any): _979.ConsensusState;
                    toJSON(message: _979.ConsensusState): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _979.ConsensusState;
                };
                Header: {
                    encode(message: _979.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _979.Header;
                    fromJSON(object: any): _979.Header;
                    toJSON(message: _979.Header): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _979.Header;
                };
                Misbehaviour: {
                    encode(message: _979.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _979.Misbehaviour;
                    fromJSON(object: any): _979.Misbehaviour;
                    toJSON(message: _979.Misbehaviour): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _979.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _979.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _979.SignatureAndData;
                    fromJSON(object: any): _979.SignatureAndData;
                    toJSON(message: _979.SignatureAndData): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _979.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _979.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _979.TimestampedSignatureData;
                    fromJSON(object: any): _979.TimestampedSignatureData;
                    toJSON(message: _979.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _979.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _979.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _979.SignBytes;
                    fromJSON(object: any): _979.SignBytes;
                    toJSON(message: _979.SignBytes): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _979.SignBytes;
                };
                HeaderData: {
                    encode(message: _979.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _979.HeaderData;
                    fromJSON(object: any): _979.HeaderData;
                    toJSON(message: _979.HeaderData): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _979.HeaderData;
                };
                ClientStateData: {
                    encode(message: _979.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _979.ClientStateData;
                    fromJSON(object: any): _979.ClientStateData;
                    toJSON(message: _979.ClientStateData): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _979.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _979.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _979.ConsensusStateData;
                    fromJSON(object: any): _979.ConsensusStateData;
                    toJSON(message: _979.ConsensusStateData): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _979.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _979.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _979.ConnectionStateData;
                    fromJSON(object: any): _979.ConnectionStateData;
                    toJSON(message: _979.ConnectionStateData): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _979.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _979.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _979.ChannelStateData;
                    fromJSON(object: any): _979.ChannelStateData;
                    toJSON(message: _979.ChannelStateData): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _979.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _979.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _979.PacketCommitmentData;
                    fromJSON(object: any): _979.PacketCommitmentData;
                    toJSON(message: _979.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _979.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _979.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _979.PacketAcknowledgementData;
                    fromJSON(object: any): _979.PacketAcknowledgementData;
                    toJSON(message: _979.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _979.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _979.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _979.PacketReceiptAbsenceData;
                    fromJSON(object: any): _979.PacketReceiptAbsenceData;
                    toJSON(message: _979.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _979.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _979.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _979.NextSequenceRecvData;
                    fromJSON(object: any): _979.NextSequenceRecvData;
                    toJSON(message: _979.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _979.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _980.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _980.ClientState;
                    fromJSON(object: any): _980.ClientState;
                    toJSON(message: _980.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _980.ClientState;
                };
                ConsensusState: {
                    encode(message: _980.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _980.ConsensusState;
                    fromJSON(object: any): _980.ConsensusState;
                    toJSON(message: _980.ConsensusState): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _980.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _980.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _980.Misbehaviour;
                    fromJSON(object: any): _980.Misbehaviour;
                    toJSON(message: _980.Misbehaviour): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _980.Misbehaviour;
                };
                Header: {
                    encode(message: _980.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _980.Header;
                    fromJSON(object: any): _980.Header;
                    toJSON(message: _980.Header): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _980.Header;
                };
                Fraction: {
                    encode(message: _980.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _980.Fraction;
                    fromJSON(object: any): _980.Fraction;
                    toJSON(message: _980.Fraction): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _980.Fraction;
                };
            };
        }
    }
}
