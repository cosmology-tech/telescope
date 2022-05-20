import { ProtoType } from '@osmonauts/types';
import { ProtoStore } from '@osmonauts/proto-parser';
import { AminoParseContext } from '../src/encoding/context';
export declare const expectCode: (ast: any) => void;
export declare const printCode: (ast: any) => void;
export declare const prepareContext: (store: ProtoStore, protoFile: string) => {
    context: AminoParseContext;
    root: import("@osmonauts/types").ProtoRoot;
    protos: ProtoType[];
};
