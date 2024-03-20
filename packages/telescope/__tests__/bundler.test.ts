import * as t from "@babel/types";
import { bundlePackages, getPackagesBundled } from "../src/bundle";
import generate from "@babel/generator";
import { recursiveModuleBundle } from "@cosmology/ast";
import { getTestProtoStore } from "../test-utils";
import { getImportStatements } from "../src/imports";

const store = getTestProtoStore();
store.traverseAll();

it("getPackagesBundled", () => {
  const bundle = getPackagesBundled(store);
  // osmosis: {
  // ...
  // },
  // tendermint: {
  //     abci: { pkg: 'tendermint.abci', files: [Array] },
  //     crypto: { pkg: 'tendermint.crypto', files: [Array] },
  //     libs: { bits: [Object] },
  //     p2p: { pkg: 'tendermint.p2p', files: [Array] },
  //     types: { pkg: 'tendermint.types', files: [Array] },
  //     version: { pkg: 'tendermint.version', files: [Array] }
  //   }

  expect(Object.keys(bundle)).toEqual([
    "akash",
    "ics23",
    "cosmos_proto",
    "cosmos",
    "cosmwasm",
    "evmos",
    "gogoproto",
    "google",
    "ibc",
    "osmosis",
    "tendermint",
  ]);
});

it("bundlePackages", () => {
  const bundled = bundlePackages(store);
  const packaged = bundled.reduce((m, bundle) => {
    const body = recursiveModuleBundle(store.options, bundle.bundleVariables);
    m[bundle.base] = {
      bundle: bundle.bundleFile,
      base: bundle.base,
      code: generate(t.program([...bundle.importPaths, ...body])).code,
    };
    return m;
  }, {});
  expect(packaged).toMatchSnapshot();
});

it("bundle packages root file names", () => {
  const bundled = bundlePackages(store);
  const packaged = bundled.reduce((m, bundle) => {
    m[bundle.base] = {
      bundle: bundle.bundleFile,
    };
    return m;
  }, {});
  expect(packaged).toMatchSnapshot();
});

it("get import statements", () => {
  const importStat = getImportStatements("func", [
    {
      type: "import",
      name: "defineStore",
      path: "func",
    },
    {
      type: "import",
      name: "LCDQueryClient",
      path: "./query.lcd",
    },
  ]);

  expect(importStat).toMatchSnapshot();
});

it("get import statements with ext", () => {
  const importStat = getImportStatements(
    "func",
    [
      {
        type: "import",
        name: "defineStore",
        path: "func",
      },
      {
        type: "import",
        name: "LCDQueryClient",
        path: "./query.lcd",
      },
    ],
    {
      restoreImportExtension: ".mjs",
    }
  );

  expect(importStat).toMatchSnapshot();
});

it("get import statements with ext without .", () => {
  const importStat = getImportStatements(
    "func",
    [
      {
        type: "import",
        name: "defineStore",
        path: "func",
      },
      {
        type: "import",
        name: "LCDQueryClient",
        path: "./query.lcd",
      },
    ],
    {
      restoreImportExtension: "mjs",
    }
  );

  expect(importStat).toMatchSnapshot();
});
