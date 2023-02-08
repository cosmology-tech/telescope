import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupInfoSDKType, GroupPolicyInfo, GroupPolicyInfoSDKType, GroupMember, GroupMemberSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, TallyResult, TallyResultSDKType } from "./types";
import * as fm from "../../../grpc-gateway";
import { QueryGroupInfoRequest, QueryGroupInfoRequestSDKType, QueryGroupInfoResponse, QueryGroupInfoResponseSDKType, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoRequestSDKType, QueryGroupPolicyInfoResponse, QueryGroupPolicyInfoResponseSDKType, QueryGroupMembersRequest, QueryGroupMembersRequestSDKType, QueryGroupMembersResponse, QueryGroupMembersResponseSDKType, QueryGroupsByAdminRequest, QueryGroupsByAdminRequestSDKType, QueryGroupsByAdminResponse, QueryGroupsByAdminResponseSDKType, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupRequestSDKType, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByGroupResponseSDKType, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminRequestSDKType, QueryGroupPoliciesByAdminResponse, QueryGroupPoliciesByAdminResponseSDKType, QueryProposalRequest, QueryProposalRequestSDKType, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyRequestSDKType, QueryProposalsByGroupPolicyResponse, QueryProposalsByGroupPolicyResponseSDKType, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterRequestSDKType, QueryVoteByProposalVoterResponse, QueryVoteByProposalVoterResponseSDKType, QueryVotesByProposalRequest, QueryVotesByProposalRequestSDKType, QueryVotesByProposalResponse, QueryVotesByProposalResponseSDKType, QueryVotesByVoterRequest, QueryVotesByVoterRequestSDKType, QueryVotesByVoterResponse, QueryVotesByVoterResponseSDKType, QueryGroupsByMemberRequest, QueryGroupsByMemberRequestSDKType, QueryGroupsByMemberResponse, QueryGroupsByMemberResponseSDKType, QueryTallyResultRequest, QueryTallyResultRequestSDKType, QueryTallyResultResponse, QueryTallyResultResponseSDKType } from "./query";
export class Query {
  static GroupInfo(request: QueryGroupInfoRequest, initRequest?: fm.InitReq): Promise<QueryGroupInfoResponse> {
    return fm.fetchReq(`/cosmos/group/v1/group_info/${request["group_id"]}?${fm.renderURLSearchParams({ ...request
    }, ["group_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static GroupPolicyInfo(request: QueryGroupPolicyInfoRequest, initRequest?: fm.InitReq): Promise<QueryGroupPolicyInfoResponse> {
    return fm.fetchReq(`/cosmos/group/v1/group_policy_info/${request["address"]}?${fm.renderURLSearchParams({ ...request
    }, ["address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static GroupMembers(request: QueryGroupMembersRequest, initRequest?: fm.InitReq): Promise<QueryGroupMembersResponse> {
    return fm.fetchReq(`/cosmos/group/v1/group_members/${request["group_id"]}?${fm.renderURLSearchParams({ ...request
    }, ["group_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static GroupsByAdmin(request: QueryGroupsByAdminRequest, initRequest?: fm.InitReq): Promise<QueryGroupsByAdminResponse> {
    return fm.fetchReq(`/cosmos/group/v1/groups_by_admin/${request["admin"]}?${fm.renderURLSearchParams({ ...request
    }, ["admin"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static GroupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest, initRequest?: fm.InitReq): Promise<QueryGroupPoliciesByGroupResponse> {
    return fm.fetchReq(`/cosmos/group/v1/group_policies_by_group/${request["group_id"]}?${fm.renderURLSearchParams({ ...request
    }, ["group_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static GroupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest, initRequest?: fm.InitReq): Promise<QueryGroupPoliciesByAdminResponse> {
    return fm.fetchReq(`/cosmos/group/v1/group_policies_by_admin/${request["admin"]}?${fm.renderURLSearchParams({ ...request
    }, ["admin"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Proposal(request: QueryProposalRequest, initRequest?: fm.InitReq): Promise<QueryProposalResponse> {
    return fm.fetchReq(`/cosmos/group/v1/proposal/${request["proposal_id"]}?${fm.renderURLSearchParams({ ...request
    }, ["proposal_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ProposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest, initRequest?: fm.InitReq): Promise<QueryProposalsByGroupPolicyResponse> {
    return fm.fetchReq(`/cosmos/group/v1/proposals_by_group_policy/${request["address"]}?${fm.renderURLSearchParams({ ...request
    }, ["address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static VoteByProposalVoter(request: QueryVoteByProposalVoterRequest, initRequest?: fm.InitReq): Promise<QueryVoteByProposalVoterResponse> {
    return fm.fetchReq(`/cosmos/group/v1/vote_by_proposal_voter/${request["proposal_id"]}/{voter}?${fm.renderURLSearchParams({ ...request
    }, ["proposal_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static VotesByProposal(request: QueryVotesByProposalRequest, initRequest?: fm.InitReq): Promise<QueryVotesByProposalResponse> {
    return fm.fetchReq(`/cosmos/group/v1/votes_by_proposal/${request["proposal_id"]}?${fm.renderURLSearchParams({ ...request
    }, ["proposal_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static VotesByVoter(request: QueryVotesByVoterRequest, initRequest?: fm.InitReq): Promise<QueryVotesByVoterResponse> {
    return fm.fetchReq(`/cosmos/group/v1/votes_by_voter/${request["voter"]}?${fm.renderURLSearchParams({ ...request
    }, ["voter"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static GroupsByMember(request: QueryGroupsByMemberRequest, initRequest?: fm.InitReq): Promise<QueryGroupsByMemberResponse> {
    return fm.fetchReq(`/cosmos/group/v1/groups_by_member/${request["address"]}?${fm.renderURLSearchParams({ ...request
    }, ["address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static TallyResult(request: QueryTallyResultRequest, initRequest?: fm.InitReq): Promise<QueryTallyResultResponse> {
    return fm.fetchReq(`/cosmos/group/v1/proposals/${request["proposal_id"]}/tally?${fm.renderURLSearchParams({ ...request
    }, ["proposal_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

}