import { MsgGrant, MsgExec, MsgRevoke } from "./tx";
export declare const encoded: {
    grant(value: MsgGrant): {
        type_url: string;
        value: Uint8Array;
    };
    exec(value: MsgExec): {
        type_url: string;
        value: Uint8Array;
    };
    revoke(value: MsgRevoke): {
        type_url: string;
        value: Uint8Array;
    };
};
