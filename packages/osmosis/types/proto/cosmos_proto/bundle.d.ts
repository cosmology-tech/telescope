import * as _419 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _419.ScalarType;
    scalarTypeToJSON(object: _419.ScalarType): string;
    ScalarType: typeof _419.ScalarType;
    InterfaceDescriptor: {
        encode(message: _419.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _419.InterfaceDescriptor;
        fromJSON(object: any): _419.InterfaceDescriptor;
        toJSON(message: _419.InterfaceDescriptor): unknown;
        fromPartial<I extends unknown>(object: I): _419.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _419.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _419.ScalarDescriptor;
        fromJSON(object: any): _419.ScalarDescriptor;
        toJSON(message: _419.ScalarDescriptor): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): _419.ScalarDescriptor;
    };
};
