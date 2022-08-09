import * as t from '@babel/types';
import { ProtoStore } from '@osmonauts/proto-parser'
import { bundlePackages, getPackagesBundled } from '../src/bundle'
import generate from '@babel/generator';
import { recursiveModuleBundle } from '@osmonauts/ast';

const store = new ProtoStore([__dirname + '/../../../__fixtures__/chain1']);
store.traverseAll();

it('getPackagesBundled', () => {
    const bundle = getPackagesBundled(store);
    expect(Object.keys(bundle)).toEqual(
        ["akash",
            "ics23",
            "cosmos_proto",
            "cosmos",
            "cosmwasm",
            "evmos",
            "gogoproto",
            "google",
            "ibc",
            "osmosis",
            "tendermint"]);
});

it('bundlePackages', () => {
    const bundled = bundlePackages(store);
    const packaged = bundled.reduce((m, bundle) => {
        const body = recursiveModuleBundle(bundle.bundleVariables);
        m[bundle.base] = {
            bundle: bundle.bundleFile,
            base: bundle.base,
            code: generate(t.program([
                ...bundle.importPaths,
                ...body
            ])).code
        };
        return m;
    }, {});
    expect(packaged).toMatchSnapshot();
})

it('bundle packages root file names', () => {
    const bundled = bundlePackages(store);
    const packaged = bundled.reduce((m, bundle) => {
        m[bundle.base] = {
            bundle: bundle.bundleFile,
        };
        return m;
    }, {});
    expect(packaged).toMatchSnapshot();
})
