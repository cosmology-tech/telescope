import { ProtoType } from '@cosmology/types';
import { ProtoStore } from '@cosmology/proto-parser';
import { AminoParseContext } from '../src/encoding/context';
import { GenericParseContext } from '../src/encoding';
export declare const expectCode: (ast: any) => void;
export declare const printCode: (ast: any) => void;
export declare const defaultTelescopeOptions: {
    prototypes: {
        parser: {
            keepCase: boolean;
        };
        methods: {
            encode: boolean;
            decode: boolean;
            fromJSON: boolean;
            toJSON: boolean;
            fromPartial: boolean;
            toSDK: boolean;
            fromSDK: boolean;
        };
    };
};
export declare const getTestProtoStore: (options?: TelescopeOptions) => ProtoStore;
export declare const prepareContext: (store: ProtoStore, protoFile: string) => {
    context: AminoParseContext;
    root: import("@cosmology/types").TraversedProtoRoot;
    protos: ProtoType[];
};
export declare const getGenericParseContext: () => GenericParseContext;
export declare const getGenericParseContextWithRef: (ref: any) => GenericParseContext;
