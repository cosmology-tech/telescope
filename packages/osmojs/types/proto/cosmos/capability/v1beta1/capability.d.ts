import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */
export interface Capability {
    index: Long;
}
/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */
export interface Owner {
    module: string;
    name: string;
}
/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 */
export interface CapabilityOwners {
    owners: Owner[];
}
export declare const Capability: {
    encode(message: Capability, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Capability;
    fromJSON(object: any): Capability;
    toJSON(message: Capability): unknown;
    fromPartial<I extends {
        index?: any;
    } & {
        index?: any;
    } & Record<Exclude<keyof I, "index">, never>>(object: I): Capability;
};
export declare const Owner: {
    encode(message: Owner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Owner;
    fromJSON(object: any): Owner;
    toJSON(message: Owner): unknown;
    fromPartial<I extends {
        module?: string;
        name?: string;
    } & {
        module?: string;
        name?: string;
    } & Record<Exclude<keyof I, keyof Owner>, never>>(object: I): Owner;
};
export declare const CapabilityOwners: {
    encode(message: CapabilityOwners, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CapabilityOwners;
    fromJSON(object: any): CapabilityOwners;
    toJSON(message: CapabilityOwners): unknown;
    fromPartial<I extends {
        owners?: {
            module?: string;
            name?: string;
        }[];
    } & {
        owners?: {
            module?: string;
            name?: string;
        }[] & ({
            module?: string;
            name?: string;
        } & {
            module?: string;
            name?: string;
        } & Record<Exclude<keyof I["owners"][number], keyof Owner>, never>)[] & Record<Exclude<keyof I["owners"], keyof {
            module?: string;
            name?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "owners">, never>>(object: I): CapabilityOwners;
};
