import { Any, AnySDKType } from "../../../google/protobuf/any";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgGrantAllowance, MsgGrantAllowanceSDKType, MsgGrantAllowanceResponse, MsgGrantAllowanceResponseSDKType, MsgRevokeAllowance, MsgRevokeAllowanceSDKType, MsgRevokeAllowanceResponse, MsgRevokeAllowanceResponseSDKType } from "./tx";
/** Msg defines the feegrant msg service. */
export interface Msg {
  /**
   * GrantAllowance grants fee allowance to the grantee on the granter's
   * account with the provided expiration time.
   */
  grantAllowance(request: BroadcastTxReq<MsgGrantAllowance>): Promise<DeliverTxResponse>;
  /**
   * RevokeAllowance revokes any fee allowance of granter's account that
   * has been granted to the grantee.
   */
  revokeAllowance(request: BroadcastTxReq<MsgRevokeAllowance>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* GrantAllowance grants fee allowance to the grantee on the granter's
   account with the provided expiration time. */
  grantAllowance = async (request: BroadcastTxReq<MsgGrantAllowance>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgGrantAllowance.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* RevokeAllowance revokes any fee allowance of granter's account that
   has been granted to the grantee. */
  revokeAllowance = async (request: BroadcastTxReq<MsgRevokeAllowance>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRevokeAllowance.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};