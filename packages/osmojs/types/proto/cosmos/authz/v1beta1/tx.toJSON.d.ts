import { MsgGrant, MsgExec, MsgRevoke } from "./tx";
export declare const toJSON: {
    grant(value: MsgGrant): {
        typeUrl: string;
        value: unknown;
    };
    exec(value: MsgExec): {
        typeUrl: string;
        value: unknown;
    };
    revoke(value: MsgRevoke): {
        typeUrl: string;
        value: unknown;
    };
};
