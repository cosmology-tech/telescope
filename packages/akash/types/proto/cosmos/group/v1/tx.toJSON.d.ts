import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgUpdateGroupPolicyAdmin, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
export declare const toJSON: {
    createGroup(value: MsgCreateGroup): {
        typeUrl: string;
        value: unknown;
    };
    updateGroupMembers(value: MsgUpdateGroupMembers): {
        typeUrl: string;
        value: unknown;
    };
    updateGroupAdmin(value: MsgUpdateGroupAdmin): {
        typeUrl: string;
        value: unknown;
    };
    updateGroupMetadata(value: MsgUpdateGroupMetadata): {
        typeUrl: string;
        value: unknown;
    };
    createGroupPolicy(value: MsgCreateGroupPolicy): {
        typeUrl: string;
        value: unknown;
    };
    createGroupWithPolicy(value: MsgCreateGroupWithPolicy): {
        typeUrl: string;
        value: unknown;
    };
    updateGroupPolicyAdmin(value: MsgUpdateGroupPolicyAdmin): {
        typeUrl: string;
        value: unknown;
    };
    updateGroupPolicyDecisionPolicy(value: MsgUpdateGroupPolicyDecisionPolicy): {
        typeUrl: string;
        value: unknown;
    };
    updateGroupPolicyMetadata(value: MsgUpdateGroupPolicyMetadata): {
        typeUrl: string;
        value: unknown;
    };
    submitProposal(value: MsgSubmitProposal): {
        typeUrl: string;
        value: unknown;
    };
    withdrawProposal(value: MsgWithdrawProposal): {
        typeUrl: string;
        value: unknown;
    };
    vote(value: MsgVote): {
        typeUrl: string;
        value: unknown;
    };
    exec(value: MsgExec): {
        typeUrl: string;
        value: unknown;
    };
    leaveGroup(value: MsgLeaveGroup): {
        typeUrl: string;
        value: unknown;
    };
};
