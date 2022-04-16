import { MsgGrantAllowance, MsgRevokeAllowance } from "./tx";
export declare const json: {
    grantAllowance(value: MsgGrantAllowance): {
        typeUrl: string;
        value: MsgGrantAllowance;
    };
    revokeAllowance(value: MsgRevokeAllowance): {
        typeUrl: string;
        value: MsgRevokeAllowance;
    };
};
