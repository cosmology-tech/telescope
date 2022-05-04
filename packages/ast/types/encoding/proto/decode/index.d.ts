import * as t from '@babel/types';
import { ProtoType } from '../types';
export declare const decodeMethodFields: (name: string, proto: ProtoType) => t.SwitchCase[];
export declare const decodeMethod: (name: string, proto: ProtoType) => t.ObjectMethod;
