import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Period, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountSDKType, MsgCreateClawbackVestingAccountResponse, MsgCreateClawbackVestingAccountResponseSDKType, MsgClawback, MsgClawbackSDKType, MsgClawbackResponse, MsgClawbackResponseSDKType } from "./tx";
/** Msg defines the vesting Msg service. */
export interface Msg {
  /**
   * CreateClawbackVestingAccount creats a vesting account that is subject to
   * clawback and the configuration of vesting and lockup schedules.
   */
  createClawbackVestingAccount(request: BroadcastTxReq<MsgCreateClawbackVestingAccount>): Promise<BroadcastTxRes<MsgCreateClawbackVestingAccountResponse>>;
  /** Clawback removes the unvested tokens from a ClawbackVestingAccount. */
  clawback(request: BroadcastTxReq<MsgClawback>): Promise<BroadcastTxRes<MsgClawbackResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateClawbackVestingAccount creats a vesting account that is subject to
   clawback and the configuration of vesting and lockup schedules. */
  createClawbackVestingAccount = async (request: BroadcastTxReq<MsgCreateClawbackVestingAccount>): Promise<BroadcastTxRes<MsgCreateClawbackVestingAccountResponse>> => {
    const data = [{
      typeUrl: MsgCreateClawbackVestingAccount.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCreateClawbackVestingAccountResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* Clawback removes the unvested tokens from a ClawbackVestingAccount. */
  clawback = async (request: BroadcastTxReq<MsgClawback>): Promise<BroadcastTxRes<MsgClawbackResponse>> => {
    const data = [{
      typeUrl: MsgClawback.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgClawbackResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}
export const createMsgClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};