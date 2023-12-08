import { expectCode, getGenericParseContext } from '../../../../test-utils'

import {
    rpcRecursiveObjectProps,
    createScopedRpcFactory,
    createScopedRpcTmFactory
} from './rpc';

it('rpcRecursiveObjectProps', async () => {
    expectCode(rpcRecursiveObjectProps(['cosmos', 'bank', 'v1beta1']))
});

it('createScopedRpcFactory', async () => {
    expectCode(createScopedRpcFactory({
        cosmos: {
            bank: {
                v1beta1: "./proto/cosmos/bank/v1beta1/query.lcd"
            },
            gov: {
                v1beta1: "./proto/cosmos/bank/v1beta1/query.lcd"
            },
        },
        osmosis: {
            gamm: {
                v1beta1: "./proto/cosmos/bank/v1beta1/query.lcd"
            }
        }
    },
        'createRpc',
        'RPCQueryClient'
    ))
});

it('createScopedRpcTmFactory', async () => {
    const context = getGenericParseContext();
    expectCode(createScopedRpcTmFactory(context, {
        cosmos: {
            bank: {
                v1beta1: "./proto/cosmos/bank/v1beta1/query.lcd"
            },
            gov: {
                v1beta1: "./proto/cosmos/bank/v1beta1/query.lcd"
            },
        },
        osmosis: {
            gamm: {
                v1beta1: "./proto/cosmos/bank/v1beta1/query.lcd"
            }
        }
    },
        'createRpcFactorizzle',
    ))
});

it('createScopedRpcFactoryWithoutTm', async () => {
  const context = getGenericParseContext();
  context.options!.rpcClients!.extensions = false;
  expectCode(createScopedRpcTmFactory(context, {
      cosmos: {
          bank: {
              v1beta1: "./proto/cosmos/bank/v1beta1/query.lcd"
          },
          gov: {
              v1beta1: "./proto/cosmos/bank/v1beta1/query.lcd"
          },
      },
      osmosis: {
          gamm: {
              v1beta1: "./proto/cosmos/bank/v1beta1/query.lcd"
          }
      }
  },
      'createRpcFactorizzleWithoutTM',
  ))
});

  it('createScopedRpcFactoryWithComet', async () => {
    const context = getGenericParseContext();
    context.options!.rpcClients!.useConnectComet = true;
    expectCode(createScopedRpcTmFactory(context, {
        cosmos: {
            bank: {
                v1beta1: "./proto/cosmos/bank/v1beta1/query.lcd"
            },
            gov: {
                v1beta1: "./proto/cosmos/bank/v1beta1/query.lcd"
            },
        },
        osmosis: {
            gamm: {
                v1beta1: "./proto/cosmos/bank/v1beta1/query.lcd"
            }
        }
    },
        'createRpcFactorizzleWithComet',
    ))
});