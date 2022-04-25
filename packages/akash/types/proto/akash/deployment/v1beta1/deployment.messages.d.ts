import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deployment";
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "../../../akash/deployment/v1beta1/group";
export declare const messages: {
    createDeployment(value: MsgCreateDeployment): {
        typeUrl: string;
        value: MsgCreateDeployment;
    };
    depositDeployment(value: MsgDepositDeployment): {
        typeUrl: string;
        value: MsgDepositDeployment;
    };
    updateDeployment(value: MsgUpdateDeployment): {
        typeUrl: string;
        value: MsgUpdateDeployment;
    };
    closeDeployment(value: MsgCloseDeployment): {
        typeUrl: string;
        value: MsgCloseDeployment;
    };
    closeGroup(value: MsgCloseGroup): {
        typeUrl: string;
        value: MsgCloseGroup;
    };
    pauseGroup(value: MsgPauseGroup): {
        typeUrl: string;
        value: MsgPauseGroup;
    };
    startGroup(value: MsgStartGroup): {
        typeUrl: string;
        value: MsgStartGroup;
    };
};
