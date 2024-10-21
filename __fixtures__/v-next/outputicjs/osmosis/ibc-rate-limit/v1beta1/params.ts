import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** Params defines the parameters for the ibc-rate-limit module. */
export interface Params {
  contractAddress: string;
}
function createBaseParams(): Params {
  return {
    contractAddress: ""
  };
}
export const Params = {
  typeUrl: "/osmosis.ibcratelimit.v1beta1.Params",
  aminoType: "osmosis/ibcratelimit/params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }
};