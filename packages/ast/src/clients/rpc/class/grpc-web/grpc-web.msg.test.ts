import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'
import { defaultTelescopeOptions, ProtoService } from '@osmonauts/types';
import { expectCode, getTestProtoStore, printCode } from '../../../../../test-utils';
import { GenericParseContext } from '../../../../encoding';
import { createGrpcClientInterface, createGrpcClientClass } from './grpc-web.msg';
import { getProtoRequest } from './utils';
import { Query } from '../../../../../../../__fixtures__/outputv2/cosmwasm/wasm/v1/query.rpc.Query';
const store = getTestProtoStore();
store.traverseAll();

it('test gRPC-web Msg Client', () => {
    const ref = store.findProto('cosmos/authz/v1beta1/tx.proto')
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Msg;
    
    const methodsName = Object.keys(service.methods)
    console.log(methodsName);
    
    /*
    // this is for getting properties and type of proto field
    
    for (let i = 0; i < methodsName.length; i++)   {
        
        // console.log(service.methods[methodsName[i]].name);  
        const methodFields = Object.keys(service.methods[methodsName[i]].fields)
        console.log(methodFields);
        for (let j = 0; j < methodFields.length; j++) {
            console.log(service.methods[methodsName[i]].fields[methodFields[j]])   
            // console.log(service.methods[methodsName[i]].fields[methodFields[j]].type);      
        }
    }
    */
    const context = new GenericParseContext(ref, store, store.options);
    // console.log(context.ref.proto.package);
    // printCode(createGrpcClientInterface(context, service));
    // printCode(createGrpcClientClass(context, service))
    printCode(getProtoRequest('Grant', context, service));
})