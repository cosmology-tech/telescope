import { getGenericParseContext, expectCode, printCode } from '../../../test-utils'

import {
    scopedImportObject
} from './scoped-imports';

it('works', async () => {
    printCode(scopedImportObject())
});
