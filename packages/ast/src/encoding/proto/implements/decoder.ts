import * as t from '@babel/types';
import {
  InterfaceTypeUrlMap,
  ProtoRef,
  TraverseTypeUrlRef,
  TypeUrlRef
} from '@cosmology/types';
import { slugify } from '@cosmology/utils';
import { arrowFunctionExpression, identifier } from '../../../utils';
import { ProtoParseContext } from '../../context';
import { BinaryCoder } from '../../../utils/binary-coder-expression';

const getMapFromTypeUrlMap = (urlMap: InterfaceTypeUrlMap, name: string) => {
  return (
    urlMap?.[name]?.reduce((m, v) => {
      v.types.forEach((type) => {
        m[type.importAs] = type.typeUrl;
      });
      return m;
    }, {}) ?? {}
  );
};

const firstUpper = (s: string) => (s = s.charAt(0).toUpperCase() + s.slice(1));

export const getInterfaceDecoderName = (str: string) => {
  return firstUpper(slugify(str) + '_InterfaceDecoder');
};

export const createInterfaceDecoder = (
  context: ProtoParseContext,
  ref: ProtoRef,
  interfaceName: string
) => {
  const typeMap = context.store.getTypeUrlMap(ref);
  const typeRefs = typeMap[interfaceName];
  return createInterfaceDecoderHelper(
    context,
    getInterfaceDecoderName(interfaceName),
    typeRefs
  );
};

export const createInterfaceDecoderHelper = (
  context: ProtoParseContext,
  functionName: string,
  typeRefs: TraverseTypeUrlRef[]
) => {
  let useUseInterfacesParams = context.pluginValue("interfaces.useUseInterfacesParams");

  BinaryCoder.addUtil(context);

  // MARKED AS NOT DRY
  const allTypes: TypeUrlRef[] =
    typeRefs?.reduce((m, typeRef) => {
      return [...m, ...typeRef.types];
    }, []) ?? [];

  const returnTypes: string[] = allTypes.map((type) => type.importAs);
  const decodeMessages: string[] = allTypes.map((type) => type.typeUrl);
  const switches = returnTypes.map((returnType, i) => {
    let params: t.Expression[] = [
      t.memberExpression(t.identifier('data'), t.identifier('value')),
    ];


    if(useUseInterfacesParams){
      params.push(t.identifier('undefined'));
      params.push(t.booleanLiteral(true));
    }

    return t.switchCase(t.stringLiteral(decodeMessages[i]), [
      t.returnStatement(
        t.callExpression(
          t.memberExpression(t.identifier(returnType), t.identifier('decode')),
          params
        )
      )
    ]);
  });

  let decodeParams: t.Expression[] = [
    t.identifier('reader'),
    t.callExpression(
      t.memberExpression(
        t.identifier('reader'),
        t.identifier('uint32') // NOTE is it always uint32?
      ),
      []
    )
  ];

  if(useUseInterfacesParams){
    decodeParams.push(t.booleanLiteral(true));
  }

  return t.exportNamedDeclaration(
    t.variableDeclaration('const', [
      t.variableDeclarator(
        t.identifier(functionName),
        arrowFunctionExpression(
          [
            identifier(
              'input',
              t.tsTypeAnnotation(
                t.tsUnionType([
                  BinaryCoder.getReaderTypeRef(context),
                  t.tsTypeReference(t.identifier('Uint8Array'))
                ])
              ),
              false
            )
          ],
          // body
          t.blockStatement([
            /// READER
            t.variableDeclaration('const', [
              t.variableDeclarator(
                t.identifier('reader'),
                t.conditionalExpression(
                  t.binaryExpression(
                    'instanceof',
                    t.identifier('input'),
                    BinaryCoder.getReaderMemberExp(context)
                  ),
                  t.identifier('input'),
                  t.newExpression(BinaryCoder.getReaderMemberExp(context), [
                    t.identifier('input')
                  ])
                )
              )
            ]),

            // DATA
            t.variableDeclaration('const', [
              t.variableDeclarator(
                t.identifier('data'),
                t.callExpression(
                  t.memberExpression(
                    t.identifier('Any'),
                    t.identifier('decode')
                  ),
                  decodeParams
                )
              )
            ]),

            // SWITCH
            t.switchStatement(
              t.memberExpression(t.identifier('data'), t.identifier('typeUrl')),
              [
                ...switches,
                /////
                t.switchCase(null, [t.returnStatement(t.identifier('data'))])
              ]
            )
          ]),

          // return type
          t.tsTypeAnnotation(
            // do we need to use interfaces.useUnionTypes here ?
            t.tsUnionType([
              ...returnTypes.map((type) =>
                t.tsTypeReference(t.identifier(type))
              ),
              t.tsTypeReference(t.identifier('Any'))
            ])
          )
        )
      )
    ])
  );
};
