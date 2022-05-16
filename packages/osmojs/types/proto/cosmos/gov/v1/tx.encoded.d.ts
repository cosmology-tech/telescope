import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
export declare const encoded: {
    submitProposal(value: MsgSubmitProposal): {
        type_url: string;
        value: Uint8Array;
    };
    execLegacyContent(value: MsgExecLegacyContent): {
        type_url: string;
        value: Uint8Array;
    };
    vote(value: MsgVote): {
        type_url: string;
        value: Uint8Array;
    };
    voteWeighted(value: MsgVoteWeighted): {
        type_url: string;
        value: Uint8Array;
    };
    deposit(value: MsgDeposit): {
        type_url: string;
        value: Uint8Array;
    };
};
