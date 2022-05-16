import { Counterparty, Version } from "./connection";
import { Any } from "../../../../google/protobuf/any";
import { Height } from "../../client/v1/client";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/**
 * MsgConnectionOpenInit defines the msg sent by an account on Chain A to
 * initialize a connection with Chain B.
 */
export interface MsgConnectionOpenInit {
    clientId: string;
    counterparty: Counterparty;
    version: Version;
    delayPeriod: Long;
    signer: string;
}
/**
 * MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response
 * type.
 */
export interface MsgConnectionOpenInitResponse {
}
/**
 * MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a
 * connection on Chain B.
 */
export interface MsgConnectionOpenTry {
    clientId: string;
    /**
     * in the case of crossing hello's, when both chains call OpenInit, we need
     * the connection identifier of the previous connection in state INIT
     */
    previousConnectionId: string;
    clientState: Any;
    counterparty: Counterparty;
    delayPeriod: Long;
    counterpartyVersions: Version[];
    proofHeight: Height;
    /**
     * proof of the initialization the connection on Chain A: `UNITIALIZED ->
     * INIT`
     */
    proofInit: Uint8Array;
    /** proof of client state included in message */
    proofClient: Uint8Array;
    /** proof of client consensus state */
    proofConsensus: Uint8Array;
    consensusHeight: Height;
    signer: string;
}
/** MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type. */
export interface MsgConnectionOpenTryResponse {
}
/**
 * MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to
 * acknowledge the change of connection state to TRYOPEN on Chain B.
 */
export interface MsgConnectionOpenAck {
    connectionId: string;
    counterpartyConnectionId: string;
    version: Version;
    clientState: Any;
    proofHeight: Height;
    /**
     * proof of the initialization the connection on Chain B: `UNITIALIZED ->
     * TRYOPEN`
     */
    proofTry: Uint8Array;
    /** proof of client state included in message */
    proofClient: Uint8Array;
    /** proof of client consensus state */
    proofConsensus: Uint8Array;
    consensusHeight: Height;
    signer: string;
}
/** MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type. */
export interface MsgConnectionOpenAckResponse {
}
/**
 * MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of connection state to OPEN on Chain A.
 */
export interface MsgConnectionOpenConfirm {
    connectionId: string;
    /** proof for the change of the connection state on Chain A: `INIT -> OPEN` */
    proofAck: Uint8Array;
    proofHeight: Height;
    signer: string;
}
/**
 * MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
 * response type.
 */
export interface MsgConnectionOpenConfirmResponse {
}
export declare const MsgConnectionOpenInit: {
    encode(message: MsgConnectionOpenInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenInit;
    fromJSON(object: any): MsgConnectionOpenInit;
    toJSON(message: MsgConnectionOpenInit): unknown;
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
        } & Record<Exclude<keyof I["counterparty"], keyof Counterparty>, never>;
        version?: {
            identifier?: string;
            features?: string[];
        } & {
            identifier?: string;
            features?: string[] & string[] & Record<Exclude<keyof I["version"]["features"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["version"], keyof Version>, never>;
        delayPeriod?: any;
        signer?: string;
    } & Record<Exclude<keyof I, keyof MsgConnectionOpenInit>, never>>(object: I): MsgConnectionOpenInit;
};
export declare const MsgConnectionOpenInitResponse: {
    encode(_: MsgConnectionOpenInitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenInitResponse;
    fromJSON(_: any): MsgConnectionOpenInitResponse;
    toJSON(_: MsgConnectionOpenInitResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgConnectionOpenInitResponse;
};
export declare const MsgConnectionOpenTry: {
    encode(message: MsgConnectionOpenTry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenTry;
    fromJSON(object: any): MsgConnectionOpenTry;
    toJSON(message: MsgConnectionOpenTry): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["clientState"], keyof Any>, never>;
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
        } & Record<Exclude<keyof I["counterparty"], keyof Counterparty>, never>;
        delayPeriod?: any;
        counterpartyVersions?: {
            identifier?: string;
            features?: string[];
        }[] & ({
            identifier?: string;
            features?: string[];
        } & {
            identifier?: string;
            features?: string[] & string[] & Record<Exclude<keyof I["counterpartyVersions"][number]["features"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["counterpartyVersions"][number], keyof Version>, never>)[] & Record<Exclude<keyof I["counterpartyVersions"], keyof {
            identifier?: string;
            features?: string[];
        }[]>, never>;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["proofHeight"], keyof Height>, never>;
        proofInit?: Uint8Array;
        proofClient?: Uint8Array;
        proofConsensus?: Uint8Array;
        consensusHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["consensusHeight"], keyof Height>, never>;
        signer?: string;
    } & Record<Exclude<keyof I, keyof MsgConnectionOpenTry>, never>>(object: I): MsgConnectionOpenTry;
};
export declare const MsgConnectionOpenTryResponse: {
    encode(_: MsgConnectionOpenTryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenTryResponse;
    fromJSON(_: any): MsgConnectionOpenTryResponse;
    toJSON(_: MsgConnectionOpenTryResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgConnectionOpenTryResponse;
};
export declare const MsgConnectionOpenAck: {
    encode(message: MsgConnectionOpenAck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenAck;
    fromJSON(object: any): MsgConnectionOpenAck;
    toJSON(message: MsgConnectionOpenAck): unknown;
    fromPartial<I extends {
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
            features?: string[] & string[] & Record<Exclude<keyof I["version"]["features"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["version"], keyof Version>, never>;
        clientState?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["clientState"], keyof Any>, never>;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["proofHeight"], keyof Height>, never>;
        proofTry?: Uint8Array;
        proofClient?: Uint8Array;
        proofConsensus?: Uint8Array;
        consensusHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["consensusHeight"], keyof Height>, never>;
        signer?: string;
    } & Record<Exclude<keyof I, keyof MsgConnectionOpenAck>, never>>(object: I): MsgConnectionOpenAck;
};
export declare const MsgConnectionOpenAckResponse: {
    encode(_: MsgConnectionOpenAckResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenAckResponse;
    fromJSON(_: any): MsgConnectionOpenAckResponse;
    toJSON(_: MsgConnectionOpenAckResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgConnectionOpenAckResponse;
};
export declare const MsgConnectionOpenConfirm: {
    encode(message: MsgConnectionOpenConfirm, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenConfirm;
    fromJSON(object: any): MsgConnectionOpenConfirm;
    toJSON(message: MsgConnectionOpenConfirm): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["proofHeight"], keyof Height>, never>;
        signer?: string;
    } & Record<Exclude<keyof I, keyof MsgConnectionOpenConfirm>, never>>(object: I): MsgConnectionOpenConfirm;
};
export declare const MsgConnectionOpenConfirmResponse: {
    encode(_: MsgConnectionOpenConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenConfirmResponse;
    fromJSON(_: any): MsgConnectionOpenConfirmResponse;
    toJSON(_: MsgConnectionOpenConfirmResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgConnectionOpenConfirmResponse;
};
