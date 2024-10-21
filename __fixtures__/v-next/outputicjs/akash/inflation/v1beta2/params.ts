import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** Params defines the parameters for the x/deployment package */
export interface Params {
  /** InflationDecayFactor is the number of years it takes inflation to halve. */
  inflationDecayFactor: string;
  /**
   * InitialInflation is the rate at which inflation starts at genesis.
   * It is a decimal value in the range [0.0, 100.0].
   */
  initialInflation: string;
  /**
   * Variance defines the fraction by which inflation can vary from ideal inflation in a block.
   * It is a decimal value in the range [0.0, 1.0].
   */
  variance: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/akash.inflation.v1beta2.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the x/deployment package */
export interface ParamsAmino {
  /** InflationDecayFactor is the number of years it takes inflation to halve. */
  inflation_decay_factor: string;
  /**
   * InitialInflation is the rate at which inflation starts at genesis.
   * It is a decimal value in the range [0.0, 100.0].
   */
  initial_inflation: string;
  /**
   * Variance defines the fraction by which inflation can vary from ideal inflation in a block.
   * It is a decimal value in the range [0.0, 1.0].
   */
  variance: string;
}
export interface ParamsAminoMsg {
  type: "/akash.inflation.v1beta2.Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    inflationDecayFactor: "",
    initialInflation: "",
    variance: ""
  };
}
export const Params = {
  typeUrl: "/akash.inflation.v1beta2.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inflationDecayFactor !== "") {
      writer.uint32(10).string(message.inflationDecayFactor);
    }
    if (message.initialInflation !== "") {
      writer.uint32(18).string(message.initialInflation);
    }
    if (message.variance !== "") {
      writer.uint32(26).string(message.variance);
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
          message.inflationDecayFactor = reader.string();
          break;
        case 2:
          message.initialInflation = reader.string();
          break;
        case 3:
          message.variance = reader.string();
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
    message.inflationDecayFactor = object.inflationDecayFactor ?? "";
    message.initialInflation = object.initialInflation ?? "";
    message.variance = object.variance ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.inflation_decay_factor !== undefined && object.inflation_decay_factor !== null) {
      message.inflationDecayFactor = object.inflation_decay_factor;
    }
    if (object.initial_inflation !== undefined && object.initial_inflation !== null) {
      message.initialInflation = object.initial_inflation;
    }
    if (object.variance !== undefined && object.variance !== null) {
      message.variance = object.variance;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.inflation_decay_factor = message.inflationDecayFactor ?? "";
    obj.initial_inflation = message.initialInflation ?? "";
    obj.variance = message.variance ?? "";
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/akash.inflation.v1beta2.Params",
      value: Params.encode(message).finish()
    };
  }
};