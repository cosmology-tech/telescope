import { getGenericParseContext, expectCode, printCode } from '../../../test-utils'

import {
    scopedImportObject,
    recursiveObjectProps,
    createScopedImportObject,
    lcdClassArguments,
    createNestedImportObject
} from './scoped-imports';

it('recursiveObjectProps', async () => {
    printCode(recursiveObjectProps(['cosmos', 'bank', 'v1beta1']))
});

it('createScopedImportObject', async () => {
    printCode(createScopedImportObject(
        ['cosmos', 'bank', 'v1beta1'],
        './proto/path/to/stuff',
        'LCDQueryClient',
        lcdClassArguments()
    ))
});

it('createNestedImportObject', async () => {
    printCode(createNestedImportObject(
        {
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
        'LCDQueryClient',
        lcdClassArguments()
    ))
});

xit('scopedImportObject', async () => {
    printCode(scopedImportObject())
});
