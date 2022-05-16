import { CommitmentProof } from "../../../../confio/proofs";
import * as _m0 from "protobufjs/minimal";
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */
export interface MerkleRoot {
    hash: Uint8Array;
}
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */
export interface MerklePrefix {
    keyPrefix: Uint8Array;
}
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 */
export interface MerklePath {
    keyPath: string[];
}
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 */
export interface MerkleProof {
    proofs: CommitmentProof[];
}
export declare const MerkleRoot: {
    encode(message: MerkleRoot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MerkleRoot;
    fromJSON(object: any): MerkleRoot;
    toJSON(message: MerkleRoot): unknown;
    fromPartial<I extends {
        hash?: Uint8Array;
    } & {
        hash?: Uint8Array;
    } & Record<Exclude<keyof I, "hash">, never>>(object: I): MerkleRoot;
};
export declare const MerklePrefix: {
    encode(message: MerklePrefix, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MerklePrefix;
    fromJSON(object: any): MerklePrefix;
    toJSON(message: MerklePrefix): unknown;
    fromPartial<I extends {
        keyPrefix?: Uint8Array;
    } & {
        keyPrefix?: Uint8Array;
    } & Record<Exclude<keyof I, "keyPrefix">, never>>(object: I): MerklePrefix;
};
export declare const MerklePath: {
    encode(message: MerklePath, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MerklePath;
    fromJSON(object: any): MerklePath;
    toJSON(message: MerklePath): unknown;
    fromPartial<I extends {
        keyPath?: string[];
    } & {
        keyPath?: string[] & string[] & Record<Exclude<keyof I["keyPath"], keyof string[]>, never>;
    } & Record<Exclude<keyof I, "keyPath">, never>>(object: I): MerklePath;
};
export declare const MerkleProof: {
    encode(message: MerkleProof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MerkleProof;
    fromJSON(object: any): MerkleProof;
    toJSON(message: MerkleProof): unknown;
    fromPartial<I extends {
        proofs?: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prehashKey?: import("../../../../confio/proofs").HashOp;
                    prehashValue?: import("../../../../confio/proofs").HashOp;
                    length?: import("../../../../confio/proofs").LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prehashKey?: import("../../../../confio/proofs").HashOp;
                        prehashValue?: import("../../../../confio/proofs").HashOp;
                        length?: import("../../../../confio/proofs").LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prehashKey?: import("../../../../confio/proofs").HashOp;
                        prehashValue?: import("../../../../confio/proofs").HashOp;
                        length?: import("../../../../confio/proofs").LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                }[];
            };
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }[];
    } & {
        proofs?: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prehashKey?: import("../../../../confio/proofs").HashOp;
                    prehashValue?: import("../../../../confio/proofs").HashOp;
                    length?: import("../../../../confio/proofs").LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prehashKey?: import("../../../../confio/proofs").HashOp;
                        prehashValue?: import("../../../../confio/proofs").HashOp;
                        length?: import("../../../../confio/proofs").LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prehashKey?: import("../../../../confio/proofs").HashOp;
                        prehashValue?: import("../../../../confio/proofs").HashOp;
                        length?: import("../../../../confio/proofs").LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                }[];
            };
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }[] & ({
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prehashKey?: import("../../../../confio/proofs").HashOp;
                    prehashValue?: import("../../../../confio/proofs").HashOp;
                    length?: import("../../../../confio/proofs").LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prehashKey?: import("../../../../confio/proofs").HashOp;
                        prehashValue?: import("../../../../confio/proofs").HashOp;
                        length?: import("../../../../confio/proofs").LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prehashKey?: import("../../../../confio/proofs").HashOp;
                        prehashValue?: import("../../../../confio/proofs").HashOp;
                        length?: import("../../../../confio/proofs").LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                }[];
            };
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        } & {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prehashKey?: import("../../../../confio/proofs").HashOp;
                    prehashValue?: import("../../../../confio/proofs").HashOp;
                    length?: import("../../../../confio/proofs").LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prehashKey?: import("../../../../confio/proofs").HashOp;
                    prehashValue?: import("../../../../confio/proofs").HashOp;
                    length?: import("../../../../confio/proofs").LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prehashKey?: import("../../../../confio/proofs").HashOp;
                    prehashValue?: import("../../../../confio/proofs").HashOp;
                    length?: import("../../../../confio/proofs").LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I["proofs"][number]["exist"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>, never>;
                path?: {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: import("../../../../confio/proofs").HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I["proofs"][number]["exist"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I["proofs"][number]["exist"]["path"], keyof {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I["proofs"][number]["exist"], keyof import("../../../../confio/proofs").ExistenceProof>, never>;
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prehashKey?: import("../../../../confio/proofs").HashOp;
                        prehashValue?: import("../../../../confio/proofs").HashOp;
                        length?: import("../../../../confio/proofs").LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prehashKey?: import("../../../../confio/proofs").HashOp;
                        prehashValue?: import("../../../../confio/proofs").HashOp;
                        length?: import("../../../../confio/proofs").LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            } & {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prehashKey?: import("../../../../confio/proofs").HashOp;
                        prehashValue?: import("../../../../confio/proofs").HashOp;
                        length?: import("../../../../confio/proofs").LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prehashKey?: import("../../../../confio/proofs").HashOp;
                        prehashValue?: import("../../../../confio/proofs").HashOp;
                        length?: import("../../../../confio/proofs").LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prehashKey?: import("../../../../confio/proofs").HashOp;
                        prehashValue?: import("../../../../confio/proofs").HashOp;
                        length?: import("../../../../confio/proofs").LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["left"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>, never>;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: import("../../../../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["left"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I["proofs"][number]["nonexist"]["left"]["path"], keyof {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["left"], keyof import("../../../../confio/proofs").ExistenceProof>, never>;
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prehashKey?: import("../../../../confio/proofs").HashOp;
                        prehashValue?: import("../../../../confio/proofs").HashOp;
                        length?: import("../../../../confio/proofs").LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prehashKey?: import("../../../../confio/proofs").HashOp;
                        prehashValue?: import("../../../../confio/proofs").HashOp;
                        length?: import("../../../../confio/proofs").LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prehashKey?: import("../../../../confio/proofs").HashOp;
                        prehashValue?: import("../../../../confio/proofs").HashOp;
                        length?: import("../../../../confio/proofs").LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["right"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>, never>;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: import("../../../../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["right"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I["proofs"][number]["nonexist"]["right"]["path"], keyof {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["right"], keyof import("../../../../confio/proofs").ExistenceProof>, never>;
            } & Record<Exclude<keyof I["proofs"][number]["nonexist"], keyof import("../../../../confio/proofs").NonExistenceProof>, never>;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                }[];
            } & {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                }[] & ({
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                } & {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["exist"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>, never>;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[] & ({
                            hash?: import("../../../../confio/proofs").HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["exist"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["exist"]["path"], keyof {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["exist"], keyof import("../../../../confio/proofs").ExistenceProof>, never>;
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    } & {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>, never>;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[] & ({
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            } & {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["path"], keyof {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[]>, never>;
                        } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"], keyof import("../../../../confio/proofs").ExistenceProof>, never>;
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>, never>;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[] & ({
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            } & {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["path"], keyof {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[]>, never>;
                        } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"], keyof import("../../../../confio/proofs").ExistenceProof>, never>;
                    } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"], keyof import("../../../../confio/proofs").NonExistenceProof>, never>;
                } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number], keyof import("../../../../confio/proofs").BatchEntry>, never>)[] & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"], keyof {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                }[]>, never>;
            } & Record<Exclude<keyof I["proofs"][number]["batch"], "entries">, never>;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            } & {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[] & ({
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                } & {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["exist"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>, never>;
                        path?: number[] & number[] & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["exist"]["path"], keyof number[]>, never>;
                    } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["exist"], keyof import("../../../../confio/proofs").CompressedExistenceProof>, never>;
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    } & {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>, never>;
                            path?: number[] & number[] & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"]["path"], keyof number[]>, never>;
                        } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"], keyof import("../../../../confio/proofs").CompressedExistenceProof>, never>;
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>, never>;
                            path?: number[] & number[] & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"]["path"], keyof number[]>, never>;
                        } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"], keyof import("../../../../confio/proofs").CompressedExistenceProof>, never>;
                    } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"], keyof import("../../../../confio/proofs").CompressedNonExistenceProof>, never>;
                } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number], keyof import("../../../../confio/proofs").CompressedBatchEntry>, never>)[] & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"], keyof {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[]>, never>;
                lookupInners?: {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: import("../../../../confio/proofs").HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I["proofs"][number]["compressed"]["lookupInners"][number], keyof import("../../../../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I["proofs"][number]["compressed"]["lookupInners"], keyof {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I["proofs"][number]["compressed"], keyof import("../../../../confio/proofs").CompressedBatchProof>, never>;
        } & Record<Exclude<keyof I["proofs"][number], keyof CommitmentProof>, never>)[] & Record<Exclude<keyof I["proofs"], keyof {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prehashKey?: import("../../../../confio/proofs").HashOp;
                    prehashValue?: import("../../../../confio/proofs").HashOp;
                    length?: import("../../../../confio/proofs").LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prehashKey?: import("../../../../confio/proofs").HashOp;
                        prehashValue?: import("../../../../confio/proofs").HashOp;
                        length?: import("../../../../confio/proofs").LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prehashKey?: import("../../../../confio/proofs").HashOp;
                        prehashValue?: import("../../../../confio/proofs").HashOp;
                        length?: import("../../../../confio/proofs").LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                }[];
            };
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp;
                            prehashKey?: import("../../../../confio/proofs").HashOp;
                            prehashValue?: import("../../../../confio/proofs").HashOp;
                            length?: import("../../../../confio/proofs").LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp;
                                prehashKey?: import("../../../../confio/proofs").HashOp;
                                prehashValue?: import("../../../../confio/proofs").HashOp;
                                length?: import("../../../../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: import("../../../../confio/proofs").HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }[]>, never>;
    } & Record<Exclude<keyof I, "proofs">, never>>(object: I): MerkleProof;
};
