import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
export const createGetGroupInfo = (getRpcInstance: RpcResolver) => buildQuery<QueryGroupInfoRequest, QueryGroupInfoResponse>({
  encode: QueryGroupInfoRequest.encode,
  decode: QueryGroupInfoResponse.decode,
  service: "cosmos.group.v1.GroupInfo",
  method: "GroupInfo",
  getRpcInstance: getRpcInstance
});
export const useGetGroupInfo = buildUseQuery<QueryGroupInfoRequest, QueryGroupInfoResponse>({
  builderQueryFn: createGetGroupInfo,
  queryKeyPrefix: "GroupInfoQuery"
});
export const createGetGroupPolicyInfo = (getRpcInstance: RpcResolver) => buildQuery<QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse>({
  encode: QueryGroupPolicyInfoRequest.encode,
  decode: QueryGroupPolicyInfoResponse.decode,
  service: "cosmos.group.v1.GroupPolicyInfo",
  method: "GroupPolicyInfo",
  getRpcInstance: getRpcInstance
});
export const useGetGroupPolicyInfo = buildUseQuery<QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse>({
  builderQueryFn: createGetGroupPolicyInfo,
  queryKeyPrefix: "GroupPolicyInfoQuery"
});
export const createGetGroupMembers = (getRpcInstance: RpcResolver) => buildQuery<QueryGroupMembersRequest, QueryGroupMembersResponse>({
  encode: QueryGroupMembersRequest.encode,
  decode: QueryGroupMembersResponse.decode,
  service: "cosmos.group.v1.GroupMembers",
  method: "GroupMembers",
  getRpcInstance: getRpcInstance
});
export const useGetGroupMembers = buildUseQuery<QueryGroupMembersRequest, QueryGroupMembersResponse>({
  builderQueryFn: createGetGroupMembers,
  queryKeyPrefix: "GroupMembersQuery"
});
export const createGetGroupsByAdmin = (getRpcInstance: RpcResolver) => buildQuery<QueryGroupsByAdminRequest, QueryGroupsByAdminResponse>({
  encode: QueryGroupsByAdminRequest.encode,
  decode: QueryGroupsByAdminResponse.decode,
  service: "cosmos.group.v1.GroupsByAdmin",
  method: "GroupsByAdmin",
  getRpcInstance: getRpcInstance
});
export const useGetGroupsByAdmin = buildUseQuery<QueryGroupsByAdminRequest, QueryGroupsByAdminResponse>({
  builderQueryFn: createGetGroupsByAdmin,
  queryKeyPrefix: "GroupsByAdminQuery"
});
export const createGetGroupPoliciesByGroup = (getRpcInstance: RpcResolver) => buildQuery<QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse>({
  encode: QueryGroupPoliciesByGroupRequest.encode,
  decode: QueryGroupPoliciesByGroupResponse.decode,
  service: "cosmos.group.v1.GroupPoliciesByGroup",
  method: "GroupPoliciesByGroup",
  getRpcInstance: getRpcInstance
});
export const useGetGroupPoliciesByGroup = buildUseQuery<QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse>({
  builderQueryFn: createGetGroupPoliciesByGroup,
  queryKeyPrefix: "GroupPoliciesByGroupQuery"
});
export const createGetGroupPoliciesByAdmin = (getRpcInstance: RpcResolver) => buildQuery<QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse>({
  encode: QueryGroupPoliciesByAdminRequest.encode,
  decode: QueryGroupPoliciesByAdminResponse.decode,
  service: "cosmos.group.v1.GroupPoliciesByAdmin",
  method: "GroupPoliciesByAdmin",
  getRpcInstance: getRpcInstance
});
export const useGetGroupPoliciesByAdmin = buildUseQuery<QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse>({
  builderQueryFn: createGetGroupPoliciesByAdmin,
  queryKeyPrefix: "GroupPoliciesByAdminQuery"
});
export const createGetProposal = (getRpcInstance: RpcResolver) => buildQuery<QueryProposalRequest, QueryProposalResponse>({
  encode: QueryProposalRequest.encode,
  decode: QueryProposalResponse.decode,
  service: "cosmos.group.v1.Proposal",
  method: "Proposal",
  getRpcInstance: getRpcInstance
});
export const useGetProposal = buildUseQuery<QueryProposalRequest, QueryProposalResponse>({
  builderQueryFn: createGetProposal,
  queryKeyPrefix: "ProposalQuery"
});
export const createGetProposalsByGroupPolicy = (getRpcInstance: RpcResolver) => buildQuery<QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse>({
  encode: QueryProposalsByGroupPolicyRequest.encode,
  decode: QueryProposalsByGroupPolicyResponse.decode,
  service: "cosmos.group.v1.ProposalsByGroupPolicy",
  method: "ProposalsByGroupPolicy",
  getRpcInstance: getRpcInstance
});
export const useGetProposalsByGroupPolicy = buildUseQuery<QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse>({
  builderQueryFn: createGetProposalsByGroupPolicy,
  queryKeyPrefix: "ProposalsByGroupPolicyQuery"
});
export const createGetVoteByProposalVoter = (getRpcInstance: RpcResolver) => buildQuery<QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse>({
  encode: QueryVoteByProposalVoterRequest.encode,
  decode: QueryVoteByProposalVoterResponse.decode,
  service: "cosmos.group.v1.VoteByProposalVoter",
  method: "VoteByProposalVoter",
  getRpcInstance: getRpcInstance
});
export const useGetVoteByProposalVoter = buildUseQuery<QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse>({
  builderQueryFn: createGetVoteByProposalVoter,
  queryKeyPrefix: "VoteByProposalVoterQuery"
});
export const createGetVotesByProposal = (getRpcInstance: RpcResolver) => buildQuery<QueryVotesByProposalRequest, QueryVotesByProposalResponse>({
  encode: QueryVotesByProposalRequest.encode,
  decode: QueryVotesByProposalResponse.decode,
  service: "cosmos.group.v1.VotesByProposal",
  method: "VotesByProposal",
  getRpcInstance: getRpcInstance
});
export const useGetVotesByProposal = buildUseQuery<QueryVotesByProposalRequest, QueryVotesByProposalResponse>({
  builderQueryFn: createGetVotesByProposal,
  queryKeyPrefix: "VotesByProposalQuery"
});
export const createGetVotesByVoter = (getRpcInstance: RpcResolver) => buildQuery<QueryVotesByVoterRequest, QueryVotesByVoterResponse>({
  encode: QueryVotesByVoterRequest.encode,
  decode: QueryVotesByVoterResponse.decode,
  service: "cosmos.group.v1.VotesByVoter",
  method: "VotesByVoter",
  getRpcInstance: getRpcInstance
});
export const useGetVotesByVoter = buildUseQuery<QueryVotesByVoterRequest, QueryVotesByVoterResponse>({
  builderQueryFn: createGetVotesByVoter,
  queryKeyPrefix: "VotesByVoterQuery"
});
export const createGetGroupsByMember = (getRpcInstance: RpcResolver) => buildQuery<QueryGroupsByMemberRequest, QueryGroupsByMemberResponse>({
  encode: QueryGroupsByMemberRequest.encode,
  decode: QueryGroupsByMemberResponse.decode,
  service: "cosmos.group.v1.GroupsByMember",
  method: "GroupsByMember",
  getRpcInstance: getRpcInstance
});
export const useGetGroupsByMember = buildUseQuery<QueryGroupsByMemberRequest, QueryGroupsByMemberResponse>({
  builderQueryFn: createGetGroupsByMember,
  queryKeyPrefix: "GroupsByMemberQuery"
});
export const createGetTallyResult = (getRpcInstance: RpcResolver) => buildQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  encode: QueryTallyResultRequest.encode,
  decode: QueryTallyResultResponse.decode,
  service: "cosmos.group.v1.TallyResult",
  method: "TallyResult",
  getRpcInstance: getRpcInstance
});
export const useGetTallyResult = buildUseQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  builderQueryFn: createGetTallyResult,
  queryKeyPrefix: "TallyResultQuery"
});