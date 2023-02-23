import {
    expectCode,
    getGenericParseContext,
    getTestProtoStore
} from '../../../test-utils';
import * as t from '@babel/types';
import { createPiniaStoreFactory } from './scoped-bundle';

const store = getTestProtoStore();
store.traverseAll();

it('builds stores.', async () => {
    const context = getGenericParseContext();
    expectCode(
        t.program(
            createPiniaStoreFactory(context, {
                cosmos: {
                    bank: {
                        v1beta1: './proto/cosmos/bank/v1beta1/a.lcd'
                    },
                    gov: {
                        v1beta1: './proto/cosmos/bank/v1beta1/b.lcd'
                    }
                },
                osmosis: {
                    gamm: {
                        v1beta1: './proto/cosmos/bank/v1beta1/c.lcd'
                    }
                }
            }) as t.Statement[]
        )
    );
});
