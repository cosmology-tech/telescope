import * as t from "@babel/types";
import { classProperty, identifier } from "../../../utils";
import { GenericParseContext } from "../../../encoding";

export const createInstantRpcInterface = (
  name: string,
  extendInterfaces: {
    importedVarName: string;
    interfaceName: string;
  }[]
) => {
  return t.exportNamedDeclaration(
    t.tsInterfaceDeclaration(
      t.identifier(name),
      null,
      extendInterfaces.map((item) =>
        t.tsExpressionWithTypeArguments(
          t.identifier(`${item.importedVarName}.${item.interfaceName}`)
        )
      ),
      t.tsInterfaceBody([])
    )
  );
};

export const createInstantRpcClass = (
  context: GenericParseContext,
  name: string,
  instantMapping: {
    [key: string]: {
      methodName: string;
      importedVarName: string;
      comment?: string;
    };
  }
) => {
  context.addUtil("Rpc");

  return t.exportNamedDeclaration(
    t.classDeclaration(
      t.identifier(name),
      null,
      t.classBody([
        classProperty(
          t.identifier("rpc"),
          null,
          t.tsTypeAnnotation(t.tsTypeReference(t.identifier("Rpc"))),
          null,
          false,
          false,
          true
        ),

        // Constructor
        t.classMethod(
          "constructor",
          t.identifier("constructor"),
          [
            identifier(
              "rpc",
              t.tsTypeAnnotation(t.tsTypeReference(t.identifier("Rpc")))
            ),
          ],
          t.blockStatement([
            t.expressionStatement(
              t.assignmentExpression(
                "=",
                t.memberExpression(t.thisExpression(), t.identifier("rpc")),
                t.identifier("rpc")
              )
            ),
            ...Object.keys(instantMapping).map((methodAlias) => {
              const mapping = instantMapping[methodAlias];

              return t.expressionStatement(
                t.assignmentExpression(
                  "=",
                  t.memberExpression(
                    t.thisExpression(),
                    t.identifier(methodAlias)
                  ),
                  t.memberExpression(
                    t.callExpression(
                      t.memberExpression(
                        t.identifier(mapping.importedVarName),
                        t.identifier("createClientImpl")
                      ),
                      [t.identifier("rpc")]
                    ),
                    t.identifier(mapping.methodName)
                  )
                )
              );
            }),
          ]),
          false
        ),
      ]),
      []
    )
  );
};
