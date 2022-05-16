import { MsgGrant, MsgExec, MsgRevoke } from "./tx";
export declare const fromJSON: {
    grant(value: any): {
        typeUrl: string;
        value: MsgGrant;
    };
    exec(value: any): {
        typeUrl: string;
        value: MsgExec;
    };
    revoke(value: any): {
        typeUrl: string;
        value: MsgRevoke;
    };
};
