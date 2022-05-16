import { MsgGrantAllowance, MsgRevokeAllowance } from "./tx";
export declare const encoded: {
    grantAllowance(value: MsgGrantAllowance): {
        type_url: string;
        value: Uint8Array;
    };
    revokeAllowance(value: MsgRevokeAllowance): {
        type_url: string;
        value: Uint8Array;
    };
};
