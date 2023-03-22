import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../helpers";
export const protobufPackage = "osmosis.superfluid";

/** Params holds parameters for the superfluid module */
export interface Params {
  /**
   * minimum_risk_factor is to be cut on OSMO equivalent value of lp tokens for
   * superfluid staking, default: 5%. The minimum risk factor works
   * to counter-balance the staked amount on chain's exposure to various asset
   * volatilities, and have base staking be 'resistant' to volatility.
   */
  minimumRiskFactor: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.superfluid.Params";
  value: Uint8Array;
}

/** Params holds parameters for the superfluid module */
export interface ParamsAmino {
  /**
   * minimum_risk_factor is to be cut on OSMO equivalent value of lp tokens for
   * superfluid staking, default: 5%. The minimum risk factor works
   * to counter-balance the staked amount on chain's exposure to various asset
   * volatilities, and have base staking be 'resistant' to volatility.
   */
  minimum_risk_factor: string;
}
export interface ParamsAminoMsg {
  type: "osmosis/params";
  value: ParamsAmino;
}

/** Params holds parameters for the superfluid module */
export interface ParamsSDKType {
  minimum_risk_factor: string;
}

function createBaseParams(): Params {
  return {
    minimumRiskFactor: ""
  };
}

export const Params = {
  typeUrl: "/osmosis.superfluid.Params",
  aminoType: "osmosis/params",

  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minimumRiskFactor !== "") {
      writer.uint32(10).string(message.minimumRiskFactor);
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
          message.minimumRiskFactor = reader.string();
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
      minimumRiskFactor: isSet(object.minimumRiskFactor) ? String(object.minimumRiskFactor) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.minimumRiskFactor !== undefined && (obj.minimumRiskFactor = message.minimumRiskFactor);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.minimumRiskFactor = object.minimumRiskFactor ?? "";
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      minimumRiskFactor: object?.minimum_risk_factor
    };
  },

  fromSDKJSON(object: any): ParamsSDKType {
    return {
      minimum_risk_factor: isSet(object.minimum_risk_factor) ? String(object.minimum_risk_factor) : ""
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.minimum_risk_factor = message.minimumRiskFactor;
    return obj;
  },

  fromAmino(object: ParamsAmino): Params {
    return {
      minimumRiskFactor: object.minimum_risk_factor
    };
  },

  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.minimum_risk_factor = message.minimumRiskFactor;
    return obj;
  },

  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },

  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/params",
      value: Params.toAmino(message)
    };
  },

  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },

  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },

  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.Params",
      value: Params.encode(message).finish()
    };
  }

};