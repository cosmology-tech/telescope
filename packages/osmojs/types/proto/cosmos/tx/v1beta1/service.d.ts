import { Tx } from "./tx";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { TxResponse, GasInfo, Result } from "../../base/abci/v1beta1/abci";
import { BlockID } from "../../../tendermint/types/types";
import { Block } from "../../../tendermint/types/block";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** OrderBy defines the sorting order */
export declare enum OrderBy {
    /** ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case. */
    ORDER_BY_UNSPECIFIED = 0,
    /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
    ORDER_BY_ASC = 1,
    /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
    ORDER_BY_DESC = 2,
    UNRECOGNIZED = -1
}
export declare function orderByFromJSON(object: any): OrderBy;
export declare function orderByToJSON(object: OrderBy): string;
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
export declare enum BroadcastMode {
    /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
    BROADCAST_MODE_UNSPECIFIED = 0,
    /**
     * BROADCAST_MODE_BLOCK - BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
     * the tx to be committed in a block.
     */
    BROADCAST_MODE_BLOCK = 1,
    /**
     * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
     * a CheckTx execution response only.
     */
    BROADCAST_MODE_SYNC = 2,
    /**
     * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
     * immediately.
     */
    BROADCAST_MODE_ASYNC = 3,
    UNRECOGNIZED = -1
}
export declare function broadcastModeFromJSON(object: any): BroadcastMode;
export declare function broadcastModeToJSON(object: BroadcastMode): string;
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventRequest {
    /** events is the list of transaction event type. */
    events: string[];
    /** pagination defines a pagination for the request. */
    pagination: PageRequest;
    orderBy: OrderBy;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventResponse {
    /** txs is the list of queried transactions. */
    txs: Tx[];
    /** tx_responses is the list of queried TxResponses. */
    txResponses: TxResponse[];
    /** pagination defines a pagination for the response. */
    pagination: PageResponse;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */
export interface BroadcastTxRequest {
    /** tx_bytes is the raw transaction. */
    txBytes: Uint8Array;
    mode: BroadcastMode;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface BroadcastTxResponse {
    /** tx_response is the queried TxResponses. */
    txResponse: TxResponse;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */
export interface SimulateRequest {
    /**
     * tx is the transaction to simulate.
     * Deprecated. Send raw tx bytes instead.
     */
    /** @deprecated */
    tx: Tx;
    /**
     * tx_bytes is the raw transaction.
     *
     * Since: cosmos-sdk 0.43
     */
    txBytes: Uint8Array;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponse {
    /** gas_info is the information about gas used in the simulation. */
    gasInfo: GasInfo;
    /** result is the result of the simulation. */
    result: Result;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */
export interface GetTxRequest {
    /** hash is the tx hash to query, encoded as a hex string. */
    hash: string;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponse {
    /** tx is the queried transaction. */
    tx: Tx;
    /** tx_response is the queried TxResponses. */
    txResponse: TxResponse;
}
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsRequest {
    /** height is the height of the block to query. */
    height: Long;
    /** pagination defines a pagination for the request. */
    pagination: PageRequest;
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsResponse {
    /** txs are the transactions in the block. */
    txs: Tx[];
    blockId: BlockID;
    block: Block;
    /** pagination defines a pagination for the response. */
    pagination: PageResponse;
}
export declare const GetTxsEventRequest: {
    encode(message: GetTxsEventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxsEventRequest;
    fromJSON(object: any): GetTxsEventRequest;
    toJSON(message: GetTxsEventRequest): unknown;
    fromPartial<I extends {
        events?: string[];
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
        orderBy?: OrderBy;
    } & {
        events?: string[] & string[] & Record<Exclude<keyof I["events"], keyof string[]>, never>;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
        orderBy?: OrderBy;
    } & Record<Exclude<keyof I, keyof GetTxsEventRequest>, never>>(object: I): GetTxsEventRequest;
};
export declare const GetTxsEventResponse: {
    encode(message: GetTxsEventResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxsEventResponse;
    fromJSON(object: any): GetTxsEventResponse;
    toJSON(message: GetTxsEventResponse): unknown;
    fromPartial<I extends {
        txs?: {
            body?: {
                messages?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                memo?: string;
                timeoutHeight?: any;
                extensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                nonCriticalExtensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[];
                fee?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                };
                tip?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                };
            };
            signatures?: Uint8Array[];
        }[];
        txResponses?: {
            height?: any;
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
            gasWanted?: any;
            gasUsed?: any;
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
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        txs?: {
            body?: {
                messages?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                memo?: string;
                timeoutHeight?: any;
                extensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                nonCriticalExtensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[];
                fee?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                };
                tip?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                };
            };
            signatures?: Uint8Array[];
        }[] & ({
            body?: {
                messages?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                memo?: string;
                timeoutHeight?: any;
                extensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                nonCriticalExtensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[];
                fee?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                };
                tip?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                };
            };
            signatures?: Uint8Array[];
        } & {
            body?: {
                messages?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                memo?: string;
                timeoutHeight?: any;
                extensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                nonCriticalExtensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            } & {
                messages?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[] & ({
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["txs"][number]["body"]["messages"][number], keyof import("../../../google/protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["txs"][number]["body"]["messages"], keyof {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[]>, never>;
                memo?: string;
                timeoutHeight?: any;
                extensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[] & ({
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["txs"][number]["body"]["extensionOptions"][number], keyof import("../../../google/protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["txs"][number]["body"]["extensionOptions"], keyof {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[]>, never>;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[] & ({
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["txs"][number]["body"]["nonCriticalExtensionOptions"][number], keyof import("../../../google/protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["txs"][number]["body"]["nonCriticalExtensionOptions"], keyof {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I["txs"][number]["body"], keyof import("./tx").TxBody>, never>;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[];
                fee?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                };
                tip?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                };
            } & {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[] & ({
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                } & {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["publicKey"], keyof import("../../../google/protobuf/any").Any>, never>;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    } & {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        } & {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["single"], "mode">, never>;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        } & {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            } & {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>, never>;
                            modeInfos?: any[] & ({
                                single?: {
                                    mode?: import("../signing/v1beta1/signing").SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                };
                            } & {
                                single?: {
                                    mode?: import("../signing/v1beta1/signing").SignMode;
                                } & {
                                    mode?: import("../signing/v1beta1/signing").SignMode;
                                } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["single"], "mode">, never>;
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                } & {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    } & {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>, never>;
                                    modeInfos?: any[] & ({
                                        single?: {
                                            mode?: import("../signing/v1beta1/signing").SignMode;
                                        };
                                        multi?: {
                                            bitarray?: {
                                                extraBitsStored?: number;
                                                elems?: Uint8Array;
                                            };
                                            modeInfos?: any[];
                                        };
                                    } & {
                                        single?: {
                                            mode?: import("../signing/v1beta1/signing").SignMode;
                                        } & {
                                            mode?: import("../signing/v1beta1/signing").SignMode;
                                        } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
                                        multi?: {
                                            bitarray?: {
                                                extraBitsStored?: number;
                                                elems?: Uint8Array;
                                            };
                                            modeInfos?: any[];
                                        } & {
                                            bitarray?: {
                                                extraBitsStored?: number;
                                                elems?: Uint8Array;
                                            } & {
                                                extraBitsStored?: number;
                                                elems?: Uint8Array;
                                            } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>, never>;
                                            modeInfos?: any[] & ({
                                                single?: {
                                                    mode?: import("../signing/v1beta1/signing").SignMode;
                                                };
                                                multi?: {
                                                    bitarray?: {
                                                        extraBitsStored?: number;
                                                        elems?: Uint8Array;
                                                    };
                                                    modeInfos?: any[];
                                                };
                                            } & {
                                                single?: {
                                                    mode?: import("../signing/v1beta1/signing").SignMode;
                                                } & any & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
                                                multi?: {
                                                    bitarray?: {
                                                        extraBitsStored?: number;
                                                        elems?: Uint8Array;
                                                    };
                                                    modeInfos?: any[];
                                                } & any & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>, never>;
                                            } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>, never>)[] & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                                        } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>, never>;
                                    } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>, never>)[] & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                                } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>, never>;
                            } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>, never>)[] & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"], keyof any[]>, never>;
                        } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"], keyof import("./tx").ModeInfo_Multi>, never>;
                    } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"], keyof import("./tx").ModeInfo>, never>;
                    sequence?: any;
                } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number], keyof import("./tx").SignerInfo>, never>)[] & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"], keyof {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[]>, never>;
                fee?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                } & {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I["txs"][number]["authInfo"]["fee"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["txs"][number]["authInfo"]["fee"]["amount"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                } & Record<Exclude<keyof I["txs"][number]["authInfo"]["fee"], keyof import("./tx").Fee>, never>;
                tip?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                } & {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I["txs"][number]["authInfo"]["tip"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["txs"][number]["authInfo"]["tip"]["amount"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    tipper?: string;
                } & Record<Exclude<keyof I["txs"][number]["authInfo"]["tip"], keyof import("./tx").Tip>, never>;
            } & Record<Exclude<keyof I["txs"][number]["authInfo"], keyof import("./tx").AuthInfo>, never>;
            signatures?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["txs"][number]["signatures"], keyof Uint8Array[]>, never>;
        } & Record<Exclude<keyof I["txs"][number], keyof Tx>, never>)[] & Record<Exclude<keyof I["txs"], keyof {
            body?: {
                messages?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                memo?: string;
                timeoutHeight?: any;
                extensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                nonCriticalExtensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[];
                fee?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                };
                tip?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                };
            };
            signatures?: Uint8Array[];
        }[]>, never>;
        txResponses?: {
            height?: any;
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
            gasWanted?: any;
            gasUsed?: any;
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
            height?: any;
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
            gasWanted?: any;
            gasUsed?: any;
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
            height?: any;
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
                    } & Record<Exclude<keyof I["txResponses"][number]["logs"][number]["events"][number]["attributes"][number], keyof import("../../base/abci/v1beta1/abci").Attribute>, never>)[] & Record<Exclude<keyof I["txResponses"][number]["logs"][number]["events"][number]["attributes"], keyof {
                        key?: string;
                        value?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I["txResponses"][number]["logs"][number]["events"][number], keyof import("../../base/abci/v1beta1/abci").StringEvent>, never>)[] & Record<Exclude<keyof I["txResponses"][number]["logs"][number]["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I["txResponses"][number]["logs"][number], keyof import("../../base/abci/v1beta1/abci").ABCIMessageLog>, never>)[] & Record<Exclude<keyof I["txResponses"][number]["logs"], keyof {
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
            gasWanted?: any;
            gasUsed?: any;
            tx?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["txResponses"][number]["tx"], keyof import("../../../google/protobuf/any").Any>, never>;
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
                } & Record<Exclude<keyof I["txResponses"][number]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>, never>)[] & Record<Exclude<keyof I["txResponses"][number]["events"][number]["attributes"], keyof {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[]>, never>;
            } & Record<Exclude<keyof I["txResponses"][number]["events"][number], keyof import("../../../tendermint/abci/types").Event>, never>)[] & Record<Exclude<keyof I["txResponses"][number]["events"], keyof {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[]>, never>;
        } & Record<Exclude<keyof I["txResponses"][number], keyof TxResponse>, never>)[] & Record<Exclude<keyof I["txResponses"], keyof {
            height?: any;
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
            gasWanted?: any;
            gasUsed?: any;
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
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof GetTxsEventResponse>, never>>(object: I): GetTxsEventResponse;
};
export declare const BroadcastTxRequest: {
    encode(message: BroadcastTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastTxRequest;
    fromJSON(object: any): BroadcastTxRequest;
    toJSON(message: BroadcastTxRequest): unknown;
    fromPartial<I extends {
        txBytes?: Uint8Array;
        mode?: BroadcastMode;
    } & {
        txBytes?: Uint8Array;
        mode?: BroadcastMode;
    } & Record<Exclude<keyof I, keyof BroadcastTxRequest>, never>>(object: I): BroadcastTxRequest;
};
export declare const BroadcastTxResponse: {
    encode(message: BroadcastTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastTxResponse;
    fromJSON(object: any): BroadcastTxResponse;
    toJSON(message: BroadcastTxResponse): unknown;
    fromPartial<I extends {
        txResponse?: {
            height?: any;
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
            gasWanted?: any;
            gasUsed?: any;
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
        };
    } & {
        txResponse?: {
            height?: any;
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
            gasWanted?: any;
            gasUsed?: any;
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
            height?: any;
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
                    } & Record<Exclude<keyof I["txResponse"]["logs"][number]["events"][number]["attributes"][number], keyof import("../../base/abci/v1beta1/abci").Attribute>, never>)[] & Record<Exclude<keyof I["txResponse"]["logs"][number]["events"][number]["attributes"], keyof {
                        key?: string;
                        value?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I["txResponse"]["logs"][number]["events"][number], keyof import("../../base/abci/v1beta1/abci").StringEvent>, never>)[] & Record<Exclude<keyof I["txResponse"]["logs"][number]["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I["txResponse"]["logs"][number], keyof import("../../base/abci/v1beta1/abci").ABCIMessageLog>, never>)[] & Record<Exclude<keyof I["txResponse"]["logs"], keyof {
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
            gasWanted?: any;
            gasUsed?: any;
            tx?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["txResponse"]["tx"], keyof import("../../../google/protobuf/any").Any>, never>;
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
                } & Record<Exclude<keyof I["txResponse"]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>, never>)[] & Record<Exclude<keyof I["txResponse"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[]>, never>;
            } & Record<Exclude<keyof I["txResponse"]["events"][number], keyof import("../../../tendermint/abci/types").Event>, never>)[] & Record<Exclude<keyof I["txResponse"]["events"], keyof {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[]>, never>;
        } & Record<Exclude<keyof I["txResponse"], keyof TxResponse>, never>;
    } & Record<Exclude<keyof I, "txResponse">, never>>(object: I): BroadcastTxResponse;
};
export declare const SimulateRequest: {
    encode(message: SimulateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimulateRequest;
    fromJSON(object: any): SimulateRequest;
    toJSON(message: SimulateRequest): unknown;
    fromPartial<I extends {
        tx?: {
            body?: {
                messages?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                memo?: string;
                timeoutHeight?: any;
                extensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                nonCriticalExtensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[];
                fee?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                };
                tip?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                };
            };
            signatures?: Uint8Array[];
        };
        txBytes?: Uint8Array;
    } & {
        tx?: {
            body?: {
                messages?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                memo?: string;
                timeoutHeight?: any;
                extensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                nonCriticalExtensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[];
                fee?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                };
                tip?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                };
            };
            signatures?: Uint8Array[];
        } & {
            body?: {
                messages?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                memo?: string;
                timeoutHeight?: any;
                extensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                nonCriticalExtensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            } & {
                messages?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[] & ({
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["tx"]["body"]["messages"][number], keyof import("../../../google/protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["tx"]["body"]["messages"], keyof {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[]>, never>;
                memo?: string;
                timeoutHeight?: any;
                extensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[] & ({
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["tx"]["body"]["extensionOptions"][number], keyof import("../../../google/protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["tx"]["body"]["extensionOptions"], keyof {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[]>, never>;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[] & ({
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["tx"]["body"]["nonCriticalExtensionOptions"][number], keyof import("../../../google/protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["tx"]["body"]["nonCriticalExtensionOptions"], keyof {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I["tx"]["body"], keyof import("./tx").TxBody>, never>;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[];
                fee?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                };
                tip?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                };
            } & {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[] & ({
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                } & {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["publicKey"], keyof import("../../../google/protobuf/any").Any>, never>;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    } & {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        } & {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["single"], "mode">, never>;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        } & {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            } & {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>, never>;
                            modeInfos?: any[] & ({
                                single?: {
                                    mode?: import("../signing/v1beta1/signing").SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                };
                            } & {
                                single?: {
                                    mode?: import("../signing/v1beta1/signing").SignMode;
                                } & {
                                    mode?: import("../signing/v1beta1/signing").SignMode;
                                } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["single"], "mode">, never>;
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                } & {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    } & {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>, never>;
                                    modeInfos?: any[] & ({
                                        single?: {
                                            mode?: import("../signing/v1beta1/signing").SignMode;
                                        };
                                        multi?: {
                                            bitarray?: {
                                                extraBitsStored?: number;
                                                elems?: Uint8Array;
                                            };
                                            modeInfos?: any[];
                                        };
                                    } & {
                                        single?: {
                                            mode?: import("../signing/v1beta1/signing").SignMode;
                                        } & {
                                            mode?: import("../signing/v1beta1/signing").SignMode;
                                        } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
                                        multi?: {
                                            bitarray?: {
                                                extraBitsStored?: number;
                                                elems?: Uint8Array;
                                            };
                                            modeInfos?: any[];
                                        } & {
                                            bitarray?: {
                                                extraBitsStored?: number;
                                                elems?: Uint8Array;
                                            } & {
                                                extraBitsStored?: number;
                                                elems?: Uint8Array;
                                            } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>, never>;
                                            modeInfos?: any[] & ({
                                                single?: {
                                                    mode?: import("../signing/v1beta1/signing").SignMode;
                                                };
                                                multi?: {
                                                    bitarray?: {
                                                        extraBitsStored?: number;
                                                        elems?: Uint8Array;
                                                    };
                                                    modeInfos?: any[];
                                                };
                                            } & {
                                                single?: {
                                                    mode?: import("../signing/v1beta1/signing").SignMode;
                                                } & any & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
                                                multi?: {
                                                    bitarray?: {
                                                        extraBitsStored?: number;
                                                        elems?: Uint8Array;
                                                    };
                                                    modeInfos?: any[];
                                                } & any & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>, never>;
                                            } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>, never>)[] & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                                        } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>, never>;
                                    } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>, never>)[] & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                                } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>, never>;
                            } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>, never>)[] & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"], keyof any[]>, never>;
                        } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"], keyof import("./tx").ModeInfo_Multi>, never>;
                    } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"], keyof import("./tx").ModeInfo>, never>;
                    sequence?: any;
                } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number], keyof import("./tx").SignerInfo>, never>)[] & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"], keyof {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[]>, never>;
                fee?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                } & {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I["tx"]["authInfo"]["fee"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["tx"]["authInfo"]["fee"]["amount"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                } & Record<Exclude<keyof I["tx"]["authInfo"]["fee"], keyof import("./tx").Fee>, never>;
                tip?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                } & {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I["tx"]["authInfo"]["tip"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["tx"]["authInfo"]["tip"]["amount"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    tipper?: string;
                } & Record<Exclude<keyof I["tx"]["authInfo"]["tip"], keyof import("./tx").Tip>, never>;
            } & Record<Exclude<keyof I["tx"]["authInfo"], keyof import("./tx").AuthInfo>, never>;
            signatures?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["tx"]["signatures"], keyof Uint8Array[]>, never>;
        } & Record<Exclude<keyof I["tx"], keyof Tx>, never>;
        txBytes?: Uint8Array;
    } & Record<Exclude<keyof I, keyof SimulateRequest>, never>>(object: I): SimulateRequest;
};
export declare const SimulateResponse: {
    encode(message: SimulateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimulateResponse;
    fromJSON(object: any): SimulateResponse;
    toJSON(message: SimulateResponse): unknown;
    fromPartial<I extends {
        gasInfo?: {
            gasWanted?: any;
            gasUsed?: any;
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
            gasWanted?: any;
            gasUsed?: any;
        } & {
            gasWanted?: any;
            gasUsed?: any;
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
                } & Record<Exclude<keyof I["result"]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>, never>)[] & Record<Exclude<keyof I["result"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[]>, never>;
            } & Record<Exclude<keyof I["result"]["events"][number], keyof import("../../../tendermint/abci/types").Event>, never>)[] & Record<Exclude<keyof I["result"]["events"], keyof {
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
            } & Record<Exclude<keyof I["result"]["msgResponses"][number], keyof import("../../../google/protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["result"]["msgResponses"], keyof {
                typeUrl?: string;
                value?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["result"], keyof Result>, never>;
    } & Record<Exclude<keyof I, keyof SimulateResponse>, never>>(object: I): SimulateResponse;
};
export declare const GetTxRequest: {
    encode(message: GetTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxRequest;
    fromJSON(object: any): GetTxRequest;
    toJSON(message: GetTxRequest): unknown;
    fromPartial<I extends {
        hash?: string;
    } & {
        hash?: string;
    } & Record<Exclude<keyof I, "hash">, never>>(object: I): GetTxRequest;
};
export declare const GetTxResponse: {
    encode(message: GetTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxResponse;
    fromJSON(object: any): GetTxResponse;
    toJSON(message: GetTxResponse): unknown;
    fromPartial<I extends {
        tx?: {
            body?: {
                messages?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                memo?: string;
                timeoutHeight?: any;
                extensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                nonCriticalExtensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[];
                fee?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                };
                tip?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                };
            };
            signatures?: Uint8Array[];
        };
        txResponse?: {
            height?: any;
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
            gasWanted?: any;
            gasUsed?: any;
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
        };
    } & {
        tx?: {
            body?: {
                messages?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                memo?: string;
                timeoutHeight?: any;
                extensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                nonCriticalExtensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[];
                fee?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                };
                tip?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                };
            };
            signatures?: Uint8Array[];
        } & {
            body?: {
                messages?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                memo?: string;
                timeoutHeight?: any;
                extensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                nonCriticalExtensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            } & {
                messages?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[] & ({
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["tx"]["body"]["messages"][number], keyof import("../../../google/protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["tx"]["body"]["messages"], keyof {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[]>, never>;
                memo?: string;
                timeoutHeight?: any;
                extensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[] & ({
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["tx"]["body"]["extensionOptions"][number], keyof import("../../../google/protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["tx"]["body"]["extensionOptions"], keyof {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[]>, never>;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[] & ({
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["tx"]["body"]["nonCriticalExtensionOptions"][number], keyof import("../../../google/protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["tx"]["body"]["nonCriticalExtensionOptions"], keyof {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I["tx"]["body"], keyof import("./tx").TxBody>, never>;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[];
                fee?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                };
                tip?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                };
            } & {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[] & ({
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                } & {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["publicKey"], keyof import("../../../google/protobuf/any").Any>, never>;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    } & {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        } & {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["single"], "mode">, never>;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        } & {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            } & {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>, never>;
                            modeInfos?: any[] & ({
                                single?: {
                                    mode?: import("../signing/v1beta1/signing").SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                };
                            } & {
                                single?: {
                                    mode?: import("../signing/v1beta1/signing").SignMode;
                                } & {
                                    mode?: import("../signing/v1beta1/signing").SignMode;
                                } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["single"], "mode">, never>;
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                } & {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    } & {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>, never>;
                                    modeInfos?: any[] & ({
                                        single?: {
                                            mode?: import("../signing/v1beta1/signing").SignMode;
                                        };
                                        multi?: {
                                            bitarray?: {
                                                extraBitsStored?: number;
                                                elems?: Uint8Array;
                                            };
                                            modeInfos?: any[];
                                        };
                                    } & {
                                        single?: {
                                            mode?: import("../signing/v1beta1/signing").SignMode;
                                        } & {
                                            mode?: import("../signing/v1beta1/signing").SignMode;
                                        } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
                                        multi?: {
                                            bitarray?: {
                                                extraBitsStored?: number;
                                                elems?: Uint8Array;
                                            };
                                            modeInfos?: any[];
                                        } & {
                                            bitarray?: {
                                                extraBitsStored?: number;
                                                elems?: Uint8Array;
                                            } & {
                                                extraBitsStored?: number;
                                                elems?: Uint8Array;
                                            } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>, never>;
                                            modeInfos?: any[] & ({
                                                single?: {
                                                    mode?: import("../signing/v1beta1/signing").SignMode;
                                                };
                                                multi?: {
                                                    bitarray?: {
                                                        extraBitsStored?: number;
                                                        elems?: Uint8Array;
                                                    };
                                                    modeInfos?: any[];
                                                };
                                            } & {
                                                single?: {
                                                    mode?: import("../signing/v1beta1/signing").SignMode;
                                                } & any & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
                                                multi?: {
                                                    bitarray?: {
                                                        extraBitsStored?: number;
                                                        elems?: Uint8Array;
                                                    };
                                                    modeInfos?: any[];
                                                } & any & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>, never>;
                                            } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>, never>)[] & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                                        } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>, never>;
                                    } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>, never>)[] & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                                } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>, never>;
                            } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>, never>)[] & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"], keyof any[]>, never>;
                        } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"], keyof import("./tx").ModeInfo_Multi>, never>;
                    } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"], keyof import("./tx").ModeInfo>, never>;
                    sequence?: any;
                } & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number], keyof import("./tx").SignerInfo>, never>)[] & Record<Exclude<keyof I["tx"]["authInfo"]["signerInfos"], keyof {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[]>, never>;
                fee?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                } & {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I["tx"]["authInfo"]["fee"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["tx"]["authInfo"]["fee"]["amount"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                } & Record<Exclude<keyof I["tx"]["authInfo"]["fee"], keyof import("./tx").Fee>, never>;
                tip?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                } & {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I["tx"]["authInfo"]["tip"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["tx"]["authInfo"]["tip"]["amount"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    tipper?: string;
                } & Record<Exclude<keyof I["tx"]["authInfo"]["tip"], keyof import("./tx").Tip>, never>;
            } & Record<Exclude<keyof I["tx"]["authInfo"], keyof import("./tx").AuthInfo>, never>;
            signatures?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["tx"]["signatures"], keyof Uint8Array[]>, never>;
        } & Record<Exclude<keyof I["tx"], keyof Tx>, never>;
        txResponse?: {
            height?: any;
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
            gasWanted?: any;
            gasUsed?: any;
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
            height?: any;
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
                    } & Record<Exclude<keyof I["txResponse"]["logs"][number]["events"][number]["attributes"][number], keyof import("../../base/abci/v1beta1/abci").Attribute>, never>)[] & Record<Exclude<keyof I["txResponse"]["logs"][number]["events"][number]["attributes"], keyof {
                        key?: string;
                        value?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I["txResponse"]["logs"][number]["events"][number], keyof import("../../base/abci/v1beta1/abci").StringEvent>, never>)[] & Record<Exclude<keyof I["txResponse"]["logs"][number]["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I["txResponse"]["logs"][number], keyof import("../../base/abci/v1beta1/abci").ABCIMessageLog>, never>)[] & Record<Exclude<keyof I["txResponse"]["logs"], keyof {
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
            gasWanted?: any;
            gasUsed?: any;
            tx?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["txResponse"]["tx"], keyof import("../../../google/protobuf/any").Any>, never>;
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
                } & Record<Exclude<keyof I["txResponse"]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>, never>)[] & Record<Exclude<keyof I["txResponse"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[]>, never>;
            } & Record<Exclude<keyof I["txResponse"]["events"][number], keyof import("../../../tendermint/abci/types").Event>, never>)[] & Record<Exclude<keyof I["txResponse"]["events"], keyof {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[]>, never>;
        } & Record<Exclude<keyof I["txResponse"], keyof TxResponse>, never>;
    } & Record<Exclude<keyof I, keyof GetTxResponse>, never>>(object: I): GetTxResponse;
};
export declare const GetBlockWithTxsRequest: {
    encode(message: GetBlockWithTxsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockWithTxsRequest;
    fromJSON(object: any): GetBlockWithTxsRequest;
    toJSON(message: GetBlockWithTxsRequest): unknown;
    fromPartial<I extends {
        height?: any;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        height?: any;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof GetBlockWithTxsRequest>, never>>(object: I): GetBlockWithTxsRequest;
};
export declare const GetBlockWithTxsResponse: {
    encode(message: GetBlockWithTxsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockWithTxsResponse;
    fromJSON(object: any): GetBlockWithTxsResponse;
    toJSON(message: GetBlockWithTxsResponse): unknown;
    fromPartial<I extends {
        txs?: {
            body?: {
                messages?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                memo?: string;
                timeoutHeight?: any;
                extensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                nonCriticalExtensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[];
                fee?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                };
                tip?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                };
            };
            signatures?: Uint8Array[];
        }[];
        blockId?: {
            hash?: Uint8Array;
            partSetHeader?: {
                total?: number;
                hash?: Uint8Array;
            };
        };
        block?: {
            header?: {
                version?: {
                    block?: any;
                    app?: any;
                };
                chainId?: string;
                height?: any;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            };
            data?: {
                txs?: Uint8Array[];
            };
            evidence?: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        totalVotingPower?: any;
                        timestamp?: Date;
                    };
                }[];
            };
            lastCommit?: {
                height?: any;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            };
        };
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        txs?: {
            body?: {
                messages?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                memo?: string;
                timeoutHeight?: any;
                extensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                nonCriticalExtensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[];
                fee?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                };
                tip?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                };
            };
            signatures?: Uint8Array[];
        }[] & ({
            body?: {
                messages?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                memo?: string;
                timeoutHeight?: any;
                extensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                nonCriticalExtensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[];
                fee?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                };
                tip?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                };
            };
            signatures?: Uint8Array[];
        } & {
            body?: {
                messages?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                memo?: string;
                timeoutHeight?: any;
                extensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                nonCriticalExtensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            } & {
                messages?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[] & ({
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["txs"][number]["body"]["messages"][number], keyof import("../../../google/protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["txs"][number]["body"]["messages"], keyof {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[]>, never>;
                memo?: string;
                timeoutHeight?: any;
                extensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[] & ({
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["txs"][number]["body"]["extensionOptions"][number], keyof import("../../../google/protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["txs"][number]["body"]["extensionOptions"], keyof {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[]>, never>;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[] & ({
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["txs"][number]["body"]["nonCriticalExtensionOptions"][number], keyof import("../../../google/protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["txs"][number]["body"]["nonCriticalExtensionOptions"], keyof {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I["txs"][number]["body"], keyof import("./tx").TxBody>, never>;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[];
                fee?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                };
                tip?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                };
            } & {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[] & ({
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                } & {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["publicKey"], keyof import("../../../google/protobuf/any").Any>, never>;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    } & {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        } & {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["single"], "mode">, never>;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        } & {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            } & {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>, never>;
                            modeInfos?: any[] & ({
                                single?: {
                                    mode?: import("../signing/v1beta1/signing").SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                };
                            } & {
                                single?: {
                                    mode?: import("../signing/v1beta1/signing").SignMode;
                                } & {
                                    mode?: import("../signing/v1beta1/signing").SignMode;
                                } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["single"], "mode">, never>;
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                } & {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    } & {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>, never>;
                                    modeInfos?: any[] & ({
                                        single?: {
                                            mode?: import("../signing/v1beta1/signing").SignMode;
                                        };
                                        multi?: {
                                            bitarray?: {
                                                extraBitsStored?: number;
                                                elems?: Uint8Array;
                                            };
                                            modeInfos?: any[];
                                        };
                                    } & {
                                        single?: {
                                            mode?: import("../signing/v1beta1/signing").SignMode;
                                        } & {
                                            mode?: import("../signing/v1beta1/signing").SignMode;
                                        } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
                                        multi?: {
                                            bitarray?: {
                                                extraBitsStored?: number;
                                                elems?: Uint8Array;
                                            };
                                            modeInfos?: any[];
                                        } & {
                                            bitarray?: {
                                                extraBitsStored?: number;
                                                elems?: Uint8Array;
                                            } & {
                                                extraBitsStored?: number;
                                                elems?: Uint8Array;
                                            } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>, never>;
                                            modeInfos?: any[] & ({
                                                single?: {
                                                    mode?: import("../signing/v1beta1/signing").SignMode;
                                                };
                                                multi?: {
                                                    bitarray?: {
                                                        extraBitsStored?: number;
                                                        elems?: Uint8Array;
                                                    };
                                                    modeInfos?: any[];
                                                };
                                            } & {
                                                single?: {
                                                    mode?: import("../signing/v1beta1/signing").SignMode;
                                                } & any & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
                                                multi?: {
                                                    bitarray?: {
                                                        extraBitsStored?: number;
                                                        elems?: Uint8Array;
                                                    };
                                                    modeInfos?: any[];
                                                } & any & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>, never>;
                                            } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>, never>)[] & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                                        } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>, never>;
                                    } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>, never>)[] & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                                } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>, never>;
                            } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>, never>)[] & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"], keyof any[]>, never>;
                        } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"], keyof import("./tx").ModeInfo_Multi>, never>;
                    } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"], keyof import("./tx").ModeInfo>, never>;
                    sequence?: any;
                } & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number], keyof import("./tx").SignerInfo>, never>)[] & Record<Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"], keyof {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[]>, never>;
                fee?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                } & {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I["txs"][number]["authInfo"]["fee"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["txs"][number]["authInfo"]["fee"]["amount"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                } & Record<Exclude<keyof I["txs"][number]["authInfo"]["fee"], keyof import("./tx").Fee>, never>;
                tip?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                } & {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I["txs"][number]["authInfo"]["tip"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["txs"][number]["authInfo"]["tip"]["amount"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    tipper?: string;
                } & Record<Exclude<keyof I["txs"][number]["authInfo"]["tip"], keyof import("./tx").Tip>, never>;
            } & Record<Exclude<keyof I["txs"][number]["authInfo"], keyof import("./tx").AuthInfo>, never>;
            signatures?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["txs"][number]["signatures"], keyof Uint8Array[]>, never>;
        } & Record<Exclude<keyof I["txs"][number], keyof Tx>, never>)[] & Record<Exclude<keyof I["txs"], keyof {
            body?: {
                messages?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                memo?: string;
                timeoutHeight?: any;
                extensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                nonCriticalExtensionOptions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }[];
                fee?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                };
                tip?: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                };
            };
            signatures?: Uint8Array[];
        }[]>, never>;
        blockId?: {
            hash?: Uint8Array;
            partSetHeader?: {
                total?: number;
                hash?: Uint8Array;
            };
        } & {
            hash?: Uint8Array;
            partSetHeader?: {
                total?: number;
                hash?: Uint8Array;
            } & {
                total?: number;
                hash?: Uint8Array;
            } & Record<Exclude<keyof I["blockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>, never>;
        } & Record<Exclude<keyof I["blockId"], keyof BlockID>, never>;
        block?: {
            header?: {
                version?: {
                    block?: any;
                    app?: any;
                };
                chainId?: string;
                height?: any;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            };
            data?: {
                txs?: Uint8Array[];
            };
            evidence?: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        totalVotingPower?: any;
                        timestamp?: Date;
                    };
                }[];
            };
            lastCommit?: {
                height?: any;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            };
        } & {
            header?: {
                version?: {
                    block?: any;
                    app?: any;
                };
                chainId?: string;
                height?: any;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            } & {
                version?: {
                    block?: any;
                    app?: any;
                } & {
                    block?: any;
                    app?: any;
                } & Record<Exclude<keyof I["block"]["header"]["version"], keyof import("../../../tendermint/version/types").Consensus>, never>;
                chainId?: string;
                height?: any;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                } & {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    } & {
                        total?: number;
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I["block"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>, never>;
                } & Record<Exclude<keyof I["block"]["header"]["lastBlockId"], keyof BlockID>, never>;
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            } & Record<Exclude<keyof I["block"]["header"], keyof import("../../../tendermint/types/types").Header>, never>;
            data?: {
                txs?: Uint8Array[];
            } & {
                txs?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["block"]["data"]["txs"], keyof Uint8Array[]>, never>;
            } & Record<Exclude<keyof I["block"]["data"], "txs">, never>;
            evidence?: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        totalVotingPower?: any;
                        timestamp?: Date;
                    };
                }[];
            } & {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        totalVotingPower?: any;
                        timestamp?: Date;
                    };
                }[] & ({
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        totalVotingPower?: any;
                        timestamp?: Date;
                    };
                } & {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    } & {
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        } & {
                            type?: import("../../../tendermint/types/types").SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            } & {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>, never>;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], keyof BlockID>, never>;
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"], keyof import("../../../tendermint/types/types").Vote>, never>;
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        } & {
                            type?: import("../../../tendermint/types/types").SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            } & {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>, never>;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], keyof BlockID>, never>;
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"], keyof import("../../../tendermint/types/types").Vote>, never>;
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"], keyof import("../../../tendermint/types/evidence").DuplicateVoteEvidence>, never>;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        totalVotingPower?: any;
                        timestamp?: Date;
                    } & {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        } & {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            } & {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                } & {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    } & {
                                        block?: any;
                                        app?: any;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof import("../../../tendermint/version/types").Consensus>, never>;
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    } & {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof BlockID>, never>;
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof import("../../../tendermint/types/types").Header>, never>;
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                } & {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    } & {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof BlockID>, never>;
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[] & ({
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof import("../../../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[]>, never>;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof import("../../../tendermint/types/types").Commit>, never>;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof import("../../../tendermint/types/types").SignedHeader>, never>;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            } & {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[] & ({
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../../../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof import("../../../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[]>, never>;
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof import("../../../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof import("../../../tendermint/types/validator").Validator>, never>;
                                totalVotingPower?: any;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof import("../../../tendermint/types/validator").ValidatorSet>, never>;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], keyof import("../../../tendermint/types/types").LightBlock>, never>;
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[] & ({
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        } & {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof import("../../../tendermint/crypto/keys").PublicKey>, never>;
                            votingPower?: any;
                            proposerPriority?: any;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], keyof import("../../../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[]>, never>;
                        totalVotingPower?: any;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"], keyof import("../../../tendermint/types/evidence").LightClientAttackEvidence>, never>;
                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number], keyof import("../../../tendermint/types/evidence").Evidence>, never>)[] & Record<Exclude<keyof I["block"]["evidence"]["evidence"], keyof {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        totalVotingPower?: any;
                        timestamp?: Date;
                    };
                }[]>, never>;
            } & Record<Exclude<keyof I["block"]["evidence"], "evidence">, never>;
            lastCommit?: {
                height?: any;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            } & {
                height?: any;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                } & {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    } & {
                        total?: number;
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I["block"]["lastCommit"]["blockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>, never>;
                } & Record<Exclude<keyof I["block"]["lastCommit"]["blockId"], keyof BlockID>, never>;
                signatures?: {
                    blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[] & ({
                    blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                } & {
                    blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                } & Record<Exclude<keyof I["block"]["lastCommit"]["signatures"][number], keyof import("../../../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I["block"]["lastCommit"]["signatures"], keyof {
                    blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I["block"]["lastCommit"], keyof import("../../../tendermint/types/types").Commit>, never>;
        } & Record<Exclude<keyof I["block"], keyof Block>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof GetBlockWithTxsResponse>, never>>(object: I): GetBlockWithTxsResponse;
};
