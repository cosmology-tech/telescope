import * as t from '@babel/types';
import { ProtoRef, ProtoService, ProtoServiceMethod } from "@subql/x-cosmology-types";
import { ProtoParseContext } from "../encoding";
interface DocumentRpcClient {
    service: DocumentService;
    method: ProtoServiceMethod;
    methodName: string;
    asts: t.Statement[];
}
export declare const documentRpcClient: (context: ProtoParseContext, service: DocumentService) => DocumentRpcClient[];
interface DocumentService {
    svc: ProtoService;
    ref: ProtoRef;
}
export declare const documentRpcClients: (context: ProtoParseContext, services: Record<string, ProtoRef[]>) => DocumentRpcClient[];
export declare const documentRpcClientsReadme: (context: ProtoParseContext, services: Record<string, ProtoRef[]>) => string;
export {};
