import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
export declare const toJSON: {
    softwareUpgrade(value: MsgSoftwareUpgrade): {
        typeUrl: string;
        value: unknown;
    };
    cancelUpgrade(value: MsgCancelUpgrade): {
        typeUrl: string;
        value: unknown;
    };
};
