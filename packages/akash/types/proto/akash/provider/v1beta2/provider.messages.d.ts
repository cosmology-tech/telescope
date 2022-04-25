import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
export declare const messages: {
    createProvider(value: MsgCreateProvider): {
        typeUrl: string;
        value: MsgCreateProvider;
    };
    updateProvider(value: MsgUpdateProvider): {
        typeUrl: string;
        value: MsgUpdateProvider;
    };
    deleteProvider(value: MsgDeleteProvider): {
        typeUrl: string;
        value: MsgDeleteProvider;
    };
};
