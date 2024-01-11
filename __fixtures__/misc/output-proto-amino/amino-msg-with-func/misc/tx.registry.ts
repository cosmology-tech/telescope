import { AminoEncodingTestForDontOmit, AminoEncodingTestForDontOmitSDKType, AminoEncodingTestForOmit, AminoEncodingTestForOmitSDKType } from "./amino_fields";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { InputMsg, InputMsgSDKType } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/misc.InputMsg", InputMsg]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    sendMsg(value: InputMsg) {
      return {
        typeUrl: "/misc.InputMsg",
        value: InputMsg.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    sendMsg(value: InputMsg) {
      return {
        typeUrl: "/misc.InputMsg",
        value
      };
    }
  },
  toJSON: {
    sendMsg(value: InputMsg) {
      return {
        typeUrl: "/misc.InputMsg",
        value: InputMsg.toJSON(value)
      };
    }
  },
  fromJSON: {
    sendMsg(value: any) {
      return {
        typeUrl: "/misc.InputMsg",
        value: InputMsg.fromJSON(value)
      };
    }
  },
  fromPartial: {
    sendMsg(value: InputMsg) {
      return {
        typeUrl: "/misc.InputMsg",
        value: InputMsg.fromPartial(value)
      };
    }
  }
};