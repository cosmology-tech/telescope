import * as t from '@babel/types';
import { ProtoType } from '../../types';
import { AminoOptions } from '../amino-converter';
import { AminoParseContext } from '../utils';
interface fromAminoJSON {
    context: AminoParseContext;
    proto: ProtoType;
    options: AminoOptions;
}
export declare const fromAminoJsonMethod: ({ context, proto, options }: fromAminoJSON) => t.ArrowFunctionExpression;
export {};
