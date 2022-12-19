import { getNestedProto } from '@osmonauts/proto-parser';
import { InterfaceTypeUrlMap } from '@osmonauts/types';
import { expectCode, getTestProtoStore } from '../../../../../test-utils/'
import { ProtoParseContext } from '../../../context';
import { createObjectWithMethods } from '../../../object';
import { createInterfaceDecoder, createInterfaceDecoderHelper } from '../decoder';

const store = getTestProtoStore();
store.options.aminoEncoding.useRecursiveV2encoding = true;
store.options.interfaces.enabled = true;
store.traverseAll();

const typeMap: InterfaceTypeUrlMap = {
    PoolI: [
        {
            ref: 'a/b/c.proto',
            pkg: 'a.b.c',
            types: [
                {
                    typeUrl: '/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool',
                    aminoType: 'osmo-sdk/StablePool',
                    type: 'Pool',
                    importAs: 'Pool1'
                },
                {
                    typeUrl: '/osmosis.gamm.v1beta1.Pool',
                    aminoType: 'osmo-sdk/Pool',
                    type: 'Pool',
                    importAs: 'Pool2'
                }
            ]
        }
    ]
};

describe('PoolI', () => {
    const queryRef = store.findProto('osmosis/gamm/v1beta1/query.proto');
    const queryContext = new ProtoParseContext(queryRef, store, store.options);
    it('getMapFromTypeUrlMap', () => {
        expectCode(createInterfaceDecoder(queryContext, queryRef, 'PoolI'));
    });
    it('PoolI', () => {
        expectCode(createInterfaceDecoderHelper(
            queryContext,
            'PoolI_InterfaceDecoder',
            typeMap['PoolI']
        ));
    });
    it('objects', () => {
        expectCode(createObjectWithMethods(
            queryContext,
            'QueryPoolsResponse',
            getNestedProto(queryRef.traversed).QueryPoolsResponse
        ));
    });
});
