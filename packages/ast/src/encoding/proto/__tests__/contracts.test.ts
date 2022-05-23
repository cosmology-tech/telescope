import { getNestedProto, traverse } from '@osmonauts/proto-parser';
import { ProtoStore } from '@osmonauts/proto-parser'
import { expectCode } from '../../../../test-utils/'
import { ProtoParseContext } from '../../context';
import { createProtoType } from '..';
import { createObjectWithMethods } from '../../object';

const store = new ProtoStore([__dirname + '/../../../../../../__fixtures__/chain1']);
store.traverseAll();

describe('MsgExecuteContract', () => {
    const ref = store.findProto('cosmwasm/wasm/v1/tx.proto');
    const context = new ProtoParseContext(ref, store);
    it('interface', () => {
        expectCode(createProtoType(context, 'MsgExecuteContract',
            getNestedProto(ref.traversed).MsgExecuteContract
        ));
    });
    it('interface', () => {
        expectCode(createObjectWithMethods(context, 'MsgExecuteContract',
            getNestedProto(ref.traversed).MsgExecuteContract
        ));
    });
})
