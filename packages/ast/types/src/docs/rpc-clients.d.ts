import * as t from '@babel/types';
import { ProtoRef, ProtoService, ProtoServiceMethod } from "@cosmology/types";
import { ProtoStore } from "@cosmology/proto-parser";
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
export declare const documentRpcClients: (context: ProtoParseContext, myBase: string, store: ProtoStore) => DocumentRpcClient[];
export declare const documentRpcClientsReadme: (context: ProtoParseContext, myBase: string, store: ProtoStore) => string;
export {};
