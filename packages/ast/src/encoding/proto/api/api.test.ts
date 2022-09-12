import { makeApiInterface } from './index';
import { ProtoStore } from '@osmonauts/proto-parser'
import { snake } from 'case';
import { prepareContext, expectCode } from '../../../../test-utils';
import { fromApiJsonMethod, fromApiParseField } from './from-api-json';
import { toApiJsonMethod } from './to-api-json';
import { createApiConverter } from './converter';
const store = new ProtoStore([__dirname + '/../../../../../../__fixtures__/chain1']);
store.traverseAll();

describe('cosmos/staking/v1beta1/tx', () => {
    const {
        context, protos, root
    } = prepareContext(store, 'cosmos/staking/v1beta1/tx.proto')

    it('MsgCreateValidator', () => {
        context.options.aminoEncoding.casingFn = snake;
        expectCode(makeApiInterface(
            {
                context,
                proto: protos.find(p => p.name === 'MsgCreateValidator'),
            }
        ))
    })
    it('from-api', () => {
        context.options.aminoEncoding.casingFn = snake;
        expectCode(fromApiJsonMethod(
            {
                context,
                proto: protos.find(p => p.name === 'MsgCreateValidator'),
            }
        ))
    })
    it('to-api', () => {
        context.options.aminoEncoding.casingFn = snake;
        expectCode(toApiJsonMethod(
            {
                context,
                proto: protos.find(p => p.name === 'MsgCreateValidator'),
            }
        ))
    })
    it('converter', () => {
        context.options.aminoEncoding.casingFn = snake;
        expectCode(createApiConverter(
            {
                context,
                root,
                name: 'ApiConverter',
                protos: protos.filter(p => p.name === 'MsgCreateValidator'),
            }
        ))
    })
});

