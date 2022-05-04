import * as t from '@babel/types';
import { ProtoType } from '../types';
export declare const fromPartialMethodFields: (name: string, proto: ProtoType) => t.ExpressionStatement[];
export declare const fromPartialMethod: (name: string, proto: ProtoType) => t.ObjectMethod;
