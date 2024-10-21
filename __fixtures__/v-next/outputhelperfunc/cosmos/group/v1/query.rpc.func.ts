import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupInfoSDKType, GroupPolicyInfo, GroupPolicyInfoSDKType, GroupMember, GroupMemberSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, TallyResult, TallyResultSDKType } from "./types";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryGroupInfoRequest, QueryGroupInfoRequestSDKType, QueryGroupInfoResponse, QueryGroupInfoResponseSDKType, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoRequestSDKType, QueryGroupPolicyInfoResponse, QueryGroupPolicyInfoResponseSDKType, QueryGroupMembersRequest, QueryGroupMembersRequestSDKType, QueryGroupMembersResponse, QueryGroupMembersResponseSDKType, QueryGroupsByAdminRequest, QueryGroupsByAdminRequestSDKType, QueryGroupsByAdminResponse, QueryGroupsByAdminResponseSDKType, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupRequestSDKType, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByGroupResponseSDKType, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminRequestSDKType, QueryGroupPoliciesByAdminResponse, QueryGroupPoliciesByAdminResponseSDKType, QueryProposalRequest, QueryProposalRequestSDKType, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyRequestSDKType, QueryProposalsByGroupPolicyResponse, QueryProposalsByGroupPolicyResponseSDKType, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterRequestSDKType, QueryVoteByProposalVoterResponse, QueryVoteByProposalVoterResponseSDKType, QueryVotesByProposalRequest, QueryVotesByProposalRequestSDKType, QueryVotesByProposalResponse, QueryVotesByProposalResponseSDKType, QueryVotesByVoterRequest, QueryVotesByVoterRequestSDKType, QueryVotesByVoterResponse, QueryVotesByVoterResponseSDKType, QueryGroupsByMemberRequest, QueryGroupsByMemberRequestSDKType, QueryGroupsByMemberResponse, QueryGroupsByMemberResponseSDKType, QueryTallyResultRequest, QueryTallyResultRequestSDKType, QueryTallyResultResponse, QueryTallyResultResponseSDKType } from "./query";
export const createGetGroupInfo = (getRpcInstance: RpcResolver) => buildQuery<QueryGroupInfoRequest, QueryGroupInfoResponse>({
  encoder: QueryGroupInfoRequest.encode,
  decoder: QueryGroupInfoResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GroupInfo",
  getRpcInstance: getRpcInstance
});
export const useGetGroupInfo = buildUseQuery<QueryGroupInfoRequest, QueryGroupInfoResponse>({
  builderQueryFn: createGetGroupInfo,
  queryKeyPrefix: "GroupInfoQuery"
});
export const createGetGroupPolicyInfo = (getRpcInstance: RpcResolver) => buildQuery<QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse>({
  encoder: QueryGroupPolicyInfoRequest.encode,
  decoder: QueryGroupPolicyInfoResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GroupPolicyInfo",
  getRpcInstance: getRpcInstance
});
export const useGetGroupPolicyInfo = buildUseQuery<QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse>({
  builderQueryFn: createGetGroupPolicyInfo,
  queryKeyPrefix: "GroupPolicyInfoQuery"
});
export const createGetGroupMembers = (getRpcInstance: RpcResolver) => buildQuery<QueryGroupMembersRequest, QueryGroupMembersResponse>({
  encoder: QueryGroupMembersRequest.encode,
  decoder: QueryGroupMembersResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GroupMembers",
  getRpcInstance: getRpcInstance
});
export const useGetGroupMembers = buildUseQuery<QueryGroupMembersRequest, QueryGroupMembersResponse>({
  builderQueryFn: createGetGroupMembers,
  queryKeyPrefix: "GroupMembersQuery"
});
export const createGetGroupsByAdmin = (getRpcInstance: RpcResolver) => buildQuery<QueryGroupsByAdminRequest, QueryGroupsByAdminResponse>({
  encoder: QueryGroupsByAdminRequest.encode,
  decoder: QueryGroupsByAdminResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GroupsByAdmin",
  getRpcInstance: getRpcInstance
});
export const useGetGroupsByAdmin = buildUseQuery<QueryGroupsByAdminRequest, QueryGroupsByAdminResponse>({
  builderQueryFn: createGetGroupsByAdmin,
  queryKeyPrefix: "GroupsByAdminQuery"
});
export const createGetGroupPoliciesByGroup = (getRpcInstance: RpcResolver) => buildQuery<QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse>({
  encoder: QueryGroupPoliciesByGroupRequest.encode,
  decoder: QueryGroupPoliciesByGroupResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GroupPoliciesByGroup",
  getRpcInstance: getRpcInstance
});
export const useGetGroupPoliciesByGroup = buildUseQuery<QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse>({
  builderQueryFn: createGetGroupPoliciesByGroup,
  queryKeyPrefix: "GroupPoliciesByGroupQuery"
});
export const createGetGroupPoliciesByAdmin = (getRpcInstance: RpcResolver) => buildQuery<QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse>({
  encoder: QueryGroupPoliciesByAdminRequest.encode,
  decoder: QueryGroupPoliciesByAdminResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GroupPoliciesByAdmin",
  getRpcInstance: getRpcInstance
});
export const useGetGroupPoliciesByAdmin = buildUseQuery<QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse>({
  builderQueryFn: createGetGroupPoliciesByAdmin,
  queryKeyPrefix: "GroupPoliciesByAdminQuery"
});
export const createGetProposal = (getRpcInstance: RpcResolver) => buildQuery<QueryProposalRequest, QueryProposalResponse>({
  encoder: QueryProposalRequest.encode,
  decoder: QueryProposalResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Proposal",
  getRpcInstance: getRpcInstance
});
export const useGetProposal = buildUseQuery<QueryProposalRequest, QueryProposalResponse>({
  builderQueryFn: createGetProposal,
  queryKeyPrefix: "ProposalQuery"
});
export const createGetProposalsByGroupPolicy = (getRpcInstance: RpcResolver) => buildQuery<QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse>({
  encoder: QueryProposalsByGroupPolicyRequest.encode,
  decoder: QueryProposalsByGroupPolicyResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ProposalsByGroupPolicy",
  getRpcInstance: getRpcInstance
});
export const useGetProposalsByGroupPolicy = buildUseQuery<QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse>({
  builderQueryFn: createGetProposalsByGroupPolicy,
  queryKeyPrefix: "ProposalsByGroupPolicyQuery"
});
export const createGetVoteByProposalVoter = (getRpcInstance: RpcResolver) => buildQuery<QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse>({
  encoder: QueryVoteByProposalVoterRequest.encode,
  decoder: QueryVoteByProposalVoterResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "VoteByProposalVoter",
  getRpcInstance: getRpcInstance
});
export const useGetVoteByProposalVoter = buildUseQuery<QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse>({
  builderQueryFn: createGetVoteByProposalVoter,
  queryKeyPrefix: "VoteByProposalVoterQuery"
});
export const createGetVotesByProposal = (getRpcInstance: RpcResolver) => buildQuery<QueryVotesByProposalRequest, QueryVotesByProposalResponse>({
  encoder: QueryVotesByProposalRequest.encode,
  decoder: QueryVotesByProposalResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "VotesByProposal",
  getRpcInstance: getRpcInstance
});
export const useGetVotesByProposal = buildUseQuery<QueryVotesByProposalRequest, QueryVotesByProposalResponse>({
  builderQueryFn: createGetVotesByProposal,
  queryKeyPrefix: "VotesByProposalQuery"
});
export const createGetVotesByVoter = (getRpcInstance: RpcResolver) => buildQuery<QueryVotesByVoterRequest, QueryVotesByVoterResponse>({
  encoder: QueryVotesByVoterRequest.encode,
  decoder: QueryVotesByVoterResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "VotesByVoter",
  getRpcInstance: getRpcInstance
});
export const useGetVotesByVoter = buildUseQuery<QueryVotesByVoterRequest, QueryVotesByVoterResponse>({
  builderQueryFn: createGetVotesByVoter,
  queryKeyPrefix: "VotesByVoterQuery"
});
export const createGetGroupsByMember = (getRpcInstance: RpcResolver) => buildQuery<QueryGroupsByMemberRequest, QueryGroupsByMemberResponse>({
  encoder: QueryGroupsByMemberRequest.encode,
  decoder: QueryGroupsByMemberResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GroupsByMember",
  getRpcInstance: getRpcInstance
});
export const useGetGroupsByMember = buildUseQuery<QueryGroupsByMemberRequest, QueryGroupsByMemberResponse>({
  builderQueryFn: createGetGroupsByMember,
  queryKeyPrefix: "GroupsByMemberQuery"
});
export const createGetTallyResult = (getRpcInstance: RpcResolver) => buildQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  encoder: QueryTallyResultRequest.encode,
  decoder: QueryTallyResultResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "TallyResult",
  getRpcInstance: getRpcInstance
});
export const useGetTallyResult = buildUseQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  builderQueryFn: createGetTallyResult,
  queryKeyPrefix: "TallyResultQuery"
});