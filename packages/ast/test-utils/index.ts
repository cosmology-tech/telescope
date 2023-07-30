import generate from '@babel/generator';
import { ProtoType, TelescopeOptions } from '@cosmology/types';
import { ProtoStore, getNestedProto } from '@cosmology/proto-parser'
import { AminoParseContext } from '../src/encoding/context';
import { GenericParseContext } from '../src/encoding';
import { defaultTelescopeOptions as teleDefaults } from '@cosmology/types';
import deepmerge from 'deepmerge';

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

const defaultTelescopeOptionsForTesting = {
    prototypes: {
        parser: {
            keepCase: false // so we can test the camelCase
        },
        methods: {
            encode: true,
            decode: true,
            fromJSON: true,
            toJSON: true,
            fromPartial: true,
            toSDK: true,
            fromSDK: true
        },

    }
};

// deepmerge: If an element at the same key is present for both x and y, the value from y will appear in the result.
export const defaultTelescopeOptions = deepmerge(teleDefaults, defaultTelescopeOptionsForTesting);

export const getTestProtoStore = (options?: TelescopeOptions) => {
    const store = new ProtoStore([__dirname + '/../../../__fixtures__/chain1'], options ? deepmerge(defaultTelescopeOptions, options) : deepmerge(defaultTelescopeOptions, {}));
    return store;
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

export const getGenericParseContextWithRef = (ref) => {
    const context = new GenericParseContext(ref, null, defaultTelescopeOptions)
    return context;
};