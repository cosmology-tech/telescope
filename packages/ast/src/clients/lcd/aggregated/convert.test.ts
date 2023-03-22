import { createAggregatedLCDClient } from '../class';
import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser';
import {
  defaultTelescopeOptions,
  ProtoRef,
  ProtoService
} from '@osmonauts/types';
import generate from '@babel/generator';
import { GenericParseContext } from '../../../encoding';
import { getTestProtoStore } from '../../../../test-utils';
import deepmerge from 'deepmerge';

const store = getTestProtoStore();
store.traverseAll();

const expectCode = (ast) => {
  expect(generate(ast).code).toMatchSnapshot();
};
const printCode = (ast) => {
  console.log(generate(ast).code);
};

it('uses fromSDKJSON when useSDKTypes && prototypes.methods.fromSDKJSON', () => {
  const packages = ['cosmos.bank.v1beta1', 'osmosis.gamm.v1beta1'];

  const refs = store.filterProtoWhere((ref: ProtoRef) => {
    return packages.includes(ref.proto.package);
  });

  const services: ProtoService[] = refs
    .map((ref) => {
      const proto = getNestedProto(ref.traversed);
      if (!proto?.Query || proto.Query?.type !== 'Service') {
        return;
      }
      return proto.Query;
    })
    .filter(Boolean);

  const options = deepmerge(defaultTelescopeOptions, {
    useSDKTypes: true,
    prototypes: {
      enabled: true,
      methods: {
        fromSDKJSON: true
      }
    }
  });

  const context = new GenericParseContext(refs[0], store, options);
  const ast = createAggregatedLCDClient(context, services, 'QueryClient');
  expectCode(ast);
});

it('uses fromJSON when !useSDKTypes && prototypes.methods.fromJSON', () => {
  const packages = ['cosmos.bank.v1beta1', 'osmosis.gamm.v1beta1'];

  const refs = store.filterProtoWhere((ref: ProtoRef) => {
    return packages.includes(ref.proto.package);
  });

  const services: ProtoService[] = refs
    .map((ref) => {
      const proto = getNestedProto(ref.traversed);
      if (!proto?.Query || proto.Query?.type !== 'Service') {
        return;
      }
      return proto.Query;
    })
    .filter(Boolean);

  const options = deepmerge(defaultTelescopeOptions, {
    useSDKTypes: false,
    prototypes: {
      enabled: true,
      methods: {
        fromJSON: true
      }
    }
  });

  const context = new GenericParseContext(refs[0], store, options);
  const ast = createAggregatedLCDClient(context, services, 'QueryClient');
  expectCode(ast);
});

it('returns any when useSDKTypes && !prototypes.methods.fromSDKJSON', () => {
  const packages = ['cosmos.bank.v1beta1', 'osmosis.gamm.v1beta1'];

  const refs = store.filterProtoWhere((ref: ProtoRef) => {
    return packages.includes(ref.proto.package);
  });

  const services: ProtoService[] = refs
    .map((ref) => {
      const proto = getNestedProto(ref.traversed);
      if (!proto?.Query || proto.Query?.type !== 'Service') {
        return;
      }
      return proto.Query;
    })
    .filter(Boolean);

  const options = deepmerge(defaultTelescopeOptions, {
    useSDKTypes: true,
    prototypes: {
      enabled: true,
      methods: {
        fromSDKJSON: false
      }
    }
  });

  const context = new GenericParseContext(refs[0], store, options);
  const ast = createAggregatedLCDClient(context, services, 'QueryClient');
  expectCode(ast);
});

it('returns any when !useSDKTypes && !prototypes.methods.fromJSON', () => {
  const packages = ['cosmos.bank.v1beta1', 'osmosis.gamm.v1beta1'];

  const refs = store.filterProtoWhere((ref: ProtoRef) => {
    return packages.includes(ref.proto.package);
  });

  const services: ProtoService[] = refs
    .map((ref) => {
      const proto = getNestedProto(ref.traversed);
      if (!proto?.Query || proto.Query?.type !== 'Service') {
        return;
      }
      return proto.Query;
    })
    .filter(Boolean);

  const options = deepmerge(defaultTelescopeOptions, {
    useSDKTypes: false,
    prototypes: {
      enabled: true,
      methods: {
        fromJSON: false
      }
    }
  });

  const context = new GenericParseContext(refs[0], store, options);
  const ast = createAggregatedLCDClient(context, services, 'QueryClient');
  expectCode(ast);
});
