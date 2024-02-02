import {
    getUrlTemplateString,
    createAggregatedLCDClient,
    createLCDClient,
    makeTemplateTagLegacy
} from './lcd';
import { traverse } from '@subql/x-cosmology-proto-parser'
import { getNestedProto } from '@subql/x-cosmology-utils'
import { defaultTelescopeOptions, ProtoService } from '@subql/x-cosmology-types';
import generate from '@babel/generator';
import { GenericParseContext } from '../../../encoding';
import { getTestProtoStore, expectCode, printCode } from '../../../../test-utils';
const store = getTestProtoStore();
store.options.prototypes.parser.keepCase = true;
store.traverseAll();

it('cosmos/group/v1/query.proto', () => {
    const ref = store.findProto('cosmos/group/v1/query.proto');
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Query;
    const context = new GenericParseContext(ref, store, defaultTelescopeOptions);
    const ast = createLCDClient(context, service);
    expectCode(ast);
});
