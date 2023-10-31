import { BinaryReader, BinaryWriter } from "./binary";
import { Any } from "./google/protobuf/any";

export interface TelescopeGeneratedType<T> {
  readonly typeUrl: string;
  is(o: unknown): o is T;
  encode: (message: T, writer?: BinaryWriter) => BinaryWriter;
  decode: (input: BinaryReader | Uint8Array, length?: number) => T;
  fromPartial: (object: any) => T;
  fromJSON: (object: unknown) => T;
  toJSON(message: T): unknown;
  toProto(message: T): Uint8Array;
  fromProtoMsg(message: Any): T;
  toProtoMsg(message: T): Any;
}

export class GlobalDecoderRegistry {
  static registry: {
    [key: string]: TelescopeGeneratedType<any>;
  } = {};
  static register<T>(key: string, decoder: TelescopeGeneratedType<T>) {
    GlobalDecoderRegistry.registry[key] = decoder;
  }
  static getDecoder(key: string): unknown {
    return GlobalDecoderRegistry.registry[key];
  }
  static getDecoderByInstance(obj: unknown): unknown {
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
      }
    }

    return null;
  }
}
