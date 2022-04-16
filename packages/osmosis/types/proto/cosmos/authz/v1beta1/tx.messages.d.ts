import { MsgGrant, MsgExec, MsgRevoke } from "./tx";
export declare const messages: {
    grant(value: MsgGrant): {
        typeUrl: string;
        value: MsgGrant;
    };
    exec(value: MsgExec): {
        typeUrl: string;
        value: MsgExec;
    };
    revoke(value: MsgRevoke): {
        typeUrl: string;
        value: MsgRevoke;
    };
};
