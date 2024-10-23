import { EncodingTestForDontOmit, EncodingTestForDontOmitSDKType, EncodingTestForOmit, EncodingTestForOmitSDKType } from "./all_fields";
import { InputMsg, InputMsgSDKType } from "./tx";
export const AminoConverter = {
  "/misc.InputMsg": {
    aminoType: "/misc.InputMsg",
    toAmino: InputMsg.toAmino,
    fromAmino: InputMsg.fromAmino
  }
};