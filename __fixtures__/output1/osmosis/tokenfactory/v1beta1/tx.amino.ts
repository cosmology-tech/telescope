import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin } from "./tx";
export interface AminoMsgCreateDenom extends AminoMsg {
  type: "osmosis/tokenfactory/create-denom";
  value: {
    sender: string;
    subdenom: string;
  };
}
export interface AminoMsgMint extends AminoMsg {
  type: "osmosis/tokenfactory/mint";
  value: {
    sender: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgBurn extends AminoMsg {
  type: "osmosis/tokenfactory/burn";
  value: {
    sender: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgChangeAdmin extends AminoMsg {
  type: "osmosis/tokenfactory/change-admin";
  value: {
    sender: string;
    denom: string;
    newAdmin: string;
  };
}
export const AminoConverter = {
  "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
    aminoType: "osmosis/tokenfactory/create-denom",
    toAmino: ({
      sender,
      subdenom
    }: MsgCreateDenom): AminoMsgCreateDenom["value"] => {
      return {
        sender,
        subdenom
      };
    },
    fromAmino: ({
      sender,
      subdenom
    }: AminoMsgCreateDenom["value"]): MsgCreateDenom => {
      return {
        sender,
        subdenom
      };
    }
  },
  "/osmosis.tokenfactory.v1beta1.MsgMint": {
    aminoType: "osmosis/tokenfactory/mint",
    toAmino: ({
      sender,
      amount
    }: MsgMint): AminoMsgMint["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      amount
    }: AminoMsgMint["value"]): MsgMint => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/osmosis.tokenfactory.v1beta1.MsgBurn": {
    aminoType: "osmosis/tokenfactory/burn",
    toAmino: ({
      sender,
      amount
    }: MsgBurn): AminoMsgBurn["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      amount
    }: AminoMsgBurn["value"]): MsgBurn => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
    aminoType: "osmosis/tokenfactory/change-admin",
    toAmino: ({
      sender,
      denom,
      newAdmin
    }: MsgChangeAdmin): AminoMsgChangeAdmin["value"] => {
      return {
        sender,
        denom,
        newAdmin
      };
    },
    fromAmino: ({
      sender,
      denom,
      newAdmin
    }: AminoMsgChangeAdmin["value"]): MsgChangeAdmin => {
      return {
        sender,
        denom,
        newAdmin
      };
    }
  }
};