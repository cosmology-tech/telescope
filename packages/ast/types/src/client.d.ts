import * as t from '@babel/types';
interface CreateClient {
    name: string;
    registries: string[];
    aminos: string[];
}
export declare const createClient: ({ name, registries, aminos }: CreateClient) => t.ExportNamedDeclaration;
export {};
