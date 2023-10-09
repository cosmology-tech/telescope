import { BinaryReader, BinaryWriter } from "./binary";

export interface IProtoField {
  readonly no: number;
  readonly name: string;
  readonly protoName: string;
  readonly jsonName?: string;
  readonly sdkName?: string;
  readonly aminoName?: string;
  readonly isAcceptsInterface?: boolean;
}

export interface IProto {
  readonly typeUrl: string;
  readonly fields: IProtoField[];
}

export interface IProtoOps extends IProto {
  encode(writer: BinaryWriter): BinaryWriter;
  toProtoMsg(): IProtoMsg;
}

export interface IProtoMsg {
  readonly typeUrl: string;
  value: Uint8Array;
}

export class ProtoMsg implements IProtoMsg {
  constructor(
    obj: IProtoMsg,
    decodersMapping: {
      [key: string]: (
        input: Uint8Array | BinaryReader,
        length?: number | undefined
      ) => unknown;
    }
  ) {
    this.typeUrl = obj.typeUrl;
    this.value = obj.value;
    this.decodersMapping = decodersMapping;
  }

  readonly decodersMapping: {
    [key: string]: (
      input: Uint8Array | BinaryReader,
      length?: number | undefined
    ) => unknown;
  };
  readonly typeUrl: string;
  value: Uint8Array;

  protoValue?: unknown;

  unwrap<T>(extraDecodersMapping?: {
    [key: string]: (
      input: Uint8Array | BinaryReader,
      length?: number | undefined
    ) => unknown;
  }): T {
    if (!this.protoValue) {
      let decoder;

      if (extraDecodersMapping) {
        decoder = extraDecodersMapping[this.typeUrl];
      }

      if (!decoder) {
        decoder = this.decodersMapping[this.typeUrl];
      }

      if (!decoder) {
        throw new Error(
          `There's not decoder registered for typeUrl: ${this.typeUrl}`
        );
      }

      this.protoValue = decoder(this.value);
    }

    return this.protoValue as T;
  }
}

export abstract class ProtoOps implements IProtoOps {
  readonly typeUrl: string;
  readonly fields: IProtoField[];

  protected abstract encoder(
    message: unknown,
    writer?: BinaryWriter
  ): BinaryWriter;

  encode(writer?: BinaryWriter): BinaryWriter {
    return this.encoder(this, writer);
  }

  toProtoMsg(): IProtoMsg {
    return {
      typeUrl: this.typeUrl,
      value: this.encode().finish(),
    };
  }
}
