import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { Event } from "../../../../tendermint/abci/types";
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */
export interface TxResponse {
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
    rawLog: string;
    /** The output of the application's logger (typed). May be non-deterministic. */
    logs: ABCIMessageLog[];
    /** Additional information. May be non-deterministic. */
    info: string;
    /** Amount of gas requested for transaction. */
    gasWanted: string;
    /** Amount of gas consumed by transaction. */
    gasUsed: string;
    /** The request transaction bytes. */
    tx: Any;
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
/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */
export interface StringEvent {
    type: string;
    attributes: Attribute[];
}
/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */
export interface Attribute {
    key: string;
    value: string;
}
/** GasInfo defines tx execution gas context. */
export interface GasInfo {
    /** GasWanted is the maximum units of work we allow this tx to perform. */
    gasWanted: string;
    /** GasUsed is the amount of gas actually consumed. */
    gasUsed: string;
}
/** Result is the union of ResponseFormat and ResponseCheckTx. */
export interface Result {
    /**
     * Data is any data returned from message or handler execution. It MUST be
     * length prefixed in order to separate data from multiple message executions.
     * Deprecated. This field is still populated, but prefer msg_response instead
     * because it also contains the Msg response typeURL.
     *
     * @deprecated
     */
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
/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */
export interface SimulationResponse {
    gasInfo: GasInfo;
    result: Result;
}
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 *
 * @deprecated
 */
export interface MsgData {
    msgType: string;
    data: Uint8Array;
}
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
export interface TxMsgData {
    /**
     * data field is deprecated and not populated.
     *
     * @deprecated
     */
    data: MsgData[];
    /**
     * msg_responses contains the Msg handler responses packed into Anys.
     *
     * Since: cosmos-sdk 0.46
     */
    msgResponses: Any[];
}
/** SearchTxsResult defines a structure for querying txs pageable */
export interface SearchTxsResult {
    /** Count of all txs */
    totalCount: string;
    /** Count of txs in current page */
    count: string;
    /** Index of current page, start from 1 */
    pageNumber: string;
    /** Count of total pages */
    pageTotal: string;
    /** Max count txs per page */
    limit: string;
    /** List of txs in current page */
    txs: TxResponse[];
}
export declare const TxResponse: {
    encode(message: TxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxResponse;
    fromJSON(object: any): TxResponse;
    toJSON(message: TxResponse): unknown;
    fromPartial<I extends {
        height?: string;
        txhash?: string;
        codespace?: string;
        code?: number;
        data?: string;
        rawLog?: string;
        logs?: {
            msgIndex?: number;
            log?: string;
            events?: {
                type?: string;
                attributes?: {
                    key?: string;
                    value?: string;
                }[];
            }[];
        }[];
        info?: string;
        gasWanted?: string;
        gasUsed?: string;
        tx?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        timestamp?: string;
        events?: {
            type?: string;
            attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }[];
        }[];
    } & {
        height?: string;
        txhash?: string;
        codespace?: string;
        code?: number;
        data?: string;
        rawLog?: string;
        logs?: {
            msgIndex?: number;
            log?: string;
            events?: {
                type?: string;
                attributes?: {
                    key?: string;
                    value?: string;
                }[];
            }[];
        }[] & ({
            msgIndex?: number;
            log?: string;
            events?: {
                type?: string;
                attributes?: {
                    key?: string;
                    value?: string;
                }[];
            }[];
        } & {
            msgIndex?: number;
            log?: string;
            events?: {
                type?: string;
                attributes?: {
                    key?: string;
                    value?: string;
                }[];
            }[] & ({
                type?: string;
                attributes?: {
                    key?: string;
                    value?: string;
                }[];
            } & {
                type?: string;
                attributes?: {
                    key?: string;
                    value?: string;
                }[] & ({
                    key?: string;
                    value?: string;
                } & {
                    key?: string;
                    value?: string;
                } & Record<Exclude<keyof I["logs"][number]["events"][number]["attributes"][number], keyof Attribute>, never>)[] & Record<Exclude<keyof I["logs"][number]["events"][number]["attributes"], keyof {
                    key?: string;
                    value?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["logs"][number]["events"][number], keyof StringEvent>, never>)[] & Record<Exclude<keyof I["logs"][number]["events"], keyof {
                type?: string;
                attributes?: {
                    key?: string;
                    value?: string;
                }[];
            }[]>, never>;
        } & Record<Exclude<keyof I["logs"][number], keyof ABCIMessageLog>, never>)[] & Record<Exclude<keyof I["logs"], keyof {
            msgIndex?: number;
            log?: string;
            events?: {
                type?: string;
                attributes?: {
                    key?: string;
                    value?: string;
                }[];
            }[];
        }[]>, never>;
        info?: string;
        gasWanted?: string;
        gasUsed?: string;
        tx?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["tx"], keyof Any>, never>;
        timestamp?: string;
        events?: {
            type?: string;
            attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }[];
        }[] & ({
            type?: string;
            attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }[];
        } & {
            type?: string;
            attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }[] & ({
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            } & Record<Exclude<keyof I["events"][number]["attributes"][number], keyof import("../../../../tendermint/abci/types").EventAttribute>, never>)[] & Record<Exclude<keyof I["events"][number]["attributes"], keyof {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }[]>, never>;
        } & Record<Exclude<keyof I["events"][number], keyof Event>, never>)[] & Record<Exclude<keyof I["events"], keyof {
            type?: string;
            attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof TxResponse>, never>>(object: I): TxResponse;
};
export declare const ABCIMessageLog: {
    encode(message: ABCIMessageLog, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ABCIMessageLog;
    fromJSON(object: any): ABCIMessageLog;
    toJSON(message: ABCIMessageLog): unknown;
    fromPartial<I extends {
        msgIndex?: number;
        log?: string;
        events?: {
            type?: string;
            attributes?: {
                key?: string;
                value?: string;
            }[];
        }[];
    } & {
        msgIndex?: number;
        log?: string;
        events?: {
            type?: string;
            attributes?: {
                key?: string;
                value?: string;
            }[];
        }[] & ({
            type?: string;
            attributes?: {
                key?: string;
                value?: string;
            }[];
        } & {
            type?: string;
            attributes?: {
                key?: string;
                value?: string;
            }[] & ({
                key?: string;
                value?: string;
            } & {
                key?: string;
                value?: string;
            } & Record<Exclude<keyof I["events"][number]["attributes"][number], keyof Attribute>, never>)[] & Record<Exclude<keyof I["events"][number]["attributes"], keyof {
                key?: string;
                value?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["events"][number], keyof StringEvent>, never>)[] & Record<Exclude<keyof I["events"], keyof {
            type?: string;
            attributes?: {
                key?: string;
                value?: string;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof ABCIMessageLog>, never>>(object: I): ABCIMessageLog;
};
export declare const StringEvent: {
    encode(message: StringEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StringEvent;
    fromJSON(object: any): StringEvent;
    toJSON(message: StringEvent): unknown;
    fromPartial<I extends {
        type?: string;
        attributes?: {
            key?: string;
            value?: string;
        }[];
    } & {
        type?: string;
        attributes?: {
            key?: string;
            value?: string;
        }[] & ({
            key?: string;
            value?: string;
        } & {
            key?: string;
            value?: string;
        } & Record<Exclude<keyof I["attributes"][number], keyof Attribute>, never>)[] & Record<Exclude<keyof I["attributes"], keyof {
            key?: string;
            value?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof StringEvent>, never>>(object: I): StringEvent;
};
export declare const Attribute: {
    encode(message: Attribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Attribute;
    fromJSON(object: any): Attribute;
    toJSON(message: Attribute): unknown;
    fromPartial<I extends {
        key?: string;
        value?: string;
    } & {
        key?: string;
        value?: string;
    } & Record<Exclude<keyof I, keyof Attribute>, never>>(object: I): Attribute;
};
export declare const GasInfo: {
    encode(message: GasInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GasInfo;
    fromJSON(object: any): GasInfo;
    toJSON(message: GasInfo): unknown;
    fromPartial<I extends {
        gasWanted?: string;
        gasUsed?: string;
    } & {
        gasWanted?: string;
        gasUsed?: string;
    } & Record<Exclude<keyof I, keyof GasInfo>, never>>(object: I): GasInfo;
};
export declare const Result: {
    encode(message: Result, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Result;
    fromJSON(object: any): Result;
    toJSON(message: Result): unknown;
    fromPartial<I extends {
        data?: Uint8Array;
        log?: string;
        events?: {
            type?: string;
            attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }[];
        }[];
        msgResponses?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[];
    } & {
        data?: Uint8Array;
        log?: string;
        events?: {
            type?: string;
            attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }[];
        }[] & ({
            type?: string;
            attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }[];
        } & {
            type?: string;
            attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }[] & ({
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            } & Record<Exclude<keyof I["events"][number]["attributes"][number], keyof import("../../../../tendermint/abci/types").EventAttribute>, never>)[] & Record<Exclude<keyof I["events"][number]["attributes"], keyof {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }[]>, never>;
        } & Record<Exclude<keyof I["events"][number], keyof Event>, never>)[] & Record<Exclude<keyof I["events"], keyof {
            type?: string;
            attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }[];
        }[]>, never>;
        msgResponses?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[] & ({
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["msgResponses"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["msgResponses"], keyof {
            typeUrl?: string;
            value?: Uint8Array;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof Result>, never>>(object: I): Result;
};
export declare const SimulationResponse: {
    encode(message: SimulationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimulationResponse;
    fromJSON(object: any): SimulationResponse;
    toJSON(message: SimulationResponse): unknown;
    fromPartial<I extends {
        gasInfo?: {
            gasWanted?: string;
            gasUsed?: string;
        };
        result?: {
            data?: Uint8Array;
            log?: string;
            events?: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[];
            msgResponses?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        };
    } & {
        gasInfo?: {
            gasWanted?: string;
            gasUsed?: string;
        } & {
            gasWanted?: string;
            gasUsed?: string;
        } & Record<Exclude<keyof I["gasInfo"], keyof GasInfo>, never>;
        result?: {
            data?: Uint8Array;
            log?: string;
            events?: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[];
            msgResponses?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        } & {
            data?: Uint8Array;
            log?: string;
            events?: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[] & ({
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            } & {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[] & ({
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                } & Record<Exclude<keyof I["result"]["events"][number]["attributes"][number], keyof import("../../../../tendermint/abci/types").EventAttribute>, never>)[] & Record<Exclude<keyof I["result"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[]>, never>;
            } & Record<Exclude<keyof I["result"]["events"][number], keyof Event>, never>)[] & Record<Exclude<keyof I["result"]["events"], keyof {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[]>, never>;
            msgResponses?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[] & ({
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["result"]["msgResponses"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["result"]["msgResponses"], keyof {
                typeUrl?: string;
                value?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["result"], keyof Result>, never>;
    } & Record<Exclude<keyof I, keyof SimulationResponse>, never>>(object: I): SimulationResponse;
};
export declare const MsgData: {
    encode(message: MsgData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgData;
    fromJSON(object: any): MsgData;
    toJSON(message: MsgData): unknown;
    fromPartial<I extends {
        msgType?: string;
        data?: Uint8Array;
    } & {
        msgType?: string;
        data?: Uint8Array;
    } & Record<Exclude<keyof I, keyof MsgData>, never>>(object: I): MsgData;
};
export declare const TxMsgData: {
    encode(message: TxMsgData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxMsgData;
    fromJSON(object: any): TxMsgData;
    toJSON(message: TxMsgData): unknown;
    fromPartial<I extends {
        data?: {
            msgType?: string;
            data?: Uint8Array;
        }[];
        msgResponses?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[];
    } & {
        data?: {
            msgType?: string;
            data?: Uint8Array;
        }[] & ({
            msgType?: string;
            data?: Uint8Array;
        } & {
            msgType?: string;
            data?: Uint8Array;
        } & Record<Exclude<keyof I["data"][number], keyof MsgData>, never>)[] & Record<Exclude<keyof I["data"], keyof {
            msgType?: string;
            data?: Uint8Array;
        }[]>, never>;
        msgResponses?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[] & ({
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["msgResponses"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["msgResponses"], keyof {
            typeUrl?: string;
            value?: Uint8Array;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof TxMsgData>, never>>(object: I): TxMsgData;
};
export declare const SearchTxsResult: {
    encode(message: SearchTxsResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SearchTxsResult;
    fromJSON(object: any): SearchTxsResult;
    toJSON(message: SearchTxsResult): unknown;
    fromPartial<I extends {
        totalCount?: string;
        count?: string;
        pageNumber?: string;
        pageTotal?: string;
        limit?: string;
        txs?: {
            height?: string;
            txhash?: string;
            codespace?: string;
            code?: number;
            data?: string;
            rawLog?: string;
            logs?: {
                msgIndex?: number;
                log?: string;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }[];
            }[];
            info?: string;
            gasWanted?: string;
            gasUsed?: string;
            tx?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            timestamp?: string;
            events?: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[];
        }[];
    } & {
        totalCount?: string;
        count?: string;
        pageNumber?: string;
        pageTotal?: string;
        limit?: string;
        txs?: {
            height?: string;
            txhash?: string;
            codespace?: string;
            code?: number;
            data?: string;
            rawLog?: string;
            logs?: {
                msgIndex?: number;
                log?: string;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }[];
            }[];
            info?: string;
            gasWanted?: string;
            gasUsed?: string;
            tx?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            timestamp?: string;
            events?: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[];
        }[] & ({
            height?: string;
            txhash?: string;
            codespace?: string;
            code?: number;
            data?: string;
            rawLog?: string;
            logs?: {
                msgIndex?: number;
                log?: string;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }[];
            }[];
            info?: string;
            gasWanted?: string;
            gasUsed?: string;
            tx?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            timestamp?: string;
            events?: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[];
        } & {
            height?: string;
            txhash?: string;
            codespace?: string;
            code?: number;
            data?: string;
            rawLog?: string;
            logs?: {
                msgIndex?: number;
                log?: string;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }[];
            }[] & ({
                msgIndex?: number;
                log?: string;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }[];
            } & {
                msgIndex?: number;
                log?: string;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }[] & ({
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                } & {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[] & ({
                        key?: string;
                        value?: string;
                    } & {
                        key?: string;
                        value?: string;
                    } & Record<Exclude<keyof I["txs"][number]["logs"][number]["events"][number]["attributes"][number], keyof Attribute>, never>)[] & Record<Exclude<keyof I["txs"][number]["logs"][number]["events"][number]["attributes"], keyof {
                        key?: string;
                        value?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I["txs"][number]["logs"][number]["events"][number], keyof StringEvent>, never>)[] & Record<Exclude<keyof I["txs"][number]["logs"][number]["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I["txs"][number]["logs"][number], keyof ABCIMessageLog>, never>)[] & Record<Exclude<keyof I["txs"][number]["logs"], keyof {
                msgIndex?: number;
                log?: string;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }[];
            }[]>, never>;
            info?: string;
            gasWanted?: string;
            gasUsed?: string;
            tx?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["txs"][number]["tx"], keyof Any>, never>;
            timestamp?: string;
            events?: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[] & ({
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            } & {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[] & ({
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                } & Record<Exclude<keyof I["txs"][number]["events"][number]["attributes"][number], keyof import("../../../../tendermint/abci/types").EventAttribute>, never>)[] & Record<Exclude<keyof I["txs"][number]["events"][number]["attributes"], keyof {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[]>, never>;
            } & Record<Exclude<keyof I["txs"][number]["events"][number], keyof Event>, never>)[] & Record<Exclude<keyof I["txs"][number]["events"], keyof {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[]>, never>;
        } & Record<Exclude<keyof I["txs"][number], keyof TxResponse>, never>)[] & Record<Exclude<keyof I["txs"], keyof {
            height?: string;
            txhash?: string;
            codespace?: string;
            code?: number;
            data?: string;
            rawLog?: string;
            logs?: {
                msgIndex?: number;
                log?: string;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }[];
            }[];
            info?: string;
            gasWanted?: string;
            gasUsed?: string;
            tx?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            timestamp?: string;
            events?: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof SearchTxsResult>, never>>(object: I): SearchTxsResult;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
