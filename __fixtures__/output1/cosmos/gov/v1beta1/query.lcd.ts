import { ProposalStatus, Proposal, Vote, VotingParams, DepositParams, TallyParams, Deposit, TallyResult } from "./gov";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { LCDClient } from "@osmonauts/lcd";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Proposal queries proposal details based on ProposalID. */
  async proposal(params: QueryProposalRequest): Promise<QueryProposalResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.proposalId !== "undefined") {
      options.params.proposal_id = params.proposalId;
    }

    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposal_id}`;
    return await this.request(endpoint, options);
  }

  /* Proposals queries all proposals based on given status. */
  async proposals(params: QueryProposalsRequest): Promise<QueryProposalsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.proposalStatus !== "undefined") {
      options.params.proposal_status = params.proposalStatus;
    }

    if (typeof params?.voter !== "undefined") {
      options.params.voter = params.voter;
    }

    if (typeof params?.depositor !== "undefined") {
      options.params.depositor = params.depositor;
    }

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `cosmos/gov/v1beta1/proposals`;
    return await this.request(endpoint, options);
  }

  /* Vote queries voted information based on proposalID, voterAddr. */
  async vote(params: QueryVoteRequest): Promise<QueryVoteResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.proposalId !== "undefined") {
      options.params.proposal_id = params.proposalId;
    }

    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposal_id}votes/${params.voter}`;
    return await this.request(endpoint, options);
  }

  /* Votes queries votes of a given proposal. */
  async votes(params: QueryVotesRequest): Promise<QueryVotesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.proposalId !== "undefined") {
      options.params.proposal_id = params.proposalId;
    }

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposal_id}/votes`;
    return await this.request(endpoint, options);
  }

  /* Params queries all parameters of the gov module. */
  async params(params: QueryParamsRequest): Promise<QueryParamsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.paramsType !== "undefined") {
      options.params.params_type = params.paramsType;
    }

    const endpoint = `cosmos/gov/v1beta1/params/${params.params_type}`;
    return await this.request(endpoint, options);
  }

  /* Deposit queries single deposit information based proposalID, depositAddr. */
  async deposit(params: QueryDepositRequest): Promise<QueryDepositResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.proposalId !== "undefined") {
      options.params.proposal_id = params.proposalId;
    }

    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposal_id}deposits/${params.depositor}`;
    return await this.request(endpoint, options);
  }

  /* Deposits queries all deposits of a single proposal. */
  async deposits(params: QueryDepositsRequest): Promise<QueryDepositsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.proposalId !== "undefined") {
      options.params.proposal_id = params.proposalId;
    }

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposal_id}/deposits`;
    return await this.request(endpoint, options);
  }

  /* TallyResult queries the tally of a proposal vote. */
  async tallyResult(params: QueryTallyResultRequest): Promise<QueryTallyResultResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.proposalId !== "undefined") {
      options.params.proposal_id = params.proposalId;
    }

    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposal_id}/tally`;
    return await this.request(endpoint, options);
  }

}