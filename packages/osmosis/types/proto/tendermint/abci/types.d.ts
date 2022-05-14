import { Header } from "../types/types";
import { ProofOps } from "../crypto/proof";
import { EvidenceParams, ValidatorParams, VersionParams } from "../types/params";
import { PublicKey } from "../crypto/keys";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export declare enum CheckTxType {
    NEW = 0,
    RECHECK = 1,
    UNRECOGNIZED = -1
}
export declare function checkTxTypeFromJSON(object: any): CheckTxType;
export declare function checkTxTypeToJSON(object: CheckTxType): string;
export declare enum ResponseOfferSnapshot_Result {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = 0,
    /** ACCEPT - Snapshot accepted, apply chunks */
    ACCEPT = 1,
    /** ABORT - Abort all snapshot restoration */
    ABORT = 2,
    /** REJECT - Reject this specific snapshot, try others */
    REJECT = 3,
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    REJECT_FORMAT = 4,
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    REJECT_SENDER = 5,
    UNRECOGNIZED = -1
}
export declare function responseOfferSnapshot_ResultFromJSON(object: any): ResponseOfferSnapshot_Result;
export declare function responseOfferSnapshot_ResultToJSON(object: ResponseOfferSnapshot_Result): string;
export declare enum ResponseApplySnapshotChunk_Result {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = 0,
    /** ACCEPT - Chunk successfully accepted */
    ACCEPT = 1,
    /** ABORT - Abort all snapshot restoration */
    ABORT = 2,
    /** RETRY - Retry chunk (combine with refetch and reject) */
    RETRY = 3,
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    RETRY_SNAPSHOT = 4,
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    REJECT_SNAPSHOT = 5,
    UNRECOGNIZED = -1
}
export declare function responseApplySnapshotChunk_ResultFromJSON(object: any): ResponseApplySnapshotChunk_Result;
export declare function responseApplySnapshotChunk_ResultToJSON(object: ResponseApplySnapshotChunk_Result): string;
export declare enum EvidenceType {
    UNKNOWN = 0,
    DUPLICATE_VOTE = 1,
    LIGHT_CLIENT_ATTACK = 2,
    UNRECOGNIZED = -1
}
export declare function evidenceTypeFromJSON(object: any): EvidenceType;
export declare function evidenceTypeToJSON(object: EvidenceType): string;
export interface Request {
    echo?: RequestEcho;
    flush?: RequestFlush;
    info?: RequestInfo;
    setOption?: RequestSetOption;
    initChain?: RequestInitChain;
    query?: RequestQuery;
    beginBlock?: RequestBeginBlock;
    checkTx?: RequestCheckTx;
    deliverTx?: RequestDeliverTx;
    endBlock?: RequestEndBlock;
    commit?: RequestCommit;
    listSnapshots?: RequestListSnapshots;
    offerSnapshot?: RequestOfferSnapshot;
    loadSnapshotChunk?: RequestLoadSnapshotChunk;
    applySnapshotChunk?: RequestApplySnapshotChunk;
}
export interface RequestEcho {
    message: string;
}
export interface RequestFlush {
}
export interface RequestInfo {
    version: string;
    blockVersion: Long;
    p2pVersion: Long;
}
/** nondeterministic */
export interface RequestSetOption {
    key: string;
    value: string;
}
export interface RequestInitChain {
    time: Date;
    chainId: string;
    consensusParams: ConsensusParams;
    validators: ValidatorUpdate[];
    appStateBytes: Uint8Array;
    initialHeight: Long;
}
export interface RequestQuery {
    data: Uint8Array;
    path: string;
    height: Long;
    prove: boolean;
}
export interface RequestBeginBlock {
    hash: Uint8Array;
    header: Header;
    lastCommitInfo: LastCommitInfo;
    byzantineValidators: Evidence[];
}
export interface RequestCheckTx {
    tx: Uint8Array;
    type: CheckTxType;
}
export interface RequestDeliverTx {
    tx: Uint8Array;
}
export interface RequestEndBlock {
    height: Long;
}
export interface RequestCommit {
}
/** lists available snapshots */
export interface RequestListSnapshots {
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshot {
    /** snapshot offered by peers */
    snapshot: Snapshot;
    /** light client-verified app hash for snapshot height */
    appHash: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunk {
    height: Long;
    format: number;
    chunk: number;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunk {
    index: number;
    chunk: Uint8Array;
    sender: string;
}
export interface Response {
    exception?: ResponseException;
    echo?: ResponseEcho;
    flush?: ResponseFlush;
    info?: ResponseInfo;
    setOption?: ResponseSetOption;
    initChain?: ResponseInitChain;
    query?: ResponseQuery;
    beginBlock?: ResponseBeginBlock;
    checkTx?: ResponseCheckTx;
    deliverTx?: ResponseDeliverTx;
    endBlock?: ResponseEndBlock;
    commit?: ResponseCommit;
    listSnapshots?: ResponseListSnapshots;
    offerSnapshot?: ResponseOfferSnapshot;
    loadSnapshotChunk?: ResponseLoadSnapshotChunk;
    applySnapshotChunk?: ResponseApplySnapshotChunk;
}
/** nondeterministic */
export interface ResponseException {
    error: string;
}
export interface ResponseEcho {
    message: string;
}
export interface ResponseFlush {
}
export interface ResponseInfo {
    data: string;
    version: string;
    appVersion: Long;
    lastBlockHeight: Long;
    lastBlockAppHash: Uint8Array;
}
/** nondeterministic */
export interface ResponseSetOption {
    code: number;
    /** bytes data = 2; */
    log: string;
    info: string;
}
export interface ResponseInitChain {
    consensusParams: ConsensusParams;
    validators: ValidatorUpdate[];
    appHash: Uint8Array;
}
export interface ResponseQuery {
    code: number;
    /** bytes data = 2; // use "value" instead. */
    log: string;
    /** nondeterministic */
    info: string;
    index: Long;
    key: Uint8Array;
    value: Uint8Array;
    proofOps: ProofOps;
    height: Long;
    codespace: string;
}
export interface ResponseBeginBlock {
    events: Event[];
}
export interface ResponseCheckTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gasWanted: Long;
    gasUsed: Long;
    events: Event[];
    codespace: string;
}
export interface ResponseDeliverTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gasWanted: Long;
    gasUsed: Long;
    events: Event[];
    codespace: string;
}
export interface ResponseEndBlock {
    validatorUpdates: ValidatorUpdate[];
    consensusParamUpdates: ConsensusParams;
    events: Event[];
}
export interface ResponseCommit {
    /** reserve 1 */
    data: Uint8Array;
    retainHeight: Long;
}
export interface ResponseListSnapshots {
    snapshots: Snapshot[];
}
export interface ResponseOfferSnapshot {
    result: ResponseOfferSnapshot_Result;
}
export interface ResponseLoadSnapshotChunk {
    chunk: Uint8Array;
}
export interface ResponseApplySnapshotChunk {
    result: ResponseApplySnapshotChunk_Result;
    /** Chunks to refetch and reapply */
    refetchChunks: number[];
    /** Chunk senders to reject and ban */
    rejectSenders: string[];
}
/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */
export interface ConsensusParams {
    block: BlockParams;
    evidence: EvidenceParams;
    validator: ValidatorParams;
    version: VersionParams;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
    /** Note: must be greater than 0 */
    maxBytes: Long;
    /** Note: must be greater or equal to -1 */
    maxGas: Long;
}
export interface LastCommitInfo {
    round: number;
    votes: VoteInfo[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface Event {
    type: string;
    attributes: EventAttribute[];
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
    key: Uint8Array;
    value: Uint8Array;
    /** nondeterministic */
    index: boolean;
}
/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 */
export interface TxResult {
    height: Long;
    index: number;
    tx: Uint8Array;
    result: ResponseDeliverTx;
}
/** Validator */
export interface Validator {
    /**
     * The first 20 bytes of SHA256(public key)
     * PubKey pub_key = 2 [(gogoproto.nullable)=false];
     */
    address: Uint8Array;
    /** The voting power */
    power: Long;
}
/** ValidatorUpdate */
export interface ValidatorUpdate {
    pubKey: PublicKey;
    power: Long;
}
/** VoteInfo */
export interface VoteInfo {
    validator: Validator;
    signedLastBlock: boolean;
}
export interface Evidence {
    type: EvidenceType;
    /** The offending validator */
    validator: Validator;
    /** The height when the offense occurred */
    height: Long;
    /** The corresponding time where the offense occurred */
    time: Date;
    /**
     * Total voting power of the validator set in case the ABCI application does
     * not store historical validators.
     * https://github.com/tendermint/tendermint/issues/4581
     */
    totalVotingPower: Long;
}
export interface Snapshot {
    /** The height at which the snapshot was taken */
    height: Long;
    /** The application-specific snapshot format */
    format: number;
    /** Number of chunks in the snapshot */
    chunks: number;
    /** Arbitrary snapshot hash, equal only if identical */
    hash: Uint8Array;
    /** Arbitrary application metadata */
    metadata: Uint8Array;
}
export declare const Request: {
    encode(message: Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request;
    fromJSON(object: any): Request;
    toJSON(message: Request): unknown;
    fromPartial<I extends {
        echo?: {
            message?: string;
        };
        flush?: {};
        info?: {
            version?: string;
            blockVersion?: any;
            p2pVersion?: any;
        };
        setOption?: {
            key?: string;
            value?: string;
        };
        initChain?: {
            time?: Date;
            chainId?: string;
            consensusParams?: {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            };
            validators?: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            }[];
            appStateBytes?: Uint8Array;
            initialHeight?: any;
        };
        query?: {
            data?: Uint8Array;
            path?: string;
            height?: any;
            prove?: boolean;
        };
        beginBlock?: {
            hash?: Uint8Array;
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
            lastCommitInfo?: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                }[];
            };
            byzantineValidators?: {
                type?: EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                height?: any;
                time?: Date;
                totalVotingPower?: any;
            }[];
        };
        checkTx?: {
            tx?: Uint8Array;
            type?: CheckTxType;
        };
        deliverTx?: {
            tx?: Uint8Array;
        };
        endBlock?: {
            height?: any;
        };
        commit?: {};
        listSnapshots?: {};
        offerSnapshot?: {
            snapshot?: {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            };
            appHash?: Uint8Array;
        };
        loadSnapshotChunk?: {
            height?: any;
            format?: number;
            chunk?: number;
        };
        applySnapshotChunk?: {
            index?: number;
            chunk?: Uint8Array;
            sender?: string;
        };
    } & {
        echo?: {
            message?: string;
        } & {
            message?: string;
        } & Record<Exclude<keyof I["echo"], "message">, never>;
        flush?: {} & {} & Record<Exclude<keyof I["flush"], never>, never>;
        info?: {
            version?: string;
            blockVersion?: any;
            p2pVersion?: any;
        } & {
            version?: string;
            blockVersion?: any;
            p2pVersion?: any;
        } & Record<Exclude<keyof I["info"], keyof RequestInfo>, never>;
        setOption?: {
            key?: string;
            value?: string;
        } & {
            key?: string;
            value?: string;
        } & Record<Exclude<keyof I["setOption"], keyof RequestSetOption>, never>;
        initChain?: {
            time?: Date;
            chainId?: string;
            consensusParams?: {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            };
            validators?: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            }[];
            appStateBytes?: Uint8Array;
            initialHeight?: any;
        } & {
            time?: Date;
            chainId?: string;
            consensusParams?: {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            } & {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                } & {
                    maxBytes?: any;
                    maxGas?: any;
                } & Record<Exclude<keyof I["initChain"]["consensusParams"]["block"], keyof BlockParams>, never>;
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & Record<Exclude<keyof I["initChain"]["consensusParams"]["evidence"], keyof EvidenceParams>, never>;
                validator?: {
                    pubKeyTypes?: string[];
                } & {
                    pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I["initChain"]["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                } & Record<Exclude<keyof I["initChain"]["consensusParams"]["validator"], "pubKeyTypes">, never>;
                version?: {
                    appVersion?: any;
                } & {
                    appVersion?: any;
                } & Record<Exclude<keyof I["initChain"]["consensusParams"]["version"], "appVersion">, never>;
            } & Record<Exclude<keyof I["initChain"]["consensusParams"], keyof ConsensusParams>, never>;
            validators?: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            }[] & ({
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            } & {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & Record<Exclude<keyof I["initChain"]["validators"][number]["pubKey"], keyof PublicKey>, never>;
                power?: any;
            } & Record<Exclude<keyof I["initChain"]["validators"][number], keyof ValidatorUpdate>, never>)[] & Record<Exclude<keyof I["initChain"]["validators"], keyof {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            }[]>, never>;
            appStateBytes?: Uint8Array;
            initialHeight?: any;
        } & Record<Exclude<keyof I["initChain"], keyof RequestInitChain>, never>;
        query?: {
            data?: Uint8Array;
            path?: string;
            height?: any;
            prove?: boolean;
        } & {
            data?: Uint8Array;
            path?: string;
            height?: any;
            prove?: boolean;
        } & Record<Exclude<keyof I["query"], keyof RequestQuery>, never>;
        beginBlock?: {
            hash?: Uint8Array;
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
            lastCommitInfo?: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                }[];
            };
            byzantineValidators?: {
                type?: EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                height?: any;
                time?: Date;
                totalVotingPower?: any;
            }[];
        } & {
            hash?: Uint8Array;
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
                } & Record<Exclude<keyof I["beginBlock"]["header"]["version"], keyof import("../version/types").Consensus>, never>;
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
                    } & Record<Exclude<keyof I["beginBlock"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../types/types").PartSetHeader>, never>;
                } & Record<Exclude<keyof I["beginBlock"]["header"]["lastBlockId"], keyof import("../types/types").BlockID>, never>;
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            } & Record<Exclude<keyof I["beginBlock"]["header"], keyof Header>, never>;
            lastCommitInfo?: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                }[];
            } & {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                }[] & ({
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                } & {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    } & {
                        address?: Uint8Array;
                        power?: any;
                    } & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"]["votes"][number]["validator"], keyof Validator>, never>;
                    signedLastBlock?: boolean;
                } & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"]["votes"][number], keyof VoteInfo>, never>)[] & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"]["votes"], keyof {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                }[]>, never>;
            } & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"], keyof LastCommitInfo>, never>;
            byzantineValidators?: {
                type?: EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                height?: any;
                time?: Date;
                totalVotingPower?: any;
            }[] & ({
                type?: EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                height?: any;
                time?: Date;
                totalVotingPower?: any;
            } & {
                type?: EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                } & {
                    address?: Uint8Array;
                    power?: any;
                } & Record<Exclude<keyof I["beginBlock"]["byzantineValidators"][number]["validator"], keyof Validator>, never>;
                height?: any;
                time?: Date;
                totalVotingPower?: any;
            } & Record<Exclude<keyof I["beginBlock"]["byzantineValidators"][number], keyof Evidence>, never>)[] & Record<Exclude<keyof I["beginBlock"]["byzantineValidators"], keyof {
                type?: EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                height?: any;
                time?: Date;
                totalVotingPower?: any;
            }[]>, never>;
        } & Record<Exclude<keyof I["beginBlock"], keyof RequestBeginBlock>, never>;
        checkTx?: {
            tx?: Uint8Array;
            type?: CheckTxType;
        } & {
            tx?: Uint8Array;
            type?: CheckTxType;
        } & Record<Exclude<keyof I["checkTx"], keyof RequestCheckTx>, never>;
        deliverTx?: {
            tx?: Uint8Array;
        } & {
            tx?: Uint8Array;
        } & Record<Exclude<keyof I["deliverTx"], "tx">, never>;
        endBlock?: {
            height?: any;
        } & {
            height?: any;
        } & Record<Exclude<keyof I["endBlock"], "height">, never>;
        commit?: {} & {} & Record<Exclude<keyof I["commit"], never>, never>;
        listSnapshots?: {} & {} & Record<Exclude<keyof I["listSnapshots"], never>, never>;
        offerSnapshot?: {
            snapshot?: {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            };
            appHash?: Uint8Array;
        } & {
            snapshot?: {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            } & {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            } & Record<Exclude<keyof I["offerSnapshot"]["snapshot"], keyof Snapshot>, never>;
            appHash?: Uint8Array;
        } & Record<Exclude<keyof I["offerSnapshot"], keyof RequestOfferSnapshot>, never>;
        loadSnapshotChunk?: {
            height?: any;
            format?: number;
            chunk?: number;
        } & {
            height?: any;
            format?: number;
            chunk?: number;
        } & Record<Exclude<keyof I["loadSnapshotChunk"], keyof RequestLoadSnapshotChunk>, never>;
        applySnapshotChunk?: {
            index?: number;
            chunk?: Uint8Array;
            sender?: string;
        } & {
            index?: number;
            chunk?: Uint8Array;
            sender?: string;
        } & Record<Exclude<keyof I["applySnapshotChunk"], keyof RequestApplySnapshotChunk>, never>;
    } & Record<Exclude<keyof I, keyof Request>, never>>(object: I): Request;
};
export declare const RequestEcho: {
    encode(message: RequestEcho, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestEcho;
    fromJSON(object: any): RequestEcho;
    toJSON(message: RequestEcho): unknown;
    fromPartial<I extends {
        message?: string;
    } & {
        message?: string;
    } & Record<Exclude<keyof I, "message">, never>>(object: I): RequestEcho;
};
export declare const RequestFlush: {
    encode(_: RequestFlush, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestFlush;
    fromJSON(_: any): RequestFlush;
    toJSON(_: RequestFlush): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RequestFlush;
};
export declare const RequestInfo: {
    encode(message: RequestInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestInfo;
    fromJSON(object: any): RequestInfo;
    toJSON(message: RequestInfo): unknown;
    fromPartial<I extends {
        version?: string;
        blockVersion?: any;
        p2pVersion?: any;
    } & {
        version?: string;
        blockVersion?: any;
        p2pVersion?: any;
    } & Record<Exclude<keyof I, keyof RequestInfo>, never>>(object: I): RequestInfo;
};
export declare const RequestSetOption: {
    encode(message: RequestSetOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestSetOption;
    fromJSON(object: any): RequestSetOption;
    toJSON(message: RequestSetOption): unknown;
    fromPartial<I extends {
        key?: string;
        value?: string;
    } & {
        key?: string;
        value?: string;
    } & Record<Exclude<keyof I, keyof RequestSetOption>, never>>(object: I): RequestSetOption;
};
export declare const RequestInitChain: {
    encode(message: RequestInitChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestInitChain;
    fromJSON(object: any): RequestInitChain;
    toJSON(message: RequestInitChain): unknown;
    fromPartial<I extends {
        time?: Date;
        chainId?: string;
        consensusParams?: {
            block?: {
                maxBytes?: any;
                maxGas?: any;
            };
            evidence?: {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: string;
                maxBytes?: any;
            };
            validator?: {
                pubKeyTypes?: string[];
            };
            version?: {
                appVersion?: any;
            };
        };
        validators?: {
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            power?: any;
        }[];
        appStateBytes?: Uint8Array;
        initialHeight?: any;
    } & {
        time?: Date;
        chainId?: string;
        consensusParams?: {
            block?: {
                maxBytes?: any;
                maxGas?: any;
            };
            evidence?: {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: string;
                maxBytes?: any;
            };
            validator?: {
                pubKeyTypes?: string[];
            };
            version?: {
                appVersion?: any;
            };
        } & {
            block?: {
                maxBytes?: any;
                maxGas?: any;
            } & {
                maxBytes?: any;
                maxGas?: any;
            } & Record<Exclude<keyof I["consensusParams"]["block"], keyof BlockParams>, never>;
            evidence?: {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: string;
                maxBytes?: any;
            } & {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: string;
                maxBytes?: any;
            } & Record<Exclude<keyof I["consensusParams"]["evidence"], keyof EvidenceParams>, never>;
            validator?: {
                pubKeyTypes?: string[];
            } & {
                pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["consensusParams"]["validator"], "pubKeyTypes">, never>;
            version?: {
                appVersion?: any;
            } & {
                appVersion?: any;
            } & Record<Exclude<keyof I["consensusParams"]["version"], "appVersion">, never>;
        } & Record<Exclude<keyof I["consensusParams"], keyof ConsensusParams>, never>;
        validators?: {
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            power?: any;
        }[] & ({
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            power?: any;
        } & {
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & Record<Exclude<keyof I["validators"][number]["pubKey"], keyof PublicKey>, never>;
            power?: any;
        } & Record<Exclude<keyof I["validators"][number], keyof ValidatorUpdate>, never>)[] & Record<Exclude<keyof I["validators"], keyof {
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            power?: any;
        }[]>, never>;
        appStateBytes?: Uint8Array;
        initialHeight?: any;
    } & Record<Exclude<keyof I, keyof RequestInitChain>, never>>(object: I): RequestInitChain;
};
export declare const RequestQuery: {
    encode(message: RequestQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestQuery;
    fromJSON(object: any): RequestQuery;
    toJSON(message: RequestQuery): unknown;
    fromPartial<I extends {
        data?: Uint8Array;
        path?: string;
        height?: any;
        prove?: boolean;
    } & {
        data?: Uint8Array;
        path?: string;
        height?: any;
        prove?: boolean;
    } & Record<Exclude<keyof I, keyof RequestQuery>, never>>(object: I): RequestQuery;
};
export declare const RequestBeginBlock: {
    encode(message: RequestBeginBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestBeginBlock;
    fromJSON(object: any): RequestBeginBlock;
    toJSON(message: RequestBeginBlock): unknown;
    fromPartial<I extends {
        hash?: Uint8Array;
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
        lastCommitInfo?: {
            round?: number;
            votes?: {
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                signedLastBlock?: boolean;
            }[];
        };
        byzantineValidators?: {
            type?: EvidenceType;
            validator?: {
                address?: Uint8Array;
                power?: any;
            };
            height?: any;
            time?: Date;
            totalVotingPower?: any;
        }[];
    } & {
        hash?: Uint8Array;
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
            } & Record<Exclude<keyof I["header"]["version"], keyof import("../version/types").Consensus>, never>;
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
                } & Record<Exclude<keyof I["header"]["lastBlockId"]["partSetHeader"], keyof import("../types/types").PartSetHeader>, never>;
            } & Record<Exclude<keyof I["header"]["lastBlockId"], keyof import("../types/types").BlockID>, never>;
            lastCommitHash?: Uint8Array;
            dataHash?: Uint8Array;
            validatorsHash?: Uint8Array;
            nextValidatorsHash?: Uint8Array;
            consensusHash?: Uint8Array;
            appHash?: Uint8Array;
            lastResultsHash?: Uint8Array;
            evidenceHash?: Uint8Array;
            proposerAddress?: Uint8Array;
        } & Record<Exclude<keyof I["header"], keyof Header>, never>;
        lastCommitInfo?: {
            round?: number;
            votes?: {
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                signedLastBlock?: boolean;
            }[];
        } & {
            round?: number;
            votes?: {
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                signedLastBlock?: boolean;
            }[] & ({
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                signedLastBlock?: boolean;
            } & {
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                } & {
                    address?: Uint8Array;
                    power?: any;
                } & Record<Exclude<keyof I["lastCommitInfo"]["votes"][number]["validator"], keyof Validator>, never>;
                signedLastBlock?: boolean;
            } & Record<Exclude<keyof I["lastCommitInfo"]["votes"][number], keyof VoteInfo>, never>)[] & Record<Exclude<keyof I["lastCommitInfo"]["votes"], keyof {
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                signedLastBlock?: boolean;
            }[]>, never>;
        } & Record<Exclude<keyof I["lastCommitInfo"], keyof LastCommitInfo>, never>;
        byzantineValidators?: {
            type?: EvidenceType;
            validator?: {
                address?: Uint8Array;
                power?: any;
            };
            height?: any;
            time?: Date;
            totalVotingPower?: any;
        }[] & ({
            type?: EvidenceType;
            validator?: {
                address?: Uint8Array;
                power?: any;
            };
            height?: any;
            time?: Date;
            totalVotingPower?: any;
        } & {
            type?: EvidenceType;
            validator?: {
                address?: Uint8Array;
                power?: any;
            } & {
                address?: Uint8Array;
                power?: any;
            } & Record<Exclude<keyof I["byzantineValidators"][number]["validator"], keyof Validator>, never>;
            height?: any;
            time?: Date;
            totalVotingPower?: any;
        } & Record<Exclude<keyof I["byzantineValidators"][number], keyof Evidence>, never>)[] & Record<Exclude<keyof I["byzantineValidators"], keyof {
            type?: EvidenceType;
            validator?: {
                address?: Uint8Array;
                power?: any;
            };
            height?: any;
            time?: Date;
            totalVotingPower?: any;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof RequestBeginBlock>, never>>(object: I): RequestBeginBlock;
};
export declare const RequestCheckTx: {
    encode(message: RequestCheckTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestCheckTx;
    fromJSON(object: any): RequestCheckTx;
    toJSON(message: RequestCheckTx): unknown;
    fromPartial<I extends {
        tx?: Uint8Array;
        type?: CheckTxType;
    } & {
        tx?: Uint8Array;
        type?: CheckTxType;
    } & Record<Exclude<keyof I, keyof RequestCheckTx>, never>>(object: I): RequestCheckTx;
};
export declare const RequestDeliverTx: {
    encode(message: RequestDeliverTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestDeliverTx;
    fromJSON(object: any): RequestDeliverTx;
    toJSON(message: RequestDeliverTx): unknown;
    fromPartial<I extends {
        tx?: Uint8Array;
    } & {
        tx?: Uint8Array;
    } & Record<Exclude<keyof I, "tx">, never>>(object: I): RequestDeliverTx;
};
export declare const RequestEndBlock: {
    encode(message: RequestEndBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestEndBlock;
    fromJSON(object: any): RequestEndBlock;
    toJSON(message: RequestEndBlock): unknown;
    fromPartial<I extends {
        height?: any;
    } & {
        height?: any;
    } & Record<Exclude<keyof I, "height">, never>>(object: I): RequestEndBlock;
};
export declare const RequestCommit: {
    encode(_: RequestCommit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestCommit;
    fromJSON(_: any): RequestCommit;
    toJSON(_: RequestCommit): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RequestCommit;
};
export declare const RequestListSnapshots: {
    encode(_: RequestListSnapshots, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestListSnapshots;
    fromJSON(_: any): RequestListSnapshots;
    toJSON(_: RequestListSnapshots): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RequestListSnapshots;
};
export declare const RequestOfferSnapshot: {
    encode(message: RequestOfferSnapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestOfferSnapshot;
    fromJSON(object: any): RequestOfferSnapshot;
    toJSON(message: RequestOfferSnapshot): unknown;
    fromPartial<I extends {
        snapshot?: {
            height?: any;
            format?: number;
            chunks?: number;
            hash?: Uint8Array;
            metadata?: Uint8Array;
        };
        appHash?: Uint8Array;
    } & {
        snapshot?: {
            height?: any;
            format?: number;
            chunks?: number;
            hash?: Uint8Array;
            metadata?: Uint8Array;
        } & {
            height?: any;
            format?: number;
            chunks?: number;
            hash?: Uint8Array;
            metadata?: Uint8Array;
        } & Record<Exclude<keyof I["snapshot"], keyof Snapshot>, never>;
        appHash?: Uint8Array;
    } & Record<Exclude<keyof I, keyof RequestOfferSnapshot>, never>>(object: I): RequestOfferSnapshot;
};
export declare const RequestLoadSnapshotChunk: {
    encode(message: RequestLoadSnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestLoadSnapshotChunk;
    fromJSON(object: any): RequestLoadSnapshotChunk;
    toJSON(message: RequestLoadSnapshotChunk): unknown;
    fromPartial<I extends {
        height?: any;
        format?: number;
        chunk?: number;
    } & {
        height?: any;
        format?: number;
        chunk?: number;
    } & Record<Exclude<keyof I, keyof RequestLoadSnapshotChunk>, never>>(object: I): RequestLoadSnapshotChunk;
};
export declare const RequestApplySnapshotChunk: {
    encode(message: RequestApplySnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestApplySnapshotChunk;
    fromJSON(object: any): RequestApplySnapshotChunk;
    toJSON(message: RequestApplySnapshotChunk): unknown;
    fromPartial<I extends {
        index?: number;
        chunk?: Uint8Array;
        sender?: string;
    } & {
        index?: number;
        chunk?: Uint8Array;
        sender?: string;
    } & Record<Exclude<keyof I, keyof RequestApplySnapshotChunk>, never>>(object: I): RequestApplySnapshotChunk;
};
export declare const Response: {
    encode(message: Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response;
    fromJSON(object: any): Response;
    toJSON(message: Response): unknown;
    fromPartial<I extends {
        exception?: {
            error?: string;
        };
        echo?: {
            message?: string;
        };
        flush?: {};
        info?: {
            data?: string;
            version?: string;
            appVersion?: any;
            lastBlockHeight?: any;
            lastBlockAppHash?: Uint8Array;
        };
        setOption?: {
            code?: number;
            log?: string;
            info?: string;
        };
        initChain?: {
            consensusParams?: {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            };
            validators?: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            }[];
            appHash?: Uint8Array;
        };
        query?: {
            code?: number;
            log?: string;
            info?: string;
            index?: any;
            key?: Uint8Array;
            value?: Uint8Array;
            proofOps?: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            };
            height?: any;
            codespace?: string;
        };
        beginBlock?: {
            events?: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[];
        };
        checkTx?: {
            code?: number;
            data?: Uint8Array;
            log?: string;
            info?: string;
            gasWanted?: any;
            gasUsed?: any;
            events?: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[];
            codespace?: string;
        };
        deliverTx?: {
            code?: number;
            data?: Uint8Array;
            log?: string;
            info?: string;
            gasWanted?: any;
            gasUsed?: any;
            events?: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[];
            codespace?: string;
        };
        endBlock?: {
            validatorUpdates?: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            }[];
            consensusParamUpdates?: {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            };
            events?: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[];
        };
        commit?: {
            data?: Uint8Array;
            retainHeight?: any;
        };
        listSnapshots?: {
            snapshots?: {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }[];
        };
        offerSnapshot?: {
            result?: ResponseOfferSnapshot_Result;
        };
        loadSnapshotChunk?: {
            chunk?: Uint8Array;
        };
        applySnapshotChunk?: {
            result?: ResponseApplySnapshotChunk_Result;
            refetchChunks?: number[];
            rejectSenders?: string[];
        };
    } & {
        exception?: {
            error?: string;
        } & {
            error?: string;
        } & Record<Exclude<keyof I["exception"], "error">, never>;
        echo?: {
            message?: string;
        } & {
            message?: string;
        } & Record<Exclude<keyof I["echo"], "message">, never>;
        flush?: {} & {} & Record<Exclude<keyof I["flush"], never>, never>;
        info?: {
            data?: string;
            version?: string;
            appVersion?: any;
            lastBlockHeight?: any;
            lastBlockAppHash?: Uint8Array;
        } & {
            data?: string;
            version?: string;
            appVersion?: any;
            lastBlockHeight?: any;
            lastBlockAppHash?: Uint8Array;
        } & Record<Exclude<keyof I["info"], keyof ResponseInfo>, never>;
        setOption?: {
            code?: number;
            log?: string;
            info?: string;
        } & {
            code?: number;
            log?: string;
            info?: string;
        } & Record<Exclude<keyof I["setOption"], keyof ResponseSetOption>, never>;
        initChain?: {
            consensusParams?: {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            };
            validators?: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            }[];
            appHash?: Uint8Array;
        } & {
            consensusParams?: {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            } & {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                } & {
                    maxBytes?: any;
                    maxGas?: any;
                } & Record<Exclude<keyof I["initChain"]["consensusParams"]["block"], keyof BlockParams>, never>;
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & Record<Exclude<keyof I["initChain"]["consensusParams"]["evidence"], keyof EvidenceParams>, never>;
                validator?: {
                    pubKeyTypes?: string[];
                } & {
                    pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I["initChain"]["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                } & Record<Exclude<keyof I["initChain"]["consensusParams"]["validator"], "pubKeyTypes">, never>;
                version?: {
                    appVersion?: any;
                } & {
                    appVersion?: any;
                } & Record<Exclude<keyof I["initChain"]["consensusParams"]["version"], "appVersion">, never>;
            } & Record<Exclude<keyof I["initChain"]["consensusParams"], keyof ConsensusParams>, never>;
            validators?: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            }[] & ({
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            } & {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & Record<Exclude<keyof I["initChain"]["validators"][number]["pubKey"], keyof PublicKey>, never>;
                power?: any;
            } & Record<Exclude<keyof I["initChain"]["validators"][number], keyof ValidatorUpdate>, never>)[] & Record<Exclude<keyof I["initChain"]["validators"], keyof {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            }[]>, never>;
            appHash?: Uint8Array;
        } & Record<Exclude<keyof I["initChain"], keyof ResponseInitChain>, never>;
        query?: {
            code?: number;
            log?: string;
            info?: string;
            index?: any;
            key?: Uint8Array;
            value?: Uint8Array;
            proofOps?: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            };
            height?: any;
            codespace?: string;
        } & {
            code?: number;
            log?: string;
            info?: string;
            index?: any;
            key?: Uint8Array;
            value?: Uint8Array;
            proofOps?: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            } & {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[] & ({
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                } & {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                } & Record<Exclude<keyof I["query"]["proofOps"]["ops"][number], keyof import("../crypto/proof").ProofOp>, never>)[] & Record<Exclude<keyof I["query"]["proofOps"]["ops"], keyof {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I["query"]["proofOps"], "ops">, never>;
            height?: any;
            codespace?: string;
        } & Record<Exclude<keyof I["query"], keyof ResponseQuery>, never>;
        beginBlock?: {
            events?: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[];
        } & {
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
                } & Record<Exclude<keyof I["beginBlock"]["events"][number]["attributes"][number], keyof EventAttribute>, never>)[] & Record<Exclude<keyof I["beginBlock"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[]>, never>;
            } & Record<Exclude<keyof I["beginBlock"]["events"][number], keyof Event>, never>)[] & Record<Exclude<keyof I["beginBlock"]["events"], keyof {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[]>, never>;
        } & Record<Exclude<keyof I["beginBlock"], "events">, never>;
        checkTx?: {
            code?: number;
            data?: Uint8Array;
            log?: string;
            info?: string;
            gasWanted?: any;
            gasUsed?: any;
            events?: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[];
            codespace?: string;
        } & {
            code?: number;
            data?: Uint8Array;
            log?: string;
            info?: string;
            gasWanted?: any;
            gasUsed?: any;
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
                } & Record<Exclude<keyof I["checkTx"]["events"][number]["attributes"][number], keyof EventAttribute>, never>)[] & Record<Exclude<keyof I["checkTx"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[]>, never>;
            } & Record<Exclude<keyof I["checkTx"]["events"][number], keyof Event>, never>)[] & Record<Exclude<keyof I["checkTx"]["events"], keyof {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[]>, never>;
            codespace?: string;
        } & Record<Exclude<keyof I["checkTx"], keyof ResponseCheckTx>, never>;
        deliverTx?: {
            code?: number;
            data?: Uint8Array;
            log?: string;
            info?: string;
            gasWanted?: any;
            gasUsed?: any;
            events?: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[];
            codespace?: string;
        } & {
            code?: number;
            data?: Uint8Array;
            log?: string;
            info?: string;
            gasWanted?: any;
            gasUsed?: any;
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
                } & Record<Exclude<keyof I["deliverTx"]["events"][number]["attributes"][number], keyof EventAttribute>, never>)[] & Record<Exclude<keyof I["deliverTx"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[]>, never>;
            } & Record<Exclude<keyof I["deliverTx"]["events"][number], keyof Event>, never>)[] & Record<Exclude<keyof I["deliverTx"]["events"], keyof {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[]>, never>;
            codespace?: string;
        } & Record<Exclude<keyof I["deliverTx"], keyof ResponseDeliverTx>, never>;
        endBlock?: {
            validatorUpdates?: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            }[];
            consensusParamUpdates?: {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            };
            events?: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[];
        } & {
            validatorUpdates?: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            }[] & ({
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            } & {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & Record<Exclude<keyof I["endBlock"]["validatorUpdates"][number]["pubKey"], keyof PublicKey>, never>;
                power?: any;
            } & Record<Exclude<keyof I["endBlock"]["validatorUpdates"][number], keyof ValidatorUpdate>, never>)[] & Record<Exclude<keyof I["endBlock"]["validatorUpdates"], keyof {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            }[]>, never>;
            consensusParamUpdates?: {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            } & {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                } & {
                    maxBytes?: any;
                    maxGas?: any;
                } & Record<Exclude<keyof I["endBlock"]["consensusParamUpdates"]["block"], keyof BlockParams>, never>;
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & Record<Exclude<keyof I["endBlock"]["consensusParamUpdates"]["evidence"], keyof EvidenceParams>, never>;
                validator?: {
                    pubKeyTypes?: string[];
                } & {
                    pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I["endBlock"]["consensusParamUpdates"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                } & Record<Exclude<keyof I["endBlock"]["consensusParamUpdates"]["validator"], "pubKeyTypes">, never>;
                version?: {
                    appVersion?: any;
                } & {
                    appVersion?: any;
                } & Record<Exclude<keyof I["endBlock"]["consensusParamUpdates"]["version"], "appVersion">, never>;
            } & Record<Exclude<keyof I["endBlock"]["consensusParamUpdates"], keyof ConsensusParams>, never>;
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
                } & Record<Exclude<keyof I["endBlock"]["events"][number]["attributes"][number], keyof EventAttribute>, never>)[] & Record<Exclude<keyof I["endBlock"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[]>, never>;
            } & Record<Exclude<keyof I["endBlock"]["events"][number], keyof Event>, never>)[] & Record<Exclude<keyof I["endBlock"]["events"], keyof {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[]>, never>;
        } & Record<Exclude<keyof I["endBlock"], keyof ResponseEndBlock>, never>;
        commit?: {
            data?: Uint8Array;
            retainHeight?: any;
        } & {
            data?: Uint8Array;
            retainHeight?: any;
        } & Record<Exclude<keyof I["commit"], keyof ResponseCommit>, never>;
        listSnapshots?: {
            snapshots?: {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }[];
        } & {
            snapshots?: {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }[] & ({
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            } & {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            } & Record<Exclude<keyof I["listSnapshots"]["snapshots"][number], keyof Snapshot>, never>)[] & Record<Exclude<keyof I["listSnapshots"]["snapshots"], keyof {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["listSnapshots"], "snapshots">, never>;
        offerSnapshot?: {
            result?: ResponseOfferSnapshot_Result;
        } & {
            result?: ResponseOfferSnapshot_Result;
        } & Record<Exclude<keyof I["offerSnapshot"], "result">, never>;
        loadSnapshotChunk?: {
            chunk?: Uint8Array;
        } & {
            chunk?: Uint8Array;
        } & Record<Exclude<keyof I["loadSnapshotChunk"], "chunk">, never>;
        applySnapshotChunk?: {
            result?: ResponseApplySnapshotChunk_Result;
            refetchChunks?: number[];
            rejectSenders?: string[];
        } & {
            result?: ResponseApplySnapshotChunk_Result;
            refetchChunks?: number[] & number[] & Record<Exclude<keyof I["applySnapshotChunk"]["refetchChunks"], keyof number[]>, never>;
            rejectSenders?: string[] & string[] & Record<Exclude<keyof I["applySnapshotChunk"]["rejectSenders"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["applySnapshotChunk"], keyof ResponseApplySnapshotChunk>, never>;
    } & Record<Exclude<keyof I, keyof Response>, never>>(object: I): Response;
};
export declare const ResponseException: {
    encode(message: ResponseException, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseException;
    fromJSON(object: any): ResponseException;
    toJSON(message: ResponseException): unknown;
    fromPartial<I extends {
        error?: string;
    } & {
        error?: string;
    } & Record<Exclude<keyof I, "error">, never>>(object: I): ResponseException;
};
export declare const ResponseEcho: {
    encode(message: ResponseEcho, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEcho;
    fromJSON(object: any): ResponseEcho;
    toJSON(message: ResponseEcho): unknown;
    fromPartial<I extends {
        message?: string;
    } & {
        message?: string;
    } & Record<Exclude<keyof I, "message">, never>>(object: I): ResponseEcho;
};
export declare const ResponseFlush: {
    encode(_: ResponseFlush, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseFlush;
    fromJSON(_: any): ResponseFlush;
    toJSON(_: ResponseFlush): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ResponseFlush;
};
export declare const ResponseInfo: {
    encode(message: ResponseInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInfo;
    fromJSON(object: any): ResponseInfo;
    toJSON(message: ResponseInfo): unknown;
    fromPartial<I extends {
        data?: string;
        version?: string;
        appVersion?: any;
        lastBlockHeight?: any;
        lastBlockAppHash?: Uint8Array;
    } & {
        data?: string;
        version?: string;
        appVersion?: any;
        lastBlockHeight?: any;
        lastBlockAppHash?: Uint8Array;
    } & Record<Exclude<keyof I, keyof ResponseInfo>, never>>(object: I): ResponseInfo;
};
export declare const ResponseSetOption: {
    encode(message: ResponseSetOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseSetOption;
    fromJSON(object: any): ResponseSetOption;
    toJSON(message: ResponseSetOption): unknown;
    fromPartial<I extends {
        code?: number;
        log?: string;
        info?: string;
    } & {
        code?: number;
        log?: string;
        info?: string;
    } & Record<Exclude<keyof I, keyof ResponseSetOption>, never>>(object: I): ResponseSetOption;
};
export declare const ResponseInitChain: {
    encode(message: ResponseInitChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInitChain;
    fromJSON(object: any): ResponseInitChain;
    toJSON(message: ResponseInitChain): unknown;
    fromPartial<I extends {
        consensusParams?: {
            block?: {
                maxBytes?: any;
                maxGas?: any;
            };
            evidence?: {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: string;
                maxBytes?: any;
            };
            validator?: {
                pubKeyTypes?: string[];
            };
            version?: {
                appVersion?: any;
            };
        };
        validators?: {
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            power?: any;
        }[];
        appHash?: Uint8Array;
    } & {
        consensusParams?: {
            block?: {
                maxBytes?: any;
                maxGas?: any;
            };
            evidence?: {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: string;
                maxBytes?: any;
            };
            validator?: {
                pubKeyTypes?: string[];
            };
            version?: {
                appVersion?: any;
            };
        } & {
            block?: {
                maxBytes?: any;
                maxGas?: any;
            } & {
                maxBytes?: any;
                maxGas?: any;
            } & Record<Exclude<keyof I["consensusParams"]["block"], keyof BlockParams>, never>;
            evidence?: {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: string;
                maxBytes?: any;
            } & {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: string;
                maxBytes?: any;
            } & Record<Exclude<keyof I["consensusParams"]["evidence"], keyof EvidenceParams>, never>;
            validator?: {
                pubKeyTypes?: string[];
            } & {
                pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["consensusParams"]["validator"], "pubKeyTypes">, never>;
            version?: {
                appVersion?: any;
            } & {
                appVersion?: any;
            } & Record<Exclude<keyof I["consensusParams"]["version"], "appVersion">, never>;
        } & Record<Exclude<keyof I["consensusParams"], keyof ConsensusParams>, never>;
        validators?: {
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            power?: any;
        }[] & ({
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            power?: any;
        } & {
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & Record<Exclude<keyof I["validators"][number]["pubKey"], keyof PublicKey>, never>;
            power?: any;
        } & Record<Exclude<keyof I["validators"][number], keyof ValidatorUpdate>, never>)[] & Record<Exclude<keyof I["validators"], keyof {
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            power?: any;
        }[]>, never>;
        appHash?: Uint8Array;
    } & Record<Exclude<keyof I, keyof ResponseInitChain>, never>>(object: I): ResponseInitChain;
};
export declare const ResponseQuery: {
    encode(message: ResponseQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseQuery;
    fromJSON(object: any): ResponseQuery;
    toJSON(message: ResponseQuery): unknown;
    fromPartial<I extends {
        code?: number;
        log?: string;
        info?: string;
        index?: any;
        key?: Uint8Array;
        value?: Uint8Array;
        proofOps?: {
            ops?: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }[];
        };
        height?: any;
        codespace?: string;
    } & {
        code?: number;
        log?: string;
        info?: string;
        index?: any;
        key?: Uint8Array;
        value?: Uint8Array;
        proofOps?: {
            ops?: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }[];
        } & {
            ops?: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }[] & ({
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            } & {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            } & Record<Exclude<keyof I["proofOps"]["ops"][number], keyof import("../crypto/proof").ProofOp>, never>)[] & Record<Exclude<keyof I["proofOps"]["ops"], keyof {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["proofOps"], "ops">, never>;
        height?: any;
        codespace?: string;
    } & Record<Exclude<keyof I, keyof ResponseQuery>, never>>(object: I): ResponseQuery;
};
export declare const ResponseBeginBlock: {
    encode(message: ResponseBeginBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBeginBlock;
    fromJSON(object: any): ResponseBeginBlock;
    toJSON(message: ResponseBeginBlock): unknown;
    fromPartial<I extends {
        events?: {
            type?: string;
            attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }[];
        }[];
    } & {
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
            } & Record<Exclude<keyof I["events"][number]["attributes"][number], keyof EventAttribute>, never>)[] & Record<Exclude<keyof I["events"][number]["attributes"], keyof {
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
    } & Record<Exclude<keyof I, "events">, never>>(object: I): ResponseBeginBlock;
};
export declare const ResponseCheckTx: {
    encode(message: ResponseCheckTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCheckTx;
    fromJSON(object: any): ResponseCheckTx;
    toJSON(message: ResponseCheckTx): unknown;
    fromPartial<I extends {
        code?: number;
        data?: Uint8Array;
        log?: string;
        info?: string;
        gasWanted?: any;
        gasUsed?: any;
        events?: {
            type?: string;
            attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }[];
        }[];
        codespace?: string;
    } & {
        code?: number;
        data?: Uint8Array;
        log?: string;
        info?: string;
        gasWanted?: any;
        gasUsed?: any;
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
            } & Record<Exclude<keyof I["events"][number]["attributes"][number], keyof EventAttribute>, never>)[] & Record<Exclude<keyof I["events"][number]["attributes"], keyof {
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
        codespace?: string;
    } & Record<Exclude<keyof I, keyof ResponseCheckTx>, never>>(object: I): ResponseCheckTx;
};
export declare const ResponseDeliverTx: {
    encode(message: ResponseDeliverTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseDeliverTx;
    fromJSON(object: any): ResponseDeliverTx;
    toJSON(message: ResponseDeliverTx): unknown;
    fromPartial<I extends {
        code?: number;
        data?: Uint8Array;
        log?: string;
        info?: string;
        gasWanted?: any;
        gasUsed?: any;
        events?: {
            type?: string;
            attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }[];
        }[];
        codespace?: string;
    } & {
        code?: number;
        data?: Uint8Array;
        log?: string;
        info?: string;
        gasWanted?: any;
        gasUsed?: any;
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
            } & Record<Exclude<keyof I["events"][number]["attributes"][number], keyof EventAttribute>, never>)[] & Record<Exclude<keyof I["events"][number]["attributes"], keyof {
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
        codespace?: string;
    } & Record<Exclude<keyof I, keyof ResponseDeliverTx>, never>>(object: I): ResponseDeliverTx;
};
export declare const ResponseEndBlock: {
    encode(message: ResponseEndBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEndBlock;
    fromJSON(object: any): ResponseEndBlock;
    toJSON(message: ResponseEndBlock): unknown;
    fromPartial<I extends {
        validatorUpdates?: {
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            power?: any;
        }[];
        consensusParamUpdates?: {
            block?: {
                maxBytes?: any;
                maxGas?: any;
            };
            evidence?: {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: string;
                maxBytes?: any;
            };
            validator?: {
                pubKeyTypes?: string[];
            };
            version?: {
                appVersion?: any;
            };
        };
        events?: {
            type?: string;
            attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }[];
        }[];
    } & {
        validatorUpdates?: {
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            power?: any;
        }[] & ({
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            power?: any;
        } & {
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & Record<Exclude<keyof I["validatorUpdates"][number]["pubKey"], keyof PublicKey>, never>;
            power?: any;
        } & Record<Exclude<keyof I["validatorUpdates"][number], keyof ValidatorUpdate>, never>)[] & Record<Exclude<keyof I["validatorUpdates"], keyof {
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            power?: any;
        }[]>, never>;
        consensusParamUpdates?: {
            block?: {
                maxBytes?: any;
                maxGas?: any;
            };
            evidence?: {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: string;
                maxBytes?: any;
            };
            validator?: {
                pubKeyTypes?: string[];
            };
            version?: {
                appVersion?: any;
            };
        } & {
            block?: {
                maxBytes?: any;
                maxGas?: any;
            } & {
                maxBytes?: any;
                maxGas?: any;
            } & Record<Exclude<keyof I["consensusParamUpdates"]["block"], keyof BlockParams>, never>;
            evidence?: {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: string;
                maxBytes?: any;
            } & {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: string;
                maxBytes?: any;
            } & Record<Exclude<keyof I["consensusParamUpdates"]["evidence"], keyof EvidenceParams>, never>;
            validator?: {
                pubKeyTypes?: string[];
            } & {
                pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I["consensusParamUpdates"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["consensusParamUpdates"]["validator"], "pubKeyTypes">, never>;
            version?: {
                appVersion?: any;
            } & {
                appVersion?: any;
            } & Record<Exclude<keyof I["consensusParamUpdates"]["version"], "appVersion">, never>;
        } & Record<Exclude<keyof I["consensusParamUpdates"], keyof ConsensusParams>, never>;
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
            } & Record<Exclude<keyof I["events"][number]["attributes"][number], keyof EventAttribute>, never>)[] & Record<Exclude<keyof I["events"][number]["attributes"], keyof {
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
    } & Record<Exclude<keyof I, keyof ResponseEndBlock>, never>>(object: I): ResponseEndBlock;
};
export declare const ResponseCommit: {
    encode(message: ResponseCommit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCommit;
    fromJSON(object: any): ResponseCommit;
    toJSON(message: ResponseCommit): unknown;
    fromPartial<I extends {
        data?: Uint8Array;
        retainHeight?: any;
    } & {
        data?: Uint8Array;
        retainHeight?: any;
    } & Record<Exclude<keyof I, keyof ResponseCommit>, never>>(object: I): ResponseCommit;
};
export declare const ResponseListSnapshots: {
    encode(message: ResponseListSnapshots, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseListSnapshots;
    fromJSON(object: any): ResponseListSnapshots;
    toJSON(message: ResponseListSnapshots): unknown;
    fromPartial<I extends {
        snapshots?: {
            height?: any;
            format?: number;
            chunks?: number;
            hash?: Uint8Array;
            metadata?: Uint8Array;
        }[];
    } & {
        snapshots?: {
            height?: any;
            format?: number;
            chunks?: number;
            hash?: Uint8Array;
            metadata?: Uint8Array;
        }[] & ({
            height?: any;
            format?: number;
            chunks?: number;
            hash?: Uint8Array;
            metadata?: Uint8Array;
        } & {
            height?: any;
            format?: number;
            chunks?: number;
            hash?: Uint8Array;
            metadata?: Uint8Array;
        } & Record<Exclude<keyof I["snapshots"][number], keyof Snapshot>, never>)[] & Record<Exclude<keyof I["snapshots"], keyof {
            height?: any;
            format?: number;
            chunks?: number;
            hash?: Uint8Array;
            metadata?: Uint8Array;
        }[]>, never>;
    } & Record<Exclude<keyof I, "snapshots">, never>>(object: I): ResponseListSnapshots;
};
export declare const ResponseOfferSnapshot: {
    encode(message: ResponseOfferSnapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseOfferSnapshot;
    fromJSON(object: any): ResponseOfferSnapshot;
    toJSON(message: ResponseOfferSnapshot): unknown;
    fromPartial<I extends {
        result?: ResponseOfferSnapshot_Result;
    } & {
        result?: ResponseOfferSnapshot_Result;
    } & Record<Exclude<keyof I, "result">, never>>(object: I): ResponseOfferSnapshot;
};
export declare const ResponseLoadSnapshotChunk: {
    encode(message: ResponseLoadSnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseLoadSnapshotChunk;
    fromJSON(object: any): ResponseLoadSnapshotChunk;
    toJSON(message: ResponseLoadSnapshotChunk): unknown;
    fromPartial<I extends {
        chunk?: Uint8Array;
    } & {
        chunk?: Uint8Array;
    } & Record<Exclude<keyof I, "chunk">, never>>(object: I): ResponseLoadSnapshotChunk;
};
export declare const ResponseApplySnapshotChunk: {
    encode(message: ResponseApplySnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseApplySnapshotChunk;
    fromJSON(object: any): ResponseApplySnapshotChunk;
    toJSON(message: ResponseApplySnapshotChunk): unknown;
    fromPartial<I extends {
        result?: ResponseApplySnapshotChunk_Result;
        refetchChunks?: number[];
        rejectSenders?: string[];
    } & {
        result?: ResponseApplySnapshotChunk_Result;
        refetchChunks?: number[] & number[] & Record<Exclude<keyof I["refetchChunks"], keyof number[]>, never>;
        rejectSenders?: string[] & string[] & Record<Exclude<keyof I["rejectSenders"], keyof string[]>, never>;
    } & Record<Exclude<keyof I, keyof ResponseApplySnapshotChunk>, never>>(object: I): ResponseApplySnapshotChunk;
};
export declare const ConsensusParams: {
    encode(message: ConsensusParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParams;
    fromJSON(object: any): ConsensusParams;
    toJSON(message: ConsensusParams): unknown;
    fromPartial<I extends {
        block?: {
            maxBytes?: any;
            maxGas?: any;
        };
        evidence?: {
            maxAgeNumBlocks?: any;
            maxAgeDuration?: string;
            maxBytes?: any;
        };
        validator?: {
            pubKeyTypes?: string[];
        };
        version?: {
            appVersion?: any;
        };
    } & {
        block?: {
            maxBytes?: any;
            maxGas?: any;
        } & {
            maxBytes?: any;
            maxGas?: any;
        } & Record<Exclude<keyof I["block"], keyof BlockParams>, never>;
        evidence?: {
            maxAgeNumBlocks?: any;
            maxAgeDuration?: string;
            maxBytes?: any;
        } & {
            maxAgeNumBlocks?: any;
            maxAgeDuration?: string;
            maxBytes?: any;
        } & Record<Exclude<keyof I["evidence"], keyof EvidenceParams>, never>;
        validator?: {
            pubKeyTypes?: string[];
        } & {
            pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I["validator"]["pubKeyTypes"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["validator"], "pubKeyTypes">, never>;
        version?: {
            appVersion?: any;
        } & {
            appVersion?: any;
        } & Record<Exclude<keyof I["version"], "appVersion">, never>;
    } & Record<Exclude<keyof I, keyof ConsensusParams>, never>>(object: I): ConsensusParams;
};
export declare const BlockParams: {
    encode(message: BlockParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockParams;
    fromJSON(object: any): BlockParams;
    toJSON(message: BlockParams): unknown;
    fromPartial<I extends {
        maxBytes?: any;
        maxGas?: any;
    } & {
        maxBytes?: any;
        maxGas?: any;
    } & Record<Exclude<keyof I, keyof BlockParams>, never>>(object: I): BlockParams;
};
export declare const LastCommitInfo: {
    encode(message: LastCommitInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LastCommitInfo;
    fromJSON(object: any): LastCommitInfo;
    toJSON(message: LastCommitInfo): unknown;
    fromPartial<I extends {
        round?: number;
        votes?: {
            validator?: {
                address?: Uint8Array;
                power?: any;
            };
            signedLastBlock?: boolean;
        }[];
    } & {
        round?: number;
        votes?: {
            validator?: {
                address?: Uint8Array;
                power?: any;
            };
            signedLastBlock?: boolean;
        }[] & ({
            validator?: {
                address?: Uint8Array;
                power?: any;
            };
            signedLastBlock?: boolean;
        } & {
            validator?: {
                address?: Uint8Array;
                power?: any;
            } & {
                address?: Uint8Array;
                power?: any;
            } & Record<Exclude<keyof I["votes"][number]["validator"], keyof Validator>, never>;
            signedLastBlock?: boolean;
        } & Record<Exclude<keyof I["votes"][number], keyof VoteInfo>, never>)[] & Record<Exclude<keyof I["votes"], keyof {
            validator?: {
                address?: Uint8Array;
                power?: any;
            };
            signedLastBlock?: boolean;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof LastCommitInfo>, never>>(object: I): LastCommitInfo;
};
export declare const Event: {
    encode(message: Event, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Event;
    fromJSON(object: any): Event;
    toJSON(message: Event): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["attributes"][number], keyof EventAttribute>, never>)[] & Record<Exclude<keyof I["attributes"], keyof {
            key?: Uint8Array;
            value?: Uint8Array;
            index?: boolean;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof Event>, never>>(object: I): Event;
};
export declare const EventAttribute: {
    encode(message: EventAttribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAttribute;
    fromJSON(object: any): EventAttribute;
    toJSON(message: EventAttribute): unknown;
    fromPartial<I extends {
        key?: Uint8Array;
        value?: Uint8Array;
        index?: boolean;
    } & {
        key?: Uint8Array;
        value?: Uint8Array;
        index?: boolean;
    } & Record<Exclude<keyof I, keyof EventAttribute>, never>>(object: I): EventAttribute;
};
export declare const TxResult: {
    encode(message: TxResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxResult;
    fromJSON(object: any): TxResult;
    toJSON(message: TxResult): unknown;
    fromPartial<I extends {
        height?: any;
        index?: number;
        tx?: Uint8Array;
        result?: {
            code?: number;
            data?: Uint8Array;
            log?: string;
            info?: string;
            gasWanted?: any;
            gasUsed?: any;
            events?: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[];
            codespace?: string;
        };
    } & {
        height?: any;
        index?: number;
        tx?: Uint8Array;
        result?: {
            code?: number;
            data?: Uint8Array;
            log?: string;
            info?: string;
            gasWanted?: any;
            gasUsed?: any;
            events?: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }[];
            codespace?: string;
        } & {
            code?: number;
            data?: Uint8Array;
            log?: string;
            info?: string;
            gasWanted?: any;
            gasUsed?: any;
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
                } & Record<Exclude<keyof I["result"]["events"][number]["attributes"][number], keyof EventAttribute>, never>)[] & Record<Exclude<keyof I["result"]["events"][number]["attributes"], keyof {
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
            codespace?: string;
        } & Record<Exclude<keyof I["result"], keyof ResponseDeliverTx>, never>;
    } & Record<Exclude<keyof I, keyof TxResult>, never>>(object: I): TxResult;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    fromPartial<I extends {
        address?: Uint8Array;
        power?: any;
    } & {
        address?: Uint8Array;
        power?: any;
    } & Record<Exclude<keyof I, keyof Validator>, never>>(object: I): Validator;
};
export declare const ValidatorUpdate: {
    encode(message: ValidatorUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorUpdate;
    fromJSON(object: any): ValidatorUpdate;
    toJSON(message: ValidatorUpdate): unknown;
    fromPartial<I extends {
        pubKey?: {
            ed25519?: Uint8Array;
            secp256k1?: Uint8Array;
        };
        power?: any;
    } & {
        pubKey?: {
            ed25519?: Uint8Array;
            secp256k1?: Uint8Array;
        } & {
            ed25519?: Uint8Array;
            secp256k1?: Uint8Array;
        } & Record<Exclude<keyof I["pubKey"], keyof PublicKey>, never>;
        power?: any;
    } & Record<Exclude<keyof I, keyof ValidatorUpdate>, never>>(object: I): ValidatorUpdate;
};
export declare const VoteInfo: {
    encode(message: VoteInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteInfo;
    fromJSON(object: any): VoteInfo;
    toJSON(message: VoteInfo): unknown;
    fromPartial<I extends {
        validator?: {
            address?: Uint8Array;
            power?: any;
        };
        signedLastBlock?: boolean;
    } & {
        validator?: {
            address?: Uint8Array;
            power?: any;
        } & {
            address?: Uint8Array;
            power?: any;
        } & Record<Exclude<keyof I["validator"], keyof Validator>, never>;
        signedLastBlock?: boolean;
    } & Record<Exclude<keyof I, keyof VoteInfo>, never>>(object: I): VoteInfo;
};
export declare const Evidence: {
    encode(message: Evidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Evidence;
    fromJSON(object: any): Evidence;
    toJSON(message: Evidence): unknown;
    fromPartial<I extends {
        type?: EvidenceType;
        validator?: {
            address?: Uint8Array;
            power?: any;
        };
        height?: any;
        time?: Date;
        totalVotingPower?: any;
    } & {
        type?: EvidenceType;
        validator?: {
            address?: Uint8Array;
            power?: any;
        } & {
            address?: Uint8Array;
            power?: any;
        } & Record<Exclude<keyof I["validator"], keyof Validator>, never>;
        height?: any;
        time?: Date;
        totalVotingPower?: any;
    } & Record<Exclude<keyof I, keyof Evidence>, never>>(object: I): Evidence;
};
export declare const Snapshot: {
    encode(message: Snapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot;
    fromJSON(object: any): Snapshot;
    toJSON(message: Snapshot): unknown;
    fromPartial<I extends {
        height?: any;
        format?: number;
        chunks?: number;
        hash?: Uint8Array;
        metadata?: Uint8Array;
    } & {
        height?: any;
        format?: number;
        chunks?: number;
        hash?: Uint8Array;
        metadata?: Uint8Array;
    } & Record<Exclude<keyof I, keyof Snapshot>, never>>(object: I): Snapshot;
};
