import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupInfoSDKType, GroupPolicyInfo, GroupPolicyInfoSDKType, GroupMember, GroupMemberSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, TallyResult, TallyResultSDKType } from "./types";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryGroupInfoRequest, QueryGroupInfoRequestSDKType, QueryGroupInfoResponse, QueryGroupInfoResponseSDKType, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoRequestSDKType, QueryGroupPolicyInfoResponse, QueryGroupPolicyInfoResponseSDKType, QueryGroupMembersRequest, QueryGroupMembersRequestSDKType, QueryGroupMembersResponse, QueryGroupMembersResponseSDKType, QueryGroupsByAdminRequest, QueryGroupsByAdminRequestSDKType, QueryGroupsByAdminResponse, QueryGroupsByAdminResponseSDKType, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupRequestSDKType, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByGroupResponseSDKType, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminRequestSDKType, QueryGroupPoliciesByAdminResponse, QueryGroupPoliciesByAdminResponseSDKType, QueryProposalRequest, QueryProposalRequestSDKType, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyRequestSDKType, QueryProposalsByGroupPolicyResponse, QueryProposalsByGroupPolicyResponseSDKType, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterRequestSDKType, QueryVoteByProposalVoterResponse, QueryVoteByProposalVoterResponseSDKType, QueryVotesByProposalRequest, QueryVotesByProposalRequestSDKType, QueryVotesByProposalResponse, QueryVotesByProposalResponseSDKType, QueryVotesByVoterRequest, QueryVotesByVoterRequestSDKType, QueryVotesByVoterResponse, QueryVotesByVoterResponseSDKType, QueryGroupsByMemberRequest, QueryGroupsByMemberRequestSDKType, QueryGroupsByMemberResponse, QueryGroupsByMemberResponseSDKType, QueryTallyResultRequest, QueryTallyResultRequestSDKType, QueryTallyResultResponse, QueryTallyResultResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/group/v1/query.proto', {
  state: () => {
    return {
      groupInfo: ({} as QueryGroupInfoResponse),
      groupPolicyInfo: ({} as QueryGroupPolicyInfoResponse),
      groupMembers: ({} as QueryGroupMembersResponse),
      groupsByAdmin: ({} as QueryGroupsByAdminResponse),
      groupPoliciesByGroup: ({} as QueryGroupPoliciesByGroupResponse),
      groupPoliciesByAdmin: ({} as QueryGroupPoliciesByAdminResponse),
      proposal: ({} as QueryProposalResponse),
      proposalsByGroupPolicy: ({} as QueryProposalsByGroupPolicyResponse),
      voteByProposalVoter: ({} as QueryVoteByProposalVoterResponse),
      votesByProposal: ({} as QueryVotesByProposalResponse),
      votesByVoter: ({} as QueryVotesByVoterResponse),
      groupsByMember: ({} as QueryGroupsByMemberResponse),
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
    async fetchGroupInfo(param : QueryGroupInfoRequest) {
      this.groupInfo = await this.lcdClient.groupInfo(param);
      return this.groupInfo;
    },

    async fetchGroupPolicyInfo(param : QueryGroupPolicyInfoRequest) {
      this.groupPolicyInfo = await this.lcdClient.groupPolicyInfo(param);
      return this.groupPolicyInfo;
    },

    async fetchGroupMembers(param : QueryGroupMembersRequest) {
      this.groupMembers = await this.lcdClient.groupMembers(param);
      return this.groupMembers;
    },

    async fetchGroupsByAdmin(param : QueryGroupsByAdminRequest) {
      this.groupsByAdmin = await this.lcdClient.groupsByAdmin(param);
      return this.groupsByAdmin;
    },

    async fetchGroupPoliciesByGroup(param : QueryGroupPoliciesByGroupRequest) {
      this.groupPoliciesByGroup = await this.lcdClient.groupPoliciesByGroup(param);
      return this.groupPoliciesByGroup;
    },

    async fetchGroupPoliciesByAdmin(param : QueryGroupPoliciesByAdminRequest) {
      this.groupPoliciesByAdmin = await this.lcdClient.groupPoliciesByAdmin(param);
      return this.groupPoliciesByAdmin;
    },

    async fetchProposal(param : QueryProposalRequest) {
      this.proposal = await this.lcdClient.proposal(param);
      return this.proposal;
    },

    async fetchProposalsByGroupPolicy(param : QueryProposalsByGroupPolicyRequest) {
      this.proposalsByGroupPolicy = await this.lcdClient.proposalsByGroupPolicy(param);
      return this.proposalsByGroupPolicy;
    },

    async fetchVoteByProposalVoter(param : QueryVoteByProposalVoterRequest) {
      this.voteByProposalVoter = await this.lcdClient.voteByProposalVoter(param);
      return this.voteByProposalVoter;
    },

    async fetchVotesByProposal(param : QueryVotesByProposalRequest) {
      this.votesByProposal = await this.lcdClient.votesByProposal(param);
      return this.votesByProposal;
    },

    async fetchVotesByVoter(param : QueryVotesByVoterRequest) {
      this.votesByVoter = await this.lcdClient.votesByVoter(param);
      return this.votesByVoter;
    },

    async fetchGroupsByMember(param : QueryGroupsByMemberRequest) {
      this.groupsByMember = await this.lcdClient.groupsByMember(param);
      return this.groupsByMember;
    },

    async fetchTallyResult(param : QueryTallyResultRequest) {
      this.tallyResult = await this.lcdClient.tallyResult(param);
      return this.tallyResult;
    }

  }
});