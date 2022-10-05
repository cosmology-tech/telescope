import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgStoreCode, MsgStoreCodeSDKType, MsgStoreCodeResponse, MsgStoreCodeResponseSDKType, MsgInstantiateContract, MsgInstantiateContractSDKType, MsgInstantiateContractResponse, MsgInstantiateContractResponseSDKType, MsgExecuteContract, MsgExecuteContractSDKType, MsgExecuteContractResponse, MsgExecuteContractResponseSDKType, MsgMigrateContract, MsgMigrateContractSDKType, MsgMigrateContractResponse, MsgMigrateContractResponseSDKType, MsgUpdateAdmin, MsgUpdateAdminSDKType, MsgUpdateAdminResponse, MsgUpdateAdminResponseSDKType, MsgClearAdmin, MsgClearAdminSDKType, MsgClearAdminResponse, MsgClearAdminResponseSDKType } from "./tx";

/** Msg defines the wasm Msg service. */
export interface Msg {
  storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
  /*StoreCode to submit Wasm code to the system*/

  instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
  /*Instantiate creates a new smart contract instance for the given code id.*/

  executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
  /*Execute submits the given message data to a smart contract*/

  migrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse>;
  /*Migrate runs a code upgrade/ downgrade for a smart contract*/

  updateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse>;
  /*UpdateAdmin sets a new   admin for a smart contract*/

  clearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponse>;
  /*ClearAdmin removes any admin stored for a smart contract*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.storeCode = this.storeCode.bind(this);
    this.instantiateContract = this.instantiateContract.bind(this);
    this.executeContract = this.executeContract.bind(this);
    this.migrateContract = this.migrateContract.bind(this);
    this.updateAdmin = this.updateAdmin.bind(this);
    this.clearAdmin = this.clearAdmin.bind(this);
  }

  storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse> {
    const data = MsgStoreCode.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreCode", data);
    return promise.then(data => MsgStoreCodeResponse.decode(new _m0.Reader(data)));
  }

  instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse> {
    const data = MsgInstantiateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "InstantiateContract", data);
    return promise.then(data => MsgInstantiateContractResponse.decode(new _m0.Reader(data)));
  }

  executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse> {
    const data = MsgExecuteContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ExecuteContract", data);
    return promise.then(data => MsgExecuteContractResponse.decode(new _m0.Reader(data)));
  }

  migrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse> {
    const data = MsgMigrateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "MigrateContract", data);
    return promise.then(data => MsgMigrateContractResponse.decode(new _m0.Reader(data)));
  }

  updateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse> {
    const data = MsgUpdateAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateAdmin", data);
    return promise.then(data => MsgUpdateAdminResponse.decode(new _m0.Reader(data)));
  }

  clearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponse> {
    const data = MsgClearAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ClearAdmin", data);
    return promise.then(data => MsgClearAdminResponse.decode(new _m0.Reader(data)));
  }

}