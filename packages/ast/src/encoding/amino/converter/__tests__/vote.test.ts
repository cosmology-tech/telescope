import { createAminoConverter } from '../index';
import { ProtoStore } from '@osmonauts/proto-parser'
import { snake } from 'case';
import { prepareContext, expectCode } from '../../../../../test-utils/';

const store = new ProtoStore([__dirname + '/../../../../../../../__fixtures__/chain1']);
store.traverseAll();

describe('cosmos/gov/v1beta1/tx', () => {

    const {
        context, root, protos
    } = prepareContext(store, 'cosmos/gov/v1beta1/tx.proto')

    it('AminoConverter', () => {
        context.options = {
            aminoCasingFn: snake
        }
        expectCode(createAminoConverter({
            context,
            root,
            name: 'AminoConverter',
            protos
        }))
    })
});

