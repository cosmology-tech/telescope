import { MsgSubmitEvidence } from "./tx";
import * as _m0 from "protobufjs/minimal";
import { Registry } from "@cosmjs/proto-signing";
export declare const registry: {
    "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
        encode(message: MsgSubmitEvidence, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgSubmitEvidence;
        fromJSON(object: any): MsgSubmitEvidence;
        toJSON(message: MsgSubmitEvidence): unknown;
        fromPartial<I extends unknown>(object: I): MsgSubmitEvidence;
    };
};
export declare const load: (protoRegistry: Registry) => void;
