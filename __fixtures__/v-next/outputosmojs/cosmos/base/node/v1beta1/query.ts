import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, isSet } from "../../../../helpers";
export const protobufPackage = "cosmos.base.node.v1beta1";
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequest {}
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequestSDKType {}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponse {
  minimumGasPrice: string;
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponseSDKType {
  minimum_gas_price: string;
}
function createBaseConfigRequest(): ConfigRequest {
  return {};
}
export const ConfigRequest = {
  encode(_: ConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): ConfigRequest {
    const obj = createBaseConfigRequest();
    return obj;
  },
  toJSON(_: ConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<ConfigRequest>): ConfigRequest {
    const message = createBaseConfigRequest();
    return message;
  },
  fromSDK(_: ConfigRequestSDKType): ConfigRequest {
    return {};
  },
  fromSDKJSON(_: any): ConfigRequestSDKType {
    return {};
  },
  toSDK(_: ConfigRequest): ConfigRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseConfigResponse(): ConfigResponse {
  return {
    minimumGasPrice: ""
  };
}
export const ConfigResponse = {
  encode(message: ConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minimumGasPrice !== "") {
      writer.uint32(10).string(message.minimumGasPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minimumGasPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConfigResponse {
    const obj = createBaseConfigResponse();
    if (isSet(object.minimumGasPrice)) obj.minimumGasPrice = String(object.minimumGasPrice);
    return obj;
  },
  toJSON(message: ConfigResponse): unknown {
    const obj: any = {};
    message.minimumGasPrice !== undefined && (obj.minimumGasPrice = message.minimumGasPrice);
    return obj;
  },
  fromPartial(object: DeepPartial<ConfigResponse>): ConfigResponse {
    const message = createBaseConfigResponse();
    message.minimumGasPrice = object.minimumGasPrice ?? "";
    return message;
  },
  fromSDK(object: ConfigResponseSDKType): ConfigResponse {
    return {
      minimumGasPrice: object?.minimum_gas_price
    };
  },
  fromSDKJSON(object: any): ConfigResponseSDKType {
    return {
      minimum_gas_price: isSet(object.minimum_gas_price) ? String(object.minimum_gas_price) : ""
    };
  },
  toSDK(message: ConfigResponse): ConfigResponseSDKType {
    const obj: any = {};
    obj.minimum_gas_price = message.minimumGasPrice;
    return obj;
  }
};