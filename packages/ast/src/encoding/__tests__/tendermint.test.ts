import { getNestedProto } from '@osmonauts/proto-parser';
import { defaultTelescopeOptions } from '@osmonauts/types';
import { ProtoStore } from '@osmonauts/proto-parser'
import { expectCode } from '../../../test-utils/'
import { AminoParseContext, ProtoParseContext } from '../context';
import { createProtoType } from '..';
import { createObjectWithMethods } from '../object';
import { createAminoConverter } from '../amino/index';

const store = new ProtoStore([__dirname + '/../../../../../__fixtures__/chain1']);
store.traverseAll();

describe('ibc/lightclients/tendermint/v1/tendermint', () => {
    const ref = store.findProto('ibc/lightclients/tendermint/v1/tendermint.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    const aminoCtx = new AminoParseContext(ref, store, defaultTelescopeOptions);
    describe('duration', () => {
        beforeAll(() => {
            context.options.useDuration = 'duration';
            aminoCtx.options.useDuration = 'duration';
        });
        it('interface', () => {
            expectCode(createProtoType(context, 'ClientState',
                getNestedProto(ref.traversed).ClientState
            ));
        });
        it('proto', () => {
            expectCode(createObjectWithMethods(context, 'ClientState',
                getNestedProto(ref.traversed).ClientState
            ));
        });
        // it('amino', () => {
        //     expectCode(createAminoConverter({
        //         context: aminoCtx,
        //         root: ref.proto,
        //         name: 'AminoConverter',
        //         protos: [getNestedProto(ref.traversed).ClientState]
        //     }));
        // });
    });
    describe('string', () => {
        beforeAll(() => {
            context.options.useDuration = 'string';
            aminoCtx.options.useDuration = 'string';
        });
        it('interface', () => {
            expectCode(createProtoType(context, 'ClientState',
                getNestedProto(ref.traversed).ClientState
            ));
        });
        it('proto', () => {
            expectCode(createObjectWithMethods(context, 'ClientState',
                getNestedProto(ref.traversed).ClientState
            ));
        });
        // it('amino', () => {
        //     expectCode(createAminoConverter({
        //         context: aminoCtx,
        //         root: ref.proto,
        //         name: 'AminoConverter',
        //         protos: [getNestedProto(ref.traversed).ClientState]
        //     }));
        // });
    })
});