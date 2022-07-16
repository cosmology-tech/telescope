import { getNestedProto } from '@osmonauts/proto-parser';
import { defaultTelescopeOptions } from '@osmonauts/types';
import { ProtoStore } from '@osmonauts/proto-parser'
import { expectCode } from '../../../test-utils/'
import { AminoParseContext, ProtoParseContext } from '../context';
import { createProtoType } from '..';
import { createObjectWithMethods } from '../object';
import { createAminoConverter } from '../amino/index';

const store = new ProtoStore([__dirname + '/../../../../../__fixtures__/chain1']);
store.traverseAll();

describe('Authz', () => {
    const ref = store.findProto('cosmos/authz/v1beta1/authz.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    const aminoCtx = new AminoParseContext(ref, store, defaultTelescopeOptions);
    describe('timestamp', () => {
        it('interface', () => {
            expectCode(createProtoType(context, 'Grant',
                getNestedProto(ref.traversed).Grant
            ));
        });
        it('proto', () => {
            expectCode(createObjectWithMethods(context, 'Grant',
                getNestedProto(ref.traversed).Grant
            ));
        });
        it('amino', () => {
            expectCode(createAminoConverter({
                context: aminoCtx,
                root: ref.proto,
                name: 'AminoConverter',
                protos: [getNestedProto(ref.traversed).Grant]
            }));
        });
    })
});