import * as t from '@babel/types';
import { GenericParseContext } from '../encoding';

export const TypeLong = {
  propTypes: {
    bigint: 'bigint',
    long: 'Long'
  },
  propIdentifiers: {
    bigint: t.identifier('bigint'),
    long: t.identifier('Long')
  },

  types: {
    bigint: 'BigInt',
    long: 'Long'
  },

  identifiers: {
    bigint: t.identifier('BigInt'),
    long: t.identifier('Long')
  },

  uzeroExpressions: {
    bigint: t.callExpression(t.identifier('BigInt'), [t.numericLiteral(0)]),
    long: t.memberExpression(t.identifier('Long'), t.identifier('UZERO'))
  },

  zeroExpressions: {
    bigint: t.callExpression(t.identifier('BigInt'), [t.numericLiteral(0)]),
    long: t.memberExpression(t.identifier('Long'), t.identifier('ZERO'))
  },

  fromValueExpressions: {
    bigint: t.identifier('BigInt'),
    long: t.memberExpression(t.identifier('Long'), t.identifier('fromValue'))
  },

  fromNumberExpressions: {
    bigint: t.identifier('BigInt'),
    long: t.memberExpression(t.identifier('Long'), t.identifier('fromNumber'))
  },

  fromStringExpressions: {
    bigint: t.identifier('BigInt'),
    long: t.memberExpression(t.identifier('Long'), t.identifier('fromString'))
  },

  addUtil: (ctx?: GenericParseContext) => {
    if (!ctx) {
      return;
    }

    const longLib = ctx.pluginValue('prototypes.typingsFormat.num64');

    switch (longLib) {
      case 'long':
        ctx.addUtil('Long');
        break;
    }
  },

  getPropType: (ctx: GenericParseContext): string => {
    return TypeLong.getNode(ctx, TypeLong.propTypes);
  },

  getType: (ctx: GenericParseContext): string => {
    return TypeLong.getNode(ctx, TypeLong.types);
  },

  getPropIdentifier: (ctx: GenericParseContext): t.Identifier => {
    return TypeLong.getNode(ctx, TypeLong.propIdentifiers);
  },

  getIdentifier: (ctx: GenericParseContext): t.Identifier => {
    return TypeLong.getNode(ctx, TypeLong.identifiers);
  },

  getUZero: (ctx: GenericParseContext): t.Expression => {
    return TypeLong.getNode(ctx, TypeLong.uzeroExpressions);
  },

  getZero: (ctx: GenericParseContext): t.Expression => {
    return TypeLong.getNode(ctx, TypeLong.zeroExpressions);
  },

  getFromValue: (ctx: GenericParseContext): t.Expression => {
    return TypeLong.getNode(ctx, TypeLong.fromValueExpressions);
  },

  getFromValueWithArgs: (
    ctx: GenericParseContext,
    arg: t.Expression
  ): t.Expression => {
    const longLib = ctx.pluginValue('prototypes.typingsFormat.num64');
    const args = [];

    switch (longLib) {
      case 'bigint':
        args.push(
          t.callExpression(
            t.memberExpression(arg, t.identifier('toString')),
            []
          )
        );
      break;

      case 'long':
        args.push(arg);
      default:
    }

    return t.callExpression(TypeLong.getFromValue(ctx), args);
  },

  getFromNumber: (ctx: GenericParseContext): t.Expression => {
    return TypeLong.getNode(ctx, TypeLong.fromNumberExpressions);
  },

  getFromString: (ctx: GenericParseContext): t.Expression => {
    return TypeLong.getNode(ctx, TypeLong.fromStringExpressions);
  },

  getNode: (ctx: GenericParseContext, mappings) => {
    const longLib = ctx.pluginValue('prototypes.typingsFormat.num64');

    return mappings[longLib] ?? mappings['long'];
  },

  getLongNotZero: (prop: string, ctx: GenericParseContext): t.Expression => {
    const longLib = ctx.pluginValue('prototypes.typingsFormat.num64');

    switch (longLib) {
      case 'bigint':
        return t.binaryExpression(
          '!==',
          t.memberExpression(t.identifier('message'), t.identifier(prop)),
          t.callExpression(t.identifier('BigInt'), [t.numericLiteral(0)])
        );
      case 'long':
      default:
        return t.unaryExpression(
          '!',
          t.callExpression(
            t.memberExpression(
              t.memberExpression(t.identifier('message'), t.identifier(prop)),
              t.identifier('isZero')
            ),
            []
          )
        );
    }
  }
};
