import {
    getUrlParts,
    getUrlTemplateString,
    makeLCDClient
} from './lcd';
import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'
import { ProtoService } from '@osmonauts/types';
import generate from '@babel/generator';
import { GenericParseContext } from '../../encoding';
const store = new ProtoStore(__dirname + '/../../../../../__fixtures__/chain1');
store.traverseAll();

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

it('service info template', () => {
    expect(getUrlTemplateString('/osmosis/{gamm}/v1beta1/estimate/swap_exact_amount_in')).toMatchSnapshot();
    expect(getUrlTemplateString('/osmosis/{gamm}/v1beta1/{estimate}/swap_exact_amount_in')).toMatchSnapshot();
    expect(getUrlTemplateString('/osmosis/{gamm}/{v1beta1}/{estimate}/{swap_exact_amount_in}')).toMatchSnapshot();
    expect(getUrlTemplateString('/osmosis/gamm/v1beta1/estimate/{swap_exact_amount_in}')).toMatchSnapshot();
});

it('works', () => {
    const ref = store.findProto('osmosis/gamm/v1beta1/query.proto');
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Query;
    const context = new GenericParseContext(ref, store);
    const ast = makeLCDClient(context, service);
    // expectCode(ast);
    printCode(ast);
});