import * as _169 from "./abci/types";
import * as _170 from "./crypto/keys";
import * as _171 from "./crypto/proof";
import * as _172 from "./libs/bits/types";
import * as _173 from "./p2p/types";
import * as _174 from "./types/block";
import * as _175 from "./types/evidence";
import * as _176 from "./types/params";
import * as _177 from "./types/types";
import * as _178 from "./types/validator";
import * as _179 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _169.CheckTxType;
        checkTxTypeToJSON(object: _169.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _169.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _169.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _169.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _169.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _169.EvidenceType;
        evidenceTypeToJSON(object: _169.EvidenceType): string;
        CheckTxType: typeof _169.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _169.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _169.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _169.EvidenceType;
        Request: {
            encode(message: _169.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Request;
            fromJSON(object: any): _169.Request;
            toJSON(message: _169.Request): unknown;
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
                        type?: _169.EvidenceType;
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
                    type?: _169.CheckTxType;
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
                } & Record<Exclude<keyof I["info"], keyof _169.RequestInfo>, never>;
                setOption?: {
                    key?: string;
                    value?: string;
                } & {
                    key?: string;
                    value?: string;
                } & Record<Exclude<keyof I["setOption"], keyof _169.RequestSetOption>, never>;
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
                        } & Record<Exclude<keyof I["initChain"]["consensusParams"]["block"], keyof _169.BlockParams>, never>;
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & Record<Exclude<keyof I["initChain"]["consensusParams"]["evidence"], keyof _176.EvidenceParams>, never>;
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
                    } & Record<Exclude<keyof I["initChain"]["consensusParams"], keyof _169.ConsensusParams>, never>;
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
                        } & Record<Exclude<keyof I["initChain"]["validators"][number]["pubKey"], keyof _170.PublicKey>, never>;
                        power?: any;
                    } & Record<Exclude<keyof I["initChain"]["validators"][number], keyof _169.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I["initChain"]["validators"], keyof {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[]>, never>;
                    appStateBytes?: Uint8Array;
                    initialHeight?: any;
                } & Record<Exclude<keyof I["initChain"], keyof _169.RequestInitChain>, never>;
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
                } & Record<Exclude<keyof I["query"], keyof _169.RequestQuery>, never>;
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
                        type?: _169.EvidenceType;
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
                        } & Record<Exclude<keyof I["beginBlock"]["header"]["version"], keyof _179.Consensus>, never>;
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
                            } & Record<Exclude<keyof I["beginBlock"]["header"]["lastBlockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I["beginBlock"]["header"]["lastBlockId"], keyof _177.BlockID>, never>;
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    } & Record<Exclude<keyof I["beginBlock"]["header"], keyof _177.Header>, never>;
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
                            } & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"]["votes"][number]["validator"], keyof _169.Validator>, never>;
                            signedLastBlock?: boolean;
                        } & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"]["votes"][number], keyof _169.VoteInfo>, never>)[] & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"]["votes"], keyof {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"], keyof _169.LastCommitInfo>, never>;
                    byzantineValidators?: {
                        type?: _169.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    }[] & ({
                        type?: _169.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    } & {
                        type?: _169.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        } & {
                            address?: Uint8Array;
                            power?: any;
                        } & Record<Exclude<keyof I["beginBlock"]["byzantineValidators"][number]["validator"], keyof _169.Validator>, never>;
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    } & Record<Exclude<keyof I["beginBlock"]["byzantineValidators"][number], keyof _169.Evidence>, never>)[] & Record<Exclude<keyof I["beginBlock"]["byzantineValidators"], keyof {
                        type?: _169.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I["beginBlock"], keyof _169.RequestBeginBlock>, never>;
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _169.CheckTxType;
                } & {
                    tx?: Uint8Array;
                    type?: _169.CheckTxType;
                } & Record<Exclude<keyof I["checkTx"], keyof _169.RequestCheckTx>, never>;
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
                    } & Record<Exclude<keyof I["offerSnapshot"]["snapshot"], keyof _169.Snapshot>, never>;
                    appHash?: Uint8Array;
                } & Record<Exclude<keyof I["offerSnapshot"], keyof _169.RequestOfferSnapshot>, never>;
                loadSnapshotChunk?: {
                    height?: any;
                    format?: number;
                    chunk?: number;
                } & {
                    height?: any;
                    format?: number;
                    chunk?: number;
                } & Record<Exclude<keyof I["loadSnapshotChunk"], keyof _169.RequestLoadSnapshotChunk>, never>;
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                } & {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                } & Record<Exclude<keyof I["applySnapshotChunk"], keyof _169.RequestApplySnapshotChunk>, never>;
            } & Record<Exclude<keyof I, keyof _169.Request>, never>>(object: I): _169.Request;
        };
        RequestEcho: {
            encode(message: _169.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestEcho;
            fromJSON(object: any): _169.RequestEcho;
            toJSON(message: _169.RequestEcho): unknown;
            fromPartial<I_1 extends {
                message?: string;
            } & {
                message?: string;
            } & Record<Exclude<keyof I_1, "message">, never>>(object: I_1): _169.RequestEcho;
        };
        RequestFlush: {
            encode(_: _169.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestFlush;
            fromJSON(_: any): _169.RequestFlush;
            toJSON(_: _169.RequestFlush): unknown;
            fromPartial<I_2 extends {} & {} & Record<Exclude<keyof I_2, never>, never>>(_: I_2): _169.RequestFlush;
        };
        RequestInfo: {
            encode(message: _169.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestInfo;
            fromJSON(object: any): _169.RequestInfo;
            toJSON(message: _169.RequestInfo): unknown;
            fromPartial<I_3 extends {
                version?: string;
                blockVersion?: any;
                p2pVersion?: any;
            } & {
                version?: string;
                blockVersion?: any;
                p2pVersion?: any;
            } & Record<Exclude<keyof I_3, keyof _169.RequestInfo>, never>>(object: I_3): _169.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _169.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestSetOption;
            fromJSON(object: any): _169.RequestSetOption;
            toJSON(message: _169.RequestSetOption): unknown;
            fromPartial<I_4 extends {
                key?: string;
                value?: string;
            } & {
                key?: string;
                value?: string;
            } & Record<Exclude<keyof I_4, keyof _169.RequestSetOption>, never>>(object: I_4): _169.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _169.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestInitChain;
            fromJSON(object: any): _169.RequestInitChain;
            toJSON(message: _169.RequestInitChain): unknown;
            fromPartial<I_5 extends {
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
                    } & Record<Exclude<keyof I_5["consensusParams"]["block"], keyof _169.BlockParams>, never>;
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & Record<Exclude<keyof I_5["consensusParams"]["evidence"], keyof _176.EvidenceParams>, never>;
                    validator?: {
                        pubKeyTypes?: string[];
                    } & {
                        pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_5["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_5["consensusParams"]["validator"], "pubKeyTypes">, never>;
                    version?: {
                        appVersion?: any;
                    } & {
                        appVersion?: any;
                    } & Record<Exclude<keyof I_5["consensusParams"]["version"], "appVersion">, never>;
                } & Record<Exclude<keyof I_5["consensusParams"], keyof _169.ConsensusParams>, never>;
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
                    } & Record<Exclude<keyof I_5["validators"][number]["pubKey"], keyof _170.PublicKey>, never>;
                    power?: any;
                } & Record<Exclude<keyof I_5["validators"][number], keyof _169.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_5["validators"], keyof {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[]>, never>;
                appStateBytes?: Uint8Array;
                initialHeight?: any;
            } & Record<Exclude<keyof I_5, keyof _169.RequestInitChain>, never>>(object: I_5): _169.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _169.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestQuery;
            fromJSON(object: any): _169.RequestQuery;
            toJSON(message: _169.RequestQuery): unknown;
            fromPartial<I_6 extends {
                data?: Uint8Array;
                path?: string;
                height?: any;
                prove?: boolean;
            } & {
                data?: Uint8Array;
                path?: string;
                height?: any;
                prove?: boolean;
            } & Record<Exclude<keyof I_6, keyof _169.RequestQuery>, never>>(object: I_6): _169.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _169.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestBeginBlock;
            fromJSON(object: any): _169.RequestBeginBlock;
            toJSON(message: _169.RequestBeginBlock): unknown;
            fromPartial<I_7 extends {
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
                    type?: _169.EvidenceType;
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
                    } & Record<Exclude<keyof I_7["header"]["version"], keyof _179.Consensus>, never>;
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
                        } & Record<Exclude<keyof I_7["header"]["lastBlockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_7["header"]["lastBlockId"], keyof _177.BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I_7["header"], keyof _177.Header>, never>;
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
                        } & Record<Exclude<keyof I_7["lastCommitInfo"]["votes"][number]["validator"], keyof _169.Validator>, never>;
                        signedLastBlock?: boolean;
                    } & Record<Exclude<keyof I_7["lastCommitInfo"]["votes"][number], keyof _169.VoteInfo>, never>)[] & Record<Exclude<keyof I_7["lastCommitInfo"]["votes"], keyof {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signedLastBlock?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_7["lastCommitInfo"], keyof _169.LastCommitInfo>, never>;
                byzantineValidators?: {
                    type?: _169.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                }[] & ({
                    type?: _169.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                } & {
                    type?: _169.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    } & {
                        address?: Uint8Array;
                        power?: any;
                    } & Record<Exclude<keyof I_7["byzantineValidators"][number]["validator"], keyof _169.Validator>, never>;
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                } & Record<Exclude<keyof I_7["byzantineValidators"][number], keyof _169.Evidence>, never>)[] & Record<Exclude<keyof I_7["byzantineValidators"], keyof {
                    type?: _169.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                }[]>, never>;
            } & Record<Exclude<keyof I_7, keyof _169.RequestBeginBlock>, never>>(object: I_7): _169.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _169.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestCheckTx;
            fromJSON(object: any): _169.RequestCheckTx;
            toJSON(message: _169.RequestCheckTx): unknown;
            fromPartial<I_8 extends {
                tx?: Uint8Array;
                type?: _169.CheckTxType;
            } & {
                tx?: Uint8Array;
                type?: _169.CheckTxType;
            } & Record<Exclude<keyof I_8, keyof _169.RequestCheckTx>, never>>(object: I_8): _169.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _169.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestDeliverTx;
            fromJSON(object: any): _169.RequestDeliverTx;
            toJSON(message: _169.RequestDeliverTx): unknown;
            fromPartial<I_9 extends {
                tx?: Uint8Array;
            } & {
                tx?: Uint8Array;
            } & Record<Exclude<keyof I_9, "tx">, never>>(object: I_9): _169.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _169.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestEndBlock;
            fromJSON(object: any): _169.RequestEndBlock;
            toJSON(message: _169.RequestEndBlock): unknown;
            fromPartial<I_10 extends {
                height?: any;
            } & {
                height?: any;
            } & Record<Exclude<keyof I_10, "height">, never>>(object: I_10): _169.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _169.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestCommit;
            fromJSON(_: any): _169.RequestCommit;
            toJSON(_: _169.RequestCommit): unknown;
            fromPartial<I_11 extends {} & {} & Record<Exclude<keyof I_11, never>, never>>(_: I_11): _169.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _169.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestListSnapshots;
            fromJSON(_: any): _169.RequestListSnapshots;
            toJSON(_: _169.RequestListSnapshots): unknown;
            fromPartial<I_12 extends {} & {} & Record<Exclude<keyof I_12, never>, never>>(_: I_12): _169.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _169.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestOfferSnapshot;
            fromJSON(object: any): _169.RequestOfferSnapshot;
            toJSON(message: _169.RequestOfferSnapshot): unknown;
            fromPartial<I_13 extends {
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
                } & Record<Exclude<keyof I_13["snapshot"], keyof _169.Snapshot>, never>;
                appHash?: Uint8Array;
            } & Record<Exclude<keyof I_13, keyof _169.RequestOfferSnapshot>, never>>(object: I_13): _169.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _169.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestLoadSnapshotChunk;
            fromJSON(object: any): _169.RequestLoadSnapshotChunk;
            toJSON(message: _169.RequestLoadSnapshotChunk): unknown;
            fromPartial<I_14 extends {
                height?: any;
                format?: number;
                chunk?: number;
            } & {
                height?: any;
                format?: number;
                chunk?: number;
            } & Record<Exclude<keyof I_14, keyof _169.RequestLoadSnapshotChunk>, never>>(object: I_14): _169.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _169.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestApplySnapshotChunk;
            fromJSON(object: any): _169.RequestApplySnapshotChunk;
            toJSON(message: _169.RequestApplySnapshotChunk): unknown;
            fromPartial<I_15 extends {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            } & {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            } & Record<Exclude<keyof I_15, keyof _169.RequestApplySnapshotChunk>, never>>(object: I_15): _169.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _169.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Response;
            fromJSON(object: any): _169.Response;
            toJSON(message: _169.Response): unknown;
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
                    result?: _169.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _169.ResponseApplySnapshotChunk_Result;
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
                    appVersion?: any;
                    lastBlockHeight?: any;
                    lastBlockAppHash?: Uint8Array;
                } & {
                    data?: string;
                    version?: string;
                    appVersion?: any;
                    lastBlockHeight?: any;
                    lastBlockAppHash?: Uint8Array;
                } & Record<Exclude<keyof I_16["info"], keyof _169.ResponseInfo>, never>;
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
                } & {
                    code?: number;
                    log?: string;
                    info?: string;
                } & Record<Exclude<keyof I_16["setOption"], keyof _169.ResponseSetOption>, never>;
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
                        } & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["block"], keyof _169.BlockParams>, never>;
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["evidence"], keyof _176.EvidenceParams>, never>;
                        validator?: {
                            pubKeyTypes?: string[];
                        } & {
                            pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["validator"], "pubKeyTypes">, never>;
                        version?: {
                            appVersion?: any;
                        } & {
                            appVersion?: any;
                        } & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["version"], "appVersion">, never>;
                    } & Record<Exclude<keyof I_16["initChain"]["consensusParams"], keyof _169.ConsensusParams>, never>;
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
                        } & Record<Exclude<keyof I_16["initChain"]["validators"][number]["pubKey"], keyof _170.PublicKey>, never>;
                        power?: any;
                    } & Record<Exclude<keyof I_16["initChain"]["validators"][number], keyof _169.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_16["initChain"]["validators"], keyof {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[]>, never>;
                    appHash?: Uint8Array;
                } & Record<Exclude<keyof I_16["initChain"], keyof _169.ResponseInitChain>, never>;
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
                        } & Record<Exclude<keyof I_16["query"]["proofOps"]["ops"][number], keyof _171.ProofOp>, never>)[] & Record<Exclude<keyof I_16["query"]["proofOps"]["ops"], keyof {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["query"]["proofOps"], "ops">, never>;
                    height?: any;
                    codespace?: string;
                } & Record<Exclude<keyof I_16["query"], keyof _169.ResponseQuery>, never>;
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
                        } & Record<Exclude<keyof I_16["beginBlock"]["events"][number]["attributes"][number], keyof _169.EventAttribute>, never>)[] & Record<Exclude<keyof I_16["beginBlock"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["beginBlock"]["events"][number], keyof _169.Event>, never>)[] & Record<Exclude<keyof I_16["beginBlock"]["events"], keyof {
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
                        } & Record<Exclude<keyof I_16["checkTx"]["events"][number]["attributes"][number], keyof _169.EventAttribute>, never>)[] & Record<Exclude<keyof I_16["checkTx"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["checkTx"]["events"][number], keyof _169.Event>, never>)[] & Record<Exclude<keyof I_16["checkTx"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                    codespace?: string;
                } & Record<Exclude<keyof I_16["checkTx"], keyof _169.ResponseCheckTx>, never>;
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
                        } & Record<Exclude<keyof I_16["deliverTx"]["events"][number]["attributes"][number], keyof _169.EventAttribute>, never>)[] & Record<Exclude<keyof I_16["deliverTx"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["deliverTx"]["events"][number], keyof _169.Event>, never>)[] & Record<Exclude<keyof I_16["deliverTx"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                    codespace?: string;
                } & Record<Exclude<keyof I_16["deliverTx"], keyof _169.ResponseDeliverTx>, never>;
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
                        } & Record<Exclude<keyof I_16["endBlock"]["validatorUpdates"][number]["pubKey"], keyof _170.PublicKey>, never>;
                        power?: any;
                    } & Record<Exclude<keyof I_16["endBlock"]["validatorUpdates"][number], keyof _169.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_16["endBlock"]["validatorUpdates"], keyof {
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
                        } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["block"], keyof _169.BlockParams>, never>;
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["evidence"], keyof _176.EvidenceParams>, never>;
                        validator?: {
                            pubKeyTypes?: string[];
                        } & {
                            pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["validator"], "pubKeyTypes">, never>;
                        version?: {
                            appVersion?: any;
                        } & {
                            appVersion?: any;
                        } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["version"], "appVersion">, never>;
                    } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"], keyof _169.ConsensusParams>, never>;
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
                        } & Record<Exclude<keyof I_16["endBlock"]["events"][number]["attributes"][number], keyof _169.EventAttribute>, never>)[] & Record<Exclude<keyof I_16["endBlock"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["endBlock"]["events"][number], keyof _169.Event>, never>)[] & Record<Exclude<keyof I_16["endBlock"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                } & Record<Exclude<keyof I_16["endBlock"], keyof _169.ResponseEndBlock>, never>;
                commit?: {
                    data?: Uint8Array;
                    retainHeight?: any;
                } & {
                    data?: Uint8Array;
                    retainHeight?: any;
                } & Record<Exclude<keyof I_16["commit"], keyof _169.ResponseCommit>, never>;
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
                    } & Record<Exclude<keyof I_16["listSnapshots"]["snapshots"][number], keyof _169.Snapshot>, never>)[] & Record<Exclude<keyof I_16["listSnapshots"]["snapshots"], keyof {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_16["listSnapshots"], "snapshots">, never>;
                offerSnapshot?: {
                    result?: _169.ResponseOfferSnapshot_Result;
                } & {
                    result?: _169.ResponseOfferSnapshot_Result;
                } & Record<Exclude<keyof I_16["offerSnapshot"], "result">, never>;
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                } & {
                    chunk?: Uint8Array;
                } & Record<Exclude<keyof I_16["loadSnapshotChunk"], "chunk">, never>;
                applySnapshotChunk?: {
                    result?: _169.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                } & {
                    result?: _169.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[] & number[] & Record<Exclude<keyof I_16["applySnapshotChunk"]["refetchChunks"], keyof number[]>, never>;
                    rejectSenders?: string[] & string[] & Record<Exclude<keyof I_16["applySnapshotChunk"]["rejectSenders"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_16["applySnapshotChunk"], keyof _169.ResponseApplySnapshotChunk>, never>;
            } & Record<Exclude<keyof I_16, keyof _169.Response>, never>>(object: I_16): _169.Response;
        };
        ResponseException: {
            encode(message: _169.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseException;
            fromJSON(object: any): _169.ResponseException;
            toJSON(message: _169.ResponseException): unknown;
            fromPartial<I_17 extends {
                error?: string;
            } & {
                error?: string;
            } & Record<Exclude<keyof I_17, "error">, never>>(object: I_17): _169.ResponseException;
        };
        ResponseEcho: {
            encode(message: _169.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseEcho;
            fromJSON(object: any): _169.ResponseEcho;
            toJSON(message: _169.ResponseEcho): unknown;
            fromPartial<I_18 extends {
                message?: string;
            } & {
                message?: string;
            } & Record<Exclude<keyof I_18, "message">, never>>(object: I_18): _169.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _169.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseFlush;
            fromJSON(_: any): _169.ResponseFlush;
            toJSON(_: _169.ResponseFlush): unknown;
            fromPartial<I_19 extends {} & {} & Record<Exclude<keyof I_19, never>, never>>(_: I_19): _169.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _169.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseInfo;
            fromJSON(object: any): _169.ResponseInfo;
            toJSON(message: _169.ResponseInfo): unknown;
            fromPartial<I_20 extends {
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
            } & Record<Exclude<keyof I_20, keyof _169.ResponseInfo>, never>>(object: I_20): _169.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _169.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseSetOption;
            fromJSON(object: any): _169.ResponseSetOption;
            toJSON(message: _169.ResponseSetOption): unknown;
            fromPartial<I_21 extends {
                code?: number;
                log?: string;
                info?: string;
            } & {
                code?: number;
                log?: string;
                info?: string;
            } & Record<Exclude<keyof I_21, keyof _169.ResponseSetOption>, never>>(object: I_21): _169.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _169.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseInitChain;
            fromJSON(object: any): _169.ResponseInitChain;
            toJSON(message: _169.ResponseInitChain): unknown;
            fromPartial<I_22 extends {
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
                    } & Record<Exclude<keyof I_22["consensusParams"]["block"], keyof _169.BlockParams>, never>;
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & Record<Exclude<keyof I_22["consensusParams"]["evidence"], keyof _176.EvidenceParams>, never>;
                    validator?: {
                        pubKeyTypes?: string[];
                    } & {
                        pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_22["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_22["consensusParams"]["validator"], "pubKeyTypes">, never>;
                    version?: {
                        appVersion?: any;
                    } & {
                        appVersion?: any;
                    } & Record<Exclude<keyof I_22["consensusParams"]["version"], "appVersion">, never>;
                } & Record<Exclude<keyof I_22["consensusParams"], keyof _169.ConsensusParams>, never>;
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
                    } & Record<Exclude<keyof I_22["validators"][number]["pubKey"], keyof _170.PublicKey>, never>;
                    power?: any;
                } & Record<Exclude<keyof I_22["validators"][number], keyof _169.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_22["validators"], keyof {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[]>, never>;
                appHash?: Uint8Array;
            } & Record<Exclude<keyof I_22, keyof _169.ResponseInitChain>, never>>(object: I_22): _169.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _169.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseQuery;
            fromJSON(object: any): _169.ResponseQuery;
            toJSON(message: _169.ResponseQuery): unknown;
            fromPartial<I_23 extends {
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
                    } & Record<Exclude<keyof I_23["proofOps"]["ops"][number], keyof _171.ProofOp>, never>)[] & Record<Exclude<keyof I_23["proofOps"]["ops"], keyof {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_23["proofOps"], "ops">, never>;
                height?: any;
                codespace?: string;
            } & Record<Exclude<keyof I_23, keyof _169.ResponseQuery>, never>>(object: I_23): _169.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _169.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseBeginBlock;
            fromJSON(object: any): _169.ResponseBeginBlock;
            toJSON(message: _169.ResponseBeginBlock): unknown;
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
                    } & Record<Exclude<keyof I_24["events"][number]["attributes"][number], keyof _169.EventAttribute>, never>)[] & Record<Exclude<keyof I_24["events"][number]["attributes"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_24["events"][number], keyof _169.Event>, never>)[] & Record<Exclude<keyof I_24["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_24, "events">, never>>(object: I_24): _169.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _169.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseCheckTx;
            fromJSON(object: any): _169.ResponseCheckTx;
            toJSON(message: _169.ResponseCheckTx): unknown;
            fromPartial<I_25 extends {
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
                    } & Record<Exclude<keyof I_25["events"][number]["attributes"][number], keyof _169.EventAttribute>, never>)[] & Record<Exclude<keyof I_25["events"][number]["attributes"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_25["events"][number], keyof _169.Event>, never>)[] & Record<Exclude<keyof I_25["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[]>, never>;
                codespace?: string;
            } & Record<Exclude<keyof I_25, keyof _169.ResponseCheckTx>, never>>(object: I_25): _169.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _169.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseDeliverTx;
            fromJSON(object: any): _169.ResponseDeliverTx;
            toJSON(message: _169.ResponseDeliverTx): unknown;
            fromPartial<I_26 extends {
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
                    } & Record<Exclude<keyof I_26["events"][number]["attributes"][number], keyof _169.EventAttribute>, never>)[] & Record<Exclude<keyof I_26["events"][number]["attributes"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_26["events"][number], keyof _169.Event>, never>)[] & Record<Exclude<keyof I_26["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[]>, never>;
                codespace?: string;
            } & Record<Exclude<keyof I_26, keyof _169.ResponseDeliverTx>, never>>(object: I_26): _169.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _169.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseEndBlock;
            fromJSON(object: any): _169.ResponseEndBlock;
            toJSON(message: _169.ResponseEndBlock): unknown;
            fromPartial<I_27 extends {
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
                    } & Record<Exclude<keyof I_27["validatorUpdates"][number]["pubKey"], keyof _170.PublicKey>, never>;
                    power?: any;
                } & Record<Exclude<keyof I_27["validatorUpdates"][number], keyof _169.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_27["validatorUpdates"], keyof {
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
                    } & Record<Exclude<keyof I_27["consensusParamUpdates"]["block"], keyof _169.BlockParams>, never>;
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & Record<Exclude<keyof I_27["consensusParamUpdates"]["evidence"], keyof _176.EvidenceParams>, never>;
                    validator?: {
                        pubKeyTypes?: string[];
                    } & {
                        pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_27["consensusParamUpdates"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_27["consensusParamUpdates"]["validator"], "pubKeyTypes">, never>;
                    version?: {
                        appVersion?: any;
                    } & {
                        appVersion?: any;
                    } & Record<Exclude<keyof I_27["consensusParamUpdates"]["version"], "appVersion">, never>;
                } & Record<Exclude<keyof I_27["consensusParamUpdates"], keyof _169.ConsensusParams>, never>;
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
                    } & Record<Exclude<keyof I_27["events"][number]["attributes"][number], keyof _169.EventAttribute>, never>)[] & Record<Exclude<keyof I_27["events"][number]["attributes"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_27["events"][number], keyof _169.Event>, never>)[] & Record<Exclude<keyof I_27["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_27, keyof _169.ResponseEndBlock>, never>>(object: I_27): _169.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _169.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseCommit;
            fromJSON(object: any): _169.ResponseCommit;
            toJSON(message: _169.ResponseCommit): unknown;
            fromPartial<I_28 extends {
                data?: Uint8Array;
                retainHeight?: any;
            } & {
                data?: Uint8Array;
                retainHeight?: any;
            } & Record<Exclude<keyof I_28, keyof _169.ResponseCommit>, never>>(object: I_28): _169.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _169.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseListSnapshots;
            fromJSON(object: any): _169.ResponseListSnapshots;
            toJSON(message: _169.ResponseListSnapshots): unknown;
            fromPartial<I_29 extends {
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
                } & Record<Exclude<keyof I_29["snapshots"][number], keyof _169.Snapshot>, never>)[] & Record<Exclude<keyof I_29["snapshots"], keyof {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_29, "snapshots">, never>>(object: I_29): _169.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _169.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseOfferSnapshot;
            fromJSON(object: any): _169.ResponseOfferSnapshot;
            toJSON(message: _169.ResponseOfferSnapshot): unknown;
            fromPartial<I_30 extends {
                result?: _169.ResponseOfferSnapshot_Result;
            } & {
                result?: _169.ResponseOfferSnapshot_Result;
            } & Record<Exclude<keyof I_30, "result">, never>>(object: I_30): _169.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _169.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _169.ResponseLoadSnapshotChunk;
            toJSON(message: _169.ResponseLoadSnapshotChunk): unknown;
            fromPartial<I_31 extends {
                chunk?: Uint8Array;
            } & {
                chunk?: Uint8Array;
            } & Record<Exclude<keyof I_31, "chunk">, never>>(object: I_31): _169.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _169.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseApplySnapshotChunk;
            fromJSON(object: any): _169.ResponseApplySnapshotChunk;
            toJSON(message: _169.ResponseApplySnapshotChunk): unknown;
            fromPartial<I_32 extends {
                result?: _169.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            } & {
                result?: _169.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[] & number[] & Record<Exclude<keyof I_32["refetchChunks"], keyof number[]>, never>;
                rejectSenders?: string[] & string[] & Record<Exclude<keyof I_32["rejectSenders"], keyof string[]>, never>;
            } & Record<Exclude<keyof I_32, keyof _169.ResponseApplySnapshotChunk>, never>>(object: I_32): _169.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _169.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ConsensusParams;
            fromJSON(object: any): _169.ConsensusParams;
            toJSON(message: _169.ConsensusParams): unknown;
            fromPartial<I_33 extends {
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
                } & Record<Exclude<keyof I_33["block"], keyof _169.BlockParams>, never>;
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & Record<Exclude<keyof I_33["evidence"], keyof _176.EvidenceParams>, never>;
                validator?: {
                    pubKeyTypes?: string[];
                } & {
                    pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_33["validator"]["pubKeyTypes"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_33["validator"], "pubKeyTypes">, never>;
                version?: {
                    appVersion?: any;
                } & {
                    appVersion?: any;
                } & Record<Exclude<keyof I_33["version"], "appVersion">, never>;
            } & Record<Exclude<keyof I_33, keyof _169.ConsensusParams>, never>>(object: I_33): _169.ConsensusParams;
        };
        BlockParams: {
            encode(message: _169.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.BlockParams;
            fromJSON(object: any): _169.BlockParams;
            toJSON(message: _169.BlockParams): unknown;
            fromPartial<I_34 extends {
                maxBytes?: any;
                maxGas?: any;
            } & {
                maxBytes?: any;
                maxGas?: any;
            } & Record<Exclude<keyof I_34, keyof _169.BlockParams>, never>>(object: I_34): _169.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _169.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.LastCommitInfo;
            fromJSON(object: any): _169.LastCommitInfo;
            toJSON(message: _169.LastCommitInfo): unknown;
            fromPartial<I_35 extends {
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
                    } & Record<Exclude<keyof I_35["votes"][number]["validator"], keyof _169.Validator>, never>;
                    signedLastBlock?: boolean;
                } & Record<Exclude<keyof I_35["votes"][number], keyof _169.VoteInfo>, never>)[] & Record<Exclude<keyof I_35["votes"], keyof {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                }[]>, never>;
            } & Record<Exclude<keyof I_35, keyof _169.LastCommitInfo>, never>>(object: I_35): _169.LastCommitInfo;
        };
        Event: {
            encode(message: _169.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Event;
            fromJSON(object: any): _169.Event;
            toJSON(message: _169.Event): unknown;
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
                } & Record<Exclude<keyof I_36["attributes"][number], keyof _169.EventAttribute>, never>)[] & Record<Exclude<keyof I_36["attributes"], keyof {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[]>, never>;
            } & Record<Exclude<keyof I_36, keyof _169.Event>, never>>(object: I_36): _169.Event;
        };
        EventAttribute: {
            encode(message: _169.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.EventAttribute;
            fromJSON(object: any): _169.EventAttribute;
            toJSON(message: _169.EventAttribute): unknown;
            fromPartial<I_37 extends {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            } & Record<Exclude<keyof I_37, keyof _169.EventAttribute>, never>>(object: I_37): _169.EventAttribute;
        };
        TxResult: {
            encode(message: _169.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.TxResult;
            fromJSON(object: any): _169.TxResult;
            toJSON(message: _169.TxResult): unknown;
            fromPartial<I_38 extends {
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
                        } & Record<Exclude<keyof I_38["result"]["events"][number]["attributes"][number], keyof _169.EventAttribute>, never>)[] & Record<Exclude<keyof I_38["result"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_38["result"]["events"][number], keyof _169.Event>, never>)[] & Record<Exclude<keyof I_38["result"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                    codespace?: string;
                } & Record<Exclude<keyof I_38["result"], keyof _169.ResponseDeliverTx>, never>;
            } & Record<Exclude<keyof I_38, keyof _169.TxResult>, never>>(object: I_38): _169.TxResult;
        };
        Validator: {
            encode(message: _169.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Validator;
            fromJSON(object: any): _169.Validator;
            toJSON(message: _169.Validator): unknown;
            fromPartial<I_39 extends {
                address?: Uint8Array;
                power?: any;
            } & {
                address?: Uint8Array;
                power?: any;
            } & Record<Exclude<keyof I_39, keyof _169.Validator>, never>>(object: I_39): _169.Validator;
        };
        ValidatorUpdate: {
            encode(message: _169.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ValidatorUpdate;
            fromJSON(object: any): _169.ValidatorUpdate;
            toJSON(message: _169.ValidatorUpdate): unknown;
            fromPartial<I_40 extends {
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
                } & Record<Exclude<keyof I_40["pubKey"], keyof _170.PublicKey>, never>;
                power?: any;
            } & Record<Exclude<keyof I_40, keyof _169.ValidatorUpdate>, never>>(object: I_40): _169.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _169.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.VoteInfo;
            fromJSON(object: any): _169.VoteInfo;
            toJSON(message: _169.VoteInfo): unknown;
            fromPartial<I_41 extends {
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
                } & Record<Exclude<keyof I_41["validator"], keyof _169.Validator>, never>;
                signedLastBlock?: boolean;
            } & Record<Exclude<keyof I_41, keyof _169.VoteInfo>, never>>(object: I_41): _169.VoteInfo;
        };
        Evidence: {
            encode(message: _169.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Evidence;
            fromJSON(object: any): _169.Evidence;
            toJSON(message: _169.Evidence): unknown;
            fromPartial<I_42 extends {
                type?: _169.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                height?: any;
                time?: Date;
                totalVotingPower?: any;
            } & {
                type?: _169.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                } & {
                    address?: Uint8Array;
                    power?: any;
                } & Record<Exclude<keyof I_42["validator"], keyof _169.Validator>, never>;
                height?: any;
                time?: Date;
                totalVotingPower?: any;
            } & Record<Exclude<keyof I_42, keyof _169.Evidence>, never>>(object: I_42): _169.Evidence;
        };
        Snapshot: {
            encode(message: _169.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Snapshot;
            fromJSON(object: any): _169.Snapshot;
            toJSON(message: _169.Snapshot): unknown;
            fromPartial<I_43 extends {
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
            } & Record<Exclude<keyof I_43, keyof _169.Snapshot>, never>>(object: I_43): _169.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _171.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Proof;
            fromJSON(object: any): _171.Proof;
            toJSON(message: _171.Proof): unknown;
            fromPartial<I extends {
                total?: any;
                index?: any;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            } & {
                total?: any;
                index?: any;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["aunts"], keyof Uint8Array[]>, never>;
            } & Record<Exclude<keyof I, keyof _171.Proof>, never>>(object: I): _171.Proof;
        };
        ValueOp: {
            encode(message: _171.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.ValueOp;
            fromJSON(object: any): _171.ValueOp;
            toJSON(message: _171.ValueOp): unknown;
            fromPartial<I_1 extends {
                key?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            } & {
                key?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                } & {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_1["proof"]["aunts"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_1["proof"], keyof _171.Proof>, never>;
            } & Record<Exclude<keyof I_1, keyof _171.ValueOp>, never>>(object: I_1): _171.ValueOp;
        };
        DominoOp: {
            encode(message: _171.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.DominoOp;
            fromJSON(object: any): _171.DominoOp;
            toJSON(message: _171.DominoOp): unknown;
            fromPartial<I_2 extends {
                key?: string;
                input?: string;
                output?: string;
            } & {
                key?: string;
                input?: string;
                output?: string;
            } & Record<Exclude<keyof I_2, keyof _171.DominoOp>, never>>(object: I_2): _171.DominoOp;
        };
        ProofOp: {
            encode(message: _171.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.ProofOp;
            fromJSON(object: any): _171.ProofOp;
            toJSON(message: _171.ProofOp): unknown;
            fromPartial<I_3 extends {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            } & {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            } & Record<Exclude<keyof I_3, keyof _171.ProofOp>, never>>(object: I_3): _171.ProofOp;
        };
        ProofOps: {
            encode(message: _171.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.ProofOps;
            fromJSON(object: any): _171.ProofOps;
            toJSON(message: _171.ProofOps): unknown;
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
                } & Record<Exclude<keyof I_4["ops"][number], keyof _171.ProofOp>, never>)[] & Record<Exclude<keyof I_4["ops"], keyof {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_4, "ops">, never>>(object: I_4): _171.ProofOps;
        };
        PublicKey: {
            encode(message: _170.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.PublicKey;
            fromJSON(object: any): _170.PublicKey;
            toJSON(message: _170.PublicKey): unknown;
            fromPartial<I_5 extends {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & Record<Exclude<keyof I_5, keyof _170.PublicKey>, never>>(object: I_5): _170.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _172.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.BitArray;
                fromJSON(object: any): _172.BitArray;
                toJSON(message: _172.BitArray): unknown;
                fromPartial<I extends {
                    bits?: any;
                    elems?: any[];
                } & {
                    bits?: any;
                    elems?: any[] & any[] & Record<Exclude<keyof I["elems"], keyof any[]>, never>;
                } & Record<Exclude<keyof I, keyof _172.BitArray>, never>>(object: I): _172.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _173.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ProtocolVersion;
            fromJSON(object: any): _173.ProtocolVersion;
            toJSON(message: _173.ProtocolVersion): unknown;
            fromPartial<I extends {
                p2p?: any;
                block?: any;
                app?: any;
            } & {
                p2p?: any;
                block?: any;
                app?: any;
            } & Record<Exclude<keyof I, keyof _173.ProtocolVersion>, never>>(object: I): _173.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _173.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.NodeInfo;
            fromJSON(object: any): _173.NodeInfo;
            toJSON(message: _173.NodeInfo): unknown;
            fromPartial<I_1 extends {
                protocolVersion?: {
                    p2p?: any;
                    block?: any;
                    app?: any;
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
                    p2p?: any;
                    block?: any;
                    app?: any;
                } & {
                    p2p?: any;
                    block?: any;
                    app?: any;
                } & Record<Exclude<keyof I_1["protocolVersion"], keyof _173.ProtocolVersion>, never>;
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
                } & Record<Exclude<keyof I_1["other"], keyof _173.NodeInfoOther>, never>;
            } & Record<Exclude<keyof I_1, keyof _173.NodeInfo>, never>>(object: I_1): _173.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _173.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.NodeInfoOther;
            fromJSON(object: any): _173.NodeInfoOther;
            toJSON(message: _173.NodeInfoOther): unknown;
            fromPartial<I_2 extends {
                txIndex?: string;
                rpcAddress?: string;
            } & {
                txIndex?: string;
                rpcAddress?: string;
            } & Record<Exclude<keyof I_2, keyof _173.NodeInfoOther>, never>>(object: I_2): _173.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _173.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.PeerInfo;
            fromJSON(object: any): _173.PeerInfo;
            toJSON(message: _173.PeerInfo): unknown;
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
                } & Record<Exclude<keyof I_3["addressInfo"][number], keyof _173.PeerAddressInfo>, never>)[] & Record<Exclude<keyof I_3["addressInfo"], keyof {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                }[]>, never>;
                lastConnected?: Date;
            } & Record<Exclude<keyof I_3, keyof _173.PeerInfo>, never>>(object: I_3): _173.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _173.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.PeerAddressInfo;
            fromJSON(object: any): _173.PeerAddressInfo;
            toJSON(message: _173.PeerAddressInfo): unknown;
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
            } & Record<Exclude<keyof I_4, keyof _173.PeerAddressInfo>, never>>(object: I_4): _173.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _178.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.ValidatorSet;
            fromJSON(object: any): _178.ValidatorSet;
            toJSON(message: _178.ValidatorSet): unknown;
            fromPartial<I extends {
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
                    } & Record<Exclude<keyof I["validators"][number]["pubKey"], keyof _170.PublicKey>, never>;
                    votingPower?: any;
                    proposerPriority?: any;
                } & Record<Exclude<keyof I["validators"][number], keyof _178.Validator>, never>)[] & Record<Exclude<keyof I["validators"], keyof {
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
                    } & Record<Exclude<keyof I["proposer"]["pubKey"], keyof _170.PublicKey>, never>;
                    votingPower?: any;
                    proposerPriority?: any;
                } & Record<Exclude<keyof I["proposer"], keyof _178.Validator>, never>;
                totalVotingPower?: any;
            } & Record<Exclude<keyof I, keyof _178.ValidatorSet>, never>>(object: I): _178.ValidatorSet;
        };
        Validator: {
            encode(message: _178.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Validator;
            fromJSON(object: any): _178.Validator;
            toJSON(message: _178.Validator): unknown;
            fromPartial<I_1 extends {
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
                } & Record<Exclude<keyof I_1["pubKey"], keyof _170.PublicKey>, never>;
                votingPower?: any;
                proposerPriority?: any;
            } & Record<Exclude<keyof I_1, keyof _178.Validator>, never>>(object: I_1): _178.Validator;
        };
        SimpleValidator: {
            encode(message: _178.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.SimpleValidator;
            fromJSON(object: any): _178.SimpleValidator;
            toJSON(message: _178.SimpleValidator): unknown;
            fromPartial<I_2 extends {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: any;
            } & {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & Record<Exclude<keyof I_2["pubKey"], keyof _170.PublicKey>, never>;
                votingPower?: any;
            } & Record<Exclude<keyof I_2, keyof _178.SimpleValidator>, never>>(object: I_2): _178.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _177.BlockIDFlag;
        blockIDFlagToJSON(object: _177.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _177.SignedMsgType;
        signedMsgTypeToJSON(object: _177.SignedMsgType): string;
        BlockIDFlag: typeof _177.BlockIDFlag;
        SignedMsgType: typeof _177.SignedMsgType;
        PartSetHeader: {
            encode(message: _177.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.PartSetHeader;
            fromJSON(object: any): _177.PartSetHeader;
            toJSON(message: _177.PartSetHeader): unknown;
            fromPartial<I_3 extends {
                total?: number;
                hash?: Uint8Array;
            } & {
                total?: number;
                hash?: Uint8Array;
            } & Record<Exclude<keyof I_3, keyof _177.PartSetHeader>, never>>(object: I_3): _177.PartSetHeader;
        };
        Part: {
            encode(message: _177.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Part;
            fromJSON(object: any): _177.Part;
            toJSON(message: _177.Part): unknown;
            fromPartial<I_4 extends {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            } & {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                } & {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_4["proof"]["aunts"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_4["proof"], keyof _171.Proof>, never>;
            } & Record<Exclude<keyof I_4, keyof _177.Part>, never>>(object: I_4): _177.Part;
        };
        BlockID: {
            encode(message: _177.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.BlockID;
            fromJSON(object: any): _177.BlockID;
            toJSON(message: _177.BlockID): unknown;
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
                } & Record<Exclude<keyof I_5["partSetHeader"], keyof _177.PartSetHeader>, never>;
            } & Record<Exclude<keyof I_5, keyof _177.BlockID>, never>>(object: I_5): _177.BlockID;
        };
        Header: {
            encode(message: _177.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Header;
            fromJSON(object: any): _177.Header;
            toJSON(message: _177.Header): unknown;
            fromPartial<I_6 extends {
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
                } & Record<Exclude<keyof I_6["version"], keyof _179.Consensus>, never>;
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
                    } & Record<Exclude<keyof I_6["lastBlockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_6["lastBlockId"], keyof _177.BlockID>, never>;
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            } & Record<Exclude<keyof I_6, keyof _177.Header>, never>>(object: I_6): _177.Header;
        };
        Data: {
            encode(message: _177.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Data;
            fromJSON(object: any): _177.Data;
            toJSON(message: _177.Data): unknown;
            fromPartial<I_7 extends {
                txs?: Uint8Array[];
            } & {
                txs?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_7["txs"], keyof Uint8Array[]>, never>;
            } & Record<Exclude<keyof I_7, "txs">, never>>(object: I_7): _177.Data;
        };
        Vote: {
            encode(message: _177.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Vote;
            fromJSON(object: any): _177.Vote;
            toJSON(message: _177.Vote): unknown;
            fromPartial<I_8 extends {
                type?: _177.SignedMsgType;
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
                type?: _177.SignedMsgType;
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
                    } & Record<Exclude<keyof I_8["blockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_8["blockId"], keyof _177.BlockID>, never>;
                timestamp?: Date;
                validatorAddress?: Uint8Array;
                validatorIndex?: number;
                signature?: Uint8Array;
            } & Record<Exclude<keyof I_8, keyof _177.Vote>, never>>(object: I_8): _177.Vote;
        };
        Commit: {
            encode(message: _177.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Commit;
            fromJSON(object: any): _177.Commit;
            toJSON(message: _177.Commit): unknown;
            fromPartial<I_9 extends {
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
                    blockIdFlag?: _177.BlockIDFlag;
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
                    } & Record<Exclude<keyof I_9["blockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_9["blockId"], keyof _177.BlockID>, never>;
                signatures?: {
                    blockIdFlag?: _177.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[] & ({
                    blockIdFlag?: _177.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                } & {
                    blockIdFlag?: _177.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                } & Record<Exclude<keyof I_9["signatures"][number], keyof _177.CommitSig>, never>)[] & Record<Exclude<keyof I_9["signatures"], keyof {
                    blockIdFlag?: _177.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_9, keyof _177.Commit>, never>>(object: I_9): _177.Commit;
        };
        CommitSig: {
            encode(message: _177.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.CommitSig;
            fromJSON(object: any): _177.CommitSig;
            toJSON(message: _177.CommitSig): unknown;
            fromPartial<I_10 extends {
                blockIdFlag?: _177.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            } & {
                blockIdFlag?: _177.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            } & Record<Exclude<keyof I_10, keyof _177.CommitSig>, never>>(object: I_10): _177.CommitSig;
        };
        Proposal: {
            encode(message: _177.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Proposal;
            fromJSON(object: any): _177.Proposal;
            toJSON(message: _177.Proposal): unknown;
            fromPartial<I_11 extends {
                type?: _177.SignedMsgType;
                height?: any;
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
                type?: _177.SignedMsgType;
                height?: any;
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
                    } & Record<Exclude<keyof I_11["blockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_11["blockId"], keyof _177.BlockID>, never>;
                timestamp?: Date;
                signature?: Uint8Array;
            } & Record<Exclude<keyof I_11, keyof _177.Proposal>, never>>(object: I_11): _177.Proposal;
        };
        SignedHeader: {
            encode(message: _177.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.SignedHeader;
            fromJSON(object: any): _177.SignedHeader;
            toJSON(message: _177.SignedHeader): unknown;
            fromPartial<I_12 extends {
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
                        blockIdFlag?: _177.BlockIDFlag;
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
                    } & Record<Exclude<keyof I_12["header"]["version"], keyof _179.Consensus>, never>;
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
                        } & Record<Exclude<keyof I_12["header"]["lastBlockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_12["header"]["lastBlockId"], keyof _177.BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I_12["header"], keyof _177.Header>, never>;
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
                        blockIdFlag?: _177.BlockIDFlag;
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
                        } & Record<Exclude<keyof I_12["commit"]["blockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_12["commit"]["blockId"], keyof _177.BlockID>, never>;
                    signatures?: {
                        blockIdFlag?: _177.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[] & ({
                        blockIdFlag?: _177.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & {
                        blockIdFlag?: _177.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I_12["commit"]["signatures"][number], keyof _177.CommitSig>, never>)[] & Record<Exclude<keyof I_12["commit"]["signatures"], keyof {
                        blockIdFlag?: _177.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_12["commit"], keyof _177.Commit>, never>;
            } & Record<Exclude<keyof I_12, keyof _177.SignedHeader>, never>>(object: I_12): _177.SignedHeader;
        };
        LightBlock: {
            encode(message: _177.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.LightBlock;
            fromJSON(object: any): _177.LightBlock;
            toJSON(message: _177.LightBlock): unknown;
            fromPartial<I_13 extends {
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
                            blockIdFlag?: _177.BlockIDFlag;
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
                            blockIdFlag?: _177.BlockIDFlag;
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
                        } & Record<Exclude<keyof I_13["signedHeader"]["header"]["version"], keyof _179.Consensus>, never>;
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
                            } & Record<Exclude<keyof I_13["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_13["signedHeader"]["header"]["lastBlockId"], keyof _177.BlockID>, never>;
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    } & Record<Exclude<keyof I_13["signedHeader"]["header"], keyof _177.Header>, never>;
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
                            blockIdFlag?: _177.BlockIDFlag;
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
                            } & Record<Exclude<keyof I_13["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_13["signedHeader"]["commit"]["blockId"], keyof _177.BlockID>, never>;
                        signatures?: {
                            blockIdFlag?: _177.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[] & ({
                            blockIdFlag?: _177.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        } & {
                            blockIdFlag?: _177.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        } & Record<Exclude<keyof I_13["signedHeader"]["commit"]["signatures"][number], keyof _177.CommitSig>, never>)[] & Record<Exclude<keyof I_13["signedHeader"]["commit"]["signatures"], keyof {
                            blockIdFlag?: _177.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_13["signedHeader"]["commit"], keyof _177.Commit>, never>;
                } & Record<Exclude<keyof I_13["signedHeader"], keyof _177.SignedHeader>, never>;
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
                        } & Record<Exclude<keyof I_13["validatorSet"]["validators"][number]["pubKey"], keyof _170.PublicKey>, never>;
                        votingPower?: any;
                        proposerPriority?: any;
                    } & Record<Exclude<keyof I_13["validatorSet"]["validators"][number], keyof _178.Validator>, never>)[] & Record<Exclude<keyof I_13["validatorSet"]["validators"], keyof {
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
                        } & Record<Exclude<keyof I_13["validatorSet"]["proposer"]["pubKey"], keyof _170.PublicKey>, never>;
                        votingPower?: any;
                        proposerPriority?: any;
                    } & Record<Exclude<keyof I_13["validatorSet"]["proposer"], keyof _178.Validator>, never>;
                    totalVotingPower?: any;
                } & Record<Exclude<keyof I_13["validatorSet"], keyof _178.ValidatorSet>, never>;
            } & Record<Exclude<keyof I_13, keyof _177.LightBlock>, never>>(object: I_13): _177.LightBlock;
        };
        BlockMeta: {
            encode(message: _177.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.BlockMeta;
            fromJSON(object: any): _177.BlockMeta;
            toJSON(message: _177.BlockMeta): unknown;
            fromPartial<I_14 extends {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                blockSize?: any;
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
                numTxs?: any;
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
                    } & Record<Exclude<keyof I_14["blockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_14["blockId"], keyof _177.BlockID>, never>;
                blockSize?: any;
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
                    } & Record<Exclude<keyof I_14["header"]["version"], keyof _179.Consensus>, never>;
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
                        } & Record<Exclude<keyof I_14["header"]["lastBlockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_14["header"]["lastBlockId"], keyof _177.BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I_14["header"], keyof _177.Header>, never>;
                numTxs?: any;
            } & Record<Exclude<keyof I_14, keyof _177.BlockMeta>, never>>(object: I_14): _177.BlockMeta;
        };
        TxProof: {
            encode(message: _177.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.TxProof;
            fromJSON(object: any): _177.TxProof;
            toJSON(message: _177.TxProof): unknown;
            fromPartial<I_15 extends {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            } & {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                } & {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_15["proof"]["aunts"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_15["proof"], keyof _171.Proof>, never>;
            } & Record<Exclude<keyof I_15, keyof _177.TxProof>, never>>(object: I_15): _177.TxProof;
        };
        ConsensusParams: {
            encode(message: _176.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ConsensusParams;
            fromJSON(object: any): _176.ConsensusParams;
            toJSON(message: _176.ConsensusParams): unknown;
            fromPartial<I_16 extends {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                    timeIotaMs?: any;
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
                    timeIotaMs?: any;
                } & {
                    maxBytes?: any;
                    maxGas?: any;
                    timeIotaMs?: any;
                } & Record<Exclude<keyof I_16["block"], keyof _176.BlockParams>, never>;
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & Record<Exclude<keyof I_16["evidence"], keyof _176.EvidenceParams>, never>;
                validator?: {
                    pubKeyTypes?: string[];
                } & {
                    pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_16["validator"]["pubKeyTypes"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_16["validator"], "pubKeyTypes">, never>;
                version?: {
                    appVersion?: any;
                } & {
                    appVersion?: any;
                } & Record<Exclude<keyof I_16["version"], "appVersion">, never>;
            } & Record<Exclude<keyof I_16, keyof _176.ConsensusParams>, never>>(object: I_16): _176.ConsensusParams;
        };
        BlockParams: {
            encode(message: _176.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.BlockParams;
            fromJSON(object: any): _176.BlockParams;
            toJSON(message: _176.BlockParams): unknown;
            fromPartial<I_17 extends {
                maxBytes?: any;
                maxGas?: any;
                timeIotaMs?: any;
            } & {
                maxBytes?: any;
                maxGas?: any;
                timeIotaMs?: any;
            } & Record<Exclude<keyof I_17, keyof _176.BlockParams>, never>>(object: I_17): _176.BlockParams;
        };
        EvidenceParams: {
            encode(message: _176.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.EvidenceParams;
            fromJSON(object: any): _176.EvidenceParams;
            toJSON(message: _176.EvidenceParams): unknown;
            fromPartial<I_18 extends {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: string;
                maxBytes?: any;
            } & {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: string;
                maxBytes?: any;
            } & Record<Exclude<keyof I_18, keyof _176.EvidenceParams>, never>>(object: I_18): _176.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _176.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ValidatorParams;
            fromJSON(object: any): _176.ValidatorParams;
            toJSON(message: _176.ValidatorParams): unknown;
            fromPartial<I_19 extends {
                pubKeyTypes?: string[];
            } & {
                pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_19["pubKeyTypes"], keyof string[]>, never>;
            } & Record<Exclude<keyof I_19, "pubKeyTypes">, never>>(object: I_19): _176.ValidatorParams;
        };
        VersionParams: {
            encode(message: _176.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.VersionParams;
            fromJSON(object: any): _176.VersionParams;
            toJSON(message: _176.VersionParams): unknown;
            fromPartial<I_20 extends {
                appVersion?: any;
            } & {
                appVersion?: any;
            } & Record<Exclude<keyof I_20, "appVersion">, never>>(object: I_20): _176.VersionParams;
        };
        HashedParams: {
            encode(message: _176.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.HashedParams;
            fromJSON(object: any): _176.HashedParams;
            toJSON(message: _176.HashedParams): unknown;
            fromPartial<I_21 extends {
                blockMaxBytes?: any;
                blockMaxGas?: any;
            } & {
                blockMaxBytes?: any;
                blockMaxGas?: any;
            } & Record<Exclude<keyof I_21, keyof _176.HashedParams>, never>>(object: I_21): _176.HashedParams;
        };
        Evidence: {
            encode(message: _175.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Evidence;
            fromJSON(object: any): _175.Evidence;
            toJSON(message: _175.Evidence): unknown;
            fromPartial<I_22 extends {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _177.SignedMsgType;
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
                        type?: _177.SignedMsgType;
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
                                    blockIdFlag?: _177.BlockIDFlag;
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
                        type?: _177.SignedMsgType;
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
                        type?: _177.SignedMsgType;
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
                        type?: _177.SignedMsgType;
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
                        type?: _177.SignedMsgType;
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
                            } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteA"]["blockId"], keyof _177.BlockID>, never>;
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteA"], keyof _177.Vote>, never>;
                    voteB?: {
                        type?: _177.SignedMsgType;
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
                        type?: _177.SignedMsgType;
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
                            } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteB"]["blockId"], keyof _177.BlockID>, never>;
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteB"], keyof _177.Vote>, never>;
                    totalVotingPower?: any;
                    validatorPower?: any;
                    timestamp?: Date;
                } & Record<Exclude<keyof I_22["duplicateVoteEvidence"], keyof _175.DuplicateVoteEvidence>, never>;
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
                                    blockIdFlag?: _177.BlockIDFlag;
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
                                    blockIdFlag?: _177.BlockIDFlag;
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
                                    blockIdFlag?: _177.BlockIDFlag;
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
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof _179.Consensus>, never>;
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
                                    } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof _177.BlockID>, never>;
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof _177.Header>, never>;
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
                                    blockIdFlag?: _177.BlockIDFlag;
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
                                    } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof _177.BlockID>, never>;
                                signatures?: {
                                    blockIdFlag?: _177.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[] & ({
                                    blockIdFlag?: _177.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                } & {
                                    blockIdFlag?: _177.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof _177.CommitSig>, never>)[] & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                    blockIdFlag?: _177.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[]>, never>;
                            } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof _177.Commit>, never>;
                        } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof _177.SignedHeader>, never>;
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
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof _170.PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof _178.Validator>, never>)[] & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
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
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof _170.PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof _178.Validator>, never>;
                            totalVotingPower?: any;
                        } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof _178.ValidatorSet>, never>;
                    } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"], keyof _177.LightBlock>, never>;
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
                        } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof _170.PublicKey>, never>;
                        votingPower?: any;
                        proposerPriority?: any;
                    } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["byzantineValidators"][number], keyof _178.Validator>, never>)[] & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["byzantineValidators"], keyof {
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
                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"], keyof _175.LightClientAttackEvidence>, never>;
            } & Record<Exclude<keyof I_22, keyof _175.Evidence>, never>>(object: I_22): _175.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _175.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.DuplicateVoteEvidence;
            fromJSON(object: any): _175.DuplicateVoteEvidence;
            toJSON(message: _175.DuplicateVoteEvidence): unknown;
            fromPartial<I_23 extends {
                voteA?: {
                    type?: _177.SignedMsgType;
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
                    type?: _177.SignedMsgType;
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
                    type?: _177.SignedMsgType;
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
                    type?: _177.SignedMsgType;
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
                        } & Record<Exclude<keyof I_23["voteA"]["blockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_23["voteA"]["blockId"], keyof _177.BlockID>, never>;
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                } & Record<Exclude<keyof I_23["voteA"], keyof _177.Vote>, never>;
                voteB?: {
                    type?: _177.SignedMsgType;
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
                    type?: _177.SignedMsgType;
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
                        } & Record<Exclude<keyof I_23["voteB"]["blockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_23["voteB"]["blockId"], keyof _177.BlockID>, never>;
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                } & Record<Exclude<keyof I_23["voteB"], keyof _177.Vote>, never>;
                totalVotingPower?: any;
                validatorPower?: any;
                timestamp?: Date;
            } & Record<Exclude<keyof I_23, keyof _175.DuplicateVoteEvidence>, never>>(object: I_23): _175.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _175.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.LightClientAttackEvidence;
            fromJSON(object: any): _175.LightClientAttackEvidence;
            toJSON(message: _175.LightClientAttackEvidence): unknown;
            fromPartial<I_24 extends {
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
                                blockIdFlag?: _177.BlockIDFlag;
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
                                blockIdFlag?: _177.BlockIDFlag;
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
                                blockIdFlag?: _177.BlockIDFlag;
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
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["header"]["version"], keyof _179.Consensus>, never>;
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
                                } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof _177.BlockID>, never>;
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["header"], keyof _177.Header>, never>;
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
                                blockIdFlag?: _177.BlockIDFlag;
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
                                } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof _177.BlockID>, never>;
                            signatures?: {
                                blockIdFlag?: _177.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[] & ({
                                blockIdFlag?: _177.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            } & {
                                blockIdFlag?: _177.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof _177.CommitSig>, never>)[] & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                blockIdFlag?: _177.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"], keyof _177.Commit>, never>;
                    } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"], keyof _177.SignedHeader>, never>;
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
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof _170.PublicKey>, never>;
                            votingPower?: any;
                            proposerPriority?: any;
                        } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["validators"][number], keyof _178.Validator>, never>)[] & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["validators"], keyof {
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
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof _170.PublicKey>, never>;
                            votingPower?: any;
                            proposerPriority?: any;
                        } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["proposer"], keyof _178.Validator>, never>;
                        totalVotingPower?: any;
                    } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"], keyof _178.ValidatorSet>, never>;
                } & Record<Exclude<keyof I_24["conflictingBlock"], keyof _177.LightBlock>, never>;
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
                    } & Record<Exclude<keyof I_24["byzantineValidators"][number]["pubKey"], keyof _170.PublicKey>, never>;
                    votingPower?: any;
                    proposerPriority?: any;
                } & Record<Exclude<keyof I_24["byzantineValidators"][number], keyof _178.Validator>, never>)[] & Record<Exclude<keyof I_24["byzantineValidators"], keyof {
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
            } & Record<Exclude<keyof I_24, keyof _175.LightClientAttackEvidence>, never>>(object: I_24): _175.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _175.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.EvidenceList;
            fromJSON(object: any): _175.EvidenceList;
            toJSON(message: _175.EvidenceList): unknown;
            fromPartial<I_25 extends {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _177.SignedMsgType;
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
                            type?: _177.SignedMsgType;
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
                                        blockIdFlag?: _177.BlockIDFlag;
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
                            type?: _177.SignedMsgType;
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
                            type?: _177.SignedMsgType;
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
                                        blockIdFlag?: _177.BlockIDFlag;
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
                            type?: _177.SignedMsgType;
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
                            type?: _177.SignedMsgType;
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
                                        blockIdFlag?: _177.BlockIDFlag;
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
                            type?: _177.SignedMsgType;
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
                            type?: _177.SignedMsgType;
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
                            type?: _177.SignedMsgType;
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
                            type?: _177.SignedMsgType;
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
                                } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                            } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], keyof _177.BlockID>, never>;
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteA"], keyof _177.Vote>, never>;
                        voteB?: {
                            type?: _177.SignedMsgType;
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
                            type?: _177.SignedMsgType;
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
                                } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                            } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], keyof _177.BlockID>, never>;
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteB"], keyof _177.Vote>, never>;
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"], keyof _175.DuplicateVoteEvidence>, never>;
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
                                        blockIdFlag?: _177.BlockIDFlag;
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
                                        blockIdFlag?: _177.BlockIDFlag;
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
                                        blockIdFlag?: _177.BlockIDFlag;
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
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof _179.Consensus>, never>;
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
                                        } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof _177.BlockID>, never>;
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof _177.Header>, never>;
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
                                        blockIdFlag?: _177.BlockIDFlag;
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
                                        } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof _177.BlockID>, never>;
                                    signatures?: {
                                        blockIdFlag?: _177.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[] & ({
                                        blockIdFlag?: _177.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & {
                                        blockIdFlag?: _177.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof _177.CommitSig>, never>)[] & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                        blockIdFlag?: _177.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[]>, never>;
                                } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof _177.Commit>, never>;
                            } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof _177.SignedHeader>, never>;
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
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof _170.PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof _178.Validator>, never>)[] & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
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
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof _170.PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof _178.Validator>, never>;
                                totalVotingPower?: any;
                            } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof _178.ValidatorSet>, never>;
                        } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], keyof _177.LightBlock>, never>;
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
                            } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof _170.PublicKey>, never>;
                            votingPower?: any;
                            proposerPriority?: any;
                        } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], keyof _178.Validator>, never>)[] & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], keyof {
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
                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"], keyof _175.LightClientAttackEvidence>, never>;
                } & Record<Exclude<keyof I_25["evidence"][number], keyof _175.Evidence>, never>)[] & Record<Exclude<keyof I_25["evidence"], keyof {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _177.SignedMsgType;
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
                            type?: _177.SignedMsgType;
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
                                        blockIdFlag?: _177.BlockIDFlag;
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
            } & Record<Exclude<keyof I_25, "evidence">, never>>(object: I_25): _175.EvidenceList;
        };
        Block: {
            encode(message: _174.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Block;
            fromJSON(object: any): _174.Block;
            toJSON(message: _174.Block): unknown;
            fromPartial<I_26 extends {
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
                                type?: _177.SignedMsgType;
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
                                type?: _177.SignedMsgType;
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
                                            blockIdFlag?: _177.BlockIDFlag;
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
                        blockIdFlag?: _177.BlockIDFlag;
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
                    } & Record<Exclude<keyof I_26["header"]["version"], keyof _179.Consensus>, never>;
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
                        } & Record<Exclude<keyof I_26["header"]["lastBlockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_26["header"]["lastBlockId"], keyof _177.BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I_26["header"], keyof _177.Header>, never>;
                data?: {
                    txs?: Uint8Array[];
                } & {
                    txs?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_26["data"]["txs"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_26["data"], "txs">, never>;
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _177.SignedMsgType;
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
                                type?: _177.SignedMsgType;
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
                                            blockIdFlag?: _177.BlockIDFlag;
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
                                type?: _177.SignedMsgType;
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
                                type?: _177.SignedMsgType;
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
                                            blockIdFlag?: _177.BlockIDFlag;
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
                                type?: _177.SignedMsgType;
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
                                type?: _177.SignedMsgType;
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
                                            blockIdFlag?: _177.BlockIDFlag;
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
                                type?: _177.SignedMsgType;
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
                                type?: _177.SignedMsgType;
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
                                type?: _177.SignedMsgType;
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
                                type?: _177.SignedMsgType;
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
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], keyof _177.BlockID>, never>;
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"], keyof _177.Vote>, never>;
                            voteB?: {
                                type?: _177.SignedMsgType;
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
                                type?: _177.SignedMsgType;
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
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], keyof _177.BlockID>, never>;
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"], keyof _177.Vote>, never>;
                            totalVotingPower?: any;
                            validatorPower?: any;
                            timestamp?: Date;
                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"], keyof _175.DuplicateVoteEvidence>, never>;
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
                                            blockIdFlag?: _177.BlockIDFlag;
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
                                            blockIdFlag?: _177.BlockIDFlag;
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
                                            blockIdFlag?: _177.BlockIDFlag;
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
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof _179.Consensus>, never>;
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
                                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof _177.BlockID>, never>;
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof _177.Header>, never>;
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
                                            blockIdFlag?: _177.BlockIDFlag;
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
                                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof _177.BlockID>, never>;
                                        signatures?: {
                                            blockIdFlag?: _177.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[] & ({
                                            blockIdFlag?: _177.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        } & {
                                            blockIdFlag?: _177.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof _177.CommitSig>, never>)[] & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                            blockIdFlag?: _177.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[]>, never>;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof _177.Commit>, never>;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof _177.SignedHeader>, never>;
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
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof _170.PublicKey>, never>;
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof _178.Validator>, never>)[] & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
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
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof _170.PublicKey>, never>;
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof _178.Validator>, never>;
                                    totalVotingPower?: any;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof _178.ValidatorSet>, never>;
                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], keyof _177.LightBlock>, never>;
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
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof _170.PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], keyof _178.Validator>, never>)[] & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], keyof {
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
                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"], keyof _175.LightClientAttackEvidence>, never>;
                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number], keyof _175.Evidence>, never>)[] & Record<Exclude<keyof I_26["evidence"]["evidence"], keyof {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _177.SignedMsgType;
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
                                type?: _177.SignedMsgType;
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
                                            blockIdFlag?: _177.BlockIDFlag;
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
                } & Record<Exclude<keyof I_26["evidence"], "evidence">, never>;
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
                        blockIdFlag?: _177.BlockIDFlag;
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
                        } & Record<Exclude<keyof I_26["lastCommit"]["blockId"]["partSetHeader"], keyof _177.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_26["lastCommit"]["blockId"], keyof _177.BlockID>, never>;
                    signatures?: {
                        blockIdFlag?: _177.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[] & ({
                        blockIdFlag?: _177.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & {
                        blockIdFlag?: _177.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I_26["lastCommit"]["signatures"][number], keyof _177.CommitSig>, never>)[] & Record<Exclude<keyof I_26["lastCommit"]["signatures"], keyof {
                        blockIdFlag?: _177.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_26["lastCommit"], keyof _177.Commit>, never>;
            } & Record<Exclude<keyof I_26, keyof _174.Block>, never>>(object: I_26): _174.Block;
        };
    };
    const version: {
        App: {
            encode(message: _179.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.App;
            fromJSON(object: any): _179.App;
            toJSON(message: _179.App): unknown;
            fromPartial<I extends {
                protocol?: any;
                software?: string;
            } & {
                protocol?: any;
                software?: string;
            } & Record<Exclude<keyof I, keyof _179.App>, never>>(object: I): _179.App;
        };
        Consensus: {
            encode(message: _179.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.Consensus;
            fromJSON(object: any): _179.Consensus;
            toJSON(message: _179.Consensus): unknown;
            fromPartial<I_1 extends {
                block?: any;
                app?: any;
            } & {
                block?: any;
                app?: any;
            } & Record<Exclude<keyof I_1, keyof _179.Consensus>, never>>(object: I_1): _179.Consensus;
        };
    };
}
