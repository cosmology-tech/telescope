import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Period, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountSDKType, MsgCreateClawbackVestingAccountResponse, MsgCreateClawbackVestingAccountResponseSDKType, MsgClawback, MsgClawbackSDKType, MsgClawbackResponse, MsgClawbackResponseSDKType } from "./tx";
/** Msg defines the vesting Msg service. */
export interface Msg {
  /**
   * CreateClawbackVestingAccount creats a vesting account that is subject to
   * clawback and the configuration of vesting and lockup schedules.
   */
  createClawbackVestingAccount(request: BroadcastTxReq<MsgCreateClawbackVestingAccount>): Promise<DeliverTxResponse>;
  /** Clawback removes the unvested tokens from a ClawbackVestingAccount. */
  clawback(request: BroadcastTxReq<MsgClawback>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateClawbackVestingAccount creats a vesting account that is subject to
   clawback and the configuration of vesting and lockup schedules. */
  createClawbackVestingAccount = async (request: BroadcastTxReq<MsgCreateClawbackVestingAccount>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateClawbackVestingAccount.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* Clawback removes the unvested tokens from a ClawbackVestingAccount. */
  clawback = async (request: BroadcastTxReq<MsgClawback>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgClawback.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};