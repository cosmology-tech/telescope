import { Deposit, Vote, Proposal, DepositParams, VotingParams, TallyParams } from "./gov";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** GenesisState defines the gov module's genesis state. */
export interface GenesisState {
    /** starting_proposal_id is the ID of the starting proposal. */
    startingProposalId: Long;
    /** deposits defines all the deposits present at genesis. */
    deposits: Deposit[];
    /** votes defines all the votes present at genesis. */
    votes: Vote[];
    /** proposals defines all the proposals present at genesis. */
    proposals: Proposal[];
    /** params defines all the paramaters of related to deposit. */
    depositParams: DepositParams;
    /** params defines all the paramaters of related to voting. */
    votingParams: VotingParams;
    /** params defines all the paramaters of related to tally. */
    tallyParams: TallyParams;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        startingProposalId?: any;
        deposits?: {
            proposalId?: any;
            depositor?: string;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        votes?: {
            proposalId?: any;
            voter?: string;
            options?: {
                option?: import("./gov").VoteOption;
                weight?: string;
            }[];
            metadata?: string;
        }[];
        proposals?: {
            id?: any;
            messages?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
            status?: import("./gov").ProposalStatus;
            finalTallyResult?: {
                yesCount?: string;
                abstainCount?: string;
                noCount?: string;
                noWithVetoCount?: string;
            };
            submitTime?: Date;
            depositEndTime?: Date;
            totalDeposit?: {
                denom?: string;
                amount?: string;
            }[];
            votingStartTime?: Date;
            votingEndTime?: Date;
            metadata?: string;
        }[];
        depositParams?: {
            minDeposit?: {
                denom?: string;
                amount?: string;
            }[];
            maxDepositPeriod?: string;
        };
        votingParams?: {
            votingPeriod?: string;
        };
        tallyParams?: {
            quorum?: string;
            threshold?: string;
            vetoThreshold?: string;
        };
    } & {
        startingProposalId?: any;
        deposits?: {
            proposalId?: any;
            depositor?: string;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            proposalId?: any;
            depositor?: string;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            proposalId?: any;
            depositor?: string;
            amount?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["deposits"][number]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["deposits"][number]["amount"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["deposits"][number], keyof Deposit>, never>)[] & Record<Exclude<keyof I["deposits"], keyof {
            proposalId?: any;
            depositor?: string;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
        votes?: {
            proposalId?: any;
            voter?: string;
            options?: {
                option?: import("./gov").VoteOption;
                weight?: string;
            }[];
            metadata?: string;
        }[] & ({
            proposalId?: any;
            voter?: string;
            options?: {
                option?: import("./gov").VoteOption;
                weight?: string;
            }[];
            metadata?: string;
        } & {
            proposalId?: any;
            voter?: string;
            options?: {
                option?: import("./gov").VoteOption;
                weight?: string;
            }[] & ({
                option?: import("./gov").VoteOption;
                weight?: string;
            } & {
                option?: import("./gov").VoteOption;
                weight?: string;
            } & Record<Exclude<keyof I["votes"][number]["options"][number], keyof import("./gov").WeightedVoteOption>, never>)[] & Record<Exclude<keyof I["votes"][number]["options"], keyof {
                option?: import("./gov").VoteOption;
                weight?: string;
            }[]>, never>;
            metadata?: string;
        } & Record<Exclude<keyof I["votes"][number], keyof Vote>, never>)[] & Record<Exclude<keyof I["votes"], keyof {
            proposalId?: any;
            voter?: string;
            options?: {
                option?: import("./gov").VoteOption;
                weight?: string;
            }[];
            metadata?: string;
        }[]>, never>;
        proposals?: {
            id?: any;
            messages?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
            status?: import("./gov").ProposalStatus;
            finalTallyResult?: {
                yesCount?: string;
                abstainCount?: string;
                noCount?: string;
                noWithVetoCount?: string;
            };
            submitTime?: Date;
            depositEndTime?: Date;
            totalDeposit?: {
                denom?: string;
                amount?: string;
            }[];
            votingStartTime?: Date;
            votingEndTime?: Date;
            metadata?: string;
        }[] & ({
            id?: any;
            messages?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
            status?: import("./gov").ProposalStatus;
            finalTallyResult?: {
                yesCount?: string;
                abstainCount?: string;
                noCount?: string;
                noWithVetoCount?: string;
            };
            submitTime?: Date;
            depositEndTime?: Date;
            totalDeposit?: {
                denom?: string;
                amount?: string;
            }[];
            votingStartTime?: Date;
            votingEndTime?: Date;
            metadata?: string;
        } & {
            id?: any;
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
            status?: import("./gov").ProposalStatus;
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
            } & Record<Exclude<keyof I["proposals"][number]["finalTallyResult"], keyof import("./gov").TallyResult>, never>;
            submitTime?: Date;
            depositEndTime?: Date;
            totalDeposit?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["proposals"][number]["totalDeposit"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["proposals"][number]["totalDeposit"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            votingStartTime?: Date;
            votingEndTime?: Date;
            metadata?: string;
        } & Record<Exclude<keyof I["proposals"][number], keyof Proposal>, never>)[] & Record<Exclude<keyof I["proposals"], keyof {
            id?: any;
            messages?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
            status?: import("./gov").ProposalStatus;
            finalTallyResult?: {
                yesCount?: string;
                abstainCount?: string;
                noCount?: string;
                noWithVetoCount?: string;
            };
            submitTime?: Date;
            depositEndTime?: Date;
            totalDeposit?: {
                denom?: string;
                amount?: string;
            }[];
            votingStartTime?: Date;
            votingEndTime?: Date;
            metadata?: string;
        }[]>, never>;
        depositParams?: {
            minDeposit?: {
                denom?: string;
                amount?: string;
            }[];
            maxDepositPeriod?: string;
        } & {
            minDeposit?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["depositParams"]["minDeposit"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["depositParams"]["minDeposit"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            maxDepositPeriod?: string;
        } & Record<Exclude<keyof I["depositParams"], keyof DepositParams>, never>;
        votingParams?: {
            votingPeriod?: string;
        } & {
            votingPeriod?: string;
        } & Record<Exclude<keyof I["votingParams"], "votingPeriod">, never>;
        tallyParams?: {
            quorum?: string;
            threshold?: string;
            vetoThreshold?: string;
        } & {
            quorum?: string;
            threshold?: string;
            vetoThreshold?: string;
        } & Record<Exclude<keyof I["tallyParams"], keyof TallyParams>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
