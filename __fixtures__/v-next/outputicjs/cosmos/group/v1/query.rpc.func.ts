import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
export const createGetGroupInfo = (clientResolver: RpcResolver) => buildQuery<QueryGroupInfoRequest, QueryGroupInfoResponse>({
  encode: QueryGroupInfoRequest.encode,
  decode: QueryGroupInfoResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "GroupInfo",
  clientResolver
});
export const useGetGroupInfo = buildUseQuery<QueryGroupInfoRequest, QueryGroupInfoResponse>({
  builderQueryFn: createGetGroupInfo,
  queryKeyPrefix: "GroupInfoQuery"
});
export const createGetGroupPolicyInfo = (clientResolver: RpcResolver) => buildQuery<QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse>({
  encode: QueryGroupPolicyInfoRequest.encode,
  decode: QueryGroupPolicyInfoResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "GroupPolicyInfo",
  clientResolver
});
export const useGetGroupPolicyInfo = buildUseQuery<QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse>({
  builderQueryFn: createGetGroupPolicyInfo,
  queryKeyPrefix: "GroupPolicyInfoQuery"
});
export const createGetGroupMembers = (clientResolver: RpcResolver) => buildQuery<QueryGroupMembersRequest, QueryGroupMembersResponse>({
  encode: QueryGroupMembersRequest.encode,
  decode: QueryGroupMembersResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "GroupMembers",
  clientResolver
});
export const useGetGroupMembers = buildUseQuery<QueryGroupMembersRequest, QueryGroupMembersResponse>({
  builderQueryFn: createGetGroupMembers,
  queryKeyPrefix: "GroupMembersQuery"
});
export const createGetGroupsByAdmin = (clientResolver: RpcResolver) => buildQuery<QueryGroupsByAdminRequest, QueryGroupsByAdminResponse>({
  encode: QueryGroupsByAdminRequest.encode,
  decode: QueryGroupsByAdminResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "GroupsByAdmin",
  clientResolver
});
export const useGetGroupsByAdmin = buildUseQuery<QueryGroupsByAdminRequest, QueryGroupsByAdminResponse>({
  builderQueryFn: createGetGroupsByAdmin,
  queryKeyPrefix: "GroupsByAdminQuery"
});
export const createGetGroupPoliciesByGroup = (clientResolver: RpcResolver) => buildQuery<QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse>({
  encode: QueryGroupPoliciesByGroupRequest.encode,
  decode: QueryGroupPoliciesByGroupResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "GroupPoliciesByGroup",
  clientResolver
});
export const useGetGroupPoliciesByGroup = buildUseQuery<QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse>({
  builderQueryFn: createGetGroupPoliciesByGroup,
  queryKeyPrefix: "GroupPoliciesByGroupQuery"
});
export const createGetGroupPoliciesByAdmin = (clientResolver: RpcResolver) => buildQuery<QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse>({
  encode: QueryGroupPoliciesByAdminRequest.encode,
  decode: QueryGroupPoliciesByAdminResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "GroupPoliciesByAdmin",
  clientResolver
});
export const useGetGroupPoliciesByAdmin = buildUseQuery<QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse>({
  builderQueryFn: createGetGroupPoliciesByAdmin,
  queryKeyPrefix: "GroupPoliciesByAdminQuery"
});
export const createGetProposal = (clientResolver: RpcResolver) => buildQuery<QueryProposalRequest, QueryProposalResponse>({
  encode: QueryProposalRequest.encode,
  decode: QueryProposalResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "Proposal",
  clientResolver
});
export const useGetProposal = buildUseQuery<QueryProposalRequest, QueryProposalResponse>({
  builderQueryFn: createGetProposal,
  queryKeyPrefix: "ProposalQuery"
});
export const createGetProposalsByGroupPolicy = (clientResolver: RpcResolver) => buildQuery<QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse>({
  encode: QueryProposalsByGroupPolicyRequest.encode,
  decode: QueryProposalsByGroupPolicyResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "ProposalsByGroupPolicy",
  clientResolver
});
export const useGetProposalsByGroupPolicy = buildUseQuery<QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse>({
  builderQueryFn: createGetProposalsByGroupPolicy,
  queryKeyPrefix: "ProposalsByGroupPolicyQuery"
});
export const createGetVoteByProposalVoter = (clientResolver: RpcResolver) => buildQuery<QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse>({
  encode: QueryVoteByProposalVoterRequest.encode,
  decode: QueryVoteByProposalVoterResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "VoteByProposalVoter",
  clientResolver
});
export const useGetVoteByProposalVoter = buildUseQuery<QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse>({
  builderQueryFn: createGetVoteByProposalVoter,
  queryKeyPrefix: "VoteByProposalVoterQuery"
});
export const createGetVotesByProposal = (clientResolver: RpcResolver) => buildQuery<QueryVotesByProposalRequest, QueryVotesByProposalResponse>({
  encode: QueryVotesByProposalRequest.encode,
  decode: QueryVotesByProposalResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "VotesByProposal",
  clientResolver
});
export const useGetVotesByProposal = buildUseQuery<QueryVotesByProposalRequest, QueryVotesByProposalResponse>({
  builderQueryFn: createGetVotesByProposal,
  queryKeyPrefix: "VotesByProposalQuery"
});
export const createGetVotesByVoter = (clientResolver: RpcResolver) => buildQuery<QueryVotesByVoterRequest, QueryVotesByVoterResponse>({
  encode: QueryVotesByVoterRequest.encode,
  decode: QueryVotesByVoterResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "VotesByVoter",
  clientResolver
});
export const useGetVotesByVoter = buildUseQuery<QueryVotesByVoterRequest, QueryVotesByVoterResponse>({
  builderQueryFn: createGetVotesByVoter,
  queryKeyPrefix: "VotesByVoterQuery"
});
export const createGetGroupsByMember = (clientResolver: RpcResolver) => buildQuery<QueryGroupsByMemberRequest, QueryGroupsByMemberResponse>({
  encode: QueryGroupsByMemberRequest.encode,
  decode: QueryGroupsByMemberResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "GroupsByMember",
  clientResolver
});
export const useGetGroupsByMember = buildUseQuery<QueryGroupsByMemberRequest, QueryGroupsByMemberResponse>({
  builderQueryFn: createGetGroupsByMember,
  queryKeyPrefix: "GroupsByMemberQuery"
});
export const createGetTallyResult = (clientResolver: RpcResolver) => buildQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  encode: QueryTallyResultRequest.encode,
  decode: QueryTallyResultResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "TallyResult",
  clientResolver
});
export const useGetTallyResult = buildUseQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  builderQueryFn: createGetTallyResult,
  queryKeyPrefix: "TallyResultQuery"
});