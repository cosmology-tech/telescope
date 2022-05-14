import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupPolicyInfo, GroupMember, Proposal, Vote, TallyResult } from "./types";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequest {
    /** group_id is the unique ID of the group. */
    groupId: Long;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponse {
    /** info is the GroupInfo for the group. */
    info: GroupInfo;
}
/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */
export interface QueryGroupPolicyInfoRequest {
    /** address is the account address of the group policy. */
    address: string;
}
/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */
export interface QueryGroupPolicyInfoResponse {
    /** info is the GroupPolicyInfo for the group policy. */
    info: GroupPolicyInfo;
}
/** QueryGroupMembersRequest is the Query/GroupMembers request type. */
export interface QueryGroupMembersRequest {
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponse {
    /** members are the members of the group with given group_id. */
    members: GroupMember[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */
export interface QueryGroupsByAdminRequest {
    /** admin is the account address of a group's admin. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponse {
    /** groups are the groups info with the provided admin. */
    groups: GroupInfo[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */
export interface QueryGroupPoliciesByGroupRequest {
    /** group_id is the unique ID of the group policy's group. */
    groupId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */
export interface QueryGroupPoliciesByGroupResponse {
    /** group_policies are the group policies info associated with the provided group. */
    groupPolicies: GroupPolicyInfo[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */
export interface QueryGroupPoliciesByAdminRequest {
    /** admin is the admin address of the group policy. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */
export interface QueryGroupPoliciesByAdminResponse {
    /** group_policies are the group policies info with provided admin. */
    groupPolicies: GroupPolicyInfo[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequest {
    /** proposal_id is the unique ID of a proposal. */
    proposalId: Long;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponse {
    /** proposal is the proposal info. */
    proposal: Proposal;
}
/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */
export interface QueryProposalsByGroupPolicyRequest {
    /** address is the account address of the group policy related to proposals. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */
export interface QueryProposalsByGroupPolicyResponse {
    /** proposals are the proposals with given group policy. */
    proposals: Proposal[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */
export interface QueryVoteByProposalVoterRequest {
    /** proposal_id is the unique ID of a proposal. */
    proposalId: Long;
    /** voter is a proposal voter account address. */
    voter: string;
}
/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */
export interface QueryVoteByProposalVoterResponse {
    /** vote is the vote with given proposal_id and voter. */
    vote: Vote;
}
/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequest {
    /** proposal_id is the unique ID of a proposal. */
    proposalId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponse {
    /** votes are the list of votes for given proposal_id. */
    votes: Vote[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequest {
    /** voter is a proposal voter account address. */
    voter: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponse {
    /** votes are the list of votes by given voter. */
    votes: Vote[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */
export interface QueryGroupsByMemberRequest {
    /** address is the group member address. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */
export interface QueryGroupsByMemberResponse {
    /** groups are the groups info with the provided group member. */
    groups: GroupInfo[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryTallyResultRequest is the Query/TallyResult request type. */
export interface QueryTallyResultRequest {
    /** proposal_id is the unique id of a proposal. */
    proposalId: Long;
}
/** QueryTallyResultResponse is the Query/TallyResult response type. */
export interface QueryTallyResultResponse {
    /** tally defines the requested tally. */
    tally: TallyResult;
}
export declare const QueryGroupInfoRequest: {
    encode(message: QueryGroupInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupInfoRequest;
    fromJSON(object: any): QueryGroupInfoRequest;
    toJSON(message: QueryGroupInfoRequest): unknown;
    fromPartial<I extends {
        groupId?: any;
    } & {
        groupId?: any;
    } & Record<Exclude<keyof I, "groupId">, never>>(object: I): QueryGroupInfoRequest;
};
export declare const QueryGroupInfoResponse: {
    encode(message: QueryGroupInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupInfoResponse;
    fromJSON(object: any): QueryGroupInfoResponse;
    toJSON(message: QueryGroupInfoResponse): unknown;
    fromPartial<I extends {
        info?: {
            id?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            totalWeight?: string;
            createdAt?: Date;
        };
    } & {
        info?: {
            id?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            totalWeight?: string;
            createdAt?: Date;
        } & {
            id?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            totalWeight?: string;
            createdAt?: Date;
        } & Record<Exclude<keyof I["info"], keyof GroupInfo>, never>;
    } & Record<Exclude<keyof I, "info">, never>>(object: I): QueryGroupInfoResponse;
};
export declare const QueryGroupPolicyInfoRequest: {
    encode(message: QueryGroupPolicyInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPolicyInfoRequest;
    fromJSON(object: any): QueryGroupPolicyInfoRequest;
    toJSON(message: QueryGroupPolicyInfoRequest): unknown;
    fromPartial<I extends {
        address?: string;
    } & {
        address?: string;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): QueryGroupPolicyInfoRequest;
};
export declare const QueryGroupPolicyInfoResponse: {
    encode(message: QueryGroupPolicyInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPolicyInfoResponse;
    fromJSON(object: any): QueryGroupPolicyInfoResponse;
    toJSON(message: QueryGroupPolicyInfoResponse): unknown;
    fromPartial<I extends {
        info?: {
            address?: string;
            groupId?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            decisionPolicy?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            createdAt?: Date;
        };
    } & {
        info?: {
            address?: string;
            groupId?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            decisionPolicy?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            createdAt?: Date;
        } & {
            address?: string;
            groupId?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            decisionPolicy?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["info"]["decisionPolicy"], keyof import("../../../google/protobuf/any").Any>, never>;
            createdAt?: Date;
        } & Record<Exclude<keyof I["info"], keyof GroupPolicyInfo>, never>;
    } & Record<Exclude<keyof I, "info">, never>>(object: I): QueryGroupPolicyInfoResponse;
};
export declare const QueryGroupMembersRequest: {
    encode(message: QueryGroupMembersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupMembersRequest;
    fromJSON(object: any): QueryGroupMembersRequest;
    toJSON(message: QueryGroupMembersRequest): unknown;
    fromPartial<I extends {
        groupId?: any;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        groupId?: any;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryGroupMembersRequest>, never>>(object: I): QueryGroupMembersRequest;
};
export declare const QueryGroupMembersResponse: {
    encode(message: QueryGroupMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupMembersResponse;
    fromJSON(object: any): QueryGroupMembersResponse;
    toJSON(message: QueryGroupMembersResponse): unknown;
    fromPartial<I extends {
        members?: {
            groupId?: any;
            member?: {
                address?: string;
                weight?: string;
                metadata?: string;
                addedAt?: Date;
            };
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        members?: {
            groupId?: any;
            member?: {
                address?: string;
                weight?: string;
                metadata?: string;
                addedAt?: Date;
            };
        }[] & ({
            groupId?: any;
            member?: {
                address?: string;
                weight?: string;
                metadata?: string;
                addedAt?: Date;
            };
        } & {
            groupId?: any;
            member?: {
                address?: string;
                weight?: string;
                metadata?: string;
                addedAt?: Date;
            } & {
                address?: string;
                weight?: string;
                metadata?: string;
                addedAt?: Date;
            } & Record<Exclude<keyof I["members"][number]["member"], keyof import("./types").Member>, never>;
        } & Record<Exclude<keyof I["members"][number], keyof GroupMember>, never>)[] & Record<Exclude<keyof I["members"], keyof {
            groupId?: any;
            member?: {
                address?: string;
                weight?: string;
                metadata?: string;
                addedAt?: Date;
            };
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryGroupMembersResponse>, never>>(object: I): QueryGroupMembersResponse;
};
export declare const QueryGroupsByAdminRequest: {
    encode(message: QueryGroupsByAdminRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByAdminRequest;
    fromJSON(object: any): QueryGroupsByAdminRequest;
    toJSON(message: QueryGroupsByAdminRequest): unknown;
    fromPartial<I extends {
        admin?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        admin?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryGroupsByAdminRequest>, never>>(object: I): QueryGroupsByAdminRequest;
};
export declare const QueryGroupsByAdminResponse: {
    encode(message: QueryGroupsByAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByAdminResponse;
    fromJSON(object: any): QueryGroupsByAdminResponse;
    toJSON(message: QueryGroupsByAdminResponse): unknown;
    fromPartial<I extends {
        groups?: {
            id?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            totalWeight?: string;
            createdAt?: Date;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        groups?: {
            id?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            totalWeight?: string;
            createdAt?: Date;
        }[] & ({
            id?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            totalWeight?: string;
            createdAt?: Date;
        } & {
            id?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            totalWeight?: string;
            createdAt?: Date;
        } & Record<Exclude<keyof I["groups"][number], keyof GroupInfo>, never>)[] & Record<Exclude<keyof I["groups"], keyof {
            id?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            totalWeight?: string;
            createdAt?: Date;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryGroupsByAdminResponse>, never>>(object: I): QueryGroupsByAdminResponse;
};
export declare const QueryGroupPoliciesByGroupRequest: {
    encode(message: QueryGroupPoliciesByGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPoliciesByGroupRequest;
    fromJSON(object: any): QueryGroupPoliciesByGroupRequest;
    toJSON(message: QueryGroupPoliciesByGroupRequest): unknown;
    fromPartial<I extends {
        groupId?: any;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        groupId?: any;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryGroupPoliciesByGroupRequest>, never>>(object: I): QueryGroupPoliciesByGroupRequest;
};
export declare const QueryGroupPoliciesByGroupResponse: {
    encode(message: QueryGroupPoliciesByGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPoliciesByGroupResponse;
    fromJSON(object: any): QueryGroupPoliciesByGroupResponse;
    toJSON(message: QueryGroupPoliciesByGroupResponse): unknown;
    fromPartial<I extends {
        groupPolicies?: {
            address?: string;
            groupId?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            decisionPolicy?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            createdAt?: Date;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        groupPolicies?: {
            address?: string;
            groupId?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            decisionPolicy?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            createdAt?: Date;
        }[] & ({
            address?: string;
            groupId?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            decisionPolicy?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            createdAt?: Date;
        } & {
            address?: string;
            groupId?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            decisionPolicy?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["groupPolicies"][number]["decisionPolicy"], keyof import("../../../google/protobuf/any").Any>, never>;
            createdAt?: Date;
        } & Record<Exclude<keyof I["groupPolicies"][number], keyof GroupPolicyInfo>, never>)[] & Record<Exclude<keyof I["groupPolicies"], keyof {
            address?: string;
            groupId?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            decisionPolicy?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            createdAt?: Date;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryGroupPoliciesByGroupResponse>, never>>(object: I): QueryGroupPoliciesByGroupResponse;
};
export declare const QueryGroupPoliciesByAdminRequest: {
    encode(message: QueryGroupPoliciesByAdminRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPoliciesByAdminRequest;
    fromJSON(object: any): QueryGroupPoliciesByAdminRequest;
    toJSON(message: QueryGroupPoliciesByAdminRequest): unknown;
    fromPartial<I extends {
        admin?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        admin?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryGroupPoliciesByAdminRequest>, never>>(object: I): QueryGroupPoliciesByAdminRequest;
};
export declare const QueryGroupPoliciesByAdminResponse: {
    encode(message: QueryGroupPoliciesByAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPoliciesByAdminResponse;
    fromJSON(object: any): QueryGroupPoliciesByAdminResponse;
    toJSON(message: QueryGroupPoliciesByAdminResponse): unknown;
    fromPartial<I extends {
        groupPolicies?: {
            address?: string;
            groupId?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            decisionPolicy?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            createdAt?: Date;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        groupPolicies?: {
            address?: string;
            groupId?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            decisionPolicy?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            createdAt?: Date;
        }[] & ({
            address?: string;
            groupId?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            decisionPolicy?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            createdAt?: Date;
        } & {
            address?: string;
            groupId?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            decisionPolicy?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["groupPolicies"][number]["decisionPolicy"], keyof import("../../../google/protobuf/any").Any>, never>;
            createdAt?: Date;
        } & Record<Exclude<keyof I["groupPolicies"][number], keyof GroupPolicyInfo>, never>)[] & Record<Exclude<keyof I["groupPolicies"], keyof {
            address?: string;
            groupId?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            decisionPolicy?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            createdAt?: Date;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryGroupPoliciesByAdminResponse>, never>>(object: I): QueryGroupPoliciesByAdminResponse;
};
export declare const QueryProposalRequest: {
    encode(message: QueryProposalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalRequest;
    fromJSON(object: any): QueryProposalRequest;
    toJSON(message: QueryProposalRequest): unknown;
    fromPartial<I extends {
        proposalId?: any;
    } & {
        proposalId?: any;
    } & Record<Exclude<keyof I, "proposalId">, never>>(object: I): QueryProposalRequest;
};
export declare const QueryProposalResponse: {
    encode(message: QueryProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalResponse;
    fromJSON(object: any): QueryProposalResponse;
    toJSON(message: QueryProposalResponse): unknown;
    fromPartial<I extends {
        proposal?: {
            id?: any;
            address?: string;
            metadata?: string;
            proposers?: string[];
            submitTime?: Date;
            groupVersion?: any;
            groupPolicyVersion?: any;
            status?: import("./types").ProposalStatus;
            result?: import("./types").ProposalResult;
            finalTallyResult?: {
                yesCount?: string;
                abstainCount?: string;
                noCount?: string;
                noWithVetoCount?: string;
            };
            votingPeriodEnd?: Date;
            executorResult?: import("./types").ProposalExecutorResult;
            messages?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        };
    } & {
        proposal?: {
            id?: any;
            address?: string;
            metadata?: string;
            proposers?: string[];
            submitTime?: Date;
            groupVersion?: any;
            groupPolicyVersion?: any;
            status?: import("./types").ProposalStatus;
            result?: import("./types").ProposalResult;
            finalTallyResult?: {
                yesCount?: string;
                abstainCount?: string;
                noCount?: string;
                noWithVetoCount?: string;
            };
            votingPeriodEnd?: Date;
            executorResult?: import("./types").ProposalExecutorResult;
            messages?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        } & {
            id?: any;
            address?: string;
            metadata?: string;
            proposers?: string[] & string[] & Record<Exclude<keyof I["proposal"]["proposers"], keyof string[]>, never>;
            submitTime?: Date;
            groupVersion?: any;
            groupPolicyVersion?: any;
            status?: import("./types").ProposalStatus;
            result?: import("./types").ProposalResult;
            finalTallyResult?: {
                yesCount?: string;
                abstainCount?: string;
                noCount?: string;
                noWithVetoCount?: string;
            } & {
                yesCount?: string;
                abstainCount?: string;
                noCount?: string;
                noWithVetoCount?: string;
            } & Record<Exclude<keyof I["proposal"]["finalTallyResult"], keyof TallyResult>, never>;
            votingPeriodEnd?: Date;
            executorResult?: import("./types").ProposalExecutorResult;
            messages?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[] & ({
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["proposal"]["messages"][number], keyof import("../../../google/protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["proposal"]["messages"], keyof {
                typeUrl?: string;
                value?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["proposal"], keyof Proposal>, never>;
    } & Record<Exclude<keyof I, "proposal">, never>>(object: I): QueryProposalResponse;
};
export declare const QueryProposalsByGroupPolicyRequest: {
    encode(message: QueryProposalsByGroupPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsByGroupPolicyRequest;
    fromJSON(object: any): QueryProposalsByGroupPolicyRequest;
    toJSON(message: QueryProposalsByGroupPolicyRequest): unknown;
    fromPartial<I extends {
        address?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        address?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryProposalsByGroupPolicyRequest>, never>>(object: I): QueryProposalsByGroupPolicyRequest;
};
export declare const QueryProposalsByGroupPolicyResponse: {
    encode(message: QueryProposalsByGroupPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsByGroupPolicyResponse;
    fromJSON(object: any): QueryProposalsByGroupPolicyResponse;
    toJSON(message: QueryProposalsByGroupPolicyResponse): unknown;
    fromPartial<I extends {
        proposals?: {
            id?: any;
            address?: string;
            metadata?: string;
            proposers?: string[];
            submitTime?: Date;
            groupVersion?: any;
            groupPolicyVersion?: any;
            status?: import("./types").ProposalStatus;
            result?: import("./types").ProposalResult;
            finalTallyResult?: {
                yesCount?: string;
                abstainCount?: string;
                noCount?: string;
                noWithVetoCount?: string;
            };
            votingPeriodEnd?: Date;
            executorResult?: import("./types").ProposalExecutorResult;
            messages?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        proposals?: {
            id?: any;
            address?: string;
            metadata?: string;
            proposers?: string[];
            submitTime?: Date;
            groupVersion?: any;
            groupPolicyVersion?: any;
            status?: import("./types").ProposalStatus;
            result?: import("./types").ProposalResult;
            finalTallyResult?: {
                yesCount?: string;
                abstainCount?: string;
                noCount?: string;
                noWithVetoCount?: string;
            };
            votingPeriodEnd?: Date;
            executorResult?: import("./types").ProposalExecutorResult;
            messages?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }[] & ({
            id?: any;
            address?: string;
            metadata?: string;
            proposers?: string[];
            submitTime?: Date;
            groupVersion?: any;
            groupPolicyVersion?: any;
            status?: import("./types").ProposalStatus;
            result?: import("./types").ProposalResult;
            finalTallyResult?: {
                yesCount?: string;
                abstainCount?: string;
                noCount?: string;
                noWithVetoCount?: string;
            };
            votingPeriodEnd?: Date;
            executorResult?: import("./types").ProposalExecutorResult;
            messages?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        } & {
            id?: any;
            address?: string;
            metadata?: string;
            proposers?: string[] & string[] & Record<Exclude<keyof I["proposals"][number]["proposers"], keyof string[]>, never>;
            submitTime?: Date;
            groupVersion?: any;
            groupPolicyVersion?: any;
            status?: import("./types").ProposalStatus;
            result?: import("./types").ProposalResult;
            finalTallyResult?: {
                yesCount?: string;
                abstainCount?: string;
                noCount?: string;
                noWithVetoCount?: string;
            } & {
                yesCount?: string;
                abstainCount?: string;
                noCount?: string;
                noWithVetoCount?: string;
            } & Record<Exclude<keyof I["proposals"][number]["finalTallyResult"], keyof TallyResult>, never>;
            votingPeriodEnd?: Date;
            executorResult?: import("./types").ProposalExecutorResult;
            messages?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[] & ({
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["proposals"][number]["messages"][number], keyof import("../../../google/protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["proposals"][number]["messages"], keyof {
                typeUrl?: string;
                value?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["proposals"][number], keyof Proposal>, never>)[] & Record<Exclude<keyof I["proposals"], keyof {
            id?: any;
            address?: string;
            metadata?: string;
            proposers?: string[];
            submitTime?: Date;
            groupVersion?: any;
            groupPolicyVersion?: any;
            status?: import("./types").ProposalStatus;
            result?: import("./types").ProposalResult;
            finalTallyResult?: {
                yesCount?: string;
                abstainCount?: string;
                noCount?: string;
                noWithVetoCount?: string;
            };
            votingPeriodEnd?: Date;
            executorResult?: import("./types").ProposalExecutorResult;
            messages?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryProposalsByGroupPolicyResponse>, never>>(object: I): QueryProposalsByGroupPolicyResponse;
};
export declare const QueryVoteByProposalVoterRequest: {
    encode(message: QueryVoteByProposalVoterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteByProposalVoterRequest;
    fromJSON(object: any): QueryVoteByProposalVoterRequest;
    toJSON(message: QueryVoteByProposalVoterRequest): unknown;
    fromPartial<I extends {
        proposalId?: any;
        voter?: string;
    } & {
        proposalId?: any;
        voter?: string;
    } & Record<Exclude<keyof I, keyof QueryVoteByProposalVoterRequest>, never>>(object: I): QueryVoteByProposalVoterRequest;
};
export declare const QueryVoteByProposalVoterResponse: {
    encode(message: QueryVoteByProposalVoterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteByProposalVoterResponse;
    fromJSON(object: any): QueryVoteByProposalVoterResponse;
    toJSON(message: QueryVoteByProposalVoterResponse): unknown;
    fromPartial<I extends {
        vote?: {
            proposalId?: any;
            voter?: string;
            option?: import("./types").VoteOption;
            metadata?: string;
            submitTime?: Date;
        };
    } & {
        vote?: {
            proposalId?: any;
            voter?: string;
            option?: import("./types").VoteOption;
            metadata?: string;
            submitTime?: Date;
        } & {
            proposalId?: any;
            voter?: string;
            option?: import("./types").VoteOption;
            metadata?: string;
            submitTime?: Date;
        } & Record<Exclude<keyof I["vote"], keyof Vote>, never>;
    } & Record<Exclude<keyof I, "vote">, never>>(object: I): QueryVoteByProposalVoterResponse;
};
export declare const QueryVotesByProposalRequest: {
    encode(message: QueryVotesByProposalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByProposalRequest;
    fromJSON(object: any): QueryVotesByProposalRequest;
    toJSON(message: QueryVotesByProposalRequest): unknown;
    fromPartial<I extends {
        proposalId?: any;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        proposalId?: any;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryVotesByProposalRequest>, never>>(object: I): QueryVotesByProposalRequest;
};
export declare const QueryVotesByProposalResponse: {
    encode(message: QueryVotesByProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByProposalResponse;
    fromJSON(object: any): QueryVotesByProposalResponse;
    toJSON(message: QueryVotesByProposalResponse): unknown;
    fromPartial<I extends {
        votes?: {
            proposalId?: any;
            voter?: string;
            option?: import("./types").VoteOption;
            metadata?: string;
            submitTime?: Date;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        votes?: {
            proposalId?: any;
            voter?: string;
            option?: import("./types").VoteOption;
            metadata?: string;
            submitTime?: Date;
        }[] & ({
            proposalId?: any;
            voter?: string;
            option?: import("./types").VoteOption;
            metadata?: string;
            submitTime?: Date;
        } & {
            proposalId?: any;
            voter?: string;
            option?: import("./types").VoteOption;
            metadata?: string;
            submitTime?: Date;
        } & Record<Exclude<keyof I["votes"][number], keyof Vote>, never>)[] & Record<Exclude<keyof I["votes"], keyof {
            proposalId?: any;
            voter?: string;
            option?: import("./types").VoteOption;
            metadata?: string;
            submitTime?: Date;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryVotesByProposalResponse>, never>>(object: I): QueryVotesByProposalResponse;
};
export declare const QueryVotesByVoterRequest: {
    encode(message: QueryVotesByVoterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByVoterRequest;
    fromJSON(object: any): QueryVotesByVoterRequest;
    toJSON(message: QueryVotesByVoterRequest): unknown;
    fromPartial<I extends {
        voter?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        voter?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryVotesByVoterRequest>, never>>(object: I): QueryVotesByVoterRequest;
};
export declare const QueryVotesByVoterResponse: {
    encode(message: QueryVotesByVoterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByVoterResponse;
    fromJSON(object: any): QueryVotesByVoterResponse;
    toJSON(message: QueryVotesByVoterResponse): unknown;
    fromPartial<I extends {
        votes?: {
            proposalId?: any;
            voter?: string;
            option?: import("./types").VoteOption;
            metadata?: string;
            submitTime?: Date;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        votes?: {
            proposalId?: any;
            voter?: string;
            option?: import("./types").VoteOption;
            metadata?: string;
            submitTime?: Date;
        }[] & ({
            proposalId?: any;
            voter?: string;
            option?: import("./types").VoteOption;
            metadata?: string;
            submitTime?: Date;
        } & {
            proposalId?: any;
            voter?: string;
            option?: import("./types").VoteOption;
            metadata?: string;
            submitTime?: Date;
        } & Record<Exclude<keyof I["votes"][number], keyof Vote>, never>)[] & Record<Exclude<keyof I["votes"], keyof {
            proposalId?: any;
            voter?: string;
            option?: import("./types").VoteOption;
            metadata?: string;
            submitTime?: Date;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryVotesByVoterResponse>, never>>(object: I): QueryVotesByVoterResponse;
};
export declare const QueryGroupsByMemberRequest: {
    encode(message: QueryGroupsByMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByMemberRequest;
    fromJSON(object: any): QueryGroupsByMemberRequest;
    toJSON(message: QueryGroupsByMemberRequest): unknown;
    fromPartial<I extends {
        address?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        address?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryGroupsByMemberRequest>, never>>(object: I): QueryGroupsByMemberRequest;
};
export declare const QueryGroupsByMemberResponse: {
    encode(message: QueryGroupsByMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByMemberResponse;
    fromJSON(object: any): QueryGroupsByMemberResponse;
    toJSON(message: QueryGroupsByMemberResponse): unknown;
    fromPartial<I extends {
        groups?: {
            id?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            totalWeight?: string;
            createdAt?: Date;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        groups?: {
            id?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            totalWeight?: string;
            createdAt?: Date;
        }[] & ({
            id?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            totalWeight?: string;
            createdAt?: Date;
        } & {
            id?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            totalWeight?: string;
            createdAt?: Date;
        } & Record<Exclude<keyof I["groups"][number], keyof GroupInfo>, never>)[] & Record<Exclude<keyof I["groups"], keyof {
            id?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            totalWeight?: string;
            createdAt?: Date;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryGroupsByMemberResponse>, never>>(object: I): QueryGroupsByMemberResponse;
};
export declare const QueryTallyResultRequest: {
    encode(message: QueryTallyResultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyResultRequest;
    fromJSON(object: any): QueryTallyResultRequest;
    toJSON(message: QueryTallyResultRequest): unknown;
    fromPartial<I extends {
        proposalId?: any;
    } & {
        proposalId?: any;
    } & Record<Exclude<keyof I, "proposalId">, never>>(object: I): QueryTallyResultRequest;
};
export declare const QueryTallyResultResponse: {
    encode(message: QueryTallyResultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyResultResponse;
    fromJSON(object: any): QueryTallyResultResponse;
    toJSON(message: QueryTallyResultResponse): unknown;
    fromPartial<I extends {
        tally?: {
            yesCount?: string;
            abstainCount?: string;
            noCount?: string;
            noWithVetoCount?: string;
        };
    } & {
        tally?: {
            yesCount?: string;
            abstainCount?: string;
            noCount?: string;
            noWithVetoCount?: string;
        } & {
            yesCount?: string;
            abstainCount?: string;
            noCount?: string;
            noWithVetoCount?: string;
        } & Record<Exclude<keyof I["tally"], keyof TallyResult>, never>;
    } & Record<Exclude<keyof I, "tally">, never>>(object: I): QueryTallyResultResponse;
};
