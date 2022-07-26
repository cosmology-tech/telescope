import { getGenericParseContext, expectCode, printCode } from '../../../test-utils'

import {
    scopedImportObject,
    recursiveObjectProps,
    createScopedImportObject,
    lcdClassArguments
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

xit('scopedImportObject', async () => {
    printCode(scopedImportObject())
});
