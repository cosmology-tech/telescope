import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deployment";
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "../../../akash/deployment/v1beta1/group";
export declare const encoded: {
    createDeployment(value: MsgCreateDeployment): {
        type_url: string;
        value: Uint8Array;
    };
    depositDeployment(value: MsgDepositDeployment): {
        type_url: string;
        value: Uint8Array;
    };
    updateDeployment(value: MsgUpdateDeployment): {
        type_url: string;
        value: Uint8Array;
    };
    closeDeployment(value: MsgCloseDeployment): {
        type_url: string;
        value: Uint8Array;
    };
    closeGroup(value: MsgCloseGroup): {
        type_url: string;
        value: Uint8Array;
    };
    pauseGroup(value: MsgPauseGroup): {
        type_url: string;
        value: Uint8Array;
    };
    startGroup(value: MsgStartGroup): {
        type_url: string;
        value: Uint8Array;
    };
};
