import { getNestedProto } from '@osmonauts/proto-parser';
import { defaultTelescopeOptions } from '@osmonauts/types';
import { ProtoStore } from '@osmonauts/proto-parser'
import { expectCode } from '../../../test-utils/'
import { ProtoParseContext } from '../context';
import { createProtoType } from '..';
import { createObjectWithMethods } from '../object';

const store = new ProtoStore([__dirname + '/../../../../../__fixtures__/chain1']);
store.traverseAll();

describe('Authz', () => {
    const ref = store.findProto('cosmos/authz/v1beta1/authz.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    describe('timestamp', () => {
        it('interface', () => {
            expectCode(createProtoType(context, 'Grant',
                getNestedProto(ref.traversed).Grant
            ));
        });
        it('encoder', () => {
            expectCode(createObjectWithMethods(context, 'Grant',
                getNestedProto(ref.traversed).Grant
            ));
        });
    })
});