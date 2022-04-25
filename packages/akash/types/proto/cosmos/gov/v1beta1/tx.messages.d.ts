import { MsgSubmitProposal, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
export declare const messages: {
    submitProposal(value: MsgSubmitProposal): {
        typeUrl: string;
        value: MsgSubmitProposal;
    };
    vote(value: MsgVote): {
        typeUrl: string;
        value: MsgVote;
    };
    voteWeighted(value: MsgVoteWeighted): {
        typeUrl: string;
        value: MsgVoteWeighted;
    };
    deposit(value: MsgDeposit): {
        typeUrl: string;
        value: MsgDeposit;
    };
};
