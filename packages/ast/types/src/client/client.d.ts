import * as t from '@babel/types';
import { GenericParseContext } from '../encoding';
interface CreateClient {
    name: string;
    registries: string[];
    aminos: string[];
    context: GenericParseContext;
}
export declare const createClient: ({ name, registries, aminos, context }: CreateClient) => t.ExportNamedDeclaration;
export {};
