import * as t from '@babel/types';
import { Enum, Field, Interface, MessageSchema, AminoExceptions } from '../types';
import { toAmino } from './to-amino';
import { fromAmino } from './from-amino';
import { getFieldDimensionality, typeUrlToAmino, arrayTypeNDimensions } from '../utils';



export const makeAminoConverterItem = (
  {
    schema,
    enums,
    interfaces,
    aminoCasingFn,
    exceptions
  }
    :
    {
      schema: MessageSchema,
      enums: Enum[],
      interfaces: Interface[],
      aminoCasingFn: Function,
      exceptions?: AminoExceptions
    }
) => {
  return t.objectProperty(
    t.stringLiteral(schema.typeUrl),
    t.objectExpression(
      [
        t.objectProperty(t.identifier('aminoType'), t.stringLiteral(typeUrlToAmino(schema.typeUrl, exceptions))),
        t.objectProperty(t.identifier('toAmino'), toAmino(schema, enums, interfaces, aminoCasingFn)),
        t.objectProperty(t.identifier('fromAmino'), fromAmino(schema, enums, interfaces, aminoCasingFn))
      ]
    )
  );
};

export const aminoConverter = (
  {
    schemata,
    enums,
    interfaces,
    aminoCasingFn
  }
    :
    {
      schemata: MessageSchema[],
      enums: Enum[],
      interfaces: Interface[],
      aminoCasingFn: Function
    }) => {
  return t.exportNamedDeclaration(t.variableDeclaration('const', [
    t.variableDeclarator(t.identifier('AminoConverter'),
      t.objectExpression(
        schemata.map(schema => makeAminoConverterItem({ schema, enums, interfaces, aminoCasingFn }))
      ))
  ]));
};

export const renderAminoField = (
  field: Field,
  enums: Enum[],
  interfaces: any[] = [],
  imports: any[] = [],
  aminoCasingFn: Function
) => {

  const { typeName, dimensions, isArray } = getFieldDimensionality(field);

  // special cases
  switch (field.type) {
    case 'Height':
      // Height becomes AminoHeight...
      imports.push({
        identifier: 'AminoHeight',
      });
      return t.tsPropertySignature(
        t.identifier(aminoCasingFn(field.name)),
        t.tsTypeAnnotation(
          t.tsTypeReference(t.identifier('AminoHeight'))
        )
      );
    default:
  }


  // enums
  const val = enums.find(e => e.name === typeName);
  if (val) {
    if (isArray) {
      return t.tsPropertySignature(
        t.identifier(aminoCasingFn(field.name)),
        t.tsTypeAnnotation(arrayTypeNDimensions(t.tSNumberKeyword(), dimensions))
      );
    }

    return t.tsPropertySignature(
      t.identifier(aminoCasingFn(field.name)),
      t.tsTypeAnnotation(t.tSNumberKeyword())
    );
  }

  // definitions/interfaces
  const ival: Interface = interfaces.find(e => e.name === typeName);
  if (ival) {
    const properties = ival.fields.map(field =>
      renderAminoField(field, enums, interfaces, imports, aminoCasingFn)
    );

    if (isArray) {
      return t.tsPropertySignature(
        t.identifier(aminoCasingFn(field.name)),
        t.tsTypeAnnotation(
          arrayTypeNDimensions(t.tsTypeLiteral(
            properties
          ), dimensions)
        )
      )
    }

    return t.tsPropertySignature(
      t.identifier(aminoCasingFn(field.name)),
      t.tsTypeAnnotation(
        t.tsTypeLiteral(
          properties
        )
      )
    );
  }

  // basic scalar types
  switch (field.type) {
    case 'Long':
      // longs become strings...
      return t.tsPropertySignature(
        t.identifier(aminoCasingFn(field.name)),
        t.tsTypeAnnotation(t.tSStringKeyword())
      );
    default:
      return t.tsPropertySignature(
        t.identifier(aminoCasingFn(field.name)),
        t.tsTypeAnnotation(field.node)
      );
  }
};

export const makeAminoTypeInterface = (
  {
    schema,
    enums,
    interfaces = [],
    imports = [],
    aminoCasingFn,
    exceptions
  }: {
    schema: MessageSchema,
    enums: Enum[],
    interfaces: any[],
    imports?: any[],
    aminoCasingFn: Function,
    exceptions?: AminoExceptions
  }
) => {

  const TypeName = schema.name;
  const typeUrl = schema.typeUrl;
  const aminoType = typeUrlToAmino(typeUrl, exceptions);

  return t.exportNamedDeclaration(
    t.tsInterfaceDeclaration(
      t.identifier('Amino' + TypeName),
      null,
      [t.tsExpressionWithTypeArguments(t.identifier('AminoMsg'))],
      t.tSInterfaceBody([
        t.tSPropertySignature(t.identifier('type'), t.tsTypeAnnotation(
          t.tSLiteralType(t.stringLiteral(aminoType))
        )),
        t.tSPropertySignature(t.identifier('value'), t.tsTypeAnnotation(t.tsTypeLiteral(
          schema.fields.map((field) => {
            return renderAminoField(field, enums, interfaces, imports, aminoCasingFn);
          })
        )))
      ])
    )
  )

}