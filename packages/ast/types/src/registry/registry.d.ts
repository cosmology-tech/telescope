import * as t from '@babel/types';
export interface ServiceMethod {
    methodName: string;
    typeUrl: string;
    TypeName: string;
}
export declare const createTypeRegistryObject: (mutation: ServiceMethod) => t.ObjectProperty;
export declare const createTypeRegistry: (mutations: ServiceMethod[]) => t.ExportNamedDeclaration;
export declare const createRegistryLoader: () => t.ExportNamedDeclaration;
