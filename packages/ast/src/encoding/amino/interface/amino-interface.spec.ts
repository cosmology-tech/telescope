import { makeAminoTypeInterface } from './index';
import { ProtoStore } from '@osmonauts/proto-parser'
import { camel, snake } from 'case';
import { prepareContext, expectCode, printCode } from '../../../../test-utils';
const store = new ProtoStore(__dirname + '/../../../../../../__fixtures__/chain1');
store.traverseAll();

describe('osmosis/gamm/v1beta1/tx', () => {

    const {
        context, protos
    } = prepareContext(store, 'osmosis/gamm/v1beta1/tx.proto')

    it('Interfaces', () => {
        expectCode(makeAminoTypeInterface(
            {
                context,
                proto: protos.find(p => p.name === 'MsgJoinPool'),
                options: {
                    aminoCasingFn: camel
                }
            }
        ))
    })
});


describe('cosmos/staking/v1beta1/tx', () => {
    const {
        context, protos
    } = prepareContext(store, 'cosmos/staking/v1beta1/tx.proto')

    it('MsgCreateValidator', () => {
        expectCode(makeAminoTypeInterface(
            {
                context,
                proto: protos.find(p => p.name === 'MsgCreateValidator'),
                options: {
                    aminoCasingFn: snake
                }
            }
        ))
    })
    it('MsgEditValidator', () => {
        expectCode(makeAminoTypeInterface(
            {
                context,
                proto: protos.find(p => p.name === 'MsgEditValidator'),
                options: {
                    aminoCasingFn: snake
                }
            }
        ))
    })
    it('MsgUndelegate', () => {
        expectCode(makeAminoTypeInterface(
            {
                context,
                proto: protos.find(p => p.name === 'MsgUndelegate'),
                options: {
                    aminoCasingFn: snake
                }
            }
        ))
    })
});

