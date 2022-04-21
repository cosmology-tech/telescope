import { basename, dirname, extname, relative, resolve } from 'path';
import { join } from 'path';
import generate from '@babel/generator';
import { readFileSync, writeFileSync } from 'fs';
import { sync as glob } from 'glob';
import { sync as mkdirp } from 'mkdirp';
import babelTraverse from '@babel/traverse';
import { parse, ParserPlugin } from '@babel/parser';
import { registerDeps } from './plugin';
import mutator from './mutate';
import { snake } from 'case';
import { makeAutoObservable } from 'mobx';
import * as c from '@osmonauts/ast-gen';
import * as t from '@babel/types';
import * as dotty from 'dotty';
import {
  Enum,
  Mutation,
  MessageSchema,
  EnumConverter,
  Interface,
  Field,
  AminoExceptions
} from '@osmonauts/ast-gen';
import { aminoHelperCode } from './helpers';
import { parsePackage, recursiveModuleBundle } from './utils';

export interface FileStore {
  filename: string;
  code: string;
  program: TSProtoStore;
}

export interface OutFile {
  filename: string;
  ast: any;
}

export interface Import {
  filename: string;
  dep: string;
  import: string;
  type: string;
  node: any;
}

export interface GenericInterface {
  filename: string;
  node: any;
}

export interface TelescopePlugin {
  name: string;
  plugin: Function
}

const defaultPlugins: TelescopePlugin[] = [
  {
    name: 'aminoCasing',
    plugin: () => {
      return snake;
    }
  }
]
export class TSProtoStore {

  protoPath: string;
  outPath: string;
  paths: string[];

  files: TSFileStore[] = [];
  enums: Enum[] = [];

  plugins: TelescopePlugin[];

  exceptions: AminoExceptions;

  constructor(
    {
      protoPath,
      outPath,
      exceptions,
      plugins
    }
      :
      {
        protoPath: string,
        outPath: string,
        exceptions?: AminoExceptions,
        plugins?: TelescopePlugin[]
      }
  ) {
    this.outPath = resolve(outPath);
    this.protoPath = resolve(protoPath);
    this.paths = glob(this.protoPath + '/**/*.ts');
    this.plugins = plugins ?? defaultPlugins;
    this.exceptions = exceptions;
    // 1x loop through files get symbols
    this.load();

    this.files.push(new TSFileStore(join(this.protoPath, 'amino.helpers.ts'), aminoHelperCode(), this));

    // 2x loop through files mutate files[i].ast
    this.traverse();
    makeAutoObservable(this);
  }

  load(): void {
    this.paths.forEach((filename) => {
      this.loadFile(filename);
    });
  }

  write(): void {
    this.files.forEach((file) => {
      file.write();
    });
  }

  traverse(): void {
    this.files.forEach((file) => {
      file.traverse();
    });
  }

  loadFile(filename: string) {
    if (!!this.getFile(filename)) {
      return;
    }
    this.files.push(new TSFileStore(filename, null, this));
  }

  getFile(filename): TSFileStore {
    return this.files.find(file => file.filename === filename);
  }

  getDefinitions(): Interface[] {
    return this.files.reduce((m, file) => {
      return [...m, ...file.definitions];
    }, []);
  }

  getEnum(name: string): Enum {
    return this.enums.find(e => e.name === name);
  }

  addEnum(data: Enum): void {
    this.enums.push(data);
  }

  getPackages(): any {
    return this.files.reduce((m, file) => {
      if (file.protoPackage) {
        m[file.protoPackage] = m[file.protoPackage] || []
        m[file.protoPackage].push(file);
      }
      return m;
    }, {});
  }

  getPackagesBundled(): any {
    const objectified = {};
    const pkgs = this.getPackages();
    Object.keys(pkgs).forEach(key => {
      const files = pkgs[key];
      dotty.put(objectified, key, {
        pkg: key,
        files
      });
    });
    return objectified;
  }


  bundlePackages(): void {
    const allPackages = this.getPackagesBundled();
    Object.keys(allPackages).forEach(base => {
      const pkgs = allPackages[base];
      const bundleVariables = {};
      const bundleFile = join(this.protoPath, base, 'index.ts');
      const importPaths = [];
      parsePackage(pkgs, bundleFile, importPaths, bundleVariables);
      const body = recursiveModuleBundle(bundleVariables);
      this.writeFile(t.program([...importPaths, ...body]), bundleFile);
    });
  }

  bundleRootPackage(): void {
    const allPackages = this.getPackagesBundled();
    const bundleFile = join(this.protoPath, 'index.ts');
    const bundleVariables = {};
    const importPaths = [];

    Object.keys(allPackages).forEach(base => {
      const pkgs = allPackages[base];
      parsePackage(pkgs, bundleFile, importPaths, bundleVariables);
    });

    const body = recursiveModuleBundle(bundleVariables);
    this.writeFile(t.program([...importPaths, ...body]), bundleFile);
  }

  protoPathToOutPath(filename) {
    return join(this.outPath, '.', filename.replace(this.protoPath, ''));
  }

  writeFile(ast, filename) {
    const output = generate(ast);
    const file = this.protoPathToOutPath(filename);
    mkdirp(dirname(file));
    writeFileSync(file, output.code);
  }

  findDependency(name) {
    const maybeEnum = this.files.find(file => !!file.getEnum(name));
    if (maybeEnum) {
      return {
        type: 'Enum',
        name,
        loc: maybeEnum.filename
      }
    };

    const maybeInterface = this.files.find(file => !!file.getInterface(name));
    if (maybeInterface) {
      return {
        type: 'Interface',
        name,
        loc: maybeInterface.filename
      }
    };

  }

  findFilesOfPackage(protoPackage: string) {
    return this.files.filter(file => file.protoPackage === protoPackage);
  }

  findInterfaceFile(type: string): TSFileStore {
    const files = this.files.filter(file => !!file.getInterface(type));
    if (!files.length) return null;
    if (files.length === 1) return files[0];
    throw new Error('more than one ' + type);
  }

  findInterfaceFiles(type: string): TSFileStore[] {
    return this.files.filter(file => !!file.getInterface(type));
  }

  print(): void {
    const keys = Object.keys(this.files);
    keys.forEach(key => {
      const file: TSFileStore = this.files[key];
      file.print();
    });
  }
}
export class TSFileStore implements FileStore {
  // this file meta
  filename: string;
  protoPath: string;
  outPath: string;
  protoPackage: string;
  code: string;
  ast: any;

  // parent program
  program: TSProtoStore;

  //

  interfaces: GenericInterface[] = [];

  definitions: Interface[] = [];

  imports: Import[] = []
  exports = [];

  queries = [];
  mutations: Mutation[] = [];

  enums: Enum[] = [];

  visitor: any;
  mutator: any;
  _traversed: boolean = false;

  importStmts: any[] = [];

  outFiles: OutFile[] = [];

  constructor(filename, code, program) {
    this.protoPath = program.protoPath;
    this.outPath = program.outPath;
    this.filename = filename;
    // if code provided, don't read
    this.code = code || readFileSync(filename, 'utf-8');
    this.program = program;

    const plugins: ParserPlugin[] = [
      'typescript'
    ];

    this.ast = parse(this.code, {
      sourceType: 'module',
      plugins
    });

    // first visit
    this.visitor = registerDeps(filename, this);
    babelTraverse(this.ast, this.visitor);

    this.mutator = mutator(filename)
  }

  traverse() {
    if (this._traversed) return;
    babelTraverse(this.ast, this.mutator);
    this._traversed = true;
  }

  isQuery() {
    return basename(this.filename) === 'query.ts';
  }

  isTransaction() {
    return basename(this.filename) === 'tx.ts';
  }

  setPackage(value) {
    this.protoPackage = value;
  }

  addGenericImport(data) {
    this.importStmts.push(data);
  }

  addImport(data) {
    this.imports.push(data);
  }

  addGenericInterface(node) {
    this.interfaces.push({
      filename: this.filename,
      node
    });
  }

  addInterfaceField(type: string, el: Field) {
    let i = this.getInterface(type);
    if (!i) {
      i = {
        name: type,
        fields: []
      };
      this.definitions.push(i);
    }
    i.fields.push(el);
  }

  getInterface(type: string): Interface {
    return this.definitions.find(a => a.name === type);
  }

  addEnum(el: Enum) {
    this.enums.push(el);
    this.program.addEnum(el);
  }

  getEnum(name: string): Enum {
    return this.enums.find(e => e.name === name);
  }

  hasEnum(name: string): boolean {
    return !!this.getEnum(name);
  }

  addEnumFunction(key: string, data: EnumConverter) {
    const e = this.program.getEnum(key);
    if (!e) {
      throw new Error('cannot find enum');
    }
    const e2 = this.getEnum(key);
    e[data.convertType] = data;
    e2[data.convertType] = data;
  }

  writeFile(ast, filename) {
    this.program.writeFile(ast, filename);
  }

  getSiblingFileName(name) {
    name = name.replace(extname(name), '');
    return this.filename.replace(/.ts$/, `.${name}.ts`);
  }

  write() {
    this.generateFiles();
    this.outFiles.forEach(file => {
      this.writeFile(file.ast, file.filename);
    })
  }

  generateFiles() {
    const aminos = [];
    let registry = null;
    let messages = null;
    let toJSON = null;
    let fromJSON = null;
    let json = null;
    let encoded = null;

    const importStmt = c.importAminoMsg();

    // BEGIN AMINOS
    const a = this.program.findDependency('AminoHeight');
    const rel = relative(dirname(this.filename), a.loc);
    const importStmt2 = c.importStmt(['Registry'], '@cosmjs/proto-signing'['AminoHeight', 'omitDefault'], rel.replace(extname(rel), ''));
    // END AMINOS

    // THIS SIMPLY W/O CHECKING IMPORTS ALL MESSAGES FROM THIS FILE...
    const portedImports = {};

    this.definitions.forEach(def => {
      portedImports[def.name] = true;
    });

    this.interfaces.forEach(inter => {
      portedImports[inter.node.id.name] = true;
    });

    const theImportSpecifiers = Object.keys(portedImports).map(importIdentifier =>
      t.importSpecifier(t.identifier(importIdentifier), t.identifier(importIdentifier)));

    const interfaceImport = t.importDeclaration(
      theImportSpecifiers
      , t.stringLiteral(`./${basename(this.filename).replace(extname(this.filename), '')}`));



    if (this.mutations.length) {
      const aminoCasingFn = this.program.plugins.find(p => p.name === 'aminoCasing').plugin({ protoPackage: this.protoPackage });

      const schemata = this.mutations.map(mutation => {
        const i = this.getInterface(mutation.TypeName);
        const schema: MessageSchema = {
          fields: i.fields,
          name: mutation.TypeName,
          typeUrl: mutation.typeUrl
        };
        return schema;
      });

      this.mutations.forEach(mutation => {
        const i = this.getInterface(mutation.TypeName);

        const schema: MessageSchema = {
          fields: i.fields,
          name: mutation.TypeName,
          typeUrl: mutation.typeUrl
        };

        aminos.push(
          c.makeAminoTypeInterface({
            schema,
            enums: this.program.enums,
            interfaces: this.program.getDefinitions(),
            aminoCasingFn,
            exceptions: this.program.exceptions
          })
        );

      });

      aminos.push(
        c.aminoConverter({
          schemata,
          enums: this.program.enums,
          interfaces: this.program.getDefinitions(),
          aminoCasingFn,
          exceptions: this.program.exceptions
        })
      );

      messages = c.toObjectWithPartialMethods(this.mutations);
      registry = c.createTypeRegistry(this.mutations);
      json = c.toObjectWithJsonMethods(this.mutations);
      toJSON = c.toObjectWithToJSONMethods(this.mutations);
      fromJSON = c.toObjectWithFromJSONMethods(this.mutations);
      encoded = c.toObjectWithEncodedMethods(this.mutations);

      this.outFiles = [];

      const makeFile = (ast: any[], extraImports: any[] = []) => {
        return t.file(t.program([
          importStmt,
          importStmt2,
          interfaceImport,
          ...this.importStmts,
          ...extraImports,
          ...ast
        ]))
      }

      if (messages) {
        this.outFiles.push({
          filename: this.getSiblingFileName('messages'),
          ast: makeFile([messages])
        });
      }

      if (json) {
        this.outFiles.push({
          filename: this.getSiblingFileName('json'),
          ast: makeFile([json])
        });
      }

      if (toJSON) {
        this.outFiles.push({
          filename: this.getSiblingFileName('toJSON'),
          ast: makeFile([toJSON])
        });
      }

      if (fromJSON) {
        this.outFiles.push({
          filename: this.getSiblingFileName('fromJSON'),
          ast: makeFile([fromJSON])
        });
      }

      if (encoded) {
        this.outFiles.push({
          filename: this.getSiblingFileName('encoded'),
          ast: makeFile([encoded])
        });
      }

      if (aminos.length) {
        this.outFiles.push({
          filename: this.getSiblingFileName('aminos'),
          ast: makeFile(aminos)
        });
      }

      if (registry) {
        this.outFiles.push({
          filename: this.getSiblingFileName('registry'),
          ast: makeFile([
            registry,
            c.createRegistryLoader(),
          ], [c.importStmt(['Registry'], '@cosmjs/proto-signing')])
        });
      }

      this.outFiles.push({
        filename: this.filename,
        ast: this.ast
      });

    }

  }

  print() {
    console.log(`
filename: ${basename(this.filename)}
protopkg: ${this.protoPackage}
    `);

    if (this.mutations.length)
      console.log(this.mutations);
  }

  toJSON() {
    return {
      filename: this.filename.split(this.protoPath)[1],
      protoPackage: this.protoPackage,
      mutations: this.mutations
    }
  }

}
