import { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./audit";
export declare const toJSON: {
    signProviderAttributes(value: MsgSignProviderAttributes): {
        typeUrl: string;
        value: unknown;
    };
    deleteProviderAttributes(value: MsgDeleteProviderAttributes): {
        typeUrl: string;
        value: unknown;
    };
};
