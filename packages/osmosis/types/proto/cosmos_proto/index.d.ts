import * as _608 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _608.ScalarType;
    scalarTypeToJSON(object: _608.ScalarType): string;
    ScalarType: typeof _608.ScalarType;
    InterfaceDescriptor: {
        encode(message: _608.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _608.InterfaceDescriptor;
        fromJSON(object: any): _608.InterfaceDescriptor;
        toJSON(message: _608.InterfaceDescriptor): unknown;
        fromPartial<I extends unknown>(object: I): _608.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _608.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _608.ScalarDescriptor;
        fromJSON(object: any): _608.ScalarDescriptor;
        toJSON(message: _608.ScalarDescriptor): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): _608.ScalarDescriptor;
    };
};
