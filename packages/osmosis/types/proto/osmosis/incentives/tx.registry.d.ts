import { MsgCreateGauge, MsgAddToGauge } from "./tx";
import * as _m0 from "protobufjs/minimal";
import { Registry } from "@cosmjs/proto-signing";
export declare const registry: {
    "/osmosis.incentives.MsgCreateGauge": {
        encode(message: MsgCreateGauge, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgCreateGauge;
        fromJSON(object: any): MsgCreateGauge;
        toJSON(message: MsgCreateGauge): unknown;
        fromPartial<I extends unknown>(object: I): MsgCreateGauge;
    };
    "/osmosis.incentives.MsgAddToGauge": {
        encode(message: MsgAddToGauge, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgAddToGauge;
        fromJSON(object: any): MsgAddToGauge;
        toJSON(message: MsgAddToGauge): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): MsgAddToGauge;
    };
};
export declare const load: (protoRegistry: Registry) => void;
