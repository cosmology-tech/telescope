import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin } from "./tx";
import * as _m0 from "protobufjs/minimal";
export declare const registry: {
    "/cosmwasm.wasm.v1.MsgStoreCode": {
        encode(message: MsgStoreCode, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgStoreCode;
        fromJSON(object: any): MsgStoreCode;
        toJSON(message: MsgStoreCode): unknown;
        fromPartial<I extends unknown>(object: I): MsgStoreCode;
    };
    "/cosmwasm.wasm.v1.MsgInstantiateContract": {
        encode(message: MsgInstantiateContract, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgInstantiateContract;
        fromJSON(object: any): MsgInstantiateContract;
        toJSON(message: MsgInstantiateContract): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): MsgInstantiateContract;
    };
    "/cosmwasm.wasm.v1.MsgExecuteContract": {
        encode(message: MsgExecuteContract, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgExecuteContract;
        fromJSON(object: any): MsgExecuteContract;
        toJSON(message: MsgExecuteContract): unknown;
        fromPartial<I_2 extends unknown>(object: I_2): MsgExecuteContract;
    };
    "/cosmwasm.wasm.v1.MsgMigrateContract": {
        encode(message: MsgMigrateContract, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgMigrateContract;
        fromJSON(object: any): MsgMigrateContract;
        toJSON(message: MsgMigrateContract): unknown;
        fromPartial<I_3 extends unknown>(object: I_3): MsgMigrateContract;
    };
    "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
        encode(message: MsgUpdateAdmin, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgUpdateAdmin;
        fromJSON(object: any): MsgUpdateAdmin;
        toJSON(message: MsgUpdateAdmin): unknown;
        fromPartial<I_4 extends unknown>(object: I_4): MsgUpdateAdmin;
    };
    "/cosmwasm.wasm.v1.MsgClearAdmin": {
        encode(message: MsgClearAdmin, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgClearAdmin;
        fromJSON(object: any): MsgClearAdmin;
        toJSON(message: MsgClearAdmin): unknown;
        fromPartial<I_5 extends unknown>(object: I_5): MsgClearAdmin;
    };
};
