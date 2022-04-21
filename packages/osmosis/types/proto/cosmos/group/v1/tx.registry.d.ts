import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgUpdateGroupPolicyAdmin, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
import * as _m0 from "protobufjs/minimal";
export declare const registry: {
    "/cosmos.group.v1.MsgCreateGroup": {
        encode(message: MsgCreateGroup, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgCreateGroup;
        fromJSON(object: any): MsgCreateGroup;
        toJSON(message: MsgCreateGroup): unknown;
        fromPartial<I extends unknown>(object: I): MsgCreateGroup;
    };
    "/cosmos.group.v1.MsgUpdateGroupMembers": {
        encode(message: MsgUpdateGroupMembers, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgUpdateGroupMembers;
        fromJSON(object: any): MsgUpdateGroupMembers;
        toJSON(message: MsgUpdateGroupMembers): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): MsgUpdateGroupMembers;
    };
    "/cosmos.group.v1.MsgUpdateGroupAdmin": {
        encode(message: MsgUpdateGroupAdmin, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgUpdateGroupAdmin;
        fromJSON(object: any): MsgUpdateGroupAdmin;
        toJSON(message: MsgUpdateGroupAdmin): unknown;
        fromPartial<I_2 extends unknown>(object: I_2): MsgUpdateGroupAdmin;
    };
    "/cosmos.group.v1.MsgUpdateGroupMetadata": {
        encode(message: MsgUpdateGroupMetadata, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgUpdateGroupMetadata;
        fromJSON(object: any): MsgUpdateGroupMetadata;
        toJSON(message: MsgUpdateGroupMetadata): unknown;
        fromPartial<I_3 extends unknown>(object: I_3): MsgUpdateGroupMetadata;
    };
    "/cosmos.group.v1.MsgCreateGroupPolicy": {
        encode(message: MsgCreateGroupPolicy, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgCreateGroupPolicy;
        fromJSON(object: any): MsgCreateGroupPolicy;
        toJSON(message: MsgCreateGroupPolicy): unknown;
        fromPartial<I_4 extends unknown>(object: I_4): MsgCreateGroupPolicy;
    };
    "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
        encode(message: MsgCreateGroupWithPolicy, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgCreateGroupWithPolicy;
        fromJSON(object: any): MsgCreateGroupWithPolicy;
        toJSON(message: MsgCreateGroupWithPolicy): unknown;
        fromPartial<I_5 extends unknown>(object: I_5): MsgCreateGroupWithPolicy;
    };
    "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
        encode(message: MsgUpdateGroupPolicyAdmin, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgUpdateGroupPolicyAdmin;
        fromJSON(object: any): MsgUpdateGroupPolicyAdmin;
        toJSON(message: MsgUpdateGroupPolicyAdmin): unknown;
        fromPartial<I_6 extends unknown>(object: I_6): MsgUpdateGroupPolicyAdmin;
    };
    "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
        encode(message: MsgUpdateGroupPolicyDecisionPolicy, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgUpdateGroupPolicyDecisionPolicy;
        fromJSON(object: any): MsgUpdateGroupPolicyDecisionPolicy;
        toJSON(message: MsgUpdateGroupPolicyDecisionPolicy): unknown;
        fromPartial<I_7 extends unknown>(object: I_7): MsgUpdateGroupPolicyDecisionPolicy;
    };
    "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
        encode(message: MsgUpdateGroupPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgUpdateGroupPolicyMetadata;
        fromJSON(object: any): MsgUpdateGroupPolicyMetadata;
        toJSON(message: MsgUpdateGroupPolicyMetadata): unknown;
        fromPartial<I_8 extends unknown>(object: I_8): MsgUpdateGroupPolicyMetadata;
    };
    "/cosmos.group.v1.MsgSubmitProposal": {
        encode(message: MsgSubmitProposal, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgSubmitProposal;
        fromJSON(object: any): MsgSubmitProposal;
        toJSON(message: MsgSubmitProposal): unknown;
        fromPartial<I_9 extends unknown>(object: I_9): MsgSubmitProposal;
    };
    "/cosmos.group.v1.MsgWithdrawProposal": {
        encode(message: MsgWithdrawProposal, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgWithdrawProposal;
        fromJSON(object: any): MsgWithdrawProposal;
        toJSON(message: MsgWithdrawProposal): unknown;
        fromPartial<I_10 extends unknown>(object: I_10): MsgWithdrawProposal;
    };
    "/cosmos.group.v1.MsgVote": {
        encode(message: MsgVote, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgVote;
        fromJSON(object: any): MsgVote;
        toJSON(message: MsgVote): unknown;
        fromPartial<I_11 extends unknown>(object: I_11): MsgVote;
    };
    "/cosmos.group.v1.MsgExec": {
        encode(message: MsgExec, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgExec;
        fromJSON(object: any): MsgExec;
        toJSON(message: MsgExec): unknown;
        fromPartial<I_12 extends unknown>(object: I_12): MsgExec;
    };
    "/cosmos.group.v1.MsgLeaveGroup": {
        encode(message: MsgLeaveGroup, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgLeaveGroup;
        fromJSON(object: any): MsgLeaveGroup;
        toJSON(message: MsgLeaveGroup): unknown;
        fromPartial<I_13 extends unknown>(object: I_13): MsgLeaveGroup;
    };
};
