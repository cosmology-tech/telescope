import { ProtoType, TelescopeOptions } from '@osmonauts/types';
import { ProtoStore } from '@osmonauts/proto-parser';
import { AminoParseContext } from '../src/encoding/context';
import { GenericParseContext } from '../src/encoding';
export declare const expectCode: (ast: any) => void;
export declare const printCode: (ast: any) => void;
export declare const getTestProtoStore: (options?: TelescopeOptions) => ProtoStore;
export declare const prepareContext: (store: ProtoStore, protoFile: string) => {
    context: AminoParseContext;
    root: import("@osmonauts/types").ProtoRoot;
    protos: ProtoType[];
};
export declare const getGenericParseContext: () => GenericParseContext;
export declare const getGenericParseContextWithRef: (ref: any) => GenericParseContext;
