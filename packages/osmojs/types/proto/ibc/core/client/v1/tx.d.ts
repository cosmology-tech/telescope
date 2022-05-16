import { Any } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClient {
    /** light client state */
    clientState: Any;
    /**
     * consensus state associated with the client that corresponds to a given
     * height.
     */
    consensusState: Any;
    /** signer address */
    signer: string;
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponse {
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 */
export interface MsgUpdateClient {
    /** client unique identifier */
    clientId: string;
    /** header to update the light client */
    header: Any;
    /** signer address */
    signer: string;
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponse {
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClient {
    /** client unique identifier */
    clientId: string;
    /** upgraded client state */
    clientState: Any;
    /**
     * upgraded consensus state, only contains enough information to serve as a
     * basis of trust in update logic
     */
    consensusState: Any;
    /** proof that old chain committed to new client */
    proofUpgradeClient: Uint8Array;
    /** proof that old chain committed to new consensus state */
    proofUpgradeConsensusState: Uint8Array;
    /** signer address */
    signer: string;
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponse {
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 */
export interface MsgSubmitMisbehaviour {
    /** client unique identifier */
    clientId: string;
    /** misbehaviour used for freezing the light client */
    misbehaviour: Any;
    /** signer address */
    signer: string;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponse {
}
export declare const MsgCreateClient: {
    encode(message: MsgCreateClient, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClient;
    fromJSON(object: any): MsgCreateClient;
    toJSON(message: MsgCreateClient): unknown;
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
        } & Record<Exclude<keyof I["clientState"], keyof Any>, never>;
        consensusState?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["consensusState"], keyof Any>, never>;
        signer?: string;
    } & Record<Exclude<keyof I, keyof MsgCreateClient>, never>>(object: I): MsgCreateClient;
};
export declare const MsgCreateClientResponse: {
    encode(_: MsgCreateClientResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClientResponse;
    fromJSON(_: any): MsgCreateClientResponse;
    toJSON(_: MsgCreateClientResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCreateClientResponse;
};
export declare const MsgUpdateClient: {
    encode(message: MsgUpdateClient, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClient;
    fromJSON(object: any): MsgUpdateClient;
    toJSON(message: MsgUpdateClient): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["header"], keyof Any>, never>;
        signer?: string;
    } & Record<Exclude<keyof I, keyof MsgUpdateClient>, never>>(object: I): MsgUpdateClient;
};
export declare const MsgUpdateClientResponse: {
    encode(_: MsgUpdateClientResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClientResponse;
    fromJSON(_: any): MsgUpdateClientResponse;
    toJSON(_: MsgUpdateClientResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateClientResponse;
};
export declare const MsgUpgradeClient: {
    encode(message: MsgUpgradeClient, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpgradeClient;
    fromJSON(object: any): MsgUpgradeClient;
    toJSON(message: MsgUpgradeClient): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["clientState"], keyof Any>, never>;
        consensusState?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["consensusState"], keyof Any>, never>;
        proofUpgradeClient?: Uint8Array;
        proofUpgradeConsensusState?: Uint8Array;
        signer?: string;
    } & Record<Exclude<keyof I, keyof MsgUpgradeClient>, never>>(object: I): MsgUpgradeClient;
};
export declare const MsgUpgradeClientResponse: {
    encode(_: MsgUpgradeClientResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpgradeClientResponse;
    fromJSON(_: any): MsgUpgradeClientResponse;
    toJSON(_: MsgUpgradeClientResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpgradeClientResponse;
};
export declare const MsgSubmitMisbehaviour: {
    encode(message: MsgSubmitMisbehaviour, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitMisbehaviour;
    fromJSON(object: any): MsgSubmitMisbehaviour;
    toJSON(message: MsgSubmitMisbehaviour): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["misbehaviour"], keyof Any>, never>;
        signer?: string;
    } & Record<Exclude<keyof I, keyof MsgSubmitMisbehaviour>, never>>(object: I): MsgSubmitMisbehaviour;
};
export declare const MsgSubmitMisbehaviourResponse: {
    encode(_: MsgSubmitMisbehaviourResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitMisbehaviourResponse;
    fromJSON(_: any): MsgSubmitMisbehaviourResponse;
    toJSON(_: MsgSubmitMisbehaviourResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSubmitMisbehaviourResponse;
};
