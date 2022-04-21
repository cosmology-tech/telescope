import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate } from "./tx";
import * as _m0 from "protobufjs/minimal";
export declare const registry: {
    "/cosmos.staking.v1beta1.MsgCreateValidator": {
        encode(message: MsgCreateValidator, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgCreateValidator;
        fromJSON(object: any): MsgCreateValidator;
        toJSON(message: MsgCreateValidator): unknown;
        fromPartial<I extends unknown>(object: I): MsgCreateValidator;
    };
    "/cosmos.staking.v1beta1.MsgEditValidator": {
        encode(message: MsgEditValidator, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgEditValidator;
        fromJSON(object: any): MsgEditValidator;
        toJSON(message: MsgEditValidator): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): MsgEditValidator;
    };
    "/cosmos.staking.v1beta1.MsgDelegate": {
        encode(message: MsgDelegate, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgDelegate;
        fromJSON(object: any): MsgDelegate;
        toJSON(message: MsgDelegate): unknown;
        fromPartial<I_2 extends unknown>(object: I_2): MsgDelegate;
    };
    "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
        encode(message: MsgBeginRedelegate, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgBeginRedelegate;
        fromJSON(object: any): MsgBeginRedelegate;
        toJSON(message: MsgBeginRedelegate): unknown;
        fromPartial<I_3 extends unknown>(object: I_3): MsgBeginRedelegate;
    };
    "/cosmos.staking.v1beta1.MsgUndelegate": {
        encode(message: MsgUndelegate, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgUndelegate;
        fromJSON(object: any): MsgUndelegate;
        toJSON(message: MsgUndelegate): unknown;
        fromPartial<I_4 extends unknown>(object: I_4): MsgUndelegate;
    };
};
