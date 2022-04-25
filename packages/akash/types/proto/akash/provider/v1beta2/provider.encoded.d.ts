import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
export declare const encoded: {
    createProvider(value: MsgCreateProvider): {
        type_url: string;
        value: Uint8Array;
    };
    updateProvider(value: MsgUpdateProvider): {
        type_url: string;
        value: Uint8Array;
    };
    deleteProvider(value: MsgDeleteProvider): {
        type_url: string;
        value: Uint8Array;
    };
};
