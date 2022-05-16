import { MsgSubmitProposal, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
export declare const toJSON: {
    submitProposal(value: MsgSubmitProposal): {
        typeUrl: string;
        value: unknown;
    };
    vote(value: MsgVote): {
        typeUrl: string;
        value: unknown;
    };
    voteWeighted(value: MsgVoteWeighted): {
        typeUrl: string;
        value: unknown;
    };
    deposit(value: MsgDeposit): {
        typeUrl: string;
        value: unknown;
    };
};
