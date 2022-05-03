import * as t from '@babel/types';
import { pascal } from 'case';
import { AminoExceptions } from '../../../types';
import { arrowFunctionExpression, identifier, objectMethod } from '../../../utils';
import { ProtoType, ProtoField, getBaseCreateTypeFuncName } from '../../types';
import { AminoOptions } from '../amino-converter';
import { arrayTypes, fromAmino } from './utils';

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(`need to implement toAmino (${field.type} rules[${field.rule}] name[${name}])`);
}

export const fromAminoJsonMethod = (proto: ProtoType, options: AminoOptions) => {

    const fromAminoParams = t.objectPattern(
        Object.keys(proto.fields).map((field) => t.objectProperty(
            t.identifier(options.aminoCasingFn(field)),
            t.identifier(options.aminoCasingFn(field)),
            false,
            true)
        )
    );
    fromAminoParams.typeAnnotation = t.tsTypeAnnotation(t.tsIndexedAccessType(
        t.tsTypeReference(t.identifier('Amino' + proto.name)),
        t.tsLiteralType(t.stringLiteral('value'))
    ));

    return arrowFunctionExpression(
        [
            fromAminoParams
        ],
        t.blockStatement([

        ]),
        t.tsTypeAnnotation(t.tsTypeReference(t.identifier(proto.name)))
    );

};



