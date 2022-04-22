import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgCreateGroup, MsgCreateGroupResponse, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupPolicyResponse, MsgUpdateGroupPolicyAdmin, MsgCreateGroupWithPolicy, MsgCreateGroupWithPolicyResponse, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgSubmitProposalResponse, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup, MsgUpdateGroupMembersResponse, MsgUpdateGroupAdminResponse, MsgUpdateGroupMetadataResponse, MsgUpdateGroupPolicyAdminResponse, MsgUpdateGroupPolicyDecisionPolicyResponse, MsgUpdateGroupPolicyMetadataResponse, MsgWithdrawProposalResponse, MsgVoteResponse, MsgExecResponse, MsgLeaveGroupResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { VoteOption, Member, voteOptionFromJSON, voteOptionToJSON } from "../../../cosmos/group/v1/types";
import { Registry, GeneratedType } from "@cosmjs/proto-signing";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.group.v1.MsgCreateGroup", MsgCreateGroup], ["/cosmos.group.v1.MsgUpdateGroupMembers", MsgUpdateGroupMembers], ["/cosmos.group.v1.MsgUpdateGroupAdmin", MsgUpdateGroupAdmin], ["/cosmos.group.v1.MsgUpdateGroupMetadata", MsgUpdateGroupMetadata], ["/cosmos.group.v1.MsgCreateGroupPolicy", MsgCreateGroupPolicy], ["/cosmos.group.v1.MsgCreateGroupWithPolicy", MsgCreateGroupWithPolicy], ["/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", MsgUpdateGroupPolicyAdmin], ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", MsgUpdateGroupPolicyDecisionPolicy], ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", MsgUpdateGroupPolicyMetadata], ["/cosmos.group.v1.MsgSubmitProposal", MsgSubmitProposal], ["/cosmos.group.v1.MsgWithdrawProposal", MsgWithdrawProposal], ["/cosmos.group.v1.MsgVote", MsgVote], ["/cosmos.group.v1.MsgExec", MsgExec], ["/cosmos.group.v1.MsgLeaveGroup", MsgLeaveGroup]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};