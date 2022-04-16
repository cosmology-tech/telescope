import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgCreateGroup, MsgCreateGroupResponse, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupPolicyResponse, MsgUpdateGroupPolicyAdmin, MsgCreateGroupWithPolicy, MsgCreateGroupWithPolicyResponse, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgSubmitProposalResponse, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup, MsgUpdateGroupMembersResponse, MsgUpdateGroupAdminResponse, MsgUpdateGroupMetadataResponse, MsgUpdateGroupPolicyAdminResponse, MsgUpdateGroupPolicyDecisionPolicyResponse, MsgUpdateGroupPolicyMetadataResponse, MsgWithdrawProposalResponse, MsgVoteResponse, MsgExecResponse, MsgLeaveGroupResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { VoteOption, Member, voteOptionFromJSON, voteOptionToJSON } from "../../../cosmos/group/v1/types";
export const fromJSON = {
  createGroup(value: any) {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroup",
      value: MsgCreateGroup.fromJSON(value)
    };
  },

  updateGroupMembers(value: any) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
      value: MsgUpdateGroupMembers.fromJSON(value)
    };
  },

  updateGroupAdmin(value: any) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
      value: MsgUpdateGroupAdmin.fromJSON(value)
    };
  },

  updateGroupMetadata(value: any) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
      value: MsgUpdateGroupMetadata.fromJSON(value)
    };
  },

  createGroupPolicy(value: any) {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
      value: MsgCreateGroupPolicy.fromJSON(value)
    };
  },

  createGroupWithPolicy(value: any) {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
      value: MsgCreateGroupWithPolicy.fromJSON(value)
    };
  },

  updateGroupPolicyAdmin(value: any) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
      value: MsgUpdateGroupPolicyAdmin.fromJSON(value)
    };
  },

  updateGroupPolicyDecisionPolicy(value: any) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
      value: MsgUpdateGroupPolicyDecisionPolicy.fromJSON(value)
    };
  },

  updateGroupPolicyMetadata(value: any) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
      value: MsgUpdateGroupPolicyMetadata.fromJSON(value)
    };
  },

  submitProposal(value: any) {
    return {
      typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
      value: MsgSubmitProposal.fromJSON(value)
    };
  },

  withdrawProposal(value: any) {
    return {
      typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
      value: MsgWithdrawProposal.fromJSON(value)
    };
  },

  vote(value: any) {
    return {
      typeUrl: "/cosmos.group.v1.MsgVote",
      value: MsgVote.fromJSON(value)
    };
  },

  exec(value: any) {
    return {
      typeUrl: "/cosmos.group.v1.MsgExec",
      value: MsgExec.fromJSON(value)
    };
  },

  leaveGroup(value: any) {
    return {
      typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
      value: MsgLeaveGroup.fromJSON(value)
    };
  }

};