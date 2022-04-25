import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
export declare const messages: {
    submitProposal(value: MsgSubmitProposal): {
        typeUrl: string;
        value: MsgSubmitProposal;
    };
    execLegacyContent(value: MsgExecLegacyContent): {
        typeUrl: string;
        value: MsgExecLegacyContent;
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
