import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour } from "./tx";
export declare const messages: {
    createClient(value: MsgCreateClient): {
        typeUrl: string;
        value: MsgCreateClient;
    };
    updateClient(value: MsgUpdateClient): {
        typeUrl: string;
        value: MsgUpdateClient;
    };
    upgradeClient(value: MsgUpgradeClient): {
        typeUrl: string;
        value: MsgUpgradeClient;
    };
    submitMisbehaviour(value: MsgSubmitMisbehaviour): {
        typeUrl: string;
        value: MsgSubmitMisbehaviour;
    };
};
