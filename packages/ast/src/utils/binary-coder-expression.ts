import * as t from '@babel/types';
import { GenericParseContext } from '../encoding';

export const BinaryCoder = {
  addUtil: (ctx?: GenericParseContext, type?: string) => {
    if (!ctx) {
      return;
    }

    const longLib = ctx.pluginValue('prototypes.typingsFormat.num64');
    type = type?.trim().toLowerCase();

    switch (longLib) {
      case 'long':
        ctx.addUtil('_m0');
        break;
      case 'bigint':
        if (!type || type === 'both' || type === 'reader') {
          ctx.addUtil('BinaryReader');
        }
        if (!type || type === 'both' || type === 'writer') {
          ctx.addUtil('BinaryWriter');
        }
        break;
    }
  },

  getNode: (ctx: GenericParseContext, mappings) => {
    const longLib = ctx.pluginValue('prototypes.typingsFormat.num64');

    return mappings[longLib] ?? mappings['long'];
  },

  readerMemberExp: {
    bigint: t.identifier('BinaryReader'),
    long: t.memberExpression(t.identifier('_m0'), t.identifier('Reader'))
  },

  writerMemberExp: {
    bigint: t.identifier('BinaryWriter'),
    long: t.memberExpression(t.identifier('_m0'), t.identifier('Writer'))
  },

  readerTypeRef: {
    bigint: t.tsTypeReference(t.identifier('BinaryReader')),
    long: t.tsTypeReference(
      t.tsQualifiedName(t.identifier('_m0'), t.identifier('Reader')),
      null
    )
  },

  writerTypeRef: {
    bigint: t.tsTypeReference(t.identifier('BinaryWriter')),
    long: t.tsTypeReference(
      t.tsQualifiedName(t.identifier('_m0'), t.identifier('Writer')),
      null
    )
  },

  getReaderMemberExp: (ctx: GenericParseContext): t.MemberExpression => {
    return BinaryCoder.getNode(ctx, BinaryCoder.readerMemberExp);
  },

  getWriterMemberExp: (ctx: GenericParseContext): t.MemberExpression => {
    return BinaryCoder.getNode(ctx, BinaryCoder.writerMemberExp);
  },

  getReaderTypeRef: (ctx: GenericParseContext): t.TSTypeReference => {
    return BinaryCoder.getNode(ctx, BinaryCoder.readerTypeRef);
  },

  getWriterTypeRef: (ctx: GenericParseContext): t.TSTypeReference => {
    return BinaryCoder.getNode(ctx, BinaryCoder.writerTypeRef);
  }
};