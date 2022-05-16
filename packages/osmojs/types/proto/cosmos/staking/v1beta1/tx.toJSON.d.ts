import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate } from "./tx";
export declare const toJSON: {
    createValidator(value: MsgCreateValidator): {
        typeUrl: string;
        value: unknown;
    };
    editValidator(value: MsgEditValidator): {
        typeUrl: string;
        value: unknown;
    };
    delegate(value: MsgDelegate): {
        typeUrl: string;
        value: unknown;
    };
    beginRedelegate(value: MsgBeginRedelegate): {
        typeUrl: string;
        value: unknown;
    };
    undelegate(value: MsgUndelegate): {
        typeUrl: string;
        value: unknown;
    };
};
