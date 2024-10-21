import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
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
export const createGetProposals = (getRpcInstance: RpcResolver) => buildQuery<QueryProposalsRequest, QueryProposalsResponse>({
  encoder: QueryProposalsRequest.encode,
  decoder: QueryProposalsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Proposals",
  getRpcInstance: getRpcInstance
});
export const useGetProposals = buildUseQuery<QueryProposalsRequest, QueryProposalsResponse>({
  builderQueryFn: createGetProposals,
  queryKeyPrefix: "ProposalsQuery"
});
export const createGetVote = (getRpcInstance: RpcResolver) => buildQuery<QueryVoteRequest, QueryVoteResponse>({
  encoder: QueryVoteRequest.encode,
  decoder: QueryVoteResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Vote",
  getRpcInstance: getRpcInstance
});
export const useGetVote = buildUseQuery<QueryVoteRequest, QueryVoteResponse>({
  builderQueryFn: createGetVote,
  queryKeyPrefix: "VoteQuery"
});
export const createGetVotes = (getRpcInstance: RpcResolver) => buildQuery<QueryVotesRequest, QueryVotesResponse>({
  encoder: QueryVotesRequest.encode,
  decoder: QueryVotesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Votes",
  getRpcInstance: getRpcInstance
});
export const useGetVotes = buildUseQuery<QueryVotesRequest, QueryVotesResponse>({
  builderQueryFn: createGetVotes,
  queryKeyPrefix: "VotesQuery"
});
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encoder: QueryParamsRequest.encode,
  decoder: QueryParamsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetDeposit = (getRpcInstance: RpcResolver) => buildQuery<QueryDepositRequest, QueryDepositResponse>({
  encoder: QueryDepositRequest.encode,
  decoder: QueryDepositResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Deposit",
  getRpcInstance: getRpcInstance
});
export const useGetDeposit = buildUseQuery<QueryDepositRequest, QueryDepositResponse>({
  builderQueryFn: createGetDeposit,
  queryKeyPrefix: "DepositQuery"
});
export const createGetDeposits = (getRpcInstance: RpcResolver) => buildQuery<QueryDepositsRequest, QueryDepositsResponse>({
  encoder: QueryDepositsRequest.encode,
  decoder: QueryDepositsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Deposits",
  getRpcInstance: getRpcInstance
});
export const useGetDeposits = buildUseQuery<QueryDepositsRequest, QueryDepositsResponse>({
  builderQueryFn: createGetDeposits,
  queryKeyPrefix: "DepositsQuery"
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