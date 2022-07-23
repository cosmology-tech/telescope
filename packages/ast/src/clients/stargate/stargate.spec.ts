import { getGenericParseContextWithRef, expectCode } from '../../../test-utils'
import { createStargateClient } from './stargate';
import { ProtoRef } from '@osmonauts/types';

it('createStargateClient', async () => {
    const ref: ProtoRef = {
        absolute: '/',
        filename: '/',
        proto: {
            imports: [],
            package: 'osmosis.gamm.yolo',
            root: {},
        }
    }
    const context = getGenericParseContextWithRef(ref);
    expectCode(createStargateClient({
        context,
        name: 'getSigningOsmosisClient',
        registries: [
            'osmosis.gamm.v1beta1',
            'osmosis.superfluid.v1beta1',
            'osmosis.lockup'
        ],
        aminos: [
            'osmosis.gamm.v1beta1',
            'osmosis.superfluid.v1beta1',
            'osmosis.lockup'
        ]
    }));
    expect(context.utils).toMatchSnapshot();
});

it('createStargateClient w/o defaults', async () => {
    const ref: ProtoRef = {
        absolute: '/',
        filename: '/',
        proto: {
            imports: [],
            package: 'cosmos.gamm.yolo',
            root: {},
        }
    }
    const context = getGenericParseContextWithRef(ref);
    expectCode(createStargateClient({
        context,
        name: 'getSigningOsmosisClient',
        registries: [
            'osmosis.gamm.v1beta1',
            'osmosis.superfluid.v1beta1',
            'osmosis.lockup'
        ],
        aminos: [
            'osmosis.gamm.v1beta1',
            'osmosis.superfluid.v1beta1',
            'osmosis.lockup'
        ]
    }));
    expect(context.utils).toMatchSnapshot();
});