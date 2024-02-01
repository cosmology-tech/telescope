import { createAminoConverter } from './index';
import { ProtoStore } from '@subql/x-cosmology-proto-parser'
import { snake } from 'case';
import { camel } from '@subql/x-cosmology-utils';
import { prepareContext, expectCode, getTestProtoStore } from '../../../../test-utils'
const store = getTestProtoStore();
store.traverseAll();

describe('osmosis/gamm/v1beta1/tx', () => {
    const {
        context, protos, root
    } = prepareContext(store, 'osmosis/gamm/v1beta1/tx.proto')

    it('AminoConverter', () => {
        context.options.aminoEncoding.casingFn = camel;
        context.options.aminoEncoding.useLegacyInlineEncoding = true;

        expectCode(createAminoConverter({
            context,
            root,
            name: 'AminoConverter',
            protos
        }))
    })
});

describe('cosmos/staking/v1beta1/tx', () => {
    const {
        context, protos, root
    } = prepareContext(store, 'cosmos/staking/v1beta1/tx.proto')

    it('AminoConverter', () => {
        context.options.aminoEncoding.casingFn = snake;
        context.options.aminoEncoding.useLegacyInlineEncoding = true;

        expectCode(createAminoConverter({
            context,
            root,
            name: 'AminoConverter',
            protos
        }))
    })

    it('AminoConverter useCosmosSDKDec', () => {
      context.options.aminoEncoding!.casingFn = snake;
      context.options.aminoEncoding!.useLegacyInlineEncoding = true;
      context.options.aminoEncoding!.customTypes!.useCosmosSDKDec = true;

      expectCode(createAminoConverter({
          context,
          root,
          name: 'AminoConverter',
          protos
      }))
    })
});


describe('evmos/fees/v1/tx', () => {
    const {
        context, protos, root
    } = prepareContext(store, 'evmos/fees/v1/tx.proto')

    it('AminoConverter', () => {
        context.options.aminoEncoding.casingFn = snake;
        context.options.aminoEncoding.useLegacyInlineEncoding = true;

        expectCode(createAminoConverter({
            context,
            root,
            name: 'AminoConverter',
            protos
        }))
    })
});

