import { ProtoStore } from '@osmonauts/proto-parser'

const store = new ProtoStore(__dirname + '/../../../__fixtures__/chain1');
store.traverseAll();

import { TelescopeBuilder } from '../src';

const telescope = new TelescopeBuilder({
    outPath: __dirname + '/../../../__fixtures__/output1',
    protoDir: __dirname + '/../../../__fixtures__/chain1'
});

describe('services', () => {
    it('osmosis/gamm/v1beta1/tx', () => {
        const result = telescope.buildProto('osmosis/gamm/v1beta1/tx.proto');
        expect(result).toMatchSnapshot();
    });
});

describe('nested', () => {
    it('google/api/expr/v1alpha1/checked', () => {
        const result = telescope.buildProto('google/api/expr/v1alpha1/checked.proto');
        expect(result).toMatchSnapshot();
    });
});
