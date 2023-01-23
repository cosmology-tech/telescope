import { ProposalStatus, ProposalStatusSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, VotingParams, VotingParamsSDKType, DepositParams, DepositParamsSDKType, TallyParams, TallyParamsSDKType, Deposit, DepositSDKType, TallyResult, TallyResultSDKType } from "./gov";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import * as fm from "../../../grpc-gateway";
import { QueryProposalRequest, QueryProposalRequestSDKType, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsRequest, QueryProposalsRequestSDKType, QueryProposalsResponse, QueryProposalsResponseSDKType, QueryVoteRequest, QueryVoteRequestSDKType, QueryVoteResponse, QueryVoteResponseSDKType, QueryVotesRequest, QueryVotesRequestSDKType, QueryVotesResponse, QueryVotesResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDepositRequest, QueryDepositRequestSDKType, QueryDepositResponse, QueryDepositResponseSDKType, QueryDepositsRequest, QueryDepositsRequestSDKType, QueryDepositsResponse, QueryDepositsResponseSDKType, QueryTallyResultRequest, QueryTallyResultRequestSDKType, QueryTallyResultResponse, QueryTallyResultResponseSDKType } from "./query";
export class Query {
  static Proposal(request: QueryProposalRequest, initRequest?: fm.InitReq): Promise<QueryProposalResponse> {
    return fm.fetchReq(`/cosmos/gov/v1/proposals/${request["proposal_id"]}?${fm.renderURLSearchParams(request, ["proposal_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Proposals(request: QueryProposalsRequest, initRequest?: fm.InitReq): Promise<QueryProposalsResponse> {
    return fm.fetchReq(`/cosmos/gov/v1/proposals?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Vote(request: QueryVoteRequest, initRequest?: fm.InitReq): Promise<QueryVoteResponse> {
    return fm.fetchReq(`/cosmos/gov/v1/proposals/${request["proposal_id"]}/votes/{voter}?${fm.renderURLSearchParams(request, ["proposal_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Votes(request: QueryVotesRequest, initRequest?: fm.InitReq): Promise<QueryVotesResponse> {
    return fm.fetchReq(`/cosmos/gov/v1/proposals/${request["proposal_id"]}/votes?${fm.renderURLSearchParams(request, ["proposal_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/gov/v1/params/${request["params_type"]}?${fm.renderURLSearchParams(request, ["params_type"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Deposit(request: QueryDepositRequest, initRequest?: fm.InitReq): Promise<QueryDepositResponse> {
    return fm.fetchReq(`/cosmos/gov/v1/proposals/${request["proposal_id"]}/deposits/{depositor}?${fm.renderURLSearchParams(request, ["proposal_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Deposits(request: QueryDepositsRequest, initRequest?: fm.InitReq): Promise<QueryDepositsResponse> {
    return fm.fetchReq(`/cosmos/gov/v1/proposals/${request["proposal_id"]}/deposits?${fm.renderURLSearchParams(request, ["proposal_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static TallyResult(request: QueryTallyResultRequest, initRequest?: fm.InitReq): Promise<QueryTallyResultResponse> {
    return fm.fetchReq(`/cosmos/gov/v1/proposals/${request["proposal_id"]}/tally?${fm.renderURLSearchParams(request, ["proposal_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

}