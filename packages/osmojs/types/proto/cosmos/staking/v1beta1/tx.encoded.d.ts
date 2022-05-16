import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate } from "./tx";
export declare const encoded: {
    createValidator(value: MsgCreateValidator): {
        type_url: string;
        value: Uint8Array;
    };
    editValidator(value: MsgEditValidator): {
        type_url: string;
        value: Uint8Array;
    };
    delegate(value: MsgDelegate): {
        type_url: string;
        value: Uint8Array;
    };
    beginRedelegate(value: MsgBeginRedelegate): {
        type_url: string;
        value: Uint8Array;
    };
    undelegate(value: MsgUndelegate): {
        type_url: string;
        value: Uint8Array;
    };
};
