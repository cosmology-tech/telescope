import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgUpdateGroupPolicyAdmin, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
export declare const fromJSON: {
    createGroup(value: any): {
        typeUrl: string;
        value: MsgCreateGroup;
    };
    updateGroupMembers(value: any): {
        typeUrl: string;
        value: MsgUpdateGroupMembers;
    };
    updateGroupAdmin(value: any): {
        typeUrl: string;
        value: MsgUpdateGroupAdmin;
    };
    updateGroupMetadata(value: any): {
        typeUrl: string;
        value: MsgUpdateGroupMetadata;
    };
    createGroupPolicy(value: any): {
        typeUrl: string;
        value: MsgCreateGroupPolicy;
    };
    createGroupWithPolicy(value: any): {
        typeUrl: string;
        value: MsgCreateGroupWithPolicy;
    };
    updateGroupPolicyAdmin(value: any): {
        typeUrl: string;
        value: MsgUpdateGroupPolicyAdmin;
    };
    updateGroupPolicyDecisionPolicy(value: any): {
        typeUrl: string;
        value: MsgUpdateGroupPolicyDecisionPolicy;
    };
    updateGroupPolicyMetadata(value: any): {
        typeUrl: string;
        value: MsgUpdateGroupPolicyMetadata;
    };
    submitProposal(value: any): {
        typeUrl: string;
        value: MsgSubmitProposal;
    };
    withdrawProposal(value: any): {
        typeUrl: string;
        value: MsgWithdrawProposal;
    };
    vote(value: any): {
        typeUrl: string;
        value: MsgVote;
    };
    exec(value: any): {
        typeUrl: string;
        value: MsgExec;
    };
    leaveGroup(value: any): {
        typeUrl: string;
        value: MsgLeaveGroup;
    };
};
