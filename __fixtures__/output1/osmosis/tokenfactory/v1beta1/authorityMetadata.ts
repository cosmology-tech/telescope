import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export const protobufPackage = "osmosis.tokenfactory.v1beta1";

/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadata {
  /** Can be empty for no admin, or a valid osmosis address */
  Admin: string;
}

function createBaseDenomAuthorityMetadata(): DenomAuthorityMetadata {
  return {
    Admin: ""
  };
}

export const DenomAuthorityMetadata = {
  encode(message: DenomAuthorityMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Admin !== "") {
      writer.uint32(10).string(message.Admin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomAuthorityMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomAuthorityMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Admin = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DenomAuthorityMetadata {
    return {
      Admin: isSet(object.Admin) ? String(object.Admin) : ""
    };
  },

  toJSON(message: DenomAuthorityMetadata): unknown {
    const obj: any = {};
    message.Admin !== undefined && (obj.Admin = message.Admin);
    return obj;
  },

  fromPartial(object: DeepPartial<DenomAuthorityMetadata>): DenomAuthorityMetadata {
    const message = createBaseDenomAuthorityMetadata();
    message.Admin = object.Admin ?? "";
    return message;
  }

};