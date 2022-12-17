import { createProtoType, createCreateProtoType } from './interface';

import { getNestedProto } from '@osmonauts/proto-parser'
import { ProtoParseContext } from '../context';
import { getTestProtoStore, expectCode, printCode } from '../../../test-utils';


describe('Cast', () => {
    const implementsStore = getTestProtoStore();
    implementsStore.options.aminoEncoding.useRecursiveV2encoding = true;
    implementsStore.options.prototypes.addTypeUrlToDecoders = true;
    implementsStore.options.interfaces.enabled = true;
    implementsStore.traverseAll();

    it('standard', async () => {
        const ref = implementsStore.findProto('osmosis/gamm/v1beta1/query.proto');
        const context = new ProtoParseContext(ref, implementsStore, implementsStore.options);
        // printCode(createProtoType(context, 'QueryPoolResponse', getNestedProto(ref.traversed).QueryPoolResponse));
        expectCode(createProtoType(context, 'QueryPoolResponse', getNestedProto(ref.traversed).QueryPoolResponse));
    });

    it('repeated', async () => {
        const ref = implementsStore.findProto('osmosis/gamm/v1beta1/query.proto');
        const context = new ProtoParseContext(ref, implementsStore, implementsStore.options);
        // printCode(createProtoType(context, 'QueryPoolsResponse', getNestedProto(ref.traversed).QueryPoolsResponse));
        expectCode(createProtoType(context, 'QueryPoolsResponse', getNestedProto(ref.traversed).QueryPoolsResponse));
    });
})


describe('Any', () => {
    const standardStore = getTestProtoStore();
    standardStore.options.aminoEncoding.useRecursiveV2encoding = false;
    standardStore.options.prototypes.addTypeUrlToDecoders = false;
    standardStore.options.interfaces.enabled = false;
    standardStore.traverseAll();

    it('standard', async () => {
        const ref = standardStore.findProto('osmosis/gamm/v1beta1/query.proto');
        const context = new ProtoParseContext(ref, standardStore, standardStore.options);
        // printCode(createProtoType(context, 'QueryPoolResponse', getNestedProto(ref.traversed).QueryPoolResponse));
        expectCode(createProtoType(context, 'QueryPoolResponse', getNestedProto(ref.traversed).QueryPoolResponse));
    });

    it('repeated', async () => {
        const ref = standardStore.findProto('osmosis/gamm/v1beta1/query.proto');
        const context = new ProtoParseContext(ref, standardStore, standardStore.options);
        // printCode(createProtoType(context, 'QueryPoolsResponse', getNestedProto(ref.traversed).QueryPoolsResponse));
        expectCode(createProtoType(context, 'QueryPoolsResponse', getNestedProto(ref.traversed).QueryPoolsResponse));
    });
})
