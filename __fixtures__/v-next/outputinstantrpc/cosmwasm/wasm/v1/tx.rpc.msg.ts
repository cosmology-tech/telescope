import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BroadcastTxRequest, BroadcastTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgStoreCode, MsgStoreCodeSDKType, MsgStoreCodeResponse, MsgStoreCodeResponseSDKType, MsgInstantiateContract, MsgInstantiateContractSDKType, MsgInstantiateContractResponse, MsgInstantiateContractResponseSDKType, MsgExecuteContract, MsgExecuteContractSDKType, MsgExecuteContractResponse, MsgExecuteContractResponseSDKType, MsgMigrateContract, MsgMigrateContractSDKType, MsgMigrateContractResponse, MsgMigrateContractResponseSDKType, MsgUpdateAdmin, MsgUpdateAdminSDKType, MsgUpdateAdminResponse, MsgUpdateAdminResponseSDKType, MsgClearAdmin, MsgClearAdminSDKType, MsgClearAdminResponse, MsgClearAdminResponseSDKType } from "./tx";
/** Msg defines the wasm Msg service. */
export interface Msg {
  /** StoreCode to submit Wasm code to the system */
  storeCode(request: BroadcastTxRequest<MsgStoreCode>): Promise<BroadcastTxResponse<MsgStoreCodeResponse>>;
  /** Instantiate creates a new smart contract instance for the given code id. */
  instantiateContract(request: BroadcastTxRequest<MsgInstantiateContract>): Promise<BroadcastTxResponse<MsgInstantiateContractResponse>>;
  /** Execute submits the given message data to a smart contract */
  executeContract(request: BroadcastTxRequest<MsgExecuteContract>): Promise<BroadcastTxResponse<MsgExecuteContractResponse>>;
  /** Migrate runs a code upgrade/ downgrade for a smart contract */
  migrateContract(request: BroadcastTxRequest<MsgMigrateContract>): Promise<BroadcastTxResponse<MsgMigrateContractResponse>>;
  /** UpdateAdmin sets a new   admin for a smart contract */
  updateAdmin(request: BroadcastTxRequest<MsgUpdateAdmin>): Promise<BroadcastTxResponse<MsgUpdateAdminResponse>>;
  /** ClearAdmin removes any admin stored for a smart contract */
  clearAdmin(request: BroadcastTxRequest<MsgClearAdmin>): Promise<BroadcastTxResponse<MsgClearAdminResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* StoreCode to submit Wasm code to the system */
  storeCode = async (request: BroadcastTxRequest<MsgStoreCode>): Promise<BroadcastTxResponse<MsgStoreCodeResponse>> => {
    const data = [{
      typeUrl: MsgStoreCode.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgStoreCodeResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* Instantiate creates a new smart contract instance for the given code id. */
  instantiateContract = async (request: BroadcastTxRequest<MsgInstantiateContract>): Promise<BroadcastTxResponse<MsgInstantiateContractResponse>> => {
    const data = [{
      typeUrl: MsgInstantiateContract.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgInstantiateContractResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* Execute submits the given message data to a smart contract */
  executeContract = async (request: BroadcastTxRequest<MsgExecuteContract>): Promise<BroadcastTxResponse<MsgExecuteContractResponse>> => {
    const data = [{
      typeUrl: MsgExecuteContract.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgExecuteContractResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* Migrate runs a code upgrade/ downgrade for a smart contract */
  migrateContract = async (request: BroadcastTxRequest<MsgMigrateContract>): Promise<BroadcastTxResponse<MsgMigrateContractResponse>> => {
    const data = [{
      typeUrl: MsgMigrateContract.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgMigrateContractResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* UpdateAdmin sets a new   admin for a smart contract */
  updateAdmin = async (request: BroadcastTxRequest<MsgUpdateAdmin>): Promise<BroadcastTxResponse<MsgUpdateAdminResponse>> => {
    const data = [{
      typeUrl: MsgUpdateAdmin.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgUpdateAdminResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* ClearAdmin removes any admin stored for a smart contract */
  clearAdmin = async (request: BroadcastTxRequest<MsgClearAdmin>): Promise<BroadcastTxResponse<MsgClearAdminResponse>> => {
    const data = [{
      typeUrl: MsgClearAdmin.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgClearAdminResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}