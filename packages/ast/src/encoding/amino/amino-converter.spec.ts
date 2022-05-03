import { aminoConverter } from './amino-converter';
import generate from '@babel/generator';
import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'
import { ProtoType } from '../types';
import { camel } from 'case';

const store = new ProtoStore(__dirname + '/../../../../../__fixtures__/chain1');

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

describe('osmosis/gamm/v1beta1/tx', () => {
    const ref = store.findProto('osmosis/gamm/v1beta1/tx.proto');
    const traversed = traverse(store, ref.proto);

    const proto = getNestedProto(traversed);

    const protos = Object.values(proto).filter(
        proto => proto.name.startsWith('Msg')
            &&
            !proto.name.endsWith('Response')
            &&
            proto.name !== 'Msg'
    );

    const protoTypes = Object.values(proto).filter(
        proto =>
            !proto.name.endsWith('Response')
            &&
            proto.name !== 'Msg'
    );

    // console.log(traversed.parsedImports);

    // make a recursive function
    // [ ] get direct imports
    // [ ] get indirect imports
    // [ ] get all imports

    // also for store
    // [ ] do we need store.traverse()
    // [ ] then when we do, store.findProto() uses traverse

    const context = Object.entries(traversed.parsedImports)
        .reduce((m, [key, symbols]) => {

            symbols.forEach(sym => {
                const ref = store.findProto(key);
                const traversed = traverse(store, ref.proto);
                console.log(traversed);
                const elem = store.findProtoObject(key, sym);
                // console.log({ elem })
                // console.log(traversed);
                m.types.push({
                    name: elem.name,
                    ...elem.toJSON()
                });
            });

            return m;
        }, {
            types: protoTypes, // hacky
            enums: []
        })

    it('MsgJoinPool', () => {
        printCode(aminoConverter({
            context,
            root: traversed,
            name: 'AminoConverter',
            protos,
            options: {
                aminoCasingFn: camel
            }
        }))
    })

});

