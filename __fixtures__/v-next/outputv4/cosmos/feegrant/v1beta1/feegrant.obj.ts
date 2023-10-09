import { Coin } from "../../base/v1beta1/coin";
import {
  IProto,
  IProtoMsg,
  ProtoMsg,
  ProtoOps,
} from "../../../base";
import { BasicAllowance, AllowedMsgAllowance } from "./feegrant";
import { BinaryWriter } from "../../../binary";

export const FeeAllowanceIDecoders = {
  "/cosmos.feegrant.v1beta1.BasicAllowance": BasicAllowance.decode,
  "/cosmos.feegrant.v1beta1.AllowedMsgAllowance": AllowedMsgAllowance.decode,
};

export interface IBasicAllowanceProto extends IProto {
  readonly typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance";

  spendLimit: Coin[];
  expiration: Date;
}

export class BasicAllowanceProto
  extends ProtoOps
  implements IBasicAllowanceProto
{
  constructor(input: Partial<IBasicAllowanceProto>) {
    super();

    this.spendLimit = input.spendLimit ?? [];
    this.expiration = input.expiration ?? new Date();
  }

  readonly typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance";

  readonly fields = [
    { no: 1, name: "spend_limit", protoName: "spendLimit" },
    { no: 2, name: "expiration", protoName: "expiration" },
  ];

  protected encoder(message: BasicAllowance, writer?: BinaryWriter) {
    return BasicAllowance.encode(message, writer);
  }

  toProtoInterface(): BasicAllowance {
    return this as BasicAllowance;
  }

  static fromProtoMsg(msg: IProtoMsg): BasicAllowanceProto {
    return new BasicAllowanceProto(BasicAllowance.decode(msg.value));
  }

  spendLimit: Coin[];
  expiration: Date;
}

export interface IAllowedMsgAllowanceProto extends IProto {
  typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance";

  allowance: IProtoMsg | undefined;
  allowedMessages: string[];
}

export class AllowedMsgAllowanceProto
  extends ProtoOps
  implements IAllowedMsgAllowanceProto
{
  constructor(input: Partial<IAllowedMsgAllowanceProto>) {
    super();

    if (input.allowance) {
      this.allowance = new ProtoMsg(input.allowance, FeeAllowanceIDecoders);
    }

    this.allowedMessages = input.allowedMessages ?? [];
  }

  typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance";
  readonly fields = [
    {
      no: 1,
      name: "allowance",
      protoName: "allowance",
      isAcceptsInterface: true,
    },
    {
      no: 2,
      name: "allowed_messages",
      protoName: "allowedMessages",
    },
  ];

  protected encoder(message: AllowedMsgAllowance, writer?: BinaryWriter) {
    return AllowedMsgAllowance.encode(message, writer);
  }

  toProtoInterface(): AllowedMsgAllowance {
    return this as AllowedMsgAllowance;
  }

  static fromProtoMsg(msg: IProtoMsg): AllowedMsgAllowanceProto {
    return new AllowedMsgAllowanceProto(AllowedMsgAllowance.decode(msg.value));
  }

  allowance: IProtoMsg | undefined;
  allowedMessages: string[];
}
