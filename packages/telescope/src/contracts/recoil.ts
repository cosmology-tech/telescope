import { prompt } from '../prompt';
import { recoil } from 'cosmwasm-typescript-gen';
import { getContracts, getContractSchemata } from '../utils/contracts';

export default async (argv) => {
    const contracts = getContracts();

    const questions = [
        {
            _: true,
            type: 'checkbox',
            name: 'schema',
            message: 'which directory contains the the Rust contracts?',
            choices: contracts
        },
        {
            _: true,
            type: 'path',
            name: 'out',
            message: 'where is the output directory?',
            default: './src/contracts'
        }
    ];

    let { schema, out } = await prompt(questions, argv);
    if (!Array.isArray(schema)) schema = [schema];

    const s = getContractSchemata(schema, out, argv);
    s.forEach(async ({ contractName, schemas, outPath }) => {
        await recoil(contractName, schemas, outPath);
    });
};