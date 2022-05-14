import { ProtoStore } from '@osmonauts/proto-parser';
import { ProtoType } from '../src/encoding/proto/types';
import { AminoParseContext } from '../src/encoding/context';
export declare const expectCode: (ast: any) => void;
export declare const printCode: (ast: any) => void;
export declare const prepareContext: (store: ProtoStore, protoFile: string) => {
    context: AminoParseContext;
    root: import("@osmonauts/proto-parser").ProtoRoot;
    protos: ProtoType[];
};
