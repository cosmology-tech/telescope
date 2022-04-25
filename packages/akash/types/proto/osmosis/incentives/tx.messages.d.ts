import { MsgCreateGauge, MsgAddToGauge } from "./tx";
export declare const messages: {
    createGauge(value: MsgCreateGauge): {
        typeUrl: string;
        value: MsgCreateGauge;
    };
    addToGauge(value: MsgAddToGauge): {
        typeUrl: string;
        value: MsgAddToGauge;
    };
};
