import { BinaryReader, BinaryWriter } from "./binary";
import { Any } from "./google/protobuf/any";

export type ProtoMsg = Omit<Any, "typeUrl"> & { typeUrl: any };

export interface IAminoMsg<Amino> {
  type: any;
  value: Amino;
}

export interface IProtoType {
  $typeUrl?: any;
}

export interface TelescopeGeneratedType<
  T = unknown,
  SDK = unknown,
  Amino = unknown
> {
  readonly typeUrl: string;
  readonly aminoType?: string;
  is(o: unknown): o is T;
  isSDK?(o: unknown): o is SDK;
  isAmino?(o: unknown): o is Amino;
  encode: (message: T, writer?: BinaryWriter) => BinaryWriter;
  decode: (input: BinaryReader | Uint8Array, length?: number) => T;
  fromPartial: (object: any) => T;
  fromJSON?: (object: unknown) => T;
  toJSON?: (message: T) => unknown;
  fromSDK?: (sdk: SDK) => T;
  fromSDKJSON?: (object: any) => SDK;
  toSDK?: (message: T) => SDK;
  fromAmino?: (amino: Amino) => T;
  toAmino?: (message: T) => Amino;
  fromAminoMsg?: (aminoMsg: IAminoMsg<Amino>) => T;
  toAminoMsg?: (message: T) => IAminoMsg<Amino>;
  toProto?: (message: T) => Uint8Array;
  fromProtoMsg?: (message: ProtoMsg) => T;
  toProtoMsg?: (message: T) => Any;
}

export class GlobalDecoderRegistry {
  static registry: {
    [key: string]: TelescopeGeneratedType<any, any, any>;
  } = {};
  static register<T, SDK, Amino>(
    key: string,
    decoder: TelescopeGeneratedType<T, SDK, Amino>
  ) {
    GlobalDecoderRegistry.registry[key] = decoder;
  }
  static getDecoder<T, SDK, Amino>(
    key: string
  ): TelescopeGeneratedType<T, SDK, Amino> {
    return GlobalDecoderRegistry.registry[key];
  }
  static getDecoderByInstance<T, SDK, Amino>(
    obj: unknown
  ): TelescopeGeneratedType<T, SDK, Amino> | null {
    if (obj === undefined || obj === null) {
      return null;
    }
    const protoType = obj as IProtoType;

    if (protoType.$typeUrl) {
      return this.getDecoder<T, SDK, Amino>(protoType.$typeUrl);
    }

    for (const key in GlobalDecoderRegistry.registry) {
      if (
        Object.prototype.hasOwnProperty.call(
          GlobalDecoderRegistry.registry,
          key
        )
      ) {
        const element = GlobalDecoderRegistry.registry[key];

        if (element.is(obj)) {
          return element;
        }

        if (element.isSDK && element.isSDK(obj)) {
          return element;
        }

        if (element.isAmino && element.isAmino(obj)) {
          return element;
        }
      }
    }

    return null;
  }
  static wrapAny(obj: unknown): Any {
    const decoder = getDecoderByInstance(obj);

    return {
      typeUrl: decoder.typeUrl,
      value: decoder.encode(obj).finish(),
    };
  }
  static unwrapAny<T, SDK, Amino>(input: BinaryReader | Uint8Array) {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);

    const data = Any.decode(reader, reader.uint32());

    const decoder = GlobalDecoderRegistry.getDecoder<T, SDK, Amino>(
      data.typeUrl
    );

    if (!decoder) {
      return data;
    }

    return decoder.decode(data.value);
  }
  static fromJSON<T>(object: any): T {
    const decoder = getDecoderByInstance<T>(object);
    return decoder.fromJSON!(object);
  }
  static toJSON<T>(message: T): any {
    const decoder = getDecoderByInstance<T>(message);
    return decoder.toJSON!(message);
  }
  static fromPartial<T>(object: unknown): T {
    const decoder = getDecoderByInstance<T>(object);
    return decoder ? decoder.fromPartial(object) : (object as T);
  }
  static fromSDK<T = unknown, SDK = unknown>(object: SDK): T {
    const decoder = getDecoderByInstance<T, SDK>(object);
    return decoder.fromSDK!(object);
  }
  static fromSDKJSON<SDK = unknown>(object: any): SDK {
    const decoder = getDecoderByInstance<unknown, SDK>(object);
    return decoder.fromSDKJSON!(object);
  }
  static toSDK<T = unknown, SDK = unknown>(object: T): SDK {
    const decoder = getDecoderByInstance<T, SDK>(object);
    return decoder.toSDK!(object);
  }

  static fromAmino<T = unknown, Amino = unknown>(object: Amino): T {
    const decoder = getDecoderByInstance<T, unknown, Amino>(object);
    return decoder.fromAmino!(object);
  }
  static toAmino<T = unknown, Amino = unknown>(object: T): Amino {
    const decoder = getDecoderByInstance<T, unknown, Amino>(object);
    return decoder.toAmino!(object);
  }
}

function getDecoderByInstance<T = unknown, SDK = unknown, Amino = unknown>(
  obj: unknown
): TelescopeGeneratedType<T, SDK, Amino> {
  const decoder = GlobalDecoderRegistry.getDecoderByInstance<T, SDK, Amino>(
    obj
  );

  if (!decoder) {
    throw new Error(
      `There's no decoder for the instance ${JSON.stringify(obj)}`
    );
  }

  return decoder;
}
