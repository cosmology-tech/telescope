import * as t from '@babel/types';
import { ProtoParseContext } from '../../context';
import { ProtoType } from '@cosmology/types';
export declare const toProtoMsgMethod: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectMethod;
export declare const toProtoMethod: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectMethod;
