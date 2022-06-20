import generate from '@babel/generator';
import { ProtoType } from '@osmonauts/types';
import { ProtoStore, getNestedProto } from '@osmonauts/proto-parser'
import { AminoParseContext } from '../src/encoding/context';
import { GenericParseContext } from '../src/encoding';
import { defaultTelescopeOptions } from '@osmonauts/types';

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

    const context = new AminoParseContext(ref, store, defaultTelescopeOptions);

    return {
        context,
        root: traversed,
        protos
    };
};

export const getGenericParseContext = () => {
    const context = new GenericParseContext(null, null, defaultTelescopeOptions);
    return context;
};