import { DeploymentID, DeploymentIDSDKType } from "./deployment";
import { GroupSpec, GroupSpecSDKType } from "./groupspec";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GroupID, GroupIDSDKType } from "./groupid";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateDeployment, MsgCreateDeploymentSDKType, MsgCreateDeploymentResponse, MsgCreateDeploymentResponseSDKType, MsgDepositDeployment, MsgDepositDeploymentSDKType, MsgDepositDeploymentResponse, MsgDepositDeploymentResponseSDKType, MsgUpdateDeployment, MsgUpdateDeploymentSDKType, MsgUpdateDeploymentResponse, MsgUpdateDeploymentResponseSDKType, MsgCloseDeployment, MsgCloseDeploymentSDKType, MsgCloseDeploymentResponse, MsgCloseDeploymentResponseSDKType } from "./deploymentmsg";
import { MsgCloseGroup, MsgCloseGroupSDKType, MsgCloseGroupResponse, MsgCloseGroupResponseSDKType, MsgPauseGroup, MsgPauseGroupSDKType, MsgPauseGroupResponse, MsgPauseGroupResponseSDKType, MsgStartGroup, MsgStartGroupSDKType, MsgStartGroupResponse, MsgStartGroupResponseSDKType } from "./groupmsg";
/** Msg defines the deployment Msg service. */
export interface Msg {
  /** CreateDeployment defines a method to create new deployment given proper inputs. */
  createDeployment(request: BroadcastTxReq<MsgCreateDeployment>): Promise<DeliverTxResponse>;
  /** DepositDeployment deposits more funds into the deployment account */
  depositDeployment(request: BroadcastTxReq<MsgDepositDeployment>): Promise<DeliverTxResponse>;
  /** UpdateDeployment defines a method to update a deployment given proper inputs. */
  updateDeployment(request: BroadcastTxReq<MsgUpdateDeployment>): Promise<DeliverTxResponse>;
  /** CloseDeployment defines a method to close a deployment given proper inputs. */
  closeDeployment(request: BroadcastTxReq<MsgCloseDeployment>): Promise<DeliverTxResponse>;
  /** CloseGroup defines a method to close a group of a deployment given proper inputs. */
  closeGroup(request: BroadcastTxReq<MsgCloseGroup>): Promise<DeliverTxResponse>;
  /** PauseGroup defines a method to close a group of a deployment given proper inputs. */
  pauseGroup(request: BroadcastTxReq<MsgPauseGroup>): Promise<DeliverTxResponse>;
  /** StartGroup defines a method to close a group of a deployment given proper inputs. */
  startGroup(request: BroadcastTxReq<MsgStartGroup>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateDeployment defines a method to create new deployment given proper inputs. */
  createDeployment = async (request: BroadcastTxReq<MsgCreateDeployment>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateDeployment.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* DepositDeployment deposits more funds into the deployment account */
  depositDeployment = async (request: BroadcastTxReq<MsgDepositDeployment>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgDepositDeployment.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* UpdateDeployment defines a method to update a deployment given proper inputs. */
  updateDeployment = async (request: BroadcastTxReq<MsgUpdateDeployment>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateDeployment.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* CloseDeployment defines a method to close a deployment given proper inputs. */
  closeDeployment = async (request: BroadcastTxReq<MsgCloseDeployment>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCloseDeployment.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* CloseGroup defines a method to close a group of a deployment given proper inputs. */
  closeGroup = async (request: BroadcastTxReq<MsgCloseGroup>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCloseGroup.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* PauseGroup defines a method to close a group of a deployment given proper inputs. */
  pauseGroup = async (request: BroadcastTxReq<MsgPauseGroup>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgPauseGroup.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* StartGroup defines a method to close a group of a deployment given proper inputs. */
  startGroup = async (request: BroadcastTxReq<MsgStartGroup>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgStartGroup.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};