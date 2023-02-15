import * as t from '@babel/types';
import { ProtoService, ProtoServiceMethod } from '@osmonauts/types';
import { getNestedProto, isRefIncluded } from '@osmonauts/proto-parser';
import { GenericParseContext } from '../../encoding';
import { objectPattern } from '../../utils';
import { variableSlug } from '@osmonauts/utils';

/**
 * Entry for building stores.
 */
export const build = (
  context: GenericParseContext,
  name: string,
  svc: ProtoServiceMethod
) => {
  const isIncluding =
    context.pluginValue('mobx.enabled') &&
    isRefIncluded(context.ref, context.pluginValue('mobx.include'));

  if (isIncluding) {

  }
};
