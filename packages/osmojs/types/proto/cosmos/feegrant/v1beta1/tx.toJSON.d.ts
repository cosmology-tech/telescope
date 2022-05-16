import { MsgGrantAllowance, MsgRevokeAllowance } from "./tx";
export declare const toJSON: {
    grantAllowance(value: MsgGrantAllowance): {
        typeUrl: string;
        value: unknown;
    };
    revokeAllowance(value: MsgRevokeAllowance): {
        typeUrl: string;
        value: unknown;
    };
};
