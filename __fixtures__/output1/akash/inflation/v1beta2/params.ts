import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "akash.inflation.v1beta2";
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
/** Params defines the parameters for the x/deployment package */
export interface ParamsSDKType {
  inflation_decay_factor: string;
  initial_inflation: string;
  variance: string;
}
function createBaseParams(): Params {
  return {
    inflationDecayFactor: "",
    initialInflation: "",
    variance: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflationDecayFactor !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.inflationDecayFactor, 18).atomics);
    }
    if (message.initialInflation !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.initialInflation, 18).atomics);
    }
    if (message.variance !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.variance, 18).atomics);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflationDecayFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.initialInflation = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.variance = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      inflationDecayFactor: isSet(object.inflationDecayFactor) ? String(object.inflationDecayFactor) : "",
      initialInflation: isSet(object.initialInflation) ? String(object.initialInflation) : "",
      variance: isSet(object.variance) ? String(object.variance) : ""
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.inflationDecayFactor !== undefined && (obj.inflationDecayFactor = message.inflationDecayFactor);
    message.initialInflation !== undefined && (obj.initialInflation = message.initialInflation);
    message.variance !== undefined && (obj.variance = message.variance);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.inflationDecayFactor = object.inflationDecayFactor ?? "";
    message.initialInflation = object.initialInflation ?? "";
    message.variance = object.variance ?? "";
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      inflationDecayFactor: object?.inflation_decay_factor,
      initialInflation: object?.initial_inflation,
      variance: object?.variance
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.inflation_decay_factor = message.inflationDecayFactor;
    obj.initial_inflation = message.initialInflation;
    obj.variance = message.variance;
    return obj;
  }
};