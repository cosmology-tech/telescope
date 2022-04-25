import { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./audit";
export declare const fromJSON: {
    signProviderAttributes(value: any): {
        typeUrl: string;
        value: MsgSignProviderAttributes;
    };
    deleteProviderAttributes(value: any): {
        typeUrl: string;
        value: MsgDeleteProviderAttributes;
    };
};
