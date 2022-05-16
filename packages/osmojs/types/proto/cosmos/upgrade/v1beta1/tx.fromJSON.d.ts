import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
export declare const fromJSON: {
    softwareUpgrade(value: any): {
        typeUrl: string;
        value: MsgSoftwareUpgrade;
    };
    cancelUpgrade(value: any): {
        typeUrl: string;
        value: MsgCancelUpgrade;
    };
};
