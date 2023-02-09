import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Height, HeightSDKType } from "../../../core/client/v1/client";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../../helpers";
import { MsgTransfer, MsgTransferSDKType, MsgTransferResponse, MsgTransferResponseSDKType } from "./tx";

/** Msg defines the ibc/transfer Msg service. */
export interface Msg {
  /** Transfer defines a rpc handler method for MsgTransfer. */
  Transfer(request: DeepPartial<MsgTransfer>, metadata?: grpc.Metadata): Promise<MsgTransferResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.transfer = this.transfer.bind(this);
  }

  transfer(request: DeepPartial<MsgTransfer>, metadata?: grpc.Metadata): Promise<MsgTransferResponse> {
    return this.rpc.unary(MsgTransfer, MsgTransfer.fromPartial(request), metadata);
  }

}