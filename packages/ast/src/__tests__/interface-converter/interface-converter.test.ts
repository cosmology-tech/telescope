import {
  isSet,
  DeepPartial,
  bytesFromBase64,
  base64FromBytes,
  toTimestamp,
  fromTimestamp,
} from "../../../test-utils/helpers";
import { BinaryReader, BinaryWriter } from "../../../test-utils/binary";

export interface Timestamp {
  /**
   * Represents seconds of UTC time since Unix epoch
   * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
   * 9999-12-31T23:59:59Z inclusive.
   */
  seconds: bigint;
  /**
   * Non-negative fractions of a second at nanosecond resolution. Negative
   * second values with fractions must still have non-negative nanos values
   * that count forward in time. Must be from 0 to 999,999,999
   * inclusive.
   */
  nanos: number;
}

function createBaseTimestamp(): Timestamp {
  return {
    seconds: BigInt(0),
    nanos: 0,
  };
}
export const Timestamp = {
  encode(
    message: Timestamp,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.seconds !== BigInt(0)) {
      writer.uint32(8).int64(message.seconds);
    }
    if (message.nanos !== 0) {
      writer.uint32(16).int32(message.nanos);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Timestamp {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seconds = reader.int64();
          break;
        case 2:
          message.nanos = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Timestamp {
    return {
      seconds: isSet(object.seconds)
        ? BigInt(object.seconds.toString())
        : BigInt(0),
      nanos: isSet(object.nanos) ? Number(object.nanos) : 0,
    };
  },
  toJSON(message: Timestamp): unknown {
    const obj: any = {};
    message.seconds !== undefined &&
      (obj.seconds = (message.seconds || BigInt(0)).toString());
    message.nanos !== undefined && (obj.nanos = Math.round(message.nanos));
    return obj;
  },
  fromPartial(object: DeepPartial<Timestamp>): Timestamp {
    const message = createBaseTimestamp();
    message.seconds =
      object.seconds !== undefined && object.seconds !== null
        ? BigInt(object.seconds.toString())
        : BigInt(0);
    message.nanos = object.nanos ?? 0;
    return message;
  },
};

export interface IAnyEncodable {
  typeUrl: string;
  value?: unknown;
  encode?(writer?: BinaryWriter): BinaryWriter;
}

export interface IAny<T> extends IAnyEncodable {
  value: T;
}

export interface Any {
  typeUrl: string;
  value: Uint8Array;
}

export interface IAnySDKType<T> {
  type_url: string;
  value: T;
}

export interface AnySDKType {
  type_url: string;
  value: Uint8Array;
}

export interface AnyAmino {
  type: string;
  value: any;
}

function createBaseAny(): Any {
  return {
    typeUrl: "",
    value: new Uint8Array(),
  };
}

export const Any = {
  encode(
    message: Any,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.typeUrl !== "") {
      writer.uint32(10).string(message.typeUrl);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Any {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAny();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.typeUrl = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Any {
    return {
      typeUrl: isSet(object.typeUrl) ? String(object.typeUrl) : "",
      value: isSet(object.value)
        ? bytesFromBase64(object.value)
        : new Uint8Array(),
    };
  },
  toJSON(message: Any): unknown {
    const obj: any = {};
    message.typeUrl !== undefined && (obj.typeUrl = message.typeUrl);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },
  fromPartial(object: DeepPartial<Any>): Any {
    const message = createBaseAny();
    message.typeUrl = object.typeUrl ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromSDK(object: AnySDKType): Any {
    return {
      typeUrl: object?.type_url,
      value: object?.value,
    };
  },
  fromSDKJSON(object: any): AnySDKType {
    return {
      type_url: isSet(object.type_url) ? String(object.type_url) : "",
      value: isSet(object.value)
        ? bytesFromBase64(object.value)
        : new Uint8Array(),
    };
  },
  toSDK(message: Any): AnySDKType {
    const obj: any = {};
    obj.type_url = message.typeUrl;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: AnyAmino): Any {
    return {
      typeUrl: object.type,
      value: object.value,
    };
  },
  toAmino(message: Any): AnyAmino {
    const obj: any = {};
    obj.type = message.typeUrl;
    obj.value = message.value;
    return obj;
  },
};

export function isGenericAuthorization(message: {
  typeUrl: string;
}): message is IAny<GenericAuthorization> {
  return message.typeUrl === "/cosmos.authz.v1beta1.GenericAuthorization";
}

export interface GenericAuthorization {
  msg: string;
}

export interface GenericAuthorizationSDKType {
  msg: string;
}

export interface GenericAuthorizationAmino {
  /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
  msg: string;
}

export function asCustomizedAuthorization(message: {
  typeUrl: string;
  value?: unknown;
}): message is IAny<CustomizedAuthorization> {
  if (message.value instanceof Uint8Array) {
    message.value = CustomizedAuthorization.decode(message.value);
  }

  return message.typeUrl === "/cosmos.authz.v1beta1.CustomizedAuthorization";
}

export interface CustomizedAuthorization {
  customizedMsg: string;
}

export interface CustomizedAuthorizationSDKType {
  customized_msg: string;
}

export interface CustomizedAuthorizationAmino {
  customizedMsg: string;
}

export interface Grant {
  authorization:
    | IAny<GenericAuthorization>
    | IAny<unknown>
    | IAnyEncodable
    | Any
    | undefined;
  expiration?: Date;
}

export interface GrantSDKType {
  authorization:
    | IAnySDKType<GenericAuthorizationSDKType>
    | IAnySDKType<unknown>
    | AnySDKType
    | undefined;
  expiration?: Date;
}

export interface GrantAmino {
  authorization?: AnyAmino;
  expiration?: Date;
}

function createBaseGenericAuthorization(): GenericAuthorization {
  return {
    msg: "",
  };
}
export const GenericAuthorization = {
  encode(
    message: GenericAuthorization,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.msg !== "") {
      writer.uint32(10).string(message.msg);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): GenericAuthorization {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenericAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenericAuthorization {
    return {
      msg: isSet(object.msg) ? String(object.msg) : "",
    };
  },
  toJSON(message: GenericAuthorization): unknown {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },
  fromPartial(object: DeepPartial<GenericAuthorization>): GenericAuthorization {
    const message = createBaseGenericAuthorization();
    message.msg = object.msg ?? "";
    return message;
  },
  fromSDK(object: GenericAuthorizationSDKType): GenericAuthorization {
    return {
      msg: object?.msg,
    };
  },
  fromSDKJSON(object: any): GenericAuthorizationSDKType {
    return {
      msg: isSet(object.msg) ? String(object.msg) : "",
    };
  },
  toSDK(message: GenericAuthorization): GenericAuthorizationSDKType {
    const obj: any = {};
    obj.msg = message.msg;
    return obj;
  },
  fromAmino(object: GenericAuthorizationAmino): GenericAuthorization {
    return {
      msg: object.msg,
    };
  },
  toAmino(message: GenericAuthorization): GenericAuthorizationAmino {
    const obj: any = {};
    obj.msg = message.msg;
    return obj;
  },
};

function createBaseCustomizedAuthorization(): CustomizedAuthorization {
  return {
    customizedMsg: "",
  };
}
export const CustomizedAuthorization = {
  encode(
    message: CustomizedAuthorization,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.customizedMsg !== "") {
      writer.uint32(10).string(message.customizedMsg);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): CustomizedAuthorization {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomizedAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customizedMsg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CustomizedAuthorization {
    return {
      customizedMsg: isSet(object.customizedMsg)
        ? String(object.customizedMsg)
        : "",
    };
  },
  toJSON(message: CustomizedAuthorization): unknown {
    const obj: any = {};
    message.customizedMsg !== undefined &&
      (obj.customizedMsg = message.customizedMsg);
    return obj;
  },
  fromPartial(
    object: DeepPartial<CustomizedAuthorization>
  ): CustomizedAuthorization {
    const message = createBaseCustomizedAuthorization();
    message.customizedMsg = object.customizedMsg ?? "";
    return message;
  },
  fromSDK(object: CustomizedAuthorizationSDKType): CustomizedAuthorization {
    return {
      customizedMsg: object?.customized_msg,
    };
  },
  fromSDKJSON(object: any): CustomizedAuthorizationSDKType {
    return {
      customized_msg: isSet(object.customizedMsg)
        ? String(object.customizedMsg)
        : "",
    };
  },
  toSDK(message: CustomizedAuthorization): CustomizedAuthorizationSDKType {
    const obj: any = {};
    obj.customized_msg = message.customizedMsg;
    return obj;
  },
  fromAmino(object: CustomizedAuthorizationAmino): CustomizedAuthorization {
    return {
      customizedMsg: object.customizedMsg,
    };
  },
  toAmino(message: CustomizedAuthorization): CustomizedAuthorizationAmino {
    const obj: any = {};
    obj.customizedMsg = message.customizedMsg;
    return obj;
  },
};

function createBaseGrant(): Grant {
  return {
    authorization: Any.fromPartial({}),
    expiration: undefined,
  };
}

export const Grant = {
  encode(
    message: Grant,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.authorization !== undefined) {
      Authorization_InterfaceEncoder(
        message.authorization,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiration),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Grant {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorization = Authorization_InterfaceDecoder(reader);
          break;
        case 2:
          message.expiration = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Grant {
    return {
      authorization: isSet(object.authorization)
        ? object.authorization
        : undefined,
      expiration: isSet(object.expiration)
        ? new Date(object.expiration)
        : undefined,
    };
  },
  toJSON(message: Grant): unknown {
    const obj: any = {};
    message.authorization !== undefined &&
      (obj.authorization = message.authorization);
    message.expiration !== undefined &&
      (obj.expiration = message.expiration.toISOString());
    return obj;
  },
  fromPartial(
    object: DeepPartial<Grant>,
    customizedFromPartialMapping?: {
      [key: string]: (
        object: DeepPartial<GenericAuthorization | unknown>
      ) => GenericAuthorization | unknown;
    }
  ): Grant {
    const message = createBaseGrant();
    message.authorization =
      object.authorization !== undefined && object.authorization !== null
        ? Authorization_FromPartial(
            object.authorization,
            customizedFromPartialMapping
          )
        : undefined;
    message.expiration = object.expiration ?? undefined;
    return message;
  },
  fromSDK(
    object: GrantSDKType,
    customizedFromSDKMapping?: {
      [key: string]: Function;
    }
  ): Grant {
    return {
      authorization: object.authorization
        ? Authorization_FromSDK(object.authorization, customizedFromSDKMapping)
        : undefined,
      expiration: object.expiration ?? undefined,
    };
  },
  fromSDKJSON(object: any): GrantSDKType {
    return {
      authorization: isSet(object.authorization)
        ? Any.fromSDKJSON(object.authorization)
        : undefined,
      expiration: isSet(object.expiration)
        ? new Date(object.expiration)
        : undefined,
    };
  },
  toSDK(
    message: Grant,
    customizedToSDKMapping?: {
      [key: string]: Function;
    }
  ): GrantSDKType {
    const obj: any = {};
    message.authorization !== undefined &&
      (obj.authorization = message.authorization
        ? Authorization_ToSDK(message.authorization, customizedToSDKMapping)
        : undefined);
    message.expiration !== undefined &&
      (obj.expiration = message.expiration ?? undefined);
    return obj;
  },
  fromAmino(object: GrantAmino): Grant {
    return {
      authorization: object?.authorization
        ? Authorization_FromAmino(object.authorization)
        : undefined,
      expiration: object?.expiration,
    };
  },
  toAmino(message: Grant): GrantAmino {
    const obj: any = {};
    obj.authorization = message.authorization
      ? Authorization_ToAmino(message.authorization as Any)
      : undefined;
    obj.expiration = message.expiration;
    return obj;
  },
};

export const Authorization_InterfaceEncoder = (
  message: IAnyEncodable | Any,
  writer: BinaryWriter
): BinaryWriter => {
  if ("encode" in message) {
    return Any.encode(
      {
        typeUrl: message.typeUrl,
        value: (message as IAnyEncodable).encode!().finish(),
      },
      writer
    );
  } else {
    if ((message as Any).value instanceof Uint8Array) {
      return Any.encode(message as Any, writer);
    } else {
      switch (message.typeUrl) {
        case "/cosmos.authz.v1beta1.GenericAuthorization":
          return Any.encode(
            {
              typeUrl: message.typeUrl,
              value: GenericAuthorization.encode(
                (message as IAny<GenericAuthorization>).value
              ).finish(),
            },
            writer
          );
        default:
          throw new Error(
            "A valid typeUrl has to be provided if encode method is undefined."
          );
      }
    }
  }
};

export const Authorization_InterfaceDecoder = (
  input: BinaryReader | Uint8Array
): IAny<GenericAuthorization> | IAny<unknown> | Any => {
  const reader =
    input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/cosmos.authz.v1beta1.GenericAuthorization":
      return {
        typeUrl: data.typeUrl,
        value: GenericAuthorization.decode(data.value),
      };
    default:
      return data;
  }
};

export const Authorization_FromPartial = (
  object: DeepPartial<
    IAny<GenericAuthorization> | IAny<unknown> | IAnyEncodable | Any
  >,
  customizedFromPartialMapping?: {
    [key: string]: (
      object: DeepPartial<GenericAuthorization | unknown>
    ) => GenericAuthorization | unknown;
  }
): IAny<GenericAuthorization> | IAny<unknown> | Any => {
  if (object.typeUrl && object.value && object.value instanceof Uint8Array) {
    return Any.fromPartial(object as Any);
  } else {
    switch (object.typeUrl) {
      case "/cosmos.authz.v1beta1.GenericAuthorization":
        return {
          typeUrl: object.typeUrl,
          value: GenericAuthorization.fromPartial(object.value ?? {}),
        };
      default:
        if (
          customizedFromPartialMapping &&
          Object.keys(customizedFromPartialMapping).some(
            (item) => item === object.typeUrl
          )
        ) {
          const fromPartial = customizedFromPartialMapping[object.typeUrl!];

          return {
            typeUrl: object.typeUrl!,
            value: fromPartial(object.value ?? {}),
          };
        }

        throw new Error(
          "Input object has to be a valid Any type mapped with fromPartial function or decoded Any type."
        );
    }
  }
};

export const Authorization_FromSDK = (
  object:
    | AnySDKType
    | IAnySDKType<GenericAuthorizationSDKType>
    | IAnySDKType<unknown>,
  customizedFromSDKMapping?: {
    [key: string]: Function;
  }
): IAny<GenericAuthorization> | IAny<unknown> | Any => {
  if (object.type_url && object.value && object.value instanceof Uint8Array) {
    return Any.fromSDK(object as AnySDKType);
  } else {
    switch (object.type_url) {
      case "/cosmos.authz.v1beta1.GenericAuthorization":
        return {
          typeUrl: object.type_url,
          value: GenericAuthorization.fromSDK(
            object.value as GenericAuthorizationSDKType
          ),
        };
      default:
        if (
          customizedFromSDKMapping &&
          Object.keys(customizedFromSDKMapping).some(
            (item) => item === object.type_url
          )
        ) {
          const fromSDK = customizedFromSDKMapping[object.type_url!];

          return {
            typeUrl: object.type_url!,
            value: fromSDK(object.value),
          };
        }

        throw new Error(
          "Input object has to be a valid Any type mapped with fromSDK function or decoded Any type."
        );
    }
  }
};

export const Authorization_ToSDK = (
  object: IAny<GenericAuthorization> | IAny<unknown> | IAnyEncodable | Any,
  customizedToSDKMapping?: {
    [key: string]: Function;
  }
):
  | AnySDKType
  | IAnySDKType<GenericAuthorizationSDKType>
  | IAnySDKType<unknown> => {
  if (object.typeUrl && object.value && object.value instanceof Uint8Array) {
    return Any.toSDK(object as Any);
  } else {
    switch (object.typeUrl) {
      case "/cosmos.authz.v1beta1.GenericAuthorization":
        return {
          type_url: object.typeUrl,
          value: GenericAuthorization.toSDK(
            object.value as GenericAuthorization
          ),
        };
      default:
        if (
          customizedToSDKMapping &&
          Object.keys(customizedToSDKMapping).some(
            (item) => item === object.typeUrl
          )
        ) {
          const fromSDK = customizedToSDKMapping[object.typeUrl!];

          return {
            type_url: object.typeUrl!,
            value: fromSDK(object.value),
          };
        }

        throw new Error(
          "Input object has to be a valid Any type mapped with toSDK function or decoded Any type."
        );
    }
  }
};

export const Authorization_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "cosmos-sdk/GenericAuthorization":
      return Any.fromPartial({
        typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
        value: GenericAuthorization.encode(
          GenericAuthorization.fromPartial(
            GenericAuthorization.fromAmino(content.value)
          )
        ).finish(),
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Authorization_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/cosmos.authz.v1beta1.GenericAuthorization":
      return {
        type: "cosmos-sdk/GenericAuthorization",
        value: GenericAuthorization.toAmino(
          GenericAuthorization.decode(content.value)
        ),
      };
    default:
      return Any.toAmino(content);
  }
};

describe("implements interface works", () => {
  it("encodes and decodes", () => {
    const data = Grant.encode({
      authorization: {
        typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
        value: {
          msg: "pass",
        },
      },
      expiration: new Date(),
    }).finish();

    const message = Grant.decode(data);

    expect(
      (
        (message.authorization as IAny<GenericAuthorization>)
          .value as GenericAuthorization
      ).msg
    ).toBe("pass");

    if (message.authorization) {
      if (isGenericAuthorization(message.authorization)) {
        expect(message.authorization.value.msg).toBe("pass");
      } else if (asCustomizedAuthorization(message.authorization)) {
        throw new Error("should be GenericAuthorization");
      }
    }
  });

  it("encodes and decodes customized type", () => {
    const data = Grant.encode({
      authorization: {
        typeUrl: "/cosmos.authz.v1beta1.CustomizedAuthorization",
        encode(writer) {
          return CustomizedAuthorization.encode(
            {
              customizedMsg: "custom pass",
            },
            writer
          );
        },
      },
      expiration: new Date(),
    }).finish();

    const message = Grant.decode(data);

    if (message.authorization) {
      if (isGenericAuthorization(message.authorization)) {
        throw new Error("should be CustomizedAuthorization");
      } else if (asCustomizedAuthorization(message.authorization)) {
        expect(message.authorization.value.customizedMsg).toBe("custom pass");
      }
    }
  });

  it("encodes and decodes Any", () => {
    const data = Grant.encode({
      authorization: {
        typeUrl: "/cosmos.TestAny",
        value: new Uint8Array([100, 101]),
      },
      expiration: new Date(),
    }).finish();

    const message = Grant.decode(data);

    expect((message.authorization as Any).value).toStrictEqual(
      new Uint8Array([100, 101])
    );
  });

  it("encodes and decodes wrong types with error", () => {
    expect(() => {
      Grant.encode({
        authorization: {
          typeUrl: "/cosmos.TestAny",
          value: {
            num: 1,
          },
        } as unknown as Any,
        expiration: new Date(),
      });
    }).toThrowError(
      "A valid typeUrl has to be provided if encode method is undefined."
    );
  });

  it("toJson for extended interface", () => {
    const data = Grant.encode({
      authorization: {
        typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
        value: {
          msg: "pass",
        },
      },
      expiration: new Date("2020-01-01"),
    }).finish();

    const message = Grant.decode(data);

    const json = Grant.toJSON(message) as any;

    expect(json).toMatchSnapshot();
  });

  it("toJson for customized interface", () => {
    const data = Grant.encode({
      authorization: {
        typeUrl: "/cosmos.authz.v1beta1.CustomizedAuthorization",
        encode(writer) {
          return CustomizedAuthorization.encode(
            {
              customizedMsg: "custom pass",
            },
            writer
          );
        },
      },
      expiration: new Date("2020-01-01"),
    }).finish();

    const message = Grant.decode(data);

    const json = Grant.toJSON(message) as any;

    expect(json).toMatchSnapshot();

    //decode authorization by asCustomizedAuthorization
    if (
      message.authorization &&
      asCustomizedAuthorization(message.authorization)
    ) {
      const json = Grant.toJSON(message) as any;

      expect(json).toMatchSnapshot();
    }
  });

  it("toJson for Any", () => {
    const data = Grant.encode({
      authorization: {
        typeUrl: "/cosmos.TestAny",
        value: new Uint8Array([100, 101]),
      },
      expiration: new Date("2020-01-01"),
    }).finish();

    const message = Grant.decode(data);

    const json = Grant.toJSON(message) as any;

    expect(json).toMatchSnapshot();
  });

  it("fromJSON for extended interface", () => {
    const message = Grant.fromJSON({
      authorization: {
        typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
        value: {
          msg: "pass",
        },
      },
      expiration: new Date("2020-01-01"),
    });

    const data = Grant.encode(message).finish();

    const decodedMessage = Grant.decode(data);

    if (decodedMessage.authorization) {
      if (isGenericAuthorization(decodedMessage.authorization)) {
        expect(decodedMessage.authorization.value.msg).toBe("pass");
      } else if (asCustomizedAuthorization(decodedMessage.authorization)) {
        throw new Error("should be GenericAuthorization");
      }
    }
  });

  it("fromJSON for customized interface", () => {
    const message = Grant.fromJSON({
      authorization: {
        typeUrl: "/cosmos.authz.v1beta1.CustomizedAuthorization",
        encode(writer) {
          return CustomizedAuthorization.encode(
            {
              customizedMsg: "custom pass",
            },
            writer
          );
        },
      },
      expiration: new Date("2020-01-01"),
    });

    const data = Grant.encode(message).finish();

    const decodedMessage = Grant.decode(data);

    if (decodedMessage.authorization) {
      if (isGenericAuthorization(decodedMessage.authorization)) {
        throw new Error("should be CustomizedAuthorization");
      } else if (asCustomizedAuthorization(decodedMessage.authorization)) {
        expect(decodedMessage.authorization.value.customizedMsg).toBe(
          "custom pass"
        );
      }
    }
  });

  it("fromJSON for Any", () => {
    const message = Grant.fromJSON({
      authorization: {
        typeUrl: "/cosmos.TestAny",
        value: new Uint8Array([100, 101]),
      },
      expiration: new Date("2020-01-01"),
    });

    const data = Grant.encode(message).finish();

    const decodedMessage = Grant.decode(data);

    expect((decodedMessage.authorization as Any).value).toStrictEqual(
      new Uint8Array([100, 101])
    );
  });

  it("fromPartial for Any", () => {
    const message = Grant.fromPartial({
      authorization: {
        typeUrl: "/cosmos.TestAny",
        value: new Uint8Array([100, 101]),
      },
    });

    const data = Grant.encode(message).finish();

    const decodedMessage = Grant.decode(data);

    expect((decodedMessage.authorization as Any).value).toStrictEqual(
      new Uint8Array([100, 101])
    );
  });

  it("fromPartial for encoded extended interface", () => {
    const message = Grant.fromPartial({
      authorization: {
        typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
        value: GenericAuthorization.encode({
          msg: "pass",
        }).finish(),
      },
    });

    const data = Grant.encode(message).finish();

    const decodedMessage = Grant.decode(data);

    if (decodedMessage.authorization) {
      if (isGenericAuthorization(decodedMessage.authorization)) {
        expect(decodedMessage.authorization.value.msg).toBe("pass");
      } else if (asCustomizedAuthorization(decodedMessage.authorization)) {
        throw new Error("should be GenericAuthorization");
      }
    }
  });

  it("fromPartial for customized interface", () => {
    const message = Grant.fromPartial(
      {
        authorization: {
          typeUrl: "/cosmos.authz.v1beta1.CustomizedAuthorization",
          value: {},
        },
      },
      {
        "/cosmos.authz.v1beta1.CustomizedAuthorization":
          CustomizedAuthorization.fromPartial,
      }
    );

    if (message.authorization) {
      if (isGenericAuthorization(message.authorization)) {
        throw new Error("should be CustomizedAuthorization");
      } else if (asCustomizedAuthorization(message.authorization)) {
        expect(message.authorization.value.customizedMsg).toBe("");
      }
    }
  });

  it("fromPartial for no mapped customized interface with error", () => {
    expect(() => {
      return Grant.fromPartial(
        {
          authorization: {
            typeUrl: "/TestAny",
            value: {},
          },
        },
        {
          "/cosmos.authz.v1beta1.CustomizedAuthorization":
            CustomizedAuthorization.fromPartial,
        }
      );
    }).toThrowError(
      "Input object has to be a valid Any type mapped with fromPartial function or decoded Any type."
    );
  });

  it("fromSDK for Any", () => {
    const message = Grant.fromSDK({
      authorization: {
        type_url: "/cosmos.TestAny",
        value: new Uint8Array([100, 101]),
      },
    });

    const data = Grant.encode(message).finish();

    const decodedMessage = Grant.decode(data);

    expect((decodedMessage.authorization as Any).value).toStrictEqual(
      new Uint8Array([100, 101])
    );
  });

  it("fromSDK for encoded extended interface", () => {
    const message = Grant.fromSDK({
      authorization: {
        type_url: "/cosmos.authz.v1beta1.GenericAuthorization",
        value: GenericAuthorization.encode({
          msg: "pass",
        }).finish(),
      },
    });

    const data = Grant.encode(message).finish();

    const decodedMessage = Grant.decode(data);

    if (decodedMessage.authorization) {
      if (isGenericAuthorization(decodedMessage.authorization)) {
        expect(decodedMessage.authorization.value.msg).toBe("pass");
      } else if (asCustomizedAuthorization(decodedMessage.authorization)) {
        throw new Error("should be GenericAuthorization");
      }
    }
  });

  it("fromSDK for customized interface", () => {
    const message = Grant.fromSDK(
      {
        authorization: {
          type_url: "/cosmos.authz.v1beta1.CustomizedAuthorization",
          value: {
            customized_msg: "custom pass",
          },
        },
      },
      {
        "/cosmos.authz.v1beta1.CustomizedAuthorization":
          CustomizedAuthorization.fromSDK,
      }
    );

    if (message.authorization) {
      if (isGenericAuthorization(message.authorization)) {
        throw new Error("should be CustomizedAuthorization");
      } else if (asCustomizedAuthorization(message.authorization)) {
        expect(message.authorization.value.customizedMsg).toBe("custom pass");
      }
    }
  });

  it("fromSDK for no mapped customized interface with error", () => {
    expect(() => {
      return Grant.fromSDK(
        {
          authorization: {
            type_url: "/TestAny",
            value: {},
          },
        },
        {
          "/cosmos.authz.v1beta1.CustomizedAuthorization":
            CustomizedAuthorization.fromSDK,
        }
      );
    }).toThrowError(
      "Input object has to be a valid Any type mapped with fromSDK function or decoded Any type."
    );
  });

  it("toSDK for Any", () => {
    const message = Grant.toSDK({
      authorization: {
        typeUrl: "/cosmos.TestAny",
        value: new Uint8Array([100, 101]),
      },
    });

    expect((message.authorization as AnySDKType).value).toStrictEqual(
      new Uint8Array([100, 101])
    );
  });

  it("toSDK for encoded extended interface", () => {
    const message = Grant.toSDK({
      authorization: {
        typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
        value: {
          msg: "pass",
        },
      },
    });

    expect(
      (message.authorization?.value as GenericAuthorizationSDKType).msg
    ).toBe("pass");
  });

  it("toSDK for customized interface", () => {
    const message = Grant.toSDK(
      {
        authorization: {
          typeUrl: "/cosmos.authz.v1beta1.CustomizedAuthorization",
          value: {
            customizedMsg: "custom pass",
          },
        },
      },
      {
        "/cosmos.authz.v1beta1.CustomizedAuthorization":
          CustomizedAuthorization.toSDK,
      }
    );

    expect(
      (message.authorization?.value as CustomizedAuthorizationSDKType).customized_msg
    ).toBe("custom pass");
  });

  it("toSDK for no mapped customized interface with error", () => {
    expect(() => {
      return Grant.toSDK(
        {
          authorization: {
            typeUrl: "/TestAny",
            value: {},
          },
        },
        {
          "/cosmos.authz.v1beta1.CustomizedAuthorization":
            CustomizedAuthorization.toSDK,
        }
      );
    }).toThrowError(
      "Input object has to be a valid Any type mapped with toSDK function or decoded Any type."
    );
  });
});
