import { buildUseVueQuery } from "../../../vue-query";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
import { createGetProposal, createGetProposals, createGetVote, createGetVotes, createGetParams, createGetDeposit, createGetDeposits, createGetTallyResult } from "./query.rpc.func.ts";
export const useGetProposal = buildUseVueQuery<QueryProposalRequest, QueryProposalResponse>({
  builderQueryFn: createGetProposal,
  queryKeyPrefix: "ProposalQuery"
});
export const useGetProposals = buildUseVueQuery<QueryProposalsRequest, QueryProposalsResponse>({
  builderQueryFn: createGetProposals,
  queryKeyPrefix: "ProposalsQuery"
});
export const useGetVote = buildUseVueQuery<QueryVoteRequest, QueryVoteResponse>({
  builderQueryFn: createGetVote,
  queryKeyPrefix: "VoteQuery"
});
export const useGetVotes = buildUseVueQuery<QueryVotesRequest, QueryVotesResponse>({
  builderQueryFn: createGetVotes,
  queryKeyPrefix: "VotesQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetDeposit = buildUseVueQuery<QueryDepositRequest, QueryDepositResponse>({
  builderQueryFn: createGetDeposit,
  queryKeyPrefix: "DepositQuery"
});
export const useGetDeposits = buildUseVueQuery<QueryDepositsRequest, QueryDepositsResponse>({
  builderQueryFn: createGetDeposits,
  queryKeyPrefix: "DepositsQuery"
});
export const useGetTallyResult = buildUseVueQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  builderQueryFn: createGetTallyResult,
  queryKeyPrefix: "TallyResultQuery"
});