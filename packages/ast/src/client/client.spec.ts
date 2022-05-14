import { createClient } from './client';
import generate from '@babel/generator';
import { GenericParseContext } from '../encoding';

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
    const context = new GenericParseContext();
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