import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "../../../akash/deployment/v1beta2/deploymentmsg";
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "../../../akash/deployment/v1beta2/groupmsg";
export declare const toJSON: {
    createDeployment(value: MsgCreateDeployment): {
        typeUrl: string;
        value: unknown;
    };
    depositDeployment(value: MsgDepositDeployment): {
        typeUrl: string;
        value: unknown;
    };
    updateDeployment(value: MsgUpdateDeployment): {
        typeUrl: string;
        value: unknown;
    };
    closeDeployment(value: MsgCloseDeployment): {
        typeUrl: string;
        value: unknown;
    };
    closeGroup(value: MsgCloseGroup): {
        typeUrl: string;
        value: unknown;
    };
    pauseGroup(value: MsgPauseGroup): {
        typeUrl: string;
        value: unknown;
    };
    startGroup(value: MsgStartGroup): {
        typeUrl: string;
        value: unknown;
    };
};
