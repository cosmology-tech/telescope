import { ProtoResolver, ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'
import * as t from '@babel/types';
import { createProtoObjectWithMethods, createProtoType, createCreateProtoType } from '@osmonauts/ast';
import generate from '@babel/generator';
import { parse } from '../src/parse';
import { strip } from '../test-utils';

const store = new ProtoStore(__dirname + '/../../../__fixtures__/chain1');
const resolver = new ProtoResolver(store.getDeps());
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


// - 2 [ ] NOW RECURSIVE THROUGH ALL AND GENERATE IMPORTS
// it('all', () => {
//     const all = resolver.resolveAll();
//     const ref = store.findProto('osmosis/gamm/v1beta1/tx.proto');
//     const res = parse(store, ref.proto);
//     const trav = traverse(store, ref.proto);
//     console.log(JSON.stringify(res, null, 2));
//     console.log(JSON.stringify(trav, null, 2));

// });


// - 1 [ ] PARSE SINGLE FILE
// describe('google/api/expr/v1alpha1/checked', () => {
//     const ref = store.findProto('google/api/expr/v1alpha1/checked.proto');
//     const res = traverse(store, ref.proto);
//     describe('nested', () => {
//         it('MapType', () => {
//             printCode(createProtoObjectWithMethods(
//                 'Type_MapType', getNestedProto(res).Type.nested.MapType
//             ))
//         })
//     })

// });







// describe('cosmos/tx/v1beta1/tx', () => {
//     const ref = store.findProto('cosmos/tx/v1beta1/tx.proto');
//     const res = traverse(store, ref.proto);
//     it('ModeInfo_Multi', () => {
//         expectCode(createProtoObjectWithMethods(
//             'ModeInfo_Multi', getNestedProto(res).ModeInfo
//         ))
//     })
// });

// describe('google/api/expr/v1alpha1/checked', () => {
//     const ref = store.findProto('google/api/expr/v1alpha1/checked.proto');
//     const res = traverse(store, ref.proto);
//     it('Type', () => {
//         expectCode(createProtoObjectWithMethods(
//             'Type', getNestedProto(res).Type
//         ))
//     })
//     describe('nested', () => {
//         it('MapType', () => {
//             expectCode(createProtoObjectWithMethods(
//                 'Type_MapType', getNestedProto(res).Type.nested.MapType
//             ))
//         })
//     })
//     describe('typeHash (Long)', () => {
//         it('CheckedExpr', () => {
//             expectCode(createProtoObjectWithMethods(
//                 'CheckedExpr', getNestedProto(res).CheckedExpr
//             ))
//         })
//     })
// });

describe('services', () => {
    it('osmosis/gamm/v1beta1/tx', () => {
        const ref = store.findProto('osmosis/gamm/v1beta1/tx.proto');
        const res = traverse(store, ref);
        // expect(strip(res)).toMatchSnapshot();
        const parsed = parse(store, ref);
        const gen = generate(t.program(parsed.body));
        expect(gen.code).toMatchSnapshot();
    });
});

describe('nested', () => {

    it('google/api/expr/v1alpha1/checked', () => {
        const ref = store.findProto('google/api/expr/v1alpha1/checked.proto');
        const res = traverse(store, ref);
        expect(strip(res)).toMatchSnapshot();
        // const parsed = parse(store, ref.proto, res);

        // NOTICE using the traversed parse!
        const parsed = parse(store, ref);
        const gen = generate(t.program(parsed.body));
        expect(gen.code).toMatchSnapshot();
    });
});
