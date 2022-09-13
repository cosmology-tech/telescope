import { getTestProtoStore } from '../test-utils';
const store = getTestProtoStore();

describe('osmosis/gamm/v1beta1/tx', () => {
  store.traverseAll();
  const ref = store.findProto('osmosis/gamm/v1beta1/tx.proto');

  it('Coin', () => {
    const Coin = store.get(ref, 'Coin');
    expect(Coin.importType).toEqual('import')
    expect(Coin.obj.fields).toMatchSnapshot();
  })
  it('SwapAmountInRoute', () => {
    const SwapAmountInRoute = store.get(ref, 'SwapAmountInRoute');
    expect(SwapAmountInRoute.importType).toEqual('local')
    expect(SwapAmountInRoute.obj.fields).toMatchSnapshot();
  })
});

describe('google/api/expr/conformance/v1alpha1/conformance_service', () => {
  store.traverseAll();
  const ref = store.findProto('google/api/expr/conformance/v1alpha1/conformance_service.proto');

  it('Decl', () => {
    const Decl = store.get(ref, 'Decl');
    expect(Decl.importType).toEqual('import')
    expect(Decl.obj.fields).toMatchSnapshot();
  })
  it('ParsedExpr', () => {
    const ParsedExpr = store.get(ref, 'ParsedExpr');
    expect(ParsedExpr.importType).toEqual('import')
    expect(ParsedExpr.obj.fields).toMatchSnapshot();
  })

  it('CheckRequest', () => {
    const CheckRequest = store.get(ref, 'CheckRequest');
    expect(CheckRequest.importType).toEqual('local')
    expect(CheckRequest.obj.fields).toMatchSnapshot();
  })

  it('IdentDecl', () => {
    const CheckRequest = store.get(ref, 'CheckRequest');

    // nested could look like this...
    const ref2 = store.findProto(CheckRequest.obj.fields.typeEnv.import)
    const IdentDecl = store.get(ref2, 'IdentDecl');
    expect(IdentDecl.importType).toEqual('local')
    expect(IdentDecl.obj.fields).toMatchSnapshot();
  })
});

