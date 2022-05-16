import * as _0 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _0.HashOp;
    hashOpToJSON(object: _0.HashOp): string;
    lengthOpFromJSON(object: any): _0.LengthOp;
    lengthOpToJSON(object: _0.LengthOp): string;
    HashOp: typeof _0.HashOp;
    LengthOp: typeof _0.LengthOp;
    ExistenceProof: {
        encode(message: _0.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ExistenceProof;
        fromJSON(object: any): _0.ExistenceProof;
        toJSON(message: _0.ExistenceProof): unknown;
        fromPartial<I extends {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _0.HashOp;
                prehashKey?: _0.HashOp;
                prehashValue?: _0.HashOp;
                length?: _0.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _0.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        } & {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _0.HashOp;
                prehashKey?: _0.HashOp;
                prehashValue?: _0.HashOp;
                length?: _0.LengthOp;
                prefix?: Uint8Array;
            } & {
                hash?: _0.HashOp;
                prehashKey?: _0.HashOp;
                prehashValue?: _0.HashOp;
                length?: _0.LengthOp;
                prefix?: Uint8Array;
            } & Record<Exclude<keyof I["leaf"], keyof _0.LeafOp>, never>;
            path?: {
                hash?: _0.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[] & ({
                hash?: _0.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            } & {
                hash?: _0.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            } & Record<Exclude<keyof I["path"][number], keyof _0.InnerOp>, never>)[] & Record<Exclude<keyof I["path"], keyof {
                hash?: _0.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I, keyof _0.ExistenceProof>, never>>(object: I): _0.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _0.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.NonExistenceProof;
        fromJSON(object: any): _0.NonExistenceProof;
        toJSON(message: _0.NonExistenceProof): unknown;
        fromPartial<I_1 extends {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _0.HashOp;
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
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_1["left"]["leaf"], keyof _0.LeafOp>, never>;
                path?: {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I_1["left"]["path"][number], keyof _0.InnerOp>, never>)[] & Record<Exclude<keyof I_1["left"]["path"], keyof {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_1["left"], keyof _0.ExistenceProof>, never>;
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_1["right"]["leaf"], keyof _0.LeafOp>, never>;
                path?: {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I_1["right"]["path"][number], keyof _0.InnerOp>, never>)[] & Record<Exclude<keyof I_1["right"]["path"], keyof {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_1["right"], keyof _0.ExistenceProof>, never>;
        } & Record<Exclude<keyof I_1, keyof _0.NonExistenceProof>, never>>(object: I_1): _0.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _0.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CommitmentProof;
        fromJSON(object: any): _0.CommitmentProof;
        toJSON(message: _0.CommitmentProof): unknown;
        fromPartial<I_2 extends {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _0.HashOp;
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
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
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
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
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
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _0.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _0.HashOp;
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
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
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
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        } & {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_2["exist"]["leaf"], keyof _0.LeafOp>, never>;
                path?: {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I_2["exist"]["path"][number], keyof _0.InnerOp>, never>)[] & Record<Exclude<keyof I_2["exist"]["path"], keyof {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_2["exist"], keyof _0.ExistenceProof>, never>;
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
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
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_2["nonexist"]["left"]["leaf"], keyof _0.LeafOp>, never>;
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I_2["nonexist"]["left"]["path"][number], keyof _0.InnerOp>, never>)[] & Record<Exclude<keyof I_2["nonexist"]["left"]["path"], keyof {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_2["nonexist"]["left"], keyof _0.ExistenceProof>, never>;
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_2["nonexist"]["right"]["leaf"], keyof _0.LeafOp>, never>;
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I_2["nonexist"]["right"]["path"][number], keyof _0.InnerOp>, never>)[] & Record<Exclude<keyof I_2["nonexist"]["right"]["path"], keyof {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_2["nonexist"]["right"], keyof _0.ExistenceProof>, never>;
            } & Record<Exclude<keyof I_2["nonexist"], keyof _0.NonExistenceProof>, never>;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
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
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _0.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _0.HashOp;
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
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
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
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _0.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _0.HashOp;
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
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
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
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _0.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _0.HashOp;
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
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_2["batch"]["entries"][number]["exist"]["leaf"], keyof _0.LeafOp>, never>;
                        path?: {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[] & ({
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & Record<Exclude<keyof I_2["batch"]["entries"][number]["exist"]["path"][number], keyof _0.InnerOp>, never>)[] & Record<Exclude<keyof I_2["batch"]["entries"][number]["exist"]["path"], keyof {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_2["batch"]["entries"][number]["exist"], keyof _0.ExistenceProof>, never>;
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _0.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _0.HashOp;
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
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _0.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["left"]["leaf"], keyof _0.LeafOp>, never>;
                            path?: {
                                hash?: _0.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[] & ({
                                hash?: _0.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            } & {
                                hash?: _0.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["left"]["path"][number], keyof _0.InnerOp>, never>)[] & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["left"]["path"], keyof {
                                hash?: _0.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["left"], keyof _0.ExistenceProof>, never>;
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _0.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["right"]["leaf"], keyof _0.LeafOp>, never>;
                            path?: {
                                hash?: _0.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[] & ({
                                hash?: _0.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            } & {
                                hash?: _0.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["right"]["path"][number], keyof _0.InnerOp>, never>)[] & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["right"]["path"], keyof {
                                hash?: _0.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["right"], keyof _0.ExistenceProof>, never>;
                    } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"], keyof _0.NonExistenceProof>, never>;
                } & Record<Exclude<keyof I_2["batch"]["entries"][number], keyof _0.BatchEntry>, never>)[] & Record<Exclude<keyof I_2["batch"]["entries"], keyof {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
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
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _0.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _0.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                }[]>, never>;
            } & Record<Exclude<keyof I_2["batch"], "entries">, never>;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
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
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            } & {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
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
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
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
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
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
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
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
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["exist"]["leaf"], keyof _0.LeafOp>, never>;
                        path?: number[] & number[] & Record<Exclude<keyof I_2["compressed"]["entries"][number]["exist"]["path"], keyof number[]>, never>;
                    } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["exist"], keyof _0.CompressedExistenceProof>, never>;
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
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
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["left"]["leaf"], keyof _0.LeafOp>, never>;
                            path?: number[] & number[] & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["left"]["path"], keyof number[]>, never>;
                        } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["left"], keyof _0.CompressedExistenceProof>, never>;
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["right"]["leaf"], keyof _0.LeafOp>, never>;
                            path?: number[] & number[] & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["right"]["path"], keyof number[]>, never>;
                        } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["right"], keyof _0.CompressedExistenceProof>, never>;
                    } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"], keyof _0.CompressedNonExistenceProof>, never>;
                } & Record<Exclude<keyof I_2["compressed"]["entries"][number], keyof _0.CompressedBatchEntry>, never>)[] & Record<Exclude<keyof I_2["compressed"]["entries"], keyof {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
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
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[]>, never>;
                lookupInners?: {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I_2["compressed"]["lookupInners"][number], keyof _0.InnerOp>, never>)[] & Record<Exclude<keyof I_2["compressed"]["lookupInners"], keyof {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_2["compressed"], keyof _0.CompressedBatchProof>, never>;
        } & Record<Exclude<keyof I_2, keyof _0.CommitmentProof>, never>>(object: I_2): _0.CommitmentProof;
    };
    LeafOp: {
        encode(message: _0.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.LeafOp;
        fromJSON(object: any): _0.LeafOp;
        toJSON(message: _0.LeafOp): unknown;
        fromPartial<I_3 extends {
            hash?: _0.HashOp;
            prehashKey?: _0.HashOp;
            prehashValue?: _0.HashOp;
            length?: _0.LengthOp;
            prefix?: Uint8Array;
        } & {
            hash?: _0.HashOp;
            prehashKey?: _0.HashOp;
            prehashValue?: _0.HashOp;
            length?: _0.LengthOp;
            prefix?: Uint8Array;
        } & Record<Exclude<keyof I_3, keyof _0.LeafOp>, never>>(object: I_3): _0.LeafOp;
    };
    InnerOp: {
        encode(message: _0.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.InnerOp;
        fromJSON(object: any): _0.InnerOp;
        toJSON(message: _0.InnerOp): unknown;
        fromPartial<I_4 extends {
            hash?: _0.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        } & {
            hash?: _0.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        } & Record<Exclude<keyof I_4, keyof _0.InnerOp>, never>>(object: I_4): _0.InnerOp;
    };
    ProofSpec: {
        encode(message: _0.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ProofSpec;
        fromJSON(object: any): _0.ProofSpec;
        toJSON(message: _0.ProofSpec): unknown;
        fromPartial<I_5 extends {
            leafSpec?: {
                hash?: _0.HashOp;
                prehashKey?: _0.HashOp;
                prehashValue?: _0.HashOp;
                length?: _0.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _0.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        } & {
            leafSpec?: {
                hash?: _0.HashOp;
                prehashKey?: _0.HashOp;
                prehashValue?: _0.HashOp;
                length?: _0.LengthOp;
                prefix?: Uint8Array;
            } & {
                hash?: _0.HashOp;
                prehashKey?: _0.HashOp;
                prehashValue?: _0.HashOp;
                length?: _0.LengthOp;
                prefix?: Uint8Array;
            } & Record<Exclude<keyof I_5["leafSpec"], keyof _0.LeafOp>, never>;
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _0.HashOp;
            } & {
                childOrder?: number[] & number[] & Record<Exclude<keyof I_5["innerSpec"]["childOrder"], keyof number[]>, never>;
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _0.HashOp;
            } & Record<Exclude<keyof I_5["innerSpec"], keyof _0.InnerSpec>, never>;
            maxDepth?: number;
            minDepth?: number;
        } & Record<Exclude<keyof I_5, keyof _0.ProofSpec>, never>>(object: I_5): _0.ProofSpec;
    };
    InnerSpec: {
        encode(message: _0.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.InnerSpec;
        fromJSON(object: any): _0.InnerSpec;
        toJSON(message: _0.InnerSpec): unknown;
        fromPartial<I_6 extends {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _0.HashOp;
        } & {
            childOrder?: number[] & number[] & Record<Exclude<keyof I_6["childOrder"], keyof number[]>, never>;
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _0.HashOp;
        } & Record<Exclude<keyof I_6, keyof _0.InnerSpec>, never>>(object: I_6): _0.InnerSpec;
    };
    BatchProof: {
        encode(message: _0.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.BatchProof;
        fromJSON(object: any): _0.BatchProof;
        toJSON(message: _0.BatchProof): unknown;
        fromPartial<I_7 extends {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
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
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
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
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
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
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
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
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
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
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
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
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_7["entries"][number]["exist"]["leaf"], keyof _0.LeafOp>, never>;
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I_7["entries"][number]["exist"]["path"][number], keyof _0.InnerOp>, never>)[] & Record<Exclude<keyof I_7["entries"][number]["exist"]["path"], keyof {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_7["entries"][number]["exist"], keyof _0.ExistenceProof>, never>;
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
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
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["left"]["leaf"], keyof _0.LeafOp>, never>;
                        path?: {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[] & ({
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["left"]["path"][number], keyof _0.InnerOp>, never>)[] & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["left"]["path"], keyof {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["left"], keyof _0.ExistenceProof>, never>;
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["right"]["leaf"], keyof _0.LeafOp>, never>;
                        path?: {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[] & ({
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["right"]["path"][number], keyof _0.InnerOp>, never>)[] & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["right"]["path"], keyof {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["right"], keyof _0.ExistenceProof>, never>;
                } & Record<Exclude<keyof I_7["entries"][number]["nonexist"], keyof _0.NonExistenceProof>, never>;
            } & Record<Exclude<keyof I_7["entries"][number], keyof _0.BatchEntry>, never>)[] & Record<Exclude<keyof I_7["entries"], keyof {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
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
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[]>, never>;
        } & Record<Exclude<keyof I_7, "entries">, never>>(object: I_7): _0.BatchProof;
    };
    BatchEntry: {
        encode(message: _0.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.BatchEntry;
        fromJSON(object: any): _0.BatchEntry;
        toJSON(message: _0.BatchEntry): unknown;
        fromPartial<I_8 extends {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _0.HashOp;
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
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
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
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_8["exist"]["leaf"], keyof _0.LeafOp>, never>;
                path?: {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I_8["exist"]["path"][number], keyof _0.InnerOp>, never>)[] & Record<Exclude<keyof I_8["exist"]["path"], keyof {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_8["exist"], keyof _0.ExistenceProof>, never>;
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
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
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_8["nonexist"]["left"]["leaf"], keyof _0.LeafOp>, never>;
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I_8["nonexist"]["left"]["path"][number], keyof _0.InnerOp>, never>)[] & Record<Exclude<keyof I_8["nonexist"]["left"]["path"], keyof {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_8["nonexist"]["left"], keyof _0.ExistenceProof>, never>;
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_8["nonexist"]["right"]["leaf"], keyof _0.LeafOp>, never>;
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I_8["nonexist"]["right"]["path"][number], keyof _0.InnerOp>, never>)[] & Record<Exclude<keyof I_8["nonexist"]["right"]["path"], keyof {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_8["nonexist"]["right"], keyof _0.ExistenceProof>, never>;
            } & Record<Exclude<keyof I_8["nonexist"], keyof _0.NonExistenceProof>, never>;
        } & Record<Exclude<keyof I_8, keyof _0.BatchEntry>, never>>(object: I_8): _0.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _0.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CompressedBatchProof;
        fromJSON(object: any): _0.CompressedBatchProof;
        toJSON(message: _0.CompressedBatchProof): unknown;
        fromPartial<I_9 extends {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
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
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _0.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        } & {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
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
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
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
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
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
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
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
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_9["entries"][number]["exist"]["leaf"], keyof _0.LeafOp>, never>;
                    path?: number[] & number[] & Record<Exclude<keyof I_9["entries"][number]["exist"]["path"], keyof number[]>, never>;
                } & Record<Exclude<keyof I_9["entries"][number]["exist"], keyof _0.CompressedExistenceProof>, never>;
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
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
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["left"]["leaf"], keyof _0.LeafOp>, never>;
                        path?: number[] & number[] & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["left"]["path"], keyof number[]>, never>;
                    } & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["left"], keyof _0.CompressedExistenceProof>, never>;
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["right"]["leaf"], keyof _0.LeafOp>, never>;
                        path?: number[] & number[] & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["right"]["path"], keyof number[]>, never>;
                    } & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["right"], keyof _0.CompressedExistenceProof>, never>;
                } & Record<Exclude<keyof I_9["entries"][number]["nonexist"], keyof _0.CompressedNonExistenceProof>, never>;
            } & Record<Exclude<keyof I_9["entries"][number], keyof _0.CompressedBatchEntry>, never>)[] & Record<Exclude<keyof I_9["entries"], keyof {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
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
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[]>, never>;
            lookupInners?: {
                hash?: _0.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[] & ({
                hash?: _0.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            } & {
                hash?: _0.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            } & Record<Exclude<keyof I_9["lookupInners"][number], keyof _0.InnerOp>, never>)[] & Record<Exclude<keyof I_9["lookupInners"], keyof {
                hash?: _0.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I_9, keyof _0.CompressedBatchProof>, never>>(object: I_9): _0.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _0.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CompressedBatchEntry;
        fromJSON(object: any): _0.CompressedBatchEntry;
        toJSON(message: _0.CompressedBatchEntry): unknown;
        fromPartial<I_10 extends {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
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
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
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
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_10["exist"]["leaf"], keyof _0.LeafOp>, never>;
                path?: number[] & number[] & Record<Exclude<keyof I_10["exist"]["path"], keyof number[]>, never>;
            } & Record<Exclude<keyof I_10["exist"], keyof _0.CompressedExistenceProof>, never>;
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
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
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_10["nonexist"]["left"]["leaf"], keyof _0.LeafOp>, never>;
                    path?: number[] & number[] & Record<Exclude<keyof I_10["nonexist"]["left"]["path"], keyof number[]>, never>;
                } & Record<Exclude<keyof I_10["nonexist"]["left"], keyof _0.CompressedExistenceProof>, never>;
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_10["nonexist"]["right"]["leaf"], keyof _0.LeafOp>, never>;
                    path?: number[] & number[] & Record<Exclude<keyof I_10["nonexist"]["right"]["path"], keyof number[]>, never>;
                } & Record<Exclude<keyof I_10["nonexist"]["right"], keyof _0.CompressedExistenceProof>, never>;
            } & Record<Exclude<keyof I_10["nonexist"], keyof _0.CompressedNonExistenceProof>, never>;
        } & Record<Exclude<keyof I_10, keyof _0.CompressedBatchEntry>, never>>(object: I_10): _0.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _0.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CompressedExistenceProof;
        fromJSON(object: any): _0.CompressedExistenceProof;
        toJSON(message: _0.CompressedExistenceProof): unknown;
        fromPartial<I_11 extends {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _0.HashOp;
                prehashKey?: _0.HashOp;
                prehashValue?: _0.HashOp;
                length?: _0.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        } & {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _0.HashOp;
                prehashKey?: _0.HashOp;
                prehashValue?: _0.HashOp;
                length?: _0.LengthOp;
                prefix?: Uint8Array;
            } & {
                hash?: _0.HashOp;
                prehashKey?: _0.HashOp;
                prehashValue?: _0.HashOp;
                length?: _0.LengthOp;
                prefix?: Uint8Array;
            } & Record<Exclude<keyof I_11["leaf"], keyof _0.LeafOp>, never>;
            path?: number[] & number[] & Record<Exclude<keyof I_11["path"], keyof number[]>, never>;
        } & Record<Exclude<keyof I_11, keyof _0.CompressedExistenceProof>, never>>(object: I_11): _0.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _0.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CompressedNonExistenceProof;
        fromJSON(object: any): _0.CompressedNonExistenceProof;
        toJSON(message: _0.CompressedNonExistenceProof): unknown;
        fromPartial<I_12 extends {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
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
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_12["left"]["leaf"], keyof _0.LeafOp>, never>;
                path?: number[] & number[] & Record<Exclude<keyof I_12["left"]["path"], keyof number[]>, never>;
            } & Record<Exclude<keyof I_12["left"], keyof _0.CompressedExistenceProof>, never>;
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_12["right"]["leaf"], keyof _0.LeafOp>, never>;
                path?: number[] & number[] & Record<Exclude<keyof I_12["right"]["path"], keyof number[]>, never>;
            } & Record<Exclude<keyof I_12["right"], keyof _0.CompressedExistenceProof>, never>;
        } & Record<Exclude<keyof I_12, keyof _0.CompressedNonExistenceProof>, never>>(object: I_12): _0.CompressedNonExistenceProof;
    };
};
