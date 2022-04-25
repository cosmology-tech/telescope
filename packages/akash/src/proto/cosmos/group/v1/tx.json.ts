import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgCreateGroup, MsgCreateGroupResponse, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupPolicyResponse, MsgUpdateGroupPolicyAdmin, MsgCreateGroupWithPolicy, MsgCreateGroupWithPolicyResponse, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgSubmitProposalResponse, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup, MsgUpdateGroupMembersResponse, MsgUpdateGroupAdminResponse, MsgUpdateGroupMetadataResponse, MsgUpdateGroupPolicyAdminResponse, MsgUpdateGroupPolicyDecisionPolicyResponse, MsgUpdateGroupPolicyMetadataResponse, MsgWithdrawProposalResponse, MsgVoteResponse, MsgExecResponse, MsgLeaveGroupResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { VoteOption, Member, voteOptionFromJSON, voteOptionToJSON } from "../../../cosmos/group/v1/types";
export const json = {
  createGroup(value: MsgCreateGroup) {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroup",
      value
    };
  },

  updateGroupMembers(value: MsgUpdateGroupMembers) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
      value
    };
  },

  updateGroupAdmin(value: MsgUpdateGroupAdmin) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
      value
    };
  },

  updateGroupMetadata(value: MsgUpdateGroupMetadata) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
      value
    };
  },

  createGroupPolicy(value: MsgCreateGroupPolicy) {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
      value
    };
  },

  createGroupWithPolicy(value: MsgCreateGroupWithPolicy) {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
      value
    };
  },

  updateGroupPolicyAdmin(value: MsgUpdateGroupPolicyAdmin) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
      value
    };
  },

  updateGroupPolicyDecisionPolicy(value: MsgUpdateGroupPolicyDecisionPolicy) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
      value
    };
  },

  updateGroupPolicyMetadata(value: MsgUpdateGroupPolicyMetadata) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
      value
    };
  },

  submitProposal(value: MsgSubmitProposal) {
    return {
      typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
      value
    };
  },

  withdrawProposal(value: MsgWithdrawProposal) {
    return {
      typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
      value
    };
  },

  vote(value: MsgVote) {
    return {
      typeUrl: "/cosmos.group.v1.MsgVote",
      value
    };
  },

  exec(value: MsgExec) {
    return {
      typeUrl: "/cosmos.group.v1.MsgExec",
      value
    };
  },

  leaveGroup(value: MsgLeaveGroup) {
    return {
      typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
      value
    };
  }

};