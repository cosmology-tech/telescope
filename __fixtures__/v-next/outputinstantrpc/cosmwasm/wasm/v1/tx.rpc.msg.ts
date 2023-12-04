import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgStoreCode, MsgStoreCodeSDKType, MsgStoreCodeResponse, MsgStoreCodeResponseSDKType, MsgInstantiateContract, MsgInstantiateContractSDKType, MsgInstantiateContractResponse, MsgInstantiateContractResponseSDKType, MsgExecuteContract, MsgExecuteContractSDKType, MsgExecuteContractResponse, MsgExecuteContractResponseSDKType, MsgMigrateContract, MsgMigrateContractSDKType, MsgMigrateContractResponse, MsgMigrateContractResponseSDKType, MsgUpdateAdmin, MsgUpdateAdminSDKType, MsgUpdateAdminResponse, MsgUpdateAdminResponseSDKType, MsgClearAdmin, MsgClearAdminSDKType, MsgClearAdminResponse, MsgClearAdminResponseSDKType } from "./tx";
/** Msg defines the wasm Msg service. */
export interface Msg {
  /** StoreCode to submit Wasm code to the system */
  storeCode(request: BroadcastTxReq<MsgStoreCode>): Promise<DeliverTxResponse>;
  /** Instantiate creates a new smart contract instance for the given code id. */
  instantiateContract(request: BroadcastTxReq<MsgInstantiateContract>): Promise<DeliverTxResponse>;
  /** Execute submits the given message data to a smart contract */
  executeContract(request: BroadcastTxReq<MsgExecuteContract>): Promise<DeliverTxResponse>;
  /** Migrate runs a code upgrade/ downgrade for a smart contract */
  migrateContract(request: BroadcastTxReq<MsgMigrateContract>): Promise<DeliverTxResponse>;
  /** UpdateAdmin sets a new   admin for a smart contract */
  updateAdmin(request: BroadcastTxReq<MsgUpdateAdmin>): Promise<DeliverTxResponse>;
  /** ClearAdmin removes any admin stored for a smart contract */
  clearAdmin(request: BroadcastTxReq<MsgClearAdmin>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* StoreCode to submit Wasm code to the system */
  storeCode = async (request: BroadcastTxReq<MsgStoreCode>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgStoreCode.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* Instantiate creates a new smart contract instance for the given code id. */
  instantiateContract = async (request: BroadcastTxReq<MsgInstantiateContract>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgInstantiateContract.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* Execute submits the given message data to a smart contract */
  executeContract = async (request: BroadcastTxReq<MsgExecuteContract>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgExecuteContract.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* Migrate runs a code upgrade/ downgrade for a smart contract */
  migrateContract = async (request: BroadcastTxReq<MsgMigrateContract>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgMigrateContract.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* UpdateAdmin sets a new   admin for a smart contract */
  updateAdmin = async (request: BroadcastTxReq<MsgUpdateAdmin>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateAdmin.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* ClearAdmin removes any admin stored for a smart contract */
  clearAdmin = async (request: BroadcastTxReq<MsgClearAdmin>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgClearAdmin.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};