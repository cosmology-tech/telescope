import { GroupInfo, GroupMember, GroupPolicyInfo, Proposal, Vote } from "./types";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** GenesisState defines the group module's genesis state. */
export interface GenesisState {
    /**
     * group_seq is the group table orm.Sequence,
     * it is used to get the next group ID.
     */
    groupSeq: Long;
    /** groups is the list of groups info. */
    groups: GroupInfo[];
    /** group_members is the list of groups members. */
    groupMembers: GroupMember[];
    /**
     * group_policy_seq is the group policy table orm.Sequence,
     * it is used to generate the next group policy account address.
     */
    groupPolicySeq: Long;
    /** group_policies is the list of group policies info. */
    groupPolicies: GroupPolicyInfo[];
    /**
     * proposal_seq is the proposal table orm.Sequence,
     * it is used to get the next proposal ID.
     */
    proposalSeq: Long;
    /** proposals is the list of proposals. */
    proposals: Proposal[];
    /** votes is the list of votes. */
    votes: Vote[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        groupSeq?: any;
        groups?: {
            id?: any;
            admin?: string;
            metadata?: string;
            version?: any;
            totalWeight?: string;
            createdAt?: Date;
        }[];
        groupMembers?: {
            groupId?: any;
            member?: {
                address?: string;
                weight?: string;
                metadata?: string;
                addedAt?: Date;
            };
        }[];
        groupPolicySeq?: any;
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
        proposalSeq?: any;
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
        votes?: {
            proposalId?: any;
            voter?: string;
            option?: import("./types").VoteOption;
            metadata?: string;
            submitTime?: Date;
        }[];
    } & {
        groupSeq?: any;
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
        groupMembers?: {
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
            } & Record<Exclude<keyof I["groupMembers"][number]["member"], keyof import("./types").Member>, never>;
        } & Record<Exclude<keyof I["groupMembers"][number], keyof GroupMember>, never>)[] & Record<Exclude<keyof I["groupMembers"], keyof {
            groupId?: any;
            member?: {
                address?: string;
                weight?: string;
                metadata?: string;
                addedAt?: Date;
            };
        }[]>, never>;
        groupPolicySeq?: any;
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
        proposalSeq?: any;
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
            } & Record<Exclude<keyof I["proposals"][number]["finalTallyResult"], keyof import("./types").TallyResult>, never>;
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
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
