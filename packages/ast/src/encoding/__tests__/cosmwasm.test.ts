import { getNestedProto } from '@subql/x-cosmology-utils';
import { defaultTelescopeOptions } from '@subql/x-cosmology-types';
import { expectCode, getTestProtoStore } from '../../../test-utils/'
import { AminoParseContext, ProtoParseContext } from '../context';
import { createAminoConverter } from '../amino/index';

const store = getTestProtoStore();
store.traverseAll();

describe('cosmwasm/wasm/v1/tx', () => {
    const ref = store.findProto('cosmwasm/wasm/v1/tx.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    const aminoCtx = new AminoParseContext(ref, store, defaultTelescopeOptions);
    context.options.prototypes.typingsFormat.timestamp = 'date';
    context.options.aminoEncoding.useLegacyInlineEncoding = true;
    aminoCtx.options.prototypes.typingsFormat.timestamp = 'date';
    aminoCtx.options.aminoEncoding.useLegacyInlineEncoding = true;

    it('MsgExecuteContract', () => {
        expectCode(createAminoConverter({
            context: aminoCtx,
            root: ref.proto,
            name: 'AminoConverter',
            protos: [getNestedProto(ref.traversed).MsgExecuteContract]
        }));
    });
    it('MsgInstantiateContract', () => {
        expectCode(createAminoConverter({
            context: aminoCtx,
            root: ref.proto,
            name: 'AminoConverter',
            protos: [getNestedProto(ref.traversed).MsgInstantiateContract]
        }));
    });
    it('MsgStoreCode', () => {
        expectCode(createAminoConverter({
            context: aminoCtx,
            root: ref.proto,
            name: 'AminoConverter',
            protos: [getNestedProto(ref.traversed).MsgStoreCode]
        }));
    });
    it('MsgMigrateContract', () => {
        expectCode(createAminoConverter({
            context: aminoCtx,
            root: ref.proto,
            name: 'AminoConverter',
            protos: [getNestedProto(ref.traversed).MsgMigrateContract]
        }));
    });
});