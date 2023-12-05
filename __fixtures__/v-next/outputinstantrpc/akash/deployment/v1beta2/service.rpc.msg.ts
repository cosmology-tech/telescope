import { DeploymentID, DeploymentIDSDKType } from "./deployment";
import { GroupSpec, GroupSpecSDKType } from "./groupspec";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GroupID, GroupIDSDKType } from "./groupid";
import { DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateDeployment, MsgCreateDeploymentSDKType, MsgCreateDeploymentResponse, MsgCreateDeploymentResponseSDKType, MsgDepositDeployment, MsgDepositDeploymentSDKType, MsgDepositDeploymentResponse, MsgDepositDeploymentResponseSDKType, MsgUpdateDeployment, MsgUpdateDeploymentSDKType, MsgUpdateDeploymentResponse, MsgUpdateDeploymentResponseSDKType, MsgCloseDeployment, MsgCloseDeploymentSDKType, MsgCloseDeploymentResponse, MsgCloseDeploymentResponseSDKType } from "./deploymentmsg";
import { MsgCloseGroup, MsgCloseGroupSDKType, MsgCloseGroupResponse, MsgCloseGroupResponseSDKType, MsgPauseGroup, MsgPauseGroupSDKType, MsgPauseGroupResponse, MsgPauseGroupResponseSDKType, MsgStartGroup, MsgStartGroupSDKType, MsgStartGroupResponse, MsgStartGroupResponseSDKType } from "./groupmsg";
/** Msg defines the deployment Msg service. */
export interface Msg {
  /** CreateDeployment defines a method to create new deployment given proper inputs. */
  createDeployment(signerAddress: string, message: MsgCreateDeployment, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** DepositDeployment deposits more funds into the deployment account */
  depositDeployment(signerAddress: string, message: MsgDepositDeployment, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** UpdateDeployment defines a method to update a deployment given proper inputs. */
  updateDeployment(signerAddress: string, message: MsgUpdateDeployment, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** CloseDeployment defines a method to close a deployment given proper inputs. */
  closeDeployment(signerAddress: string, message: MsgCloseDeployment, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** CloseGroup defines a method to close a group of a deployment given proper inputs. */
  closeGroup(signerAddress: string, message: MsgCloseGroup, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** PauseGroup defines a method to close a group of a deployment given proper inputs. */
  pauseGroup(signerAddress: string, message: MsgPauseGroup, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** StartGroup defines a method to close a group of a deployment given proper inputs. */
  startGroup(signerAddress: string, message: MsgStartGroup, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateDeployment defines a method to create new deployment given proper inputs. */
  createDeployment = async (signerAddress: string, message: MsgCreateDeployment, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateDeployment.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* DepositDeployment deposits more funds into the deployment account */
  depositDeployment = async (signerAddress: string, message: MsgDepositDeployment, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgDepositDeployment.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* UpdateDeployment defines a method to update a deployment given proper inputs. */
  updateDeployment = async (signerAddress: string, message: MsgUpdateDeployment, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateDeployment.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* CloseDeployment defines a method to close a deployment given proper inputs. */
  closeDeployment = async (signerAddress: string, message: MsgCloseDeployment, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCloseDeployment.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* CloseGroup defines a method to close a group of a deployment given proper inputs. */
  closeGroup = async (signerAddress: string, message: MsgCloseGroup, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCloseGroup.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* PauseGroup defines a method to close a group of a deployment given proper inputs. */
  pauseGroup = async (signerAddress: string, message: MsgPauseGroup, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgPauseGroup.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* StartGroup defines a method to close a group of a deployment given proper inputs. */
  startGroup = async (signerAddress: string, message: MsgStartGroup, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
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