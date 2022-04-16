import * as t from '@babel/types';
import { snake } from 'case';
import { Enum, Field, Interface, MessageSchema } from '../types';
import { toAmino } from './to-amino';
import { fromAmino } from './from-amino';
import { getFieldDimensionality, typeUrlToAmino, arrayTypeNDimensions } from '../utils';

export const makeAminoConverterItem = (schema: MessageSchema, enums: Enum[], interfaces: Interface[]) => {
  return t.objectProperty(
    t.stringLiteral(schema.typeUrl),
    t.objectExpression(
      [
        t.objectProperty(t.identifier('aminoType'), t.stringLiteral(typeUrlToAmino(schema.typeUrl, schema.name))),
        t.objectProperty(t.identifier('toAmino'), toAmino(schema, enums, interfaces)),
        t.objectProperty(t.identifier('fromAmino'), fromAmino(schema, enums, interfaces))
      ]
    )
  );
};

export const aminoConverter = (schemas: MessageSchema[], enums: Enum[], interfaces: Interface[]) => {
  return t.exportNamedDeclaration(t.variableDeclaration('const', [
    t.variableDeclarator(t.identifier('AminoConverter'),
      t.objectExpression(
        schemas.map(schema => makeAminoConverterItem(schema, enums, interfaces))
      ))
  ]));
};

export const renderAminoField = (field: Field, enums: Enum[], interfaces: any[] = [], imports: any[] = []) => {

  const { typeName, dimensions, isArray } = getFieldDimensionality(field);

  // special cases
  switch (field.type) {
    case 'Height':
      // Height becomes AminoHeight...
      imports.push({
        identifier: 'AminoHeight',
      });
      return t.tsPropertySignature(
        t.identifier(snake(field.name)),
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
        t.identifier(snake(field.name)),
        t.tsTypeAnnotation(arrayTypeNDimensions(t.tSNumberKeyword(), dimensions))
      );
    }

    return t.tsPropertySignature(
      t.identifier(snake(field.name)),
      t.tsTypeAnnotation(t.tSNumberKeyword())
    );
  }

  // definitions/interfaces
  const ival: Interface = interfaces.find(e => e.name === typeName);
  if (ival) {
    const properties = ival.fields.map(field =>
      renderAminoField(field, enums, interfaces, imports)
    );

    if (isArray) {
      return t.tsPropertySignature(
        t.identifier(snake(field.name)),
        t.tsTypeAnnotation(
          arrayTypeNDimensions(t.tsTypeLiteral(
            properties
          ), dimensions)
        )
      )
    }

    return t.tsPropertySignature(
      t.identifier(snake(field.name)),
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
        t.identifier(snake(field.name)),
        t.tsTypeAnnotation(t.tSStringKeyword())
      );
    default:
      return t.tsPropertySignature(
        t.identifier(snake(field.name)),
        t.tsTypeAnnotation(field.node)
      );
  }
};

export const makeAminoTypeInterface = (schema: MessageSchema, enums: Enum[], interfaces: any[] = [], imports: any[] = []) => {

  const TypeName = schema.name;
  const typeUrl = schema.typeUrl;

  return t.exportNamedDeclaration(
    t.tsInterfaceDeclaration(
      t.identifier('Amino' + TypeName),
      null,
      [t.tsExpressionWithTypeArguments(t.identifier('AminoMsg'))],
      t.tSInterfaceBody([
        t.tSPropertySignature(t.identifier('type'), t.tsTypeAnnotation(
          t.tSLiteralType(t.stringLiteral(typeUrlToAmino(typeUrl, TypeName)))
        )),
        t.tSPropertySignature(t.identifier('value'), t.tsTypeAnnotation(t.tsTypeLiteral(
          schema.fields.map((field) => {
            return renderAminoField(field, enums, interfaces, imports);
          })
        )))
      ])
    )
  )

}