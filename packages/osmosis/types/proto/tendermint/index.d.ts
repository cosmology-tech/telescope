import * as _1190 from "./abci/types";
import * as _1192 from "./crypto/keys";
import * as _1194 from "./crypto/proof";
import * as _1196 from "./libs/bits/types";
import * as _1198 from "./p2p/types";
import * as _1200 from "./types/block";
import * as _1202 from "./types/evidence";
import * as _1204 from "./types/params";
import * as _1206 from "./types/types";
import * as _1208 from "./types/validator";
import * as _1210 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _1190.CheckTxType;
        checkTxTypeToJSON(object: _1190.CheckTxType): string;
        evidenceTypeFromJSON(object: any): _1190.EvidenceType;
        evidenceTypeToJSON(object: _1190.EvidenceType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _1190.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _1190.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _1190.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _1190.ResponseApplySnapshotChunk_Result): string;
        CheckTxType: typeof _1190.CheckTxType;
        EvidenceType: typeof _1190.EvidenceType;
        Request: {
            encode(message: _1190.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.Request;
            fromJSON(object: any): _1190.Request;
            toJSON(message: _1190.Request): unknown;
            fromPartial<I extends {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    blockVersion?: string;
                    p2pVersion?: string;
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
                            maxBytes?: string;
                            maxGas?: string;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string;
                            maxAgeDuration?: string;
                            maxBytes?: string;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string;
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: string;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: string;
                    prove?: boolean;
                };
                beginBlock?: {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: string;
                            app?: string;
                        };
                        chainId?: string;
                        height?: string;
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
                                power?: string;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _1190.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: string;
                        };
                        height?: string;
                        time?: Date;
                        totalVotingPower?: string;
                    }[];
                };
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _1190.CheckTxType;
                };
                deliverTx?: {
                    tx?: Uint8Array;
                };
                endBlock?: {
                    height?: string;
                };
                commit?: {};
                listSnapshots?: {};
                offerSnapshot?: {
                    snapshot?: {
                        height?: string;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                };
                loadSnapshotChunk?: {
                    height?: string;
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
                    blockVersion?: string;
                    p2pVersion?: string;
                } & {
                    version?: string;
                    blockVersion?: string;
                    p2pVersion?: string;
                } & Record<Exclude<keyof I["info"], keyof _1190.RequestInfo>, never>;
                setOption?: {
                    key?: string;
                    value?: string;
                } & {
                    key?: string;
                    value?: string;
                } & Record<Exclude<keyof I["setOption"], keyof _1190.RequestSetOption>, never>;
                initChain?: {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: string;
                            maxGas?: string;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string;
                            maxAgeDuration?: string;
                            maxBytes?: string;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string;
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: string;
                } & {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: string;
                            maxGas?: string;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string;
                            maxAgeDuration?: string;
                            maxBytes?: string;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string;
                        };
                    } & {
                        block?: {
                            maxBytes?: string;
                            maxGas?: string;
                        } & {
                            maxBytes?: string;
                            maxGas?: string;
                        } & Record<Exclude<keyof I["initChain"]["consensusParams"]["block"], keyof _1190.BlockParams>, never>;
                        evidence?: {
                            maxAgeNumBlocks?: string;
                            maxAgeDuration?: string;
                            maxBytes?: string;
                        } & {
                            maxAgeNumBlocks?: string;
                            maxAgeDuration?: string;
                            maxBytes?: string;
                        } & Record<Exclude<keyof I["initChain"]["consensusParams"]["evidence"], keyof _1204.EvidenceParams>, never>;
                        validator?: {
                            pubKeyTypes?: string[];
                        } & {
                            pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I["initChain"]["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I["initChain"]["consensusParams"]["validator"], "pubKeyTypes">, never>;
                        version?: {
                            appVersion?: string;
                        } & {
                            appVersion?: string;
                        } & Record<Exclude<keyof I["initChain"]["consensusParams"]["version"], "appVersion">, never>;
                    } & Record<Exclude<keyof I["initChain"]["consensusParams"], keyof _1190.ConsensusParams>, never>;
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string;
                    }[] & ({
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string;
                    } & {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I["initChain"]["validators"][number]["pubKey"], keyof _1192.PublicKey>, never>;
                        power?: string;
                    } & Record<Exclude<keyof I["initChain"]["validators"][number], keyof _1190.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I["initChain"]["validators"], keyof {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string;
                    }[]>, never>;
                    appStateBytes?: Uint8Array;
                    initialHeight?: string;
                } & Record<Exclude<keyof I["initChain"], keyof _1190.RequestInitChain>, never>;
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: string;
                    prove?: boolean;
                } & {
                    data?: Uint8Array;
                    path?: string;
                    height?: string;
                    prove?: boolean;
                } & Record<Exclude<keyof I["query"], keyof _1190.RequestQuery>, never>;
                beginBlock?: {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: string;
                            app?: string;
                        };
                        chainId?: string;
                        height?: string;
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
                                power?: string;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _1190.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: string;
                        };
                        height?: string;
                        time?: Date;
                        totalVotingPower?: string;
                    }[];
                } & {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: string;
                            app?: string;
                        };
                        chainId?: string;
                        height?: string;
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
                            block?: string;
                            app?: string;
                        } & {
                            block?: string;
                            app?: string;
                        } & Record<Exclude<keyof I["beginBlock"]["header"]["version"], keyof _1210.Consensus>, never>;
                        chainId?: string;
                        height?: string;
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
                            } & Record<Exclude<keyof I["beginBlock"]["header"]["lastBlockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I["beginBlock"]["header"]["lastBlockId"], keyof _1206.BlockID>, never>;
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    } & Record<Exclude<keyof I["beginBlock"]["header"], keyof _1206.Header>, never>;
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: string;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    } & {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: string;
                            };
                            signedLastBlock?: boolean;
                        }[] & ({
                            validator?: {
                                address?: Uint8Array;
                                power?: string;
                            };
                            signedLastBlock?: boolean;
                        } & {
                            validator?: {
                                address?: Uint8Array;
                                power?: string;
                            } & {
                                address?: Uint8Array;
                                power?: string;
                            } & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"]["votes"][number]["validator"], keyof _1190.Validator>, never>;
                            signedLastBlock?: boolean;
                        } & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"]["votes"][number], keyof _1190.VoteInfo>, never>)[] & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"]["votes"], keyof {
                            validator?: {
                                address?: Uint8Array;
                                power?: string;
                            };
                            signedLastBlock?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"], keyof _1190.LastCommitInfo>, never>;
                    byzantineValidators?: {
                        type?: _1190.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: string;
                        };
                        height?: string;
                        time?: Date;
                        totalVotingPower?: string;
                    }[] & ({
                        type?: _1190.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: string;
                        };
                        height?: string;
                        time?: Date;
                        totalVotingPower?: string;
                    } & {
                        type?: _1190.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: string;
                        } & {
                            address?: Uint8Array;
                            power?: string;
                        } & Record<Exclude<keyof I["beginBlock"]["byzantineValidators"][number]["validator"], keyof _1190.Validator>, never>;
                        height?: string;
                        time?: Date;
                        totalVotingPower?: string;
                    } & Record<Exclude<keyof I["beginBlock"]["byzantineValidators"][number], keyof _1190.Evidence>, never>)[] & Record<Exclude<keyof I["beginBlock"]["byzantineValidators"], keyof {
                        type?: _1190.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: string;
                        };
                        height?: string;
                        time?: Date;
                        totalVotingPower?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I["beginBlock"], keyof _1190.RequestBeginBlock>, never>;
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _1190.CheckTxType;
                } & {
                    tx?: Uint8Array;
                    type?: _1190.CheckTxType;
                } & Record<Exclude<keyof I["checkTx"], keyof _1190.RequestCheckTx>, never>;
                deliverTx?: {
                    tx?: Uint8Array;
                } & {
                    tx?: Uint8Array;
                } & Record<Exclude<keyof I["deliverTx"], "tx">, never>;
                endBlock?: {
                    height?: string;
                } & {
                    height?: string;
                } & Record<Exclude<keyof I["endBlock"], "height">, never>;
                commit?: {} & {} & Record<Exclude<keyof I["commit"], never>, never>;
                listSnapshots?: {} & {} & Record<Exclude<keyof I["listSnapshots"], never>, never>;
                offerSnapshot?: {
                    snapshot?: {
                        height?: string;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                } & {
                    snapshot?: {
                        height?: string;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    } & {
                        height?: string;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    } & Record<Exclude<keyof I["offerSnapshot"]["snapshot"], keyof _1190.Snapshot>, never>;
                    appHash?: Uint8Array;
                } & Record<Exclude<keyof I["offerSnapshot"], keyof _1190.RequestOfferSnapshot>, never>;
                loadSnapshotChunk?: {
                    height?: string;
                    format?: number;
                    chunk?: number;
                } & {
                    height?: string;
                    format?: number;
                    chunk?: number;
                } & Record<Exclude<keyof I["loadSnapshotChunk"], keyof _1190.RequestLoadSnapshotChunk>, never>;
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                } & {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                } & Record<Exclude<keyof I["applySnapshotChunk"], keyof _1190.RequestApplySnapshotChunk>, never>;
            } & Record<Exclude<keyof I, keyof _1190.Request>, never>>(object: I): _1190.Request;
        };
        RequestEcho: {
            encode(message: _1190.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestEcho;
            fromJSON(object: any): _1190.RequestEcho;
            toJSON(message: _1190.RequestEcho): unknown;
            fromPartial<I_1 extends {
                message?: string;
            } & {
                message?: string;
            } & Record<Exclude<keyof I_1, "message">, never>>(object: I_1): _1190.RequestEcho;
        };
        RequestFlush: {
            encode(_: _1190.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestFlush;
            fromJSON(_: any): _1190.RequestFlush;
            toJSON(_: _1190.RequestFlush): unknown;
            fromPartial<I_2 extends {} & {} & Record<Exclude<keyof I_2, never>, never>>(_: I_2): _1190.RequestFlush;
        };
        RequestInfo: {
            encode(message: _1190.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestInfo;
            fromJSON(object: any): _1190.RequestInfo;
            toJSON(message: _1190.RequestInfo): unknown;
            fromPartial<I_3 extends {
                version?: string;
                blockVersion?: string;
                p2pVersion?: string;
            } & {
                version?: string;
                blockVersion?: string;
                p2pVersion?: string;
            } & Record<Exclude<keyof I_3, keyof _1190.RequestInfo>, never>>(object: I_3): _1190.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _1190.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestSetOption;
            fromJSON(object: any): _1190.RequestSetOption;
            toJSON(message: _1190.RequestSetOption): unknown;
            fromPartial<I_4 extends {
                key?: string;
                value?: string;
            } & {
                key?: string;
                value?: string;
            } & Record<Exclude<keyof I_4, keyof _1190.RequestSetOption>, never>>(object: I_4): _1190.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _1190.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestInitChain;
            fromJSON(object: any): _1190.RequestInitChain;
            toJSON(message: _1190.RequestInitChain): unknown;
            fromPartial<I_5 extends {
                time?: Date;
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: string;
                        maxGas?: string;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string;
                        maxAgeDuration?: string;
                        maxBytes?: string;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string;
                }[];
                appStateBytes?: Uint8Array;
                initialHeight?: string;
            } & {
                time?: Date;
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: string;
                        maxGas?: string;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string;
                        maxAgeDuration?: string;
                        maxBytes?: string;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string;
                    };
                } & {
                    block?: {
                        maxBytes?: string;
                        maxGas?: string;
                    } & {
                        maxBytes?: string;
                        maxGas?: string;
                    } & Record<Exclude<keyof I_5["consensusParams"]["block"], keyof _1190.BlockParams>, never>;
                    evidence?: {
                        maxAgeNumBlocks?: string;
                        maxAgeDuration?: string;
                        maxBytes?: string;
                    } & {
                        maxAgeNumBlocks?: string;
                        maxAgeDuration?: string;
                        maxBytes?: string;
                    } & Record<Exclude<keyof I_5["consensusParams"]["evidence"], keyof _1204.EvidenceParams>, never>;
                    validator?: {
                        pubKeyTypes?: string[];
                    } & {
                        pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_5["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_5["consensusParams"]["validator"], "pubKeyTypes">, never>;
                    version?: {
                        appVersion?: string;
                    } & {
                        appVersion?: string;
                    } & Record<Exclude<keyof I_5["consensusParams"]["version"], "appVersion">, never>;
                } & Record<Exclude<keyof I_5["consensusParams"], keyof _1190.ConsensusParams>, never>;
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string;
                }[] & ({
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string;
                } & {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I_5["validators"][number]["pubKey"], keyof _1192.PublicKey>, never>;
                    power?: string;
                } & Record<Exclude<keyof I_5["validators"][number], keyof _1190.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_5["validators"], keyof {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string;
                }[]>, never>;
                appStateBytes?: Uint8Array;
                initialHeight?: string;
            } & Record<Exclude<keyof I_5, keyof _1190.RequestInitChain>, never>>(object: I_5): _1190.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _1190.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestQuery;
            fromJSON(object: any): _1190.RequestQuery;
            toJSON(message: _1190.RequestQuery): unknown;
            fromPartial<I_6 extends {
                data?: Uint8Array;
                path?: string;
                height?: string;
                prove?: boolean;
            } & {
                data?: Uint8Array;
                path?: string;
                height?: string;
                prove?: boolean;
            } & Record<Exclude<keyof I_6, keyof _1190.RequestQuery>, never>>(object: I_6): _1190.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _1190.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestBeginBlock;
            fromJSON(object: any): _1190.RequestBeginBlock;
            toJSON(message: _1190.RequestBeginBlock): unknown;
            fromPartial<I_7 extends {
                hash?: Uint8Array;
                header?: {
                    version?: {
                        block?: string;
                        app?: string;
                    };
                    chainId?: string;
                    height?: string;
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
                            power?: string;
                        };
                        signedLastBlock?: boolean;
                    }[];
                };
                byzantineValidators?: {
                    type?: _1190.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: string;
                    };
                    height?: string;
                    time?: Date;
                    totalVotingPower?: string;
                }[];
            } & {
                hash?: Uint8Array;
                header?: {
                    version?: {
                        block?: string;
                        app?: string;
                    };
                    chainId?: string;
                    height?: string;
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
                        block?: string;
                        app?: string;
                    } & {
                        block?: string;
                        app?: string;
                    } & Record<Exclude<keyof I_7["header"]["version"], keyof _1210.Consensus>, never>;
                    chainId?: string;
                    height?: string;
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
                        } & Record<Exclude<keyof I_7["header"]["lastBlockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_7["header"]["lastBlockId"], keyof _1206.BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I_7["header"], keyof _1206.Header>, never>;
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: string;
                        };
                        signedLastBlock?: boolean;
                    }[];
                } & {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: string;
                        };
                        signedLastBlock?: boolean;
                    }[] & ({
                        validator?: {
                            address?: Uint8Array;
                            power?: string;
                        };
                        signedLastBlock?: boolean;
                    } & {
                        validator?: {
                            address?: Uint8Array;
                            power?: string;
                        } & {
                            address?: Uint8Array;
                            power?: string;
                        } & Record<Exclude<keyof I_7["lastCommitInfo"]["votes"][number]["validator"], keyof _1190.Validator>, never>;
                        signedLastBlock?: boolean;
                    } & Record<Exclude<keyof I_7["lastCommitInfo"]["votes"][number], keyof _1190.VoteInfo>, never>)[] & Record<Exclude<keyof I_7["lastCommitInfo"]["votes"], keyof {
                        validator?: {
                            address?: Uint8Array;
                            power?: string;
                        };
                        signedLastBlock?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_7["lastCommitInfo"], keyof _1190.LastCommitInfo>, never>;
                byzantineValidators?: {
                    type?: _1190.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: string;
                    };
                    height?: string;
                    time?: Date;
                    totalVotingPower?: string;
                }[] & ({
                    type?: _1190.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: string;
                    };
                    height?: string;
                    time?: Date;
                    totalVotingPower?: string;
                } & {
                    type?: _1190.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: string;
                    } & {
                        address?: Uint8Array;
                        power?: string;
                    } & Record<Exclude<keyof I_7["byzantineValidators"][number]["validator"], keyof _1190.Validator>, never>;
                    height?: string;
                    time?: Date;
                    totalVotingPower?: string;
                } & Record<Exclude<keyof I_7["byzantineValidators"][number], keyof _1190.Evidence>, never>)[] & Record<Exclude<keyof I_7["byzantineValidators"], keyof {
                    type?: _1190.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: string;
                    };
                    height?: string;
                    time?: Date;
                    totalVotingPower?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_7, keyof _1190.RequestBeginBlock>, never>>(object: I_7): _1190.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _1190.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestCheckTx;
            fromJSON(object: any): _1190.RequestCheckTx;
            toJSON(message: _1190.RequestCheckTx): unknown;
            fromPartial<I_8 extends {
                tx?: Uint8Array;
                type?: _1190.CheckTxType;
            } & {
                tx?: Uint8Array;
                type?: _1190.CheckTxType;
            } & Record<Exclude<keyof I_8, keyof _1190.RequestCheckTx>, never>>(object: I_8): _1190.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _1190.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestDeliverTx;
            fromJSON(object: any): _1190.RequestDeliverTx;
            toJSON(message: _1190.RequestDeliverTx): unknown;
            fromPartial<I_9 extends {
                tx?: Uint8Array;
            } & {
                tx?: Uint8Array;
            } & Record<Exclude<keyof I_9, "tx">, never>>(object: I_9): _1190.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _1190.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestEndBlock;
            fromJSON(object: any): _1190.RequestEndBlock;
            toJSON(message: _1190.RequestEndBlock): unknown;
            fromPartial<I_10 extends {
                height?: string;
            } & {
                height?: string;
            } & Record<Exclude<keyof I_10, "height">, never>>(object: I_10): _1190.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _1190.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestCommit;
            fromJSON(_: any): _1190.RequestCommit;
            toJSON(_: _1190.RequestCommit): unknown;
            fromPartial<I_11 extends {} & {} & Record<Exclude<keyof I_11, never>, never>>(_: I_11): _1190.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _1190.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestListSnapshots;
            fromJSON(_: any): _1190.RequestListSnapshots;
            toJSON(_: _1190.RequestListSnapshots): unknown;
            fromPartial<I_12 extends {} & {} & Record<Exclude<keyof I_12, never>, never>>(_: I_12): _1190.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _1190.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestOfferSnapshot;
            fromJSON(object: any): _1190.RequestOfferSnapshot;
            toJSON(message: _1190.RequestOfferSnapshot): unknown;
            fromPartial<I_13 extends {
                snapshot?: {
                    height?: string;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            } & {
                snapshot?: {
                    height?: string;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                } & {
                    height?: string;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                } & Record<Exclude<keyof I_13["snapshot"], keyof _1190.Snapshot>, never>;
                appHash?: Uint8Array;
            } & Record<Exclude<keyof I_13, keyof _1190.RequestOfferSnapshot>, never>>(object: I_13): _1190.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _1190.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestLoadSnapshotChunk;
            fromJSON(object: any): _1190.RequestLoadSnapshotChunk;
            toJSON(message: _1190.RequestLoadSnapshotChunk): unknown;
            fromPartial<I_14 extends {
                height?: string;
                format?: number;
                chunk?: number;
            } & {
                height?: string;
                format?: number;
                chunk?: number;
            } & Record<Exclude<keyof I_14, keyof _1190.RequestLoadSnapshotChunk>, never>>(object: I_14): _1190.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _1190.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestApplySnapshotChunk;
            fromJSON(object: any): _1190.RequestApplySnapshotChunk;
            toJSON(message: _1190.RequestApplySnapshotChunk): unknown;
            fromPartial<I_15 extends {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            } & {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            } & Record<Exclude<keyof I_15, keyof _1190.RequestApplySnapshotChunk>, never>>(object: I_15): _1190.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _1190.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.Response;
            fromJSON(object: any): _1190.Response;
            toJSON(message: _1190.Response): unknown;
            fromPartial<I_16 extends {
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
                    appVersion?: string;
                    lastBlockHeight?: string;
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
                            maxBytes?: string;
                            maxGas?: string;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string;
                            maxAgeDuration?: string;
                            maxBytes?: string;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string;
                    }[];
                    appHash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: string;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: string;
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
                    gasWanted?: string;
                    gasUsed?: string;
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
                    gasWanted?: string;
                    gasUsed?: string;
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
                        power?: string;
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: string;
                            maxGas?: string;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string;
                            maxAgeDuration?: string;
                            maxBytes?: string;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string;
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
                    retainHeight?: string;
                };
                listSnapshots?: {
                    snapshots?: {
                        height?: string;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offerSnapshot?: {
                    result?: _1190.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _1190.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            } & {
                exception?: {
                    error?: string;
                } & {
                    error?: string;
                } & Record<Exclude<keyof I_16["exception"], "error">, never>;
                echo?: {
                    message?: string;
                } & {
                    message?: string;
                } & Record<Exclude<keyof I_16["echo"], "message">, never>;
                flush?: {} & {} & Record<Exclude<keyof I_16["flush"], never>, never>;
                info?: {
                    data?: string;
                    version?: string;
                    appVersion?: string;
                    lastBlockHeight?: string;
                    lastBlockAppHash?: Uint8Array;
                } & {
                    data?: string;
                    version?: string;
                    appVersion?: string;
                    lastBlockHeight?: string;
                    lastBlockAppHash?: Uint8Array;
                } & Record<Exclude<keyof I_16["info"], keyof _1190.ResponseInfo>, never>;
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
                } & {
                    code?: number;
                    log?: string;
                    info?: string;
                } & Record<Exclude<keyof I_16["setOption"], keyof _1190.ResponseSetOption>, never>;
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: string;
                            maxGas?: string;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string;
                            maxAgeDuration?: string;
                            maxBytes?: string;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string;
                    }[];
                    appHash?: Uint8Array;
                } & {
                    consensusParams?: {
                        block?: {
                            maxBytes?: string;
                            maxGas?: string;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string;
                            maxAgeDuration?: string;
                            maxBytes?: string;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string;
                        };
                    } & {
                        block?: {
                            maxBytes?: string;
                            maxGas?: string;
                        } & {
                            maxBytes?: string;
                            maxGas?: string;
                        } & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["block"], keyof _1190.BlockParams>, never>;
                        evidence?: {
                            maxAgeNumBlocks?: string;
                            maxAgeDuration?: string;
                            maxBytes?: string;
                        } & {
                            maxAgeNumBlocks?: string;
                            maxAgeDuration?: string;
                            maxBytes?: string;
                        } & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["evidence"], keyof _1204.EvidenceParams>, never>;
                        validator?: {
                            pubKeyTypes?: string[];
                        } & {
                            pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["validator"], "pubKeyTypes">, never>;
                        version?: {
                            appVersion?: string;
                        } & {
                            appVersion?: string;
                        } & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["version"], "appVersion">, never>;
                    } & Record<Exclude<keyof I_16["initChain"]["consensusParams"], keyof _1190.ConsensusParams>, never>;
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string;
                    }[] & ({
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string;
                    } & {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I_16["initChain"]["validators"][number]["pubKey"], keyof _1192.PublicKey>, never>;
                        power?: string;
                    } & Record<Exclude<keyof I_16["initChain"]["validators"][number], keyof _1190.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_16["initChain"]["validators"], keyof {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string;
                    }[]>, never>;
                    appHash?: Uint8Array;
                } & Record<Exclude<keyof I_16["initChain"], keyof _1190.ResponseInitChain>, never>;
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: string;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: string;
                    codespace?: string;
                } & {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: string;
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
                        } & Record<Exclude<keyof I_16["query"]["proofOps"]["ops"][number], keyof _1194.ProofOp>, never>)[] & Record<Exclude<keyof I_16["query"]["proofOps"]["ops"], keyof {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["query"]["proofOps"], "ops">, never>;
                    height?: string;
                    codespace?: string;
                } & Record<Exclude<keyof I_16["query"], keyof _1190.ResponseQuery>, never>;
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
                        } & Record<Exclude<keyof I_16["beginBlock"]["events"][number]["attributes"][number], keyof _1190.EventAttribute>, never>)[] & Record<Exclude<keyof I_16["beginBlock"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["beginBlock"]["events"][number], keyof _1190.Event>, never>)[] & Record<Exclude<keyof I_16["beginBlock"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                } & Record<Exclude<keyof I_16["beginBlock"], "events">, never>;
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string;
                    gasUsed?: string;
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
                    gasWanted?: string;
                    gasUsed?: string;
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
                        } & Record<Exclude<keyof I_16["checkTx"]["events"][number]["attributes"][number], keyof _1190.EventAttribute>, never>)[] & Record<Exclude<keyof I_16["checkTx"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["checkTx"]["events"][number], keyof _1190.Event>, never>)[] & Record<Exclude<keyof I_16["checkTx"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                    codespace?: string;
                } & Record<Exclude<keyof I_16["checkTx"], keyof _1190.ResponseCheckTx>, never>;
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string;
                    gasUsed?: string;
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
                    gasWanted?: string;
                    gasUsed?: string;
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
                        } & Record<Exclude<keyof I_16["deliverTx"]["events"][number]["attributes"][number], keyof _1190.EventAttribute>, never>)[] & Record<Exclude<keyof I_16["deliverTx"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["deliverTx"]["events"][number], keyof _1190.Event>, never>)[] & Record<Exclude<keyof I_16["deliverTx"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                    codespace?: string;
                } & Record<Exclude<keyof I_16["deliverTx"], keyof _1190.ResponseDeliverTx>, never>;
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string;
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: string;
                            maxGas?: string;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string;
                            maxAgeDuration?: string;
                            maxBytes?: string;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string;
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
                        power?: string;
                    }[] & ({
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string;
                    } & {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I_16["endBlock"]["validatorUpdates"][number]["pubKey"], keyof _1192.PublicKey>, never>;
                        power?: string;
                    } & Record<Exclude<keyof I_16["endBlock"]["validatorUpdates"][number], keyof _1190.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_16["endBlock"]["validatorUpdates"], keyof {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string;
                    }[]>, never>;
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: string;
                            maxGas?: string;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string;
                            maxAgeDuration?: string;
                            maxBytes?: string;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string;
                        };
                    } & {
                        block?: {
                            maxBytes?: string;
                            maxGas?: string;
                        } & {
                            maxBytes?: string;
                            maxGas?: string;
                        } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["block"], keyof _1190.BlockParams>, never>;
                        evidence?: {
                            maxAgeNumBlocks?: string;
                            maxAgeDuration?: string;
                            maxBytes?: string;
                        } & {
                            maxAgeNumBlocks?: string;
                            maxAgeDuration?: string;
                            maxBytes?: string;
                        } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["evidence"], keyof _1204.EvidenceParams>, never>;
                        validator?: {
                            pubKeyTypes?: string[];
                        } & {
                            pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["validator"], "pubKeyTypes">, never>;
                        version?: {
                            appVersion?: string;
                        } & {
                            appVersion?: string;
                        } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["version"], "appVersion">, never>;
                    } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"], keyof _1190.ConsensusParams>, never>;
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
                        } & Record<Exclude<keyof I_16["endBlock"]["events"][number]["attributes"][number], keyof _1190.EventAttribute>, never>)[] & Record<Exclude<keyof I_16["endBlock"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["endBlock"]["events"][number], keyof _1190.Event>, never>)[] & Record<Exclude<keyof I_16["endBlock"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                } & Record<Exclude<keyof I_16["endBlock"], keyof _1190.ResponseEndBlock>, never>;
                commit?: {
                    data?: Uint8Array;
                    retainHeight?: string;
                } & {
                    data?: Uint8Array;
                    retainHeight?: string;
                } & Record<Exclude<keyof I_16["commit"], keyof _1190.ResponseCommit>, never>;
                listSnapshots?: {
                    snapshots?: {
                        height?: string;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                } & {
                    snapshots?: {
                        height?: string;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[] & ({
                        height?: string;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    } & {
                        height?: string;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    } & Record<Exclude<keyof I_16["listSnapshots"]["snapshots"][number], keyof _1190.Snapshot>, never>)[] & Record<Exclude<keyof I_16["listSnapshots"]["snapshots"], keyof {
                        height?: string;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_16["listSnapshots"], "snapshots">, never>;
                offerSnapshot?: {
                    result?: _1190.ResponseOfferSnapshot_Result;
                } & {
                    result?: _1190.ResponseOfferSnapshot_Result;
                } & Record<Exclude<keyof I_16["offerSnapshot"], "result">, never>;
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                } & {
                    chunk?: Uint8Array;
                } & Record<Exclude<keyof I_16["loadSnapshotChunk"], "chunk">, never>;
                applySnapshotChunk?: {
                    result?: _1190.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                } & {
                    result?: _1190.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[] & number[] & Record<Exclude<keyof I_16["applySnapshotChunk"]["refetchChunks"], keyof number[]>, never>;
                    rejectSenders?: string[] & string[] & Record<Exclude<keyof I_16["applySnapshotChunk"]["rejectSenders"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_16["applySnapshotChunk"], keyof _1190.ResponseApplySnapshotChunk>, never>;
            } & Record<Exclude<keyof I_16, keyof _1190.Response>, never>>(object: I_16): _1190.Response;
        };
        ResponseException: {
            encode(message: _1190.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseException;
            fromJSON(object: any): _1190.ResponseException;
            toJSON(message: _1190.ResponseException): unknown;
            fromPartial<I_17 extends {
                error?: string;
            } & {
                error?: string;
            } & Record<Exclude<keyof I_17, "error">, never>>(object: I_17): _1190.ResponseException;
        };
        ResponseEcho: {
            encode(message: _1190.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseEcho;
            fromJSON(object: any): _1190.ResponseEcho;
            toJSON(message: _1190.ResponseEcho): unknown;
            fromPartial<I_18 extends {
                message?: string;
            } & {
                message?: string;
            } & Record<Exclude<keyof I_18, "message">, never>>(object: I_18): _1190.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _1190.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseFlush;
            fromJSON(_: any): _1190.ResponseFlush;
            toJSON(_: _1190.ResponseFlush): unknown;
            fromPartial<I_19 extends {} & {} & Record<Exclude<keyof I_19, never>, never>>(_: I_19): _1190.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _1190.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseInfo;
            fromJSON(object: any): _1190.ResponseInfo;
            toJSON(message: _1190.ResponseInfo): unknown;
            fromPartial<I_20 extends {
                data?: string;
                version?: string;
                appVersion?: string;
                lastBlockHeight?: string;
                lastBlockAppHash?: Uint8Array;
            } & {
                data?: string;
                version?: string;
                appVersion?: string;
                lastBlockHeight?: string;
                lastBlockAppHash?: Uint8Array;
            } & Record<Exclude<keyof I_20, keyof _1190.ResponseInfo>, never>>(object: I_20): _1190.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _1190.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseSetOption;
            fromJSON(object: any): _1190.ResponseSetOption;
            toJSON(message: _1190.ResponseSetOption): unknown;
            fromPartial<I_21 extends {
                code?: number;
                log?: string;
                info?: string;
            } & {
                code?: number;
                log?: string;
                info?: string;
            } & Record<Exclude<keyof I_21, keyof _1190.ResponseSetOption>, never>>(object: I_21): _1190.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _1190.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseInitChain;
            fromJSON(object: any): _1190.ResponseInitChain;
            toJSON(message: _1190.ResponseInitChain): unknown;
            fromPartial<I_22 extends {
                consensusParams?: {
                    block?: {
                        maxBytes?: string;
                        maxGas?: string;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string;
                        maxAgeDuration?: string;
                        maxBytes?: string;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string;
                }[];
                appHash?: Uint8Array;
            } & {
                consensusParams?: {
                    block?: {
                        maxBytes?: string;
                        maxGas?: string;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string;
                        maxAgeDuration?: string;
                        maxBytes?: string;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string;
                    };
                } & {
                    block?: {
                        maxBytes?: string;
                        maxGas?: string;
                    } & {
                        maxBytes?: string;
                        maxGas?: string;
                    } & Record<Exclude<keyof I_22["consensusParams"]["block"], keyof _1190.BlockParams>, never>;
                    evidence?: {
                        maxAgeNumBlocks?: string;
                        maxAgeDuration?: string;
                        maxBytes?: string;
                    } & {
                        maxAgeNumBlocks?: string;
                        maxAgeDuration?: string;
                        maxBytes?: string;
                    } & Record<Exclude<keyof I_22["consensusParams"]["evidence"], keyof _1204.EvidenceParams>, never>;
                    validator?: {
                        pubKeyTypes?: string[];
                    } & {
                        pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_22["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_22["consensusParams"]["validator"], "pubKeyTypes">, never>;
                    version?: {
                        appVersion?: string;
                    } & {
                        appVersion?: string;
                    } & Record<Exclude<keyof I_22["consensusParams"]["version"], "appVersion">, never>;
                } & Record<Exclude<keyof I_22["consensusParams"], keyof _1190.ConsensusParams>, never>;
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string;
                }[] & ({
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string;
                } & {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I_22["validators"][number]["pubKey"], keyof _1192.PublicKey>, never>;
                    power?: string;
                } & Record<Exclude<keyof I_22["validators"][number], keyof _1190.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_22["validators"], keyof {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string;
                }[]>, never>;
                appHash?: Uint8Array;
            } & Record<Exclude<keyof I_22, keyof _1190.ResponseInitChain>, never>>(object: I_22): _1190.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _1190.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseQuery;
            fromJSON(object: any): _1190.ResponseQuery;
            toJSON(message: _1190.ResponseQuery): unknown;
            fromPartial<I_23 extends {
                code?: number;
                log?: string;
                info?: string;
                index?: string;
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: string;
                codespace?: string;
            } & {
                code?: number;
                log?: string;
                info?: string;
                index?: string;
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
                    } & Record<Exclude<keyof I_23["proofOps"]["ops"][number], keyof _1194.ProofOp>, never>)[] & Record<Exclude<keyof I_23["proofOps"]["ops"], keyof {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_23["proofOps"], "ops">, never>;
                height?: string;
                codespace?: string;
            } & Record<Exclude<keyof I_23, keyof _1190.ResponseQuery>, never>>(object: I_23): _1190.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _1190.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseBeginBlock;
            fromJSON(object: any): _1190.ResponseBeginBlock;
            toJSON(message: _1190.ResponseBeginBlock): unknown;
            fromPartial<I_24 extends {
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
                    } & Record<Exclude<keyof I_24["events"][number]["attributes"][number], keyof _1190.EventAttribute>, never>)[] & Record<Exclude<keyof I_24["events"][number]["attributes"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_24["events"][number], keyof _1190.Event>, never>)[] & Record<Exclude<keyof I_24["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_24, "events">, never>>(object: I_24): _1190.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _1190.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseCheckTx;
            fromJSON(object: any): _1190.ResponseCheckTx;
            toJSON(message: _1190.ResponseCheckTx): unknown;
            fromPartial<I_25 extends {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: string;
                gasUsed?: string;
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
                gasWanted?: string;
                gasUsed?: string;
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
                    } & Record<Exclude<keyof I_25["events"][number]["attributes"][number], keyof _1190.EventAttribute>, never>)[] & Record<Exclude<keyof I_25["events"][number]["attributes"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_25["events"][number], keyof _1190.Event>, never>)[] & Record<Exclude<keyof I_25["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[]>, never>;
                codespace?: string;
            } & Record<Exclude<keyof I_25, keyof _1190.ResponseCheckTx>, never>>(object: I_25): _1190.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _1190.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseDeliverTx;
            fromJSON(object: any): _1190.ResponseDeliverTx;
            toJSON(message: _1190.ResponseDeliverTx): unknown;
            fromPartial<I_26 extends {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: string;
                gasUsed?: string;
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
                gasWanted?: string;
                gasUsed?: string;
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
                    } & Record<Exclude<keyof I_26["events"][number]["attributes"][number], keyof _1190.EventAttribute>, never>)[] & Record<Exclude<keyof I_26["events"][number]["attributes"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_26["events"][number], keyof _1190.Event>, never>)[] & Record<Exclude<keyof I_26["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[]>, never>;
                codespace?: string;
            } & Record<Exclude<keyof I_26, keyof _1190.ResponseDeliverTx>, never>>(object: I_26): _1190.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _1190.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseEndBlock;
            fromJSON(object: any): _1190.ResponseEndBlock;
            toJSON(message: _1190.ResponseEndBlock): unknown;
            fromPartial<I_27 extends {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string;
                }[];
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: string;
                        maxGas?: string;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string;
                        maxAgeDuration?: string;
                        maxBytes?: string;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string;
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
                    power?: string;
                }[] & ({
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string;
                } & {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I_27["validatorUpdates"][number]["pubKey"], keyof _1192.PublicKey>, never>;
                    power?: string;
                } & Record<Exclude<keyof I_27["validatorUpdates"][number], keyof _1190.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_27["validatorUpdates"], keyof {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string;
                }[]>, never>;
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: string;
                        maxGas?: string;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string;
                        maxAgeDuration?: string;
                        maxBytes?: string;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string;
                    };
                } & {
                    block?: {
                        maxBytes?: string;
                        maxGas?: string;
                    } & {
                        maxBytes?: string;
                        maxGas?: string;
                    } & Record<Exclude<keyof I_27["consensusParamUpdates"]["block"], keyof _1190.BlockParams>, never>;
                    evidence?: {
                        maxAgeNumBlocks?: string;
                        maxAgeDuration?: string;
                        maxBytes?: string;
                    } & {
                        maxAgeNumBlocks?: string;
                        maxAgeDuration?: string;
                        maxBytes?: string;
                    } & Record<Exclude<keyof I_27["consensusParamUpdates"]["evidence"], keyof _1204.EvidenceParams>, never>;
                    validator?: {
                        pubKeyTypes?: string[];
                    } & {
                        pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_27["consensusParamUpdates"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_27["consensusParamUpdates"]["validator"], "pubKeyTypes">, never>;
                    version?: {
                        appVersion?: string;
                    } & {
                        appVersion?: string;
                    } & Record<Exclude<keyof I_27["consensusParamUpdates"]["version"], "appVersion">, never>;
                } & Record<Exclude<keyof I_27["consensusParamUpdates"], keyof _1190.ConsensusParams>, never>;
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
                    } & Record<Exclude<keyof I_27["events"][number]["attributes"][number], keyof _1190.EventAttribute>, never>)[] & Record<Exclude<keyof I_27["events"][number]["attributes"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_27["events"][number], keyof _1190.Event>, never>)[] & Record<Exclude<keyof I_27["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_27, keyof _1190.ResponseEndBlock>, never>>(object: I_27): _1190.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _1190.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseCommit;
            fromJSON(object: any): _1190.ResponseCommit;
            toJSON(message: _1190.ResponseCommit): unknown;
            fromPartial<I_28 extends {
                data?: Uint8Array;
                retainHeight?: string;
            } & {
                data?: Uint8Array;
                retainHeight?: string;
            } & Record<Exclude<keyof I_28, keyof _1190.ResponseCommit>, never>>(object: I_28): _1190.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _1190.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseListSnapshots;
            fromJSON(object: any): _1190.ResponseListSnapshots;
            toJSON(message: _1190.ResponseListSnapshots): unknown;
            fromPartial<I_29 extends {
                snapshots?: {
                    height?: string;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            } & {
                snapshots?: {
                    height?: string;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[] & ({
                    height?: string;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                } & {
                    height?: string;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                } & Record<Exclude<keyof I_29["snapshots"][number], keyof _1190.Snapshot>, never>)[] & Record<Exclude<keyof I_29["snapshots"], keyof {
                    height?: string;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_29, "snapshots">, never>>(object: I_29): _1190.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _1190.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseOfferSnapshot;
            fromJSON(object: any): _1190.ResponseOfferSnapshot;
            toJSON(message: _1190.ResponseOfferSnapshot): unknown;
            fromPartial<I_30 extends {
                result?: _1190.ResponseOfferSnapshot_Result;
            } & {
                result?: _1190.ResponseOfferSnapshot_Result;
            } & Record<Exclude<keyof I_30, "result">, never>>(object: I_30): _1190.ResponseOfferSnapshot;
        };
        ResponseOfferSnapshot_Result: typeof _1190.ResponseOfferSnapshot_Result;
        ResponseLoadSnapshotChunk: {
            encode(message: _1190.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _1190.ResponseLoadSnapshotChunk;
            toJSON(message: _1190.ResponseLoadSnapshotChunk): unknown;
            fromPartial<I_31 extends {
                chunk?: Uint8Array;
            } & {
                chunk?: Uint8Array;
            } & Record<Exclude<keyof I_31, "chunk">, never>>(object: I_31): _1190.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _1190.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseApplySnapshotChunk;
            fromJSON(object: any): _1190.ResponseApplySnapshotChunk;
            toJSON(message: _1190.ResponseApplySnapshotChunk): unknown;
            fromPartial<I_32 extends {
                result?: _1190.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            } & {
                result?: _1190.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[] & number[] & Record<Exclude<keyof I_32["refetchChunks"], keyof number[]>, never>;
                rejectSenders?: string[] & string[] & Record<Exclude<keyof I_32["rejectSenders"], keyof string[]>, never>;
            } & Record<Exclude<keyof I_32, keyof _1190.ResponseApplySnapshotChunk>, never>>(object: I_32): _1190.ResponseApplySnapshotChunk;
        };
        ResponseApplySnapshotChunk_Result: typeof _1190.ResponseApplySnapshotChunk_Result;
        ConsensusParams: {
            encode(message: _1190.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ConsensusParams;
            fromJSON(object: any): _1190.ConsensusParams;
            toJSON(message: _1190.ConsensusParams): unknown;
            fromPartial<I_33 extends {
                block?: {
                    maxBytes?: string;
                    maxGas?: string;
                };
                evidence?: {
                    maxAgeNumBlocks?: string;
                    maxAgeDuration?: string;
                    maxBytes?: string;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: string;
                };
            } & {
                block?: {
                    maxBytes?: string;
                    maxGas?: string;
                } & {
                    maxBytes?: string;
                    maxGas?: string;
                } & Record<Exclude<keyof I_33["block"], keyof _1190.BlockParams>, never>;
                evidence?: {
                    maxAgeNumBlocks?: string;
                    maxAgeDuration?: string;
                    maxBytes?: string;
                } & {
                    maxAgeNumBlocks?: string;
                    maxAgeDuration?: string;
                    maxBytes?: string;
                } & Record<Exclude<keyof I_33["evidence"], keyof _1204.EvidenceParams>, never>;
                validator?: {
                    pubKeyTypes?: string[];
                } & {
                    pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_33["validator"]["pubKeyTypes"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_33["validator"], "pubKeyTypes">, never>;
                version?: {
                    appVersion?: string;
                } & {
                    appVersion?: string;
                } & Record<Exclude<keyof I_33["version"], "appVersion">, never>;
            } & Record<Exclude<keyof I_33, keyof _1190.ConsensusParams>, never>>(object: I_33): _1190.ConsensusParams;
        };
        BlockParams: {
            encode(message: _1190.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.BlockParams;
            fromJSON(object: any): _1190.BlockParams;
            toJSON(message: _1190.BlockParams): unknown;
            fromPartial<I_34 extends {
                maxBytes?: string;
                maxGas?: string;
            } & {
                maxBytes?: string;
                maxGas?: string;
            } & Record<Exclude<keyof I_34, keyof _1190.BlockParams>, never>>(object: I_34): _1190.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _1190.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.LastCommitInfo;
            fromJSON(object: any): _1190.LastCommitInfo;
            toJSON(message: _1190.LastCommitInfo): unknown;
            fromPartial<I_35 extends {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: string;
                    };
                    signedLastBlock?: boolean;
                }[];
            } & {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: string;
                    };
                    signedLastBlock?: boolean;
                }[] & ({
                    validator?: {
                        address?: Uint8Array;
                        power?: string;
                    };
                    signedLastBlock?: boolean;
                } & {
                    validator?: {
                        address?: Uint8Array;
                        power?: string;
                    } & {
                        address?: Uint8Array;
                        power?: string;
                    } & Record<Exclude<keyof I_35["votes"][number]["validator"], keyof _1190.Validator>, never>;
                    signedLastBlock?: boolean;
                } & Record<Exclude<keyof I_35["votes"][number], keyof _1190.VoteInfo>, never>)[] & Record<Exclude<keyof I_35["votes"], keyof {
                    validator?: {
                        address?: Uint8Array;
                        power?: string;
                    };
                    signedLastBlock?: boolean;
                }[]>, never>;
            } & Record<Exclude<keyof I_35, keyof _1190.LastCommitInfo>, never>>(object: I_35): _1190.LastCommitInfo;
        };
        Event: {
            encode(message: _1190.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.Event;
            fromJSON(object: any): _1190.Event;
            toJSON(message: _1190.Event): unknown;
            fromPartial<I_36 extends {
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
                } & Record<Exclude<keyof I_36["attributes"][number], keyof _1190.EventAttribute>, never>)[] & Record<Exclude<keyof I_36["attributes"], keyof {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[]>, never>;
            } & Record<Exclude<keyof I_36, keyof _1190.Event>, never>>(object: I_36): _1190.Event;
        };
        EventAttribute: {
            encode(message: _1190.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.EventAttribute;
            fromJSON(object: any): _1190.EventAttribute;
            toJSON(message: _1190.EventAttribute): unknown;
            fromPartial<I_37 extends {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            } & Record<Exclude<keyof I_37, keyof _1190.EventAttribute>, never>>(object: I_37): _1190.EventAttribute;
        };
        TxResult: {
            encode(message: _1190.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.TxResult;
            fromJSON(object: any): _1190.TxResult;
            toJSON(message: _1190.TxResult): unknown;
            fromPartial<I_38 extends {
                height?: string;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string;
                    gasUsed?: string;
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
                height?: string;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string;
                    gasUsed?: string;
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
                    gasWanted?: string;
                    gasUsed?: string;
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
                        } & Record<Exclude<keyof I_38["result"]["events"][number]["attributes"][number], keyof _1190.EventAttribute>, never>)[] & Record<Exclude<keyof I_38["result"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_38["result"]["events"][number], keyof _1190.Event>, never>)[] & Record<Exclude<keyof I_38["result"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                    codespace?: string;
                } & Record<Exclude<keyof I_38["result"], keyof _1190.ResponseDeliverTx>, never>;
            } & Record<Exclude<keyof I_38, keyof _1190.TxResult>, never>>(object: I_38): _1190.TxResult;
        };
        Validator: {
            encode(message: _1190.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.Validator;
            fromJSON(object: any): _1190.Validator;
            toJSON(message: _1190.Validator): unknown;
            fromPartial<I_39 extends {
                address?: Uint8Array;
                power?: string;
            } & {
                address?: Uint8Array;
                power?: string;
            } & Record<Exclude<keyof I_39, keyof _1190.Validator>, never>>(object: I_39): _1190.Validator;
        };
        ValidatorUpdate: {
            encode(message: _1190.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ValidatorUpdate;
            fromJSON(object: any): _1190.ValidatorUpdate;
            toJSON(message: _1190.ValidatorUpdate): unknown;
            fromPartial<I_40 extends {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: string;
            } & {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & Record<Exclude<keyof I_40["pubKey"], keyof _1192.PublicKey>, never>;
                power?: string;
            } & Record<Exclude<keyof I_40, keyof _1190.ValidatorUpdate>, never>>(object: I_40): _1190.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _1190.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.VoteInfo;
            fromJSON(object: any): _1190.VoteInfo;
            toJSON(message: _1190.VoteInfo): unknown;
            fromPartial<I_41 extends {
                validator?: {
                    address?: Uint8Array;
                    power?: string;
                };
                signedLastBlock?: boolean;
            } & {
                validator?: {
                    address?: Uint8Array;
                    power?: string;
                } & {
                    address?: Uint8Array;
                    power?: string;
                } & Record<Exclude<keyof I_41["validator"], keyof _1190.Validator>, never>;
                signedLastBlock?: boolean;
            } & Record<Exclude<keyof I_41, keyof _1190.VoteInfo>, never>>(object: I_41): _1190.VoteInfo;
        };
        Evidence: {
            encode(message: _1190.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.Evidence;
            fromJSON(object: any): _1190.Evidence;
            toJSON(message: _1190.Evidence): unknown;
            fromPartial<I_42 extends {
                type?: _1190.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: string;
                };
                height?: string;
                time?: Date;
                totalVotingPower?: string;
            } & {
                type?: _1190.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: string;
                } & {
                    address?: Uint8Array;
                    power?: string;
                } & Record<Exclude<keyof I_42["validator"], keyof _1190.Validator>, never>;
                height?: string;
                time?: Date;
                totalVotingPower?: string;
            } & Record<Exclude<keyof I_42, keyof _1190.Evidence>, never>>(object: I_42): _1190.Evidence;
        };
        Snapshot: {
            encode(message: _1190.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.Snapshot;
            fromJSON(object: any): _1190.Snapshot;
            toJSON(message: _1190.Snapshot): unknown;
            fromPartial<I_43 extends {
                height?: string;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            } & {
                height?: string;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            } & Record<Exclude<keyof I_43, keyof _1190.Snapshot>, never>>(object: I_43): _1190.Snapshot;
        };
        ABCIApplicationClientImpl: typeof _1190.ABCIApplicationClientImpl;
    };
    const crypto: {
        Proof: {
            encode(message: _1194.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1194.Proof;
            fromJSON(object: any): _1194.Proof;
            toJSON(message: _1194.Proof): unknown;
            fromPartial<I extends {
                total?: string;
                index?: string;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            } & {
                total?: string;
                index?: string;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["aunts"], keyof Uint8Array[]>, never>;
            } & Record<Exclude<keyof I, keyof _1194.Proof>, never>>(object: I): _1194.Proof;
        };
        ValueOp: {
            encode(message: _1194.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1194.ValueOp;
            fromJSON(object: any): _1194.ValueOp;
            toJSON(message: _1194.ValueOp): unknown;
            fromPartial<I_1 extends {
                key?: Uint8Array;
                proof?: {
                    total?: string;
                    index?: string;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            } & {
                key?: Uint8Array;
                proof?: {
                    total?: string;
                    index?: string;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                } & {
                    total?: string;
                    index?: string;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_1["proof"]["aunts"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_1["proof"], keyof _1194.Proof>, never>;
            } & Record<Exclude<keyof I_1, keyof _1194.ValueOp>, never>>(object: I_1): _1194.ValueOp;
        };
        DominoOp: {
            encode(message: _1194.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1194.DominoOp;
            fromJSON(object: any): _1194.DominoOp;
            toJSON(message: _1194.DominoOp): unknown;
            fromPartial<I_2 extends {
                key?: string;
                input?: string;
                output?: string;
            } & {
                key?: string;
                input?: string;
                output?: string;
            } & Record<Exclude<keyof I_2, keyof _1194.DominoOp>, never>>(object: I_2): _1194.DominoOp;
        };
        ProofOp: {
            encode(message: _1194.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1194.ProofOp;
            fromJSON(object: any): _1194.ProofOp;
            toJSON(message: _1194.ProofOp): unknown;
            fromPartial<I_3 extends {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            } & {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            } & Record<Exclude<keyof I_3, keyof _1194.ProofOp>, never>>(object: I_3): _1194.ProofOp;
        };
        ProofOps: {
            encode(message: _1194.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1194.ProofOps;
            fromJSON(object: any): _1194.ProofOps;
            toJSON(message: _1194.ProofOps): unknown;
            fromPartial<I_4 extends {
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
                } & Record<Exclude<keyof I_4["ops"][number], keyof _1194.ProofOp>, never>)[] & Record<Exclude<keyof I_4["ops"], keyof {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_4, "ops">, never>>(object: I_4): _1194.ProofOps;
        };
        PublicKey: {
            encode(message: _1192.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1192.PublicKey;
            fromJSON(object: any): _1192.PublicKey;
            toJSON(message: _1192.PublicKey): unknown;
            fromPartial<I_5 extends {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & Record<Exclude<keyof I_5, keyof _1192.PublicKey>, never>>(object: I_5): _1192.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _1196.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1196.BitArray;
                fromJSON(object: any): _1196.BitArray;
                toJSON(message: _1196.BitArray): unknown;
                fromPartial<I extends {
                    bits?: string;
                    elems?: string[];
                } & {
                    bits?: string;
                    elems?: string[] & string[] & Record<Exclude<keyof I["elems"], keyof string[]>, never>;
                } & Record<Exclude<keyof I, keyof _1196.BitArray>, never>>(object: I): _1196.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _1198.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1198.ProtocolVersion;
            fromJSON(object: any): _1198.ProtocolVersion;
            toJSON(message: _1198.ProtocolVersion): unknown;
            fromPartial<I extends {
                p2p?: string;
                block?: string;
                app?: string;
            } & {
                p2p?: string;
                block?: string;
                app?: string;
            } & Record<Exclude<keyof I, keyof _1198.ProtocolVersion>, never>>(object: I): _1198.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _1198.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1198.NodeInfo;
            fromJSON(object: any): _1198.NodeInfo;
            toJSON(message: _1198.NodeInfo): unknown;
            fromPartial<I_1 extends {
                protocolVersion?: {
                    p2p?: string;
                    block?: string;
                    app?: string;
                };
                nodeId?: string;
                listenAddr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    txIndex?: string;
                    rpcAddress?: string;
                };
            } & {
                protocolVersion?: {
                    p2p?: string;
                    block?: string;
                    app?: string;
                } & {
                    p2p?: string;
                    block?: string;
                    app?: string;
                } & Record<Exclude<keyof I_1["protocolVersion"], keyof _1198.ProtocolVersion>, never>;
                nodeId?: string;
                listenAddr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    txIndex?: string;
                    rpcAddress?: string;
                } & {
                    txIndex?: string;
                    rpcAddress?: string;
                } & Record<Exclude<keyof I_1["other"], keyof _1198.NodeInfoOther>, never>;
            } & Record<Exclude<keyof I_1, keyof _1198.NodeInfo>, never>>(object: I_1): _1198.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _1198.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1198.NodeInfoOther;
            fromJSON(object: any): _1198.NodeInfoOther;
            toJSON(message: _1198.NodeInfoOther): unknown;
            fromPartial<I_2 extends {
                txIndex?: string;
                rpcAddress?: string;
            } & {
                txIndex?: string;
                rpcAddress?: string;
            } & Record<Exclude<keyof I_2, keyof _1198.NodeInfoOther>, never>>(object: I_2): _1198.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _1198.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1198.PeerInfo;
            fromJSON(object: any): _1198.PeerInfo;
            toJSON(message: _1198.PeerInfo): unknown;
            fromPartial<I_3 extends {
                id?: string;
                addressInfo?: {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                }[];
                lastConnected?: Date;
            } & {
                id?: string;
                addressInfo?: {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                }[] & ({
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                } & {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                } & Record<Exclude<keyof I_3["addressInfo"][number], keyof _1198.PeerAddressInfo>, never>)[] & Record<Exclude<keyof I_3["addressInfo"], keyof {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                }[]>, never>;
                lastConnected?: Date;
            } & Record<Exclude<keyof I_3, keyof _1198.PeerInfo>, never>>(object: I_3): _1198.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _1198.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1198.PeerAddressInfo;
            fromJSON(object: any): _1198.PeerAddressInfo;
            toJSON(message: _1198.PeerAddressInfo): unknown;
            fromPartial<I_4 extends {
                address?: string;
                lastDialSuccess?: Date;
                lastDialFailure?: Date;
                dialFailures?: number;
            } & {
                address?: string;
                lastDialSuccess?: Date;
                lastDialFailure?: Date;
                dialFailures?: number;
            } & Record<Exclude<keyof I_4, keyof _1198.PeerAddressInfo>, never>>(object: I_4): _1198.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _1208.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1208.ValidatorSet;
            fromJSON(object: any): _1208.ValidatorSet;
            toJSON(message: _1208.ValidatorSet): unknown;
            fromPartial<I extends {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                };
                totalVotingPower?: string;
            } & {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[] & ({
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                } & {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I["validators"][number]["pubKey"], keyof _1192.PublicKey>, never>;
                    votingPower?: string;
                    proposerPriority?: string;
                } & Record<Exclude<keyof I["validators"][number], keyof _1208.Validator>, never>)[] & Record<Exclude<keyof I["validators"], keyof {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[]>, never>;
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                } & {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I["proposer"]["pubKey"], keyof _1192.PublicKey>, never>;
                    votingPower?: string;
                    proposerPriority?: string;
                } & Record<Exclude<keyof I["proposer"], keyof _1208.Validator>, never>;
                totalVotingPower?: string;
            } & Record<Exclude<keyof I, keyof _1208.ValidatorSet>, never>>(object: I): _1208.ValidatorSet;
        };
        Validator: {
            encode(message: _1208.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1208.Validator;
            fromJSON(object: any): _1208.Validator;
            toJSON(message: _1208.Validator): unknown;
            fromPartial<I_1 extends {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string;
                proposerPriority?: string;
            } & {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & Record<Exclude<keyof I_1["pubKey"], keyof _1192.PublicKey>, never>;
                votingPower?: string;
                proposerPriority?: string;
            } & Record<Exclude<keyof I_1, keyof _1208.Validator>, never>>(object: I_1): _1208.Validator;
        };
        SimpleValidator: {
            encode(message: _1208.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1208.SimpleValidator;
            fromJSON(object: any): _1208.SimpleValidator;
            toJSON(message: _1208.SimpleValidator): unknown;
            fromPartial<I_2 extends {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string;
            } & {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & Record<Exclude<keyof I_2["pubKey"], keyof _1192.PublicKey>, never>;
                votingPower?: string;
            } & Record<Exclude<keyof I_2, keyof _1208.SimpleValidator>, never>>(object: I_2): _1208.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _1206.BlockIDFlag;
        blockIDFlagToJSON(object: _1206.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _1206.SignedMsgType;
        signedMsgTypeToJSON(object: _1206.SignedMsgType): string;
        BlockIDFlag: typeof _1206.BlockIDFlag;
        SignedMsgType: typeof _1206.SignedMsgType;
        PartSetHeader: {
            encode(message: _1206.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.PartSetHeader;
            fromJSON(object: any): _1206.PartSetHeader;
            toJSON(message: _1206.PartSetHeader): unknown;
            fromPartial<I_3 extends {
                total?: number;
                hash?: Uint8Array;
            } & {
                total?: number;
                hash?: Uint8Array;
            } & Record<Exclude<keyof I_3, keyof _1206.PartSetHeader>, never>>(object: I_3): _1206.PartSetHeader;
        };
        Part: {
            encode(message: _1206.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.Part;
            fromJSON(object: any): _1206.Part;
            toJSON(message: _1206.Part): unknown;
            fromPartial<I_4 extends {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: string;
                    index?: string;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            } & {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: string;
                    index?: string;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                } & {
                    total?: string;
                    index?: string;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_4["proof"]["aunts"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_4["proof"], keyof _1194.Proof>, never>;
            } & Record<Exclude<keyof I_4, keyof _1206.Part>, never>>(object: I_4): _1206.Part;
        };
        BlockID: {
            encode(message: _1206.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.BlockID;
            fromJSON(object: any): _1206.BlockID;
            toJSON(message: _1206.BlockID): unknown;
            fromPartial<I_5 extends {
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
                } & Record<Exclude<keyof I_5["partSetHeader"], keyof _1206.PartSetHeader>, never>;
            } & Record<Exclude<keyof I_5, keyof _1206.BlockID>, never>>(object: I_5): _1206.BlockID;
        };
        Header: {
            encode(message: _1206.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.Header;
            fromJSON(object: any): _1206.Header;
            toJSON(message: _1206.Header): unknown;
            fromPartial<I_6 extends {
                version?: {
                    block?: string;
                    app?: string;
                };
                chainId?: string;
                height?: string;
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
                    block?: string;
                    app?: string;
                } & {
                    block?: string;
                    app?: string;
                } & Record<Exclude<keyof I_6["version"], keyof _1210.Consensus>, never>;
                chainId?: string;
                height?: string;
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
                    } & Record<Exclude<keyof I_6["lastBlockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_6["lastBlockId"], keyof _1206.BlockID>, never>;
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            } & Record<Exclude<keyof I_6, keyof _1206.Header>, never>>(object: I_6): _1206.Header;
        };
        Data: {
            encode(message: _1206.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.Data;
            fromJSON(object: any): _1206.Data;
            toJSON(message: _1206.Data): unknown;
            fromPartial<I_7 extends {
                txs?: Uint8Array[];
            } & {
                txs?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_7["txs"], keyof Uint8Array[]>, never>;
            } & Record<Exclude<keyof I_7, "txs">, never>>(object: I_7): _1206.Data;
        };
        Vote: {
            encode(message: _1206.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.Vote;
            fromJSON(object: any): _1206.Vote;
            toJSON(message: _1206.Vote): unknown;
            fromPartial<I_8 extends {
                type?: _1206.SignedMsgType;
                height?: string;
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
                type?: _1206.SignedMsgType;
                height?: string;
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
                    } & Record<Exclude<keyof I_8["blockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_8["blockId"], keyof _1206.BlockID>, never>;
                timestamp?: Date;
                validatorAddress?: Uint8Array;
                validatorIndex?: number;
                signature?: Uint8Array;
            } & Record<Exclude<keyof I_8, keyof _1206.Vote>, never>>(object: I_8): _1206.Vote;
        };
        Commit: {
            encode(message: _1206.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.Commit;
            fromJSON(object: any): _1206.Commit;
            toJSON(message: _1206.Commit): unknown;
            fromPartial<I_9 extends {
                height?: string;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    blockIdFlag?: _1206.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            } & {
                height?: string;
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
                    } & Record<Exclude<keyof I_9["blockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_9["blockId"], keyof _1206.BlockID>, never>;
                signatures?: {
                    blockIdFlag?: _1206.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[] & ({
                    blockIdFlag?: _1206.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                } & {
                    blockIdFlag?: _1206.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                } & Record<Exclude<keyof I_9["signatures"][number], keyof _1206.CommitSig>, never>)[] & Record<Exclude<keyof I_9["signatures"], keyof {
                    blockIdFlag?: _1206.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_9, keyof _1206.Commit>, never>>(object: I_9): _1206.Commit;
        };
        CommitSig: {
            encode(message: _1206.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.CommitSig;
            fromJSON(object: any): _1206.CommitSig;
            toJSON(message: _1206.CommitSig): unknown;
            fromPartial<I_10 extends {
                blockIdFlag?: _1206.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            } & {
                blockIdFlag?: _1206.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            } & Record<Exclude<keyof I_10, keyof _1206.CommitSig>, never>>(object: I_10): _1206.CommitSig;
        };
        Proposal: {
            encode(message: _1206.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.Proposal;
            fromJSON(object: any): _1206.Proposal;
            toJSON(message: _1206.Proposal): unknown;
            fromPartial<I_11 extends {
                type?: _1206.SignedMsgType;
                height?: string;
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                signature?: Uint8Array;
            } & {
                type?: _1206.SignedMsgType;
                height?: string;
                round?: number;
                polRound?: number;
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
                    } & Record<Exclude<keyof I_11["blockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_11["blockId"], keyof _1206.BlockID>, never>;
                timestamp?: Date;
                signature?: Uint8Array;
            } & Record<Exclude<keyof I_11, keyof _1206.Proposal>, never>>(object: I_11): _1206.Proposal;
        };
        SignedHeader: {
            encode(message: _1206.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.SignedHeader;
            fromJSON(object: any): _1206.SignedHeader;
            toJSON(message: _1206.SignedHeader): unknown;
            fromPartial<I_12 extends {
                header?: {
                    version?: {
                        block?: string;
                        app?: string;
                    };
                    chainId?: string;
                    height?: string;
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
                    height?: string;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _1206.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            } & {
                header?: {
                    version?: {
                        block?: string;
                        app?: string;
                    };
                    chainId?: string;
                    height?: string;
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
                        block?: string;
                        app?: string;
                    } & {
                        block?: string;
                        app?: string;
                    } & Record<Exclude<keyof I_12["header"]["version"], keyof _1210.Consensus>, never>;
                    chainId?: string;
                    height?: string;
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
                        } & Record<Exclude<keyof I_12["header"]["lastBlockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_12["header"]["lastBlockId"], keyof _1206.BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I_12["header"], keyof _1206.Header>, never>;
                commit?: {
                    height?: string;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _1206.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                } & {
                    height?: string;
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
                        } & Record<Exclude<keyof I_12["commit"]["blockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_12["commit"]["blockId"], keyof _1206.BlockID>, never>;
                    signatures?: {
                        blockIdFlag?: _1206.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[] & ({
                        blockIdFlag?: _1206.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & {
                        blockIdFlag?: _1206.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I_12["commit"]["signatures"][number], keyof _1206.CommitSig>, never>)[] & Record<Exclude<keyof I_12["commit"]["signatures"], keyof {
                        blockIdFlag?: _1206.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_12["commit"], keyof _1206.Commit>, never>;
            } & Record<Exclude<keyof I_12, keyof _1206.SignedHeader>, never>>(object: I_12): _1206.SignedHeader;
        };
        LightBlock: {
            encode(message: _1206.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.LightBlock;
            fromJSON(object: any): _1206.LightBlock;
            toJSON(message: _1206.LightBlock): unknown;
            fromPartial<I_13 extends {
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: string;
                            app?: string;
                        };
                        chainId?: string;
                        height?: string;
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
                        height?: string;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            blockIdFlag?: _1206.BlockIDFlag;
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
                        votingPower?: string;
                        proposerPriority?: string;
                    }[];
                    proposer?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string;
                        proposerPriority?: string;
                    };
                    totalVotingPower?: string;
                };
            } & {
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: string;
                            app?: string;
                        };
                        chainId?: string;
                        height?: string;
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
                        height?: string;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            blockIdFlag?: _1206.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[];
                    };
                } & {
                    header?: {
                        version?: {
                            block?: string;
                            app?: string;
                        };
                        chainId?: string;
                        height?: string;
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
                            block?: string;
                            app?: string;
                        } & {
                            block?: string;
                            app?: string;
                        } & Record<Exclude<keyof I_13["signedHeader"]["header"]["version"], keyof _1210.Consensus>, never>;
                        chainId?: string;
                        height?: string;
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
                            } & Record<Exclude<keyof I_13["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_13["signedHeader"]["header"]["lastBlockId"], keyof _1206.BlockID>, never>;
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    } & Record<Exclude<keyof I_13["signedHeader"]["header"], keyof _1206.Header>, never>;
                    commit?: {
                        height?: string;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            blockIdFlag?: _1206.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[];
                    } & {
                        height?: string;
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
                            } & Record<Exclude<keyof I_13["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_13["signedHeader"]["commit"]["blockId"], keyof _1206.BlockID>, never>;
                        signatures?: {
                            blockIdFlag?: _1206.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[] & ({
                            blockIdFlag?: _1206.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        } & {
                            blockIdFlag?: _1206.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        } & Record<Exclude<keyof I_13["signedHeader"]["commit"]["signatures"][number], keyof _1206.CommitSig>, never>)[] & Record<Exclude<keyof I_13["signedHeader"]["commit"]["signatures"], keyof {
                            blockIdFlag?: _1206.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_13["signedHeader"]["commit"], keyof _1206.Commit>, never>;
                } & Record<Exclude<keyof I_13["signedHeader"], keyof _1206.SignedHeader>, never>;
                validatorSet?: {
                    validators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string;
                        proposerPriority?: string;
                    }[];
                    proposer?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string;
                        proposerPriority?: string;
                    };
                    totalVotingPower?: string;
                } & {
                    validators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string;
                        proposerPriority?: string;
                    }[] & ({
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string;
                        proposerPriority?: string;
                    } & {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I_13["validatorSet"]["validators"][number]["pubKey"], keyof _1192.PublicKey>, never>;
                        votingPower?: string;
                        proposerPriority?: string;
                    } & Record<Exclude<keyof I_13["validatorSet"]["validators"][number], keyof _1208.Validator>, never>)[] & Record<Exclude<keyof I_13["validatorSet"]["validators"], keyof {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string;
                        proposerPriority?: string;
                    }[]>, never>;
                    proposer?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string;
                        proposerPriority?: string;
                    } & {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I_13["validatorSet"]["proposer"]["pubKey"], keyof _1192.PublicKey>, never>;
                        votingPower?: string;
                        proposerPriority?: string;
                    } & Record<Exclude<keyof I_13["validatorSet"]["proposer"], keyof _1208.Validator>, never>;
                    totalVotingPower?: string;
                } & Record<Exclude<keyof I_13["validatorSet"], keyof _1208.ValidatorSet>, never>;
            } & Record<Exclude<keyof I_13, keyof _1206.LightBlock>, never>>(object: I_13): _1206.LightBlock;
        };
        BlockMeta: {
            encode(message: _1206.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.BlockMeta;
            fromJSON(object: any): _1206.BlockMeta;
            toJSON(message: _1206.BlockMeta): unknown;
            fromPartial<I_14 extends {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                blockSize?: string;
                header?: {
                    version?: {
                        block?: string;
                        app?: string;
                    };
                    chainId?: string;
                    height?: string;
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
                numTxs?: string;
            } & {
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
                    } & Record<Exclude<keyof I_14["blockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_14["blockId"], keyof _1206.BlockID>, never>;
                blockSize?: string;
                header?: {
                    version?: {
                        block?: string;
                        app?: string;
                    };
                    chainId?: string;
                    height?: string;
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
                        block?: string;
                        app?: string;
                    } & {
                        block?: string;
                        app?: string;
                    } & Record<Exclude<keyof I_14["header"]["version"], keyof _1210.Consensus>, never>;
                    chainId?: string;
                    height?: string;
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
                        } & Record<Exclude<keyof I_14["header"]["lastBlockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_14["header"]["lastBlockId"], keyof _1206.BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I_14["header"], keyof _1206.Header>, never>;
                numTxs?: string;
            } & Record<Exclude<keyof I_14, keyof _1206.BlockMeta>, never>>(object: I_14): _1206.BlockMeta;
        };
        TxProof: {
            encode(message: _1206.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.TxProof;
            fromJSON(object: any): _1206.TxProof;
            toJSON(message: _1206.TxProof): unknown;
            fromPartial<I_15 extends {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: string;
                    index?: string;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            } & {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: string;
                    index?: string;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                } & {
                    total?: string;
                    index?: string;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_15["proof"]["aunts"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_15["proof"], keyof _1194.Proof>, never>;
            } & Record<Exclude<keyof I_15, keyof _1206.TxProof>, never>>(object: I_15): _1206.TxProof;
        };
        ConsensusParams: {
            encode(message: _1204.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1204.ConsensusParams;
            fromJSON(object: any): _1204.ConsensusParams;
            toJSON(message: _1204.ConsensusParams): unknown;
            fromPartial<I_16 extends {
                block?: {
                    maxBytes?: string;
                    maxGas?: string;
                    timeIotaMs?: string;
                };
                evidence?: {
                    maxAgeNumBlocks?: string;
                    maxAgeDuration?: string;
                    maxBytes?: string;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: string;
                };
            } & {
                block?: {
                    maxBytes?: string;
                    maxGas?: string;
                    timeIotaMs?: string;
                } & {
                    maxBytes?: string;
                    maxGas?: string;
                    timeIotaMs?: string;
                } & Record<Exclude<keyof I_16["block"], keyof _1204.BlockParams>, never>;
                evidence?: {
                    maxAgeNumBlocks?: string;
                    maxAgeDuration?: string;
                    maxBytes?: string;
                } & {
                    maxAgeNumBlocks?: string;
                    maxAgeDuration?: string;
                    maxBytes?: string;
                } & Record<Exclude<keyof I_16["evidence"], keyof _1204.EvidenceParams>, never>;
                validator?: {
                    pubKeyTypes?: string[];
                } & {
                    pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_16["validator"]["pubKeyTypes"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_16["validator"], "pubKeyTypes">, never>;
                version?: {
                    appVersion?: string;
                } & {
                    appVersion?: string;
                } & Record<Exclude<keyof I_16["version"], "appVersion">, never>;
            } & Record<Exclude<keyof I_16, keyof _1204.ConsensusParams>, never>>(object: I_16): _1204.ConsensusParams;
        };
        BlockParams: {
            encode(message: _1204.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1204.BlockParams;
            fromJSON(object: any): _1204.BlockParams;
            toJSON(message: _1204.BlockParams): unknown;
            fromPartial<I_17 extends {
                maxBytes?: string;
                maxGas?: string;
                timeIotaMs?: string;
            } & {
                maxBytes?: string;
                maxGas?: string;
                timeIotaMs?: string;
            } & Record<Exclude<keyof I_17, keyof _1204.BlockParams>, never>>(object: I_17): _1204.BlockParams;
        };
        EvidenceParams: {
            encode(message: _1204.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1204.EvidenceParams;
            fromJSON(object: any): _1204.EvidenceParams;
            toJSON(message: _1204.EvidenceParams): unknown;
            fromPartial<I_18 extends {
                maxAgeNumBlocks?: string;
                maxAgeDuration?: string;
                maxBytes?: string;
            } & {
                maxAgeNumBlocks?: string;
                maxAgeDuration?: string;
                maxBytes?: string;
            } & Record<Exclude<keyof I_18, keyof _1204.EvidenceParams>, never>>(object: I_18): _1204.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _1204.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1204.ValidatorParams;
            fromJSON(object: any): _1204.ValidatorParams;
            toJSON(message: _1204.ValidatorParams): unknown;
            fromPartial<I_19 extends {
                pubKeyTypes?: string[];
            } & {
                pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_19["pubKeyTypes"], keyof string[]>, never>;
            } & Record<Exclude<keyof I_19, "pubKeyTypes">, never>>(object: I_19): _1204.ValidatorParams;
        };
        VersionParams: {
            encode(message: _1204.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1204.VersionParams;
            fromJSON(object: any): _1204.VersionParams;
            toJSON(message: _1204.VersionParams): unknown;
            fromPartial<I_20 extends {
                appVersion?: string;
            } & {
                appVersion?: string;
            } & Record<Exclude<keyof I_20, "appVersion">, never>>(object: I_20): _1204.VersionParams;
        };
        HashedParams: {
            encode(message: _1204.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1204.HashedParams;
            fromJSON(object: any): _1204.HashedParams;
            toJSON(message: _1204.HashedParams): unknown;
            fromPartial<I_21 extends {
                blockMaxBytes?: string;
                blockMaxGas?: string;
            } & {
                blockMaxBytes?: string;
                blockMaxGas?: string;
            } & Record<Exclude<keyof I_21, keyof _1204.HashedParams>, never>>(object: I_21): _1204.HashedParams;
        };
        Evidence: {
            encode(message: _1202.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1202.Evidence;
            fromJSON(object: any): _1202.Evidence;
            toJSON(message: _1202.Evidence): unknown;
            fromPartial<I_22 extends {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _1206.SignedMsgType;
                        height?: string;
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
                        type?: _1206.SignedMsgType;
                        height?: string;
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
                    totalVotingPower?: string;
                    validatorPower?: string;
                    timestamp?: Date;
                };
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: string;
                                    app?: string;
                                };
                                chainId?: string;
                                height?: string;
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
                                height?: string;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _1206.BlockIDFlag;
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
                                votingPower?: string;
                                proposerPriority?: string;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            };
                            totalVotingPower?: string;
                        };
                    };
                    commonHeight?: string;
                    byzantineValidators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string;
                        proposerPriority?: string;
                    }[];
                    totalVotingPower?: string;
                    timestamp?: Date;
                };
            } & {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _1206.SignedMsgType;
                        height?: string;
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
                        type?: _1206.SignedMsgType;
                        height?: string;
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
                    totalVotingPower?: string;
                    validatorPower?: string;
                    timestamp?: Date;
                } & {
                    voteA?: {
                        type?: _1206.SignedMsgType;
                        height?: string;
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
                        type?: _1206.SignedMsgType;
                        height?: string;
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
                            } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteA"]["blockId"], keyof _1206.BlockID>, never>;
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteA"], keyof _1206.Vote>, never>;
                    voteB?: {
                        type?: _1206.SignedMsgType;
                        height?: string;
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
                        type?: _1206.SignedMsgType;
                        height?: string;
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
                            } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteB"]["blockId"], keyof _1206.BlockID>, never>;
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteB"], keyof _1206.Vote>, never>;
                    totalVotingPower?: string;
                    validatorPower?: string;
                    timestamp?: Date;
                } & Record<Exclude<keyof I_22["duplicateVoteEvidence"], keyof _1202.DuplicateVoteEvidence>, never>;
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: string;
                                    app?: string;
                                };
                                chainId?: string;
                                height?: string;
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
                                height?: string;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _1206.BlockIDFlag;
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
                                votingPower?: string;
                                proposerPriority?: string;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            };
                            totalVotingPower?: string;
                        };
                    };
                    commonHeight?: string;
                    byzantineValidators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string;
                        proposerPriority?: string;
                    }[];
                    totalVotingPower?: string;
                    timestamp?: Date;
                } & {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: string;
                                    app?: string;
                                };
                                chainId?: string;
                                height?: string;
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
                                height?: string;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _1206.BlockIDFlag;
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
                                votingPower?: string;
                                proposerPriority?: string;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            };
                            totalVotingPower?: string;
                        };
                    } & {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: string;
                                    app?: string;
                                };
                                chainId?: string;
                                height?: string;
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
                                height?: string;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _1206.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        } & {
                            header?: {
                                version?: {
                                    block?: string;
                                    app?: string;
                                };
                                chainId?: string;
                                height?: string;
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
                                    block?: string;
                                    app?: string;
                                } & {
                                    block?: string;
                                    app?: string;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof _1210.Consensus>, never>;
                                chainId?: string;
                                height?: string;
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
                                    } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof _1206.BlockID>, never>;
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof _1206.Header>, never>;
                            commit?: {
                                height?: string;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _1206.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            } & {
                                height?: string;
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
                                    } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof _1206.BlockID>, never>;
                                signatures?: {
                                    blockIdFlag?: _1206.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[] & ({
                                    blockIdFlag?: _1206.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                } & {
                                    blockIdFlag?: _1206.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof _1206.CommitSig>, never>)[] & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                    blockIdFlag?: _1206.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[]>, never>;
                            } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof _1206.Commit>, never>;
                        } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof _1206.SignedHeader>, never>;
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            };
                            totalVotingPower?: string;
                        } & {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            }[] & ({
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof _1192.PublicKey>, never>;
                                votingPower?: string;
                                proposerPriority?: string;
                            } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof _1208.Validator>, never>)[] & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            }[]>, never>;
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof _1192.PublicKey>, never>;
                                votingPower?: string;
                                proposerPriority?: string;
                            } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof _1208.Validator>, never>;
                            totalVotingPower?: string;
                        } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof _1208.ValidatorSet>, never>;
                    } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"], keyof _1206.LightBlock>, never>;
                    commonHeight?: string;
                    byzantineValidators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string;
                        proposerPriority?: string;
                    }[] & ({
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string;
                        proposerPriority?: string;
                    } & {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof _1192.PublicKey>, never>;
                        votingPower?: string;
                        proposerPriority?: string;
                    } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["byzantineValidators"][number], keyof _1208.Validator>, never>)[] & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string;
                        proposerPriority?: string;
                    }[]>, never>;
                    totalVotingPower?: string;
                    timestamp?: Date;
                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"], keyof _1202.LightClientAttackEvidence>, never>;
            } & Record<Exclude<keyof I_22, keyof _1202.Evidence>, never>>(object: I_22): _1202.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _1202.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1202.DuplicateVoteEvidence;
            fromJSON(object: any): _1202.DuplicateVoteEvidence;
            toJSON(message: _1202.DuplicateVoteEvidence): unknown;
            fromPartial<I_23 extends {
                voteA?: {
                    type?: _1206.SignedMsgType;
                    height?: string;
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
                    type?: _1206.SignedMsgType;
                    height?: string;
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
                totalVotingPower?: string;
                validatorPower?: string;
                timestamp?: Date;
            } & {
                voteA?: {
                    type?: _1206.SignedMsgType;
                    height?: string;
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
                    type?: _1206.SignedMsgType;
                    height?: string;
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
                        } & Record<Exclude<keyof I_23["voteA"]["blockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_23["voteA"]["blockId"], keyof _1206.BlockID>, never>;
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                } & Record<Exclude<keyof I_23["voteA"], keyof _1206.Vote>, never>;
                voteB?: {
                    type?: _1206.SignedMsgType;
                    height?: string;
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
                    type?: _1206.SignedMsgType;
                    height?: string;
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
                        } & Record<Exclude<keyof I_23["voteB"]["blockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_23["voteB"]["blockId"], keyof _1206.BlockID>, never>;
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                } & Record<Exclude<keyof I_23["voteB"], keyof _1206.Vote>, never>;
                totalVotingPower?: string;
                validatorPower?: string;
                timestamp?: Date;
            } & Record<Exclude<keyof I_23, keyof _1202.DuplicateVoteEvidence>, never>>(object: I_23): _1202.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _1202.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1202.LightClientAttackEvidence;
            fromJSON(object: any): _1202.LightClientAttackEvidence;
            toJSON(message: _1202.LightClientAttackEvidence): unknown;
            fromPartial<I_24 extends {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: string;
                                app?: string;
                            };
                            chainId?: string;
                            height?: string;
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
                            height?: string;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: _1206.BlockIDFlag;
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
                            votingPower?: string;
                            proposerPriority?: string;
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string;
                            proposerPriority?: string;
                        };
                        totalVotingPower?: string;
                    };
                };
                commonHeight?: string;
                byzantineValidators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[];
                totalVotingPower?: string;
                timestamp?: Date;
            } & {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: string;
                                app?: string;
                            };
                            chainId?: string;
                            height?: string;
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
                            height?: string;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: _1206.BlockIDFlag;
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
                            votingPower?: string;
                            proposerPriority?: string;
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string;
                            proposerPriority?: string;
                        };
                        totalVotingPower?: string;
                    };
                } & {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: string;
                                app?: string;
                            };
                            chainId?: string;
                            height?: string;
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
                            height?: string;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: _1206.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    } & {
                        header?: {
                            version?: {
                                block?: string;
                                app?: string;
                            };
                            chainId?: string;
                            height?: string;
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
                                block?: string;
                                app?: string;
                            } & {
                                block?: string;
                                app?: string;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["header"]["version"], keyof _1210.Consensus>, never>;
                            chainId?: string;
                            height?: string;
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
                                } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof _1206.BlockID>, never>;
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["header"], keyof _1206.Header>, never>;
                        commit?: {
                            height?: string;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: _1206.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        } & {
                            height?: string;
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
                                } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof _1206.BlockID>, never>;
                            signatures?: {
                                blockIdFlag?: _1206.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[] & ({
                                blockIdFlag?: _1206.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            } & {
                                blockIdFlag?: _1206.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof _1206.CommitSig>, never>)[] & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                blockIdFlag?: _1206.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"], keyof _1206.Commit>, never>;
                    } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"], keyof _1206.SignedHeader>, never>;
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string;
                            proposerPriority?: string;
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string;
                            proposerPriority?: string;
                        };
                        totalVotingPower?: string;
                    } & {
                        validators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string;
                            proposerPriority?: string;
                        }[] & ({
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string;
                            proposerPriority?: string;
                        } & {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof _1192.PublicKey>, never>;
                            votingPower?: string;
                            proposerPriority?: string;
                        } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["validators"][number], keyof _1208.Validator>, never>)[] & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["validators"], keyof {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string;
                            proposerPriority?: string;
                        }[]>, never>;
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string;
                            proposerPriority?: string;
                        } & {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof _1192.PublicKey>, never>;
                            votingPower?: string;
                            proposerPriority?: string;
                        } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["proposer"], keyof _1208.Validator>, never>;
                        totalVotingPower?: string;
                    } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"], keyof _1208.ValidatorSet>, never>;
                } & Record<Exclude<keyof I_24["conflictingBlock"], keyof _1206.LightBlock>, never>;
                commonHeight?: string;
                byzantineValidators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[] & ({
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                } & {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I_24["byzantineValidators"][number]["pubKey"], keyof _1192.PublicKey>, never>;
                    votingPower?: string;
                    proposerPriority?: string;
                } & Record<Exclude<keyof I_24["byzantineValidators"][number], keyof _1208.Validator>, never>)[] & Record<Exclude<keyof I_24["byzantineValidators"], keyof {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[]>, never>;
                totalVotingPower?: string;
                timestamp?: Date;
            } & Record<Exclude<keyof I_24, keyof _1202.LightClientAttackEvidence>, never>>(object: I_24): _1202.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _1202.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1202.EvidenceList;
            fromJSON(object: any): _1202.EvidenceList;
            toJSON(message: _1202.EvidenceList): unknown;
            fromPartial<I_25 extends {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _1206.SignedMsgType;
                            height?: string;
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
                            type?: _1206.SignedMsgType;
                            height?: string;
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
                        totalVotingPower?: string;
                        validatorPower?: string;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string;
                                        app?: string;
                                    };
                                    chainId?: string;
                                    height?: string;
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
                                    height?: string;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _1206.BlockIDFlag;
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
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                };
                                totalVotingPower?: string;
                            };
                        };
                        commonHeight?: string;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string;
                            proposerPriority?: string;
                        }[];
                        totalVotingPower?: string;
                        timestamp?: Date;
                    };
                }[];
            } & {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _1206.SignedMsgType;
                            height?: string;
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
                            type?: _1206.SignedMsgType;
                            height?: string;
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
                        totalVotingPower?: string;
                        validatorPower?: string;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string;
                                        app?: string;
                                    };
                                    chainId?: string;
                                    height?: string;
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
                                    height?: string;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _1206.BlockIDFlag;
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
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                };
                                totalVotingPower?: string;
                            };
                        };
                        commonHeight?: string;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string;
                            proposerPriority?: string;
                        }[];
                        totalVotingPower?: string;
                        timestamp?: Date;
                    };
                }[] & ({
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _1206.SignedMsgType;
                            height?: string;
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
                            type?: _1206.SignedMsgType;
                            height?: string;
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
                        totalVotingPower?: string;
                        validatorPower?: string;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string;
                                        app?: string;
                                    };
                                    chainId?: string;
                                    height?: string;
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
                                    height?: string;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _1206.BlockIDFlag;
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
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                };
                                totalVotingPower?: string;
                            };
                        };
                        commonHeight?: string;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string;
                            proposerPriority?: string;
                        }[];
                        totalVotingPower?: string;
                        timestamp?: Date;
                    };
                } & {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _1206.SignedMsgType;
                            height?: string;
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
                            type?: _1206.SignedMsgType;
                            height?: string;
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
                        totalVotingPower?: string;
                        validatorPower?: string;
                        timestamp?: Date;
                    } & {
                        voteA?: {
                            type?: _1206.SignedMsgType;
                            height?: string;
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
                            type?: _1206.SignedMsgType;
                            height?: string;
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
                                } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                            } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], keyof _1206.BlockID>, never>;
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteA"], keyof _1206.Vote>, never>;
                        voteB?: {
                            type?: _1206.SignedMsgType;
                            height?: string;
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
                            type?: _1206.SignedMsgType;
                            height?: string;
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
                                } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                            } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], keyof _1206.BlockID>, never>;
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteB"], keyof _1206.Vote>, never>;
                        totalVotingPower?: string;
                        validatorPower?: string;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"], keyof _1202.DuplicateVoteEvidence>, never>;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string;
                                        app?: string;
                                    };
                                    chainId?: string;
                                    height?: string;
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
                                    height?: string;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _1206.BlockIDFlag;
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
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                };
                                totalVotingPower?: string;
                            };
                        };
                        commonHeight?: string;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string;
                            proposerPriority?: string;
                        }[];
                        totalVotingPower?: string;
                        timestamp?: Date;
                    } & {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string;
                                        app?: string;
                                    };
                                    chainId?: string;
                                    height?: string;
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
                                    height?: string;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _1206.BlockIDFlag;
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
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                };
                                totalVotingPower?: string;
                            };
                        } & {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string;
                                        app?: string;
                                    };
                                    chainId?: string;
                                    height?: string;
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
                                    height?: string;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _1206.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            } & {
                                header?: {
                                    version?: {
                                        block?: string;
                                        app?: string;
                                    };
                                    chainId?: string;
                                    height?: string;
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
                                        block?: string;
                                        app?: string;
                                    } & {
                                        block?: string;
                                        app?: string;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof _1210.Consensus>, never>;
                                    chainId?: string;
                                    height?: string;
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
                                        } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof _1206.BlockID>, never>;
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof _1206.Header>, never>;
                                commit?: {
                                    height?: string;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _1206.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                } & {
                                    height?: string;
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
                                        } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof _1206.BlockID>, never>;
                                    signatures?: {
                                        blockIdFlag?: _1206.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[] & ({
                                        blockIdFlag?: _1206.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & {
                                        blockIdFlag?: _1206.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof _1206.CommitSig>, never>)[] & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                        blockIdFlag?: _1206.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[]>, never>;
                                } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof _1206.Commit>, never>;
                            } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof _1206.SignedHeader>, never>;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                };
                                totalVotingPower?: string;
                            } & {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[] & ({
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof _1192.PublicKey>, never>;
                                    votingPower?: string;
                                    proposerPriority?: string;
                                } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof _1208.Validator>, never>)[] & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[]>, never>;
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof _1192.PublicKey>, never>;
                                    votingPower?: string;
                                    proposerPriority?: string;
                                } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof _1208.Validator>, never>;
                                totalVotingPower?: string;
                            } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof _1208.ValidatorSet>, never>;
                        } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], keyof _1206.LightBlock>, never>;
                        commonHeight?: string;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string;
                            proposerPriority?: string;
                        }[] & ({
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string;
                            proposerPriority?: string;
                        } & {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof _1192.PublicKey>, never>;
                            votingPower?: string;
                            proposerPriority?: string;
                        } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], keyof _1208.Validator>, never>)[] & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string;
                            proposerPriority?: string;
                        }[]>, never>;
                        totalVotingPower?: string;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"], keyof _1202.LightClientAttackEvidence>, never>;
                } & Record<Exclude<keyof I_25["evidence"][number], keyof _1202.Evidence>, never>)[] & Record<Exclude<keyof I_25["evidence"], keyof {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _1206.SignedMsgType;
                            height?: string;
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
                            type?: _1206.SignedMsgType;
                            height?: string;
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
                        totalVotingPower?: string;
                        validatorPower?: string;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string;
                                        app?: string;
                                    };
                                    chainId?: string;
                                    height?: string;
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
                                    height?: string;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _1206.BlockIDFlag;
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
                                    votingPower?: string;
                                    proposerPriority?: string;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string;
                                    proposerPriority?: string;
                                };
                                totalVotingPower?: string;
                            };
                        };
                        commonHeight?: string;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string;
                            proposerPriority?: string;
                        }[];
                        totalVotingPower?: string;
                        timestamp?: Date;
                    };
                }[]>, never>;
            } & Record<Exclude<keyof I_25, "evidence">, never>>(object: I_25): _1202.EvidenceList;
        };
        Block: {
            encode(message: _1200.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1200.Block;
            fromJSON(object: any): _1200.Block;
            toJSON(message: _1200.Block): unknown;
            fromPartial<I_26 extends {
                header?: {
                    version?: {
                        block?: string;
                        app?: string;
                    };
                    chainId?: string;
                    height?: string;
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
                                type?: _1206.SignedMsgType;
                                height?: string;
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
                                type?: _1206.SignedMsgType;
                                height?: string;
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
                            totalVotingPower?: string;
                            validatorPower?: string;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: string;
                                            app?: string;
                                        };
                                        chainId?: string;
                                        height?: string;
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
                                        height?: string;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _1206.BlockIDFlag;
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
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    };
                                    totalVotingPower?: string;
                                };
                            };
                            commonHeight?: string;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            }[];
                            totalVotingPower?: string;
                            timestamp?: Date;
                        };
                    }[];
                };
                lastCommit?: {
                    height?: string;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _1206.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            } & {
                header?: {
                    version?: {
                        block?: string;
                        app?: string;
                    };
                    chainId?: string;
                    height?: string;
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
                        block?: string;
                        app?: string;
                    } & {
                        block?: string;
                        app?: string;
                    } & Record<Exclude<keyof I_26["header"]["version"], keyof _1210.Consensus>, never>;
                    chainId?: string;
                    height?: string;
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
                        } & Record<Exclude<keyof I_26["header"]["lastBlockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_26["header"]["lastBlockId"], keyof _1206.BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I_26["header"], keyof _1206.Header>, never>;
                data?: {
                    txs?: Uint8Array[];
                } & {
                    txs?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_26["data"]["txs"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_26["data"], "txs">, never>;
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _1206.SignedMsgType;
                                height?: string;
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
                                type?: _1206.SignedMsgType;
                                height?: string;
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
                            totalVotingPower?: string;
                            validatorPower?: string;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: string;
                                            app?: string;
                                        };
                                        chainId?: string;
                                        height?: string;
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
                                        height?: string;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _1206.BlockIDFlag;
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
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    };
                                    totalVotingPower?: string;
                                };
                            };
                            commonHeight?: string;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            }[];
                            totalVotingPower?: string;
                            timestamp?: Date;
                        };
                    }[];
                } & {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _1206.SignedMsgType;
                                height?: string;
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
                                type?: _1206.SignedMsgType;
                                height?: string;
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
                            totalVotingPower?: string;
                            validatorPower?: string;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: string;
                                            app?: string;
                                        };
                                        chainId?: string;
                                        height?: string;
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
                                        height?: string;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _1206.BlockIDFlag;
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
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    };
                                    totalVotingPower?: string;
                                };
                            };
                            commonHeight?: string;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            }[];
                            totalVotingPower?: string;
                            timestamp?: Date;
                        };
                    }[] & ({
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _1206.SignedMsgType;
                                height?: string;
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
                                type?: _1206.SignedMsgType;
                                height?: string;
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
                            totalVotingPower?: string;
                            validatorPower?: string;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: string;
                                            app?: string;
                                        };
                                        chainId?: string;
                                        height?: string;
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
                                        height?: string;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _1206.BlockIDFlag;
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
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    };
                                    totalVotingPower?: string;
                                };
                            };
                            commonHeight?: string;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            }[];
                            totalVotingPower?: string;
                            timestamp?: Date;
                        };
                    } & {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _1206.SignedMsgType;
                                height?: string;
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
                                type?: _1206.SignedMsgType;
                                height?: string;
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
                            totalVotingPower?: string;
                            validatorPower?: string;
                            timestamp?: Date;
                        } & {
                            voteA?: {
                                type?: _1206.SignedMsgType;
                                height?: string;
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
                                type?: _1206.SignedMsgType;
                                height?: string;
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
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], keyof _1206.BlockID>, never>;
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"], keyof _1206.Vote>, never>;
                            voteB?: {
                                type?: _1206.SignedMsgType;
                                height?: string;
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
                                type?: _1206.SignedMsgType;
                                height?: string;
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
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], keyof _1206.BlockID>, never>;
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"], keyof _1206.Vote>, never>;
                            totalVotingPower?: string;
                            validatorPower?: string;
                            timestamp?: Date;
                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"], keyof _1202.DuplicateVoteEvidence>, never>;
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: string;
                                            app?: string;
                                        };
                                        chainId?: string;
                                        height?: string;
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
                                        height?: string;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _1206.BlockIDFlag;
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
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    };
                                    totalVotingPower?: string;
                                };
                            };
                            commonHeight?: string;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            }[];
                            totalVotingPower?: string;
                            timestamp?: Date;
                        } & {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: string;
                                            app?: string;
                                        };
                                        chainId?: string;
                                        height?: string;
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
                                        height?: string;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _1206.BlockIDFlag;
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
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    };
                                    totalVotingPower?: string;
                                };
                            } & {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: string;
                                            app?: string;
                                        };
                                        chainId?: string;
                                        height?: string;
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
                                        height?: string;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _1206.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                } & {
                                    header?: {
                                        version?: {
                                            block?: string;
                                            app?: string;
                                        };
                                        chainId?: string;
                                        height?: string;
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
                                            block?: string;
                                            app?: string;
                                        } & {
                                            block?: string;
                                            app?: string;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof _1210.Consensus>, never>;
                                        chainId?: string;
                                        height?: string;
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
                                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof _1206.BlockID>, never>;
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof _1206.Header>, never>;
                                    commit?: {
                                        height?: string;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _1206.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    } & {
                                        height?: string;
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
                                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof _1206.BlockID>, never>;
                                        signatures?: {
                                            blockIdFlag?: _1206.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[] & ({
                                            blockIdFlag?: _1206.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        } & {
                                            blockIdFlag?: _1206.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof _1206.CommitSig>, never>)[] & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                            blockIdFlag?: _1206.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[]>, never>;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof _1206.Commit>, never>;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof _1206.SignedHeader>, never>;
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    };
                                    totalVotingPower?: string;
                                } & {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    }[] & ({
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    } & {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        } & {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof _1192.PublicKey>, never>;
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof _1208.Validator>, never>)[] & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    }[]>, never>;
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    } & {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        } & {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof _1192.PublicKey>, never>;
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof _1208.Validator>, never>;
                                    totalVotingPower?: string;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof _1208.ValidatorSet>, never>;
                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], keyof _1206.LightBlock>, never>;
                            commonHeight?: string;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            }[] & ({
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof _1192.PublicKey>, never>;
                                votingPower?: string;
                                proposerPriority?: string;
                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], keyof _1208.Validator>, never>)[] & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            }[]>, never>;
                            totalVotingPower?: string;
                            timestamp?: Date;
                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"], keyof _1202.LightClientAttackEvidence>, never>;
                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number], keyof _1202.Evidence>, never>)[] & Record<Exclude<keyof I_26["evidence"]["evidence"], keyof {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _1206.SignedMsgType;
                                height?: string;
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
                                type?: _1206.SignedMsgType;
                                height?: string;
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
                            totalVotingPower?: string;
                            validatorPower?: string;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: string;
                                            app?: string;
                                        };
                                        chainId?: string;
                                        height?: string;
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
                                        height?: string;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _1206.BlockIDFlag;
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
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string;
                                        proposerPriority?: string;
                                    };
                                    totalVotingPower?: string;
                                };
                            };
                            commonHeight?: string;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string;
                                proposerPriority?: string;
                            }[];
                            totalVotingPower?: string;
                            timestamp?: Date;
                        };
                    }[]>, never>;
                } & Record<Exclude<keyof I_26["evidence"], "evidence">, never>;
                lastCommit?: {
                    height?: string;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _1206.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                } & {
                    height?: string;
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
                        } & Record<Exclude<keyof I_26["lastCommit"]["blockId"]["partSetHeader"], keyof _1206.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_26["lastCommit"]["blockId"], keyof _1206.BlockID>, never>;
                    signatures?: {
                        blockIdFlag?: _1206.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[] & ({
                        blockIdFlag?: _1206.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & {
                        blockIdFlag?: _1206.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I_26["lastCommit"]["signatures"][number], keyof _1206.CommitSig>, never>)[] & Record<Exclude<keyof I_26["lastCommit"]["signatures"], keyof {
                        blockIdFlag?: _1206.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_26["lastCommit"], keyof _1206.Commit>, never>;
            } & Record<Exclude<keyof I_26, keyof _1200.Block>, never>>(object: I_26): _1200.Block;
        };
    };
    const version: {
        App: {
            encode(message: _1210.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1210.App;
            fromJSON(object: any): _1210.App;
            toJSON(message: _1210.App): unknown;
            fromPartial<I extends {
                protocol?: string;
                software?: string;
            } & {
                protocol?: string;
                software?: string;
            } & Record<Exclude<keyof I, keyof _1210.App>, never>>(object: I): _1210.App;
        };
        Consensus: {
            encode(message: _1210.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1210.Consensus;
            fromJSON(object: any): _1210.Consensus;
            toJSON(message: _1210.Consensus): unknown;
            fromPartial<I_1 extends {
                block?: string;
                app?: string;
            } & {
                block?: string;
                app?: string;
            } & Record<Exclude<keyof I_1, keyof _1210.Consensus>, never>>(object: I_1): _1210.Consensus;
        };
    };
}
