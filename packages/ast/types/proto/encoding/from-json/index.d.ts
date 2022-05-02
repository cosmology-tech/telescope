import * as t from '@babel/types';
import { ProtoType } from '../../types';
export declare const protoFromJSONMethodFields: (name: string, proto: ProtoType) => t.ObjectProperty[];
export declare const protoFromJSONMethod: (name: string, proto: ProtoType) => t.ObjectMethod;
