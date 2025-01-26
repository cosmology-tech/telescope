import { ProposalStatus, ProposalStatusSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, VotingParams, VotingParamsSDKType, DepositParams, DepositParamsSDKType, TallyParams, TallyParamsSDKType, Deposit, DepositSDKType, TallyResult, TallyResultSDKType } from "./gov";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { buildUseVueQuery } from "../../../vue-query";
import { QueryProposalRequest, QueryProposalRequestSDKType, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsRequest, QueryProposalsRequestSDKType, QueryProposalsResponse, QueryProposalsResponseSDKType, QueryVoteRequest, QueryVoteRequestSDKType, QueryVoteResponse, QueryVoteResponseSDKType, QueryVotesRequest, QueryVotesRequestSDKType, QueryVotesResponse, QueryVotesResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDepositRequest, QueryDepositRequestSDKType, QueryDepositResponse, QueryDepositResponseSDKType, QueryDepositsRequest, QueryDepositsRequestSDKType, QueryDepositsResponse, QueryDepositsResponseSDKType, QueryTallyResultRequest, QueryTallyResultRequestSDKType, QueryTallyResultResponse, QueryTallyResultResponseSDKType } from "./query";
import { createGetProposal, createGetProposals, buildHelperVote, buildHelperVotes, createGetParams, createCheckDeposit, createGoOverDeposits, createGetTallyResult } from "./query.rpc.func.ts";
export const useGetProposal = buildUseVueQuery<QueryProposalRequest, QueryProposalResponse>({
  builderQueryFn: createGetProposal,
  queryKeyPrefix: "ProposalQuery"
});
export const useGetProposals = buildUseVueQuery<QueryProposalsRequest, QueryProposalsResponse>({
  builderQueryFn: createGetProposals,
  queryKeyPrefix: "ProposalsQuery"
});
export const useHelperVote = buildUseVueQuery<QueryVoteRequest, QueryVoteResponse>({
  builderQueryFn: buildHelperVote,
  queryKeyPrefix: "VoteQuery"
});
export const useHelperVotes = buildUseVueQuery<QueryVotesRequest, QueryVotesResponse>({
  builderQueryFn: buildHelperVotes,
  queryKeyPrefix: "VotesQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useCheckDeposit = buildUseVueQuery<QueryDepositRequest, QueryDepositResponse>({
  builderQueryFn: createCheckDeposit,
  queryKeyPrefix: "DepositQuery"
});
export const useGoOverDeposits = buildUseVueQuery<QueryDepositsRequest, QueryDepositsResponse>({
  builderQueryFn: createGoOverDeposits,
  queryKeyPrefix: "DepositsQuery"
});
export const useGetTallyResult = buildUseVueQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  builderQueryFn: createGetTallyResult,
  queryKeyPrefix: "TallyResultQuery"
});