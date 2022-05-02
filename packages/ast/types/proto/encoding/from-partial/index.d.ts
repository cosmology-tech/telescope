import * as t from '@babel/types';
import { ProtoType } from '../../types';
export declare const protoFromPartialMethodFields: (name: string, proto: ProtoType) => t.ExpressionStatement[];
export declare const protoFromPartialMethod: (name: string, proto: ProtoType) => t.ObjectMethod;
