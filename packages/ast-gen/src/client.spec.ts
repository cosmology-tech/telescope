import {
    createClient
} from './client';
import generate from '@babel/generator';

import { mutations } from './__fixtures__';

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
    printCode(createClient({
        name: 'getSigningOsmosisClient',
        packages: [
            'osmosis.gamm.v1beta1',
            'osmosis.superfluid.v1beta1',
            'osmosis.lockup'
        ]
    }));
});