import { getNestedProto } from '@cosmology/utils';
import { InterfaceTypeUrlMap } from '@cosmology/types';
import { expectCode, getTestProtoStore } from '../../../../../test-utils/'
import { ProtoParseContext } from '../../../context';
import { createObjectWithMethods } from '../../../object';
import { createInterfaceDecoder, createInterfaceDecoderHelper } from '../decoder';

const store = getTestProtoStore();
store.options.aminoEncoding.useLegacyInlineEncoding = false;
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
        queryContext.options.interfaces!.useUseInterfacesParams = false

        expectCode(createInterfaceDecoder(queryContext, queryRef, 'PoolI'));
    });
    it('PoolI', () => {
        queryContext.options.interfaces!.useUseInterfacesParams = true

        expectCode(createInterfaceDecoderHelper(
            queryContext,
            'PoolI_InterfaceDecoder',
            typeMap['PoolI']
        ));
    });
    it('objects', () => {
        queryContext.options.interfaces!.useUseInterfacesParams = false

        expectCode(createObjectWithMethods(
            queryContext,
            'QueryPoolsResponse',
            getNestedProto(queryRef.traversed).QueryPoolsResponse
        ));
    });
});
