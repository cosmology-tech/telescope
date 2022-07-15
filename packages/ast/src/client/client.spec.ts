import { getGenericParseContext, getGenericParseContextWithRef } from '../../test-utils'
import { createClient } from './client';
import generate from '@babel/generator';
import { ProtoRef } from '@osmonauts/types';


const expectCode = (ast) => {
    expect(
        generate(ast).code
    ).toMatchSnapshot();
}
const printCode = (ast) => {
    console.log(
        generate(ast).code
    );
}

it('createClient', async () => {
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
    expectCode(createClient({
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

it('createClient w/o defaults', async () => {
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
    expectCode(createClient({
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