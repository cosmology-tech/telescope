import { GenericParseContext } from '../../../encoding';
import { ProtoService, ProtoServiceMethod } from '@osmonauts/types';
import * as t from '@babel/types'

export const createGRPCGatewayClient = (
    context: GenericParseContext,
    service: ProtoService
) => {
    return t.exportNamedDeclaration(
        t.tSInterfaceDeclaration(
            t.identifier(service.name),
            null,
            [],
            t.tsInterfaceBody(
                [
                    // todo: add methods
                ]
            )
        ),


    )
}