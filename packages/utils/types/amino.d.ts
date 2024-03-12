import { ProtoAny, ProtoRoot, ProtoType, ProtoRef, TelescopeOptions, IParseContext, ProtoField } from "@cosmology/types";
export declare const getTypeUrlWithPkgAndName: (pkg: string, name: string) => string;
export declare const getTypeUrl: (root: ProtoRoot, proto: ProtoAny | ProtoType) => string;
export declare const getAminoTypeName: (context: IParseContext, root: ProtoRoot, proto: ProtoType) => any;
export declare const getAminoTypeNameByRef: (ref: ProtoRef, options: TelescopeOptions, root: ProtoRoot, proto: ProtoType) => any;
/**
 * Determines whether a field should be omitted when serializing to JSON based on its JSON tag options.
 *
 * @param ctx - The parse context.
 * @param field - The field to check.
 * @returns A boolean indicating whether the field should be omitted.
 */
export declare const shouldOmitEmpty: (ctx: IParseContext, field: ProtoField) => boolean;
