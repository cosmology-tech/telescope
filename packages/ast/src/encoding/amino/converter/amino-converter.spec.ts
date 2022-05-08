import { createAminoConverter } from './index';
import { ProtoStore } from '@osmonauts/proto-parser'
import { camel, snake } from 'case';
import { prepareContext, expectCode } from '../../../../test-utils'
const store = new ProtoStore(__dirname + '/../../../../../../__fixtures__/chain1');
store.traverseAll();

describe('osmosis/gamm/v1beta1/tx', () => {
    const {
        context, protos, root
    } = prepareContext(store, 'osmosis/gamm/v1beta1/tx.proto')

    it('AminoConverter', () => {
        context.options = {
            aminoCasingFn: camel
        };

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
        context.options = {
            aminoCasingFn: snake
        };

        expectCode(createAminoConverter({
            context,
            root,
            name: 'AminoConverter',
            protos
        }))
    })
});

