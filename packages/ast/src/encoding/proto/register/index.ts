import * as t from "@babel/types";
import { ProtoParseContext } from "../../context";
import { ProtoType } from "@cosmology/types";
import {
    getAcceptedInterfacesTypes,
    identifier,
    objectMethod,
} from "../../../utils";
import { createRegisterAminoProtoMapping, createRegisterObject } from "./utils";

export * from "./utils";

export const registerTypeUrlMethod = (args: {
    context: ProtoParseContext;
    name: string;
    proto: ProtoType;
}) => {
    const { context, name, proto } = args;

    const methodName = "registerTypeUrl";

    const registerStats = Object.keys(proto.fields ?? {}).reduce<t.Statement[]>(
        (statements, fieldName) => {
            const field = proto.fields[fieldName];

            if (field.parsedType.type === "Type") {
                switch (field.type) {
                    case "google.protobuf.Duration":
                    case "Duration":
                    case "google.protobuf.Timestamp":
                    case "Timestamp":
                        return statements;
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

                        const typeName = context.getTypeName(field);
                        acceptedTypeNames.push(typeName);

                        return acceptedTypeNames.reduce<t.Statement[]>(
                            (states, acceptedTypeName) => {
                                return [
                                    ...states,
                                    createRegisterObject(
                                        context,
                                        acceptedTypeName,
                                        proto
                                    ),
                                    createRegisterAminoProtoMapping(
                                        context,
                                        acceptedTypeName,
                                        proto
                                    ),
                                    createRegisterType(acceptedTypeName),
                                ].filter(Boolean);
                            },
                            []
                        );
                }

                const typeName = context.getTypeName(field);

                return [...statements, createRegisterType(typeName)].filter(
                    Boolean
                );
            }

            return statements;
        },
        []
    );

    const method = objectMethod(
        "method",
        t.identifier(methodName),
        [],
        t.blockStatement(registerStats ?? [])
    );

    return method;
};

export const createRegisterType = (typeName: string) => {
    if (typeName === "Any") {
        return;
    }

    return t.expressionStatement(
        t.callExpression(
            t.memberExpression(
                t.identifier(typeName),
                t.identifier("registerTypeUrl")
            ),
            []
        )
    );
};
