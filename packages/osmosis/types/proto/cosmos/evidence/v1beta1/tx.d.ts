import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidence {
    submitter: string;
    evidence: Any;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponse {
    /** hash defines the hash of the evidence. */
    hash: Uint8Array;
}
export declare const MsgSubmitEvidence: {
    encode(message: MsgSubmitEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitEvidence;
    fromJSON(object: any): MsgSubmitEvidence;
    toJSON(message: MsgSubmitEvidence): unknown;
    fromPartial<I extends {
        submitter?: string;
        evidence?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        submitter?: string;
        evidence?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["evidence"], keyof Any>, never>;
    } & Record<Exclude<keyof I, keyof MsgSubmitEvidence>, never>>(object: I): MsgSubmitEvidence;
};
export declare const MsgSubmitEvidenceResponse: {
    encode(message: MsgSubmitEvidenceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitEvidenceResponse;
    fromJSON(object: any): MsgSubmitEvidenceResponse;
    toJSON(message: MsgSubmitEvidenceResponse): unknown;
    fromPartial<I extends {
        hash?: Uint8Array;
    } & {
        hash?: Uint8Array;
    } & Record<Exclude<keyof I, "hash">, never>>(object: I): MsgSubmitEvidenceResponse;
};
