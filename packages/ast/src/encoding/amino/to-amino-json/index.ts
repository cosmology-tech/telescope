import * as t from '@babel/types';
import { arrowFunctionExpression } from '../../../utils';
import { ProtoType, ProtoField } from '../../proto/types';
import { AminoOptions, AminoParseContext } from '../types';
import { protoFieldsToArray } from '../utils';
import { toAmino } from './utils';

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(`need to implement toAmino (${field.type} rules[${field.rule}] name[${name}])`);
}

const warningDefaultImplementation = (name: string, field: ProtoField) => {
    console.warn(`need to implement toAmino (${field.type} rules[${field.rule}] name[${name}])`);
}

export interface ToAminoParseField {
    context: AminoParseContext;
    field: ProtoField;
    scope: string[];
    nested: number;
    options: AminoOptions;
};

export const toAminoParseField = ({
    context,
    field,
    scope: previousScope,
    nested,
    options
}: ToAminoParseField) => {

    const scope = [field.name, ...previousScope];

    // arrays
    if (field.rule === 'repeated') {
        switch (field.parsedType.type) {
            case 'Type':
                return toAmino.typeArray({
                    context,
                    field,
                    scope,
                    nested,
                    options
                });
        }
        // TODO test case
        return needsImplementation(field.name, field);
    }


    // casting special types
    if (field.type === 'google.protobuf.Any') {
        switch (field.options['(cosmos_proto.accepts_interface)']) {
            case 'cosmos.crypto.PubKey':
                return toAmino.pubkey({ context, field, scope, nested, options });
        }
    }

    // Types/Enums
    switch (field.parsedType.type) {
        case 'Enum':
            return toAmino.defaultType(field.name, scope, options);
        case 'Type':
            return toAmino.type({
                context,
                field,
                scope,
                nested,
                options
            });
    }


    // scalar types...
    switch (field.type) {
        case 'string':
            return toAmino.string(field.name, scope, options);
        case 'int64':
        case 'uint64':
            return toAmino.long(field.name, scope, options);
        case 'double':
        case 'int64':
        case 'bool':
        case 'bytes':
        case 'Timestamp':
        case 'google.protobuf.Timestamp':
            return toAmino.defaultType(field.name, scope, options)

        case 'cosmos.base.v1beta1.Coin':
            return toAmino.coin(field.name, scope, options);

        // TODO check can we just
        // make pieces optional and avoid hard-coding this type?
        case 'ibc.core.client.v1.Height':
        case 'Height':
            return toAmino.height(field.name, scope, options);

        case 'Duration':
        case 'google.protobuf.Duration':
            return toAmino.duration(field.name, scope, options);

        default:
            warningDefaultImplementation(field.name, field);
            return toAmino.defaultType(field.name, scope, options)
    }
};


interface toAminoJSON {
    context: AminoParseContext;
    proto: ProtoType;
    options: AminoOptions;
}

export const toAminoJsonMethod = ({
    context,
    proto,
    options
}: toAminoJSON) => {

    const toAminoParams = t.objectPattern(
        protoFieldsToArray(proto).map((field) =>
            t.objectProperty(
                t.identifier(field.name),
                t.identifier(field.name),
                false,
                true)
        )
    );
    toAminoParams.typeAnnotation = t.tsTypeAnnotation(t.tsTypeReference(t.identifier(proto.name)))

    return arrowFunctionExpression(
        [
            toAminoParams
        ],
        t.blockStatement([
            t.returnStatement(
                t.objectExpression(
                    protoFieldsToArray(proto).map((field) =>
                        toAminoParseField({
                            context,
                            field,
                            scope: [],
                            nested: 0,
                            options
                        })
                    )
                )
            )
        ]),
        t.tsTypeAnnotation(t.tsIndexedAccessType(
            t.tsTypeReference(t.identifier('Amino' + proto.name)),
            t.tsLiteralType(t.stringLiteral('value'))
        ))
    );

};