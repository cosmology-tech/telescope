import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour } from "./tx";
export declare const fromJSON: {
    createClient(value: any): {
        typeUrl: string;
        value: MsgCreateClient;
    };
    updateClient(value: any): {
        typeUrl: string;
        value: MsgUpdateClient;
    };
    upgradeClient(value: any): {
        typeUrl: string;
        value: MsgUpgradeClient;
    };
    submitMisbehaviour(value: any): {
        typeUrl: string;
        value: MsgSubmitMisbehaviour;
    };
};
