import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
export declare const json: {
    softwareUpgrade(value: MsgSoftwareUpgrade): {
        typeUrl: string;
        value: MsgSoftwareUpgrade;
    };
    cancelUpgrade(value: MsgCancelUpgrade): {
        typeUrl: string;
        value: MsgCancelUpgrade;
    };
};
