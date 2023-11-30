import { DeploymentID, DeploymentIDSDKType } from "./deployment";
import { GroupSpec, GroupSpecSDKType } from "./groupspec";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GroupID, GroupIDSDKType } from "./groupid";
import { BroadcastTxRequest, BroadcastTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateDeployment, MsgCreateDeploymentSDKType, MsgCreateDeploymentResponse, MsgCreateDeploymentResponseSDKType, MsgDepositDeployment, MsgDepositDeploymentSDKType, MsgDepositDeploymentResponse, MsgDepositDeploymentResponseSDKType, MsgUpdateDeployment, MsgUpdateDeploymentSDKType, MsgUpdateDeploymentResponse, MsgUpdateDeploymentResponseSDKType, MsgCloseDeployment, MsgCloseDeploymentSDKType, MsgCloseDeploymentResponse, MsgCloseDeploymentResponseSDKType } from "./deploymentmsg";
import { MsgCloseGroup, MsgCloseGroupSDKType, MsgCloseGroupResponse, MsgCloseGroupResponseSDKType, MsgPauseGroup, MsgPauseGroupSDKType, MsgPauseGroupResponse, MsgPauseGroupResponseSDKType, MsgStartGroup, MsgStartGroupSDKType, MsgStartGroupResponse, MsgStartGroupResponseSDKType } from "./groupmsg";
/** Msg defines the deployment Msg service. */
export interface Msg {
  /** CreateDeployment defines a method to create new deployment given proper inputs. */
  createDeployment(request: BroadcastTxRequest<MsgCreateDeployment>): Promise<BroadcastTxResponse<MsgCreateDeploymentResponse>>;
  /** DepositDeployment deposits more funds into the deployment account */
  depositDeployment(request: BroadcastTxRequest<MsgDepositDeployment>): Promise<BroadcastTxResponse<MsgDepositDeploymentResponse>>;
  /** UpdateDeployment defines a method to update a deployment given proper inputs. */
  updateDeployment(request: BroadcastTxRequest<MsgUpdateDeployment>): Promise<BroadcastTxResponse<MsgUpdateDeploymentResponse>>;
  /** CloseDeployment defines a method to close a deployment given proper inputs. */
  closeDeployment(request: BroadcastTxRequest<MsgCloseDeployment>): Promise<BroadcastTxResponse<MsgCloseDeploymentResponse>>;
  /** CloseGroup defines a method to close a group of a deployment given proper inputs. */
  closeGroup(request: BroadcastTxRequest<MsgCloseGroup>): Promise<BroadcastTxResponse<MsgCloseGroupResponse>>;
  /** PauseGroup defines a method to close a group of a deployment given proper inputs. */
  pauseGroup(request: BroadcastTxRequest<MsgPauseGroup>): Promise<BroadcastTxResponse<MsgPauseGroupResponse>>;
  /** StartGroup defines a method to close a group of a deployment given proper inputs. */
  startGroup(request: BroadcastTxRequest<MsgStartGroup>): Promise<BroadcastTxResponse<MsgStartGroupResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateDeployment defines a method to create new deployment given proper inputs. */
  createDeployment = async (request: BroadcastTxRequest<MsgCreateDeployment>): Promise<BroadcastTxResponse<MsgCreateDeploymentResponse>> => {
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
  depositDeployment = async (request: BroadcastTxRequest<MsgDepositDeployment>): Promise<BroadcastTxResponse<MsgDepositDeploymentResponse>> => {
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
  updateDeployment = async (request: BroadcastTxRequest<MsgUpdateDeployment>): Promise<BroadcastTxResponse<MsgUpdateDeploymentResponse>> => {
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
  closeDeployment = async (request: BroadcastTxRequest<MsgCloseDeployment>): Promise<BroadcastTxResponse<MsgCloseDeploymentResponse>> => {
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
  closeGroup = async (request: BroadcastTxRequest<MsgCloseGroup>): Promise<BroadcastTxResponse<MsgCloseGroupResponse>> => {
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
  pauseGroup = async (request: BroadcastTxRequest<MsgPauseGroup>): Promise<BroadcastTxResponse<MsgPauseGroupResponse>> => {
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
  startGroup = async (request: BroadcastTxRequest<MsgStartGroup>): Promise<BroadcastTxResponse<MsgStartGroupResponse>> => {
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