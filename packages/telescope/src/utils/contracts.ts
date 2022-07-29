import { readSchemas } from '@cosmwasm/ts-codegen';
import { pascal } from 'case';
import { basename, dirname, join } from 'path';
import { readFileSync, readdirSync } from 'fs';

export const getDirectories = source =>
    readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

export const getContracts = () => {
    const contracts = getDirectories('./contracts')
        .map(contractDirname => {
            return {
                name: `${contractDirname}`,
                value: `./contracts/${contractDirname}`
            }
        });
    return contracts;
};

export const getContractSchemata = (schemata: any[], out: string, argv) => {
    return schemata.map(path => {
        const pkg = JSON.parse(readFileSync(join(path, 'package.json'), 'utf-8'));
        const name = basename(path);
        const folder = basename(dirname(path));
        const contractName = pascal(pkg.contract) || pascal(name);
        const schemas = readSchemas({ schemaDir: path, argv });
        const outPath = join(out, folder);
        return {
            contractName, schemas, outPath
        };
    });
}