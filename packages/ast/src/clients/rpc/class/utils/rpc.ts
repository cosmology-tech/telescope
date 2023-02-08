import { arrowFunctionExpression, classDeclaration, classMethod, classProperty, cleanComment, commentBlock, identifier, tsMethodSignature } from '../../../../utils';
import { ProtoService, ProtoServiceMethod } from '@osmonauts/types';
import * as t from '@babel/types'

const ensureOneSpaceEnd = (str) => {
    if (/[\s\n\t]$/.test(str)) return str;
    return `${str} `;
}

const ensureOneSpace = (str) => {
    if (/^[\s\n\t]+/.test(str)) return str;
    return ` ${str}`;
}

export const processRpcComment = (e: ProtoServiceMethod) => {
    const comment = e.comment;
    if (!comment) return '';
    if (!/[\n]+/.test(comment)) {
        return `*${ensureOneSpaceEnd(ensureOneSpace(cleanComment(comment)))}`
    }
    let lines = comment.split('\n');
    lines = ['*', ...lines, ' '];
    const comments = lines.map((line, i) => {
        if (i == 0) return line;
        if (i == (lines.length - 1)) return cleanComment(line);
        return ` *${ensureOneSpace(cleanComment(line))}`
    });
    return comments.join('\n');
};

export const cleanType = (ResponseType: string) => {
    // MARKED AS NOT DRY [google.protobuf names]
    // TODO some have google.protobuf.Any shows up... figure out the better way to handle this
    if (/\./.test(ResponseType)) {
        ResponseType = ResponseType.split('.')[ResponseType.split('.').length - 1];
    }

    return ResponseType;
}
export const returnReponseType = (ResponseType: string) => {

    ResponseType = cleanType(ResponseType);

    return t.tsTypeAnnotation(
        t.tsTypeReference(
            t.identifier('Promise'),
            t.tsTypeParameterInstantiation(
                [
                    t.tsTypeReference(
                        t.identifier(ResponseType)
                    )
                ]
            )
        )
    );
};

export const optionalBool = (
    hasParams: boolean,
    fieldNames: string[],
) => {
    if (!hasParams) { 
        return true; 
    } else if (hasParams && fieldNames.length === 1 && fieldNames.includes('pagination')) { 
        // if only argument "required" is pagination 
        // also default to empty 
        return true; 
    } 
    return false
}
