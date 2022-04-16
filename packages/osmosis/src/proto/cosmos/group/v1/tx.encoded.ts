import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgCreateGroup, MsgCreateGroupResponse, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupPolicyResponse, MsgUpdateGroupPolicyAdmin, MsgCreateGroupWithPolicy, MsgCreateGroupWithPolicyResponse, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgSubmitProposalResponse, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup, MsgUpdateGroupMembersResponse, MsgUpdateGroupAdminResponse, MsgUpdateGroupMetadataResponse, MsgUpdateGroupPolicyAdminResponse, MsgUpdateGroupPolicyDecisionPolicyResponse, MsgUpdateGroupPolicyMetadataResponse, MsgWithdrawProposalResponse, MsgVoteResponse, MsgExecResponse, MsgLeaveGroupResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { VoteOption, Member, voteOptionFromJSON, voteOptionToJSON } from "../../../cosmos/group/v1/types";
export const encoded = {
  createGroup(value: MsgCreateGroup) {
    return {
      type_url: "/cosmos.group.v1.MsgCreateGroup",
      value: MsgCreateGroup.encode(value).finish()
    };
  },

  updateGroupMembers(value: MsgUpdateGroupMembers) {
    return {
      type_url: "/cosmos.group.v1.MsgUpdateGroupMembers",
      value: MsgUpdateGroupMembers.encode(value).finish()
    };
  },

  updateGroupAdmin(value: MsgUpdateGroupAdmin) {
    return {
      type_url: "/cosmos.group.v1.MsgUpdateGroupAdmin",
      value: MsgUpdateGroupAdmin.encode(value).finish()
    };
  },

  updateGroupMetadata(value: MsgUpdateGroupMetadata) {
    return {
      type_url: "/cosmos.group.v1.MsgUpdateGroupMetadata",
      value: MsgUpdateGroupMetadata.encode(value).finish()
    };
  },

  createGroupPolicy(value: MsgCreateGroupPolicy) {
    return {
      type_url: "/cosmos.group.v1.MsgCreateGroupPolicy",
      value: MsgCreateGroupPolicy.encode(value).finish()
    };
  },

  createGroupWithPolicy(value: MsgCreateGroupWithPolicy) {
    return {
      type_url: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
      value: MsgCreateGroupWithPolicy.encode(value).finish()
    };
  },

  updateGroupPolicyAdmin(value: MsgUpdateGroupPolicyAdmin) {
    return {
      type_url: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
      value: MsgUpdateGroupPolicyAdmin.encode(value).finish()
    };
  },

  updateGroupPolicyDecisionPolicy(value: MsgUpdateGroupPolicyDecisionPolicy) {
    return {
      type_url: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
      value: MsgUpdateGroupPolicyDecisionPolicy.encode(value).finish()
    };
  },

  updateGroupPolicyMetadata(value: MsgUpdateGroupPolicyMetadata) {
    return {
      type_url: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
      value: MsgUpdateGroupPolicyMetadata.encode(value).finish()
    };
  },

  submitProposal(value: MsgSubmitProposal) {
    return {
      type_url: "/cosmos.group.v1.MsgSubmitProposal",
      value: MsgSubmitProposal.encode(value).finish()
    };
  },

  withdrawProposal(value: MsgWithdrawProposal) {
    return {
      type_url: "/cosmos.group.v1.MsgWithdrawProposal",
      value: MsgWithdrawProposal.encode(value).finish()
    };
  },

  vote(value: MsgVote) {
    return {
      type_url: "/cosmos.group.v1.MsgVote",
      value: MsgVote.encode(value).finish()
    };
  },

  exec(value: MsgExec) {
    return {
      type_url: "/cosmos.group.v1.MsgExec",
      value: MsgExec.encode(value).finish()
    };
  },

  leaveGroup(value: MsgLeaveGroup) {
    return {
      type_url: "/cosmos.group.v1.MsgLeaveGroup",
      value: MsgLeaveGroup.encode(value).finish()
    };
  }

};