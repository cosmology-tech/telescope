import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour } from "./tx";
export declare const toJSON: {
    createClient(value: MsgCreateClient): {
        typeUrl: string;
        value: unknown;
    };
    updateClient(value: MsgUpdateClient): {
        typeUrl: string;
        value: unknown;
    };
    upgradeClient(value: MsgUpgradeClient): {
        typeUrl: string;
        value: unknown;
    };
    submitMisbehaviour(value: MsgSubmitMisbehaviour): {
        typeUrl: string;
        value: unknown;
    };
};
