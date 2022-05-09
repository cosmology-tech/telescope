import * as t from '@babel/types';
import { getObjectName } from '@osmonauts/proto-parser';
import { pascal } from 'case';
import { identifier, tsPropertySignature, functionDeclaration } from '../../utils';
import { ProtoParseContext } from '../context';

export interface ProtoAny {
    type: string;
    name: string;
    [key: string]: any;
};
export interface ProtoEnum {
    name?: string;
    values: { [key: string]: number };
    comment?: string;
    comments?: { [key: string]: string };
}

export interface ProtoType {
    name?: string;
    oneofs?: { [key: string]: { oneof: string[], comment: string | undefined } },
    fields: {
        [key: string]: ProtoField;
    },
    comment: string | undefined;
}

export interface ProtoField {
    name?: string;
    scope?: string[];
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
        "(gogoproto.nullable)"?: boolean;
        "(cosmos_proto.scalar)"?: string;
        "(gogoproto.customtype)"?: string;
        "(gogoproto.moretags)"?: string;
        "(cosmos_proto.accepts_interface)"?: string;
    }
    comment?: string;
    import?: string;
    importedName?: string;
    scopeType?: string;
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
export const types = {
    basic: {
        double: 1,
        float: 5,
        int32: 0,
        uint32: 0,
        sint32: 0,
        fixed32: 5,
        sfixed32: 5,
        int64: 0,
        uint64: 0,
        sint64: 0,
        fixed64: 1,
        sfixed64: 1,
        bool: 0,
        string: 2,
        bytes: 2
    },
    defaults: {
        double: 0,
        float: 0,
        int32: 0,
        uint32: 0,
        sint32: 0,
        fixed32: 0,
        sfixed32: 0,
        int64: 0,
        uint64: 0,
        sint64: 0,
        fixed64: 0,
        sfixed64: 0,
        bool: false,
        string: '',
        bytes: [],
        undefined: null
    },
    long: { int64: 0, uint64: 0, sint64: 0, fixed64: 1, sfixed64: 1 },
    mapKey: {
        int32: 0,
        uint32: 0,
        sint32: 0,
        fixed32: 5,
        sfixed32: 5,
        int64: 0,
        uint64: 0,
        sint64: 0,
        fixed64: 1,
        sfixed64: 1,
        bool: 0,
        string: 2
    },
    packed: {
        double: 1,
        float: 5,
        int32: 0,
        uint32: 0,
        sint32: 0,
        fixed32: 5,
        sfixed32: 5,
        int64: 0,
        uint64: 0,
        sint64: 0,
        fixed64: 1,
        sfixed64: 1,
        bool: 0
    }
};
export const getWireNumber = (type) => {
    if (types.basic.hasOwnProperty(type)) {
        return types.basic[type];
    }
    return 2;
};

export const getPackedWireNumber = (type) => {
    if (types.packed.hasOwnProperty(type)) {
        return types.packed[type];
    }
    return 2;
};

export const getTagNumber = (field: ProtoField) => {
    let wire = getWireNumber(field.type);
    if (field.rule === 'repeated') {
        wire = getPackedWireNumber(field.type);
    }
    if (field.parsedType.type === 'Enum') {
        wire = 0;
    }

    // for some reason I had to set wire = 2 for 
    // if (field.rule === 'repeated') wire = 2;
    // PinCodesProposal
    // maybe it's a big in ts-proto, and we're correct?

    return ((field.id << 3) | wire) >>> 0;
};


export const getDefaultTSTypeFromProtoType = (field: ProtoField) => {

    if (field.rule === 'repeated') {
        return t.arrayExpression([]);
    }

    if (field.keyType) {
        return t.objectExpression([])
    }

    switch (field.type) {
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
        case 'uint64':
            return t.memberExpression(
                t.identifier('Long'),
                t.identifier('UZERO')
            );
        case 'int64':
        case 'sint64':
        case 'fixed64':
        case 'sfixed64':
            return t.memberExpression(
                t.identifier('Long'),
                t.identifier('ZERO')
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
            // console.warn('getDefaultTSTypeFromProtoType() type not found: ' + type);
            return t.identifier('undefined');
    };
};

const lowerFirst = (str: string) => {
    return str.charAt(0).toLowerCase() + str.substring(1);
};
const upperFirst = (str: string) => {
    return str.charAt(0).toUpperCase() + str.substring(1);
};

export const getEnumToJsonName = (name) => {
    return lowerFirst(name) + 'ToJSON';
};

export const getEnumFromJsonName = (name) => {
    return lowerFirst(name) + 'FromJSON';
};

export const getFieldsTypeName = (field: ProtoField) => {
    if (field?.scope.length <= 1) return field.parsedType.name;
    const [_first, ...rest] = field.scope;
    return [...rest, field.parsedType.name].join('_');
};

export const getKeyTypeEntryName = (typeName: string, prop: string) => {
    return `${typeName}_${pascal(prop)}Entry`;
};

export const getBaseCreateTypeFuncName = (name) => {
    return `createBase${upperFirst(name)}`;
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

export const getOneOfs = (type: ProtoType) => {
    const keys = Object.keys(type.oneofs ?? {});
    if (!keys.length) return [];
    if (keys.length !== 1) throw new Error('getOneOfs() oneofs cardinality not known!');
    return type.oneofs[keys[0]].oneof;
};

export const getFieldOptionality = (field: ProtoField, isOneOf: boolean) => {
    return isOneOf || field?.options?.['(gogoproto.nullable)'];
};

const getProtoFieldTypeName = (field: ProtoField) => {
    let name = field.type;

    if (name.includes('.')) {
        const parts = name.split('.');
        name = parts[parts.length - 1];
    }

    if (!field.scope || !field.scope.length) return name;
    return getObjectName(name, field.scope);
};

const getProtoField = (field: ProtoField) => {
    let ast: any = null;
    let optional = false;

    if (field.options?.['(gogoproto.nullable)']) {
        optional = true;
    }

    if (NATIVE_TYPES.includes(field.type)) {
        ast = getTSTypeFromProtoType(field.type);
    } else {
        ast = t.tsTypeReference(t.identifier(getProtoFieldTypeName(field)));
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
                const field = proto.fields[fieldName];
                return tsPropertySignature(
                    t.identifier(fieldName),
                    t.tsTypeAnnotation(
                        getProtoField(field)
                    ),
                    getFieldOptionality(field, isOneOf)
                )
            })
        )
    ))
};


export const createCreateProtoType = (name: string, proto: ProtoType) => {
    const fields = Object.keys(proto.fields).map(key => {
        return {
            name: key,
            ...proto.fields[key]
        };
    })
        .map(field => {
            return t.objectProperty(
                t.identifier(field.name),
                getDefaultTSTypeFromProtoType(field)
            )
        })


    return functionDeclaration(t.identifier(getBaseCreateTypeFuncName(name)),
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

