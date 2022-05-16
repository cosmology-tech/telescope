import { Proof } from "../crypto/proof";
import { Consensus } from "../version/types";
import { ValidatorSet } from "./validator";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** BlockIdFlag indicates which BlcokID the signature is for */
export declare enum BlockIDFlag {
    BLOCK_ID_FLAG_UNKNOWN = 0,
    BLOCK_ID_FLAG_ABSENT = 1,
    BLOCK_ID_FLAG_COMMIT = 2,
    BLOCK_ID_FLAG_NIL = 3,
    UNRECOGNIZED = -1
}
export declare function blockIDFlagFromJSON(object: any): BlockIDFlag;
export declare function blockIDFlagToJSON(object: BlockIDFlag): string;
/** SignedMsgType is a type of signed message in the consensus. */
export declare enum SignedMsgType {
    SIGNED_MSG_TYPE_UNKNOWN = 0,
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SIGNED_MSG_TYPE_PREVOTE = 1,
    SIGNED_MSG_TYPE_PRECOMMIT = 2,
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SIGNED_MSG_TYPE_PROPOSAL = 32,
    UNRECOGNIZED = -1
}
export declare function signedMsgTypeFromJSON(object: any): SignedMsgType;
export declare function signedMsgTypeToJSON(object: SignedMsgType): string;
/** PartsetHeader */
export interface PartSetHeader {
    total: number;
    hash: Uint8Array;
}
export interface Part {
    index: number;
    bytes: Uint8Array;
    proof: Proof;
}
/** BlockID */
export interface BlockID {
    hash: Uint8Array;
    partSetHeader: PartSetHeader;
}
/** Header defines the structure of a Tendermint block header. */
export interface Header {
    /** basic block info */
    version: Consensus;
    chainId: string;
    height: Long;
    time: Date;
    /** prev block info */
    lastBlockId: BlockID;
    /** hashes of block data */
    lastCommitHash: Uint8Array;
    dataHash: Uint8Array;
    /** hashes from the app output from the prev block */
    validatorsHash: Uint8Array;
    /** validators for the next block */
    nextValidatorsHash: Uint8Array;
    /** consensus params for current block */
    consensusHash: Uint8Array;
    /** state after txs from the previous block */
    appHash: Uint8Array;
    lastResultsHash: Uint8Array;
    /** consensus info */
    evidenceHash: Uint8Array;
    /** original proposer of the block */
    proposerAddress: Uint8Array;
}
/** Data contains the set of transactions included in the block */
export interface Data {
    /**
     * Txs that will be applied by state @ block.Height+1.
     * NOTE: not all txs here are valid.  We're just agreeing on the order first.
     * This means that block.AppHash does not include these txs.
     */
    txs: Uint8Array[];
}
/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 */
export interface Vote {
    type: SignedMsgType;
    height: Long;
    round: number;
    /** zero if vote is nil. */
    blockId: BlockID;
    timestamp: Date;
    validatorAddress: Uint8Array;
    validatorIndex: number;
    signature: Uint8Array;
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface Commit {
    height: Long;
    round: number;
    blockId: BlockID;
    signatures: CommitSig[];
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSig {
    blockIdFlag: BlockIDFlag;
    validatorAddress: Uint8Array;
    timestamp: Date;
    signature: Uint8Array;
}
export interface Proposal {
    type: SignedMsgType;
    height: Long;
    round: number;
    polRound: number;
    blockId: BlockID;
    timestamp: Date;
    signature: Uint8Array;
}
export interface SignedHeader {
    header: Header;
    commit: Commit;
}
export interface LightBlock {
    signedHeader: SignedHeader;
    validatorSet: ValidatorSet;
}
export interface BlockMeta {
    blockId: BlockID;
    blockSize: Long;
    header: Header;
    numTxs: Long;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProof {
    rootHash: Uint8Array;
    data: Uint8Array;
    proof: Proof;
}
export declare const PartSetHeader: {
    encode(message: PartSetHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PartSetHeader;
    fromJSON(object: any): PartSetHeader;
    toJSON(message: PartSetHeader): unknown;
    fromPartial<I extends {
        total?: number;
        hash?: Uint8Array;
    } & {
        total?: number;
        hash?: Uint8Array;
    } & Record<Exclude<keyof I, keyof PartSetHeader>, never>>(object: I): PartSetHeader;
};
export declare const Part: {
    encode(message: Part, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Part;
    fromJSON(object: any): Part;
    toJSON(message: Part): unknown;
    fromPartial<I extends {
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
            aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["proof"]["aunts"], keyof Uint8Array[]>, never>;
        } & Record<Exclude<keyof I["proof"], keyof Proof>, never>;
    } & Record<Exclude<keyof I, keyof Part>, never>>(object: I): Part;
};
export declare const BlockID: {
    encode(message: BlockID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockID;
    fromJSON(object: any): BlockID;
    toJSON(message: BlockID): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["partSetHeader"], keyof PartSetHeader>, never>;
    } & Record<Exclude<keyof I, keyof BlockID>, never>>(object: I): BlockID;
};
export declare const Header: {
    encode(message: Header, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Header;
    fromJSON(object: any): Header;
    toJSON(message: Header): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["version"], keyof Consensus>, never>;
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
            } & Record<Exclude<keyof I["lastBlockId"]["partSetHeader"], keyof PartSetHeader>, never>;
        } & Record<Exclude<keyof I["lastBlockId"], keyof BlockID>, never>;
        lastCommitHash?: Uint8Array;
        dataHash?: Uint8Array;
        validatorsHash?: Uint8Array;
        nextValidatorsHash?: Uint8Array;
        consensusHash?: Uint8Array;
        appHash?: Uint8Array;
        lastResultsHash?: Uint8Array;
        evidenceHash?: Uint8Array;
        proposerAddress?: Uint8Array;
    } & Record<Exclude<keyof I, keyof Header>, never>>(object: I): Header;
};
export declare const Data: {
    encode(message: Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Data;
    fromJSON(object: any): Data;
    toJSON(message: Data): unknown;
    fromPartial<I extends {
        txs?: Uint8Array[];
    } & {
        txs?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["txs"], keyof Uint8Array[]>, never>;
    } & Record<Exclude<keyof I, "txs">, never>>(object: I): Data;
};
export declare const Vote: {
    encode(message: Vote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vote;
    fromJSON(object: any): Vote;
    toJSON(message: Vote): unknown;
    fromPartial<I extends {
        type?: SignedMsgType;
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
        type?: SignedMsgType;
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
            } & Record<Exclude<keyof I["blockId"]["partSetHeader"], keyof PartSetHeader>, never>;
        } & Record<Exclude<keyof I["blockId"], keyof BlockID>, never>;
        timestamp?: Date;
        validatorAddress?: Uint8Array;
        validatorIndex?: number;
        signature?: Uint8Array;
    } & Record<Exclude<keyof I, keyof Vote>, never>>(object: I): Vote;
};
export declare const Commit: {
    encode(message: Commit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Commit;
    fromJSON(object: any): Commit;
    toJSON(message: Commit): unknown;
    fromPartial<I extends {
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
            blockIdFlag?: BlockIDFlag;
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
            } & Record<Exclude<keyof I["blockId"]["partSetHeader"], keyof PartSetHeader>, never>;
        } & Record<Exclude<keyof I["blockId"], keyof BlockID>, never>;
        signatures?: {
            blockIdFlag?: BlockIDFlag;
            validatorAddress?: Uint8Array;
            timestamp?: Date;
            signature?: Uint8Array;
        }[] & ({
            blockIdFlag?: BlockIDFlag;
            validatorAddress?: Uint8Array;
            timestamp?: Date;
            signature?: Uint8Array;
        } & {
            blockIdFlag?: BlockIDFlag;
            validatorAddress?: Uint8Array;
            timestamp?: Date;
            signature?: Uint8Array;
        } & Record<Exclude<keyof I["signatures"][number], keyof CommitSig>, never>)[] & Record<Exclude<keyof I["signatures"], keyof {
            blockIdFlag?: BlockIDFlag;
            validatorAddress?: Uint8Array;
            timestamp?: Date;
            signature?: Uint8Array;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof Commit>, never>>(object: I): Commit;
};
export declare const CommitSig: {
    encode(message: CommitSig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommitSig;
    fromJSON(object: any): CommitSig;
    toJSON(message: CommitSig): unknown;
    fromPartial<I extends {
        blockIdFlag?: BlockIDFlag;
        validatorAddress?: Uint8Array;
        timestamp?: Date;
        signature?: Uint8Array;
    } & {
        blockIdFlag?: BlockIDFlag;
        validatorAddress?: Uint8Array;
        timestamp?: Date;
        signature?: Uint8Array;
    } & Record<Exclude<keyof I, keyof CommitSig>, never>>(object: I): CommitSig;
};
export declare const Proposal: {
    encode(message: Proposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proposal;
    fromJSON(object: any): Proposal;
    toJSON(message: Proposal): unknown;
    fromPartial<I extends {
        type?: SignedMsgType;
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
        type?: SignedMsgType;
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
            } & Record<Exclude<keyof I["blockId"]["partSetHeader"], keyof PartSetHeader>, never>;
        } & Record<Exclude<keyof I["blockId"], keyof BlockID>, never>;
        timestamp?: Date;
        signature?: Uint8Array;
    } & Record<Exclude<keyof I, keyof Proposal>, never>>(object: I): Proposal;
};
export declare const SignedHeader: {
    encode(message: SignedHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignedHeader;
    fromJSON(object: any): SignedHeader;
    toJSON(message: SignedHeader): unknown;
    fromPartial<I extends {
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
                blockIdFlag?: BlockIDFlag;
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
            } & Record<Exclude<keyof I["header"]["version"], keyof Consensus>, never>;
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
                } & Record<Exclude<keyof I["header"]["lastBlockId"]["partSetHeader"], keyof PartSetHeader>, never>;
            } & Record<Exclude<keyof I["header"]["lastBlockId"], keyof BlockID>, never>;
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
                blockIdFlag?: BlockIDFlag;
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
                } & Record<Exclude<keyof I["commit"]["blockId"]["partSetHeader"], keyof PartSetHeader>, never>;
            } & Record<Exclude<keyof I["commit"]["blockId"], keyof BlockID>, never>;
            signatures?: {
                blockIdFlag?: BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }[] & ({
                blockIdFlag?: BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            } & {
                blockIdFlag?: BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            } & Record<Exclude<keyof I["commit"]["signatures"][number], keyof CommitSig>, never>)[] & Record<Exclude<keyof I["commit"]["signatures"], keyof {
                blockIdFlag?: BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["commit"], keyof Commit>, never>;
    } & Record<Exclude<keyof I, keyof SignedHeader>, never>>(object: I): SignedHeader;
};
export declare const LightBlock: {
    encode(message: LightBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LightBlock;
    fromJSON(object: any): LightBlock;
    toJSON(message: LightBlock): unknown;
    fromPartial<I extends {
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
                    blockIdFlag?: BlockIDFlag;
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
                    blockIdFlag?: BlockIDFlag;
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
                } & Record<Exclude<keyof I["signedHeader"]["header"]["version"], keyof Consensus>, never>;
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
                    } & Record<Exclude<keyof I["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof PartSetHeader>, never>;
                } & Record<Exclude<keyof I["signedHeader"]["header"]["lastBlockId"], keyof BlockID>, never>;
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            } & Record<Exclude<keyof I["signedHeader"]["header"], keyof Header>, never>;
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
                    blockIdFlag?: BlockIDFlag;
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
                    } & Record<Exclude<keyof I["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof PartSetHeader>, never>;
                } & Record<Exclude<keyof I["signedHeader"]["commit"]["blockId"], keyof BlockID>, never>;
                signatures?: {
                    blockIdFlag?: BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[] & ({
                    blockIdFlag?: BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                } & {
                    blockIdFlag?: BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                } & Record<Exclude<keyof I["signedHeader"]["commit"]["signatures"][number], keyof CommitSig>, never>)[] & Record<Exclude<keyof I["signedHeader"]["commit"]["signatures"], keyof {
                    blockIdFlag?: BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I["signedHeader"]["commit"], keyof Commit>, never>;
        } & Record<Exclude<keyof I["signedHeader"], keyof SignedHeader>, never>;
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
                } & Record<Exclude<keyof I["validatorSet"]["validators"][number]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>;
                votingPower?: any;
                proposerPriority?: any;
            } & Record<Exclude<keyof I["validatorSet"]["validators"][number], keyof import("./validator").Validator>, never>)[] & Record<Exclude<keyof I["validatorSet"]["validators"], keyof {
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
                } & Record<Exclude<keyof I["validatorSet"]["proposer"]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>;
                votingPower?: any;
                proposerPriority?: any;
            } & Record<Exclude<keyof I["validatorSet"]["proposer"], keyof import("./validator").Validator>, never>;
            totalVotingPower?: any;
        } & Record<Exclude<keyof I["validatorSet"], keyof ValidatorSet>, never>;
    } & Record<Exclude<keyof I, keyof LightBlock>, never>>(object: I): LightBlock;
};
export declare const BlockMeta: {
    encode(message: BlockMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockMeta;
    fromJSON(object: any): BlockMeta;
    toJSON(message: BlockMeta): unknown;
    fromPartial<I extends {
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
            } & Record<Exclude<keyof I["blockId"]["partSetHeader"], keyof PartSetHeader>, never>;
        } & Record<Exclude<keyof I["blockId"], keyof BlockID>, never>;
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
            } & Record<Exclude<keyof I["header"]["version"], keyof Consensus>, never>;
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
                } & Record<Exclude<keyof I["header"]["lastBlockId"]["partSetHeader"], keyof PartSetHeader>, never>;
            } & Record<Exclude<keyof I["header"]["lastBlockId"], keyof BlockID>, never>;
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
        numTxs?: any;
    } & Record<Exclude<keyof I, keyof BlockMeta>, never>>(object: I): BlockMeta;
};
export declare const TxProof: {
    encode(message: TxProof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxProof;
    fromJSON(object: any): TxProof;
    toJSON(message: TxProof): unknown;
    fromPartial<I extends {
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
            aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["proof"]["aunts"], keyof Uint8Array[]>, never>;
        } & Record<Exclude<keyof I["proof"], keyof Proof>, never>;
    } & Record<Exclude<keyof I, keyof TxProof>, never>>(object: I): TxProof;
};
