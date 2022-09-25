import * as t from '@babel/types';
import { GenericParseContext } from '../../encoding';
interface CreateStargateClient {
    name: string;
    options: string;
    context: GenericParseContext;
}
interface CreateStargateClientProtoRegistry {
    registries: string[];
    context: GenericParseContext;
}
interface CreateStargateClientOptions {
    name: string;
    context: GenericParseContext;
}
interface CreateStargateClientAminoConverters {
    aminos: string[];
    context: GenericParseContext;
}
export declare const createStargateClient: ({ name, options, context }: CreateStargateClient) => t.ExportNamedDeclaration;
export declare const createStargateClientAminoRegistry: ({ aminos, context }: CreateStargateClientAminoConverters) => t.ExportNamedDeclaration;
export declare const createStargateClientProtoRegistry: ({ registries, context }: CreateStargateClientProtoRegistry) => t.ExportNamedDeclaration;
export declare const createStargateClientOptions: ({ name, context }: CreateStargateClientOptions) => t.ExportNamedDeclaration;
export {};
