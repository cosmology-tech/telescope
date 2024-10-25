import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupInfoSDKType, GroupPolicyInfo, GroupPolicyInfoSDKType, GroupMember, GroupMemberSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, TallyResult, TallyResultSDKType } from "./types";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryGroupInfoRequest, QueryGroupInfoRequestSDKType, QueryGroupInfoResponse, QueryGroupInfoResponseSDKType, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoRequestSDKType, QueryGroupPolicyInfoResponse, QueryGroupPolicyInfoResponseSDKType, QueryGroupMembersRequest, QueryGroupMembersRequestSDKType, QueryGroupMembersResponse, QueryGroupMembersResponseSDKType, QueryGroupsByAdminRequest, QueryGroupsByAdminRequestSDKType, QueryGroupsByAdminResponse, QueryGroupsByAdminResponseSDKType, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupRequestSDKType, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByGroupResponseSDKType, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminRequestSDKType, QueryGroupPoliciesByAdminResponse, QueryGroupPoliciesByAdminResponseSDKType, QueryProposalRequest, QueryProposalRequestSDKType, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyRequestSDKType, QueryProposalsByGroupPolicyResponse, QueryProposalsByGroupPolicyResponseSDKType, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterRequestSDKType, QueryVoteByProposalVoterResponse, QueryVoteByProposalVoterResponseSDKType, QueryVotesByProposalRequest, QueryVotesByProposalRequestSDKType, QueryVotesByProposalResponse, QueryVotesByProposalResponseSDKType, QueryVotesByVoterRequest, QueryVotesByVoterRequestSDKType, QueryVotesByVoterResponse, QueryVotesByVoterResponseSDKType, QueryGroupsByMemberRequest, QueryGroupsByMemberRequestSDKType, QueryGroupsByMemberResponse, QueryGroupsByMemberResponseSDKType, QueryTallyResultRequest, QueryTallyResultRequestSDKType, QueryTallyResultResponse, QueryTallyResultResponseSDKType } from "./query";
export const createGetGroupInfo = (getRpcInstance: RpcResolver) => buildQuery<QueryGroupInfoRequest, QueryGroupInfoResponse>({
  encode: QueryGroupInfoRequest.encode,
  decode: QueryGroupInfoResponse.decode,
  service: "cosmos.group.v1.Query",
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
  service: "cosmos.group.v1.Query",
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
  service: "cosmos.group.v1.Query",
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
  service: "cosmos.group.v1.Query",
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
  service: "cosmos.group.v1.Query",
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
  service: "cosmos.group.v1.Query",
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
  service: "cosmos.group.v1.Query",
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
  service: "cosmos.group.v1.Query",
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
  service: "cosmos.group.v1.Query",
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
  service: "cosmos.group.v1.Query",
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
  service: "cosmos.group.v1.Query",
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
  service: "cosmos.group.v1.Query",
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
  service: "cosmos.group.v1.Query",
  method: "TallyResult",
  getRpcInstance: getRpcInstance
});
export const useGetTallyResult = buildUseQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  builderQueryFn: createGetTallyResult,
  queryKeyPrefix: "TallyResultQuery"
});