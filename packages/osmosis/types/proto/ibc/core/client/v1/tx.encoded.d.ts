import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour } from "./tx";
export declare const encoded: {
    createClient(value: MsgCreateClient): {
        type_url: string;
        value: Uint8Array;
    };
    updateClient(value: MsgUpdateClient): {
        type_url: string;
        value: Uint8Array;
    };
    upgradeClient(value: MsgUpgradeClient): {
        type_url: string;
        value: Uint8Array;
    };
    submitMisbehaviour(value: MsgSubmitMisbehaviour): {
        type_url: string;
        value: Uint8Array;
    };
};
