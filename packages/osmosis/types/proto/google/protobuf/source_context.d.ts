import * as _m0 from "protobufjs/minimal";
/**
 * `SourceContext` represents information about the source of a
 * protobuf element, like the file in which it is defined.
 */
export interface SourceContext {
    /**
     * The path-qualified name of the .proto file that contained the associated
     * protobuf element.  For example: `"google/protobuf/source_context.proto"`.
     */
    fileName: string;
}
export declare const SourceContext: {
    encode(message: SourceContext, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceContext;
    fromJSON(object: any): SourceContext;
    toJSON(message: SourceContext): unknown;
    fromPartial<I extends {
        fileName?: string;
    } & {
        fileName?: string;
    } & Record<Exclude<keyof I, "fileName">, never>>(object: I): SourceContext;
};
