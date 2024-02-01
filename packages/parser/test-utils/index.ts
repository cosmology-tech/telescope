import generate from '@babel/generator';
import { ProtoType, TelescopeOptions } from '@subql/x-cosmology-types';
import { defaultTelescopeOptions as teleDefaults } from '@subql/x-cosmology-types';
import deepmerge from 'deepmerge';
import { ProtoStore } from '../src';

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


