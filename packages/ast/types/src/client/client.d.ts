import * as t from '@babel/types';
import { GenericParseContext } from '../encoding';
interface CreateStargateClient {
    name: string;
    registries: string[];
    aminos: string[];
    context: GenericParseContext;
}
export declare const createStargateClient: ({ name, registries, aminos, context }: CreateStargateClient) => t.ExportNamedDeclaration;
export { };
