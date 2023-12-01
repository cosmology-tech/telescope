import { DeploymentID, DeploymentIDSDKType } from "./deployment";
import { GroupSpec, GroupSpecSDKType } from "./groupspec";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GroupID, GroupIDSDKType } from "./groupid";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateDeployment, MsgCreateDeploymentSDKType, MsgCreateDeploymentResponse, MsgCreateDeploymentResponseSDKType, MsgDepositDeployment, MsgDepositDeploymentSDKType, MsgDepositDeploymentResponse, MsgDepositDeploymentResponseSDKType, MsgUpdateDeployment, MsgUpdateDeploymentSDKType, MsgUpdateDeploymentResponse, MsgUpdateDeploymentResponseSDKType, MsgCloseDeployment, MsgCloseDeploymentSDKType, MsgCloseDeploymentResponse, MsgCloseDeploymentResponseSDKType } from "./deploymentmsg";
import { MsgCloseGroup, MsgCloseGroupSDKType, MsgCloseGroupResponse, MsgCloseGroupResponseSDKType, MsgPauseGroup, MsgPauseGroupSDKType, MsgPauseGroupResponse, MsgPauseGroupResponseSDKType, MsgStartGroup, MsgStartGroupSDKType, MsgStartGroupResponse, MsgStartGroupResponseSDKType } from "./groupmsg";
/** Msg defines the deployment Msg service. */
export interface Msg {
  /** CreateDeployment defines a method to create new deployment given proper inputs. */
  createDeployment(request: BroadcastTxReq<MsgCreateDeployment>): Promise<BroadcastTxRes<MsgCreateDeploymentResponse>>;
  /** DepositDeployment deposits more funds into the deployment account */
  depositDeployment(request: BroadcastTxReq<MsgDepositDeployment>): Promise<BroadcastTxRes<MsgDepositDeploymentResponse>>;
  /** UpdateDeployment defines a method to update a deployment given proper inputs. */
  updateDeployment(request: BroadcastTxReq<MsgUpdateDeployment>): Promise<BroadcastTxRes<MsgUpdateDeploymentResponse>>;
  /** CloseDeployment defines a method to close a deployment given proper inputs. */
  closeDeployment(request: BroadcastTxReq<MsgCloseDeployment>): Promise<BroadcastTxRes<MsgCloseDeploymentResponse>>;
  /** CloseGroup defines a method to close a group of a deployment given proper inputs. */
  closeGroup(request: BroadcastTxReq<MsgCloseGroup>): Promise<BroadcastTxRes<MsgCloseGroupResponse>>;
  /** PauseGroup defines a method to close a group of a deployment given proper inputs. */
  pauseGroup(request: BroadcastTxReq<MsgPauseGroup>): Promise<BroadcastTxRes<MsgPauseGroupResponse>>;
  /** StartGroup defines a method to close a group of a deployment given proper inputs. */
  startGroup(request: BroadcastTxReq<MsgStartGroup>): Promise<BroadcastTxRes<MsgStartGroupResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateDeployment defines a method to create new deployment given proper inputs. */
  createDeployment = async (request: BroadcastTxReq<MsgCreateDeployment>): Promise<BroadcastTxRes<MsgCreateDeploymentResponse>> => {
    const data = [{
      typeUrl: MsgCreateDeployment.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCreateDeploymentResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* DepositDeployment deposits more funds into the deployment account */
  depositDeployment = async (request: BroadcastTxReq<MsgDepositDeployment>): Promise<BroadcastTxRes<MsgDepositDeploymentResponse>> => {
    const data = [{
      typeUrl: MsgDepositDeployment.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgDepositDeploymentResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* UpdateDeployment defines a method to update a deployment given proper inputs. */
  updateDeployment = async (request: BroadcastTxReq<MsgUpdateDeployment>): Promise<BroadcastTxRes<MsgUpdateDeploymentResponse>> => {
    const data = [{
      typeUrl: MsgUpdateDeployment.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgUpdateDeploymentResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* CloseDeployment defines a method to close a deployment given proper inputs. */
  closeDeployment = async (request: BroadcastTxReq<MsgCloseDeployment>): Promise<BroadcastTxRes<MsgCloseDeploymentResponse>> => {
    const data = [{
      typeUrl: MsgCloseDeployment.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCloseDeploymentResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* CloseGroup defines a method to close a group of a deployment given proper inputs. */
  closeGroup = async (request: BroadcastTxReq<MsgCloseGroup>): Promise<BroadcastTxRes<MsgCloseGroupResponse>> => {
    const data = [{
      typeUrl: MsgCloseGroup.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCloseGroupResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* PauseGroup defines a method to close a group of a deployment given proper inputs. */
  pauseGroup = async (request: BroadcastTxReq<MsgPauseGroup>): Promise<BroadcastTxRes<MsgPauseGroupResponse>> => {
    const data = [{
      typeUrl: MsgPauseGroup.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgPauseGroupResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* StartGroup defines a method to close a group of a deployment given proper inputs. */
  startGroup = async (request: BroadcastTxReq<MsgStartGroup>): Promise<BroadcastTxRes<MsgStartGroupResponse>> => {
    const data = [{
      typeUrl: MsgStartGroup.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgStartGroupResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}
export const createMsgClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};