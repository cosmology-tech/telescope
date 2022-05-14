import { ProposalStatus, Proposal, Vote, VotingParams, DepositParams, TallyParams, Deposit, TallyResult } from "./gov";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: Long;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponse {
    proposal: Proposal;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequest {
    /** proposal_status defines the status of the proposals. */
    proposalStatus: ProposalStatus;
    /** voter defines the voter address for the proposals. */
    voter: string;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponse {
    proposals: Proposal[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: Long;
    /** voter defines the oter address for the proposals. */
    voter: string;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponse {
    /** vote defined the queried vote. */
    vote: Vote;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponse {
    /** votes defined the queried votes. */
    votes: Vote[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
    /**
     * params_type defines which parameters to query for, can be one of "voting",
     * "tallying" or "deposit".
     */
    paramsType: string;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** voting_params defines the parameters related to voting. */
    votingParams: VotingParams;
    /** deposit_params defines the parameters related to deposit. */
    depositParams: DepositParams;
    /** tally_params defines the parameters related to tally. */
    tallyParams: TallyParams;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: Long;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponse {
    /** deposit defines the requested deposit. */
    deposit: Deposit;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
    deposits: Deposit[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: Long;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponse {
    /** tally defines the requested tally. */
    tally: TallyResult;
}
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
            messages?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
            status?: ProposalStatus;
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
        };
    } & {
        proposal?: {
            id?: any;
            messages?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
            status?: ProposalStatus;
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
            } & Record<Exclude<keyof I["proposal"]["messages"][number], keyof import("../../../google/protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["proposal"]["messages"], keyof {
                typeUrl?: string;
                value?: Uint8Array;
            }[]>, never>;
            status?: ProposalStatus;
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
            } & Record<Exclude<keyof I["proposal"]["totalDeposit"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["proposal"]["totalDeposit"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            votingStartTime?: Date;
            votingEndTime?: Date;
            metadata?: string;
        } & Record<Exclude<keyof I["proposal"], keyof Proposal>, never>;
    } & Record<Exclude<keyof I, "proposal">, never>>(object: I): QueryProposalResponse;
};
export declare const QueryProposalsRequest: {
    encode(message: QueryProposalsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsRequest;
    fromJSON(object: any): QueryProposalsRequest;
    toJSON(message: QueryProposalsRequest): unknown;
    fromPartial<I extends {
        proposalStatus?: ProposalStatus;
        voter?: string;
        depositor?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        proposalStatus?: ProposalStatus;
        voter?: string;
        depositor?: string;
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
    } & Record<Exclude<keyof I, keyof QueryProposalsRequest>, never>>(object: I): QueryProposalsRequest;
};
export declare const QueryProposalsResponse: {
    encode(message: QueryProposalsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsResponse;
    fromJSON(object: any): QueryProposalsResponse;
    toJSON(message: QueryProposalsResponse): unknown;
    fromPartial<I extends {
        proposals?: {
            id?: any;
            messages?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
            status?: ProposalStatus;
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
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        proposals?: {
            id?: any;
            messages?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
            status?: ProposalStatus;
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
            status?: ProposalStatus;
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
            status?: ProposalStatus;
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
            status?: ProposalStatus;
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
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryProposalsResponse>, never>>(object: I): QueryProposalsResponse;
};
export declare const QueryVoteRequest: {
    encode(message: QueryVoteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteRequest;
    fromJSON(object: any): QueryVoteRequest;
    toJSON(message: QueryVoteRequest): unknown;
    fromPartial<I extends {
        proposalId?: any;
        voter?: string;
    } & {
        proposalId?: any;
        voter?: string;
    } & Record<Exclude<keyof I, keyof QueryVoteRequest>, never>>(object: I): QueryVoteRequest;
};
export declare const QueryVoteResponse: {
    encode(message: QueryVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteResponse;
    fromJSON(object: any): QueryVoteResponse;
    toJSON(message: QueryVoteResponse): unknown;
    fromPartial<I extends {
        vote?: {
            proposalId?: any;
            voter?: string;
            options?: {
                option?: import("./gov").VoteOption;
                weight?: string;
            }[];
            metadata?: string;
        };
    } & {
        vote?: {
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
            } & Record<Exclude<keyof I["vote"]["options"][number], keyof import("./gov").WeightedVoteOption>, never>)[] & Record<Exclude<keyof I["vote"]["options"], keyof {
                option?: import("./gov").VoteOption;
                weight?: string;
            }[]>, never>;
            metadata?: string;
        } & Record<Exclude<keyof I["vote"], keyof Vote>, never>;
    } & Record<Exclude<keyof I, "vote">, never>>(object: I): QueryVoteResponse;
};
export declare const QueryVotesRequest: {
    encode(message: QueryVotesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesRequest;
    fromJSON(object: any): QueryVotesRequest;
    toJSON(message: QueryVotesRequest): unknown;
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
    } & Record<Exclude<keyof I, keyof QueryVotesRequest>, never>>(object: I): QueryVotesRequest;
};
export declare const QueryVotesResponse: {
    encode(message: QueryVotesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesResponse;
    fromJSON(object: any): QueryVotesResponse;
    toJSON(message: QueryVotesResponse): unknown;
    fromPartial<I extends {
        votes?: {
            proposalId?: any;
            voter?: string;
            options?: {
                option?: import("./gov").VoteOption;
                weight?: string;
            }[];
            metadata?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
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
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryVotesResponse>, never>>(object: I): QueryVotesResponse;
};
export declare const QueryParamsRequest: {
    encode(message: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(object: any): QueryParamsRequest;
    toJSON(message: QueryParamsRequest): unknown;
    fromPartial<I extends {
        paramsType?: string;
    } & {
        paramsType?: string;
    } & Record<Exclude<keyof I, "paramsType">, never>>(object: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
        votingParams?: {
            votingPeriod?: string;
        };
        depositParams?: {
            minDeposit?: {
                denom?: string;
                amount?: string;
            }[];
            maxDepositPeriod?: string;
        };
        tallyParams?: {
            quorum?: string;
            threshold?: string;
            vetoThreshold?: string;
        };
    } & {
        votingParams?: {
            votingPeriod?: string;
        } & {
            votingPeriod?: string;
        } & Record<Exclude<keyof I["votingParams"], "votingPeriod">, never>;
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
        tallyParams?: {
            quorum?: string;
            threshold?: string;
            vetoThreshold?: string;
        } & {
            quorum?: string;
            threshold?: string;
            vetoThreshold?: string;
        } & Record<Exclude<keyof I["tallyParams"], keyof TallyParams>, never>;
    } & Record<Exclude<keyof I, keyof QueryParamsResponse>, never>>(object: I): QueryParamsResponse;
};
export declare const QueryDepositRequest: {
    encode(message: QueryDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositRequest;
    fromJSON(object: any): QueryDepositRequest;
    toJSON(message: QueryDepositRequest): unknown;
    fromPartial<I extends {
        proposalId?: any;
        depositor?: string;
    } & {
        proposalId?: any;
        depositor?: string;
    } & Record<Exclude<keyof I, keyof QueryDepositRequest>, never>>(object: I): QueryDepositRequest;
};
export declare const QueryDepositResponse: {
    encode(message: QueryDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositResponse;
    fromJSON(object: any): QueryDepositResponse;
    toJSON(message: QueryDepositResponse): unknown;
    fromPartial<I extends {
        deposit?: {
            proposalId?: any;
            depositor?: string;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        };
    } & {
        deposit?: {
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
            } & Record<Exclude<keyof I["deposit"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["deposit"]["amount"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["deposit"], keyof Deposit>, never>;
    } & Record<Exclude<keyof I, "deposit">, never>>(object: I): QueryDepositResponse;
};
export declare const QueryDepositsRequest: {
    encode(message: QueryDepositsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsRequest;
    fromJSON(object: any): QueryDepositsRequest;
    toJSON(message: QueryDepositsRequest): unknown;
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
    } & Record<Exclude<keyof I, keyof QueryDepositsRequest>, never>>(object: I): QueryDepositsRequest;
};
export declare const QueryDepositsResponse: {
    encode(message: QueryDepositsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsResponse;
    fromJSON(object: any): QueryDepositsResponse;
    toJSON(message: QueryDepositsResponse): unknown;
    fromPartial<I extends {
        deposits?: {
            proposalId?: any;
            depositor?: string;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
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
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryDepositsResponse>, never>>(object: I): QueryDepositsResponse;
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
