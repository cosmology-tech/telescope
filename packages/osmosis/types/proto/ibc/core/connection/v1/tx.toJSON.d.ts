import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm } from "./tx";
export declare const toJSON: {
    connectionOpenInit(value: MsgConnectionOpenInit): {
        typeUrl: string;
        value: unknown;
    };
    connectionOpenTry(value: MsgConnectionOpenTry): {
        typeUrl: string;
        value: unknown;
    };
    connectionOpenAck(value: MsgConnectionOpenAck): {
        typeUrl: string;
        value: unknown;
    };
    connectionOpenConfirm(value: MsgConnectionOpenConfirm): {
        typeUrl: string;
        value: unknown;
    };
};
