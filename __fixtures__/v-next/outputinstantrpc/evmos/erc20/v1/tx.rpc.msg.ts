import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgConvertCoin, MsgConvertCoinSDKType, MsgConvertCoinResponse, MsgConvertCoinResponseSDKType, MsgConvertERC20, MsgConvertERC20SDKType, MsgConvertERC20Response, MsgConvertERC20ResponseSDKType } from "./tx";
/** Msg defines the erc20 Msg service. */
export interface Msg {
  /**
   * ConvertCoin mints a ERC20 representation of the native Cosmos coin denom
   * that is registered on the token mapping.
   */
  convertCoin(request: BroadcastTxReq<MsgConvertCoin>): Promise<BroadcastTxRes<MsgConvertCoinResponse>>;
  /**
   * ConvertERC20 mints a native Cosmos coin representation of the ERC20 token
   * contract that is registered on the token mapping.
   */
  convertERC20(request: BroadcastTxReq<MsgConvertERC20>): Promise<BroadcastTxRes<MsgConvertERC20Response>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* ConvertCoin mints a ERC20 representation of the native Cosmos coin denom
   that is registered on the token mapping. */
  convertCoin = async (request: BroadcastTxReq<MsgConvertCoin>): Promise<BroadcastTxRes<MsgConvertCoinResponse>> => {
    const data = [{
      typeUrl: MsgConvertCoin.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgConvertCoinResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* ConvertERC20 mints a native Cosmos coin representation of the ERC20 token
   contract that is registered on the token mapping. */
  convertERC20 = async (request: BroadcastTxReq<MsgConvertERC20>): Promise<BroadcastTxRes<MsgConvertERC20Response>> => {
    const data = [{
      typeUrl: MsgConvertERC20.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgConvertERC20Response.decode(data.msgResponses[0].value) : undefined
    }));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};