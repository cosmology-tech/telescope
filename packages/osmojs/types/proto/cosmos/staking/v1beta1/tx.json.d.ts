import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate } from "./tx";
export declare const json: {
    createValidator(value: MsgCreateValidator): {
        typeUrl: string;
        value: MsgCreateValidator;
    };
    editValidator(value: MsgEditValidator): {
        typeUrl: string;
        value: MsgEditValidator;
    };
    delegate(value: MsgDelegate): {
        typeUrl: string;
        value: MsgDelegate;
    };
    beginRedelegate(value: MsgBeginRedelegate): {
        typeUrl: string;
        value: MsgBeginRedelegate;
    };
    undelegate(value: MsgUndelegate): {
        typeUrl: string;
        value: MsgUndelegate;
    };
};
