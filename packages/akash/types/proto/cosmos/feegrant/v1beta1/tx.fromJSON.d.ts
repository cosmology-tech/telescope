import { MsgGrantAllowance, MsgRevokeAllowance } from "./tx";
export declare const fromJSON: {
    grantAllowance(value: any): {
        typeUrl: string;
        value: MsgGrantAllowance;
    };
    revokeAllowance(value: any): {
        typeUrl: string;
        value: MsgRevokeAllowance;
    };
};
