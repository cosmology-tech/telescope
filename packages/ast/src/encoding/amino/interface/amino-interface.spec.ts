import { makeAminoTypeInterface } from './index';
import generate from '@babel/generator';
import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'
import { camel, snake } from 'case';
import { ProtoType } from '../../types';

const store = new ProtoStore(__dirname + '/../../../../../../__fixtures__/chain1');
store.traverseAll();

const expectCode = (ast) => {
    expect(
        generate(ast).code
    ).toMatchSnapshot();
}
const printCode = (ast) => {
    console.log(
        generate(ast).code
    );
}

describe('osmosis/gamm/v1beta1/tx', () => {
    const ref = store.findProto('osmosis/gamm/v1beta1/tx.proto');
    // TODO get traverseAll() to work
    // const proto: Record<string, ProtoType> = getNestedProto(ref.proto);
    const traversed = traverse(store, ref);
    const proto: Record<string, ProtoType> = getNestedProto(traversed);

    const protos: ProtoType[] = Object.values(proto).filter(
        proto => proto.name.startsWith('Msg')
            &&
            !proto.name.endsWith('Response')
            &&
            proto.name !== 'Msg'
    );

    const context = {
        store,
        ref
    }

    it('Interfaces', () => {
        expectCode(makeAminoTypeInterface(
            {
                context,
                proto: protos.find(p => p.name === 'MsgJoinPool'),
                options: {
                    aminoCasingFn: camel
                }
            }
        ))
    })
});


describe('cosmos/staking/v1beta1/tx', () => {
    const ref = store.findProto('cosmos/staking/v1beta1/tx.proto');
    // TODO get traverseAll() to work
    // const proto: Record<string, ProtoType> = getNestedProto(ref.proto);
    const traversed = traverse(store, ref);
    const proto: Record<string, ProtoType> = getNestedProto(traversed);

    const protos: ProtoType[] = Object.values(proto).filter(
        proto => proto.name.startsWith('Msg')
            &&
            !proto.name.endsWith('Response')
            &&
            proto.name !== 'Msg'
    );

    const context = {
        store,
        ref
    }

    it('MsgCreateValidator', () => {
        expectCode(makeAminoTypeInterface(
            {
                context,
                proto: protos.find(p => p.name === 'MsgCreateValidator'),
                options: {
                    aminoCasingFn: snake
                }
            }
        ))
    })
    it('MsgEditValidator', () => {
        expectCode(makeAminoTypeInterface(
            {
                context,
                proto: protos.find(p => p.name === 'MsgEditValidator'),
                options: {
                    aminoCasingFn: snake
                }
            }
        ))
    })
    it('MsgUndelegate', () => {
        expectCode(makeAminoTypeInterface(
            {
                context,
                proto: protos.find(p => p.name === 'MsgUndelegate'),
                options: {
                    aminoCasingFn: snake
                }
            }
        ))
    })
});

