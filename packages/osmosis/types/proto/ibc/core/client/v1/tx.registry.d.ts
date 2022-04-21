import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour } from "./tx";
import * as _m0 from "protobufjs/minimal";
export declare const registry: {
    "/ibc.core.client.v1.MsgCreateClient": {
        encode(message: MsgCreateClient, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgCreateClient;
        fromJSON(object: any): MsgCreateClient;
        toJSON(message: MsgCreateClient): unknown;
        fromPartial<I extends unknown>(object: I): MsgCreateClient;
    };
    "/ibc.core.client.v1.MsgUpdateClient": {
        encode(message: MsgUpdateClient, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgUpdateClient;
        fromJSON(object: any): MsgUpdateClient;
        toJSON(message: MsgUpdateClient): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): MsgUpdateClient;
    };
    "/ibc.core.client.v1.MsgUpgradeClient": {
        encode(message: MsgUpgradeClient, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgUpgradeClient;
        fromJSON(object: any): MsgUpgradeClient;
        toJSON(message: MsgUpgradeClient): unknown;
        fromPartial<I_2 extends unknown>(object: I_2): MsgUpgradeClient;
    };
    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
        encode(message: MsgSubmitMisbehaviour, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgSubmitMisbehaviour;
        fromJSON(object: any): MsgSubmitMisbehaviour;
        toJSON(message: MsgSubmitMisbehaviour): unknown;
        fromPartial<I_3 extends unknown>(object: I_3): MsgSubmitMisbehaviour;
    };
};
