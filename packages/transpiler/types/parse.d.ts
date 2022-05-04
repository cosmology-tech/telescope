import { ProtoStore, ProtoRef } from '@osmonauts/proto-parser';
import { ProtoField } from '@osmonauts/ast';
export declare const parse: (store: ProtoStore, ref: ProtoRef) => any;
export declare const getParsedObjectName: (ref: ProtoRef, obj: any, scope: string[]) => string;
export declare const getKeyTypeObjectName: (obj: any, field: ProtoField) => string;
export declare const parseType: (store: ProtoStore, ref: ProtoRef, obj: any, imports: object, body: any[], scope: string[], isNested?: boolean) => void;
export declare const parseEnum: (store: ProtoStore, ref: ProtoRef, obj: any, imports: object, body: any[], scope: string[], isNested?: boolean) => void;
interface ParseRecur {
    store: ProtoStore;
    ref: ProtoRef;
    obj: any;
    imports: object;
    body: any[];
    scope: string[];
    isNested: boolean;
}
export declare const parseRecur: ({ store, ref, obj, imports, body, scope, isNested }: ParseRecur) => void;
export {};
