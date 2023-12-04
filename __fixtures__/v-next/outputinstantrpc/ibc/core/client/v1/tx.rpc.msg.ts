import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { MsgCreateClient, MsgCreateClientSDKType, MsgCreateClientResponse, MsgCreateClientResponseSDKType, MsgUpdateClient, MsgUpdateClientSDKType, MsgUpdateClientResponse, MsgUpdateClientResponseSDKType, MsgUpgradeClient, MsgUpgradeClientSDKType, MsgUpgradeClientResponse, MsgUpgradeClientResponseSDKType, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourSDKType, MsgSubmitMisbehaviourResponse, MsgSubmitMisbehaviourResponseSDKType } from "./tx";
/** Msg defines the ibc/client Msg service. */
export interface Msg {
  /** CreateClient defines a rpc handler method for MsgCreateClient. */
  createClient(request: BroadcastTxReq<MsgCreateClient>): Promise<DeliverTxResponse>;
  /** UpdateClient defines a rpc handler method for MsgUpdateClient. */
  updateClient(request: BroadcastTxReq<MsgUpdateClient>): Promise<DeliverTxResponse>;
  /** UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
  upgradeClient(request: BroadcastTxReq<MsgUpgradeClient>): Promise<DeliverTxResponse>;
  /** SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
  submitMisbehaviour(request: BroadcastTxReq<MsgSubmitMisbehaviour>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateClient defines a rpc handler method for MsgCreateClient. */
  createClient = async (request: BroadcastTxReq<MsgCreateClient>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateClient.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* UpdateClient defines a rpc handler method for MsgUpdateClient. */
  updateClient = async (request: BroadcastTxReq<MsgUpdateClient>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateClient.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
  upgradeClient = async (request: BroadcastTxReq<MsgUpgradeClient>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpgradeClient.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
  submitMisbehaviour = async (request: BroadcastTxReq<MsgSubmitMisbehaviour>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSubmitMisbehaviour.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};