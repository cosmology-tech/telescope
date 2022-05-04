import * as t from '@babel/types';
import { ProtoType } from '../../types';
export declare const fromJSONMethodFields: (name: string, proto: ProtoType) => t.ObjectProperty[];
export declare const fromJSONMethod: (name: string, proto: ProtoType) => t.ObjectMethod;
