import { TelescopeBuilder } from '../builder';
import { GenericParseContext } from '@osmonauts/ast';
import * as t from '@babel/types';
export declare const commonBundlePlugin: (builder: TelescopeBuilder, bundleFilename: string, packageMappings: object, astFn: (context: GenericParseContext, obj: object) => (t.ExportNamedDeclaration | {
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
})[]) => void;
