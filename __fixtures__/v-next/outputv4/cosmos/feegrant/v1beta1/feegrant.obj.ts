import { Coin } from "../../base/v1beta1/coin";
import { IProto, IProtoField, IProtoMsg, ProtoOps } from "../../../base";
import { BasicAllowance } from "./feegrant";
import { BinaryReader, BinaryWriter } from "../../../binary";

// the name's converted from FeeAllowanceI
export interface IFeeAllowance extends IProto {}

export interface IBasicAllowanceProto extends IFeeAllowance, IProto {
  typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance";

  spendLimit: Coin[];
  expiration: Date;
}

export class BasicAllowanceProto
  extends ProtoOps
  implements IBasicAllowanceProto
{
  readonly typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance";

  readonly fields = [
    { no: 1, name: "spend_limit", protoName: "spendLimit" },
    { no: 2, name: "expiration", protoName: "expiration" },
  ];

  encoder(message: BasicAllowance, writer?: BinaryWriter) {
    return BasicAllowance.encode(message, writer);
  }

  decoder(input: BinaryReader | Uint8Array, length?: number) {
    return BasicAllowance.decode(input, length);
  }

  toProtoInterface(): BasicAllowance {
    return this.wrapAndClone() as BasicAllowance;
  }

  spendLimit: Coin[];
  expiration: Date;
}

export interface IAllowedMsgAllowanceProto extends IFeeAllowance, IProto {
  typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance";

  allowance: IFeeAllowance | IProtoMsg | undefined;
  allowedMessages: string[];
}

export class AllowedMsgAllowanceProto implements IAllowedMsgAllowanceProto {
  typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance";
  readonly fields: IProtoField[];

  allowance: IFeeAllowance | IProtoMsg | undefined;
  allowedMessages: string[];

  toProtoMsg(): IProtoMsg {
    return {
      typeUrl: this.typeUrl,
      value: new Uint8Array(),
    };
  }
}
