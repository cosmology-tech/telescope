import { FeeToken, FeeTokenAmino, FeeTokenSDKType } from "./feetoken";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.txfees.v1beta1";

/** GenesisState defines the txfees module's genesis state. */
export interface GenesisState {
  basedenom: string;
  feetokens: FeeToken[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.txfees.v1beta1.GenesisState";
  value: Uint8Array;
}

/** GenesisState defines the txfees module's genesis state. */
export interface GenesisStateAmino {
  basedenom: string;
  feetokens: FeeTokenAmino[];
}
export interface GenesisStateAminoMsg {
  type: "osmosis/txfees/genesis-state";
  value: GenesisStateAmino;
}

/** GenesisState defines the txfees module's genesis state. */
export interface GenesisStateSDKType {
  basedenom: string;
  feetokens: FeeTokenSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    basedenom: "",
    feetokens: []
  };
}

export const GenesisState = {
  typeUrl: "/osmosis.txfees.v1beta1.GenesisState",
  aminoType: "osmosis/txfees/genesis-state",

  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.basedenom !== "") {
      writer.uint32(10).string(message.basedenom);
    }

    for (const v of message.feetokens) {
      FeeToken.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.basedenom = reader.string();
          break;

        case 2:
          message.feetokens.push(FeeToken.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      basedenom: isSet(object.basedenom) ? String(object.basedenom) : "",
      feetokens: Array.isArray(object?.feetokens) ? object.feetokens.map((e: any) => FeeToken.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.basedenom !== undefined && (obj.basedenom = message.basedenom);

    if (message.feetokens) {
      obj.feetokens = message.feetokens.map(e => e ? FeeToken.toJSON(e) : undefined);
    } else {
      obj.feetokens = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.basedenom = object.basedenom ?? "";
    message.feetokens = object.feetokens?.map(e => FeeToken.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      basedenom: object?.basedenom,
      feetokens: Array.isArray(object?.feetokens) ? object.feetokens.map((e: any) => FeeToken.fromSDK(e)) : []
    };
  },

  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    obj.basedenom = message.basedenom;

    if (message.feetokens) {
      obj.feetokens = message.feetokens.map(e => e ? FeeToken.toSDK(e) : undefined);
    } else {
      obj.feetokens = [];
    }

    return obj;
  },

  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      basedenom: isSet(object.basedenom) ? String(object.basedenom) : "",
      feetokens: Array.isArray(object?.feetokens) ? object.feetokens.map((e: any) => FeeToken.fromSDKJSON(e)) : []
    };
  },

  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      basedenom: object.basedenom,
      feetokens: Array.isArray(object?.feetokens) ? object.feetokens.map((e: any) => FeeToken.fromAmino(e)) : []
    };
  },

  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.basedenom = message.basedenom;

    if (message.feetokens) {
      obj.feetokens = message.feetokens.map(e => e ? FeeToken.toAmino(e) : undefined);
    } else {
      obj.feetokens = [];
    }

    return obj;
  },

  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },

  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/txfees/genesis-state",
      value: GenesisState.toAmino(message)
    };
  },

  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },

  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },

  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/osmosis.txfees.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }

};