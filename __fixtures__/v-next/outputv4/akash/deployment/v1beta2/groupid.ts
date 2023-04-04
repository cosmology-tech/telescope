import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "akash.deployment.v1beta2";

/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupID {
  owner: string;
  dseq: bigint;
  gseq: number;
}

/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupIDSDKType {
  owner: string;
  dseq: bigint;
  gseq: number;
}

function createBaseGroupID(): GroupID {
  return {
    owner: "",
    dseq: BigInt("0"),
    gseq: 0
  };
}

export const GroupID = {
  encode(message: GroupID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(Long.fromString(message.dseq.toString()));
    }

    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupID();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.dseq = BigInt(reader.uint64().toString());
          break;

        case 3:
          message.gseq = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GroupID {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt("0"),
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0
    };
  },

  toJSON(message: GroupID): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || BigInt("0")).toString());
    message.gseq !== undefined && (obj.gseq = Math.round(message.gseq));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupID>, I>>(object: I): GroupID {
    const message = createBaseGroupID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt("0");
    message.gseq = object.gseq ?? 0;
    return message;
  },

  fromSDK(object: GroupIDSDKType): GroupID {
    return {
      owner: object?.owner,
      dseq: object?.dseq,
      gseq: object?.gseq
    };
  },

  fromSDKJSON(object: any): GroupIDSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt("0"),
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0
    };
  },

  toSDK(message: GroupID): GroupIDSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq;
    obj.gseq = message.gseq;
    return obj;
  }

};