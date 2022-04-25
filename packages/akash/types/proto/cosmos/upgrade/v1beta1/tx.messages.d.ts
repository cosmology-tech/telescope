import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
export declare const messages: {
    softwareUpgrade(value: MsgSoftwareUpgrade): {
        typeUrl: string;
        value: MsgSoftwareUpgrade;
    };
    cancelUpgrade(value: MsgCancelUpgrade): {
        typeUrl: string;
        value: MsgCancelUpgrade;
    };
};
