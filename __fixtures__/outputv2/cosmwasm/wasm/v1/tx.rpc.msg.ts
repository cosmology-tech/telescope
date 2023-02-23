import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { MsgStoreCode, MsgStoreCodeSDKType, MsgStoreCodeResponse, MsgStoreCodeResponseSDKType, MsgInstantiateContract, MsgInstantiateContractSDKType, MsgInstantiateContractResponse, MsgInstantiateContractResponseSDKType, MsgExecuteContract, MsgExecuteContractSDKType, MsgExecuteContractResponse, MsgExecuteContractResponseSDKType, MsgMigrateContract, MsgMigrateContractSDKType, MsgMigrateContractResponse, MsgMigrateContractResponseSDKType, MsgUpdateAdmin, MsgUpdateAdminSDKType, MsgUpdateAdminResponse, MsgUpdateAdminResponseSDKType, MsgClearAdmin, MsgClearAdminSDKType, MsgClearAdminResponse, MsgClearAdminResponseSDKType } from "./tx";

/** Msg defines the wasm Msg service. */
export interface Msg {
  /** StoreCode to submit Wasm code to the system */
  StoreCode(request: DeepPartial<MsgStoreCode>, metadata?: grpc.Metadata): Promise<MsgStoreCodeResponse>;

  /** Instantiate creates a new smart contract instance for the given code id. */
  InstantiateContract(request: DeepPartial<MsgInstantiateContract>, metadata?: grpc.Metadata): Promise<MsgInstantiateContractResponse>;

  /** Execute submits the given message data to a smart contract */
  ExecuteContract(request: DeepPartial<MsgExecuteContract>, metadata?: grpc.Metadata): Promise<MsgExecuteContractResponse>;

  /** Migrate runs a code upgrade/ downgrade for a smart contract */
  MigrateContract(request: DeepPartial<MsgMigrateContract>, metadata?: grpc.Metadata): Promise<MsgMigrateContractResponse>;

  /** UpdateAdmin sets a new   admin for a smart contract */
  UpdateAdmin(request: DeepPartial<MsgUpdateAdmin>, metadata?: grpc.Metadata): Promise<MsgUpdateAdminResponse>;

  /** ClearAdmin removes any admin stored for a smart contract */
  ClearAdmin(request: DeepPartial<MsgClearAdmin>, metadata?: grpc.Metadata): Promise<MsgClearAdminResponse>;
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

  storeCode(request: DeepPartial<MsgStoreCode>, metadata?: grpc.Metadata): Promise<MsgStoreCodeResponse> {
    return this.rpc.unary(MsgStoreCode, MsgStoreCode.fromPartial(request), metadata);
  }

  instantiateContract(request: DeepPartial<MsgInstantiateContract>, metadata?: grpc.Metadata): Promise<MsgInstantiateContractResponse> {
    return this.rpc.unary(MsgInstantiateContract, MsgInstantiateContract.fromPartial(request), metadata);
  }

  executeContract(request: DeepPartial<MsgExecuteContract>, metadata?: grpc.Metadata): Promise<MsgExecuteContractResponse> {
    return this.rpc.unary(MsgExecuteContract, MsgExecuteContract.fromPartial(request), metadata);
  }

  migrateContract(request: DeepPartial<MsgMigrateContract>, metadata?: grpc.Metadata): Promise<MsgMigrateContractResponse> {
    return this.rpc.unary(MsgMigrateContract, MsgMigrateContract.fromPartial(request), metadata);
  }

  updateAdmin(request: DeepPartial<MsgUpdateAdmin>, metadata?: grpc.Metadata): Promise<MsgUpdateAdminResponse> {
    return this.rpc.unary(MsgUpdateAdmin, MsgUpdateAdmin.fromPartial(request), metadata);
  }

  clearAdmin(request: DeepPartial<MsgClearAdmin>, metadata?: grpc.Metadata): Promise<MsgClearAdminResponse> {
    return this.rpc.unary(MsgClearAdmin, MsgClearAdmin.fromPartial(request), metadata);
  }

}