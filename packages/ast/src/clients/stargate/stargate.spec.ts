import { getGenericParseContextWithRef, expectCode, printCode } from '../../../test-utils'
import { createStargateClient, createStargateClientOptions } from './stargate';
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
        options: 'getSigningOsmosisClientOptions'
    }));
    expect(context.utils).toMatchSnapshot();
});

it('createStargateClientOptions', async () => {
    const ref: ProtoRef = {
        absolute: '/',
        filename: '/',
        proto: {
            imports: [],
            package: 'somepackage1.gamm.yolo',
            root: {},
        }
    }
    const context = getGenericParseContextWithRef(ref);
    context.options.stargateClients.includeCosmosDefaultTypes = true;
    expectCode(createStargateClientOptions({
        context,
        name: 'getSigningOsmosisClientOptions',
        registries: [
            'somepackage1.gamm.v1beta1',
            'somepackage1.superfluid.v1beta1',
            'somepackage1.lockup'
        ],
        aminos: [
            'somepackage1.gamm.v1beta1',
            'somepackage1.superfluid.v1beta1',
            'somepackage1.lockup'
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
            package: 'otherpackage1.gamm.yolo',
            root: {},
        }
    }
    const context = getGenericParseContextWithRef(ref);
    context.options.stargateClients.includeCosmosDefaultTypes = false;
    expectCode(createStargateClient({
        context,
        name: 'getSigningOsmosisClient',
        options: 'getSigningOsmosisClientOptions',
    }));
    expectCode(createStargateClientOptions({
        context,
        name: 'getSigningOsmosisClientOptions',
        registries: [
            'otherpackage1.gamm.v1beta1',
            'otherpackage1.superfluid.v1beta1',
            'otherpackage1.lockup'
        ],
        aminos: [
            'otherpackage1.gamm.v1beta1',
            'otherpackage1.superfluid.v1beta1',
            'otherpackage1.lockup'
        ]
    }));
    expect(context.utils).toMatchSnapshot();
});