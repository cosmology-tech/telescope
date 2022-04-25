import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
export declare const json: {
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
