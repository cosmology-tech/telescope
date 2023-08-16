import { traverse } from '@cosmology/proto-parser'
import { getNestedProto } from '@cosmology/utils';
import { defaultTelescopeOptions, ProtoService } from '@cosmology/types';
import { expectCode, getTestProtoStore } from '../../../test-utils';
import { GenericParseContext } from '../../encoding';
import { createPiniaStore } from './pinia';

const store = getTestProtoStore();
store.traverseAll();

it('builds stores.', async () => {
    const ref = store.findProto('cosmos/auth/v1beta1/query.proto');
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Query;
    const context = new GenericParseContext(ref, store, defaultTelescopeOptions);
    expectCode(createPiniaStore(context, service));
});
