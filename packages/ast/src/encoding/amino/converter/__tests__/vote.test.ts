import { aminoConverter } from '../index';
import generate from '@babel/generator';
import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'
import { camel, snake } from 'case';
import { ProtoType } from '../../../proto/types';

const store = new ProtoStore(__dirname + '/../../../../../../../__fixtures__/chain1');
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

const prepareContext = (protoFile: string) => {
    const ref = store.findProto(protoFile);
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

    return {
        context,
        root: traversed,
        protos
    };
}

describe('cosmos/gov/v1beta1/tx', () => {

    const {
        context, root, protos
    } = prepareContext('cosmos/gov/v1beta1/tx.proto')

    it('AminoConverter', () => {
        expectCode(aminoConverter({
            context,
            root,
            name: 'AminoConverter',
            protos,
            options: {
                aminoCasingFn: snake
            }
        }))
    })
});

