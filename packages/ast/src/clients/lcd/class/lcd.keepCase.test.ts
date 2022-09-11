import {
    getUrlTemplateString,
    createAggregatedLCDClient,
    createLCDClient,
    makeTemplateTag
} from './lcd';
import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'
import { defaultTelescopeOptions, ProtoService } from '@osmonauts/types';
import generate from '@babel/generator';
import { GenericParseContext } from '../../../encoding';
const store = new ProtoStore([__dirname + '/../../../../../../__fixtures__/chain1']);
store.options.prototypes.parser.keepCase = true;
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

it('cosmos/group/v1/query.proto', () => {
    const ref = store.findProto('cosmos/group/v1/query.proto');
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Query;
    const context = new GenericParseContext(ref, store, defaultTelescopeOptions);
    const ast = createLCDClient(context, service);
    expectCode(ast);
});
