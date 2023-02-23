import { ProposalStatus, ProposalStatusSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, VotingParams, VotingParamsSDKType, DepositParams, DepositParamsSDKType, TallyParams, TallyParamsSDKType, Deposit, DepositSDKType, TallyResult, TallyResultSDKType } from "./gov";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryProposalRequest, QueryProposalRequestSDKType, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsRequest, QueryProposalsRequestSDKType, QueryProposalsResponse, QueryProposalsResponseSDKType, QueryVoteRequest, QueryVoteRequestSDKType, QueryVoteResponse, QueryVoteResponseSDKType, QueryVotesRequest, QueryVotesRequestSDKType, QueryVotesResponse, QueryVotesResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDepositRequest, QueryDepositRequestSDKType, QueryDepositResponse, QueryDepositResponseSDKType, QueryDepositsRequest, QueryDepositsRequestSDKType, QueryDepositsResponse, QueryDepositsResponseSDKType, QueryTallyResultRequest, QueryTallyResultRequestSDKType, QueryTallyResultResponse, QueryTallyResultResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/gov/v1beta1/query.proto', {
  state: () => {
    return {
      proposal: ({} as QueryProposalResponse),
      proposals: ({} as QueryProposalsResponse),
      vote: ({} as QueryVoteResponse),
      votes: ({} as QueryVotesResponse),
      params: ({} as QueryParamsResponse),
      deposit: ({} as QueryDepositResponse),
      deposits: ({} as QueryDepositsResponse),
      tallyResult: ({} as QueryTallyResultResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchProposal(param : QueryProposalRequest) {
      this.proposal = await this.lcdClient.proposal(param);
      return this.proposal;
    },

    async fetchProposals(param : QueryProposalsRequest) {
      this.proposals = await this.lcdClient.proposals(param);
      return this.proposals;
    },

    async fetchVote(param : QueryVoteRequest) {
      this.vote = await this.lcdClient.vote(param);
      return this.vote;
    },

    async fetchVotes(param : QueryVotesRequest) {
      this.votes = await this.lcdClient.votes(param);
      return this.votes;
    },

    async fetchParams(param : QueryParamsRequest) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    },

    async fetchDeposit(param : QueryDepositRequest) {
      this.deposit = await this.lcdClient.deposit(param);
      return this.deposit;
    },

    async fetchDeposits(param : QueryDepositsRequest) {
      this.deposits = await this.lcdClient.deposits(param);
      return this.deposits;
    },

    async fetchTallyResult(param : QueryTallyResultRequest) {
      this.tallyResult = await this.lcdClient.tallyResult(param);
      return this.tallyResult;
    }

  }
});