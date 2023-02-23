import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupInfoSDKType, GroupPolicyInfo, GroupPolicyInfoSDKType, GroupMember, GroupMemberSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, TallyResult, TallyResultSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryGroupInfoRequest, QueryGroupInfoRequestSDKType, QueryGroupInfoResponse, QueryGroupInfoResponseSDKType, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoRequestSDKType, QueryGroupPolicyInfoResponse, QueryGroupPolicyInfoResponseSDKType, QueryGroupMembersRequest, QueryGroupMembersRequestSDKType, QueryGroupMembersResponse, QueryGroupMembersResponseSDKType, QueryGroupsByAdminRequest, QueryGroupsByAdminRequestSDKType, QueryGroupsByAdminResponse, QueryGroupsByAdminResponseSDKType, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupRequestSDKType, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByGroupResponseSDKType, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminRequestSDKType, QueryGroupPoliciesByAdminResponse, QueryGroupPoliciesByAdminResponseSDKType, QueryProposalRequest, QueryProposalRequestSDKType, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyRequestSDKType, QueryProposalsByGroupPolicyResponse, QueryProposalsByGroupPolicyResponseSDKType, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterRequestSDKType, QueryVoteByProposalVoterResponse, QueryVoteByProposalVoterResponseSDKType, QueryVotesByProposalRequest, QueryVotesByProposalRequestSDKType, QueryVotesByProposalResponse, QueryVotesByProposalResponseSDKType, QueryVotesByVoterRequest, QueryVotesByVoterRequestSDKType, QueryVotesByVoterResponse, QueryVotesByVoterResponseSDKType, QueryGroupsByMemberRequest, QueryGroupsByMemberRequestSDKType, QueryGroupsByMemberResponse, QueryGroupsByMemberResponseSDKType, QueryTallyResultRequest, QueryTallyResultRequestSDKType, QueryTallyResultResponse, QueryTallyResultResponseSDKType } from "./query";

/** Query is the cosmos.group.v1 Query service. */
export interface Query {
  /** GroupInfo queries group info based on group id. */
  GroupInfo(request: DeepPartial<QueryGroupInfoRequest>, metadata?: grpc.Metadata): Promise<QueryGroupInfoResponse>;

  /** GroupPolicyInfo queries group policy info based on account address of group policy. */
  GroupPolicyInfo(request: DeepPartial<QueryGroupPolicyInfoRequest>, metadata?: grpc.Metadata): Promise<QueryGroupPolicyInfoResponse>;

  /** GroupMembers queries members of a group */
  GroupMembers(request: DeepPartial<QueryGroupMembersRequest>, metadata?: grpc.Metadata): Promise<QueryGroupMembersResponse>;

  /** GroupsByAdmin queries groups by admin address. */
  GroupsByAdmin(request: DeepPartial<QueryGroupsByAdminRequest>, metadata?: grpc.Metadata): Promise<QueryGroupsByAdminResponse>;

  /** GroupPoliciesByGroup queries group policies by group id. */
  GroupPoliciesByGroup(request: DeepPartial<QueryGroupPoliciesByGroupRequest>, metadata?: grpc.Metadata): Promise<QueryGroupPoliciesByGroupResponse>;

  /** GroupsByAdmin queries group policies by admin address. */
  GroupPoliciesByAdmin(request: DeepPartial<QueryGroupPoliciesByAdminRequest>, metadata?: grpc.Metadata): Promise<QueryGroupPoliciesByAdminResponse>;

  /** Proposal queries a proposal based on proposal id. */
  Proposal(request: DeepPartial<QueryProposalRequest>, metadata?: grpc.Metadata): Promise<QueryProposalResponse>;

  /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */
  ProposalsByGroupPolicy(request: DeepPartial<QueryProposalsByGroupPolicyRequest>, metadata?: grpc.Metadata): Promise<QueryProposalsByGroupPolicyResponse>;

  /** VoteByProposalVoter queries a vote by proposal id and voter. */
  VoteByProposalVoter(request: DeepPartial<QueryVoteByProposalVoterRequest>, metadata?: grpc.Metadata): Promise<QueryVoteByProposalVoterResponse>;

  /** VotesByProposal queries a vote by proposal. */
  VotesByProposal(request: DeepPartial<QueryVotesByProposalRequest>, metadata?: grpc.Metadata): Promise<QueryVotesByProposalResponse>;

  /** VotesByVoter queries a vote by voter. */
  VotesByVoter(request: DeepPartial<QueryVotesByVoterRequest>, metadata?: grpc.Metadata): Promise<QueryVotesByVoterResponse>;

  /** GroupsByMember queries groups by member address. */
  GroupsByMember(request: DeepPartial<QueryGroupsByMemberRequest>, metadata?: grpc.Metadata): Promise<QueryGroupsByMemberResponse>;

  /** TallyResult queries the tally of a proposal votes. */
  TallyResult(request: DeepPartial<QueryTallyResultRequest>, metadata?: grpc.Metadata): Promise<QueryTallyResultResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.groupInfo = this.groupInfo.bind(this);
    this.groupPolicyInfo = this.groupPolicyInfo.bind(this);
    this.groupMembers = this.groupMembers.bind(this);
    this.groupsByAdmin = this.groupsByAdmin.bind(this);
    this.groupPoliciesByGroup = this.groupPoliciesByGroup.bind(this);
    this.groupPoliciesByAdmin = this.groupPoliciesByAdmin.bind(this);
    this.proposal = this.proposal.bind(this);
    this.proposalsByGroupPolicy = this.proposalsByGroupPolicy.bind(this);
    this.voteByProposalVoter = this.voteByProposalVoter.bind(this);
    this.votesByProposal = this.votesByProposal.bind(this);
    this.votesByVoter = this.votesByVoter.bind(this);
    this.groupsByMember = this.groupsByMember.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
  }

  groupInfo(request: DeepPartial<QueryGroupInfoRequest>, metadata?: grpc.Metadata): Promise<QueryGroupInfoResponse> {
    return this.rpc.unary(QueryGroupInfoDesc, QueryGroupInfoRequest.fromPartial(request), metadata);
  }

  groupPolicyInfo(request: DeepPartial<QueryGroupPolicyInfoRequest>, metadata?: grpc.Metadata): Promise<QueryGroupPolicyInfoResponse> {
    return this.rpc.unary(QueryGroupPolicyInfoDesc, QueryGroupPolicyInfoRequest.fromPartial(request), metadata);
  }

  groupMembers(request: DeepPartial<QueryGroupMembersRequest>, metadata?: grpc.Metadata): Promise<QueryGroupMembersResponse> {
    return this.rpc.unary(QueryGroupMembersDesc, QueryGroupMembersRequest.fromPartial(request), metadata);
  }

  groupsByAdmin(request: DeepPartial<QueryGroupsByAdminRequest>, metadata?: grpc.Metadata): Promise<QueryGroupsByAdminResponse> {
    return this.rpc.unary(QueryGroupsByAdminDesc, QueryGroupsByAdminRequest.fromPartial(request), metadata);
  }

  groupPoliciesByGroup(request: DeepPartial<QueryGroupPoliciesByGroupRequest>, metadata?: grpc.Metadata): Promise<QueryGroupPoliciesByGroupResponse> {
    return this.rpc.unary(QueryGroupPoliciesByGroupDesc, QueryGroupPoliciesByGroupRequest.fromPartial(request), metadata);
  }

  groupPoliciesByAdmin(request: DeepPartial<QueryGroupPoliciesByAdminRequest>, metadata?: grpc.Metadata): Promise<QueryGroupPoliciesByAdminResponse> {
    return this.rpc.unary(QueryGroupPoliciesByAdminDesc, QueryGroupPoliciesByAdminRequest.fromPartial(request), metadata);
  }

  proposal(request: DeepPartial<QueryProposalRequest>, metadata?: grpc.Metadata): Promise<QueryProposalResponse> {
    return this.rpc.unary(QueryProposalDesc, QueryProposalRequest.fromPartial(request), metadata);
  }

  proposalsByGroupPolicy(request: DeepPartial<QueryProposalsByGroupPolicyRequest>, metadata?: grpc.Metadata): Promise<QueryProposalsByGroupPolicyResponse> {
    return this.rpc.unary(QueryProposalsByGroupPolicyDesc, QueryProposalsByGroupPolicyRequest.fromPartial(request), metadata);
  }

  voteByProposalVoter(request: DeepPartial<QueryVoteByProposalVoterRequest>, metadata?: grpc.Metadata): Promise<QueryVoteByProposalVoterResponse> {
    return this.rpc.unary(QueryVoteByProposalVoterDesc, QueryVoteByProposalVoterRequest.fromPartial(request), metadata);
  }

  votesByProposal(request: DeepPartial<QueryVotesByProposalRequest>, metadata?: grpc.Metadata): Promise<QueryVotesByProposalResponse> {
    return this.rpc.unary(QueryVotesByProposalDesc, QueryVotesByProposalRequest.fromPartial(request), metadata);
  }

  votesByVoter(request: DeepPartial<QueryVotesByVoterRequest>, metadata?: grpc.Metadata): Promise<QueryVotesByVoterResponse> {
    return this.rpc.unary(QueryVotesByVoterDesc, QueryVotesByVoterRequest.fromPartial(request), metadata);
  }

  groupsByMember(request: DeepPartial<QueryGroupsByMemberRequest>, metadata?: grpc.Metadata): Promise<QueryGroupsByMemberResponse> {
    return this.rpc.unary(QueryGroupsByMemberDesc, QueryGroupsByMemberRequest.fromPartial(request), metadata);
  }

  tallyResult(request: DeepPartial<QueryTallyResultRequest>, metadata?: grpc.Metadata): Promise<QueryTallyResultResponse> {
    return this.rpc.unary(QueryTallyResultDesc, QueryTallyResultRequest.fromPartial(request), metadata);
  }

}