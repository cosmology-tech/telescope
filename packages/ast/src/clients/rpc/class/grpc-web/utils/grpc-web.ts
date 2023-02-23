import { identifier } from '../../../../../utils';
import * as t from '@babel/types'
import { ProtoService } from '@osmonauts/types';

// second params for grpc-web method
export const metadata = identifier(
    'metadata',
    t.tSTypeAnnotation(
        t.tsTypeReference(
            t.tsQualifiedName(
                t.identifier('grpc'),
                t.identifier('Metadata')
            ),
        )
    ),
    true,
)

// this.Accounts = this.Accounts.bind(this);
// MARKED AS NOT DRY (used in rpc/lcd)
export const bindThis = (name: string) => {
    return t.expressionStatement(
        t.assignmentExpression(
            '=',
            t.memberExpression(
                t.thisExpression(),
                t.identifier(name)
            ),
            t.callExpression(
                t.memberExpression(
                    t.memberExpression(
                        t.thisExpression(),
                        t.identifier(name)
                    ),
                    t.identifier('bind')
                ),
                [
                    t.thisExpression()
                ]
            )
        )
    );
};

export const makeComment = (comment: string) => {
    return [{ type: 'CommentBlock', value: ` ${comment} ` }];
}

export const getRpcClassName = (service: ProtoService) => {
    return `${service.name}ClientImpl`;
}


