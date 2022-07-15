import { recursiveNamespace, renderNameSafely } from './utils';
import { createClient } from '../client/client';
import generate from '@babel/generator';
import { getGenericParseContext, getGenericParseContextWithRef } from '../../test-utils';
import { ProtoRef } from '@osmonauts/types';

const expectCode = (ast) => {
    expect(
        generate(ast).code
    ).toMatchSnapshot();
}

it('recursiveNamespace', async () => {
    const ref: ProtoRef = {
        absolute: '/',
        filename: '/',
        proto: {
            imports: [],
            package: 'osmosis.gamm.yolo',
            root: {},
        }
    }
    expectCode(
        recursiveNamespace(['osmosis', 'gamm', 'v1beta', 'pools'].reverse(), [

            createClient({
                context: getGenericParseContextWithRef(ref),
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
            })
        ])[0]
    );
});

describe('safe type names', () => {
    it('My_Name_asd.asdf.Type_rcc.dao.Yolo', () => {
        const name = 'My_Name_asd.asdf.Type_rcc.dao.Yolo';
        const filtered = renderNameSafely(name);
        expect(filtered).toEqual('My_Name_Type_Yolo');
    });
    it('dao.Yolo', () => {
        const name = 'dao.Yolo';
        const filtered = renderNameSafely(name);
        expect(filtered).toEqual('Yolo');
    });
    it('Yolo', () => {
        const name = 'Yolo';
        const filtered = renderNameSafely(name);
        expect(filtered).toEqual('Yolo');
    });
});
