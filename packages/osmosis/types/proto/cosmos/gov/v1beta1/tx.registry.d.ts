import { MsgSubmitProposal, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
import * as _m0 from "protobufjs/minimal";
export declare const registry: {
    "/cosmos.gov.v1beta1.MsgSubmitProposal": {
        encode(message: MsgSubmitProposal, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgSubmitProposal;
        fromJSON(object: any): MsgSubmitProposal;
        toJSON(message: MsgSubmitProposal): unknown;
        fromPartial<I extends unknown>(object: I): MsgSubmitProposal;
    };
    "/cosmos.gov.v1beta1.MsgVote": {
        encode(message: MsgVote, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgVote;
        fromJSON(object: any): MsgVote;
        toJSON(message: MsgVote): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): MsgVote;
    };
    "/cosmos.gov.v1beta1.MsgVoteWeighted": {
        encode(message: MsgVoteWeighted, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgVoteWeighted;
        fromJSON(object: any): MsgVoteWeighted;
        toJSON(message: MsgVoteWeighted): unknown;
        fromPartial<I_2 extends unknown>(object: I_2): MsgVoteWeighted;
    };
    "/cosmos.gov.v1beta1.MsgDeposit": {
        encode(message: MsgDeposit, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgDeposit;
        fromJSON(object: any): MsgDeposit;
        toJSON(message: MsgDeposit): unknown;
        fromPartial<I_3 extends unknown>(object: I_3): MsgDeposit;
    };
};
