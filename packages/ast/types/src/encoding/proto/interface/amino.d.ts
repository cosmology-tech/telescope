import * as t from '@babel/types';
import { ProtoType } from '@osmonauts/types';
import { ProtoParseContext } from '../../context';
import { CreateProtoTypeOptions } from '../../types';
export declare const createAminoTypeOptionsDefaults: CreateProtoTypeOptions;
export declare const createAminoType: (context: ProtoParseContext, name: string, proto: ProtoType, options?: CreateProtoTypeOptions) => t.ExportNamedDeclaration;
