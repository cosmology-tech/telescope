import { Any } from "../../../google/protobuf/any";
import { SignMode } from "../signing/v1beta1/signing";
import { CompactBitArray } from "../../crypto/multisig/v1beta1/multisig";
import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** Tx is the standard type used for broadcasting transactions. */
export interface Tx {
    /** body is the processable content of the transaction */
    body: TxBody;
    /**
     * auth_info is the authorization related content of the transaction,
     * specifically signers, signer modes and fee
     */
    authInfo: AuthInfo;
    /**
     * signatures is a list of signatures that matches the length and order of
     * AuthInfo's signer_infos to allow connecting signature meta information like
     * public key and signing mode by position.
     */
    signatures: Uint8Array[];
}
/**
 * TxRaw is a variant of Tx that pins the signer's exact binary representation
 * of body and auth_info. This is used for signing, broadcasting and
 * verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and
 * the hash `sha256(serialize(tx: TxRaw))` becomes the "txhash", commonly used
 * as the transaction ID.
 */
export interface TxRaw {
    /**
     * body_bytes is a protobuf serialization of a TxBody that matches the
     * representation in SignDoc.
     */
    bodyBytes: Uint8Array;
    /**
     * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
     * representation in SignDoc.
     */
    authInfoBytes: Uint8Array;
    /**
     * signatures is a list of signatures that matches the length and order of
     * AuthInfo's signer_infos to allow connecting signature meta information like
     * public key and signing mode by position.
     */
    signatures: Uint8Array[];
}
/** SignDoc is the type used for generating sign bytes for SIGN_MODE_DIRECT. */
export interface SignDoc {
    /**
     * body_bytes is protobuf serialization of a TxBody that matches the
     * representation in TxRaw.
     */
    bodyBytes: Uint8Array;
    /**
     * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
     * representation in TxRaw.
     */
    authInfoBytes: Uint8Array;
    /**
     * chain_id is the unique identifier of the chain this transaction targets.
     * It prevents signed transactions from being used on another chain by an
     * attacker
     */
    chainId: string;
    /** account_number is the account number of the account in state */
    accountNumber: Long;
}
/**
 * SignDocDirectAux is the type used for generating sign bytes for
 * SIGN_MODE_DIRECT_AUX.
 *
 * Since: cosmos-sdk 0.46
 */
export interface SignDocDirectAux {
    /**
     * body_bytes is protobuf serialization of a TxBody that matches the
     * representation in TxRaw.
     */
    bodyBytes: Uint8Array;
    /** public_key is the public key of the signing account. */
    publicKey: Any;
    /**
     * chain_id is the identifier of the chain this transaction targets.
     * It prevents signed transactions from being used on another chain by an
     * attacker.
     */
    chainId: string;
    /** account_number is the account number of the account in state. */
    accountNumber: Long;
    /** sequence is the sequence number of the signing account. */
    sequence: Long;
    /**
     * Tip is the optional tip used for meta-transactions. It should be left
     * empty if the signer is not the tipper for this transaction.
     */
    tip: Tip;
}
/** TxBody is the body of a transaction that all signers sign over. */
export interface TxBody {
    /**
     * messages is a list of messages to be executed. The required signers of
     * those messages define the number and order of elements in AuthInfo's
     * signer_infos and Tx's signatures. Each required signer address is added to
     * the list only the first time it occurs.
     * By convention, the first required signer (usually from the first message)
     * is referred to as the primary signer and pays the fee for the whole
     * transaction.
     */
    messages: Any[];
    /**
     * memo is any arbitrary note/comment to be added to the transaction.
     * WARNING: in clients, any publicly exposed text should not be called memo,
     * but should be called `note` instead (see https://github.com/cosmos/cosmos-sdk/issues/9122).
     */
    memo: string;
    /**
     * timeout is the block height after which this transaction will not
     * be processed by the chain
     */
    timeoutHeight: Long;
    /**
     * extension_options are arbitrary options that can be added by chains
     * when the default options are not sufficient. If any of these are present
     * and can't be handled, the transaction will be rejected
     */
    extensionOptions: Any[];
    /**
     * extension_options are arbitrary options that can be added by chains
     * when the default options are not sufficient. If any of these are present
     * and can't be handled, they will be ignored
     */
    nonCriticalExtensionOptions: Any[];
}
/**
 * AuthInfo describes the fee and signer modes that are used to sign a
 * transaction.
 */
export interface AuthInfo {
    /**
     * signer_infos defines the signing modes for the required signers. The number
     * and order of elements must match the required signers from TxBody's
     * messages. The first element is the primary signer and the one which pays
     * the fee.
     */
    signerInfos: SignerInfo[];
    /**
     * Fee is the fee and gas limit for the transaction. The first signer is the
     * primary signer and the one which pays the fee. The fee can be calculated
     * based on the cost of evaluating the body and doing signature verification
     * of the signers. This can be estimated via simulation.
     */
    fee: Fee;
    /**
     * Tip is the optional tip used for meta-transactions.
     *
     * Since: cosmos-sdk 0.46
     */
    tip: Tip;
}
/**
 * SignerInfo describes the public key and signing mode of a single top-level
 * signer.
 */
export interface SignerInfo {
    /**
     * public_key is the public key of the signer. It is optional for accounts
     * that already exist in state. If unset, the verifier can use the required \
     * signer address for this position and lookup the public key.
     */
    publicKey: Any;
    /**
     * mode_info describes the signing mode of the signer and is a nested
     * structure to support nested multisig pubkey's
     */
    modeInfo: ModeInfo;
    /**
     * sequence is the sequence of the account, which describes the
     * number of committed transactions signed by a given address. It is used to
     * prevent replay attacks.
     */
    sequence: Long;
}
/** ModeInfo describes the signing mode of a single or nested multisig signer. */
export interface ModeInfo {
    /** single represents a single signer */
    single?: ModeInfo_Single;
    /** multi represents a nested multisig signer */
    multi?: ModeInfo_Multi;
}
/**
 * Single is the mode info for a single signer. It is structured as a message
 * to allow for additional fields such as locale for SIGN_MODE_TEXTUAL in the
 * future
 */
export interface ModeInfo_Single {
    /** mode is the signing mode of the single signer */
    mode: SignMode;
}
/** Multi is the mode info for a multisig public key */
export interface ModeInfo_Multi {
    /** bitarray specifies which keys within the multisig are signing */
    bitarray: CompactBitArray;
    /**
     * mode_infos is the corresponding modes of the signers of the multisig
     * which could include nested multisig public keys
     */
    modeInfos: ModeInfo[];
}
/**
 * Fee includes the amount of coins paid in fees and the maximum
 * gas to be used by the transaction. The ratio yields an effective "gasprice",
 * which must be above some miminum to be accepted into the mempool.
 */
export interface Fee {
    /** amount is the amount of coins to be paid as a fee */
    amount: Coin[];
    /**
     * gas_limit is the maximum gas that can be used in transaction processing
     * before an out of gas error occurs
     */
    gasLimit: Long;
    /**
     * if unset, the first signer is responsible for paying the fees. If set, the specified account must pay the fees.
     * the payer must be a tx signer (and thus have signed this field in AuthInfo).
     * setting this field does *not* change the ordering of required signers for the transaction.
     */
    payer: string;
    /**
     * if set, the fee payer (either the first signer or the value of the payer field) requests that a fee grant be used
     * to pay fees instead of the fee payer's own balance. If an appropriate fee grant does not exist or the chain does
     * not support fee grants, this will fail
     */
    granter: string;
}
/**
 * Tip is the tip used for meta-transactions.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Tip {
    /** amount is the amount of the tip */
    amount: Coin[];
    /** tipper is the address of the account paying for the tip */
    tipper: string;
}
/**
 * AuxSignerData is the intermediary format that an auxiliary signer (e.g. a
 * tipper) builds and sends to the fee payer (who will build and broadcast the
 * actual tx). AuxSignerData is not a valid tx in itself, and will be rejected
 * by the node if sent directly as-is.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AuxSignerData {
    /**
     * address is the bech32-encoded address of the auxiliary signer. If using
     * AuxSignerData across different chains, the bech32 prefix of the target
     * chain (where the final transaction is broadcasted) should be used.
     */
    address: string;
    /**
     * sign_doc is the SIGN_MOD_DIRECT_AUX sign doc that the auxiliary signer
     * signs. Note: we use the same sign doc even if we're signing with
     * LEGACY_AMINO_JSON.
     */
    signDoc: SignDocDirectAux;
    /** mode is the signing mode of the single signer */
    mode: SignMode;
    /** sig is the signature of the sign doc. */
    sig: Uint8Array;
}
export declare const Tx: {
    encode(message: Tx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Tx;
    fromJSON(object: any): Tx;
    toJSON(message: Tx): unknown;
    fromPartial<I extends {
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
                        mode?: SignMode;
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
            } & Record<Exclude<keyof I["body"]["messages"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["body"]["messages"], keyof {
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
            } & Record<Exclude<keyof I["body"]["extensionOptions"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["body"]["extensionOptions"], keyof {
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
            } & Record<Exclude<keyof I["body"]["nonCriticalExtensionOptions"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["body"]["nonCriticalExtensionOptions"], keyof {
                typeUrl?: string;
                value?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["body"], keyof TxBody>, never>;
        authInfo?: {
            signerInfos?: {
                publicKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                modeInfo?: {
                    single?: {
                        mode?: SignMode;
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
                        mode?: SignMode;
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
                        mode?: SignMode;
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
                } & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["publicKey"], keyof Any>, never>;
                modeInfo?: {
                    single?: {
                        mode?: SignMode;
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
                        mode?: SignMode;
                    } & {
                        mode?: SignMode;
                    } & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["modeInfo"]["single"], "mode">, never>;
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
                        } & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                        modeInfos?: any[] & ({
                            single?: {
                                mode?: SignMode;
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
                                mode?: SignMode;
                            } & {
                                mode?: SignMode;
                            } & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["single"], "mode">, never>;
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
                                } & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                                modeInfos?: any[] & ({
                                    single?: {
                                        mode?: SignMode;
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
                                        mode?: SignMode;
                                    } & {
                                        mode?: SignMode;
                                    } & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
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
                                        } & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                                        modeInfos?: any[] & ({
                                            single?: {
                                                mode?: SignMode;
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
                                                mode?: SignMode;
                                            } & {
                                                mode?: SignMode;
                                            } & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
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
                                                } & any & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                                                modeInfos?: any[] & ({
                                                    single?: {
                                                        mode?: SignMode;
                                                    };
                                                    multi?: {
                                                        bitarray?: {
                                                            extraBitsStored?: number;
                                                            elems?: Uint8Array;
                                                        };
                                                        modeInfos?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                                            } & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof ModeInfo_Multi>, never>;
                                        } & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                                    } & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof ModeInfo_Multi>, never>;
                                } & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                            } & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"], keyof ModeInfo_Multi>, never>;
                        } & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["modeInfo"]["multi"], keyof ModeInfo_Multi>, never>;
                } & Record<Exclude<keyof I["authInfo"]["signerInfos"][number]["modeInfo"], keyof ModeInfo>, never>;
                sequence?: any;
            } & Record<Exclude<keyof I["authInfo"]["signerInfos"][number], keyof SignerInfo>, never>)[] & Record<Exclude<keyof I["authInfo"]["signerInfos"], keyof {
                publicKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                modeInfo?: {
                    single?: {
                        mode?: SignMode;
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
                } & Record<Exclude<keyof I["authInfo"]["fee"]["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["authInfo"]["fee"]["amount"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
                gasLimit?: any;
                payer?: string;
                granter?: string;
            } & Record<Exclude<keyof I["authInfo"]["fee"], keyof Fee>, never>;
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
                } & Record<Exclude<keyof I["authInfo"]["tip"]["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["authInfo"]["tip"]["amount"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
                tipper?: string;
            } & Record<Exclude<keyof I["authInfo"]["tip"], keyof Tip>, never>;
        } & Record<Exclude<keyof I["authInfo"], keyof AuthInfo>, never>;
        signatures?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["signatures"], keyof Uint8Array[]>, never>;
    } & Record<Exclude<keyof I, keyof Tx>, never>>(object: I): Tx;
};
export declare const TxRaw: {
    encode(message: TxRaw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxRaw;
    fromJSON(object: any): TxRaw;
    toJSON(message: TxRaw): unknown;
    fromPartial<I extends {
        bodyBytes?: Uint8Array;
        authInfoBytes?: Uint8Array;
        signatures?: Uint8Array[];
    } & {
        bodyBytes?: Uint8Array;
        authInfoBytes?: Uint8Array;
        signatures?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["signatures"], keyof Uint8Array[]>, never>;
    } & Record<Exclude<keyof I, keyof TxRaw>, never>>(object: I): TxRaw;
};
export declare const SignDoc: {
    encode(message: SignDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignDoc;
    fromJSON(object: any): SignDoc;
    toJSON(message: SignDoc): unknown;
    fromPartial<I extends {
        bodyBytes?: Uint8Array;
        authInfoBytes?: Uint8Array;
        chainId?: string;
        accountNumber?: any;
    } & {
        bodyBytes?: Uint8Array;
        authInfoBytes?: Uint8Array;
        chainId?: string;
        accountNumber?: any;
    } & Record<Exclude<keyof I, keyof SignDoc>, never>>(object: I): SignDoc;
};
export declare const SignDocDirectAux: {
    encode(message: SignDocDirectAux, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignDocDirectAux;
    fromJSON(object: any): SignDocDirectAux;
    toJSON(message: SignDocDirectAux): unknown;
    fromPartial<I extends {
        bodyBytes?: Uint8Array;
        publicKey?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        chainId?: string;
        accountNumber?: any;
        sequence?: any;
        tip?: {
            amount?: {
                denom?: string;
                amount?: string;
            }[];
            tipper?: string;
        };
    } & {
        bodyBytes?: Uint8Array;
        publicKey?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["publicKey"], keyof Any>, never>;
        chainId?: string;
        accountNumber?: any;
        sequence?: any;
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
            } & Record<Exclude<keyof I["tip"]["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["tip"]["amount"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            tipper?: string;
        } & Record<Exclude<keyof I["tip"], keyof Tip>, never>;
    } & Record<Exclude<keyof I, keyof SignDocDirectAux>, never>>(object: I): SignDocDirectAux;
};
export declare const TxBody: {
    encode(message: TxBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxBody;
    fromJSON(object: any): TxBody;
    toJSON(message: TxBody): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["messages"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["messages"], keyof {
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
        } & Record<Exclude<keyof I["extensionOptions"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["extensionOptions"], keyof {
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
        } & Record<Exclude<keyof I["nonCriticalExtensionOptions"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["nonCriticalExtensionOptions"], keyof {
            typeUrl?: string;
            value?: Uint8Array;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof TxBody>, never>>(object: I): TxBody;
};
export declare const AuthInfo: {
    encode(message: AuthInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthInfo;
    fromJSON(object: any): AuthInfo;
    toJSON(message: AuthInfo): unknown;
    fromPartial<I extends {
        signerInfos?: {
            publicKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            modeInfo?: {
                single?: {
                    mode?: SignMode;
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
                    mode?: SignMode;
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
                    mode?: SignMode;
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
            } & Record<Exclude<keyof I["signerInfos"][number]["publicKey"], keyof Any>, never>;
            modeInfo?: {
                single?: {
                    mode?: SignMode;
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
                    mode?: SignMode;
                } & {
                    mode?: SignMode;
                } & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["single"], "mode">, never>;
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
                    } & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                    modeInfos?: any[] & ({
                        single?: {
                            mode?: SignMode;
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
                            mode?: SignMode;
                        } & {
                            mode?: SignMode;
                        } & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["single"], "mode">, never>;
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
                            } & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                            modeInfos?: any[] & ({
                                single?: {
                                    mode?: SignMode;
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
                                    mode?: SignMode;
                                } & {
                                    mode?: SignMode;
                                } & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
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
                                    } & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                                    modeInfos?: any[] & ({
                                        single?: {
                                            mode?: SignMode;
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
                                            mode?: SignMode;
                                        } & {
                                            mode?: SignMode;
                                        } & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
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
                                            } & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                                            modeInfos?: any[] & ({
                                                single?: {
                                                    mode?: SignMode;
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
                                                    mode?: SignMode;
                                                } & any & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
                                                multi?: {
                                                    bitarray?: {
                                                        extraBitsStored?: number;
                                                        elems?: Uint8Array;
                                                    };
                                                    modeInfos?: any[];
                                                } & any & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof ModeInfo_Multi>, never>;
                                            } & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                                        } & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof ModeInfo_Multi>, never>;
                                    } & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                                } & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof ModeInfo_Multi>, never>;
                            } & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                        } & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"], keyof ModeInfo_Multi>, never>;
                    } & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"]["multi"], keyof ModeInfo_Multi>, never>;
            } & Record<Exclude<keyof I["signerInfos"][number]["modeInfo"], keyof ModeInfo>, never>;
            sequence?: any;
        } & Record<Exclude<keyof I["signerInfos"][number], keyof SignerInfo>, never>)[] & Record<Exclude<keyof I["signerInfos"], keyof {
            publicKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            modeInfo?: {
                single?: {
                    mode?: SignMode;
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
            } & Record<Exclude<keyof I["fee"]["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["fee"]["amount"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            gasLimit?: any;
            payer?: string;
            granter?: string;
        } & Record<Exclude<keyof I["fee"], keyof Fee>, never>;
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
            } & Record<Exclude<keyof I["tip"]["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["tip"]["amount"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            tipper?: string;
        } & Record<Exclude<keyof I["tip"], keyof Tip>, never>;
    } & Record<Exclude<keyof I, keyof AuthInfo>, never>>(object: I): AuthInfo;
};
export declare const SignerInfo: {
    encode(message: SignerInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignerInfo;
    fromJSON(object: any): SignerInfo;
    toJSON(message: SignerInfo): unknown;
    fromPartial<I extends {
        publicKey?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        modeInfo?: {
            single?: {
                mode?: SignMode;
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
        } & Record<Exclude<keyof I["publicKey"], keyof Any>, never>;
        modeInfo?: {
            single?: {
                mode?: SignMode;
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
                mode?: SignMode;
            } & {
                mode?: SignMode;
            } & Record<Exclude<keyof I["modeInfo"]["single"], "mode">, never>;
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
                } & Record<Exclude<keyof I["modeInfo"]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                modeInfos?: any[] & ({
                    single?: {
                        mode?: SignMode;
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
                        mode?: SignMode;
                    } & {
                        mode?: SignMode;
                    } & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"][number]["single"], "mode">, never>;
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
                        } & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                        modeInfos?: any[] & ({
                            single?: {
                                mode?: SignMode;
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
                                mode?: SignMode;
                            } & {
                                mode?: SignMode;
                            } & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
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
                                } & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                                modeInfos?: any[] & ({
                                    single?: {
                                        mode?: SignMode;
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
                                        mode?: SignMode;
                                    } & {
                                        mode?: SignMode;
                                    } & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
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
                                        } & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                                        modeInfos?: any[] & ({
                                            single?: {
                                                mode?: SignMode;
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
                                                mode?: SignMode;
                                            } & {
                                                mode?: SignMode;
                                            } & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
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
                                                } & any & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                                                modeInfos?: any[] & ({
                                                    single?: {
                                                        mode?: SignMode;
                                                    };
                                                    multi?: {
                                                        bitarray?: {
                                                            extraBitsStored?: number;
                                                            elems?: Uint8Array;
                                                        };
                                                        modeInfos?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                                            } & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof ModeInfo_Multi>, never>;
                                        } & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                                    } & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof ModeInfo_Multi>, never>;
                                } & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                            } & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof ModeInfo_Multi>, never>;
                        } & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"][number]["multi"], keyof ModeInfo_Multi>, never>;
                } & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["modeInfo"]["multi"]["modeInfos"], keyof any[]>, never>;
            } & Record<Exclude<keyof I["modeInfo"]["multi"], keyof ModeInfo_Multi>, never>;
        } & Record<Exclude<keyof I["modeInfo"], keyof ModeInfo>, never>;
        sequence?: any;
    } & Record<Exclude<keyof I, keyof SignerInfo>, never>>(object: I): SignerInfo;
};
export declare const ModeInfo: {
    encode(message: ModeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModeInfo;
    fromJSON(object: any): ModeInfo;
    toJSON(message: ModeInfo): unknown;
    fromPartial<I extends {
        single?: {
            mode?: SignMode;
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
            mode?: SignMode;
        } & {
            mode?: SignMode;
        } & Record<Exclude<keyof I["single"], "mode">, never>;
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
            } & Record<Exclude<keyof I["multi"]["bitarray"], keyof CompactBitArray>, never>;
            modeInfos?: any[] & ({
                single?: {
                    mode?: SignMode;
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
                    mode?: SignMode;
                } & {
                    mode?: SignMode;
                } & Record<Exclude<keyof I["multi"]["modeInfos"][number]["single"], "mode">, never>;
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
                    } & Record<Exclude<keyof I["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                    modeInfos?: any[] & ({
                        single?: {
                            mode?: SignMode;
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
                            mode?: SignMode;
                        } & {
                            mode?: SignMode;
                        } & Record<Exclude<keyof I["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
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
                            } & Record<Exclude<keyof I["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                            modeInfos?: any[] & ({
                                single?: {
                                    mode?: SignMode;
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
                                    mode?: SignMode;
                                } & {
                                    mode?: SignMode;
                                } & Record<Exclude<keyof I["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
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
                                    } & Record<Exclude<keyof I["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                                    modeInfos?: any[] & ({
                                        single?: {
                                            mode?: SignMode;
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
                                            mode?: SignMode;
                                        } & {
                                            mode?: SignMode;
                                        } & Record<Exclude<keyof I["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
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
                                            } & Record<Exclude<keyof I["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                                            modeInfos?: any[] & ({
                                                single?: {
                                                    mode?: SignMode;
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
                                                    mode?: SignMode;
                                                } & any & Record<Exclude<keyof I["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
                                                multi?: {
                                                    bitarray?: {
                                                        extraBitsStored?: number;
                                                        elems?: Uint8Array;
                                                    };
                                                    modeInfos?: any[];
                                                } & any & Record<Exclude<keyof I["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof ModeInfo_Multi>, never>;
                                            } & Record<Exclude<keyof I["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                                        } & Record<Exclude<keyof I["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof ModeInfo_Multi>, never>;
                                    } & Record<Exclude<keyof I["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                                } & Record<Exclude<keyof I["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof ModeInfo_Multi>, never>;
                            } & Record<Exclude<keyof I["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                        } & Record<Exclude<keyof I["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof ModeInfo_Multi>, never>;
                    } & Record<Exclude<keyof I["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["multi"]["modeInfos"][number]["multi"], keyof ModeInfo_Multi>, never>;
            } & Record<Exclude<keyof I["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["multi"]["modeInfos"], keyof any[]>, never>;
        } & Record<Exclude<keyof I["multi"], keyof ModeInfo_Multi>, never>;
    } & Record<Exclude<keyof I, keyof ModeInfo>, never>>(object: I): ModeInfo;
};
export declare const ModeInfo_Single: {
    encode(message: ModeInfo_Single, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModeInfo_Single;
    fromJSON(object: any): ModeInfo_Single;
    toJSON(message: ModeInfo_Single): unknown;
    fromPartial<I extends {
        mode?: SignMode;
    } & {
        mode?: SignMode;
    } & Record<Exclude<keyof I, "mode">, never>>(object: I): ModeInfo_Single;
};
export declare const ModeInfo_Multi: {
    encode(message: ModeInfo_Multi, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModeInfo_Multi;
    fromJSON(object: any): ModeInfo_Multi;
    toJSON(message: ModeInfo_Multi): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["bitarray"], keyof CompactBitArray>, never>;
        modeInfos?: any[] & ({
            single?: {
                mode?: SignMode;
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
                mode?: SignMode;
            } & {
                mode?: SignMode;
            } & Record<Exclude<keyof I["modeInfos"][number]["single"], "mode">, never>;
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
                } & Record<Exclude<keyof I["modeInfos"][number]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                modeInfos?: any[] & ({
                    single?: {
                        mode?: SignMode;
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
                        mode?: SignMode;
                    } & {
                        mode?: SignMode;
                    } & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
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
                        } & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                        modeInfos?: any[] & ({
                            single?: {
                                mode?: SignMode;
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
                                mode?: SignMode;
                            } & {
                                mode?: SignMode;
                            } & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
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
                                } & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                                modeInfos?: any[] & ({
                                    single?: {
                                        mode?: SignMode;
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
                                        mode?: SignMode;
                                    } & {
                                        mode?: SignMode;
                                    } & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
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
                                        } & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                                        modeInfos?: any[] & ({
                                            single?: {
                                                mode?: SignMode;
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
                                                mode?: SignMode;
                                            } & {
                                                mode?: SignMode;
                                            } & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">, never>;
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
                                                } & any & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof CompactBitArray>, never>;
                                                modeInfos?: any[] & ({
                                                    single?: {
                                                        mode?: SignMode;
                                                    };
                                                    multi?: {
                                                        bitarray?: {
                                                            extraBitsStored?: number;
                                                            elems?: Uint8Array;
                                                        };
                                                        modeInfos?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                                            } & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof ModeInfo_Multi>, never>;
                                        } & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                                    } & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof ModeInfo_Multi>, never>;
                                } & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                            } & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof ModeInfo_Multi>, never>;
                        } & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof ModeInfo_Multi>, never>;
                } & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>, never>;
            } & Record<Exclude<keyof I["modeInfos"][number]["multi"], keyof ModeInfo_Multi>, never>;
        } & Record<Exclude<keyof I["modeInfos"][number], keyof ModeInfo>, never>)[] & Record<Exclude<keyof I["modeInfos"], keyof any[]>, never>;
    } & Record<Exclude<keyof I, keyof ModeInfo_Multi>, never>>(object: I): ModeInfo_Multi;
};
export declare const Fee: {
    encode(message: Fee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Fee;
    fromJSON(object: any): Fee;
    toJSON(message: Fee): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["amount"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        gasLimit?: any;
        payer?: string;
        granter?: string;
    } & Record<Exclude<keyof I, keyof Fee>, never>>(object: I): Fee;
};
export declare const Tip: {
    encode(message: Tip, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Tip;
    fromJSON(object: any): Tip;
    toJSON(message: Tip): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["amount"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        tipper?: string;
    } & Record<Exclude<keyof I, keyof Tip>, never>>(object: I): Tip;
};
export declare const AuxSignerData: {
    encode(message: AuxSignerData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuxSignerData;
    fromJSON(object: any): AuxSignerData;
    toJSON(message: AuxSignerData): unknown;
    fromPartial<I extends {
        address?: string;
        signDoc?: {
            bodyBytes?: Uint8Array;
            publicKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            chainId?: string;
            accountNumber?: any;
            sequence?: any;
            tip?: {
                amount?: {
                    denom?: string;
                    amount?: string;
                }[];
                tipper?: string;
            };
        };
        mode?: SignMode;
        sig?: Uint8Array;
    } & {
        address?: string;
        signDoc?: {
            bodyBytes?: Uint8Array;
            publicKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            chainId?: string;
            accountNumber?: any;
            sequence?: any;
            tip?: {
                amount?: {
                    denom?: string;
                    amount?: string;
                }[];
                tipper?: string;
            };
        } & {
            bodyBytes?: Uint8Array;
            publicKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["signDoc"]["publicKey"], keyof Any>, never>;
            chainId?: string;
            accountNumber?: any;
            sequence?: any;
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
                } & Record<Exclude<keyof I["signDoc"]["tip"]["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["signDoc"]["tip"]["amount"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
                tipper?: string;
            } & Record<Exclude<keyof I["signDoc"]["tip"], keyof Tip>, never>;
        } & Record<Exclude<keyof I["signDoc"], keyof SignDocDirectAux>, never>;
        mode?: SignMode;
        sig?: Uint8Array;
    } & Record<Exclude<keyof I, keyof AuxSignerData>, never>>(object: I): AuxSignerData;
};
