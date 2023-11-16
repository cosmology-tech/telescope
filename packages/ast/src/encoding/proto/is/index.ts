import * as t from "@babel/types";
import { ProtoParseContext } from "../../context";
import { ProtoField, ProtoType } from "@cosmology/types";
import {
  getAcceptedInterfacesTypes,
  identifier,
  objectMethod,
} from "../../../utils";
import {
  getFieldOptionality,
  getFieldOptionalityForDefaults,
  getOneOfs,
} from "../types";

const INPUT_PARAM = "o";

export const createInstanceOfTypeComparison = (args: {
  context: ProtoParseContext;
  fieldName: t.Expression;
  field: ProtoField;
  type: string;
}) => {
  const { fieldName, type } = args;

  return t.binaryExpression("instanceof", fieldName, t.identifier(type));
};

export const createScalarTypeComparison = (args: {
  context: ProtoParseContext;
  fieldName: t.Expression;
  field: ProtoField;
  type: string;
}) => {
  const { fieldName, type } = args;

  return t.binaryExpression(
    "===",
    t.unaryExpression("typeof", fieldName),
    t.stringLiteral(type)
  );
};

export const createFieldExistingTest = (args: {
  context: ProtoParseContext;
  fieldName: t.Expression;
  field: ProtoField;
}) => {
  const { fieldName } = args;

  return fieldName;
};

export const createProtoTypeComparison = (args: {
  context: ProtoParseContext;
  fieldName: t.Expression;
  field: ProtoField;
}) => {
  const { context, fieldName, field } = args;

  switch (field.type) {
    case "google.protobuf.Duration":
    case "Duration":
      const durationFormat = args.context.pluginValue(
        "prototypes.typingsFormat.duration"
      );

      if (durationFormat === "string") {
        return createScalarTypeComparison({
          context,
          fieldName,
          field,
          type: "string",
        });
      }
    case "google.protobuf.Timestamp":
    case "Timestamp":
      const timestampFormat = args.context.pluginValue(
        "prototypes.typingsFormat.timestamp"
      );

      if (timestampFormat === "date") {
        createInstanceOfTypeComparison({
          context,
          fieldName,
          field,
          type: "Date",
        });
      }
    case "Any":
    case "google.protobuf.Any":
      const lookupInterface =
        field.options?.["(cosmos_proto.accepts_interface)"];

      const acceptedTypes = getAcceptedInterfacesTypes(
        context,
        lookupInterface
      );

      const acceptedTypeNames = acceptedTypes.map(
        (acceptedType) => acceptedType.readAs
      );

      acceptedTypeNames.push("Any");

      return acceptedTypeNames.reduce<t.Expression>(
        (comparison, acceptedTypeName) => {
          const current = t.callExpression(
            t.memberExpression(
              t.identifier(acceptedTypeName),
              t.identifier("is")
            ),
            [fieldName]
          );

          return comparison
            ? t.logicalExpression("||", comparison, current)
            : current;
        },
        undefined
      );
  }

  const typeName = context.getTypeName(field);

  return t.callExpression(
    t.memberExpression(t.identifier(typeName), t.identifier("is")),
    [fieldName]
  );
};

export const createArrayTypeComparison = (args: {
  context: ProtoParseContext;
  fieldName: string;
  field: ProtoField;
  typeComparison?: t.Expression;
}) => {
  const { fieldName, typeComparison } = args;

  const isArrayExp = t.callExpression(
    t.memberExpression(t.identifier("Array"), t.identifier("isArray")),
    [t.memberExpression(t.identifier(INPUT_PARAM), t.identifier(fieldName))]
  );

  return typeComparison
    ? t.logicalExpression(
        "&&",
        isArrayExp,
        t.logicalExpression(
          "||",
          t.unaryExpression(
            "!",
            t.memberExpression(
              t.memberExpression(
                t.identifier(INPUT_PARAM),
                t.identifier(fieldName)
              ),
              t.identifier("length")
            )
          ),
          typeComparison
        )
      )
    : isArrayExp;
};

function getScalarExpression(args: {
  context: ProtoParseContext;
  fieldName: t.Expression;
  field: ProtoField;
}) {
  //TODO:: Date, timestamp, etc
  const { context, field, fieldName } = args;
  switch (field.type) {
    case "string":
      return createScalarTypeComparison({
        context,
        field,
        fieldName,
        type: "string",
      });
    case "bool":
      return createScalarTypeComparison({
        context,
        field,
        fieldName,
        type: "boolean",
      });
    case "float":
    case "double":
    case "int32":
    case "sint32":
    case "uint32":
    case "fixed32":
    case "sfixed32":
      return createScalarTypeComparison({
        context,
        field,
        fieldName,
        type: "number",
      });
    case "bytes":
      return createInstanceOfTypeComparison({
        context,
        field,
        fieldName,
        type: "Uint8Array",
      });
    case "int64":
    case "sint64":
    case "uint64":
    case "fixed64":
    case "sfixed64":
      return createScalarTypeComparison({
        context,
        field,
        fieldName,
        type: "bigint",
      });
  }

  return undefined;
}

export const createFieldTypeComparison = (args: {
  context: ProtoParseContext;
  fieldName: string;
  field: ProtoField;
}): t.Expression => {
  const { context, field, fieldName } = args;

  if (field.keyType) {
    return createFieldExistingTest({
      context,
      fieldName: t.memberExpression(
        t.identifier(INPUT_PARAM),
        t.identifier(fieldName)
      ),
      field,
    });
  }

  switch (field.parsedType.type) {
    case "Enum":
      if (field.rule === "repeated") {
        return createArrayTypeComparison({
          context,
          field,
          fieldName,
        });
      } else {
        return createFieldExistingTest({
          context,
          fieldName: t.memberExpression(
            t.identifier(INPUT_PARAM),
            t.identifier(fieldName)
          ),
          field,
        });
      }
    case "Type":
      if (field.rule === "repeated") {
        return createArrayTypeComparison({
          context,
          field,
          fieldName,
          typeComparison: createProtoTypeComparison({
            context,
            field,
            fieldName: t.memberExpression(
              t.memberExpression(
                t.identifier(INPUT_PARAM),
                t.identifier(fieldName)
              ),
              t.numericLiteral(0),
              true
            ),
          }),
        });
      } else {
        return createProtoTypeComparison({
          context,
          fieldName: t.memberExpression(
            t.identifier(INPUT_PARAM),
            t.identifier(fieldName)
          ),
          field,
        });
      }
  }

  if (field.rule === "repeated") {
    return createArrayTypeComparison({
      context,
      field,
      fieldName,
      typeComparison: getScalarExpression({
        context,
        field,
        fieldName: t.memberExpression(
          t.memberExpression(
            t.identifier(INPUT_PARAM),
            t.identifier(fieldName)
          ),
          t.numericLiteral(0),
          true
        ),
      }),
    });
  }

  const expr = getScalarExpression({
    context,
    field,
    fieldName: t.memberExpression(
      t.identifier(INPUT_PARAM),
      t.identifier(fieldName)
    ),
  });

  if (expr) {
    return expr;
  }

  throw new Error(
    `need to implement is (${field.type} rules[${field.rule}] name[${fieldName}])`
  );
};

export const isMethod = (args: {
  context: ProtoParseContext;
  name: string;
  proto: ProtoType;
  getFieldName?: (
    fieldName: string,
    field: ProtoField,
    interfaceName?: string,
    context?: ProtoParseContext
  ) => string;
}) => {
  const { context, name, proto, getFieldName } = args;

  const returnType = t.tsTypeAnnotation(
    t.tsTypePredicate(
      t.identifier(INPUT_PARAM),
      t.tsTypeAnnotation(t.tsTypeReference(t.identifier(name)))
    )
  );

  const fieldTypesComparison = Object.keys(
    proto.fields ?? {}
  ).reduce<t.Expression>((comparison, fieldName) => {
    const field = proto.fields[fieldName];
    const oneOfs = getOneOfs(proto);
    const isOneOf = oneOfs.includes(fieldName);
    const isOptional = getFieldOptionalityForDefaults(context, field, isOneOf);

    if (isOptional) {
      return comparison;
    }

    const fieldNameWithCase = getFieldName
      ? getFieldName(fieldName, field, name, context)
      : fieldName;

    const current = createFieldTypeComparison({
      context,
      field,
      fieldName: fieldNameWithCase,
    });

    return comparison
      ? t.logicalExpression("&&", comparison, current)
      : current;
  }, undefined);

  const typeUrlExpr = t.binaryExpression(
    "===",
    t.memberExpression(t.identifier(INPUT_PARAM), t.identifier("$typeUrl")),
    t.memberExpression(t.identifier(name), t.identifier("typeUrl"))
  );

  const method = objectMethod(
    "method",
    t.identifier("is"),
    [identifier(INPUT_PARAM, t.tsTypeAnnotation(t.tsAnyKeyword()), false)],
    t.blockStatement([
      t.returnStatement(
        t.logicalExpression(
          "&&",
          t.identifier(INPUT_PARAM),
          fieldTypesComparison
            ? t.logicalExpression("||", typeUrlExpr, fieldTypesComparison)
            : typeUrlExpr
        )
      ),
    ]),
    false,
    false,
    false,
    returnType
  );

  return method;
};
