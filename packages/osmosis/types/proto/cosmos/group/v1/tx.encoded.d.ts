import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgUpdateGroupPolicyAdmin, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
export declare const encoded: {
    createGroup(value: MsgCreateGroup): {
        type_url: string;
        value: Uint8Array;
    };
    updateGroupMembers(value: MsgUpdateGroupMembers): {
        type_url: string;
        value: Uint8Array;
    };
    updateGroupAdmin(value: MsgUpdateGroupAdmin): {
        type_url: string;
        value: Uint8Array;
    };
    updateGroupMetadata(value: MsgUpdateGroupMetadata): {
        type_url: string;
        value: Uint8Array;
    };
    createGroupPolicy(value: MsgCreateGroupPolicy): {
        type_url: string;
        value: Uint8Array;
    };
    createGroupWithPolicy(value: MsgCreateGroupWithPolicy): {
        type_url: string;
        value: Uint8Array;
    };
    updateGroupPolicyAdmin(value: MsgUpdateGroupPolicyAdmin): {
        type_url: string;
        value: Uint8Array;
    };
    updateGroupPolicyDecisionPolicy(value: MsgUpdateGroupPolicyDecisionPolicy): {
        type_url: string;
        value: Uint8Array;
    };
    updateGroupPolicyMetadata(value: MsgUpdateGroupPolicyMetadata): {
        type_url: string;
        value: Uint8Array;
    };
    submitProposal(value: MsgSubmitProposal): {
        type_url: string;
        value: Uint8Array;
    };
    withdrawProposal(value: MsgWithdrawProposal): {
        type_url: string;
        value: Uint8Array;
    };
    vote(value: MsgVote): {
        type_url: string;
        value: Uint8Array;
    };
    exec(value: MsgExec): {
        type_url: string;
        value: Uint8Array;
    };
    leaveGroup(value: MsgLeaveGroup): {
        type_url: string;
        value: Uint8Array;
    };
};
