import { expectCode, printCode } from '../../../test-utils'

import {
    recursiveObjectProps,
    lcdArguments,
    createScopedImportObject
} from './scoped-imports';

it('recursiveObjectProps', async () => {
    expectCode(recursiveObjectProps(['cosmos', 'bank', 'v1beta1']))
});

it('createScopedImportObject', async () => {
    expectCode(createScopedImportObject({
        cosmos: {
            bank: {
                v1beta1: "./proto/cosmos/bank/v1beta1/query.lcd"
            },
            gov: {
                v1beta1: "./proto/cosmos/bank/v1beta1/query.lcd"
            },
        },
        osmosis: {
            gamm: {
                v1beta1: "./proto/cosmos/bank/v1beta1/query.lcd"
            }
        }
    },
        'lcd',
        'LCDQueryClient',
        lcdArguments()
    ))
});
