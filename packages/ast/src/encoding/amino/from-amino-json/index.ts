import * as t from '@babel/types';
import { arrowFunctionExpression } from '../../../utils';
import { ProtoType, ProtoField } from '../../proto/types';
import { AminoOptions, AminoParseContext } from '../types';
import { protoFieldsToArray } from '../utils';
import { fromAmino } from './utils';

export interface FromAminoParseField {
    context: AminoParseContext;
    field: ProtoField;
    scope: string[];
    nested: number;
    options: AminoOptions;
};

export const fromAminoParseField = ({
    context,
    field,
    scope: previousScope,
    nested,
    options
}: FromAminoParseField) => {

    const scope = [field.name, ...previousScope];

    // arrays
    if (field.rule === 'repeated') {
        switch (field.parsedType.type) {
            case 'Type':
                return fromAmino.typeArray({
                    context,
                    field,
                    scope,
                    nested,
                    options
                });
            case 'Enum':
                return fromAmino.enumArray({
                    context,
                    field,
                    scope,
                    nested,
                    options
                });
            case 'cosmos.base.v1beta1.Coin':
                return fromAmino.arrayFrom(field.name, scope, options);

        }
    }

    // casting special types
    if (field.type === 'google.protobuf.Any') {
        switch (field.options['(cosmos_proto.accepts_interface)']) {
            case 'cosmos.crypto.PubKey':
                return fromAmino.pubkey({ context, field, scope, nested, options });
        }
    }

    // Types/Enums
    switch (field.parsedType.type) {
        case 'Type':
            return fromAmino.type({
                context,
                field,
                scope,
                nested,
                options
            });

        case 'Enum':
            return fromAmino.enum({
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
            return fromAmino.string(field.name, scope, options);
        case 'int64':
        case 'uint64':
            return fromAmino.long(field.name, scope, options);
        case 'double':
        case 'int64':
        case 'bool':
        case 'bytes':
        case 'Timestamp':
        case 'google.protobuf.Timestamp':
            return fromAmino.defaultType(field.name, scope, options)

        // TODO check can we just
        // make pieces optional and avoid hard-coding this type?
        case 'ibc.core.client.v1.Height':
        case 'Height':
            return fromAmino.height(field.name, scope, options);

        case 'Duration':
        case 'google.protobuf.Duration':
            return fromAmino.duration(field.name, scope, options);

        default:
            return fromAmino.defaultType(field.name, scope, options)
    }
};

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
            t.returnStatement(
                t.objectExpression(
                    protoFieldsToArray(proto).map((field) =>
                        fromAminoParseField({
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
        t.tsTypeAnnotation(t.tsTypeReference(t.identifier(proto.name)))
    );

};



