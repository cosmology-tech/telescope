import * as t from '@babel/types';
import {
  ProtoService,
  ProtoServiceMethod,
  ProtoServiceMethodInfo
} from '@osmonauts/types';
import { GenericParseContext } from '../../../encoding';
import {
  arrowFunctionExpression,
  callExpression,
  classMethod,
  classProperty,
  identifier,
  objectPattern
} from '../../../utils';

// this is the ONLY time ast uses babel/parser
import { parse } from '@babel/parser';

const getAstFromString = (str: string) => {
  const plugins = [
    'objectRestSpread',
    'classProperties',
    'optionalCatchBinding',
    'asyncGenerators',
    'decorators-legacy',
    'typescript',
    'dynamicImport'
  ];
  const ast = parse(str, {
    sourceType: 'module',
    // @ts-ignore
    plugins
  });
  return ast;
};

const getResponseTypeName = (context: GenericParseContext, name: string) => {
  return name + (context.options.useSDKTypes ? 'SDKType' : '');
};

const returnReponseType = (context: GenericParseContext, name: string) => {
  return t.tsTypeAnnotation(
    t.tsTypeReference(
      t.identifier('Promise'),
      t.tsTypeParameterInstantiation([
        t.tsTypeReference(t.identifier(getResponseTypeName(context, name)))
      ])
    )
  );
};

const firstLower = (s: string) => (s = s.charAt(0).toLowerCase() + s.slice(1));
const firstUpper = (s: string) => (s = s.charAt(0).toUpperCase() + s.slice(1));

const returnAwaitRequest = (
  context: GenericParseContext,
  responseType: string,
  // method: 'get' | 'post',
  hasOptions: boolean = false
) => {
  const args = [t.identifier('endpoint')];
  // if (method === 'post') {
  //     args.push(t.identifier('body'));
  // }

  if (hasOptions) {
    args.push(t.identifier('options'));
  }

  let returned: t.Expression = t.awaitExpression(
    callExpression(
      t.memberExpression(
        t.memberExpression(t.thisExpression(), t.identifier('req')),
        t.identifier('get')
      ),
      args,
      t.tsTypeParameterInstantiation([
        t.tsTypeReference(
          t.identifier(getResponseTypeName(context, responseType))
        )
      ])
    )
  );

  if (
    context.pluginValue('useSDKTypes') &&
    context.pluginValue('prototypes.methods.fromSDKJSON')
  ) {
    //useSDKTypes && prototypes.methods.fromSDKJSON
    returned = t.callExpression(
      t.memberExpression(
        t.identifier(responseType),
        t.identifier('fromSDKJSON')
      ),
      [returned]
    );
  } else if (
    !context.pluginValue('useSDKTypes') &&
    context.pluginValue('prototypes.methods.fromJSON')
  ) {
    //!useSDKTypes && prototypes.methods.fromJSON
    returned = t.callExpression(
      t.memberExpression(t.identifier(responseType), t.identifier('fromJSON')),
      [returned]
    );
  }

  return t.returnStatement(returned);
};

const makeOptionsObject = () => {
  return t.variableDeclaration('const', [
    t.variableDeclarator(
      identifier('options', t.tsTypeAnnotation(t.tsAnyKeyword())),
      t.objectExpression([
        t.objectProperty(t.identifier('params'), t.objectExpression([]))
      ])
    )
  ]);
};

const setParamOption = (
  context: GenericParseContext,
  name: string,
  svc: ProtoServiceMethod
) => {
  const flippedCasing = Object.keys(svc.info.casing).reduce((m, v) => {
    m[svc.info.casing[v]] = v;
    return m;
  }, {});

  const queryParam = flippedCasing[name] ? flippedCasing[name] : name;
  const param = svc.info.paramMap[name];

  // options.params.group_id = params.groupId;
  let expr = t.expressionStatement(
    t.assignmentExpression(
      '=',
      t.memberExpression(
        t.memberExpression(t.identifier('options'), t.identifier('params')),
        t.identifier(queryParam)
      ),
      t.memberExpression(t.identifier('params'), t.identifier(param))
    )
  );

  if (name === 'pagination') {
    context.addUtil('setPaginationParams');
    expr = t.expressionStatement(
      t.callExpression(t.identifier('setPaginationParams'), [
        t.identifier('options'),
        t.memberExpression(
          t.identifier('params'),
          t.identifier('pagination'),
          false
        )
      ])
    );
  }

  return t.ifStatement(
    t.binaryExpression(
      '!==',
      t.unaryExpression(
        'typeof',
        t.optionalMemberExpression(
          t.identifier('params'),
          t.identifier(param),
          false,
          true
        )
      ),
      t.stringLiteral('undefined')
    ),
    t.blockStatement([expr])
  );
};

// breaks a url string to prepare it for template strings
export const getUrlTemplateString = (url: string) => {
  const parts = url.split('/').filter((a) => a !== '');

  let cur = [];
  let strs = [];
  let atEnd = false;
  for (let p = 0; p < parts.length; p++) {
    const part = parts[p];
    if (/[{}]+/.test(part)) {
      if (p === parts.length - 1) atEnd = true;
      if (cur.length) {
        const vals = cur.join('/');
        strs.push(vals);
      } else {
        strs.push('/');
      }
      cur = [];
    } else {
      cur.push(part);
    }
  }
  if (cur.length) {
    strs.push(cur.join('/'));
  }
  strs = strs
    .filter((str) => str !== '')
    .map((v, i) => {
      if (i === 0) {
        if (!v.endsWith('/')) v = `${v}/`;
        return v;
      } else if (i === strs.length - 1) {
        if (atEnd) {
          // we want them to end with / if it's an "atEnd" el
          if (!v.endsWith('/')) v = `${v}/`;
          return v;
        }
        // they should all start with "/"
        if (!v.startsWith('/')) v = `/${v}`;
        return v;
      }
      if (!v.endsWith('/')) v = `${v}/`;
      if (!v.startsWith('/')) v = `/${v}`;
      return v;
    });

  return {
    strs,
    atEnd
  };
};

export const makeTemplateTag = (info: ProtoServiceMethodInfo) => {
  const route = info.url
    .split('/')
    .filter((a) => a !== '')
    .map((a) => {
      if (a.startsWith('{')) {
        return `$${a}`;
      } else {
        return a;
      }
    })
    .join('/');

  const parsed = getAstFromString(`\`${route}\``);
  // @ts-ignore
  const ast: t.TemplateLiteral = parsed.program.body[0].expression;

  ast.expressions = ast.expressions
    .map((identifier: t.Identifier) => {
      const name = info.casing?.[identifier.name]
        ? info.casing[identifier.name]
        : identifier.name;
      if (!name) {
        console.warn(route);
        console.warn('route type not yet supported');
        return;
      }
      return t.memberExpression(t.identifier('params'), t.identifier(name));
    })
    .filter(Boolean);
  return ast;
};

// do we need to set end prop in ast?
// we may want to t.templateElement!!!
export const makeTemplateTagLegacy = (info: ProtoServiceMethodInfo) => {
  if (!info.url) throw new Error('no URL on service method');

  const parts = getUrlTemplateString(info.url);
  const templateElts = parts.strs.map((raw) => t.templateElement({ raw }));

  // Number of TemplateLiteral quasis should be exactly one more than the number of expressions

  const pathParams = info.pathParams.map((param) => {
    const name = info.casing?.[param] ? info.casing[param] : param;
    return t.memberExpression(t.identifier('params'), t.identifier(name));
  });

  if (parts.atEnd) {
    templateElts.push(t.templateElement({ raw: '' }));
  }

  // THIS MEANS WE PROBABLY HAVE A BUG
  if (templateElts.length !== pathParams.length + 1) {
    templateElts.push(t.templateElement({ raw: '' }));
  }

  templateElts.forEach((el, n) => {
    if (n === templateElts.length - 1) {
      // remove trailing slash...
      el.value.raw = el.value.raw.replace(/\/$/, '');
    }
  });

  return t.templateLiteral(templateElts, pathParams);
};

const makeComment = (comment: string) => {
  return [{ type: 'CommentBlock', value: ` ${comment} ` }];
};

const buildRequestMethod = (
  context: GenericParseContext,
  serviceMethod: ProtoServiceMethod
) => {
  const methodName = firstLower(serviceMethod.name);
  const comment = serviceMethod.comment ?? serviceMethod.name;

  if (!serviceMethod.info) {
    throw new Error('No Service URL!');
  }

  const queryParams = serviceMethod.info.queryParams.map((param) => {
    return setParamOption(context, param, serviceMethod);
  });

  const optionsAst = [];
  if (serviceMethod.info.queryParams.length) {
    // options params object
    optionsAst.push(makeOptionsObject());
  }

  // parse field types
  Object.entries(serviceMethod.fields ?? {}).forEach(([key, value]) => {
    switch (value.parsedType.type) {
      case 'Type':
        // this gets the import for us and loads them into ctx
        // if later we need to get subtypes, we have it all w/ctx
        context.getTypeName(value);
      case 'native':
    }
  });

  const fieldNames = Object.keys(serviceMethod.fields ?? {});
  const hasParams = fieldNames.length > 0;
  const paramName = hasParams ? 'params' : '_params';
  let methodArgs: t.Identifier | t.AssignmentPattern = identifier(
    paramName,
    t.tsTypeAnnotation(
      t.tsTypeReference(t.identifier(serviceMethod.requestType))
    )
  );

  // if no params, then let's default to empty object for cleaner API
  if (!hasParams) {
    methodArgs = t.assignmentPattern(methodArgs, t.objectExpression([]));
  } else if (
    hasParams &&
    fieldNames.length === 1 &&
    fieldNames.includes('pagination')
  ) {
    // if only argument "required" is pagination
    // also default to empty
    methodArgs = t.assignmentPattern(
      methodArgs,
      t.objectExpression([
        t.objectProperty(
          t.identifier('pagination'),
          t.identifier('undefined'),
          false,
          false
        )
      ])
    );
  }

  const body = t.blockStatement([
    ...optionsAst,

    // if optional params not undefined
    ...queryParams,

    // endpoint
    t.variableDeclaration('const', [
      t.variableDeclarator(
        t.identifier('endpoint'),
        makeTemplateTag(serviceMethod.info)
      )
    ]),

    // return
    returnAwaitRequest(
      context,
      serviceMethod.responseType,
      // serviceMethod.info.method,
      serviceMethod.info.queryParams.length > 0
    )
  ]);

  if (context.pluginValue('classesUseArrowFunctions')) {
    return classProperty(
      t.identifier(methodName),
      arrowFunctionExpression(
        [methodArgs],
        body,
        t.tsTypeAnnotation(
          t.tsTypeReference(
            t.identifier('Promise'),
            t.tsTypeParameterInstantiation([
              t.tsTypeReference(
                t.identifier(
                  getResponseTypeName(context, serviceMethod.responseType)
                )
              )
            ])
          )
        ),
        true
      ),
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      makeComment(comment) as t.CommentLine[]
    );
  }

  return classMethod(
    'method',
    t.identifier(methodName),
    [methodArgs],
    body,
    returnReponseType(context, serviceMethod.responseType),
    makeComment(comment) as t.CommentLine[],
    false,
    false,
    false,
    true // async
  );
};

// MARKED AS NOT DRY (used in rpc/lcd)
const bindThis = (name: string) => {
  return t.expressionStatement(
    t.assignmentExpression(
      '=',
      t.memberExpression(t.thisExpression(), t.identifier(name)),
      t.callExpression(
        t.memberExpression(
          t.memberExpression(t.thisExpression(), t.identifier(name)),
          t.identifier('bind')
        ),
        [t.thisExpression()]
      )
    )
  );
};

const createLCDClientClassBody = (
  context: GenericParseContext,
  clientName: string,
  methods: (t.ClassMethod | t.ClassProperty)[],
  service?: ProtoService
) => {
  let boundMethods = [];
  // until the super() issue is figured out, we have to remove this
  if (service && !context.pluginValue('classesUseArrowFunctions')) {
    boundMethods = Object.keys(service.methods)
      .map((key) => {
        const method: ProtoServiceMethod = service.methods[key];
        if (typeof method.options?.['(google.api.http).get'] !== 'undefined') {
          const methodName = firstLower(method.name);
          return bindThis(methodName);
        }
      })
      .filter(Boolean);
  }

  return t.exportNamedDeclaration(
    t.classDeclaration(
      t.identifier(clientName),
      null,
      t.classBody([
        t.classProperty(
          t.identifier('req'),
          null,
          t.tsTypeAnnotation(t.tsTypeReference(t.identifier('LCDClient')))
        ),
        // constructor
        t.classMethod(
          'constructor',
          t.identifier('constructor'),
          [
            objectPattern(
              [
                t.objectProperty(
                  t.identifier('requestClient'),
                  t.identifier('requestClient'),
                  false,
                  true
                )
              ],
              t.tsTypeAnnotation(
                t.tsTypeLiteral([
                  t.tsPropertySignature(
                    t.identifier('requestClient'),
                    t.tsTypeAnnotation(
                      t.tsTypeReference(t.identifier('LCDClient'))
                    )
                  )
                ])
              )
            )
          ],
          t.blockStatement([
            t.expressionStatement(
              t.assignmentExpression(
                '=',
                t.memberExpression(t.thisExpression(), t.identifier('req')),
                t.identifier('requestClient')
              )
            ),
            /// methods
            ...boundMethods
          ])
        ),
        ...methods
      ])
    )
  );
};

export const createLCDClient = (
  context: GenericParseContext,
  service: ProtoService
) => {
  const methods = Object.keys(service.methods)
    .map((key) => {
      const method: ProtoServiceMethod = service.methods[key];
      if (
        method.info &&
        typeof method.options?.['(google.api.http).get'] !== 'undefined'
      ) {
        return buildRequestMethod(context, method);
      }
    })
    .filter(Boolean);
  context.addUtil('LCDClient');
  if (methods.length) {
    const clientName = 'LCDQueryClient';
    return createLCDClientClassBody(context, clientName, methods, service);
  }
};

export const createAggregatedLCDClient = (
  context: GenericParseContext,
  services: ProtoService[],
  clientName: string
) => {
  context.addUtil('LCDClient');
  const methods = services.reduce((m, service) => {
    const innerMethods = Object.keys(service.methods)
      .map((key) => {
        const method: ProtoServiceMethod = service.methods[key];
        if (
          method.info &&
          typeof method.options?.['(google.api.http).get'] !== 'undefined'
        ) {
          return buildRequestMethod(context, method);
        }
      })
      .filter(Boolean);
    return [...m, ...innerMethods];
  }, []);
  return createLCDClientClassBody(context, clientName, methods);
};
