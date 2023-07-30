import * as t from '@babel/types';
import { ProtoParseContext } from '../../context';
import { ProtoType } from '@cosmology/types';
export declare const fromProtoMsgMethod: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectMethod;
