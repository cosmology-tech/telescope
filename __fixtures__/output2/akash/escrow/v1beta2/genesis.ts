//@ts-nocheck
/* eslint-disable */
import { Account, FractionalPayment } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.escrow.v1beta2";

/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisState {
  accounts: Account[];
  payments: FractionalPayment[];
}

function createBaseGenesisState(): GenesisState {
  return {
    accounts: [],
    payments: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.payments) {
      FractionalPayment.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : [],
      payments: Array.isArray(object?.payments) ? object.payments.map((e: any) => FractionalPayment.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
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

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
    message.payments = object.payments?.map(e => FractionalPayment.fromPartial(e)) || [];
    return message;
  }

};