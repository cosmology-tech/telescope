import * as t from '@babel/types';
import { TraversalSymbol, ProtoField, TelescopeLogLevel } from '@osmonauts/types';
import { getProtoFieldTypeName } from '../utils';
import { GenericParseContext, ProtoParseContext } from './context';
import { getFieldOptionalityForDefaults, GOOGLE_TYPES, SCALAR_TYPES } from './proto';

export const getFieldNames = (field: ProtoField) => {
    const propName = field.options?.['(telescope:name)'] ?? field.name;
    const origName = field.options?.['(telescope:orig)'] ?? field.name;
    return {
        propName,
        origName
    };
}

export type TelescopeBaseTypes = 'Msg' |
    'SDKType' |
    'Amino' |
    'AminoMsg' |
    'ProtoMsg' |
    'Encoded';


const getSymbolName = (
    name: string,
    type: TelescopeBaseTypes = 'Msg'
) => {
    let typeNameSuffix;
    switch (type) {
        case 'ProtoMsg':
            typeNameSuffix = 'ProtoMsg';
            break;
        case 'AminoMsg':
            typeNameSuffix = 'AminoMsg';
            break;
        case 'Amino':
            typeNameSuffix = 'Amino';
            break;
        case 'SDKType':
            typeNameSuffix = 'SDKType';
            break;
        case 'Encoded':
            typeNameSuffix = 'Encoded';
            break;
        case 'Msg':
        default:
    }
    return [name, typeNameSuffix].filter(Boolean).join('')
};

export const SymbolNames = {
    Msg: (
        name: string,
    ) => getSymbolName(name, 'Msg'),

    SDKType: (
        name: string
    ) => getSymbolName(name, 'SDKType'),

    ProtoMsg: (
        name: string
    ) => getSymbolName(name, 'ProtoMsg'),

    AminoMsg: (
        name: string
    ) => getSymbolName(name, 'AminoMsg'),

    Amino: (
        name: string
    ) => getSymbolName(name, 'Amino'),

    Encoded: (
        name: string
    ) => getSymbolName(name, 'Encoded'),

};

export const getFieldTypeReference = (
    context: ProtoParseContext,
    field: ProtoField,
    type: TelescopeBaseTypes = 'Msg'
) => {
    let ast: any = null;
    let typ: any = null;

    if (SCALAR_TYPES.includes(field.type)) {

        // return on scalar
        typ = getTSTypeForProto(context, field);
        return {
            ast: typ
        };

    } else if (GOOGLE_TYPES.includes(field.type)) {
        typ = getTSTypeFromGoogleType(context, field.type, type);
    } else {
        const propName = getProtoFieldTypeName(context, field);
        const MsgName = field.parsedType?.type === 'Enum' ? propName : SymbolNames[type](propName);
        typ = t.tsTypeReference(t.identifier(MsgName));
    }

    const implementsAcceptsAny = context.pluginValue('interfaces.enabled');
    const lookupInterface = field.options?.['(cosmos_proto.accepts_interface)'];
    const isAnyType = field.parsedType?.type === 'Type' && field.parsedType?.name === 'Any';
    const isArray = field.rule === 'repeated';
    const isBaseType = type === 'Msg';
    const isEncodedType = type === 'ProtoMsg';
    const isSDKType = type === 'SDKType';

    // MARKED AS NOT DRY (symbols)
    let symbols: TraversalSymbol[] = null;
    if (implementsAcceptsAny && lookupInterface) {
        symbols = context.store._symbols.filter(s => s.implementsType === lookupInterface && s.ref === context.ref.filename);
        if (!symbols.length && context.options.logLevel >= TelescopeLogLevel.Warn) {
            console.warn(`[WARN] ${lookupInterface} is accepted but not implemented`);
        }
    }

    if (!isBaseType) {
        if (['ProtoMsg', 'SDKType'].includes(type)) {
            symbols?.forEach(s => {
                context.addImportDerivative({
                    type,
                    symbol: s
                })
            });
        }
        // main type could be Any

        if (['SDKType'].includes(type) &&
            // no derivatives for Enums!
            field.parsedType.type === 'Type') {

            context.addImportDerivative({
                type,
                symbol: {
                    ref: context.ref.filename,
                    readAs: field.parsedType.name, // maybe not!
                    source: field.import,
                    symbolName: field.parsedType.name,
                    type: 'import'
                },
            })
        }
    }


    // cast Any types!
    const isAnyInterface = isAnyType && lookupInterface && implementsAcceptsAny && symbols;
    const isTypeCastable = isAnyInterface && isBaseType;
    const isProtoTypeCastable = isAnyInterface && isEncodedType;
    const isSDKTypeCastable = isAnyInterface && isSDKType;

    const isNonArrayNullableType = field.parsedType?.type === 'Type' &&
        field.rule !== 'repeated' &&
        context.pluginValue('prototypes.allowUndefinedTypes');

    if (isTypeCastable) {
        const tp: any[] = symbols.map(a => t.tsTypeReference(t.identifier(a.readAs)));
        tp.push(typ);

        if (context.pluginValue('interfaces.useUnionTypes')) {
            if (!isArray) {
                tp.push(t.tsUndefinedKeyword())
            }
            ast = t.tsUnionType(tp)
        } else {
            // intersections
            if (isArray) {
                ast = t.tsIntersectionType(tp);
            } else {
                ast = t.tsUnionType(
                    [
                        t.tsIntersectionType(tp),
                        t.tsUndefinedKeyword()
                    ]
                )
            }
        }
    } else if (isProtoTypeCastable) {

        const tp: any[] = symbols.map(a => t.tsTypeReference(t.identifier(
            SymbolNames.ProtoMsg(a.readAs)
        )));
        symbols.forEach(a => {
            context.addImportDerivative({
                type: 'ProtoMsg',
                symbol: a
            });
        });

        tp.push(typ);

        if (!isArray) {
            tp.push(t.tsUndefinedKeyword())
        }
        ast = t.tsUnionType(tp)
    } else if (isSDKTypeCastable) {

        const tp: any[] = symbols.map(a => t.tsTypeReference(t.identifier(
            SymbolNames.SDKType(a.readAs)
        )));
        symbols.forEach(a => {
            context.addImportDerivative({
                type: 'SDKType',
                symbol: a
            });
        });

        tp.push(typ);

        if (!isArray) {
            tp.push(t.tsUndefinedKeyword())
        }
        ast = t.tsUnionType(tp)

    } else if (isNonArrayNullableType) {
        // regular types!
        ast = t.tsUnionType(
            [
                typ,
                t.tsUndefinedKeyword()
            ]
        )
    } else {
        ast = typ;
    }

    return { ast, isTypeCastableAnyType: isTypeCastable };
}

export const getFieldAminoTypeReference = (
    context: ProtoParseContext,
    field: ProtoField
) => {
    let ast: any = null;
    let typ: any = null;

    if (SCALAR_TYPES.includes(field.type)) {

        // return on scalar
        typ = getTSTypeForAmino(context, field);
        return typ;

    } else if (GOOGLE_TYPES.includes(field.type)) {
        typ = getTSTypeFromGoogleType(context, field.type, 'Amino');
    } else {
        const propName = getProtoFieldTypeName(context, field);
        // enums don't need suffixes, etc.
        const MsgName = field.parsedType?.type === 'Enum' ? propName : SymbolNames.Amino(propName);
        typ = t.tsTypeReference(t.identifier(MsgName));
    }


    if (field.parsedType?.type === 'Type') {
        context.addImportDerivative({
            type: 'Amino',
            symbol: {
                ref: context.ref.filename,
                readAs: field.parsedType.name, // maybe not!
                source: field.import,
                symbolName: field.parsedType.name,
                type: 'import'
            },
        })
    }

    if (
        field.parsedType?.type === 'Type' &&
        field.rule !== 'repeated' &&
        context.pluginValue('prototypes.allowUndefinedTypes')
    ) {
        // NOTE: unfortunately bc of defaults...
        ast = t.tsUnionType(
            [
                typ,
                t.tsUndefinedKeyword()
            ]
        )
    } else {
        ast = typ;
    }

    return ast;
}

export const getTSType = (context: GenericParseContext, type: string) => {
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
        default:
            throw new Error('getTSType() type not found');
    };
};

export const getTSAminoType = (context: GenericParseContext, type: string) => {
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
            return t.tsStringKeyword();
        case 'bytes':
            return t.tsTypeReference(t.identifier('Uint8Array'));
        case 'bool':
            return t.tsBooleanKeyword();
        default:
            throw new Error('getTSType() type not found');
    };
};

export const getTSTypeFromGoogleType = (
    context: GenericParseContext,
    type: string,
    options: TelescopeBaseTypes = 'Msg'
) => {

    const identifier = (str) => {
        return t.identifier(SymbolNames[options](str));
    };

    switch (type) {
        case 'google.protobuf.Timestamp':
            switch (context.pluginValue('prototypes.typingsFormat.timestamp')) {
                case 'timestamp':
                    return t.tsTypeReference(identifier('Timestamp'));
                case 'date':
                default:
                    return t.tsTypeReference(t.identifier('Date'));
            }
        case 'google.protobuf.Duration':
            switch (context.pluginValue('prototypes.typingsFormat.duration')) {
                case 'duration':
                    return t.tsTypeReference(identifier('Duration'));
                case 'string':
                default:
                    return t.tsStringKeyword();
            }
        case 'google.protobuf.Any':
            return t.tsTypeReference(identifier('Any'));
        default:
            throw new Error('getTSTypeFromGoogleType() type not found');
    };
};

export const getTSTypeForAmino = (context: GenericParseContext, field: ProtoField) => {
    switch (field.type) {
        case 'bytes':
            // bytes [WASMByteCode]
            if (field.options?.['(gogoproto.customname)'] === 'WASMByteCode') {
                return t.tsStringKeyword();
            }
            return t.tsTypeReference(t.identifier('Uint8Array'));
        default:
            return getTSAminoType(context, field.type);
    };
};

export const getTSTypeForProto = (
    context: GenericParseContext,
    field: ProtoField
) => {
    return getTSType(context, field.type);
};

export const getDefaultTSTypeFromProtoType = (
    context: ProtoParseContext,
    field: ProtoField,
    isOneOf: boolean
) => {

    const isOptional = getFieldOptionalityForDefaults(context, field, isOneOf);

    if (isOptional) {
        return t.identifier('undefined');
    }

    if (field.rule === 'repeated') {
        return t.arrayExpression([]);
    }

    if (field.keyType) {
        return t.objectExpression([])
    }

    if (field.parsedType?.type === 'Enum') {
        // @ts-ignore
        if (context.ref.proto?.syntax === 'proto2') {
            return t.numericLiteral(1);
        }
        return t.numericLiteral(0);
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
            context.addUtil('Long');
            return t.memberExpression(
                t.identifier('Long'),
                t.identifier('UZERO')
            );
        case 'int64':
        case 'sint64':
        case 'fixed64':
        case 'sfixed64':
            context.addUtil('Long');
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
