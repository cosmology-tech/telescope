import generate from '@babel/generator';
import { ProtoType, TelescopeOptions } from '@osmonauts/types';
import { defaultTelescopeOptions as teleDefaults } from '@osmonauts/types';
import deepmerge from 'deepmerge';
import { ProtoStore } from '@osmonauts/proto-parser';


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
const defaultTelescopeOptions = deepmerge(teleDefaults, defaultTelescopeOptionsForTesting);

export const getTestProtoStore = (options?: TelescopeOptions) => {
    const store = new ProtoStore([__dirname + '/../../../__fixtures__/chain1'], options ? deepmerge(defaultTelescopeOptions, options) : deepmerge(defaultTelescopeOptions, {}));
    return store;
}

export const getTestProtoStore2 = (options?: TelescopeOptions) => {
    const store = new ProtoStore([__dirname + '/../../../__fixtures__/chain2'], options ? deepmerge(defaultTelescopeOptions, options) : deepmerge(defaultTelescopeOptions, {}));
    return store;
}

export const strip = (obj) => {
    var copy;
    // Handle the 3 simple types, and null or undefined
    if (null == obj || 'object' != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = strip(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object || typeof obj === 'object') {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                switch (attr) {
                    case 'comment':
                    case 'comments':
                        break;
                    default:
                        copy[attr] = strip(obj[attr]);
                }
            } else {
                copy[attr] = strip(obj[attr]);
            }
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
};

export const stringify = (ast, $2 = null, $3 = 2) => {
    const obj = strip(ast);
    return JSON.stringify(obj, $2, $3)
};

export default stringify;