import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Height } from "../../../core/client/v1/client";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgTransfer } from "../../../../../../packages/transpiler/ibc/applications/transfer/v1/tx";
export interface AminoMsgTransfer extends AminoMsg {
  type: "cosmos-sdk/MsgTransfer";
  value: {
    source_port: string;
    source_channel: string;
    token: {
      denom: string;
      amount: string;
    };
    sender: string;
    receiver: string;
    timeout_height: {
      revision_number: string;
      revision_height: string;
    };
    timeout_timestamp: string;
  };
}
export const AminoConverter = {
  "/ibc.applications.transfer.v1.MsgTransfer": {
    aminoType: "cosmos-sdk/MsgTransfer",
    toAmino: ({
      sourcePort,
      sourceChannel,
      token,
      sender,
      receiver,
      timeoutHeight,
      timeoutTimestamp
    }: MsgTransfer): AminoMsgTransfer["value"] => {
      return {
        source_port: sourcePort,
        source_channel: sourceChannel,
        token: {
          denom: token.denom,
          amount: token.amount
        },
        sender,
        receiver,
        timeout_height: {
          revision_number: timeoutHeight.revisionNumber.toString(),
          revision_height: timeoutHeight.revisionHeight.toString()
        },
        timeout_timestamp: timeoutTimestamp.toString()
      };
    },
    fromAmino: ({
      source_port,
      source_channel,
      token,
      sender,
      receiver,
      timeout_height,
      timeout_timestamp
    }: AminoMsgTransfer["value"]): MsgTransfer => {
      return {
        sourcePort: source_port,
        sourceChannel: source_channel,
        token: {
          denom: token.denom,
          amount: token.amount
        },
        sender,
        receiver,
        timeoutHeight: {
          revisionNumber: Long.fromString(timeout_height.revision_number),
          revisionHeight: Long.fromString(timeout_height.revision_height)
        },
        timeoutTimestamp: Long.fromString(timeout_timestamp)
      };
    }
  }
};