export * from './classes';
export * from './plugin';
import { AminoExceptions } from '@osmonauts/ast-gen';
import { TelescopePlugin } from './classes';
interface TelescopeInput {
    protoPath: string;
    outPath: string;
    exceptions?: AminoExceptions;
    plugins?: TelescopePlugin[];
}
declare const _default: (input: TelescopeInput) => void;
export default _default;
