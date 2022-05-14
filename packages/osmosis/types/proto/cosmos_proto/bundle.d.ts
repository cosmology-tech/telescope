import * as _1 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _1.ScalarType;
    scalarTypeToJSON(object: _1.ScalarType): string;
    ScalarType: typeof _1.ScalarType;
    InterfaceDescriptor: {
        encode(message: _1.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.InterfaceDescriptor;
        fromJSON(object: any): _1.InterfaceDescriptor;
        toJSON(message: _1.InterfaceDescriptor): unknown;
        fromPartial<I extends {
            name?: string;
            description?: string;
        } & {
            name?: string;
            description?: string;
        } & Record<Exclude<keyof I, keyof _1.InterfaceDescriptor>, never>>(object: I): _1.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _1.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ScalarDescriptor;
        fromJSON(object: any): _1.ScalarDescriptor;
        toJSON(message: _1.ScalarDescriptor): unknown;
        fromPartial<I_1 extends {
            name?: string;
            description?: string;
            fieldType?: _1.ScalarType[];
        } & {
            name?: string;
            description?: string;
            fieldType?: _1.ScalarType[] & _1.ScalarType[] & Record<Exclude<keyof I_1["fieldType"], keyof _1.ScalarType[]>, never>;
        } & Record<Exclude<keyof I_1, keyof _1.ScalarDescriptor>, never>>(object: I_1): _1.ScalarDescriptor;
    };
};
