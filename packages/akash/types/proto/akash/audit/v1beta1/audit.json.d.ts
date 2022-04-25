import { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./audit";
export declare const json: {
    signProviderAttributes(value: MsgSignProviderAttributes): {
        typeUrl: string;
        value: MsgSignProviderAttributes;
    };
    deleteProviderAttributes(value: MsgDeleteProviderAttributes): {
        typeUrl: string;
        value: MsgDeleteProviderAttributes;
    };
};
