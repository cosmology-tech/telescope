//@ts-nocheck
/* eslint-disable */
import { BaseAccount } from "../../../../cosmos/auth/v1beta1/auth";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../../helpers";
export const protobufPackage = "ibc.applications.interchain_accounts.v1";
/** An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain */
export interface InterchainAccount {
  baseAccount: BaseAccount;
  accountOwner: string;
}
function createBaseInterchainAccount(): InterchainAccount {
  return {
    baseAccount: BaseAccount.fromPartial({}),
    accountOwner: ""
  };
}
export const InterchainAccount = {
  encode(message: InterchainAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountOwner !== "") {
      writer.uint32(18).string(message.accountOwner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): InterchainAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterchainAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.accountOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InterchainAccount {
    const obj = createBaseInterchainAccount();
    if (isSet(object.baseAccount)) obj.baseAccount = BaseAccount.fromJSON(object.baseAccount);
    if (isSet(object.accountOwner)) obj.accountOwner = String(object.accountOwner);
    return obj;
  },
  toJSON(message: InterchainAccount): unknown {
    const obj: any = {};
    message.baseAccount !== undefined && (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : undefined);
    message.accountOwner !== undefined && (obj.accountOwner = message.accountOwner);
    return obj;
  },
  fromPartial(object: DeepPartial<InterchainAccount>): InterchainAccount {
    const message = createBaseInterchainAccount();
    message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : BaseAccount.fromPartial({});
    message.accountOwner = object.accountOwner ?? "";
    return message;
  }
};