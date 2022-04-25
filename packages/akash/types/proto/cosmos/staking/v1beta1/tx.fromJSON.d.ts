import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate } from "./tx";
export declare const fromJSON: {
    createValidator(value: any): {
        typeUrl: string;
        value: MsgCreateValidator;
    };
    editValidator(value: any): {
        typeUrl: string;
        value: MsgEditValidator;
    };
    delegate(value: any): {
        typeUrl: string;
        value: MsgDelegate;
    };
    beginRedelegate(value: any): {
        typeUrl: string;
        value: MsgBeginRedelegate;
    };
    undelegate(value: any): {
        typeUrl: string;
        value: MsgUndelegate;
    };
};
