import { MsgCreateGauge, MsgAddToGauge } from "./tx";
export declare const encoded: {
    createGauge(value: MsgCreateGauge): {
        type_url: string;
        value: Uint8Array;
    };
    addToGauge(value: MsgAddToGauge): {
        type_url: string;
        value: Uint8Array;
    };
};
