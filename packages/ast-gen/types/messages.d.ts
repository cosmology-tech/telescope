import * as t from '@babel/types';
import { Mutation } from './types';
export declare const addMsgMethod: ({ methodName, typeUrl, TypeName, methodToCall }: {
    methodName: any;
    typeUrl: any;
    TypeName: any;
    methodToCall: any;
}) => t.ObjectMethod;
export declare const addFromJSONMethod: ({ methodName, typeUrl, TypeName }: {
    methodName: any;
    typeUrl: any;
    TypeName: any;
}) => t.ObjectMethod;
export declare const addFromPartialMethod: ({ methodName, typeUrl, TypeName }: {
    methodName: any;
    typeUrl: any;
    TypeName: any;
}) => t.ObjectMethod;
export declare const addToJSONMethod: ({ methodName, typeUrl, TypeName }: {
    methodName: any;
    typeUrl: any;
    TypeName: any;
}) => t.ObjectMethod;
export declare const addJsonMethod: ({ methodName, typeUrl, TypeName }: {
    methodName: any;
    typeUrl: any;
    TypeName: any;
}) => t.ObjectMethod;
export declare const addEncodedMethod: ({ methodName, typeUrl, TypeName }: {
    methodName: any;
    typeUrl: any;
    TypeName: any;
}) => t.ObjectMethod;
export declare const toObjectWithPartialMethods: (mutations: Mutation[]) => t.ExportNamedDeclaration;
export declare const toObjectWithEncodedMethods: (mutations: Mutation[]) => t.ExportNamedDeclaration;
export declare const toObjectWithJsonMethods: (mutations: Mutation[]) => t.ExportNamedDeclaration;
export declare const toObjectWithToJSONMethods: (mutations: Mutation[]) => t.ExportNamedDeclaration;
export declare const toObjectWithFromJSONMethods: (mutations: Mutation[]) => t.ExportNamedDeclaration;
export declare const createTypeRegistryObject: (mutation: Mutation) => t.ObjectProperty;
export declare const createTypeRegistry: (mutations: Mutation[]) => t.ExportNamedDeclaration;
export declare const createRegistryLoader: () => t.ExportNamedDeclaration;
