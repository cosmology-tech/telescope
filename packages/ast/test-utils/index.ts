import generate from '@babel/generator';
import { ProtoStore, getNestedProto, parseProto } from '@osmonauts/proto-parser'
import { ProtoType } from '../src/encoding/proto/types';
import { ParseContext } from '../src/encoding/context';

export const expectCode = (ast) => {
    expect(
        generate(ast).code
    ).toMatchSnapshot();
}
export const printCode = (ast) => {
    console.log(
        generate(ast).code
    );
}

export const prepareContext = (store: ProtoStore, protoFile: string) => {
    const ref = store.findProto(protoFile);
    const traversed = ref.traversed
    if (!traversed) {
        throw new Error('not traversed!');
    }
    const proto: Record<string, ProtoType> = getNestedProto(traversed);
    const protos: ProtoType[] = Object.values(proto).filter(
        proto => proto.name.startsWith('Msg')
            &&
            !proto.name.endsWith('Response')
            &&
            proto.name !== 'Msg'
    );

    const context = new ParseContext(ref, store);

    return {
        context,
        root: traversed,
        protos
    };
};
