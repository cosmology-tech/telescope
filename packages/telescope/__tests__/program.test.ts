import generate from '@babel/generator';
import * as t from '@babel/types';
import { tmpdir } from 'os';
import { pascal } from 'case';
import { join } from 'path';
import {
    TSProtoStore
} from '../src'
import { snake, camel } from 'case';

const protoPath = __dirname + '/../__fixtures__/chain1'
const outPath = join(tmpdir(), 'chain1');

const program = new TSProtoStore({
    protoPath, outPath, plugins: [
        {
            name: 'aminoCasing',
            plugin: ({ protoPackage }) => {
                if (protoPackage.startsWith('osmosis')) {
                    return camel;
                }
                return snake;
            }
        }
    ]
});

it('packages', async () => {
    const superfluid = program.findFilesOfPackage('osmosis.superfluid');
    const gamm = program.findFilesOfPackage('osmosis.gamm.v1beta1');
    expect(superfluid.map(s => (s.toJSON()))).toMatchSnapshot();
    expect(gamm.map(s => (s.toJSON()))).toMatchSnapshot();
})

it('messages', async () => {
    const file = program.findInterfaceFile('MsgCreateBalancerPool');
    expect(file.getInterface('MsgCreateBalancerPool')).toBeTruthy();
});

it('interfaces', async () => {
    const file = program.findInterfaceFile('MsgJoinPool');
    expect(file.getInterface('MsgJoinPool')).toBeTruthy();
    const i = file.getInterface('MsgJoinPool').fields.reduce((m, v) => {
        m[v.name] = v.type;
        return m;
    }, {});
    expect(i).toMatchSnapshot();
});

it('files', async () => {
    const file = program.findInterfaceFile('MsgJoinPool');
    file.write();
});

it('VoteOption', async () => {
    const files = program.findInterfaceFiles('MsgVote');
    expect(files.length).toBe(3);
});

it('enums', async () => {
    const enum1 = program.getEnum('Exec');
    expect(enum1).toBeTruthy();
    const filename = enum1.filename;
    const file = program.getFile(filename);
    const enum2 = file.getEnum('Exec');
    expect(enum1).toEqual(enum2);
});

it('dependencies', async () => {
    const a = program.findDependency('Exec');
    const b = program.findDependency('VoteOption');
    const c = program.findDependency('MsgJoinPool');
    a.loc = a.loc.replace(program.protoPath, '')
    b.loc = b.loc.replace(program.protoPath, '')
    c.loc = c.loc.replace(program.protoPath, '')
    expect(a).toMatchSnapshot();
    expect(b).toMatchSnapshot();
    expect(c).toMatchSnapshot();
});

it('non-TX deps', async () => {
    const a = program.findDependency('EventGrant');
    a.loc = a.loc.replace(program.protoPath, '')
    expect(a).toMatchSnapshot();
});

it('Nested Props', async () => {
    const a = program.findDependency('Description');
    const b = program.findDependency('CommissionRates');
    a.loc = a.loc.replace(program.protoPath, '')
    b.loc = b.loc.replace(program.protoPath, '')
    expect(a).toMatchSnapshot();
    expect(b).toMatchSnapshot();
    const staking = program.findInterfaceFile('CommissionRates');
    const comm = staking.getInterface('CommissionRates');
    const desc = staking.getInterface('Description');
    expect(desc).toBeTruthy();
    expect(comm).toBeTruthy();
});

it('AminoHelpers', async () => {
    const a = program.findDependency('AminoHeight');
    a.loc = a.loc.replace(program.protoPath, '')
    expect(a).toMatchSnapshot();
});

it('program', async () => {
    program.write();
});
