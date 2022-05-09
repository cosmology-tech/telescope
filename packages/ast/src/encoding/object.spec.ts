import { createObjectWithMethods as create } from './object';
import generate from '@babel/generator';
import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'
import { ProtoParseContext } from './context';

const store = new ProtoStore(__dirname + '/../../../../__fixtures__/chain1');

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

const createObjectWithMethods = (name: string, proto: any) => {
    return create(new ProtoParseContext(), name, proto);
}


describe('osmosis/gamm/v1beta1/tx', () => {
    const ref = store.findProto('osmosis/gamm/v1beta1/tx.proto');
    const res = traverse(store, ref);
    it('MsgJoinPool', () => {
        expectCode(createObjectWithMethods(
            'MsgJoinPool', getNestedProto(res).MsgJoinPool
        ))
    })
    it('MsgSwapExactAmountOut', () => {
        expectCode(createObjectWithMethods(
            'MsgSwapExactAmountOut', getNestedProto(res).MsgSwapExactAmountOut
        ))
    })
    it('MsgSwapExactAmountIn', () => {
        expectCode(createObjectWithMethods(
            'MsgSwapExactAmountIn', getNestedProto(res).MsgSwapExactAmountIn
        ))
    })

});

describe('google/api/expr/conformance/v1alpha1/conformance_service', () => {
    const ref = store.findProto('google/api/expr/conformance/v1alpha1/conformance_service.proto');
    const res = traverse(store, ref);
    it('ParseRequest', () => {
        expectCode(createObjectWithMethods(
            'ParseRequest', getNestedProto(res).ParseRequest
        ))
    })
});

describe('google/api/servicecontrol/v1/log_entry', () => {
    const ref = store.findProto('google/api/servicecontrol/v1/log_entry.proto');
    const res = traverse(store, ref);
    it('LogEntry', () => {
        expectCode(createObjectWithMethods(
            'LogEntry', getNestedProto(res).LogEntry
        ))
    })
});

describe('google/api/expr/v1alpha1/syntax', () => {
    const ref = store.findProto('google/api/expr/v1alpha1/syntax.proto');
    const res = traverse(store, ref);
    it('Constant', () => {
        expectCode(createObjectWithMethods(
            'Constant', getNestedProto(res).Constant
        ))
    })
});

describe('cosmos/tx/signing/v1beta1/signing', () => {
    const ref = store.findProto('cosmos/tx/signing/v1beta1/signing.proto');
    const res = traverse(store, ref);
    it('SignatureDescriptors', () => {
        expectCode(createObjectWithMethods(
            'SignatureDescriptors', getNestedProto(res).SignatureDescriptors
        ))
    })
    it('SignatureDescriptor', () => {
        expectCode(createObjectWithMethods(
            'SignatureDescriptor', getNestedProto(res).SignatureDescriptor
        ))
    })
});

describe('cosmos/tx/v1beta1/tx', () => {
    const ref = store.findProto('cosmos/tx/v1beta1/tx.proto');
    const res = traverse(store, ref);
    it('AuxSignerData', () => {
        expectCode(createObjectWithMethods(
            'AuxSignerData', getNestedProto(res).AuxSignerData
        ))
    })
    it('ModeInfo_Multi', () => {
        expectCode(createObjectWithMethods(
            'ModeInfo_Multi', getNestedProto(res).ModeInfo
        ))
    })
});

describe('google/api/expr/v1alpha1/checked', () => {
    const ref = store.findProto('google/api/expr/v1alpha1/checked.proto');
    const res = traverse(store, ref);
    it('Type', () => {
        expectCode(createObjectWithMethods(
            'Type', getNestedProto(res).Type
        ))
    })
    describe('nested', () => {
        it('MapType', () => {
            expectCode(createObjectWithMethods(
                'Type_MapType', getNestedProto(res).Type.nested.MapType
            ))
        })
    })
    describe('Decl_FunctionDecl_Overload', () => {
        it('MapType', () => {
            expectCode(createObjectWithMethods(
                'Decl_FunctionDecl_Overload', getNestedProto(res).Decl.nested.FunctionDecl.nested.Overload
            ))
        })
    })
    describe('typeHash (Long)', () => {
        it('CheckedExpr', () => {
            expectCode(createObjectWithMethods(
                'CheckedExpr', getNestedProto(res).CheckedExpr
            ))
        })
    })
});

it('google/api/expr/v1beta1/source', () => {
    const ref = store.findProto('google/api/expr/v1beta1/source.proto');
    const res = traverse(store, ref);
    expectCode(createObjectWithMethods(
        'SourceInfo', getNestedProto(res).SourceInfo
    ))
});

it('cosmwasm/wasm/v1/proposal', () => {
    const ref = store.findProto('cosmwasm/wasm/v1/proposal.proto');
    const res = traverse(store, ref);
    expectCode(createObjectWithMethods(
        'PinCodesProposal', getNestedProto(res).PinCodesProposal
    ))
});

it('cosmwasm/wasm/v1/proposal', () => {
    const ref = store.findProto('cosmwasm/wasm/v1/proposal.proto');
    const res = traverse(store, ref);
    expectCode(createObjectWithMethods(
        'UnpinCodesProposal', getNestedProto(res).UnpinCodesProposal
    ))
});

it('cosmwasm/wasm/v1/query', () => {
    const ref = store.findProto('cosmwasm/wasm/v1/query.proto');
    const res = traverse(store, ref);
    expectCode(createObjectWithMethods(
        'QueryRawContractStateRequest', getNestedProto(res).QueryRawContractStateRequest
    ))
});

it('ibc/core/port/v1/query', () => {
    const ref = store.findProto('ibc/core/port/v1/query.proto');
    const res = traverse(store, ref);
    const context = new ProtoParseContext();
    expectCode(create(
        context,
        'QueryAppVersionRequest',
        getNestedProto(res).QueryAppVersionRequest
    ))
    expect(context.imports).toMatchSnapshot();
    // console.log(context.imports);
});

describe('google/api/quota', () => {
    it('keyType', () => {
        const ref = store.findProto('google/api/quota.proto');
        const res = traverse(store, ref);
        const context = new ProtoParseContext();
        expectCode(create(
            context,
            'MetricRule',
            getNestedProto(res).MetricRule
        ))
        expect(context.imports).toMatchSnapshot();
        // console.log(context.imports);
    });
});
