import { AminoEncodingTestForDontOmit, AminoEncodingTestForDontOmitSDKType, AminoEncodingTestForOmit, AminoEncodingTestForOmitSDKType } from "./amino_fields";
import { InputMsg, InputMsgSDKType } from "./tx";
export const AminoConverter = {
  "/misc.InputMsg": {
    aminoType: "/misc.InputMsg",
    toAmino: InputMsg.toAmino,
    fromAmino: InputMsg.fromAmino
  }
};