import * as t from '@babel/types';
import { ProtoType, ProtoRoot } from '@osmonauts/types';
import { ProtoParseContext } from '../../../context';
interface ApiConverterItemParams {
    root: ProtoRoot;
    context: ProtoParseContext;
    proto: ProtoType;
}
export declare const createApiConverterItem: ({ root, context, proto }: ApiConverterItemParams) => t.ObjectProperty;
interface ApiConverterParams {
    name: string;
    root: ProtoRoot;
    context: ProtoParseContext;
    protos: ProtoType[];
}
export declare const createApiConverter: ({ name, root, context, protos }: ApiConverterParams) => t.ExportNamedDeclaration;
export {};
