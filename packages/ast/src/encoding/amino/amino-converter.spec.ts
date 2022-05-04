import { aminoConverter } from './amino-converter';
import generate from '@babel/generator';
import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'
import { camel, snake } from 'case';
import { ProtoType } from '../types';

const store = new ProtoStore(__dirname + '/../../../../../__fixtures__/chain1');
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

    it('AminoConverter', () => {
        expectCode(aminoConverter({
            context,
            root: traversed,
            name: 'AminoConverter',
            protos,
            options: {
                aminoCasingFn: camel
            }
        }))
    })
});


describe('cosmos/staking/v1beta1/tx', () => {
    const ref = store.findProto('cosmos/staking/v1beta1/tx.proto');
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

    it('AminoConverter', () => {
        expectCode(aminoConverter({
            context,
            root: traversed,
            name: 'AminoConverter',
            protos,
            options: {
                aminoCasingFn: snake
            }
        }))
    })
});

