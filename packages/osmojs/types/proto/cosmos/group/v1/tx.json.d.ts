import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgUpdateGroupPolicyAdmin, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
export declare const json: {
    createGroup(value: MsgCreateGroup): {
        typeUrl: string;
        value: MsgCreateGroup;
    };
    updateGroupMembers(value: MsgUpdateGroupMembers): {
        typeUrl: string;
        value: MsgUpdateGroupMembers;
    };
    updateGroupAdmin(value: MsgUpdateGroupAdmin): {
        typeUrl: string;
        value: MsgUpdateGroupAdmin;
    };
    updateGroupMetadata(value: MsgUpdateGroupMetadata): {
        typeUrl: string;
        value: MsgUpdateGroupMetadata;
    };
    createGroupPolicy(value: MsgCreateGroupPolicy): {
        typeUrl: string;
        value: MsgCreateGroupPolicy;
    };
    createGroupWithPolicy(value: MsgCreateGroupWithPolicy): {
        typeUrl: string;
        value: MsgCreateGroupWithPolicy;
    };
    updateGroupPolicyAdmin(value: MsgUpdateGroupPolicyAdmin): {
        typeUrl: string;
        value: MsgUpdateGroupPolicyAdmin;
    };
    updateGroupPolicyDecisionPolicy(value: MsgUpdateGroupPolicyDecisionPolicy): {
        typeUrl: string;
        value: MsgUpdateGroupPolicyDecisionPolicy;
    };
    updateGroupPolicyMetadata(value: MsgUpdateGroupPolicyMetadata): {
        typeUrl: string;
        value: MsgUpdateGroupPolicyMetadata;
    };
    submitProposal(value: MsgSubmitProposal): {
        typeUrl: string;
        value: MsgSubmitProposal;
    };
    withdrawProposal(value: MsgWithdrawProposal): {
        typeUrl: string;
        value: MsgWithdrawProposal;
    };
    vote(value: MsgVote): {
        typeUrl: string;
        value: MsgVote;
    };
    exec(value: MsgExec): {
        typeUrl: string;
        value: MsgExec;
    };
    leaveGroup(value: MsgLeaveGroup): {
        typeUrl: string;
        value: MsgLeaveGroup;
    };
};
