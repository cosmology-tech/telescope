import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../../helpers";
import { MsgSend, MsgSendSDKType } from "./tx";
export interface MsgSendAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgNFTSend";
  value: {
    class_id: string;
    id: string;
    sender: string;
    receiver: string;
  };
}
export const AminoConverter = {
  "/cosmos.nft.v1beta1.MsgSend": {
    aminoType: "cosmos-sdk/MsgNFTSend",
    toAmino: ({
      classId,
      id,
      sender,
      receiver
    }: MsgSend): MsgSendAminoType["value"] => {
      return {
        class_id: omitDefault(classId),
        id: omitDefault(id),
        sender: omitDefault(sender),
        receiver: omitDefault(receiver)
      };
    },
    fromAmino: ({
      class_id,
      id,
      sender,
      receiver
    }: MsgSendAminoType["value"]): MsgSend => {
      return {
        classId: class_id,
        id,
        sender,
        receiver
      };
    }
  }
};