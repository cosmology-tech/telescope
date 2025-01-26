import { buildUseQuery } from "../../../react-query";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
import { createGetGroupInfo, createGetGroupPolicyInfo, createGetGroupMembers, createGetGroupsByAdmin, createGetGroupPoliciesByGroup, createGetGroupPoliciesByAdmin, createGetProposal, createGetProposalsByGroupPolicy, createGetVoteByProposalVoter, createGetVotesByProposal, createGetVotesByVoter, createGetGroupsByMember, createGetTallyResult } from "./query.rpc.func";
export const useGetGroupInfo = buildUseQuery<QueryGroupInfoRequest, QueryGroupInfoResponse>({
  builderQueryFn: createGetGroupInfo,
  queryKeyPrefix: "GroupInfoQuery"
});
export const useGetGroupPolicyInfo = buildUseQuery<QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse>({
  builderQueryFn: createGetGroupPolicyInfo,
  queryKeyPrefix: "GroupPolicyInfoQuery"
});
export const useGetGroupMembers = buildUseQuery<QueryGroupMembersRequest, QueryGroupMembersResponse>({
  builderQueryFn: createGetGroupMembers,
  queryKeyPrefix: "GroupMembersQuery"
});
export const useGetGroupsByAdmin = buildUseQuery<QueryGroupsByAdminRequest, QueryGroupsByAdminResponse>({
  builderQueryFn: createGetGroupsByAdmin,
  queryKeyPrefix: "GroupsByAdminQuery"
});
export const useGetGroupPoliciesByGroup = buildUseQuery<QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse>({
  builderQueryFn: createGetGroupPoliciesByGroup,
  queryKeyPrefix: "GroupPoliciesByGroupQuery"
});
export const useGetGroupPoliciesByAdmin = buildUseQuery<QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse>({
  builderQueryFn: createGetGroupPoliciesByAdmin,
  queryKeyPrefix: "GroupPoliciesByAdminQuery"
});
export const useGetProposal = buildUseQuery<QueryProposalRequest, QueryProposalResponse>({
  builderQueryFn: createGetProposal,
  queryKeyPrefix: "ProposalQuery"
});
export const useGetProposalsByGroupPolicy = buildUseQuery<QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse>({
  builderQueryFn: createGetProposalsByGroupPolicy,
  queryKeyPrefix: "ProposalsByGroupPolicyQuery"
});
export const useGetVoteByProposalVoter = buildUseQuery<QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse>({
  builderQueryFn: createGetVoteByProposalVoter,
  queryKeyPrefix: "VoteByProposalVoterQuery"
});
export const useGetVotesByProposal = buildUseQuery<QueryVotesByProposalRequest, QueryVotesByProposalResponse>({
  builderQueryFn: createGetVotesByProposal,
  queryKeyPrefix: "VotesByProposalQuery"
});
export const useGetVotesByVoter = buildUseQuery<QueryVotesByVoterRequest, QueryVotesByVoterResponse>({
  builderQueryFn: createGetVotesByVoter,
  queryKeyPrefix: "VotesByVoterQuery"
});
export const useGetGroupsByMember = buildUseQuery<QueryGroupsByMemberRequest, QueryGroupsByMemberResponse>({
  builderQueryFn: createGetGroupsByMember,
  queryKeyPrefix: "GroupsByMemberQuery"
});
export const useGetTallyResult = buildUseQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  builderQueryFn: createGetTallyResult,
  queryKeyPrefix: "TallyResultQuery"
});