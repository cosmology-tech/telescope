import * as _m0 from "protobufjs/minimal";
import { GroupInfo, GroupMember, GroupPolicyInfo, Proposal, Vote } from "../../../cosmos/group/v1/types";
/** GenesisState defines the group module's genesis state. */
export interface GenesisState {
    /**
     * group_seq is the group table orm.Sequence,
     * it is used to get the next group ID.
     */
    groupSeq: string;
    /** groups is the list of groups info. */
    groups: GroupInfo[];
    /** group_members is the list of groups members. */
    groupMembers: GroupMember[];
    /**
     * group_policy_seq is the group policy table orm.Sequence,
     * it is used to generate the next group policy account address.
     */
    groupPolicySeq: string;
    /** group_policies is the list of group policies info. */
    groupPolicies: GroupPolicyInfo[];
    /**
     * proposal_seq is the proposal table orm.Sequence,
     * it is used to get the next proposal ID.
     */
    proposalSeq: string;
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
        groupSeq?: string;
        groups?: {
            id?: string;
            admin?: string;
            metadata?: string;
            version?: string;
            totalWeight?: string;
            createdAt?: Date;
        }[];
        groupMembers?: {
            groupId?: string;
            member?: {
                address?: string;
                weight?: string;
                metadata?: string;
                addedAt?: Date;
            };
        }[];
        groupPolicySeq?: string;
        groupPolicies?: {
            address?: string;
            groupId?: string;
            admin?: string;
            metadata?: string;
            version?: string;
            decisionPolicy?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            createdAt?: Date;
        }[];
        proposalSeq?: string;
        proposals?: {
            id?: string;
            address?: string;
            metadata?: string;
            proposers?: string[];
            submitTime?: Date;
            groupVersion?: string;
            groupPolicyVersion?: string;
            status?: import("../../../cosmos/group/v1/types").ProposalStatus;
            result?: import("../../../cosmos/group/v1/types").ProposalResult;
            finalTallyResult?: {
                yesCount?: string;
                abstainCount?: string;
                noCount?: string;
                noWithVetoCount?: string;
            };
            votingPeriodEnd?: Date;
            executorResult?: import("../../../cosmos/group/v1/types").ProposalExecutorResult;
            messages?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }[];
        votes?: {
            proposalId?: string;
            voter?: string;
            option?: import("../../../cosmos/group/v1/types").VoteOption;
            metadata?: string;
            submitTime?: Date;
        }[];
    } & {
        groupSeq?: string;
        groups?: {
            id?: string;
            admin?: string;
            metadata?: string;
            version?: string;
            totalWeight?: string;
            createdAt?: Date;
        }[] & ({
            id?: string;
            admin?: string;
            metadata?: string;
            version?: string;
            totalWeight?: string;
            createdAt?: Date;
        } & {
            id?: string;
            admin?: string;
            metadata?: string;
            version?: string;
            totalWeight?: string;
            createdAt?: Date;
        } & Record<Exclude<keyof I["groups"][number], keyof GroupInfo>, never>)[] & Record<Exclude<keyof I["groups"], keyof {
            id?: string;
            admin?: string;
            metadata?: string;
            version?: string;
            totalWeight?: string;
            createdAt?: Date;
        }[]>, never>;
        groupMembers?: {
            groupId?: string;
            member?: {
                address?: string;
                weight?: string;
                metadata?: string;
                addedAt?: Date;
            };
        }[] & ({
            groupId?: string;
            member?: {
                address?: string;
                weight?: string;
                metadata?: string;
                addedAt?: Date;
            };
        } & {
            groupId?: string;
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
            } & Record<Exclude<keyof I["groupMembers"][number]["member"], keyof import("../../../cosmos/group/v1/types").Member>, never>;
        } & Record<Exclude<keyof I["groupMembers"][number], keyof GroupMember>, never>)[] & Record<Exclude<keyof I["groupMembers"], keyof {
            groupId?: string;
            member?: {
                address?: string;
                weight?: string;
                metadata?: string;
                addedAt?: Date;
            };
        }[]>, never>;
        groupPolicySeq?: string;
        groupPolicies?: {
            address?: string;
            groupId?: string;
            admin?: string;
            metadata?: string;
            version?: string;
            decisionPolicy?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            createdAt?: Date;
        }[] & ({
            address?: string;
            groupId?: string;
            admin?: string;
            metadata?: string;
            version?: string;
            decisionPolicy?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            createdAt?: Date;
        } & {
            address?: string;
            groupId?: string;
            admin?: string;
            metadata?: string;
            version?: string;
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
            groupId?: string;
            admin?: string;
            metadata?: string;
            version?: string;
            decisionPolicy?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            createdAt?: Date;
        }[]>, never>;
        proposalSeq?: string;
        proposals?: {
            id?: string;
            address?: string;
            metadata?: string;
            proposers?: string[];
            submitTime?: Date;
            groupVersion?: string;
            groupPolicyVersion?: string;
            status?: import("../../../cosmos/group/v1/types").ProposalStatus;
            result?: import("../../../cosmos/group/v1/types").ProposalResult;
            finalTallyResult?: {
                yesCount?: string;
                abstainCount?: string;
                noCount?: string;
                noWithVetoCount?: string;
            };
            votingPeriodEnd?: Date;
            executorResult?: import("../../../cosmos/group/v1/types").ProposalExecutorResult;
            messages?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }[] & ({
            id?: string;
            address?: string;
            metadata?: string;
            proposers?: string[];
            submitTime?: Date;
            groupVersion?: string;
            groupPolicyVersion?: string;
            status?: import("../../../cosmos/group/v1/types").ProposalStatus;
            result?: import("../../../cosmos/group/v1/types").ProposalResult;
            finalTallyResult?: {
                yesCount?: string;
                abstainCount?: string;
                noCount?: string;
                noWithVetoCount?: string;
            };
            votingPeriodEnd?: Date;
            executorResult?: import("../../../cosmos/group/v1/types").ProposalExecutorResult;
            messages?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        } & {
            id?: string;
            address?: string;
            metadata?: string;
            proposers?: string[] & string[] & Record<Exclude<keyof I["proposals"][number]["proposers"], keyof string[]>, never>;
            submitTime?: Date;
            groupVersion?: string;
            groupPolicyVersion?: string;
            status?: import("../../../cosmos/group/v1/types").ProposalStatus;
            result?: import("../../../cosmos/group/v1/types").ProposalResult;
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
            } & Record<Exclude<keyof I["proposals"][number]["finalTallyResult"], keyof import("../../../cosmos/group/v1/types").TallyResult>, never>;
            votingPeriodEnd?: Date;
            executorResult?: import("../../../cosmos/group/v1/types").ProposalExecutorResult;
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
            id?: string;
            address?: string;
            metadata?: string;
            proposers?: string[];
            submitTime?: Date;
            groupVersion?: string;
            groupPolicyVersion?: string;
            status?: import("../../../cosmos/group/v1/types").ProposalStatus;
            result?: import("../../../cosmos/group/v1/types").ProposalResult;
            finalTallyResult?: {
                yesCount?: string;
                abstainCount?: string;
                noCount?: string;
                noWithVetoCount?: string;
            };
            votingPeriodEnd?: Date;
            executorResult?: import("../../../cosmos/group/v1/types").ProposalExecutorResult;
            messages?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }[]>, never>;
        votes?: {
            proposalId?: string;
            voter?: string;
            option?: import("../../../cosmos/group/v1/types").VoteOption;
            metadata?: string;
            submitTime?: Date;
        }[] & ({
            proposalId?: string;
            voter?: string;
            option?: import("../../../cosmos/group/v1/types").VoteOption;
            metadata?: string;
            submitTime?: Date;
        } & {
            proposalId?: string;
            voter?: string;
            option?: import("../../../cosmos/group/v1/types").VoteOption;
            metadata?: string;
            submitTime?: Date;
        } & Record<Exclude<keyof I["votes"][number], keyof Vote>, never>)[] & Record<Exclude<keyof I["votes"], keyof {
            proposalId?: string;
            voter?: string;
            option?: import("../../../cosmos/group/v1/types").VoteOption;
            metadata?: string;
            submitTime?: Date;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
