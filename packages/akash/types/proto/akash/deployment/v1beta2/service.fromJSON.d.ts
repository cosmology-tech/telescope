import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "../../../akash/deployment/v1beta2/deploymentmsg";
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "../../../akash/deployment/v1beta2/groupmsg";
export declare const fromJSON: {
    createDeployment(value: any): {
        typeUrl: string;
        value: MsgCreateDeployment;
    };
    depositDeployment(value: any): {
        typeUrl: string;
        value: MsgDepositDeployment;
    };
    updateDeployment(value: any): {
        typeUrl: string;
        value: MsgUpdateDeployment;
    };
    closeDeployment(value: any): {
        typeUrl: string;
        value: MsgCloseDeployment;
    };
    closeGroup(value: any): {
        typeUrl: string;
        value: MsgCloseGroup;
    };
    pauseGroup(value: any): {
        typeUrl: string;
        value: MsgPauseGroup;
    };
    startGroup(value: any): {
        typeUrl: string;
        value: MsgStartGroup;
    };
};
