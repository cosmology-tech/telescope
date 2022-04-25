import * as _653 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _653.ScalarType;
    scalarTypeToJSON(object: _653.ScalarType): string;
    ScalarType: typeof _653.ScalarType;
    InterfaceDescriptor: {
        encode(message: _653.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.InterfaceDescriptor;
        fromJSON(object: any): _653.InterfaceDescriptor;
        toJSON(message: _653.InterfaceDescriptor): unknown;
        fromPartial<I extends unknown>(object: I): _653.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _653.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.ScalarDescriptor;
        fromJSON(object: any): _653.ScalarDescriptor;
        toJSON(message: _653.ScalarDescriptor): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): _653.ScalarDescriptor;
    };
};
