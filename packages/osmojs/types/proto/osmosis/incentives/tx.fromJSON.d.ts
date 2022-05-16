import { MsgCreateGauge, MsgAddToGauge } from "./tx";
export declare const fromJSON: {
    createGauge(value: any): {
        typeUrl: string;
        value: MsgCreateGauge;
    };
    addToGauge(value: any): {
        typeUrl: string;
        value: MsgAddToGauge;
    };
};
