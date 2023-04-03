import * as t from '@babel/types';
import { GenericParseContext } from '../encoding';
export declare const TypeLong: {
    types: {
        bigint: string;
        long: string;
    };
    identifiers: {
        bigint: t.Identifier;
        long: t.Identifier;
    };
    uzeroExpressions: {
        bigint: t.CallExpression;
        long: t.MemberExpression;
    };
    zeroExpressions: {
        bigint: t.CallExpression;
        long: t.MemberExpression;
    };
    fromValueExpressions: {
        bigint: t.ArrowFunctionExpression;
        long: t.MemberExpression;
    };
    fromNumberExpressions: {
        bigint: t.Identifier;
        long: t.MemberExpression;
    };
    fromStringExpressions: {
        bigint: t.Identifier;
        long: t.MemberExpression;
    };
    addUtil: (ctx?: GenericParseContext) => void;
    getType: (ctx: GenericParseContext) => string;
    getIdentifier: (ctx: GenericParseContext) => t.Identifier;
    getUZero: (ctx: GenericParseContext) => t.Expression;
    getZero: (ctx: GenericParseContext) => t.Expression;
    getFromValue: (ctx: GenericParseContext) => t.Expression;
    getFromNumber: (ctx: GenericParseContext) => t.Expression;
    getFromString: (ctx: GenericParseContext) => t.Expression;
    getNode: (ctx: GenericParseContext, mappings: any) => any;
    getLongNotZero: (prop: string, ctx: GenericParseContext) => t.Expression;
};