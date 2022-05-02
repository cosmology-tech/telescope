import * as t from '@babel/types';
import { ProtoType } from '../../types';
export declare const protoDecodeMethodFields: (name: string, proto: ProtoType) => t.SwitchCase[];
export declare const protoDecodeMethod: (name: string, proto: ProtoType) => t.ObjectMethod;
