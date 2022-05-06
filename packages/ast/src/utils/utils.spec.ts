import { recursiveNamespace } from './utils';
import { createClient } from '../client/client';
import generate from '@babel/generator';
import { GenericParseContext } from '../encoding';

const expectCode = (ast) => {
    expect(
        generate(ast).code
    ).toMatchSnapshot();
}

it('recursiveNamespace', async () => {
    expectCode(
        recursiveNamespace(['osmosis', 'gamm', 'v1beta', 'pools'].reverse(), [

            createClient({
                context: new GenericParseContext(),
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
