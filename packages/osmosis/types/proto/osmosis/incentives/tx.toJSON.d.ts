import { MsgCreateGauge, MsgAddToGauge } from "./tx";
export declare const toJSON: {
    createGauge(value: MsgCreateGauge): {
        typeUrl: string;
        value: unknown;
    };
    addToGauge(value: MsgAddToGauge): {
        typeUrl: string;
        value: unknown;
    };
};
