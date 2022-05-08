import * as t from '@babel/types';
import { arrowFunctionExpression } from '../../../utils';
import { AminoParseContext } from '../../context';
import { ProtoType, ProtoField } from '../../proto/types';
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
    currentProtoPath: string;
    scope: string[];
    nested: number;
};

export const toAminoParseField = ({
    context,
    field,
    currentProtoPath,
    scope: previousScope,
    nested
}: ToAminoParseField) => {

    const scope = [field.name, ...previousScope];

    const args = {
        context,
        field,
        currentProtoPath,
        scope,
        nested
    };


    // arrays
    if (field.rule === 'repeated') {
        switch (field.parsedType.type) {
            case 'Type':
                return toAmino.typeArray(args);
        }
        // TODO test case
        return needsImplementation(field.name, field);
    }


    // casting special types
    if (field.type === 'google.protobuf.Any') {
        switch (field.options['(cosmos_proto.accepts_interface)']) {
            case 'cosmos.crypto.PubKey':
                return toAmino.pubkey(args);
        }
    }

    // Types/Enums
    switch (field.parsedType.type) {
        case 'Enum':
            return toAmino.defaultType(args);
        case 'Type':
            return toAmino.type(args);
    }


    // scalar types...
    switch (field.type) {
        case 'string':
            return toAmino.string(args);
        case 'int64':
        case 'uint64':
            return toAmino.long(args);
        case 'double':
        case 'int64':
        case 'bool':
        case 'bytes':
        case 'Timestamp':
        case 'google.protobuf.Timestamp':
            return toAmino.defaultType(args)

        case 'cosmos.base.v1beta1.Coin':
            return toAmino.coin(args);

        // TODO check can we just
        // make pieces optional and avoid hard-coding this type?
        case 'ibc.core.client.v1.Height':
        case 'Height':
            return toAmino.height(args);

        case 'Duration':
        case 'google.protobuf.Duration':
            return toAmino.duration(args);

        default:
            warningDefaultImplementation(field.name, field);
            return toAmino.defaultType(args)
    }
};


interface toAminoJSON {
    context: AminoParseContext;
    proto: ProtoType;
}

export const toAminoJsonMethod = ({
    context,
    proto
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

    const fields = protoFieldsToArray(proto).map((field) => {
        const aminoField = toAminoParseField({
            context,
            field,
            currentProtoPath: context.ref.filename,
            scope: [],
            nested: 0
        });
        return {
            ctx: context,
            field: aminoField
        }
    });

    const ctxs = fields.map(({ ctx }) => ctx);
    ctxs.forEach(ctx => {
        // console.log('imports, ', ctx.imports)
    })

    return arrowFunctionExpression(
        [
            toAminoParams
        ],
        t.blockStatement([
            t.returnStatement(
                t.objectExpression(
                    fields.map(({ field }) => field)
                )
            )
        ]),
        t.tsTypeAnnotation(t.tsIndexedAccessType(
            t.tsTypeReference(t.identifier('Amino' + proto.name)),
            t.tsLiteralType(t.stringLiteral('value'))
        ))
    );

};