import * as t from '@babel/types';
import { GenericParseContext } from '../../encoding';
interface CreateStargateClient {
    name: string;
    options: string;
    context: GenericParseContext;
}
export declare const createStargateClient: ({ name, options, context }: CreateStargateClient) => t.ExportNamedDeclaration;
interface CreateStargateClientOptions {
    name: string;
    registries: string[];
    aminos: string[];
    context: GenericParseContext;
}
export declare const createStargateClientOptions: ({ name, registries, aminos, context }: CreateStargateClientOptions) => t.ExportNamedDeclaration;
export {};
