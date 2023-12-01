import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { MsgCreateClient, MsgCreateClientSDKType, MsgCreateClientResponse, MsgCreateClientResponseSDKType, MsgUpdateClient, MsgUpdateClientSDKType, MsgUpdateClientResponse, MsgUpdateClientResponseSDKType, MsgUpgradeClient, MsgUpgradeClientSDKType, MsgUpgradeClientResponse, MsgUpgradeClientResponseSDKType, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourSDKType, MsgSubmitMisbehaviourResponse, MsgSubmitMisbehaviourResponseSDKType } from "./tx";
/** Msg defines the ibc/client Msg service. */
export interface Msg {
  /** CreateClient defines a rpc handler method for MsgCreateClient. */
  createClient(request: BroadcastTxReq<MsgCreateClient>): Promise<BroadcastTxRes<MsgCreateClientResponse>>;
  /** UpdateClient defines a rpc handler method for MsgUpdateClient. */
  updateClient(request: BroadcastTxReq<MsgUpdateClient>): Promise<BroadcastTxRes<MsgUpdateClientResponse>>;
  /** UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
  upgradeClient(request: BroadcastTxReq<MsgUpgradeClient>): Promise<BroadcastTxRes<MsgUpgradeClientResponse>>;
  /** SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
  submitMisbehaviour(request: BroadcastTxReq<MsgSubmitMisbehaviour>): Promise<BroadcastTxRes<MsgSubmitMisbehaviourResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateClient defines a rpc handler method for MsgCreateClient. */
  createClient = async (request: BroadcastTxReq<MsgCreateClient>): Promise<BroadcastTxRes<MsgCreateClientResponse>> => {
    const data = [{
      typeUrl: MsgCreateClient.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCreateClientResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* UpdateClient defines a rpc handler method for MsgUpdateClient. */
  updateClient = async (request: BroadcastTxReq<MsgUpdateClient>): Promise<BroadcastTxRes<MsgUpdateClientResponse>> => {
    const data = [{
      typeUrl: MsgUpdateClient.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgUpdateClientResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
  upgradeClient = async (request: BroadcastTxReq<MsgUpgradeClient>): Promise<BroadcastTxRes<MsgUpgradeClientResponse>> => {
    const data = [{
      typeUrl: MsgUpgradeClient.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgUpgradeClientResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
  submitMisbehaviour = async (request: BroadcastTxReq<MsgSubmitMisbehaviour>): Promise<BroadcastTxRes<MsgSubmitMisbehaviourResponse>> => {
    const data = [{
      typeUrl: MsgSubmitMisbehaviour.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgSubmitMisbehaviourResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};