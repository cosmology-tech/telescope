import { getTestProtoStore } from '../../test-utils';

it('get all packages', () => {
  const store = getTestProtoStore();
  store.traverseAll();
  const pkgs = store.getPackages().sort();

  expect(pkgs).toMatchSnapshot();
});

it('cosmos/gov/v1beta1/gov.proto', () => {
  const store = getTestProtoStore();
  store.options.prototypes!.includes = {
    protos:["cosmos/gov/v1beta1/gov.proto"]
  }
  store.traverseAll();
  const pkgs = store.getPackages().sort();

  expect(pkgs).toMatchSnapshot();
});

it('cosmos/gov/v1beta1/gov.proto excluded', () => {
  const store = getTestProtoStore();
  store.options.prototypes!.includes = {
    protos:["cosmos/gov/v1beta1/gov.proto"]
  }
  store.options.prototypes!.excluded = {
    protos:["cosmos/gov/v1beta1/gov.proto"]
  }
  store.traverseAll();
  const pkgs = store.getPackages().sort();

  expect(pkgs).toMatchSnapshot();
});

it('cosmos/gov/v1beta1/gov.proto excluded dep', () => {
  const store = getTestProtoStore();
  store.options.prototypes!.includes = {
    protos:["cosmos/gov/v1beta1/gov.proto"]
  }
  store.options.prototypes!.excluded = {
    protos:["gogoproto/gogo.proto"]
  }
  store.traverseAll();
  const pkgs = store.getPackages().sort();

  expect(pkgs).toMatchSnapshot();
});

it('osmosis/gamm/v1beta1/tx.proto', () => {
  const store = getTestProtoStore();
  store.options.prototypes!.includes = {
    protos:["osmosis/gamm/v1beta1/tx.proto"]
  }
  store.traverseAll();
  const pkgs = store.getPackages().sort();

  expect(pkgs).toMatchSnapshot();
});

it('gov.proto & tx.proto', () => {
  const store = getTestProtoStore();
  store.options.prototypes!.includes = {
    protos:[
      "cosmos/gov/v1beta1/gov.proto",
      "osmosis/gamm/v1beta1/tx.proto"
    ]
  }
  store.traverseAll();
  const pkgs = store.getPackages().sort();

  expect(pkgs).toMatchSnapshot();
});

it('gov.proto & tx.proto & signing.proto', () => {
  const store = getTestProtoStore();
  store.options.prototypes!.includes = {
    protos:[
      "cosmos/gov/v1beta1/gov.proto",
      "osmosis/gamm/v1beta1/tx.proto",
      "cosmos/tx/signing/v1beta1/signing.proto"
    ]
  }
  store.traverseAll();
  const pkgs = store.getPackages().sort();

  expect(pkgs).toMatchSnapshot();
});

it('gov.proto & tx.proto & signing.proto excluded', () => {
  const store = getTestProtoStore();
  store.options.prototypes!.includes = {
    protos:[
      "cosmos/gov/v1beta1/gov.proto",
      "osmosis/gamm/v1beta1/tx.proto",
      "cosmos/tx/signing/v1beta1/signing.proto"
    ]
  }
  store.options.prototypes!.excluded = {
    protos:[
      "**/gamm/**",
    ]
  }
  store.traverseAll();
  const pkgs = store.getPackages().sort();

  expect(pkgs).toMatchSnapshot();
});

it('osmosis excluded gamm', () => {
  const store = getTestProtoStore();
  store.options.prototypes!.includes = {
    packages:[
      "osmosis.*"
    ]
  }
  store.options.prototypes!.excluded = {
    protos:[
      "**/gamm/**",
    ]
  }
  store.traverseAll();
  const pkgs = store.getPackages().sort();

  expect(pkgs).toMatchSnapshot();
});