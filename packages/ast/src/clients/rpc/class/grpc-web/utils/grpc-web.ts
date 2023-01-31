import { identifier } from '../../../../../utils';
import * as t from '@babel/types'
import { ProtoService } from '@osmonauts/types';
import { GenericParseContext } from '../../../../../encoding';

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
    return [{ type: 'CommentBlock', value: ` ${comment} ` }]
}

export const getRpcClassName = (service: ProtoService) => {
    return `${service.name}ClientImpl`;
}

export const getProtoRequest = (methodName: string, context: GenericParseContext, service: ProtoService) => {

        const interfaceRequestName = 'Msg' + methodName;
        
        // get all the params of said methodName into an array
        const methodFields = Object.keys(service.methods[methodName].fields)
        // console.log(methodFields);
        let methodFieldsType = methodFields.map(key => {
            return  service.methods[methodName].fields[key].type
        })
        // console.log(methodFieldsType);
        

        const methods = methodFields
        .map(key => {
            console.log(key);
            console.log(service.methods[methodName].fields[key]);
            let typeOfProperties = service.methods[methodName].fields[key].type;
            if(typeOfProperties.includes(context.ref.proto.package) || typeOfProperties.length > 7){            
                //TO-DO: clean up and add import for required type 
                //TO-DO: add dynamic for not only msg type but also query type
                // context.addUtil 
                const cleanType = typeOfProperties.split('.');
                typeOfProperties =  cleanType[cleanType.length - 1]
            }

            if(service.methods[methodName].fields[key].rule == 'repeated') {
                return t.tsPropertySignature(
                    t.identifier(key),
                    t.tsTypeAnnotation(
                        t.tsArrayType(
                        t.tsTypeReference(
                                t.identifier(typeOfProperties)
                            )
                    ))
                )
            }
            
            return  t.tsPropertySignature(
                    t.identifier(key),
                    t.tsTypeAnnotation(
                        t.tsTypeReference(
                                t.identifier(typeOfProperties)
                            )
                    )
                )
            }
        )
            
        // });
    
    return t.exportNamedDeclaration(
        t.tsInterfaceDeclaration(
            t.identifier(interfaceRequestName),
            null,
            null,
            t.tsInterfaceBody(
                [
                    // t.tsPropertySignature(
                    //     t.identifier('granter'),
                    //     t.tsTypeAnnotation(
                    //         t.tsStringKeyword()
                    //     )
                    // ),
                    // t.tsPropertySignature(
                    //     t.identifier('grantee'),
                    //     t.tsTypeAnnotation(
                    //         t.tsStringKeyword()
                    //     )
                    // ),
                    // t.tsPropertySignature(
                    //     t.identifier('grant'),
                    //     t.tsTypeAnnotation(
                    //         t.tsTypeReference(
                    //             t.identifier('Grant')
                    //         )
                    //     )                        
                    // )
                    ...methods
                ]
            )
        )
    )
}
