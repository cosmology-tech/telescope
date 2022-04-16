import * as _606 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _606.HashOp;
    hashOpToJSON(object: _606.HashOp): string;
    lengthOpFromJSON(object: any): _606.LengthOp;
    lengthOpToJSON(object: _606.LengthOp): string;
    HashOp: typeof _606.HashOp;
    LengthOp: typeof _606.LengthOp;
    ExistenceProof: {
        encode(message: _606.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.ExistenceProof;
        fromJSON(object: any): _606.ExistenceProof;
        toJSON(message: _606.ExistenceProof): unknown;
        fromPartial<I extends {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _606.HashOp;
                prehashKey?: _606.HashOp;
                prehashValue?: _606.HashOp;
                length?: _606.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _606.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        } & {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _606.HashOp;
                prehashKey?: _606.HashOp;
                prehashValue?: _606.HashOp;
                length?: _606.LengthOp;
                prefix?: Uint8Array;
            } & {
                hash?: _606.HashOp;
                prehashKey?: _606.HashOp;
                prehashValue?: _606.HashOp;
                length?: _606.LengthOp;
                prefix?: Uint8Array;
            } & Record<Exclude<keyof I["leaf"], keyof _606.LeafOp>, never>;
            path?: {
                hash?: _606.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[] & ({
                hash?: _606.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            } & {
                hash?: _606.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            } & Record<Exclude<keyof I["path"][number], keyof _606.InnerOp>, never>)[] & Record<Exclude<keyof I["path"], keyof {
                hash?: _606.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I, keyof _606.ExistenceProof>, never>>(object: I): _606.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _606.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.NonExistenceProof;
        fromJSON(object: any): _606.NonExistenceProof;
        toJSON(message: _606.NonExistenceProof): unknown;
        fromPartial<I_1 extends {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _606.HashOp;
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
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_1["left"]["leaf"], keyof _606.LeafOp>, never>;
                path?: {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I_1["left"]["path"][number], keyof _606.InnerOp>, never>)[] & Record<Exclude<keyof I_1["left"]["path"], keyof {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_1["left"], keyof _606.ExistenceProof>, never>;
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_1["right"]["leaf"], keyof _606.LeafOp>, never>;
                path?: {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I_1["right"]["path"][number], keyof _606.InnerOp>, never>)[] & Record<Exclude<keyof I_1["right"]["path"], keyof {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_1["right"], keyof _606.ExistenceProof>, never>;
        } & Record<Exclude<keyof I_1, keyof _606.NonExistenceProof>, never>>(object: I_1): _606.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _606.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.CommitmentProof;
        fromJSON(object: any): _606.CommitmentProof;
        toJSON(message: _606.CommitmentProof): unknown;
        fromPartial<I_2 extends {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _606.HashOp;
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
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _606.HashOp;
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
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _606.HashOp;
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
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _606.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _606.HashOp;
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
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
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
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        } & {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_2["exist"]["leaf"], keyof _606.LeafOp>, never>;
                path?: {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I_2["exist"]["path"][number], keyof _606.InnerOp>, never>)[] & Record<Exclude<keyof I_2["exist"]["path"], keyof {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_2["exist"], keyof _606.ExistenceProof>, never>;
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _606.HashOp;
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
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_2["nonexist"]["left"]["leaf"], keyof _606.LeafOp>, never>;
                    path?: {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I_2["nonexist"]["left"]["path"][number], keyof _606.InnerOp>, never>)[] & Record<Exclude<keyof I_2["nonexist"]["left"]["path"], keyof {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_2["nonexist"]["left"], keyof _606.ExistenceProof>, never>;
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_2["nonexist"]["right"]["leaf"], keyof _606.LeafOp>, never>;
                    path?: {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I_2["nonexist"]["right"]["path"][number], keyof _606.InnerOp>, never>)[] & Record<Exclude<keyof I_2["nonexist"]["right"]["path"], keyof {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_2["nonexist"]["right"], keyof _606.ExistenceProof>, never>;
            } & Record<Exclude<keyof I_2["nonexist"], keyof _606.NonExistenceProof>, never>;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _606.HashOp;
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
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _606.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _606.HashOp;
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
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _606.HashOp;
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
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _606.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _606.HashOp;
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
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _606.HashOp;
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
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _606.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _606.HashOp;
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
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _606.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_2["batch"]["entries"][number]["exist"]["leaf"], keyof _606.LeafOp>, never>;
                        path?: {
                            hash?: _606.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[] & ({
                            hash?: _606.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & {
                            hash?: _606.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & Record<Exclude<keyof I_2["batch"]["entries"][number]["exist"]["path"][number], keyof _606.InnerOp>, never>)[] & Record<Exclude<keyof I_2["batch"]["entries"][number]["exist"]["path"], keyof {
                            hash?: _606.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_2["batch"]["entries"][number]["exist"], keyof _606.ExistenceProof>, never>;
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _606.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _606.HashOp;
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
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _606.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["left"]["leaf"], keyof _606.LeafOp>, never>;
                            path?: {
                                hash?: _606.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[] & ({
                                hash?: _606.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            } & {
                                hash?: _606.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["left"]["path"][number], keyof _606.InnerOp>, never>)[] & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["left"]["path"], keyof {
                                hash?: _606.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["left"], keyof _606.ExistenceProof>, never>;
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _606.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["right"]["leaf"], keyof _606.LeafOp>, never>;
                            path?: {
                                hash?: _606.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[] & ({
                                hash?: _606.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            } & {
                                hash?: _606.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["right"]["path"][number], keyof _606.InnerOp>, never>)[] & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["right"]["path"], keyof {
                                hash?: _606.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["right"], keyof _606.ExistenceProof>, never>;
                    } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"], keyof _606.NonExistenceProof>, never>;
                } & Record<Exclude<keyof I_2["batch"]["entries"][number], keyof _606.BatchEntry>, never>)[] & Record<Exclude<keyof I_2["batch"]["entries"], keyof {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _606.HashOp;
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
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _606.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _606.HashOp;
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
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
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
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            } & {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
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
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
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
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
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
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
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
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["exist"]["leaf"], keyof _606.LeafOp>, never>;
                        path?: number[] & number[] & Record<Exclude<keyof I_2["compressed"]["entries"][number]["exist"]["path"], keyof number[]>, never>;
                    } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["exist"], keyof _606.CompressedExistenceProof>, never>;
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
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
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["left"]["leaf"], keyof _606.LeafOp>, never>;
                            path?: number[] & number[] & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["left"]["path"], keyof number[]>, never>;
                        } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["left"], keyof _606.CompressedExistenceProof>, never>;
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["right"]["leaf"], keyof _606.LeafOp>, never>;
                            path?: number[] & number[] & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["right"]["path"], keyof number[]>, never>;
                        } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["right"], keyof _606.CompressedExistenceProof>, never>;
                    } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"], keyof _606.CompressedNonExistenceProof>, never>;
                } & Record<Exclude<keyof I_2["compressed"]["entries"][number], keyof _606.CompressedBatchEntry>, never>)[] & Record<Exclude<keyof I_2["compressed"]["entries"], keyof {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
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
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _606.HashOp;
                                prehashKey?: _606.HashOp;
                                prehashValue?: _606.HashOp;
                                length?: _606.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[]>, never>;
                lookupInners?: {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I_2["compressed"]["lookupInners"][number], keyof _606.InnerOp>, never>)[] & Record<Exclude<keyof I_2["compressed"]["lookupInners"], keyof {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_2["compressed"], keyof _606.CompressedBatchProof>, never>;
        } & Record<Exclude<keyof I_2, keyof _606.CommitmentProof>, never>>(object: I_2): _606.CommitmentProof;
    };
    LeafOp: {
        encode(message: _606.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.LeafOp;
        fromJSON(object: any): _606.LeafOp;
        toJSON(message: _606.LeafOp): unknown;
        fromPartial<I_3 extends {
            hash?: _606.HashOp;
            prehashKey?: _606.HashOp;
            prehashValue?: _606.HashOp;
            length?: _606.LengthOp;
            prefix?: Uint8Array;
        } & {
            hash?: _606.HashOp;
            prehashKey?: _606.HashOp;
            prehashValue?: _606.HashOp;
            length?: _606.LengthOp;
            prefix?: Uint8Array;
        } & Record<Exclude<keyof I_3, keyof _606.LeafOp>, never>>(object: I_3): _606.LeafOp;
    };
    InnerOp: {
        encode(message: _606.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.InnerOp;
        fromJSON(object: any): _606.InnerOp;
        toJSON(message: _606.InnerOp): unknown;
        fromPartial<I_4 extends {
            hash?: _606.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        } & {
            hash?: _606.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        } & Record<Exclude<keyof I_4, keyof _606.InnerOp>, never>>(object: I_4): _606.InnerOp;
    };
    ProofSpec: {
        encode(message: _606.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.ProofSpec;
        fromJSON(object: any): _606.ProofSpec;
        toJSON(message: _606.ProofSpec): unknown;
        fromPartial<I_5 extends {
            leafSpec?: {
                hash?: _606.HashOp;
                prehashKey?: _606.HashOp;
                prehashValue?: _606.HashOp;
                length?: _606.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _606.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        } & {
            leafSpec?: {
                hash?: _606.HashOp;
                prehashKey?: _606.HashOp;
                prehashValue?: _606.HashOp;
                length?: _606.LengthOp;
                prefix?: Uint8Array;
            } & {
                hash?: _606.HashOp;
                prehashKey?: _606.HashOp;
                prehashValue?: _606.HashOp;
                length?: _606.LengthOp;
                prefix?: Uint8Array;
            } & Record<Exclude<keyof I_5["leafSpec"], keyof _606.LeafOp>, never>;
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _606.HashOp;
            } & {
                childOrder?: number[] & number[] & Record<Exclude<keyof I_5["innerSpec"]["childOrder"], keyof number[]>, never>;
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _606.HashOp;
            } & Record<Exclude<keyof I_5["innerSpec"], keyof _606.InnerSpec>, never>;
            maxDepth?: number;
            minDepth?: number;
        } & Record<Exclude<keyof I_5, keyof _606.ProofSpec>, never>>(object: I_5): _606.ProofSpec;
    };
    InnerSpec: {
        encode(message: _606.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.InnerSpec;
        fromJSON(object: any): _606.InnerSpec;
        toJSON(message: _606.InnerSpec): unknown;
        fromPartial<I_6 extends {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _606.HashOp;
        } & {
            childOrder?: number[] & number[] & Record<Exclude<keyof I_6["childOrder"], keyof number[]>, never>;
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _606.HashOp;
        } & Record<Exclude<keyof I_6, keyof _606.InnerSpec>, never>>(object: I_6): _606.InnerSpec;
    };
    BatchProof: {
        encode(message: _606.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.BatchProof;
        fromJSON(object: any): _606.BatchProof;
        toJSON(message: _606.BatchProof): unknown;
        fromPartial<I_7 extends {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _606.HashOp;
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
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _606.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _606.HashOp;
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
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _606.HashOp;
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
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _606.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _606.HashOp;
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
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _606.HashOp;
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
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _606.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _606.HashOp;
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
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_7["entries"][number]["exist"]["leaf"], keyof _606.LeafOp>, never>;
                    path?: {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I_7["entries"][number]["exist"]["path"][number], keyof _606.InnerOp>, never>)[] & Record<Exclude<keyof I_7["entries"][number]["exist"]["path"], keyof {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_7["entries"][number]["exist"], keyof _606.ExistenceProof>, never>;
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _606.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _606.HashOp;
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
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _606.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["left"]["leaf"], keyof _606.LeafOp>, never>;
                        path?: {
                            hash?: _606.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[] & ({
                            hash?: _606.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & {
                            hash?: _606.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["left"]["path"][number], keyof _606.InnerOp>, never>)[] & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["left"]["path"], keyof {
                            hash?: _606.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["left"], keyof _606.ExistenceProof>, never>;
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _606.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["right"]["leaf"], keyof _606.LeafOp>, never>;
                        path?: {
                            hash?: _606.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[] & ({
                            hash?: _606.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & {
                            hash?: _606.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["right"]["path"][number], keyof _606.InnerOp>, never>)[] & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["right"]["path"], keyof {
                            hash?: _606.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["right"], keyof _606.ExistenceProof>, never>;
                } & Record<Exclude<keyof I_7["entries"][number]["nonexist"], keyof _606.NonExistenceProof>, never>;
            } & Record<Exclude<keyof I_7["entries"][number], keyof _606.BatchEntry>, never>)[] & Record<Exclude<keyof I_7["entries"], keyof {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _606.HashOp;
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
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _606.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _606.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[]>, never>;
        } & Record<Exclude<keyof I_7, "entries">, never>>(object: I_7): _606.BatchProof;
    };
    BatchEntry: {
        encode(message: _606.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.BatchEntry;
        fromJSON(object: any): _606.BatchEntry;
        toJSON(message: _606.BatchEntry): unknown;
        fromPartial<I_8 extends {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _606.HashOp;
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
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _606.HashOp;
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
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_8["exist"]["leaf"], keyof _606.LeafOp>, never>;
                path?: {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I_8["exist"]["path"][number], keyof _606.InnerOp>, never>)[] & Record<Exclude<keyof I_8["exist"]["path"], keyof {
                    hash?: _606.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_8["exist"], keyof _606.ExistenceProof>, never>;
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _606.HashOp;
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
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_8["nonexist"]["left"]["leaf"], keyof _606.LeafOp>, never>;
                    path?: {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I_8["nonexist"]["left"]["path"][number], keyof _606.InnerOp>, never>)[] & Record<Exclude<keyof I_8["nonexist"]["left"]["path"], keyof {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_8["nonexist"]["left"], keyof _606.ExistenceProof>, never>;
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_8["nonexist"]["right"]["leaf"], keyof _606.LeafOp>, never>;
                    path?: {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I_8["nonexist"]["right"]["path"][number], keyof _606.InnerOp>, never>)[] & Record<Exclude<keyof I_8["nonexist"]["right"]["path"], keyof {
                        hash?: _606.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_8["nonexist"]["right"], keyof _606.ExistenceProof>, never>;
            } & Record<Exclude<keyof I_8["nonexist"], keyof _606.NonExistenceProof>, never>;
        } & Record<Exclude<keyof I_8, keyof _606.BatchEntry>, never>>(object: I_8): _606.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _606.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.CompressedBatchProof;
        fromJSON(object: any): _606.CompressedBatchProof;
        toJSON(message: _606.CompressedBatchProof): unknown;
        fromPartial<I_9 extends {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
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
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _606.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        } & {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
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
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
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
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
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
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
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
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_9["entries"][number]["exist"]["leaf"], keyof _606.LeafOp>, never>;
                    path?: number[] & number[] & Record<Exclude<keyof I_9["entries"][number]["exist"]["path"], keyof number[]>, never>;
                } & Record<Exclude<keyof I_9["entries"][number]["exist"], keyof _606.CompressedExistenceProof>, never>;
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
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
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["left"]["leaf"], keyof _606.LeafOp>, never>;
                        path?: number[] & number[] & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["left"]["path"], keyof number[]>, never>;
                    } & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["left"], keyof _606.CompressedExistenceProof>, never>;
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["right"]["leaf"], keyof _606.LeafOp>, never>;
                        path?: number[] & number[] & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["right"]["path"], keyof number[]>, never>;
                    } & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["right"], keyof _606.CompressedExistenceProof>, never>;
                } & Record<Exclude<keyof I_9["entries"][number]["nonexist"], keyof _606.CompressedNonExistenceProof>, never>;
            } & Record<Exclude<keyof I_9["entries"][number], keyof _606.CompressedBatchEntry>, never>)[] & Record<Exclude<keyof I_9["entries"], keyof {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
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
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _606.HashOp;
                            prehashKey?: _606.HashOp;
                            prehashValue?: _606.HashOp;
                            length?: _606.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[]>, never>;
            lookupInners?: {
                hash?: _606.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[] & ({
                hash?: _606.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            } & {
                hash?: _606.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            } & Record<Exclude<keyof I_9["lookupInners"][number], keyof _606.InnerOp>, never>)[] & Record<Exclude<keyof I_9["lookupInners"], keyof {
                hash?: _606.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I_9, keyof _606.CompressedBatchProof>, never>>(object: I_9): _606.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _606.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.CompressedBatchEntry;
        fromJSON(object: any): _606.CompressedBatchEntry;
        toJSON(message: _606.CompressedBatchEntry): unknown;
        fromPartial<I_10 extends {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
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
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
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
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_10["exist"]["leaf"], keyof _606.LeafOp>, never>;
                path?: number[] & number[] & Record<Exclude<keyof I_10["exist"]["path"], keyof number[]>, never>;
            } & Record<Exclude<keyof I_10["exist"], keyof _606.CompressedExistenceProof>, never>;
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
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
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_10["nonexist"]["left"]["leaf"], keyof _606.LeafOp>, never>;
                    path?: number[] & number[] & Record<Exclude<keyof I_10["nonexist"]["left"]["path"], keyof number[]>, never>;
                } & Record<Exclude<keyof I_10["nonexist"]["left"], keyof _606.CompressedExistenceProof>, never>;
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _606.HashOp;
                        prehashKey?: _606.HashOp;
                        prehashValue?: _606.HashOp;
                        length?: _606.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_10["nonexist"]["right"]["leaf"], keyof _606.LeafOp>, never>;
                    path?: number[] & number[] & Record<Exclude<keyof I_10["nonexist"]["right"]["path"], keyof number[]>, never>;
                } & Record<Exclude<keyof I_10["nonexist"]["right"], keyof _606.CompressedExistenceProof>, never>;
            } & Record<Exclude<keyof I_10["nonexist"], keyof _606.CompressedNonExistenceProof>, never>;
        } & Record<Exclude<keyof I_10, keyof _606.CompressedBatchEntry>, never>>(object: I_10): _606.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _606.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.CompressedExistenceProof;
        fromJSON(object: any): _606.CompressedExistenceProof;
        toJSON(message: _606.CompressedExistenceProof): unknown;
        fromPartial<I_11 extends {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _606.HashOp;
                prehashKey?: _606.HashOp;
                prehashValue?: _606.HashOp;
                length?: _606.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        } & {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _606.HashOp;
                prehashKey?: _606.HashOp;
                prehashValue?: _606.HashOp;
                length?: _606.LengthOp;
                prefix?: Uint8Array;
            } & {
                hash?: _606.HashOp;
                prehashKey?: _606.HashOp;
                prehashValue?: _606.HashOp;
                length?: _606.LengthOp;
                prefix?: Uint8Array;
            } & Record<Exclude<keyof I_11["leaf"], keyof _606.LeafOp>, never>;
            path?: number[] & number[] & Record<Exclude<keyof I_11["path"], keyof number[]>, never>;
        } & Record<Exclude<keyof I_11, keyof _606.CompressedExistenceProof>, never>>(object: I_11): _606.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _606.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.CompressedNonExistenceProof;
        fromJSON(object: any): _606.CompressedNonExistenceProof;
        toJSON(message: _606.CompressedNonExistenceProof): unknown;
        fromPartial<I_12 extends {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
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
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_12["left"]["leaf"], keyof _606.LeafOp>, never>;
                path?: number[] & number[] & Record<Exclude<keyof I_12["left"]["path"], keyof number[]>, never>;
            } & Record<Exclude<keyof I_12["left"], keyof _606.CompressedExistenceProof>, never>;
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _606.HashOp;
                    prehashKey?: _606.HashOp;
                    prehashValue?: _606.HashOp;
                    length?: _606.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_12["right"]["leaf"], keyof _606.LeafOp>, never>;
                path?: number[] & number[] & Record<Exclude<keyof I_12["right"]["path"], keyof number[]>, never>;
            } & Record<Exclude<keyof I_12["right"], keyof _606.CompressedExistenceProof>, never>;
        } & Record<Exclude<keyof I_12, keyof _606.CompressedNonExistenceProof>, never>>(object: I_12): _606.CompressedNonExistenceProof;
    };
};
