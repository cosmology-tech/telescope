import * as t from '@babel/types';
import { arrowFunctionExpression } from '../../../utils';
import { ProtoType, ProtoField } from '../../types';
import { AminoOptions, AminoParseContext } from '../types';
import { arrayTypes, fromAmino } from './utils';

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(`need to implement toAmino (${field.type} rules[${field.rule}] name[${name}])`);
}

interface fromAminoJSON {
    context: AminoParseContext;
    proto: ProtoType;
    options: AminoOptions;
}
export const fromAminoJsonMethod = ({
    context,
    proto,
    options
}: fromAminoJSON) => {

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



