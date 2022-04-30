import * as t from '@babel/types';
import { camel, pascal } from 'case';
import { identifier, tsEnumMember, tsPropertySignature, functionDeclaration } from '../utils';

export interface ProtoEnum {
    values: { [key: string]: number };
    comment?: string;
    comments?: { [key: string]: string };
}

export interface ProtoType {
    oneofs?: { [key: string]: { oneof: string[], comment: string | undefined } },
    fields: {
        [key: string]: ProtoField;
    },
    comment: string | undefined;
}

export interface ProtoField {
    parsedType?: {
        name: string;
        type: string;
    },

    keyType?: string;
    rule?: string;
    type: string;
    id: number;
    options: {
        [key: string]: any;
        "(gogoproto.nullable)": boolean;
    }
    comment: string | undefined;
}

export const SCALAR_TYPES = [
    'string',
    'double',
    'float',
    'int32',
    'uint32',
    'sint32',
    'fixed32',
    'sfixed32',
    'int64',
    'uint64',
    'sint64',
    'fixed64',
    'sfixed64',
    'bytes',
    'bool'
];

export const NATIVE_TYPES = [
    ...SCALAR_TYPES,

    // TODO move these out
    'google.protobuf.Timestamp',
    'google.protobuf.Duration',
    'google.protobuf.Any',
]

export const getTSTypeFromProtoType = (type) => {
    switch (type) {
        case 'string':
            return t.tsStringKeyword();
        case 'double':
        case 'float':
        case 'int32':
        case 'uint32':
        case 'sint32':
        case 'fixed32':
        case 'sfixed32':
            return t.tsNumberKeyword();
        case 'int64':
        case 'uint64':
        case 'sint64':
        case 'fixed64':
        case 'sfixed64':
            return t.tsTypeReference(t.identifier('Long'))
        case 'bytes':
            return t.tsTypeReference(t.identifier('Uint8Array'));
        case 'bool':
            return t.tsBooleanKeyword();
        case 'google.protobuf.Timestamp':
            return t.tsTypeReference(t.identifier('Date'));
        case 'google.protobuf.Duration':
            return t.tsStringKeyword();
        case 'google.protobuf.Any':
            return t.tsTypeReference(t.identifier('Any'));
        default:
            throw new Error('getTSTypeFromProtoType() type not found');
    };
};

// https://github.com/protobufjs/protobuf.js/blob/master/src/types.js#L38-L54
export const getWireNumber = (type) => {
    switch (type) {

        case 'double':
        case 'fixed64':
        case 'sfixed64':
            return 1;

        case 'float':
            return 5;

        case 'fixed32':
        case 'sfixed32':
            return 5;

        case 'bool':
        case 'int32':
        case 'uint32':
        case 'sint32':
        case 'int64':
        case 'uint64':
        case 'sint64':
            return 0;

        case 'string':
        case 'bytes':
        default:
            return 2;
    };
};

export const getTagNumber = (field: ProtoField) => {
    let wire = field.parsedType.type === 'Enum' ? 0 : getWireNumber(field.type);


    // for some reason I had to set this... for a certain message, why?
    if (field.rule === 'repeated') wire = 2;
    // PinCodesProposal
    // maybe because it's repeated?
    // case 'uint64':
    // return 2;


    return ((field.id << 3) | wire) >>> 0;
};


export const getDefaultTSTypeFromProtoType = (type, isArray) => {

    if (isArray) {
        return t.arrayExpression([]);
    }

    switch (type) {
        case 'string':
            return t.stringLiteral('');
        case 'double':
        case 'float':
        case 'int32':
        case 'uint32':
        case 'sint32':
        case 'fixed32':
        case 'sfixed32':
            return t.numericLiteral(0);
        case 'int64':
        case 'uint64':
        case 'sint64':
        case 'fixed64':
        case 'sfixed64':
            return t.memberExpression(
                t.identifier('Long'),
                t.identifier('UZERO')
            );
        case 'bytes':
            return t.newExpression(
                t.identifier('Uint8Array'),
                []
            );
        case 'bool':
            return t.booleanLiteral(false);

        // OTHER TYPES
        case 'google.protobuf.Timestamp':
            return t.identifier('undefined');
        case 'google.protobuf.Duration':
            return t.identifier('undefined');
        case 'google.protobuf.Any':
            return t.identifier('undefined');

        case 'cosmos.base.v1beta1.Coins':
            return t.arrayExpression([]);
        case 'cosmos.base.v1beta1.Coin':
            return t.identifier('undefined');

        default:
            console.warn('getDefaultTSTypeFromProtoType() type not found: ' + type);
            return t.identifier('undefined');
    };
};

/*
  returns "Type | undefined"
*/
const optionalType = (type: t.TSType) => {
    return t.tsUnionType([
        type,
        t.tsUndefinedKeyword()
    ])
}

const getOneOfs = (type: ProtoType) => {
    const keys = Object.keys(type.oneofs ?? {});
    if (!keys.length) return [];
    if (keys.length !== 1) throw new Error('getOneOfs() oneofs cardinality not known!');
    return type.oneofs[keys[0]].oneof;
};

const getFieldOptionality = (field: ProtoField, isOneOf: boolean) => {
    return isOneOf || field?.options?.['(gogoproto.nullable)'];
};

const getProtoNameSafe = (name: string) => {
    if (name.includes('.')) {
        const parts = name.split('.');
        return parts[parts.length];
    }
    return name;
};

const getProtoField = (field: ProtoField) => {
    let ast: any = null;
    let optional = false;

    if (field?.options?.['(gogoproto.nullable)']) {
        optional = true;
    }

    if (NATIVE_TYPES.includes(field.type)) {
        ast = getTSTypeFromProtoType(field.type);
    } else {
        ast = t.tsTypeReference(t.identifier(getProtoNameSafe(field.type)));
    }

    if (field.rule === 'repeated') {
        ast = t.tsArrayType(ast);
    }

    if (field.keyType) {
        ast = t.tsUnionType([
            t.tsTypeLiteral([
                t.tsIndexSignature([
                    identifier('key',
                        t.tsTypeAnnotation(
                            getTSTypeFromProtoType(field.keyType)
                        )
                    )
                ],
                    t.tsTypeAnnotation(ast)
                )
            ])
        ]);
    }

    return ast;
};

export const createProtoType = (name: string, proto: ProtoType) => {
    const oneOfs = getOneOfs(proto);

    return t.exportNamedDeclaration(t.tsInterfaceDeclaration(
        t.identifier(name),
        null,
        [],
        t.tsInterfaceBody(
            Object.keys(proto.fields).map(fieldName => {
                const isOneOf = oneOfs.includes(fieldName);
                return tsPropertySignature(
                    t.identifier(fieldName),
                    t.tsTypeAnnotation(
                        getProtoField(proto.fields[fieldName])
                    ),
                    getFieldOptionality(proto.fields[fieldName], isOneOf)
                )
            })
        )
    ))
};


export const createCreateProtoType = (name: string, proto: ProtoType) => {
    const fields = Object.keys(proto.fields).map(key => {
        const field: ProtoField = proto.fields[key];
        return {
            name: key,
            keyType: field.keyType,
            type: field.type,
            rule: field.rule
        };
    })
        .map(field => {
            return t.objectProperty(
                t.identifier(field.name),
                getDefaultTSTypeFromProtoType(field.type, field.rule === 'repeated')
            )
        })


    return functionDeclaration(t.identifier(`createBase${pascal(name)}`),
        [],
        t.blockStatement([
            t.returnStatement(t.objectExpression(
                [
                    ...fields,
                ]
            ))
        ]), false, false, t.tsTypeAnnotation(
            t.tsTypeReference(t.identifier(name))
        ))
};
