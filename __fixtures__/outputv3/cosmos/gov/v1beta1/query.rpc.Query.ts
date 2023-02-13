import { ProposalStatus, ProposalStatusSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, VotingParams, VotingParamsSDKType, DepositParams, DepositParamsSDKType, TallyParams, TallyParamsSDKType, Deposit, DepositSDKType, TallyResult, TallyResultSDKType } from "./gov";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import * as fm from "../../../grpc-gateway";
import { QueryProposalRequest, QueryProposalRequestSDKType, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsRequest, QueryProposalsRequestSDKType, QueryProposalsResponse, QueryProposalsResponseSDKType, QueryVoteRequest, QueryVoteRequestSDKType, QueryVoteResponse, QueryVoteResponseSDKType, QueryVotesRequest, QueryVotesRequestSDKType, QueryVotesResponse, QueryVotesResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDepositRequest, QueryDepositRequestSDKType, QueryDepositResponse, QueryDepositResponseSDKType, QueryDepositsRequest, QueryDepositsRequestSDKType, QueryDepositsResponse, QueryDepositsResponseSDKType, QueryTallyResultRequest, QueryTallyResultRequestSDKType, QueryTallyResultResponse, QueryTallyResultResponseSDKType } from "./query";
export class Query {
  /** Proposal queries proposal details based on ProposalID. */
  static Proposal(request: QueryProposalRequest, initRequest?: fm.InitReq): Promise<QueryProposalResponse> {
    return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}?${fm.renderURLSearchParams({ ...request
    }, ["proposal_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Proposals queries all proposals based on given status. */
  static Proposals(request: QueryProposalsRequest, initRequest?: fm.InitReq): Promise<QueryProposalsResponse> {
    return fm.fetchReq(`/cosmos/gov/v1beta1/proposals?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Vote queries voted information based on proposalID, voterAddr. */
  static Vote(request: QueryVoteRequest, initRequest?: fm.InitReq): Promise<QueryVoteResponse> {
    return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}/votes/{voter}?${fm.renderURLSearchParams({ ...request
    }, ["proposal_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Votes queries votes of a given proposal. */
  static Votes(request: QueryVotesRequest, initRequest?: fm.InitReq): Promise<QueryVotesResponse> {
    return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}/votes?${fm.renderURLSearchParams({ ...request
    }, ["proposal_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Params queries all parameters of the gov module. */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/gov/v1beta1/params/${request["params_type"]}?${fm.renderURLSearchParams({ ...request
    }, ["params_type"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Deposit queries single deposit information based proposalID, depositAddr. */
  static Deposit(request: QueryDepositRequest, initRequest?: fm.InitReq): Promise<QueryDepositResponse> {
    return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}/deposits/{depositor}?${fm.renderURLSearchParams({ ...request
    }, ["proposal_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Deposits queries all deposits of a single proposal. */
  static Deposits(request: QueryDepositsRequest, initRequest?: fm.InitReq): Promise<QueryDepositsResponse> {
    return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}/deposits?${fm.renderURLSearchParams({ ...request
    }, ["proposal_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** TallyResult queries the tally of a proposal vote. */
  static TallyResult(request: QueryTallyResultRequest, initRequest?: fm.InitReq): Promise<QueryTallyResultResponse> {
    return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}/tally?${fm.renderURLSearchParams({ ...request
    }, ["proposal_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

}