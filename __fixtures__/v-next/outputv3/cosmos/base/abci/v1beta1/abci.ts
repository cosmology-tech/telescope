import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Event, EventAmino, EventSDKType } from "../../../../tendermint/abci/types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export const protobufPackage = "cosmos.base.abci.v1beta1";
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */
export interface TxResponse {
  /** The block height */
  height: bigint;
  /** The transaction hash. */
  txhash: string;
  /** Namespace for the Code */
  codespace: string;
  /** Response code. */
  code: number;
  /** Result bytes, if any. */
  data: string;
  /**
   * The output of the application's logger (raw string). May be
   * non-deterministic.
   */
  rawLog: string;
  /** The output of the application's logger (typed). May be non-deterministic. */
  logs: ABCIMessageLog[];
  /** Additional information. May be non-deterministic. */
  info: string;
  /** Amount of gas requested for transaction. */
  gasWanted: bigint;
  /** Amount of gas consumed by transaction. */
  gasUsed: bigint;
  /** The request transaction bytes. */
  tx?: Any;
  /**
   * Time of the previous block. For heights > 1, it's the weighted median of
   * the timestamps of the valid votes in the block.LastCommit. For height == 1,
   * it's genesis time.
   */
  timestamp: string;
  /**
   * Events defines all the events emitted by processing a transaction. Note,
   * these events include those emitted by processing all the messages and those
   * emitted from the ante handler. Whereas Logs contains the events, with
   * additional metadata, emitted only by processing the messages.
   * 
   * Since: cosmos-sdk 0.42.11, 0.44.5, 0.45
   */
  events: Event[];
}
export interface TxResponseProtoMsg {
  typeUrl: "/cosmos.base.abci.v1beta1.TxResponse";
  value: Uint8Array;
}
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */
export interface TxResponseAmino {
  /** The block height */
  height: string;
  /** The transaction hash. */
  txhash: string;
  /** Namespace for the Code */
  codespace: string;
  /** Response code. */
  code: number;
  /** Result bytes, if any. */
  data: string;
  /**
   * The output of the application's logger (raw string). May be
   * non-deterministic.
   */
  raw_log: string;
  /** The output of the application's logger (typed). May be non-deterministic. */
  logs: ABCIMessageLogAmino[];
  /** Additional information. May be non-deterministic. */
  info: string;
  /** Amount of gas requested for transaction. */
  gas_wanted: string;
  /** Amount of gas consumed by transaction. */
  gas_used: string;
  /** The request transaction bytes. */
  tx?: AnyAmino;
  /**
   * Time of the previous block. For heights > 1, it's the weighted median of
   * the timestamps of the valid votes in the block.LastCommit. For height == 1,
   * it's genesis time.
   */
  timestamp: string;
  /**
   * Events defines all the events emitted by processing a transaction. Note,
   * these events include those emitted by processing all the messages and those
   * emitted from the ante handler. Whereas Logs contains the events, with
   * additional metadata, emitted only by processing the messages.
   * 
   * Since: cosmos-sdk 0.42.11, 0.44.5, 0.45
   */
  events: EventAmino[];
}
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */
export interface TxResponseSDKType {
  height: bigint;
  txhash: string;
  codespace: string;
  code: number;
  data: string;
  raw_log: string;
  logs: ABCIMessageLogSDKType[];
  info: string;
  gas_wanted: bigint;
  gas_used: bigint;
  tx?: AnySDKType;
  timestamp: string;
  events: EventSDKType[];
}
/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */
export interface ABCIMessageLog {
  msgIndex: number;
  log: string;
  /**
   * Events contains a slice of Event objects that were emitted during some
   * execution.
   */
  events: StringEvent[];
}
export interface ABCIMessageLogProtoMsg {
  typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog";
  value: Uint8Array;
}
/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */
export interface ABCIMessageLogAmino {
  msg_index: number;
  log: string;
  /**
   * Events contains a slice of Event objects that were emitted during some
   * execution.
   */
  events: StringEventAmino[];
}
/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */
export interface ABCIMessageLogSDKType {
  msg_index: number;
  log: string;
  events: StringEventSDKType[];
}
/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */
export interface StringEvent {
  type: string;
  attributes: Attribute[];
}
export interface StringEventProtoMsg {
  typeUrl: "/cosmos.base.abci.v1beta1.StringEvent";
  value: Uint8Array;
}
/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */
export interface StringEventAmino {
  type: string;
  attributes: AttributeAmino[];
}
/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */
export interface StringEventSDKType {
  type: string;
  attributes: AttributeSDKType[];
}
/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */
export interface Attribute {
  key: string;
  value: string;
}
export interface AttributeProtoMsg {
  typeUrl: "/cosmos.base.abci.v1beta1.Attribute";
  value: Uint8Array;
}
/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */
export interface AttributeAmino {
  key: string;
  value: string;
}
/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */
export interface AttributeSDKType {
  key: string;
  value: string;
}
/** GasInfo defines tx execution gas context. */
export interface GasInfo {
  /** GasWanted is the maximum units of work we allow this tx to perform. */
  gasWanted: bigint;
  /** GasUsed is the amount of gas actually consumed. */
  gasUsed: bigint;
}
export interface GasInfoProtoMsg {
  typeUrl: "/cosmos.base.abci.v1beta1.GasInfo";
  value: Uint8Array;
}
/** GasInfo defines tx execution gas context. */
export interface GasInfoAmino {
  /** GasWanted is the maximum units of work we allow this tx to perform. */
  gas_wanted: string;
  /** GasUsed is the amount of gas actually consumed. */
  gas_used: string;
}
/** GasInfo defines tx execution gas context. */
export interface GasInfoSDKType {
  gas_wanted: bigint;
  gas_used: bigint;
}
/** Result is the union of ResponseFormat and ResponseCheckTx. */
export interface Result {
  /**
   * Data is any data returned from message or handler execution. It MUST be
   * length prefixed in order to separate data from multiple message executions.
   * Deprecated. This field is still populated, but prefer msg_response instead
   * because it also contains the Msg response typeURL.
   */
  /** @deprecated */
  data: Uint8Array;
  /** Log contains the log information from message or handler execution. */
  log: string;
  /**
   * Events contains a slice of Event objects that were emitted during message
   * or handler execution.
   */
  events: Event[];
  /**
   * msg_responses contains the Msg handler responses type packed in Anys.
   * 
   * Since: cosmos-sdk 0.46
   */
  msgResponses: Any[];
}
export interface ResultProtoMsg {
  typeUrl: "/cosmos.base.abci.v1beta1.Result";
  value: Uint8Array;
}
/** Result is the union of ResponseFormat and ResponseCheckTx. */
export interface ResultAmino {
  /**
   * Data is any data returned from message or handler execution. It MUST be
   * length prefixed in order to separate data from multiple message executions.
   * Deprecated. This field is still populated, but prefer msg_response instead
   * because it also contains the Msg response typeURL.
   */
  /** @deprecated */
  data: Uint8Array;
  /** Log contains the log information from message or handler execution. */
  log: string;
  /**
   * Events contains a slice of Event objects that were emitted during message
   * or handler execution.
   */
  events: EventAmino[];
  /**
   * msg_responses contains the Msg handler responses type packed in Anys.
   * 
   * Since: cosmos-sdk 0.46
   */
  msg_responses: AnyAmino[];
}
/** Result is the union of ResponseFormat and ResponseCheckTx. */
export interface ResultSDKType {
  /** @deprecated */
  data: Uint8Array;
  log: string;
  events: EventSDKType[];
  msg_responses: AnySDKType[];
}
/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */
export interface SimulationResponse {
  gasInfo: GasInfo;
  result?: Result;
}
export interface SimulationResponseProtoMsg {
  typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse";
  value: Uint8Array;
}
/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */
export interface SimulationResponseAmino {
  gas_info?: GasInfoAmino;
  result?: ResultAmino;
}
/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */
export interface SimulationResponseSDKType {
  gas_info: GasInfoSDKType;
  result?: ResultSDKType;
}
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 */
/** @deprecated */
export interface MsgData {
  msgType: string;
  data: Uint8Array;
}
export interface MsgDataProtoMsg {
  typeUrl: "/cosmos.base.abci.v1beta1.MsgData";
  value: Uint8Array;
}
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 */
/** @deprecated */
export interface MsgDataAmino {
  msg_type: string;
  data: Uint8Array;
}
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 */
/** @deprecated */
export interface MsgDataSDKType {
  msg_type: string;
  data: Uint8Array;
}
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
export interface TxMsgData {
  /** data field is deprecated and not populated. */
  /** @deprecated */
  data: MsgData[];
  /**
   * msg_responses contains the Msg handler responses packed into Anys.
   * 
   * Since: cosmos-sdk 0.46
   */
  msgResponses: Any[];
}
export interface TxMsgDataProtoMsg {
  typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData";
  value: Uint8Array;
}
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
export interface TxMsgDataAmino {
  /** data field is deprecated and not populated. */
  /** @deprecated */
  data: MsgDataAmino[];
  /**
   * msg_responses contains the Msg handler responses packed into Anys.
   * 
   * Since: cosmos-sdk 0.46
   */
  msg_responses: AnyAmino[];
}
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
export interface TxMsgDataSDKType {
  /** @deprecated */
  data: MsgDataSDKType[];
  msg_responses: AnySDKType[];
}
/** SearchTxsResult defines a structure for querying txs pageable */
export interface SearchTxsResult {
  /** Count of all txs */
  totalCount: bigint;
  /** Count of txs in current page */
  count: bigint;
  /** Index of current page, start from 1 */
  pageNumber: bigint;
  /** Count of total pages */
  pageTotal: bigint;
  /** Max count txs per page */
  limit: bigint;
  /** List of txs in current page */
  txs: TxResponse[];
}
export interface SearchTxsResultProtoMsg {
  typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult";
  value: Uint8Array;
}
/** SearchTxsResult defines a structure for querying txs pageable */
export interface SearchTxsResultAmino {
  /** Count of all txs */
  total_count: string;
  /** Count of txs in current page */
  count: string;
  /** Index of current page, start from 1 */
  page_number: string;
  /** Count of total pages */
  page_total: string;
  /** Max count txs per page */
  limit: string;
  /** List of txs in current page */
  txs: TxResponseAmino[];
}
/** SearchTxsResult defines a structure for querying txs pageable */
export interface SearchTxsResultSDKType {
  total_count: bigint;
  count: bigint;
  page_number: bigint;
  page_total: bigint;
  limit: bigint;
  txs: TxResponseSDKType[];
}
function createBaseTxResponse(): TxResponse {
  return {
    height: BigInt(0),
    txhash: "",
    codespace: "",
    code: 0,
    data: "",
    rawLog: "",
    logs: [],
    info: "",
    gasWanted: BigInt(0),
    gasUsed: BigInt(0),
    tx: undefined,
    timestamp: "",
    events: []
  };
}
export const TxResponse = {
  typeUrl: "/cosmos.base.abci.v1beta1.TxResponse",
  aminoType: "cosmos-sdk/TxResponse",
  encode(message: TxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.txhash !== "") {
      writer.uint32(18).string(message.txhash);
    }
    if (message.codespace !== "") {
      writer.uint32(26).string(message.codespace);
    }
    if (message.code !== 0) {
      writer.uint32(32).uint32(message.code);
    }
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    if (message.rawLog !== "") {
      writer.uint32(50).string(message.rawLog);
    }
    for (const v of message.logs) {
      ABCIMessageLog.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.info !== "") {
      writer.uint32(66).string(message.info);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(72).int64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(80).int64(message.gasUsed);
    }
    if (message.tx !== undefined) {
      Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
    }
    if (message.timestamp !== "") {
      writer.uint32(98).string(message.timestamp);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): TxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.txhash = reader.string();
          break;
        case 3:
          message.codespace = reader.string();
          break;
        case 4:
          message.code = reader.uint32();
          break;
        case 5:
          message.data = reader.string();
          break;
        case 6:
          message.rawLog = reader.string();
          break;
        case 7:
          message.logs.push(ABCIMessageLog.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 8:
          message.info = reader.string();
          break;
        case 9:
          message.gasWanted = reader.int64();
          break;
        case 10:
          message.gasUsed = reader.int64();
          break;
        case 11:
          message.tx = Any.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 12:
          message.timestamp = reader.string();
          break;
        case 13:
          message.events.push(Event.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxResponse {
    const obj = createBaseTxResponse();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.txhash)) obj.txhash = String(object.txhash);
    if (isSet(object.codespace)) obj.codespace = String(object.codespace);
    if (isSet(object.code)) obj.code = Number(object.code);
    if (isSet(object.data)) obj.data = String(object.data);
    if (isSet(object.rawLog)) obj.rawLog = String(object.rawLog);
    if (Array.isArray(object?.logs)) obj.logs = object.logs.map((e: any) => ABCIMessageLog.fromJSON(e));
    if (isSet(object.info)) obj.info = String(object.info);
    if (isSet(object.gasWanted)) obj.gasWanted = BigInt(object.gasWanted.toString());
    if (isSet(object.gasUsed)) obj.gasUsed = BigInt(object.gasUsed.toString());
    if (isSet(object.tx)) obj.tx = Any.fromJSON(object.tx);
    if (isSet(object.timestamp)) obj.timestamp = String(object.timestamp);
    if (Array.isArray(object?.events)) obj.events = object.events.map((e: any) => Event.fromJSON(e));
    return obj;
  },
  toJSON(message: TxResponse): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.txhash !== undefined && (obj.txhash = message.txhash);
    message.codespace !== undefined && (obj.codespace = message.codespace);
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.data !== undefined && (obj.data = message.data);
    message.rawLog !== undefined && (obj.rawLog = message.rawLog);
    if (message.logs) {
      obj.logs = message.logs.map(e => e ? ABCIMessageLog.toJSON(e) : undefined);
    } else {
      obj.logs = [];
    }
    message.info !== undefined && (obj.info = message.info);
    message.gasWanted !== undefined && (obj.gasWanted = (message.gasWanted || BigInt(0)).toString());
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || BigInt(0)).toString());
    message.tx !== undefined && (obj.tx = message.tx ? Any.toJSON(message.tx) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<TxResponse>): TxResponse {
    const message = createBaseTxResponse();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.txhash = object.txhash ?? "";
    message.codespace = object.codespace ?? "";
    message.code = object.code ?? 0;
    message.data = object.data ?? "";
    message.rawLog = object.rawLog ?? "";
    message.logs = object.logs?.map(e => ABCIMessageLog.fromPartial(e)) || [];
    message.info = object.info ?? "";
    if (object.gasWanted !== undefined && object.gasWanted !== null) {
      message.gasWanted = BigInt(object.gasWanted.toString());
    }
    if (object.gasUsed !== undefined && object.gasUsed !== null) {
      message.gasUsed = BigInt(object.gasUsed.toString());
    }
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Any.fromPartial(object.tx);
    }
    message.timestamp = object.timestamp ?? "";
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: TxResponseSDKType): TxResponse {
    return {
      height: object?.height,
      txhash: object?.txhash,
      codespace: object?.codespace,
      code: object?.code,
      data: object?.data,
      rawLog: object?.raw_log,
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => ABCIMessageLog.fromSDK(e)) : [],
      info: object?.info,
      gasWanted: object?.gas_wanted,
      gasUsed: object?.gas_used,
      tx: object.tx ? Any.fromSDK(object.tx) : undefined,
      timestamp: object?.timestamp,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromSDK(e)) : []
    };
  },
  toSDK(message: TxResponse): TxResponseSDKType {
    const obj: any = {};
    obj.height = message.height;
    obj.txhash = message.txhash;
    obj.codespace = message.codespace;
    obj.code = message.code;
    obj.data = message.data;
    obj.raw_log = message.rawLog;
    if (message.logs) {
      obj.logs = message.logs.map(e => e ? ABCIMessageLog.toSDK(e) : undefined);
    } else {
      obj.logs = [];
    }
    obj.info = message.info;
    obj.gas_wanted = message.gasWanted;
    obj.gas_used = message.gasUsed;
    message.tx !== undefined && (obj.tx = message.tx ? Any.toSDK(message.tx) : undefined);
    obj.timestamp = message.timestamp;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toSDK(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromAmino(object: TxResponseAmino): TxResponse {
    return {
      height: BigInt(object.height),
      txhash: object.txhash,
      codespace: object.codespace,
      code: object.code,
      data: object.data,
      rawLog: object.raw_log,
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => ABCIMessageLog.fromAmino(e)) : [],
      info: object.info,
      gasWanted: BigInt(object.gas_wanted),
      gasUsed: BigInt(object.gas_used),
      tx: object?.tx ? Any.fromAmino(object.tx) : undefined,
      timestamp: object.timestamp,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromAmino(e)) : []
    };
  },
  toAmino(message: TxResponse, useInterfaces: boolean = true): TxResponseAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.txhash = message.txhash;
    obj.codespace = message.codespace;
    obj.code = message.code;
    obj.data = message.data;
    obj.raw_log = message.rawLog;
    if (message.logs) {
      obj.logs = message.logs.map(e => e ? ABCIMessageLog.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.logs = [];
    }
    obj.info = message.info;
    obj.gas_wanted = message.gasWanted ? message.gasWanted.toString() : undefined;
    obj.gas_used = message.gasUsed ? message.gasUsed.toString() : undefined;
    obj.tx = message.tx ? Any.toAmino(message.tx, useInterfaces) : undefined;
    obj.timestamp = message.timestamp;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromProtoMsg(message: TxResponseProtoMsg, useInterfaces: boolean = true): TxResponse {
    return TxResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: TxResponse): Uint8Array {
    return TxResponse.encode(message).finish();
  },
  toProtoMsg(message: TxResponse): TxResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.TxResponse",
      value: TxResponse.encode(message).finish()
    };
  }
};
function createBaseABCIMessageLog(): ABCIMessageLog {
  return {
    msgIndex: 0,
    log: "",
    events: []
  };
}
export const ABCIMessageLog = {
  typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog",
  aminoType: "cosmos-sdk/ABCIMessageLog",
  encode(message: ABCIMessageLog, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msgIndex !== 0) {
      writer.uint32(8).uint32(message.msgIndex);
    }
    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }
    for (const v of message.events) {
      StringEvent.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ABCIMessageLog {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIMessageLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgIndex = reader.uint32();
          break;
        case 2:
          message.log = reader.string();
          break;
        case 3:
          message.events.push(StringEvent.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ABCIMessageLog {
    const obj = createBaseABCIMessageLog();
    if (isSet(object.msgIndex)) obj.msgIndex = Number(object.msgIndex);
    if (isSet(object.log)) obj.log = String(object.log);
    if (Array.isArray(object?.events)) obj.events = object.events.map((e: any) => StringEvent.fromJSON(e));
    return obj;
  },
  toJSON(message: ABCIMessageLog): unknown {
    const obj: any = {};
    message.msgIndex !== undefined && (obj.msgIndex = Math.round(message.msgIndex));
    message.log !== undefined && (obj.log = message.log);
    if (message.events) {
      obj.events = message.events.map(e => e ? StringEvent.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ABCIMessageLog>): ABCIMessageLog {
    const message = createBaseABCIMessageLog();
    message.msgIndex = object.msgIndex ?? 0;
    message.log = object.log ?? "";
    message.events = object.events?.map(e => StringEvent.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ABCIMessageLogSDKType): ABCIMessageLog {
    return {
      msgIndex: object?.msg_index,
      log: object?.log,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => StringEvent.fromSDK(e)) : []
    };
  },
  toSDK(message: ABCIMessageLog): ABCIMessageLogSDKType {
    const obj: any = {};
    obj.msg_index = message.msgIndex;
    obj.log = message.log;
    if (message.events) {
      obj.events = message.events.map(e => e ? StringEvent.toSDK(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromAmino(object: ABCIMessageLogAmino): ABCIMessageLog {
    return {
      msgIndex: object.msg_index,
      log: object.log,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => StringEvent.fromAmino(e)) : []
    };
  },
  toAmino(message: ABCIMessageLog, useInterfaces: boolean = true): ABCIMessageLogAmino {
    const obj: any = {};
    obj.msg_index = message.msgIndex;
    obj.log = message.log;
    if (message.events) {
      obj.events = message.events.map(e => e ? StringEvent.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromProtoMsg(message: ABCIMessageLogProtoMsg, useInterfaces: boolean = true): ABCIMessageLog {
    return ABCIMessageLog.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ABCIMessageLog): Uint8Array {
    return ABCIMessageLog.encode(message).finish();
  },
  toProtoMsg(message: ABCIMessageLog): ABCIMessageLogProtoMsg {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog",
      value: ABCIMessageLog.encode(message).finish()
    };
  }
};
function createBaseStringEvent(): StringEvent {
  return {
    type: "",
    attributes: []
  };
}
export const StringEvent = {
  typeUrl: "/cosmos.base.abci.v1beta1.StringEvent",
  aminoType: "cosmos-sdk/StringEvent",
  encode(message: StringEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): StringEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StringEvent {
    const obj = createBaseStringEvent();
    if (isSet(object.type)) obj.type = String(object.type);
    if (Array.isArray(object?.attributes)) obj.attributes = object.attributes.map((e: any) => Attribute.fromJSON(e));
    return obj;
  },
  toJSON(message: StringEvent): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<StringEvent>): StringEvent {
    const message = createBaseStringEvent();
    message.type = object.type ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: StringEventSDKType): StringEvent {
    return {
      type: object?.type,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : []
    };
  },
  toSDK(message: StringEvent): StringEventSDKType {
    const obj: any = {};
    obj.type = message.type;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAmino(object: StringEventAmino): StringEvent {
    return {
      type: object.type,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromAmino(e)) : []
    };
  },
  toAmino(message: StringEvent, useInterfaces: boolean = true): StringEventAmino {
    const obj: any = {};
    obj.type = message.type;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromProtoMsg(message: StringEventProtoMsg, useInterfaces: boolean = true): StringEvent {
    return StringEvent.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: StringEvent): Uint8Array {
    return StringEvent.encode(message).finish();
  },
  toProtoMsg(message: StringEvent): StringEventProtoMsg {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.StringEvent",
      value: StringEvent.encode(message).finish()
    };
  }
};
function createBaseAttribute(): Attribute {
  return {
    key: "",
    value: ""
  };
}
export const Attribute = {
  typeUrl: "/cosmos.base.abci.v1beta1.Attribute",
  aminoType: "cosmos-sdk/Attribute",
  encode(message: Attribute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Attribute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Attribute {
    const obj = createBaseAttribute();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = String(object.value);
    return obj;
  },
  toJSON(message: Attribute): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<Attribute>): Attribute {
    const message = createBaseAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: AttributeSDKType): Attribute {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: Attribute): AttributeSDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: AttributeAmino): Attribute {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: Attribute, useInterfaces: boolean = true): AttributeAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromProtoMsg(message: AttributeProtoMsg, useInterfaces: boolean = true): Attribute {
    return Attribute.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Attribute): Uint8Array {
    return Attribute.encode(message).finish();
  },
  toProtoMsg(message: Attribute): AttributeProtoMsg {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.Attribute",
      value: Attribute.encode(message).finish()
    };
  }
};
function createBaseGasInfo(): GasInfo {
  return {
    gasWanted: BigInt(0),
    gasUsed: BigInt(0)
  };
}
export const GasInfo = {
  typeUrl: "/cosmos.base.abci.v1beta1.GasInfo",
  aminoType: "cosmos-sdk/GasInfo",
  encode(message: GasInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(8).uint64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(16).uint64(message.gasUsed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GasInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasWanted = reader.uint64();
          break;
        case 2:
          message.gasUsed = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GasInfo {
    const obj = createBaseGasInfo();
    if (isSet(object.gasWanted)) obj.gasWanted = BigInt(object.gasWanted.toString());
    if (isSet(object.gasUsed)) obj.gasUsed = BigInt(object.gasUsed.toString());
    return obj;
  },
  toJSON(message: GasInfo): unknown {
    const obj: any = {};
    message.gasWanted !== undefined && (obj.gasWanted = (message.gasWanted || BigInt(0)).toString());
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<GasInfo>): GasInfo {
    const message = createBaseGasInfo();
    if (object.gasWanted !== undefined && object.gasWanted !== null) {
      message.gasWanted = BigInt(object.gasWanted.toString());
    }
    if (object.gasUsed !== undefined && object.gasUsed !== null) {
      message.gasUsed = BigInt(object.gasUsed.toString());
    }
    return message;
  },
  fromSDK(object: GasInfoSDKType): GasInfo {
    return {
      gasWanted: object?.gas_wanted,
      gasUsed: object?.gas_used
    };
  },
  toSDK(message: GasInfo): GasInfoSDKType {
    const obj: any = {};
    obj.gas_wanted = message.gasWanted;
    obj.gas_used = message.gasUsed;
    return obj;
  },
  fromAmino(object: GasInfoAmino): GasInfo {
    return {
      gasWanted: BigInt(object.gas_wanted),
      gasUsed: BigInt(object.gas_used)
    };
  },
  toAmino(message: GasInfo, useInterfaces: boolean = true): GasInfoAmino {
    const obj: any = {};
    obj.gas_wanted = message.gasWanted ? message.gasWanted.toString() : undefined;
    obj.gas_used = message.gasUsed ? message.gasUsed.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: GasInfoProtoMsg, useInterfaces: boolean = true): GasInfo {
    return GasInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GasInfo): Uint8Array {
    return GasInfo.encode(message).finish();
  },
  toProtoMsg(message: GasInfo): GasInfoProtoMsg {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.GasInfo",
      value: GasInfo.encode(message).finish()
    };
  }
};
function createBaseResult(): Result {
  return {
    data: new Uint8Array(),
    log: "",
    events: [],
    msgResponses: []
  };
}
export const Result = {
  typeUrl: "/cosmos.base.abci.v1beta1.Result",
  aminoType: "cosmos-sdk/Result",
  encode(message: Result, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.msgResponses) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Result {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.log = reader.string();
          break;
        case 3:
          message.events.push(Event.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.msgResponses.push(Any.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Result {
    const obj = createBaseResult();
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    if (isSet(object.log)) obj.log = String(object.log);
    if (Array.isArray(object?.events)) obj.events = object.events.map((e: any) => Event.fromJSON(e));
    if (Array.isArray(object?.msgResponses)) obj.msgResponses = object.msgResponses.map((e: any) => Any.fromJSON(e));
    return obj;
  },
  toJSON(message: Result): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.log !== undefined && (obj.log = message.log);
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    if (message.msgResponses) {
      obj.msgResponses = message.msgResponses.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.msgResponses = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Result>): Result {
    const message = createBaseResult();
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.msgResponses = object.msgResponses?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ResultSDKType): Result {
    return {
      data: object?.data,
      log: object?.log,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromSDK(e)) : [],
      msgResponses: Array.isArray(object?.msg_responses) ? object.msg_responses.map((e: any) => Any.fromSDK(e)) : []
    };
  },
  toSDK(message: Result): ResultSDKType {
    const obj: any = {};
    obj.data = message.data;
    obj.log = message.log;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toSDK(e) : undefined);
    } else {
      obj.events = [];
    }
    if (message.msgResponses) {
      obj.msg_responses = message.msgResponses.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.msg_responses = [];
    }
    return obj;
  },
  fromAmino(object: ResultAmino): Result {
    return {
      data: object.data,
      log: object.log,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromAmino(e)) : [],
      msgResponses: Array.isArray(object?.msg_responses) ? object.msg_responses.map((e: any) => Any.fromAmino(e)) : []
    };
  },
  toAmino(message: Result, useInterfaces: boolean = true): ResultAmino {
    const obj: any = {};
    obj.data = message.data;
    obj.log = message.log;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.events = [];
    }
    if (message.msgResponses) {
      obj.msg_responses = message.msgResponses.map(e => e ? Any.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.msg_responses = [];
    }
    return obj;
  },
  fromProtoMsg(message: ResultProtoMsg, useInterfaces: boolean = true): Result {
    return Result.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Result): Uint8Array {
    return Result.encode(message).finish();
  },
  toProtoMsg(message: Result): ResultProtoMsg {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.Result",
      value: Result.encode(message).finish()
    };
  }
};
function createBaseSimulationResponse(): SimulationResponse {
  return {
    gasInfo: GasInfo.fromPartial({}),
    result: undefined
  };
}
export const SimulationResponse = {
  typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse",
  aminoType: "cosmos-sdk/SimulationResponse",
  encode(message: SimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gasInfo !== undefined) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SimulationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasInfo = GasInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.result = Result.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SimulationResponse {
    const obj = createBaseSimulationResponse();
    if (isSet(object.gasInfo)) obj.gasInfo = GasInfo.fromJSON(object.gasInfo);
    if (isSet(object.result)) obj.result = Result.fromJSON(object.result);
    return obj;
  },
  toJSON(message: SimulationResponse): unknown {
    const obj: any = {};
    message.gasInfo !== undefined && (obj.gasInfo = message.gasInfo ? GasInfo.toJSON(message.gasInfo) : undefined);
    message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<SimulationResponse>): SimulationResponse {
    const message = createBaseSimulationResponse();
    if (object.gasInfo !== undefined && object.gasInfo !== null) {
      message.gasInfo = GasInfo.fromPartial(object.gasInfo);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = Result.fromPartial(object.result);
    }
    return message;
  },
  fromSDK(object: SimulationResponseSDKType): SimulationResponse {
    return {
      gasInfo: object.gas_info ? GasInfo.fromSDK(object.gas_info) : undefined,
      result: object.result ? Result.fromSDK(object.result) : undefined
    };
  },
  toSDK(message: SimulationResponse): SimulationResponseSDKType {
    const obj: any = {};
    message.gasInfo !== undefined && (obj.gas_info = message.gasInfo ? GasInfo.toSDK(message.gasInfo) : undefined);
    message.result !== undefined && (obj.result = message.result ? Result.toSDK(message.result) : undefined);
    return obj;
  },
  fromAmino(object: SimulationResponseAmino): SimulationResponse {
    return {
      gasInfo: object?.gas_info ? GasInfo.fromAmino(object.gas_info) : undefined,
      result: object?.result ? Result.fromAmino(object.result) : undefined
    };
  },
  toAmino(message: SimulationResponse, useInterfaces: boolean = true): SimulationResponseAmino {
    const obj: any = {};
    obj.gas_info = message.gasInfo ? GasInfo.toAmino(message.gasInfo, useInterfaces) : undefined;
    obj.result = message.result ? Result.toAmino(message.result, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: SimulationResponseProtoMsg, useInterfaces: boolean = true): SimulationResponse {
    return SimulationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SimulationResponse): Uint8Array {
    return SimulationResponse.encode(message).finish();
  },
  toProtoMsg(message: SimulationResponse): SimulationResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse",
      value: SimulationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgData(): MsgData {
  return {
    msgType: "",
    data: new Uint8Array()
  };
}
export const MsgData = {
  typeUrl: "/cosmos.base.abci.v1beta1.MsgData",
  aminoType: "cosmos-sdk/MsgData",
  encode(message: MsgData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msgType !== "") {
      writer.uint32(10).string(message.msgType);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgType = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgData {
    const obj = createBaseMsgData();
    if (isSet(object.msgType)) obj.msgType = String(object.msgType);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: MsgData): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = message.msgType);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgData>): MsgData {
    const message = createBaseMsgData();
    message.msgType = object.msgType ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgDataSDKType): MsgData {
    return {
      msgType: object?.msg_type,
      data: object?.data
    };
  },
  toSDK(message: MsgData): MsgDataSDKType {
    const obj: any = {};
    obj.msg_type = message.msgType;
    obj.data = message.data;
    return obj;
  },
  fromAmino(object: MsgDataAmino): MsgData {
    return {
      msgType: object.msg_type,
      data: object.data
    };
  },
  toAmino(message: MsgData, useInterfaces: boolean = true): MsgDataAmino {
    const obj: any = {};
    obj.msg_type = message.msgType;
    obj.data = message.data;
    return obj;
  },
  fromProtoMsg(message: MsgDataProtoMsg, useInterfaces: boolean = true): MsgData {
    return MsgData.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgData): Uint8Array {
    return MsgData.encode(message).finish();
  },
  toProtoMsg(message: MsgData): MsgDataProtoMsg {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.MsgData",
      value: MsgData.encode(message).finish()
    };
  }
};
function createBaseTxMsgData(): TxMsgData {
  return {
    data: [],
    msgResponses: []
  };
}
export const TxMsgData = {
  typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData",
  aminoType: "cosmos-sdk/TxMsgData",
  encode(message: TxMsgData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      MsgData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.msgResponses) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): TxMsgData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxMsgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(MsgData.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.msgResponses.push(Any.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxMsgData {
    const obj = createBaseTxMsgData();
    if (Array.isArray(object?.data)) obj.data = object.data.map((e: any) => MsgData.fromJSON(e));
    if (Array.isArray(object?.msgResponses)) obj.msgResponses = object.msgResponses.map((e: any) => Any.fromJSON(e));
    return obj;
  },
  toJSON(message: TxMsgData): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? MsgData.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    if (message.msgResponses) {
      obj.msgResponses = message.msgResponses.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.msgResponses = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<TxMsgData>): TxMsgData {
    const message = createBaseTxMsgData();
    message.data = object.data?.map(e => MsgData.fromPartial(e)) || [];
    message.msgResponses = object.msgResponses?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: TxMsgDataSDKType): TxMsgData {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => MsgData.fromSDK(e)) : [],
      msgResponses: Array.isArray(object?.msg_responses) ? object.msg_responses.map((e: any) => Any.fromSDK(e)) : []
    };
  },
  toSDK(message: TxMsgData): TxMsgDataSDKType {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? MsgData.toSDK(e) : undefined);
    } else {
      obj.data = [];
    }
    if (message.msgResponses) {
      obj.msg_responses = message.msgResponses.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.msg_responses = [];
    }
    return obj;
  },
  fromAmino(object: TxMsgDataAmino): TxMsgData {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => MsgData.fromAmino(e)) : [],
      msgResponses: Array.isArray(object?.msg_responses) ? object.msg_responses.map((e: any) => Any.fromAmino(e)) : []
    };
  },
  toAmino(message: TxMsgData, useInterfaces: boolean = true): TxMsgDataAmino {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? MsgData.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.data = [];
    }
    if (message.msgResponses) {
      obj.msg_responses = message.msgResponses.map(e => e ? Any.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.msg_responses = [];
    }
    return obj;
  },
  fromProtoMsg(message: TxMsgDataProtoMsg, useInterfaces: boolean = true): TxMsgData {
    return TxMsgData.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: TxMsgData): Uint8Array {
    return TxMsgData.encode(message).finish();
  },
  toProtoMsg(message: TxMsgData): TxMsgDataProtoMsg {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData",
      value: TxMsgData.encode(message).finish()
    };
  }
};
function createBaseSearchTxsResult(): SearchTxsResult {
  return {
    totalCount: BigInt(0),
    count: BigInt(0),
    pageNumber: BigInt(0),
    pageTotal: BigInt(0),
    limit: BigInt(0),
    txs: []
  };
}
export const SearchTxsResult = {
  typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult",
  aminoType: "cosmos-sdk/SearchTxsResult",
  encode(message: SearchTxsResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.totalCount);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(16).uint64(message.count);
    }
    if (message.pageNumber !== BigInt(0)) {
      writer.uint32(24).uint64(message.pageNumber);
    }
    if (message.pageTotal !== BigInt(0)) {
      writer.uint32(32).uint64(message.pageTotal);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(40).uint64(message.limit);
    }
    for (const v of message.txs) {
      TxResponse.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SearchTxsResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchTxsResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCount = reader.uint64();
          break;
        case 2:
          message.count = reader.uint64();
          break;
        case 3:
          message.pageNumber = reader.uint64();
          break;
        case 4:
          message.pageTotal = reader.uint64();
          break;
        case 5:
          message.limit = reader.uint64();
          break;
        case 6:
          message.txs.push(TxResponse.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SearchTxsResult {
    const obj = createBaseSearchTxsResult();
    if (isSet(object.totalCount)) obj.totalCount = BigInt(object.totalCount.toString());
    if (isSet(object.count)) obj.count = BigInt(object.count.toString());
    if (isSet(object.pageNumber)) obj.pageNumber = BigInt(object.pageNumber.toString());
    if (isSet(object.pageTotal)) obj.pageTotal = BigInt(object.pageTotal.toString());
    if (isSet(object.limit)) obj.limit = BigInt(object.limit.toString());
    if (Array.isArray(object?.txs)) obj.txs = object.txs.map((e: any) => TxResponse.fromJSON(e));
    return obj;
  },
  toJSON(message: SearchTxsResult): unknown {
    const obj: any = {};
    message.totalCount !== undefined && (obj.totalCount = (message.totalCount || BigInt(0)).toString());
    message.count !== undefined && (obj.count = (message.count || BigInt(0)).toString());
    message.pageNumber !== undefined && (obj.pageNumber = (message.pageNumber || BigInt(0)).toString());
    message.pageTotal !== undefined && (obj.pageTotal = (message.pageTotal || BigInt(0)).toString());
    message.limit !== undefined && (obj.limit = (message.limit || BigInt(0)).toString());
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? TxResponse.toJSON(e) : undefined);
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<SearchTxsResult>): SearchTxsResult {
    const message = createBaseSearchTxsResult();
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = BigInt(object.totalCount.toString());
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count.toString());
    }
    if (object.pageNumber !== undefined && object.pageNumber !== null) {
      message.pageNumber = BigInt(object.pageNumber.toString());
    }
    if (object.pageTotal !== undefined && object.pageTotal !== null) {
      message.pageTotal = BigInt(object.pageTotal.toString());
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = BigInt(object.limit.toString());
    }
    message.txs = object.txs?.map(e => TxResponse.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: SearchTxsResultSDKType): SearchTxsResult {
    return {
      totalCount: object?.total_count,
      count: object?.count,
      pageNumber: object?.page_number,
      pageTotal: object?.page_total,
      limit: object?.limit,
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => TxResponse.fromSDK(e)) : []
    };
  },
  toSDK(message: SearchTxsResult): SearchTxsResultSDKType {
    const obj: any = {};
    obj.total_count = message.totalCount;
    obj.count = message.count;
    obj.page_number = message.pageNumber;
    obj.page_total = message.pageTotal;
    obj.limit = message.limit;
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? TxResponse.toSDK(e) : undefined);
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromAmino(object: SearchTxsResultAmino): SearchTxsResult {
    return {
      totalCount: BigInt(object.total_count),
      count: BigInt(object.count),
      pageNumber: BigInt(object.page_number),
      pageTotal: BigInt(object.page_total),
      limit: BigInt(object.limit),
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => TxResponse.fromAmino(e)) : []
    };
  },
  toAmino(message: SearchTxsResult, useInterfaces: boolean = true): SearchTxsResultAmino {
    const obj: any = {};
    obj.total_count = message.totalCount ? message.totalCount.toString() : undefined;
    obj.count = message.count ? message.count.toString() : undefined;
    obj.page_number = message.pageNumber ? message.pageNumber.toString() : undefined;
    obj.page_total = message.pageTotal ? message.pageTotal.toString() : undefined;
    obj.limit = message.limit ? message.limit.toString() : undefined;
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? TxResponse.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromProtoMsg(message: SearchTxsResultProtoMsg, useInterfaces: boolean = true): SearchTxsResult {
    return SearchTxsResult.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SearchTxsResult): Uint8Array {
    return SearchTxsResult.encode(message).finish();
  },
  toProtoMsg(message: SearchTxsResult): SearchTxsResultProtoMsg {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult",
      value: SearchTxsResult.encode(message).finish()
    };
  }
};