import { MsgCreateGauge, MsgAddToGauge } from "./tx";
export declare const json: {
    createGauge(value: MsgCreateGauge): {
        typeUrl: string;
        value: MsgCreateGauge;
    };
    addToGauge(value: MsgAddToGauge): {
        typeUrl: string;
        value: MsgAddToGauge;
    };
};
