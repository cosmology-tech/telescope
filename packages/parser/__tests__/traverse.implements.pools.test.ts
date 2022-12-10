import { GenericParseContext, getTypeUrl } from '@osmonauts/ast';
import { ProtoRef } from '@osmonauts/types';
import { getNestedProto, ProtoStore } from '../src';
import { getTestProtoStore } from '../test-utils';

describe('PoolI', () => {
  const store = getTestProtoStore();
  // @ts-ignore
  store.options.prototypes.implementsAcceptsAny = true;
  store.traverseAll();
  const queryRef = store.findProto('osmosis/gamm/v1beta1/query.proto');
  const balancerRef = store.findProto('osmosis/gamm/pool-models/balancer/balancerPool.proto');
  const stableswapRef = store.findProto('osmosis/gamm/pool-models/stableswap/stableswap_pool.proto');

  it('createMap', () => {
    const result = store.getTypeUrlMap(
      queryRef
    );

    expect(result).toEqual({
      PoolI: [
        {
          ref: 'osmosis/gamm/pool-models/balancer/balancerPool.proto',
          types: [
            {
              typeUrl: '/osmosis.gamm.v1beta1.Pool',
              type: 'Pool',
              importAs: 'Pool1'
            }
          ]
        },
        {
          ref: 'osmosis/gamm/pool-models/stableswap/stableswap_pool.proto',
          types: [
            {
              typeUrl: '/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool',
              type: 'Pool',
              importAs: 'Pool2'
            }
          ]
        }
      ]
    })
  });

  it('balancerRef', () => {
    expect(balancerRef.traversed?.implementsInterface).toEqual({
      PoolI: ['Pool']
    })
  });
  it('stableswapRef', () => {
    expect(stableswapRef.traversed?.implementsInterface).toEqual({
      PoolI: ['Pool']
    })
  });
  it('queryRef', () => {
    expect(queryRef.traversed?.acceptsInterface).toEqual({
      PoolI: [
        'QueryPoolResponse',
        'QueryPoolsResponse',
        'QueryPoolsWithFilterResponse'
      ]
    })
  });
});