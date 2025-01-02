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

    const isImplementsInterface = Boolean(
        proto.options?.["(cosmos_proto.implements_interface)"]
    );

    const methodName = "registerTypeUrl";
    const typeNames = new Set<string>();

    let registerStats = Object.keys(proto.fields ?? {}).reduce<t.Statement[]>(
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
                                if (typeNames.has(acceptedTypeName)) {
                                    return states;
                                }

                                typeNames.add(acceptedTypeName);

                                return [
                                    ...states,
                                    createRegisterType(acceptedTypeName),
                                ].filter(Boolean);
                            },
                            []
                        );
                }

                const typeName = context.getTypeName(field);

                if (typeNames.has(typeName)) {
                    return statements;
                }

                typeNames.add(typeName);

                return [...statements, createRegisterType(typeName)].filter(
                    Boolean
                );
            }

            return statements;
        },
        []
    );

    if (isImplementsInterface) {
        registerStats = [
            createRegisterObject(context, name, proto),
            createRegisterAminoProtoMapping(context, name, proto),
            ...registerStats,
        ].filter(Boolean);
    }

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
