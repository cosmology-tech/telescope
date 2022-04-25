import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
export declare const fromJSON: {
    createProvider(value: any): {
        typeUrl: string;
        value: MsgCreateProvider;
    };
    updateProvider(value: any): {
        typeUrl: string;
        value: MsgUpdateProvider;
    };
    deleteProvider(value: any): {
        typeUrl: string;
        value: MsgDeleteProvider;
    };
};
