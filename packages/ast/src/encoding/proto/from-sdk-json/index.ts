import * as t from '@babel/types';
import { ProtoType, ProtoField } from '@subql/x-cosmology-types';
import {
  getFieldOptionality,
  getFieldOptionalityForDefaults,
  getOneOfs
} from '..';
import { identifier, objectMethod } from '../../../utils';
import { ProtoParseContext } from '../../context';
import { fromSDKJSON, arrayTypes } from './utils';

const needsImplementation = (name: string, field: ProtoField) => {
  throw new Error(
    `need to implement fromSDKJSON (${field.type} rules[${field.rule}] name[${name}])`
  );
};
export interface FromSDKJSONMethod {
  context: ProtoParseContext;
  field: ProtoField;
  isOneOf: boolean;
  isOptional: boolean;
}

export const fromSDKJSONMethodFields = (
  context: ProtoParseContext,
  name: string,
  proto: ProtoType
) => {
  const oneOfs = getOneOfs(proto);
  const fields = Object.keys(proto.fields ?? {}).map((fieldName) => {
    const field = {
      name: fieldName,
      ...proto.fields[fieldName]
    };

    const isOneOf = oneOfs.includes(fieldName);
    const isOptional = getFieldOptionalityForDefaults(context, field, isOneOf);

    const args: FromSDKJSONMethod = {
      context,
      field,
      isOneOf,
      isOptional
    };

    if (field.rule === 'repeated') {
      switch (field.type) {
        case 'string':
          return fromSDKJSON.array(args, arrayTypes.string());
        case 'bytes':
          return fromSDKJSON.array(args, arrayTypes.bytes(args));
        case 'bool':
          return fromSDKJSON.array(args, arrayTypes.bool());
        case 'float':
          return fromSDKJSON.array(args, arrayTypes.float());
        case 'double':
          return fromSDKJSON.array(args, arrayTypes.double());
        case 'int32':
          return fromSDKJSON.array(args, arrayTypes.int32());
        case 'sint32':
          return fromSDKJSON.array(args, arrayTypes.sint32());
        case 'uint32':
          return fromSDKJSON.array(args, arrayTypes.uint32());
        case 'fixed32':
          return fromSDKJSON.array(args, arrayTypes.fixed32());
        case 'sfixed32':
          return fromSDKJSON.array(args, arrayTypes.sfixed32());
        case 'int64':
          return fromSDKJSON.array(args, arrayTypes.int64(args));
        case 'sint64':
          return fromSDKJSON.array(args, arrayTypes.sint64(args));
        case 'uint64':
          return fromSDKJSON.array(args, arrayTypes.uint64(args));
        case 'fixed64':
          return fromSDKJSON.array(args, arrayTypes.fixed64(args));
        case 'sfixed64':
          return fromSDKJSON.array(args, arrayTypes.sfixed64(args));
        default:
          switch (field.parsedType.type) {
            case 'Enum':
              return fromSDKJSON.array(args, arrayTypes.enum(args));
            case 'Type':
              return fromSDKJSON.array(args, arrayTypes.type(args));
          }
          return needsImplementation(fieldName, field);
      }
    }

    if (field.keyType) {
      switch (field.keyType) {
        case 'string':
        case 'int64':
        case 'sint64':
        case 'uint64':
        case 'fixed64':
        case 'sfixed64':
        case 'int32':
        case 'sint32':
        case 'uint32':
        case 'fixed32':
        case 'sfixed32':
          return fromSDKJSON.keyHash(args);
        default:
          return needsImplementation(fieldName, field);
      }
    }

    switch (field.type) {
      case 'string':
        return fromSDKJSON.string(args);
      case 'bytes':
        return fromSDKJSON.bytes(args);
      case 'bool':
        return fromSDKJSON.bool(args);
      case 'double':
        return fromSDKJSON.double(args);
      case 'float':
        return fromSDKJSON.float(args);
      case 'int32':
        return fromSDKJSON.int32(args);
      case 'sint32':
        return fromSDKJSON.sint32(args);
      case 'uint32':
        return fromSDKJSON.uint32(args);
      case 'fixed32':
        return fromSDKJSON.fixed32(args);
      case 'sfixed32':
        return fromSDKJSON.sfixed32(args);
      case 'int64':
        return fromSDKJSON.int64(args);
      case 'sint64':
        return fromSDKJSON.sint64(args);
      case 'uint64':
        return fromSDKJSON.uint64(args);
      case 'fixed64':
        return fromSDKJSON.fixed64(args);
      case 'sfixed64':
        return fromSDKJSON.sfixed64(args);
      case 'Duration':
      case 'google.protobuf.Duration':
        return fromSDKJSON.duration(args);
      case 'Timestamp':
      case 'google.protobuf.Timestamp':
        return fromSDKJSON.timestamp(args);
      default:
        switch (field.parsedType.type) {
          case 'Enum':
            return fromSDKJSON.enum(args);
          case 'Type':
            return fromSDKJSON.type(args);
        }
        return needsImplementation(fieldName, field);
    }
  });
  return fields;
};

export const fromSDKJSONMethod = (
  context: ProtoParseContext,
  name: string,
  proto: ProtoType
) => {
  const fields = fromSDKJSONMethodFields(context, name, proto);
  let varName = 'object';
  if (!fields.length) {
    varName = '_';
  }

  const SDKTypeName = [name, 'SDKType'].filter(Boolean).join('');

  return objectMethod(
    'method',
    t.identifier('fromSDKJSON'),
    [identifier(varName, t.tsTypeAnnotation(t.tsAnyKeyword()), false)],
    t.blockStatement([t.returnStatement(t.objectExpression(fields))]),
    false,
    false,
    false,
    t.tsTypeAnnotation(t.tsTypeReference(t.identifier(SDKTypeName)))
  );
};
