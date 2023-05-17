import * as t from '@babel/types';
import { GenericParseContext } from '../encoding';
export declare const BinaryCoder: {
    addUtil: (ctx?: GenericParseContext, type?: string) => void;
    getNode: (ctx: GenericParseContext, mappings: any) => any;
    readerMemberExp: {
        bigint: t.Identifier;
        long: t.MemberExpression;
    };
    writerMemberExp: {
        bigint: t.Identifier;
        long: t.MemberExpression;
    };
    readerTypeRef: {
        bigint: t.TSTypeReference;
        long: t.TSTypeReference;
    };
    writerTypeRef: {
        bigint: t.TSTypeReference;
        long: t.TSTypeReference;
    };
    getReaderMemberExp: (ctx: GenericParseContext) => t.MemberExpression;
    getWriterMemberExp: (ctx: GenericParseContext) => t.MemberExpression;
    getReaderTypeRef: (ctx: GenericParseContext) => t.TSTypeReference;
    getWriterTypeRef: (ctx: GenericParseContext) => t.TSTypeReference;
};
