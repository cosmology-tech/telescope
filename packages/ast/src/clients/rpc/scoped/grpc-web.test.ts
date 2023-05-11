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

