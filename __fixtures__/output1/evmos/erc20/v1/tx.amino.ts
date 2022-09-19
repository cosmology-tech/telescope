import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgConvertCoin, MsgConvertCoinSDKType, MsgConvertERC20, MsgConvertERC20SDKType } from "./tx";
export interface AminoMsgConvertCoin extends AminoMsg {
  type: "/evmos.erc20.v1.MsgConvertCoin";
  value: {
    coin: {
      denom: string;
      amount: string;
    };
    receiver: string;
    sender: string;
  };
}
export interface AminoMsgConvertERC20 extends AminoMsg {
  type: "/evmos.erc20.v1.MsgConvertERC20";
  value: {
    contract_address: string;
    amount: string;
    receiver: string;
    sender: string;
  };
}
export const AminoConverter = {
  "/evmos.erc20.v1.MsgConvertCoin": {
    aminoType: "/evmos.erc20.v1.MsgConvertCoin",
    toAmino: ({
      coin,
      receiver,
      sender
    }: MsgConvertCoin): AminoMsgConvertCoin["value"] => {
      return {
        coin: {
          denom: coin.denom,
          amount: Long.fromNumber(coin.amount).toString()
        },
        receiver,
        sender
      };
    },
    fromAmino: ({
      coin,
      receiver,
      sender
    }: AminoMsgConvertCoin["value"]): MsgConvertCoin => {
      return {
        coin: {
          denom: coin.denom,
          amount: coin.amount
        },
        receiver,
        sender
      };
    }
  },
  "/evmos.erc20.v1.MsgConvertERC20": {
    aminoType: "/evmos.erc20.v1.MsgConvertERC20",
    toAmino: ({
      contractAddress,
      amount,
      receiver,
      sender
    }: MsgConvertERC20): AminoMsgConvertERC20["value"] => {
      return {
        contract_address: contractAddress,
        amount,
        receiver,
        sender
      };
    },
    fromAmino: ({
      contract_address,
      amount,
      receiver,
      sender
    }: AminoMsgConvertERC20["value"]): MsgConvertERC20 => {
      return {
        contractAddress: contract_address,
        amount,
        receiver,
        sender
      };
    }
  }
};