import { readSchemas } from 'cosmwasm-typescript-gen';
import { pascal } from 'case';
import { basename, dirname, join } from 'path';
import { readdirSync } from 'fs';

export const getDirectories = source =>
    readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

export const getContracts = () => {
    const chains = getDirectories('./contracts');
    const contracts = chains.reduce((m, v) => {
        const els = getDirectories(`./contracts/${v}`)
            .map(contractDirname => {
                return {
                    name: `${v}/${contractDirname}`,
                    value: `./contracts/${v}/${contractDirname}`
                }
            });
        return [...m, ...els];
    }, []);
    return contracts;
};

export const getContractSchemata = (schemata: any[], out: string, argv) => {
    return schemata.map(path => {
        const name = basename(path);
        const folder = basename(dirname(path));
        const contractName = pascal(name);
        const schemas = readSchemas({ schemaDir: path, argv });
        const outPath = join(out, folder);
        return {
            contractName, schemas, outPath
        };
    });
}