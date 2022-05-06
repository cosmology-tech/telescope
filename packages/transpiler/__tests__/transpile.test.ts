import { TelescopeBuilder } from '../src';
import { ProtoStore } from '@osmonauts/proto-parser'
const store = new ProtoStore(__dirname + '/../../../__fixtures__/chain1');
store.traverseAll();

const telescope = new TelescopeBuilder({
    outPath: __dirname + '/../../../__fixtures__/output1',
    protoDir: __dirname + '/../../../__fixtures__/chain1'
});

const expectUtils = (context) => {
    expect({
        amino: context.amino.utils,
        proto: context.proto.utils
    }).toMatchSnapshot();
};

describe('services', () => {
    it('osmosis/gamm/v1beta1/tx', () => {
        const result = telescope.buildProto('osmosis/gamm/v1beta1/tx.proto');
        expectUtils(result.context);
    });
    it('osmosis/lockup/tx', () => {
        const result = telescope.buildProto('osmosis/lockup/tx.proto');
        expectUtils(result.context);
    });
});

describe('nested', () => {
    it('google/api/expr/v1alpha1/checked', () => {
        const result = telescope.buildProto('google/api/expr/v1alpha1/checked.proto');
        expectUtils(result.context);
    });
});

describe('utils', () => {
    it('cosmos/staking/v1beta1/tx', () => {
        const result = telescope.buildProto('cosmos/staking/v1beta1/tx.proto');
        expectUtils(result.context);
    });
});
