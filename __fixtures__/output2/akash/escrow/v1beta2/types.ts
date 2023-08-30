//@ts-nocheck
/* eslint-disable */
import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "akash.escrow.v1beta2";
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
export enum FractionalPayment_State {
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
export function fractionalPayment_StateFromJSON(object: any): FractionalPayment_State {
  switch (object) {
    case 0:
    case "invalid":
      return FractionalPayment_State.invalid;
    case 1:
    case "open":
      return FractionalPayment_State.open;
    case 2:
    case "closed":
      return FractionalPayment_State.closed;
    case 3:
    case "overdrawn":
      return FractionalPayment_State.overdrawn;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FractionalPayment_State.UNRECOGNIZED;
  }
}
export function fractionalPayment_StateToJSON(object: FractionalPayment_State): string {
  switch (object) {
    case FractionalPayment_State.invalid:
      return "invalid";
    case FractionalPayment_State.open:
      return "open";
    case FractionalPayment_State.closed:
      return "closed";
    case FractionalPayment_State.overdrawn:
      return "overdrawn";
    case FractionalPayment_State.UNRECOGNIZED:
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
  id: AccountID;
  /** bech32 encoded account address of the owner of this escrow account */
  owner: string;
  /** current state of this escrow account */
  state: Account_State;
  /** unspent coins received from the owner's wallet */
  balance: DecCoin;
  /** total coins spent by this account */
  transferred: DecCoin;
  /** block height at which this account was last settled */
  settledAt: Long;
  /**
   * bech32 encoded account address of the depositor.
   * If depositor is same as the owner, then any incoming coins are added to the Balance.
   * If depositor isn't same as the owner, then any incoming coins are added to the Funds.
   */
  depositor: string;
  /**
   * Funds are unspent coins received from the (non-Owner) Depositor's wallet.
   * If there are any funds, they should be spent before spending the Balance.
   */
  funds: DecCoin;
}
/** Payment stores state for a payment */
export interface FractionalPayment {
  accountId: AccountID;
  paymentId: string;
  owner: string;
  state: FractionalPayment_State;
  rate: DecCoin;
  balance: DecCoin;
  withdrawn: Coin;
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
  fromPartial(object: Partial<AccountID>): AccountID {
    const message = createBaseAccountID();
    message.scope = object.scope ?? "";
    message.xid = object.xid ?? "";
    return message;
  }
};
function createBaseAccount(): Account {
  return {
    id: AccountID.fromPartial({}),
    owner: "",
    state: 0,
    balance: DecCoin.fromPartial({}),
    transferred: DecCoin.fromPartial({}),
    settledAt: Long.ZERO,
    depositor: "",
    funds: DecCoin.fromPartial({})
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
      DecCoin.encode(message.balance, writer.uint32(34).fork()).ldelim();
    }
    if (message.transferred !== undefined) {
      DecCoin.encode(message.transferred, writer.uint32(42).fork()).ldelim();
    }
    if (!message.settledAt.isZero()) {
      writer.uint32(48).int64(message.settledAt);
    }
    if (message.depositor !== "") {
      writer.uint32(58).string(message.depositor);
    }
    if (message.funds !== undefined) {
      DecCoin.encode(message.funds, writer.uint32(66).fork()).ldelim();
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
          message.balance = DecCoin.decode(reader, reader.uint32());
          break;
        case 5:
          message.transferred = DecCoin.decode(reader, reader.uint32());
          break;
        case 6:
          message.settledAt = (reader.int64() as Long);
          break;
        case 7:
          message.depositor = reader.string();
          break;
        case 8:
          message.funds = DecCoin.decode(reader, reader.uint32());
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
      state: isSet(object.state) ? account_StateFromJSON(object.state) : -1,
      balance: isSet(object.balance) ? DecCoin.fromJSON(object.balance) : undefined,
      transferred: isSet(object.transferred) ? DecCoin.fromJSON(object.transferred) : undefined,
      settledAt: isSet(object.settledAt) ? Long.fromValue(object.settledAt) : Long.ZERO,
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      funds: isSet(object.funds) ? DecCoin.fromJSON(object.funds) : undefined
    };
  },
  toJSON(message: Account): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? AccountID.toJSON(message.id) : undefined);
    message.owner !== undefined && (obj.owner = message.owner);
    message.state !== undefined && (obj.state = account_StateToJSON(message.state));
    message.balance !== undefined && (obj.balance = message.balance ? DecCoin.toJSON(message.balance) : undefined);
    message.transferred !== undefined && (obj.transferred = message.transferred ? DecCoin.toJSON(message.transferred) : undefined);
    message.settledAt !== undefined && (obj.settledAt = (message.settledAt || Long.ZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.funds !== undefined && (obj.funds = message.funds ? DecCoin.toJSON(message.funds) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Account>): Account {
    const message = createBaseAccount();
    message.id = object.id !== undefined && object.id !== null ? AccountID.fromPartial(object.id) : undefined;
    message.owner = object.owner ?? "";
    message.state = object.state ?? 0;
    message.balance = object.balance !== undefined && object.balance !== null ? DecCoin.fromPartial(object.balance) : undefined;
    message.transferred = object.transferred !== undefined && object.transferred !== null ? DecCoin.fromPartial(object.transferred) : undefined;
    message.settledAt = object.settledAt !== undefined && object.settledAt !== null ? Long.fromValue(object.settledAt) : Long.ZERO;
    message.depositor = object.depositor ?? "";
    message.funds = object.funds !== undefined && object.funds !== null ? DecCoin.fromPartial(object.funds) : undefined;
    return message;
  }
};
function createBaseFractionalPayment(): FractionalPayment {
  return {
    accountId: AccountID.fromPartial({}),
    paymentId: "",
    owner: "",
    state: 0,
    rate: DecCoin.fromPartial({}),
    balance: DecCoin.fromPartial({}),
    withdrawn: Coin.fromPartial({})
  };
}
export const FractionalPayment = {
  encode(message: FractionalPayment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      DecCoin.encode(message.rate, writer.uint32(42).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      DecCoin.encode(message.balance, writer.uint32(50).fork()).ldelim();
    }
    if (message.withdrawn !== undefined) {
      Coin.encode(message.withdrawn, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FractionalPayment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFractionalPayment();
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
          message.rate = DecCoin.decode(reader, reader.uint32());
          break;
        case 6:
          message.balance = DecCoin.decode(reader, reader.uint32());
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
  fromJSON(object: any): FractionalPayment {
    return {
      accountId: isSet(object.accountId) ? AccountID.fromJSON(object.accountId) : undefined,
      paymentId: isSet(object.paymentId) ? String(object.paymentId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      state: isSet(object.state) ? fractionalPayment_StateFromJSON(object.state) : -1,
      rate: isSet(object.rate) ? DecCoin.fromJSON(object.rate) : undefined,
      balance: isSet(object.balance) ? DecCoin.fromJSON(object.balance) : undefined,
      withdrawn: isSet(object.withdrawn) ? Coin.fromJSON(object.withdrawn) : undefined
    };
  },
  toJSON(message: FractionalPayment): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId ? AccountID.toJSON(message.accountId) : undefined);
    message.paymentId !== undefined && (obj.paymentId = message.paymentId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.state !== undefined && (obj.state = fractionalPayment_StateToJSON(message.state));
    message.rate !== undefined && (obj.rate = message.rate ? DecCoin.toJSON(message.rate) : undefined);
    message.balance !== undefined && (obj.balance = message.balance ? DecCoin.toJSON(message.balance) : undefined);
    message.withdrawn !== undefined && (obj.withdrawn = message.withdrawn ? Coin.toJSON(message.withdrawn) : undefined);
    return obj;
  },
  fromPartial(object: Partial<FractionalPayment>): FractionalPayment {
    const message = createBaseFractionalPayment();
    message.accountId = object.accountId !== undefined && object.accountId !== null ? AccountID.fromPartial(object.accountId) : undefined;
    message.paymentId = object.paymentId ?? "";
    message.owner = object.owner ?? "";
    message.state = object.state ?? 0;
    message.rate = object.rate !== undefined && object.rate !== null ? DecCoin.fromPartial(object.rate) : undefined;
    message.balance = object.balance !== undefined && object.balance !== null ? DecCoin.fromPartial(object.balance) : undefined;
    message.withdrawn = object.withdrawn !== undefined && object.withdrawn !== null ? Coin.fromPartial(object.withdrawn) : undefined;
    return message;
  }
};