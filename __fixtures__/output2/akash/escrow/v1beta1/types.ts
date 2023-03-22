//@ts-nocheck
/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "../../../helpers";
export const protobufPackage = "akash.escrow.v1beta1";

/** State stores state for an escrow account */
export enum Account_State {
  /** invalid - AccountStateInvalid is an invalid state */
  invalid = 0,

  /** open - AccountOpen is the state when an account is open */
  open = 1,

  /** closed - AccountClosed is the state when an account is closed */
  closed = 2,

  /** overdrawn - AccountOverdrawn is the state when an account is overdrawn */
  overdrawn = 3,
  UNRECOGNIZED = -1,
}
export function account_StateFromJSON(object: any): Account_State {
  switch (object) {
    case 0:
    case "invalid":
      return Account_State.invalid;

    case 1:
    case "open":
      return Account_State.open;

    case 2:
    case "closed":
      return Account_State.closed;

    case 3:
    case "overdrawn":
      return Account_State.overdrawn;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Account_State.UNRECOGNIZED;
  }
}
export function account_StateToJSON(object: Account_State): string {
  switch (object) {
    case Account_State.invalid:
      return "invalid";

    case Account_State.open:
      return "open";

    case Account_State.closed:
      return "closed";

    case Account_State.overdrawn:
      return "overdrawn";

    case Account_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Payment State */
export enum Payment_State {
  /** invalid - PaymentStateInvalid is the state when the payment is invalid */
  invalid = 0,

  /** open - PaymentStateOpen is the state when the payment is open */
  open = 1,

  /** closed - PaymentStateClosed is the state when the payment is closed */
  closed = 2,

  /** overdrawn - PaymentStateOverdrawn is the state when the payment is overdrawn */
  overdrawn = 3,
  UNRECOGNIZED = -1,
}
export function payment_StateFromJSON(object: any): Payment_State {
  switch (object) {
    case 0:
    case "invalid":
      return Payment_State.invalid;

    case 1:
    case "open":
      return Payment_State.open;

    case 2:
    case "closed":
      return Payment_State.closed;

    case 3:
    case "overdrawn":
      return Payment_State.overdrawn;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Payment_State.UNRECOGNIZED;
  }
}
export function payment_StateToJSON(object: Payment_State): string {
  switch (object) {
    case Payment_State.invalid:
      return "invalid";

    case Payment_State.open:
      return "open";

    case Payment_State.closed:
      return "closed";

    case Payment_State.overdrawn:
      return "overdrawn";

    case Payment_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** AccountID is the account identifier */
export interface AccountID {
  scope: string;
  xid: string;
}

/** Account stores state for an escrow account */
export interface Account {
  /** unique identifier for this escrow account */
  id?: AccountID;

  /** bech32 encoded account address of the owner of this escrow account */
  owner: string;

  /** current state of this escrow account */
  state: Account_State;

  /** unspent coins received from the owner's wallet */
  balance?: Coin;

  /** total coins spent by this account */
  transferred?: Coin;

  /** block height at which this account was last settled */
  settledAt: Long;
}

/** Payment stores state for a payment */
export interface Payment {
  accountId?: AccountID;
  paymentId: string;
  owner: string;
  state: Payment_State;
  rate?: Coin;
  balance?: Coin;
  withdrawn?: Coin;
}

function createBaseAccountID(): AccountID {
  return {
    scope: "",
    xid: ""
  };
}

export const AccountID = {
  encode(message: AccountID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scope !== "") {
      writer.uint32(10).string(message.scope);
    }

    if (message.xid !== "") {
      writer.uint32(18).string(message.xid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountID();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.scope = reader.string();
          break;

        case 2:
          message.xid = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountID {
    return {
      scope: isSet(object.scope) ? String(object.scope) : "",
      xid: isSet(object.xid) ? String(object.xid) : ""
    };
  },

  toJSON(message: AccountID): unknown {
    const obj: any = {};
    message.scope !== undefined && (obj.scope = message.scope);
    message.xid !== undefined && (obj.xid = message.xid);
    return obj;
  },

  fromPartial(object: DeepPartial<AccountID>): AccountID {
    const message = createBaseAccountID();
    message.scope = object.scope ?? "";
    message.xid = object.xid ?? "";
    return message;
  },

  fromSDKJSON(object: any): AccountIDSDKType {
    return {
      scope: isSet(object.scope) ? String(object.scope) : "",
      xid: isSet(object.xid) ? String(object.xid) : ""
    };
  }

};

function createBaseAccount(): Account {
  return {
    id: undefined,
    owner: "",
    state: 0,
    balance: undefined,
    transferred: undefined,
    settledAt: Long.ZERO
  };
}

export const Account = {
  encode(message: Account, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      AccountID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }

    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(34).fork()).ldelim();
    }

    if (message.transferred !== undefined) {
      Coin.encode(message.transferred, writer.uint32(42).fork()).ldelim();
    }

    if (!message.settledAt.isZero()) {
      writer.uint32(48).int64(message.settledAt);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Account {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = AccountID.decode(reader, reader.uint32());
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.state = (reader.int32() as any);
          break;

        case 4:
          message.balance = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.transferred = Coin.decode(reader, reader.uint32());
          break;

        case 6:
          message.settledAt = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Account {
    return {
      id: isSet(object.id) ? AccountID.fromJSON(object.id) : undefined,
      owner: isSet(object.owner) ? String(object.owner) : "",
      state: isSet(object.state) ? account_StateFromJSON(object.state) : 0,
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined,
      transferred: isSet(object.transferred) ? Coin.fromJSON(object.transferred) : undefined,
      settledAt: isSet(object.settledAt) ? Long.fromValue(object.settledAt) : Long.ZERO
    };
  },

  toJSON(message: Account): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? AccountID.toJSON(message.id) : undefined);
    message.owner !== undefined && (obj.owner = message.owner);
    message.state !== undefined && (obj.state = account_StateToJSON(message.state));
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    message.transferred !== undefined && (obj.transferred = message.transferred ? Coin.toJSON(message.transferred) : undefined);
    message.settledAt !== undefined && (obj.settledAt = (message.settledAt || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Account>): Account {
    const message = createBaseAccount();
    message.id = object.id !== undefined && object.id !== null ? AccountID.fromPartial(object.id) : undefined;
    message.owner = object.owner ?? "";
    message.state = object.state ?? 0;
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    message.transferred = object.transferred !== undefined && object.transferred !== null ? Coin.fromPartial(object.transferred) : undefined;
    message.settledAt = object.settledAt !== undefined && object.settledAt !== null ? Long.fromValue(object.settledAt) : Long.ZERO;
    return message;
  },

  fromSDKJSON(object: any): AccountSDKType {
    return {
      id: isSet(object.id) ? AccountID.fromSDKJSON(object.id) : undefined,
      owner: isSet(object.owner) ? String(object.owner) : "",
      state: isSet(object.state) ? account_StateFromJSON(object.state) : 0,
      balance: isSet(object.balance) ? Coin.fromSDKJSON(object.balance) : undefined,
      transferred: isSet(object.transferred) ? Coin.fromSDKJSON(object.transferred) : undefined,
      settled_at: isSet(object.settled_at) ? Long.fromValue(object.settled_at) : Long.ZERO
    };
  }

};

function createBasePayment(): Payment {
  return {
    accountId: undefined,
    paymentId: "",
    owner: "",
    state: 0,
    rate: undefined,
    balance: undefined,
    withdrawn: undefined
  };
}

export const Payment = {
  encode(message: Payment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== undefined) {
      AccountID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
    }

    if (message.paymentId !== "") {
      writer.uint32(18).string(message.paymentId);
    }

    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }

    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }

    if (message.rate !== undefined) {
      Coin.encode(message.rate, writer.uint32(42).fork()).ldelim();
    }

    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(50).fork()).ldelim();
    }

    if (message.withdrawn !== undefined) {
      Coin.encode(message.withdrawn, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Payment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayment();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accountId = AccountID.decode(reader, reader.uint32());
          break;

        case 2:
          message.paymentId = reader.string();
          break;

        case 3:
          message.owner = reader.string();
          break;

        case 4:
          message.state = (reader.int32() as any);
          break;

        case 5:
          message.rate = Coin.decode(reader, reader.uint32());
          break;

        case 6:
          message.balance = Coin.decode(reader, reader.uint32());
          break;

        case 7:
          message.withdrawn = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Payment {
    return {
      accountId: isSet(object.accountId) ? AccountID.fromJSON(object.accountId) : undefined,
      paymentId: isSet(object.paymentId) ? String(object.paymentId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      state: isSet(object.state) ? payment_StateFromJSON(object.state) : 0,
      rate: isSet(object.rate) ? Coin.fromJSON(object.rate) : undefined,
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined,
      withdrawn: isSet(object.withdrawn) ? Coin.fromJSON(object.withdrawn) : undefined
    };
  },

  toJSON(message: Payment): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId ? AccountID.toJSON(message.accountId) : undefined);
    message.paymentId !== undefined && (obj.paymentId = message.paymentId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.state !== undefined && (obj.state = payment_StateToJSON(message.state));
    message.rate !== undefined && (obj.rate = message.rate ? Coin.toJSON(message.rate) : undefined);
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    message.withdrawn !== undefined && (obj.withdrawn = message.withdrawn ? Coin.toJSON(message.withdrawn) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Payment>): Payment {
    const message = createBasePayment();
    message.accountId = object.accountId !== undefined && object.accountId !== null ? AccountID.fromPartial(object.accountId) : undefined;
    message.paymentId = object.paymentId ?? "";
    message.owner = object.owner ?? "";
    message.state = object.state ?? 0;
    message.rate = object.rate !== undefined && object.rate !== null ? Coin.fromPartial(object.rate) : undefined;
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    message.withdrawn = object.withdrawn !== undefined && object.withdrawn !== null ? Coin.fromPartial(object.withdrawn) : undefined;
    return message;
  },

  fromSDKJSON(object: any): PaymentSDKType {
    return {
      account_id: isSet(object.account_id) ? AccountID.fromSDKJSON(object.account_id) : undefined,
      payment_id: isSet(object.payment_id) ? String(object.payment_id) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      state: isSet(object.state) ? payment_StateFromJSON(object.state) : 0,
      rate: isSet(object.rate) ? Coin.fromSDKJSON(object.rate) : undefined,
      balance: isSet(object.balance) ? Coin.fromSDKJSON(object.balance) : undefined,
      withdrawn: isSet(object.withdrawn) ? Coin.fromSDKJSON(object.withdrawn) : undefined
    };
  }

};