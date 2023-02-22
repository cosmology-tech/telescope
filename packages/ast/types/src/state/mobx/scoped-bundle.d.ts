import { GenericParseContext } from '../../encoding';
export declare const createMobxQueryFactory: (context: GenericParseContext, obj: object) => (import("@babel/types").ExportNamedDeclaration | {
    type: string;
    importKind: string;
    specifiers: {
        type: string;
        local: {
            type: string;
            name: string;
        };
    }[];
    source: {
        type: string;
        value: string;
    };
})[];
