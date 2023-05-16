import { expectCode, getGenericParseContext, printCode } from '../../../../test-utils'


import {
    // rpcRecursiveObjectProps,
    // createScopedRrpcFactory,
    createScopedGrpcWebFactory
} from './grpc-web';

it('createScopedGrpcWebFactory', async () => {
    const context = getGenericParseContext();
    expectCode(createScopedGrpcWebFactory(context, {
        cosmos: {
          app: {
            v1alpha1: "../cosmos/app/v1alpha1/query.rpc.Query"
          },
          auth: {
            v1beta1: "../cosmos/auth/v1beta1/query.rpc.Query"
          },
          authz: {
            v1beta1: "../cosmos/authz/v1beta1/query.rpc.Query"
          },
          bank: {
            v1beta1: "../cosmos/bank/v1beta1/query.rpc.Query"
          },
          base: {
            tendermint: {
              v1beta1: "../cosmos/base/tendermint/v1beta1/query.rpc.Service"
            }
          },
          tx: {
            v1beta1: "../cosmos/tx/v1beta1/service.rpc.Service"
          },
        },
        cosmwasm: {
          wasm: {
            v1: "./wasm/v1/query.rpc.Query"
          }
        }
      },
        'createRpcFactorizzle',
    ))
});

