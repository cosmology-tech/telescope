import { Account, AccountAmino, AccountSDKType, FractionalPayment, FractionalPaymentAmino, FractionalPaymentSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "akash.escrow.v1beta2";
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisState {
  accounts: Account[];
  payments: FractionalPayment[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.escrow.v1beta2.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisStateAmino {
  accounts: AccountAmino[];
  payments: FractionalPaymentAmino[];
}
export interface GenesisStateAminoMsg {
  type: "akash/escrow/v1beta2/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisStateSDKType {
  accounts: AccountSDKType[];
  payments: FractionalPaymentSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    accounts: [],
    payments: []
  };
}
export const GenesisState = {
  typeUrl: "/akash.escrow.v1beta2.GenesisState",
  aminoType: "akash/escrow/v1beta2/genesis-state",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || Account.is(o.accounts[0])) && Array.isArray(o.payments) && (!o.payments.length || FractionalPayment.is(o.payments[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || Account.isSDK(o.accounts[0])) && Array.isArray(o.payments) && (!o.payments.length || FractionalPayment.isSDK(o.payments[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || Account.isAmino(o.accounts[0])) && Array.isArray(o.payments) && (!o.payments.length || FractionalPayment.isAmino(o.payments[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.payments) {
      FractionalPayment.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Account.decode(reader, reader.uint32()));
          break;
        case 2:
          message.payments.push(FractionalPayment.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (Array.isArray(object?.accounts)) obj.accounts = object.accounts.map((e: any) => Account.fromJSON(e));
    if (Array.isArray(object?.payments)) obj.payments = object.payments.map((e: any) => FractionalPayment.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }
    if (message.payments) {
      obj.payments = message.payments.map(e => e ? FractionalPayment.toJSON(e) : undefined);
    } else {
      obj.payments = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
    message.payments = object.payments?.map(e => FractionalPayment.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromSDK(e)) : [],
      payments: Array.isArray(object?.payments) ? object.payments.map((e: any) => FractionalPayment.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromSDKJSON(e)) : [],
      payments: Array.isArray(object?.payments) ? object.payments.map((e: any) => FractionalPayment.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toSDK(e) : undefined);
    } else {
      obj.accounts = [];
    }
    if (message.payments) {
      obj.payments = message.payments.map(e => e ? FractionalPayment.toSDK(e) : undefined);
    } else {
      obj.payments = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.accounts = object.accounts?.map(e => Account.fromAmino(e)) || [];
    message.payments = object.payments?.map(e => FractionalPayment.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toAmino(e) : undefined);
    } else {
      obj.accounts = message.accounts;
    }
    if (message.payments) {
      obj.payments = message.payments.map(e => e ? FractionalPayment.toAmino(e) : undefined);
    } else {
      obj.payments = message.payments;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "akash/escrow/v1beta2/genesis-state",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1beta2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Account.registerTypeUrl();
    FractionalPayment.registerTypeUrl();
  }
};