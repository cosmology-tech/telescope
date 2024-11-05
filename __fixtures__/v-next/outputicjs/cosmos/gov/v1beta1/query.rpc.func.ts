import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
export const createGetProposal = (clientResolver?: RpcResolver) => buildQuery<QueryProposalRequest, QueryProposalResponse>({
  encode: QueryProposalRequest.encode,
  decode: QueryProposalResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Proposal",
  clientResolver
});
export const useGetProposal = buildUseQuery<QueryProposalRequest, QueryProposalResponse>({
  builderQueryFn: createGetProposal,
  queryKeyPrefix: "ProposalQuery"
});
export const createGetProposals = (clientResolver?: RpcResolver) => buildQuery<QueryProposalsRequest, QueryProposalsResponse>({
  encode: QueryProposalsRequest.encode,
  decode: QueryProposalsResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Proposals",
  clientResolver
});
export const useGetProposals = buildUseQuery<QueryProposalsRequest, QueryProposalsResponse>({
  builderQueryFn: createGetProposals,
  queryKeyPrefix: "ProposalsQuery"
});
export const createGetVote = (clientResolver?: RpcResolver) => buildQuery<QueryVoteRequest, QueryVoteResponse>({
  encode: QueryVoteRequest.encode,
  decode: QueryVoteResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Vote",
  clientResolver
});
export const useGetVote = buildUseQuery<QueryVoteRequest, QueryVoteResponse>({
  builderQueryFn: createGetVote,
  queryKeyPrefix: "VoteQuery"
});
export const createGetVotes = (clientResolver?: RpcResolver) => buildQuery<QueryVotesRequest, QueryVotesResponse>({
  encode: QueryVotesRequest.encode,
  decode: QueryVotesResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Votes",
  clientResolver
});
export const useGetVotes = buildUseQuery<QueryVotesRequest, QueryVotesResponse>({
  builderQueryFn: createGetVotes,
  queryKeyPrefix: "VotesQuery"
});
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Params",
  clientResolver
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetDeposit = (clientResolver?: RpcResolver) => buildQuery<QueryDepositRequest, QueryDepositResponse>({
  encode: QueryDepositRequest.encode,
  decode: QueryDepositResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Deposit",
  clientResolver
});
export const useGetDeposit = buildUseQuery<QueryDepositRequest, QueryDepositResponse>({
  builderQueryFn: createGetDeposit,
  queryKeyPrefix: "DepositQuery"
});
export const createGetDeposits = (clientResolver?: RpcResolver) => buildQuery<QueryDepositsRequest, QueryDepositsResponse>({
  encode: QueryDepositsRequest.encode,
  decode: QueryDepositsResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Deposits",
  clientResolver
});
export const useGetDeposits = buildUseQuery<QueryDepositsRequest, QueryDepositsResponse>({
  builderQueryFn: createGetDeposits,
  queryKeyPrefix: "DepositsQuery"
});
export const createGetTallyResult = (clientResolver?: RpcResolver) => buildQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  encode: QueryTallyResultRequest.encode,
  decode: QueryTallyResultResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "TallyResult",
  clientResolver
});
export const useGetTallyResult = buildUseQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  builderQueryFn: createGetTallyResult,
  queryKeyPrefix: "TallyResultQuery"
});