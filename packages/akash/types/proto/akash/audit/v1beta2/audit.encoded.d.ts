import { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./audit";
export declare const encoded: {
    signProviderAttributes(value: MsgSignProviderAttributes): {
        type_url: string;
        value: Uint8Array;
    };
    deleteProviderAttributes(value: MsgDeleteProviderAttributes): {
        type_url: string;
        value: Uint8Array;
    };
};
