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
  toProtoMsg(): IProtoMsg;
}

export interface IProtoOps extends IProto {
  encode(writer: BinaryWriter): BinaryWriter;
}

export interface IProtoMsg {
  readonly typeUrl: string;
  value: Uint8Array;
}

export abstract class ProtoOps implements IProtoOps {
  readonly typeUrl: string;
  readonly fields: IProtoField[];

  abstract encoder(message: unknown, writer?: BinaryWriter): BinaryWriter;

  abstract decoder(input: BinaryReader | Uint8Array, length?: number): unknown;

  encode(writer?: BinaryWriter): BinaryWriter {
    return this.encoder(this.wrapAndClone(), writer);
  }

  wrapAndClone(): unknown {
    let obj = { ...this };

    for (const field of this.fields) {
      if (field.isAcceptsInterface) {
        obj[field.protoName] = this[field.protoName]?.toProtoMsg();
      }
    }

    return obj;
  }

  toProtoMsg(): IProtoMsg {
    return {
      typeUrl: this.typeUrl,
      value: this.encode().finish(),
    };
  }
}
