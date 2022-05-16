import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
export declare const encoded: {
    softwareUpgrade(value: MsgSoftwareUpgrade): {
        type_url: string;
        value: Uint8Array;
    };
    cancelUpgrade(value: MsgCancelUpgrade): {
        type_url: string;
        value: Uint8Array;
    };
};
