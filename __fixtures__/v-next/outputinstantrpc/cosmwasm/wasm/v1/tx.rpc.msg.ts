import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgStoreCode, MsgStoreCodeSDKType, MsgStoreCodeResponse, MsgStoreCodeResponseSDKType, MsgInstantiateContract, MsgInstantiateContractSDKType, MsgInstantiateContractResponse, MsgInstantiateContractResponseSDKType, MsgExecuteContract, MsgExecuteContractSDKType, MsgExecuteContractResponse, MsgExecuteContractResponseSDKType, MsgMigrateContract, MsgMigrateContractSDKType, MsgMigrateContractResponse, MsgMigrateContractResponseSDKType, MsgUpdateAdmin, MsgUpdateAdminSDKType, MsgUpdateAdminResponse, MsgUpdateAdminResponseSDKType, MsgClearAdmin, MsgClearAdminSDKType, MsgClearAdminResponse, MsgClearAdminResponseSDKType } from "./tx";
/** Msg defines the wasm Msg service. */
export interface Msg {
  /** StoreCode to submit Wasm code to the system */
  storeCode(signerAddress: string, message: MsgStoreCode, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** Instantiate creates a new smart contract instance for the given code id. */
  instantiateContract(signerAddress: string, message: MsgInstantiateContract, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** Execute submits the given message data to a smart contract */
  executeContract(signerAddress: string, message: MsgExecuteContract, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** Migrate runs a code upgrade/ downgrade for a smart contract */
  migrateContract(signerAddress: string, message: MsgMigrateContract, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** UpdateAdmin sets a new   admin for a smart contract */
  updateAdmin(signerAddress: string, message: MsgUpdateAdmin, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** ClearAdmin removes any admin stored for a smart contract */
  clearAdmin(signerAddress: string, message: MsgClearAdmin, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* StoreCode to submit Wasm code to the system */
  storeCode = async (signerAddress: string, message: MsgStoreCode, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgStoreCode.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* Instantiate creates a new smart contract instance for the given code id. */
  instantiateContract = async (signerAddress: string, message: MsgInstantiateContract, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgInstantiateContract.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* Execute submits the given message data to a smart contract */
  executeContract = async (signerAddress: string, message: MsgExecuteContract, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgExecuteContract.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* Migrate runs a code upgrade/ downgrade for a smart contract */
  migrateContract = async (signerAddress: string, message: MsgMigrateContract, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgMigrateContract.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* UpdateAdmin sets a new   admin for a smart contract */
  updateAdmin = async (signerAddress: string, message: MsgUpdateAdmin, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateAdmin.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* ClearAdmin removes any admin stored for a smart contract */
  clearAdmin = async (signerAddress: string, message: MsgClearAdmin, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
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