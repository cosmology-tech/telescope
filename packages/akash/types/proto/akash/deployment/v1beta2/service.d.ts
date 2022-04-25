import { MsgCreateDeploymentResponse, MsgDepositDeploymentResponse, MsgUpdateDeploymentResponse, MsgCloseDeploymentResponse, MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "../../../akash/deployment/v1beta2/deploymentmsg";
import { MsgCloseGroupResponse, MsgPauseGroupResponse, MsgStartGroupResponse, MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "../../../akash/deployment/v1beta2/groupmsg";
/** Msg defines the deployment Msg service. */
export interface Msg {
    /** CreateDeployment defines a method to create new deployment given proper inputs. */
    CreateDeployment(request: MsgCreateDeployment): Promise<MsgCreateDeploymentResponse>;
    /** DepositDeployment deposits more funds into the deployment account */
    DepositDeployment(request: MsgDepositDeployment): Promise<MsgDepositDeploymentResponse>;
    /** UpdateDeployment defines a method to update a deployment given proper inputs. */
    UpdateDeployment(request: MsgUpdateDeployment): Promise<MsgUpdateDeploymentResponse>;
    /** CloseDeployment defines a method to close a deployment given proper inputs. */
    CloseDeployment(request: MsgCloseDeployment): Promise<MsgCloseDeploymentResponse>;
    /** CloseGroup defines a method to close a group of a deployment given proper inputs. */
    CloseGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponse>;
    /** PauseGroup defines a method to close a group of a deployment given proper inputs. */
    PauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponse>;
    /** StartGroup defines a method to close a group of a deployment given proper inputs. */
    StartGroup(request: MsgStartGroup): Promise<MsgStartGroupResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateDeployment(request: MsgCreateDeployment): Promise<MsgCreateDeploymentResponse>;
    DepositDeployment(request: MsgDepositDeployment): Promise<MsgDepositDeploymentResponse>;
    UpdateDeployment(request: MsgUpdateDeployment): Promise<MsgUpdateDeploymentResponse>;
    CloseDeployment(request: MsgCloseDeployment): Promise<MsgCloseDeploymentResponse>;
    CloseGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponse>;
    PauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponse>;
    StartGroup(request: MsgStartGroup): Promise<MsgStartGroupResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
