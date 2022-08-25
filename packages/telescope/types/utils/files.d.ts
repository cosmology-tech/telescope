import * as t from '@babel/types';
import { TelescopeOptions } from '@osmonauts/types';
export declare const writeAstToFile: (options: TelescopeOptions, program: t.Statement[], filename: string) => void;
export declare const writeContentToFile: (options: TelescopeOptions, content: string, filename: string) => void;
