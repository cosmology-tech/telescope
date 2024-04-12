import * as t from "@babel/types";
import { identifier, objectMethod } from "../../../utils";
import { getFieldOptionality, getOneOfs } from "../../proto";
import { ProtoParseContext } from "../../context";
import { ProtoType, ProtoField } from "@cosmology/types";
import { arrayTypes, toTextualSig, ARRAY_VAR_NAME, MSG_VAR_NAME } from "./utils";
import { getPushTextualSigLine } from "../../../encoding/types";

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(
        `need to implement toTextualSig (${field.type} rules[${field.rule}] name[${name}])`
    );
};
export interface ToTextualSigMethod {
    context: ProtoParseContext;
    field: ProtoField;
    isOneOf: boolean;
    isOptional: boolean;
}

export const toTextualSigMethodFields = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType
) => {
    const oneOfs = getOneOfs(proto);
    const fields = Object.keys(proto.fields ?? {}).map((fieldName) => {
        const field = {
            name: fieldName,
            ...proto.fields[fieldName],
        };

        const isOneOf = oneOfs.includes(fieldName);
        const isOptional = getFieldOptionality(context, field, isOneOf);

        const args: ToTextualSigMethod = {
            context,
            field,
            isOneOf,
            isOptional,
        };

        if (field.rule === "repeated") {
            switch (field.type) {
                case "string":
                    return toTextualSig.array(args, arrayTypes.string());
                case "bool":
                    return toTextualSig.array(args, arrayTypes.bool());
                case "bytes":
                    return toTextualSig.array(args, arrayTypes.bytes());
                case "float":
                    return toTextualSig.array(args, arrayTypes.float());
                case "double":
                    return toTextualSig.array(args, arrayTypes.double());
                case "int32":
                    return toTextualSig.array(args, arrayTypes.int32());
                case "sint32":
                    return toTextualSig.array(args, arrayTypes.sint32());
                case "uint32":
                    return toTextualSig.array(args, arrayTypes.uint32());
                case "fixed32":
                    return toTextualSig.array(args, arrayTypes.fixed32());
                case "sfixed32":
                    return toTextualSig.array(args, arrayTypes.sfixed32());
                case "int64":
                    return toTextualSig.array(args, arrayTypes.int64(args));
                case "sint64":
                    return toTextualSig.array(args, arrayTypes.sint64(args));
                case "uint64":
                    return toTextualSig.array(args, arrayTypes.uint64(args));
                case "fixed64":
                    return toTextualSig.array(args, arrayTypes.fixed64(args));
                case "sfixed64":
                    return toTextualSig.array(args, arrayTypes.sfixed64(args));
                default:
                    switch (field.parsedType.type) {
                        case "Enum":
                            return toTextualSig.array(args, arrayTypes.enum());
                        case "Type":
                            return toTextualSig.array(
                                args,
                                arrayTypes.type(args)
                            );
                    }
                    return needsImplementation(fieldName, field);
            }
        }

        if (field.keyType) {
            switch (field.keyType) {
                case "string":
                case "int32":
                case "sint32":
                case "uint32":
                case "fixed32":
                case "sfixed32":
                case "int64":
                case "sint64":
                case "uint64":
                case "fixed64":
                case "sfixed64":
                    return toTextualSig.keyHash(args);
                default:
                    return needsImplementation(fieldName, field);
            }
        }

        switch (field.type) {
            case "string":
                return toTextualSig.string(args);
            case "bytes":
                return toTextualSig.bytes(args);
            case "bool":
                return toTextualSig.bool(args);
            case "double":
                return toTextualSig.double(args);
            case "float":
                return toTextualSig.float(args);
            case "int32":
                return toTextualSig.int32(args);
            case "sint32":
                return toTextualSig.sint32(args);
            case "uint32":
                return toTextualSig.uint32(args);
            case "fixed32":
                return toTextualSig.fixed32(args);
            case "sfixed32":
                return toTextualSig.sfixed32(args);
            case "int64":
                return toTextualSig.int64(args);
            case "sint64":
                return toTextualSig.sint64(args);
            case "uint64":
                return toTextualSig.uint64(args);
            case "fixed64":
                return toTextualSig.fixed64(args);
            case "sfixed64":
                return toTextualSig.sfixed64(args);
            // TODO: handle Date and Duration choices
            case "google.protobuf.Duration":
            case "Duration":
                return toTextualSig.duration(args);
            case "google.protobuf.Timestamp":
            case "Timestamp":
                return toTextualSig.timestamp(args);
            default:
                switch (field.parsedType.type) {
                    case "Enum":
                        return toTextualSig.enum(args);
                    case "Type":
                        return toTextualSig.type(args);
                }
                return needsImplementation(fieldName, field);
        }
    });
    return fields;
};

//   toTextualSig(message: EncodingTestForDontOmit, indent?: number, metadata?: DenomMetadata[]): TextualSigLine[] {
//     const results: TextualSigLine[] = [];
//     results.push({ "text": "MsgSend object", "indent": indent });
export const toTextualSigMethod = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType
) => {
    context.addUtil("DenomMetadata");
    context.addUtil("TextualSigLine");

    const fields = toTextualSigMethodFields(context, name, proto);
    let varName = MSG_VAR_NAME;
    if (!fields.length) {
        varName = "_";
    }

    return objectMethod(
        "method",
        t.identifier("toTextualSig"),
        [
            identifier(
                varName,
                t.tsTypeAnnotation(t.tsTypeReference(t.identifier(name)))
            ),
            identifier("indent", t.tsTypeAnnotation(t.tsNumberKeyword()), true),
            identifier(
                "metadata",
                t.tsTypeAnnotation(
                    t.tsArrayType(
                        t.tsTypeReference(t.identifier("DenomMetadata"))
                    )
                ),
                true
            ),
        ],
        t.blockStatement([
            t.variableDeclaration("const", [
                t.variableDeclarator(
                    identifier(
                        ARRAY_VAR_NAME,
                        t.tsTypeAnnotation(
                            t.tsArrayType(
                                t.tsTypeReference(
                                    t.identifier("TextualSigLine")
                                )
                            )
                        )
                    ),
                    t.arrayExpression([])
                ),
            ]),

            getPushTextualSigLine(
                ARRAY_VAR_NAME,
                t.stringLiteral(`${name} object`),
                t.identifier("indent")
            ),

            ...fields,

            // RETURN
            t.returnStatement(t.identifier(ARRAY_VAR_NAME)),
        ]),
        false,
        false,
        false,
        t.tsTypeAnnotation(
            t.tsArrayType(t.tsTypeReference(t.identifier("TextualSigLine")))
        )
    );
};
