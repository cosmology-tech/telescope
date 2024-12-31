import * as t from "@babel/types";
import { ProtoType } from "@cosmology/types";
import { ProtoParseContext } from "../../context";
import { getAminoTypeName, getTypeUrl } from "@cosmology/utils";

export const createRegisterObject = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType
) => {
    if (name === "Any") {
        return;
    }

    context.addUtil("GlobalDecoderRegistry");

    const typeUrl = getTypeUrl(context.ref.proto, proto);
    if (!typeUrl) return;

    return t.expressionStatement(
        t.callExpression(
            t.memberExpression(
                t.identifier("GlobalDecoderRegistry"),
                t.identifier("register")
            ),
            [
                t.memberExpression(t.identifier(name), t.identifier("typeUrl")),
                t.identifier(name),
            ]
        )
    );
};

export const createRegisterAminoProtoMapping = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType
) => {
    if (name === "Any") {
        return;
    }
    context.addUtil("GlobalDecoderRegistry");

    const str = getAminoTypeName(context, context.ref.proto, proto);
    if (!str || str.startsWith("/")) return;

    return t.expressionStatement(
        t.callExpression(
            t.memberExpression(
                t.identifier("GlobalDecoderRegistry"),
                t.identifier("registerAminoProtoMapping")
            ),
            [
                t.memberExpression(
                    t.identifier(name),
                    t.identifier("aminoType")
                ),
                t.memberExpression(t.identifier(name), t.identifier("typeUrl")),
            ]
        )
    );
};
