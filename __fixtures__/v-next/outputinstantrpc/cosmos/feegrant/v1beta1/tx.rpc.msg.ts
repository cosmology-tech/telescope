import { Any, AnySDKType } from "../../../google/protobuf/any";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgGrantAllowance, MsgGrantAllowanceSDKType, MsgGrantAllowanceResponse, MsgGrantAllowanceResponseSDKType, MsgRevokeAllowance, MsgRevokeAllowanceSDKType, MsgRevokeAllowanceResponse, MsgRevokeAllowanceResponseSDKType } from "./tx";
/** Msg defines the feegrant msg service. */
export interface Msg {
  /**
   * GrantAllowance grants fee allowance to the grantee on the granter's
   * account with the provided expiration time.
   */
  grantAllowance(request: BroadcastTxReq<MsgGrantAllowance>): Promise<BroadcastTxRes<MsgGrantAllowanceResponse>>;
  /**
   * RevokeAllowance revokes any fee allowance of granter's account that
   * has been granted to the grantee.
   */
  revokeAllowance(request: BroadcastTxReq<MsgRevokeAllowance>): Promise<BroadcastTxRes<MsgRevokeAllowanceResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* GrantAllowance grants fee allowance to the grantee on the granter's
   account with the provided expiration time. */
  grantAllowance = async (request: BroadcastTxReq<MsgGrantAllowance>): Promise<BroadcastTxRes<MsgGrantAllowanceResponse>> => {
    const data = [{
      typeUrl: MsgGrantAllowance.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgGrantAllowanceResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* RevokeAllowance revokes any fee allowance of granter's account that
   has been granted to the grantee. */
  revokeAllowance = async (request: BroadcastTxReq<MsgRevokeAllowance>): Promise<BroadcastTxRes<MsgRevokeAllowanceResponse>> => {
    const data = [{
      typeUrl: MsgRevokeAllowance.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgRevokeAllowanceResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}
export const createMsgClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};