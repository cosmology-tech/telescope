import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupInfoSDKType, GroupPolicyInfo, GroupPolicyInfoSDKType, GroupMember, GroupMemberSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, TallyResult, TallyResultSDKType } from "./types";
import * as fm from "../../../grpc-gateway";
import { QueryGroupInfoRequest, QueryGroupInfoRequestSDKType, QueryGroupInfoResponse, QueryGroupInfoResponseSDKType, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoRequestSDKType, QueryGroupPolicyInfoResponse, QueryGroupPolicyInfoResponseSDKType, QueryGroupMembersRequest, QueryGroupMembersRequestSDKType, QueryGroupMembersResponse, QueryGroupMembersResponseSDKType, QueryGroupsByAdminRequest, QueryGroupsByAdminRequestSDKType, QueryGroupsByAdminResponse, QueryGroupsByAdminResponseSDKType, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupRequestSDKType, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByGroupResponseSDKType, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminRequestSDKType, QueryGroupPoliciesByAdminResponse, QueryGroupPoliciesByAdminResponseSDKType, QueryProposalRequest, QueryProposalRequestSDKType, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyRequestSDKType, QueryProposalsByGroupPolicyResponse, QueryProposalsByGroupPolicyResponseSDKType, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterRequestSDKType, QueryVoteByProposalVoterResponse, QueryVoteByProposalVoterResponseSDKType, QueryVotesByProposalRequest, QueryVotesByProposalRequestSDKType, QueryVotesByProposalResponse, QueryVotesByProposalResponseSDKType, QueryVotesByVoterRequest, QueryVotesByVoterRequestSDKType, QueryVotesByVoterResponse, QueryVotesByVoterResponseSDKType, QueryGroupsByMemberRequest, QueryGroupsByMemberRequestSDKType, QueryGroupsByMemberResponse, QueryGroupsByMemberResponseSDKType, QueryTallyResultRequest, QueryTallyResultRequestSDKType, QueryTallyResultResponse, QueryTallyResultResponseSDKType } from "./query";
export class Query {
  /** GroupInfo queries group info based on group id. */
  static GroupInfo(request: QueryGroupInfoRequest, initRequest?: fm.InitReq): Promise<QueryGroupInfoResponse> {
    return fm.fetchReq(`/cosmos/group/v1/group_info/${request["group_id"]}?${fm.renderURLSearchParams({ ...request
    }, ["group_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** GroupPolicyInfo queries group policy info based on account address of group policy. */
  static GroupPolicyInfo(request: QueryGroupPolicyInfoRequest, initRequest?: fm.InitReq): Promise<QueryGroupPolicyInfoResponse> {
    return fm.fetchReq(`/cosmos/group/v1/group_policy_info/${request["address"]}?${fm.renderURLSearchParams({ ...request
    }, ["address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** GroupMembers queries members of a group */
  static GroupMembers(request: QueryGroupMembersRequest, initRequest?: fm.InitReq): Promise<QueryGroupMembersResponse> {
    return fm.fetchReq(`/cosmos/group/v1/group_members/${request["group_id"]}?${fm.renderURLSearchParams({ ...request
    }, ["group_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** GroupsByAdmin queries groups by admin address. */
  static GroupsByAdmin(request: QueryGroupsByAdminRequest, initRequest?: fm.InitReq): Promise<QueryGroupsByAdminResponse> {
    return fm.fetchReq(`/cosmos/group/v1/groups_by_admin/${request["admin"]}?${fm.renderURLSearchParams({ ...request
    }, ["admin"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** GroupPoliciesByGroup queries group policies by group id. */
  static GroupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest, initRequest?: fm.InitReq): Promise<QueryGroupPoliciesByGroupResponse> {
    return fm.fetchReq(`/cosmos/group/v1/group_policies_by_group/${request["group_id"]}?${fm.renderURLSearchParams({ ...request
    }, ["group_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** GroupsByAdmin queries group policies by admin address. */
  static GroupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest, initRequest?: fm.InitReq): Promise<QueryGroupPoliciesByAdminResponse> {
    return fm.fetchReq(`/cosmos/group/v1/group_policies_by_admin/${request["admin"]}?${fm.renderURLSearchParams({ ...request
    }, ["admin"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Proposal queries a proposal based on proposal id. */
  static Proposal(request: QueryProposalRequest, initRequest?: fm.InitReq): Promise<QueryProposalResponse> {
    return fm.fetchReq(`/cosmos/group/v1/proposal/${request["proposal_id"]}?${fm.renderURLSearchParams({ ...request
    }, ["proposal_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */
  static ProposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest, initRequest?: fm.InitReq): Promise<QueryProposalsByGroupPolicyResponse> {
    return fm.fetchReq(`/cosmos/group/v1/proposals_by_group_policy/${request["address"]}?${fm.renderURLSearchParams({ ...request
    }, ["address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** VoteByProposalVoter queries a vote by proposal id and voter. */
  static VoteByProposalVoter(request: QueryVoteByProposalVoterRequest, initRequest?: fm.InitReq): Promise<QueryVoteByProposalVoterResponse> {
    return fm.fetchReq(`/cosmos/group/v1/vote_by_proposal_voter/${request["proposal_id"]}/{voter}?${fm.renderURLSearchParams({ ...request
    }, ["proposal_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** VotesByProposal queries a vote by proposal. */
  static VotesByProposal(request: QueryVotesByProposalRequest, initRequest?: fm.InitReq): Promise<QueryVotesByProposalResponse> {
    return fm.fetchReq(`/cosmos/group/v1/votes_by_proposal/${request["proposal_id"]}?${fm.renderURLSearchParams({ ...request
    }, ["proposal_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** VotesByVoter queries a vote by voter. */
  static VotesByVoter(request: QueryVotesByVoterRequest, initRequest?: fm.InitReq): Promise<QueryVotesByVoterResponse> {
    return fm.fetchReq(`/cosmos/group/v1/votes_by_voter/${request["voter"]}?${fm.renderURLSearchParams({ ...request
    }, ["voter"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** GroupsByMember queries groups by member address. */
  static GroupsByMember(request: QueryGroupsByMemberRequest, initRequest?: fm.InitReq): Promise<QueryGroupsByMemberResponse> {
    return fm.fetchReq(`/cosmos/group/v1/groups_by_member/${request["address"]}?${fm.renderURLSearchParams({ ...request
    }, ["address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** TallyResult queries the tally of a proposal votes. */
  static TallyResult(request: QueryTallyResultRequest, initRequest?: fm.InitReq): Promise<QueryTallyResultResponse> {
    return fm.fetchReq(`/cosmos/group/v1/proposals/${request["proposal_id"]}/tally?${fm.renderURLSearchParams({ ...request
    }, ["proposal_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

}