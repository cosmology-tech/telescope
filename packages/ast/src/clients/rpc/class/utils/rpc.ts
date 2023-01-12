import { arrowFunctionExpression, classDeclaration, classMethod, classProperty, cleanComment, commentBlock, identifier, tsMethodSignature } from '../../../../utils';
import { ProtoService, ProtoServiceMethod } from '@osmonauts/types';

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