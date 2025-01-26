import { buildUseQuery } from "../../../react-query";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
import { createGetProposal, createGetProposals, createGetVote, createGetVotes, createGetParams, createGetDeposit, createGetDeposits, createGetTallyResult } from "./query.rpc.func";
export const useGetProposal = buildUseQuery<QueryProposalRequest, QueryProposalResponse>({
  builderQueryFn: createGetProposal,
  queryKeyPrefix: "ProposalQuery"
});
export const useGetProposals = buildUseQuery<QueryProposalsRequest, QueryProposalsResponse>({
  builderQueryFn: createGetProposals,
  queryKeyPrefix: "ProposalsQuery"
});
export const useGetVote = buildUseQuery<QueryVoteRequest, QueryVoteResponse>({
  builderQueryFn: createGetVote,
  queryKeyPrefix: "VoteQuery"
});
export const useGetVotes = buildUseQuery<QueryVotesRequest, QueryVotesResponse>({
  builderQueryFn: createGetVotes,
  queryKeyPrefix: "VotesQuery"
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetDeposit = buildUseQuery<QueryDepositRequest, QueryDepositResponse>({
  builderQueryFn: createGetDeposit,
  queryKeyPrefix: "DepositQuery"
});
export const useGetDeposits = buildUseQuery<QueryDepositsRequest, QueryDepositsResponse>({
  builderQueryFn: createGetDeposits,
  queryKeyPrefix: "DepositsQuery"
});
export const useGetTallyResult = buildUseQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  builderQueryFn: createGetTallyResult,
  queryKeyPrefix: "TallyResultQuery"
});