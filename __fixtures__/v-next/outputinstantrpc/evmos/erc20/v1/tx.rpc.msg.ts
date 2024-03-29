import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgConvertCoin, MsgConvertCoinSDKType, MsgConvertCoinResponse, MsgConvertCoinResponseSDKType, MsgConvertERC20, MsgConvertERC20SDKType, MsgConvertERC20Response, MsgConvertERC20ResponseSDKType } from "./tx";
/** Msg defines the erc20 Msg service. */
export interface Msg {
  /**
   * ConvertCoin mints a ERC20 representation of the native Cosmos coin denom
   * that is registered on the token mapping.
   */
  convertCoin(signerAddress: string, message: MsgConvertCoin, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * ConvertERC20 mints a native Cosmos coin representation of the ERC20 token
   * contract that is registered on the token mapping.
   */
  convertERC20(signerAddress: string, message: MsgConvertERC20, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* ConvertCoin mints a ERC20 representation of the native Cosmos coin denom
   that is registered on the token mapping. */
  convertCoin = async (signerAddress: string, message: MsgConvertCoin, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgConvertCoin.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ConvertERC20 mints a native Cosmos coin representation of the ERC20 token
   contract that is registered on the token mapping. */
  convertERC20 = async (signerAddress: string, message: MsgConvertERC20, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgConvertERC20.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};