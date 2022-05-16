import { Member, VoteOption } from "./types";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** Exec defines modes of execution of a proposal on creation or on new vote. */
export declare enum Exec {
    /**
     * EXEC_UNSPECIFIED - An empty value means that there should be a separate
     * MsgExec request for the proposal to execute.
     */
    EXEC_UNSPECIFIED = 0,
    /**
     * EXEC_TRY - Try to execute the proposal immediately.
     * If the proposal is not allowed per the DecisionPolicy,
     * the proposal will still be open and could
     * be executed at a later point.
     */
    EXEC_TRY = 1,
    UNRECOGNIZED = -1
}
export declare function execFromJSON(object: any): Exec;
export declare function execToJSON(object: Exec): string;
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroup {
    /** admin is the account address of the group admin. */
    admin: string;
    /** members defines the group members. */
    members: Member[];
    /** metadata is any arbitrary metadata to attached to the group. */
    metadata: string;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponse {
    /** group_id is the unique ID of the newly created group. */
    groupId: Long;
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembers {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /**
     * member_updates is the list of members to update,
     * set weight to 0 to remove a member.
     */
    memberUpdates: Member[];
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponse {
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdmin {
    /** admin is the current account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /** new_admin is the group new admin account address. */
    newAdmin: string;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponse {
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadata {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /** metadata is the updated group's metadata. */
    metadata: string;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponse {
}
/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicy {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /** metadata is any arbitrary metadata attached to the group policy. */
    metadata: string;
    /** decision_policy specifies the group policy's decision policy. */
    decisionPolicy: Any;
}
/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponse {
    /** address is the account address of the newly created group policy. */
    address: string;
}
/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdmin {
    /** admin is the account address of the group admin. */
    admin: string;
    /** address is the account address of the group policy. */
    address: string;
    /** new_admin is the new group policy admin. */
    newAdmin: string;
}
/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicy {
    /** admin is the account address of the group and group policy admin. */
    admin: string;
    /** members defines the group members. */
    members: Member[];
    /** group_metadata is any arbitrary metadata attached to the group. */
    groupMetadata: string;
    /** group_policy_metadata is any arbitrary metadata attached to the group policy. */
    groupPolicyMetadata: string;
    /** group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group and group policy admin. */
    groupPolicyAsAdmin: boolean;
    /** decision_policy specifies the group policy's decision policy. */
    decisionPolicy: Any;
}
/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponse {
    /** group_id is the unique ID of the newly created group with policy. */
    groupId: Long;
    /** group_policy_address is the account address of the newly created group policy. */
    groupPolicyAddress: string;
}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponse {
}
/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicy {
    /** admin is the account address of the group admin. */
    admin: string;
    /** address is the account address of group policy. */
    address: string;
    /** decision_policy is the updated group policy's decision policy. */
    decisionPolicy: Any;
}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponse {
}
/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadata {
    /** admin is the account address of the group admin. */
    admin: string;
    /** address is the account address of group policy. */
    address: string;
    /** metadata is the updated group policy metadata. */
    metadata: string;
}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponse {
}
/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposal {
    /** address is the account address of group policy. */
    address: string;
    /**
     * proposers are the account addresses of the proposers.
     * Proposers signatures will be counted as yes votes.
     */
    proposers: string[];
    /** metadata is any arbitrary metadata to attached to the proposal. */
    metadata: string;
    /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
    messages: Any[];
    /**
     * exec defines the mode of execution of the proposal,
     * whether it should be executed immediately on creation or not.
     * If so, proposers signatures are considered as Yes votes.
     */
    exec: Exec;
}
/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
    /** proposal is the unique ID of the proposal. */
    proposalId: Long;
}
/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposal {
    /** proposal is the unique ID of the proposal. */
    proposalId: Long;
    /** address is the admin of the group policy or one of the proposer of the proposal. */
    address: string;
}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponse {
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVote {
    /** proposal is the unique ID of the proposal. */
    proposalId: Long;
    /** voter is the voter account address. */
    voter: string;
    /** option is the voter's choice on the proposal. */
    option: VoteOption;
    /** metadata is any arbitrary metadata to attached to the vote. */
    metadata: string;
    /**
     * exec defines whether the proposal should be executed
     * immediately after voting or not.
     */
    exec: Exec;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponse {
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExec {
    /** proposal is the unique ID of the proposal. */
    proposalId: Long;
    /** signer is the account address used to execute the proposal. */
    signer: string;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponse {
}
/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroup {
    /** address is the account address of the group member. */
    address: string;
    /** group_id is the unique ID of the group. */
    groupId: Long;
}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponse {
}
export declare const MsgCreateGroup: {
    encode(message: MsgCreateGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroup;
    fromJSON(object: any): MsgCreateGroup;
    toJSON(message: MsgCreateGroup): unknown;
    fromPartial<I extends {
        admin?: string;
        members?: {
            address?: string;
            weight?: string;
            metadata?: string;
            addedAt?: Date;
        }[];
        metadata?: string;
    } & {
        admin?: string;
        members?: {
            address?: string;
            weight?: string;
            metadata?: string;
            addedAt?: Date;
        }[] & ({
            address?: string;
            weight?: string;
            metadata?: string;
            addedAt?: Date;
        } & {
            address?: string;
            weight?: string;
            metadata?: string;
            addedAt?: Date;
        } & Record<Exclude<keyof I["members"][number], keyof Member>, never>)[] & Record<Exclude<keyof I["members"], keyof {
            address?: string;
            weight?: string;
            metadata?: string;
            addedAt?: Date;
        }[]>, never>;
        metadata?: string;
    } & Record<Exclude<keyof I, keyof MsgCreateGroup>, never>>(object: I): MsgCreateGroup;
};
export declare const MsgCreateGroupResponse: {
    encode(message: MsgCreateGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupResponse;
    fromJSON(object: any): MsgCreateGroupResponse;
    toJSON(message: MsgCreateGroupResponse): unknown;
    fromPartial<I extends {
        groupId?: any;
    } & {
        groupId?: any;
    } & Record<Exclude<keyof I, "groupId">, never>>(object: I): MsgCreateGroupResponse;
};
export declare const MsgUpdateGroupMembers: {
    encode(message: MsgUpdateGroupMembers, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMembers;
    fromJSON(object: any): MsgUpdateGroupMembers;
    toJSON(message: MsgUpdateGroupMembers): unknown;
    fromPartial<I extends {
        admin?: string;
        groupId?: any;
        memberUpdates?: {
            address?: string;
            weight?: string;
            metadata?: string;
            addedAt?: Date;
        }[];
    } & {
        admin?: string;
        groupId?: any;
        memberUpdates?: {
            address?: string;
            weight?: string;
            metadata?: string;
            addedAt?: Date;
        }[] & ({
            address?: string;
            weight?: string;
            metadata?: string;
            addedAt?: Date;
        } & {
            address?: string;
            weight?: string;
            metadata?: string;
            addedAt?: Date;
        } & Record<Exclude<keyof I["memberUpdates"][number], keyof Member>, never>)[] & Record<Exclude<keyof I["memberUpdates"], keyof {
            address?: string;
            weight?: string;
            metadata?: string;
            addedAt?: Date;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof MsgUpdateGroupMembers>, never>>(object: I): MsgUpdateGroupMembers;
};
export declare const MsgUpdateGroupMembersResponse: {
    encode(_: MsgUpdateGroupMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMembersResponse;
    fromJSON(_: any): MsgUpdateGroupMembersResponse;
    toJSON(_: MsgUpdateGroupMembersResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateGroupMembersResponse;
};
export declare const MsgUpdateGroupAdmin: {
    encode(message: MsgUpdateGroupAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAdmin;
    fromJSON(object: any): MsgUpdateGroupAdmin;
    toJSON(message: MsgUpdateGroupAdmin): unknown;
    fromPartial<I extends {
        admin?: string;
        groupId?: any;
        newAdmin?: string;
    } & {
        admin?: string;
        groupId?: any;
        newAdmin?: string;
    } & Record<Exclude<keyof I, keyof MsgUpdateGroupAdmin>, never>>(object: I): MsgUpdateGroupAdmin;
};
export declare const MsgUpdateGroupAdminResponse: {
    encode(_: MsgUpdateGroupAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAdminResponse;
    fromJSON(_: any): MsgUpdateGroupAdminResponse;
    toJSON(_: MsgUpdateGroupAdminResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateGroupAdminResponse;
};
export declare const MsgUpdateGroupMetadata: {
    encode(message: MsgUpdateGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMetadata;
    fromJSON(object: any): MsgUpdateGroupMetadata;
    toJSON(message: MsgUpdateGroupMetadata): unknown;
    fromPartial<I extends {
        admin?: string;
        groupId?: any;
        metadata?: string;
    } & {
        admin?: string;
        groupId?: any;
        metadata?: string;
    } & Record<Exclude<keyof I, keyof MsgUpdateGroupMetadata>, never>>(object: I): MsgUpdateGroupMetadata;
};
export declare const MsgUpdateGroupMetadataResponse: {
    encode(_: MsgUpdateGroupMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMetadataResponse;
    fromJSON(_: any): MsgUpdateGroupMetadataResponse;
    toJSON(_: MsgUpdateGroupMetadataResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateGroupMetadataResponse;
};
export declare const MsgCreateGroupPolicy: {
    encode(message: MsgCreateGroupPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupPolicy;
    fromJSON(object: any): MsgCreateGroupPolicy;
    toJSON(message: MsgCreateGroupPolicy): unknown;
    fromPartial<I extends {
        admin?: string;
        groupId?: any;
        metadata?: string;
        decisionPolicy?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        admin?: string;
        groupId?: any;
        metadata?: string;
        decisionPolicy?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["decisionPolicy"], keyof Any>, never>;
    } & Record<Exclude<keyof I, keyof MsgCreateGroupPolicy>, never>>(object: I): MsgCreateGroupPolicy;
};
export declare const MsgCreateGroupPolicyResponse: {
    encode(message: MsgCreateGroupPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupPolicyResponse;
    fromJSON(object: any): MsgCreateGroupPolicyResponse;
    toJSON(message: MsgCreateGroupPolicyResponse): unknown;
    fromPartial<I extends {
        address?: string;
    } & {
        address?: string;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): MsgCreateGroupPolicyResponse;
};
export declare const MsgUpdateGroupPolicyAdmin: {
    encode(message: MsgUpdateGroupPolicyAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdmin;
    fromJSON(object: any): MsgUpdateGroupPolicyAdmin;
    toJSON(message: MsgUpdateGroupPolicyAdmin): unknown;
    fromPartial<I extends {
        admin?: string;
        address?: string;
        newAdmin?: string;
    } & {
        admin?: string;
        address?: string;
        newAdmin?: string;
    } & Record<Exclude<keyof I, keyof MsgUpdateGroupPolicyAdmin>, never>>(object: I): MsgUpdateGroupPolicyAdmin;
};
export declare const MsgCreateGroupWithPolicy: {
    encode(message: MsgCreateGroupWithPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupWithPolicy;
    fromJSON(object: any): MsgCreateGroupWithPolicy;
    toJSON(message: MsgCreateGroupWithPolicy): unknown;
    fromPartial<I extends {
        admin?: string;
        members?: {
            address?: string;
            weight?: string;
            metadata?: string;
            addedAt?: Date;
        }[];
        groupMetadata?: string;
        groupPolicyMetadata?: string;
        groupPolicyAsAdmin?: boolean;
        decisionPolicy?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        admin?: string;
        members?: {
            address?: string;
            weight?: string;
            metadata?: string;
            addedAt?: Date;
        }[] & ({
            address?: string;
            weight?: string;
            metadata?: string;
            addedAt?: Date;
        } & {
            address?: string;
            weight?: string;
            metadata?: string;
            addedAt?: Date;
        } & Record<Exclude<keyof I["members"][number], keyof Member>, never>)[] & Record<Exclude<keyof I["members"], keyof {
            address?: string;
            weight?: string;
            metadata?: string;
            addedAt?: Date;
        }[]>, never>;
        groupMetadata?: string;
        groupPolicyMetadata?: string;
        groupPolicyAsAdmin?: boolean;
        decisionPolicy?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["decisionPolicy"], keyof Any>, never>;
    } & Record<Exclude<keyof I, keyof MsgCreateGroupWithPolicy>, never>>(object: I): MsgCreateGroupWithPolicy;
};
export declare const MsgCreateGroupWithPolicyResponse: {
    encode(message: MsgCreateGroupWithPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupWithPolicyResponse;
    fromJSON(object: any): MsgCreateGroupWithPolicyResponse;
    toJSON(message: MsgCreateGroupWithPolicyResponse): unknown;
    fromPartial<I extends {
        groupId?: any;
        groupPolicyAddress?: string;
    } & {
        groupId?: any;
        groupPolicyAddress?: string;
    } & Record<Exclude<keyof I, keyof MsgCreateGroupWithPolicyResponse>, never>>(object: I): MsgCreateGroupWithPolicyResponse;
};
export declare const MsgUpdateGroupPolicyAdminResponse: {
    encode(_: MsgUpdateGroupPolicyAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdminResponse;
    fromJSON(_: any): MsgUpdateGroupPolicyAdminResponse;
    toJSON(_: MsgUpdateGroupPolicyAdminResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateGroupPolicyAdminResponse;
};
export declare const MsgUpdateGroupPolicyDecisionPolicy: {
    encode(message: MsgUpdateGroupPolicyDecisionPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicy;
    fromJSON(object: any): MsgUpdateGroupPolicyDecisionPolicy;
    toJSON(message: MsgUpdateGroupPolicyDecisionPolicy): unknown;
    fromPartial<I extends {
        admin?: string;
        address?: string;
        decisionPolicy?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        admin?: string;
        address?: string;
        decisionPolicy?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["decisionPolicy"], keyof Any>, never>;
    } & Record<Exclude<keyof I, keyof MsgUpdateGroupPolicyDecisionPolicy>, never>>(object: I): MsgUpdateGroupPolicyDecisionPolicy;
};
export declare const MsgUpdateGroupPolicyDecisionPolicyResponse: {
    encode(_: MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicyResponse;
    fromJSON(_: any): MsgUpdateGroupPolicyDecisionPolicyResponse;
    toJSON(_: MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateGroupPolicyDecisionPolicyResponse;
};
export declare const MsgUpdateGroupPolicyMetadata: {
    encode(message: MsgUpdateGroupPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadata;
    fromJSON(object: any): MsgUpdateGroupPolicyMetadata;
    toJSON(message: MsgUpdateGroupPolicyMetadata): unknown;
    fromPartial<I extends {
        admin?: string;
        address?: string;
        metadata?: string;
    } & {
        admin?: string;
        address?: string;
        metadata?: string;
    } & Record<Exclude<keyof I, keyof MsgUpdateGroupPolicyMetadata>, never>>(object: I): MsgUpdateGroupPolicyMetadata;
};
export declare const MsgUpdateGroupPolicyMetadataResponse: {
    encode(_: MsgUpdateGroupPolicyMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadataResponse;
    fromJSON(_: any): MsgUpdateGroupPolicyMetadataResponse;
    toJSON(_: MsgUpdateGroupPolicyMetadataResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateGroupPolicyMetadataResponse;
};
export declare const MsgSubmitProposal: {
    encode(message: MsgSubmitProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposal;
    fromJSON(object: any): MsgSubmitProposal;
    toJSON(message: MsgSubmitProposal): unknown;
    fromPartial<I extends {
        address?: string;
        proposers?: string[];
        metadata?: string;
        messages?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[];
        exec?: Exec;
    } & {
        address?: string;
        proposers?: string[] & string[] & Record<Exclude<keyof I["proposers"], keyof string[]>, never>;
        metadata?: string;
        messages?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[] & ({
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["messages"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["messages"], keyof {
            typeUrl?: string;
            value?: Uint8Array;
        }[]>, never>;
        exec?: Exec;
    } & Record<Exclude<keyof I, keyof MsgSubmitProposal>, never>>(object: I): MsgSubmitProposal;
};
export declare const MsgSubmitProposalResponse: {
    encode(message: MsgSubmitProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposalResponse;
    fromJSON(object: any): MsgSubmitProposalResponse;
    toJSON(message: MsgSubmitProposalResponse): unknown;
    fromPartial<I extends {
        proposalId?: any;
    } & {
        proposalId?: any;
    } & Record<Exclude<keyof I, "proposalId">, never>>(object: I): MsgSubmitProposalResponse;
};
export declare const MsgWithdrawProposal: {
    encode(message: MsgWithdrawProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawProposal;
    fromJSON(object: any): MsgWithdrawProposal;
    toJSON(message: MsgWithdrawProposal): unknown;
    fromPartial<I extends {
        proposalId?: any;
        address?: string;
    } & {
        proposalId?: any;
        address?: string;
    } & Record<Exclude<keyof I, keyof MsgWithdrawProposal>, never>>(object: I): MsgWithdrawProposal;
};
export declare const MsgWithdrawProposalResponse: {
    encode(_: MsgWithdrawProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawProposalResponse;
    fromJSON(_: any): MsgWithdrawProposalResponse;
    toJSON(_: MsgWithdrawProposalResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgWithdrawProposalResponse;
};
export declare const MsgVote: {
    encode(message: MsgVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVote;
    fromJSON(object: any): MsgVote;
    toJSON(message: MsgVote): unknown;
    fromPartial<I extends {
        proposalId?: any;
        voter?: string;
        option?: VoteOption;
        metadata?: string;
        exec?: Exec;
    } & {
        proposalId?: any;
        voter?: string;
        option?: VoteOption;
        metadata?: string;
        exec?: Exec;
    } & Record<Exclude<keyof I, keyof MsgVote>, never>>(object: I): MsgVote;
};
export declare const MsgVoteResponse: {
    encode(_: MsgVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteResponse;
    fromJSON(_: any): MsgVoteResponse;
    toJSON(_: MsgVoteResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgVoteResponse;
};
export declare const MsgExec: {
    encode(message: MsgExec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExec;
    fromJSON(object: any): MsgExec;
    toJSON(message: MsgExec): unknown;
    fromPartial<I extends {
        proposalId?: any;
        signer?: string;
    } & {
        proposalId?: any;
        signer?: string;
    } & Record<Exclude<keyof I, keyof MsgExec>, never>>(object: I): MsgExec;
};
export declare const MsgExecResponse: {
    encode(_: MsgExecResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecResponse;
    fromJSON(_: any): MsgExecResponse;
    toJSON(_: MsgExecResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgExecResponse;
};
export declare const MsgLeaveGroup: {
    encode(message: MsgLeaveGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveGroup;
    fromJSON(object: any): MsgLeaveGroup;
    toJSON(message: MsgLeaveGroup): unknown;
    fromPartial<I extends {
        address?: string;
        groupId?: any;
    } & {
        address?: string;
        groupId?: any;
    } & Record<Exclude<keyof I, keyof MsgLeaveGroup>, never>>(object: I): MsgLeaveGroup;
};
export declare const MsgLeaveGroupResponse: {
    encode(_: MsgLeaveGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveGroupResponse;
    fromJSON(_: any): MsgLeaveGroupResponse;
    toJSON(_: MsgLeaveGroupResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgLeaveGroupResponse;
};
