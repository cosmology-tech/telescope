import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "../../../akash/deployment/v1beta2/deploymentmsg";
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "../../../akash/deployment/v1beta2/groupmsg";
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
