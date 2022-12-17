import { getTestProtoStore } from '../../test-utils';

describe('PoolI', () => {
  const store = getTestProtoStore();
  // @ts-ignore
  store.options.interfaces.enabled = true;
  store.traverseAll();
  const queryRef = store.findProto('osmosis/gamm/v1beta1/query.proto');
  const balancerRef = store.findProto('osmosis/gamm/pool-models/balancer/balancerPool.proto');
  const stableswapRef = store.findProto('osmosis/gamm/pool-models/stableswap/stableswap_pool.proto');

  it('createMap', () => {
    const result = store.getTypeUrlMap(
      queryRef
    );

    expect(result).toMatchSnapshot();
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