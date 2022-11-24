import { traverse, getNestedProto } from '@osmonauts/proto-parser'
import { defaultTelescopeOptions, ProtoService } from '@osmonauts/types';
import { expectCode, getGenericParseContext, getTestProtoStore } from '../../../test-utils';
import { GenericParseContext } from '../../encoding';
import { createRpcQueryHooks, createRpcQueryHookInterfaces } from './react-query';
import * as t from '@babel/types';
import { createScopedRpcHookFactory } from './scoped-bundle';

const store = getTestProtoStore();
store.traverseAll();

it('createScopedRpcHookFactory', async () => {
    const context = getGenericParseContext();
    expectCode(
        t.program(
            createScopedRpcHookFactory(
                context,
                {
                    cosmos: {
                        bank: {
                            v1beta1: "./proto/cosmos/bank/v1beta1/a.lcd"
                        },
                        gov: {
                            v1beta1: "./proto/cosmos/bank/v1beta1/b.lcd"
                        },
                    },
                    osmosis: {
                        gamm: {
                            v1beta1: "./proto/cosmos/bank/v1beta1/c.lcd"
                        }
                    }
                },
                'createRpcFactorizzle',
            )
        )
    )
});
