import {
    makeLCDClient
} from './index';
import generate from '@babel/generator';

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

it('works', () => {
    const ast = makeLCDClient();
    // expectCode(ast);
    printCode(ast);
});