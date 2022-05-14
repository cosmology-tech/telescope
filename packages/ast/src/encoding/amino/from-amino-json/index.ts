import * as t from '@babel/types';
import { arrowFunctionExpression } from '../../../utils';
import { AminoParseContext } from '../../context';
import { ProtoType, ProtoField } from '../../proto/types';
import { protoFieldsToArray } from '../utils';
import { fromAmino } from './utils';
import { getFieldOptionality, getOneOfs } from '../../proto';

export interface FromAminoParseField {
    context: AminoParseContext;
    field: ProtoField;
    currentProtoPath: string;
    scope: string[];
    nested: number;
    isOptional: boolean;

};

export const fromAminoParseField = ({
    context,
    field,
    currentProtoPath,
    scope: previousScope,
    nested,
    isOptional
}: FromAminoParseField) => {

    const scope = [field.name, ...previousScope];

    const args = {
        context,
        field,
        currentProtoPath,
        scope,
        nested,
        isOptional
    };

    // arrays
    if (field.rule === 'repeated') {
        switch (field.parsedType.type) {
            case 'Type':
                return fromAmino.typeArray(args);
            case 'Enum':
                return fromAmino.enumArray(args);
            case 'cosmos.base.v1beta1.Coin':
                return fromAmino.arrayFrom(args);

        }
    }

    // casting special types
    if (field.type === 'google.protobuf.Any') {
        switch (field.options?.['(cosmos_proto.accepts_interface)']) {
            case 'cosmos.crypto.PubKey':
                return fromAmino.pubkey(args);
        }
    }

    // Types/Enums
    switch (field.parsedType.type) {
        case 'Type':
            return fromAmino.type(args);

        case 'Enum':
            return fromAmino.enum(args);
    }

    // scalar types...

    switch (field.type) {
        case 'string':
            return fromAmino.string(args);
        case 'int64':
        case 'uint64':
            return fromAmino.long(args);
        case 'double':
        case 'int64':
        case 'bool':
        case 'bytes':
        case 'Timestamp':
        case 'google.protobuf.Timestamp':
            return fromAmino.defaultType(args)

        // TODO check can we just
        // make pieces optional and avoid hard-coding this type?
        case 'ibc.core.client.v1.Height':
        case 'Height':
            return fromAmino.height(args);

        case 'Duration':
        case 'google.protobuf.Duration':
            return fromAmino.duration(args);

        default:
            return fromAmino.defaultType(args)
    }
};

interface fromAminoJSON {
    context: AminoParseContext;
    proto: ProtoType;
}
export const fromAminoJsonMethod = ({
    context,
    proto
}: fromAminoJSON) => {

    const fromAminoParams = t.objectPattern(
        Object.keys(proto.fields).map((field) => t.objectProperty(
            t.identifier(context.options.aminoCasingFn(field)),
            t.identifier(context.options.aminoCasingFn(field)),
            false,
            true)
        )
    );
    fromAminoParams.typeAnnotation = t.tsTypeAnnotation(t.tsIndexedAccessType(
        t.tsTypeReference(t.identifier('Amino' + proto.name)),
        t.tsLiteralType(t.stringLiteral('value'))
    ));

    const oneOfs = getOneOfs(proto);
    const fields = protoFieldsToArray(proto).map((field) => {
        const isOneOf = oneOfs.includes(field.name);
        const isOptional = getFieldOptionality(field, isOneOf);

        const aminoField = fromAminoParseField({
            context,
            field,
            currentProtoPath: context.ref.filename,
            scope: [],
            nested: 0,
            isOptional
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
            fromAminoParams
        ],
        t.blockStatement([
            t.returnStatement(
                t.objectExpression(
                    fields.map(({ field }) => field)
                )
            )
        ]),
        t.tsTypeAnnotation(t.tsTypeReference(t.identifier(proto.name)))
    );

};



