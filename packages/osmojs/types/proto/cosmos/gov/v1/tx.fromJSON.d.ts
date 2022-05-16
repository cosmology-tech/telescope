import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
export declare const fromJSON: {
    submitProposal(value: any): {
        typeUrl: string;
        value: MsgSubmitProposal;
    };
    execLegacyContent(value: any): {
        typeUrl: string;
        value: MsgExecLegacyContent;
    };
    vote(value: any): {
        typeUrl: string;
        value: MsgVote;
    };
    voteWeighted(value: any): {
        typeUrl: string;
        value: MsgVoteWeighted;
    };
    deposit(value: any): {
        typeUrl: string;
        value: MsgDeposit;
    };
};
