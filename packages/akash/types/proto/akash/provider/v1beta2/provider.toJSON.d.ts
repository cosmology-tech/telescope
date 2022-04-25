import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
export declare const toJSON: {
    createProvider(value: MsgCreateProvider): {
        typeUrl: string;
        value: unknown;
    };
    updateProvider(value: MsgUpdateProvider): {
        typeUrl: string;
        value: unknown;
    };
    deleteProvider(value: MsgDeleteProvider): {
        typeUrl: string;
        value: unknown;
    };
};
