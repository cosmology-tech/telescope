import { ProtoRef, TelescopeOptions } from '@cosmology/types';
import { ProtoStore } from '@cosmology/proto-parser';
import {
    AminoParseContext,
    createAminoConverter,
    createCreateProtoType,
    createObjectWithMethods,
    createRegisterObject,
    createProtoEnum,
    createProtoEnumToJSON,
    createProtoEnumFromJSON,
    createProtoType,
    cloneAndWrapFieldsWithComputedRef,
    createProtoInterfaceEncodedType,
    createProtoTypeType,
    createSDKType,
    createAminoType,
    createAminoTypeType,
    createEnumSDKType,
    createEnumAminoType,
    makeAminoTypeInterface,
    GenericParseContext,
    ProtoParseContext,
    createTypeRegistry,
    createRegistryLoader,

    // helper
    createHelperObject,
    createInterfaceDecoder,
    createInterfaceFromAmino,
    createInterfaceToAmino,
    createRegisterAminoProtoMapping,
} from '@cosmology/ast';
import { ServiceMutation, ServiceQuery } from '@cosmology/types';

export const getMutations = (mutations: ServiceMutation[]) => {
    return mutations.map((mutation: ServiceMutation) => {
        return {
            typeUrl: `/${mutation.package}.${mutation.message}`,
            TypeName: mutation.message,
            methodName: mutation.methodName
        }
    });
};

export const getAminoProtos = (mutations: ServiceMutation[], store: ProtoStore) => {
    return mutations.map(mutation => {
        const ref = store.findProto(mutation.messageImport);
        return store.get(ref, mutation.message).obj;
    });
};

export const buildBaseTypeScriptClass = (
    context: TelescopeParseContext,
    name: string,
    obj: any
) => {
    if (context.options.prototypes.enabled) {
        context.body.push(createCreateProtoType(context.proto, name, obj));
        context.body.push(createObjectWithMethods(context.proto, name, obj));

        if(context.options.interfaces?.enabled && context.options.interfaces?.useGlobalDecoderRegistry){
          const registerObj = createRegisterObject(context.proto, name, obj);
          if(registerObj){
            context.body.push(registerObj);

            //createRegisterAminoProtoMapping
            const registerAminoObj = createRegisterAminoProtoMapping(context.proto, name, obj);
            if(registerAminoObj){
              context.body.push(registerAminoObj);
            }
          }
        }
    }
};

export const buildBaseTypeScriptInterface = (
    context: TelescopeParseContext,
    name: string,
    obj: any
) => {

    const protoType = createProtoType(context.proto, name, obj)
    context.body.push(protoType);

    if (context.options.vueQuery?.enabled) {
    // create interfaces with fields of ComputedRef
    // eg: interface QueryBalanceRequest {
    //   address: ComputedRef<string>;
    //   denom: ComputedRef<string>;
    // }
        context.body.push(cloneAndWrapFieldsWithComputedRef(protoType))
    }

    if (context.options.aminoEncoding?.enabled && !context.options.aminoEncoding?.useLegacyInlineEncoding || context.options.prototypes?.methods?.fromProto || context.options.prototypes?.methods?.toProto) {
        context.body.push(createProtoTypeType(context.proto, name, obj));
    }

    if (context.options.aminoEncoding?.enabled && !context.options.aminoEncoding?.useLegacyInlineEncoding) {
        // conditional type
        const interfaceType = createProtoInterfaceEncodedType(context.proto, name, obj);
        if (interfaceType) {
            context.body.push(interfaceType);
        }
        context.body.push(createAminoType(context.proto, name, obj));

        if(!context.options.aminoEncoding?.disableMsgTypes){
            context.body.push(createAminoTypeType(context.proto, name, obj));
        }
    }
    if (context.options.useSDKTypes) {
        context.body.push(createSDKType(context.proto, name, obj));
    }
};

export const buildEnums = (
    context: TelescopeParseContext,
    name: string,
    obj: any
) => {
    context.body.push(createProtoEnum(context.proto, name, obj));
    if (context.options.useSDKTypes) {
        context.body.push(createEnumSDKType(context.proto, name, obj));
    }
    if (context.options.aminoEncoding?.enabled && !context.options.aminoEncoding?.useLegacyInlineEncoding) {
        context.body.push(createEnumAminoType(context.proto, name, obj));
    }
    context.body.push(createProtoEnumFromJSON(context.proto, name, obj));
    context.body.push(createProtoEnumToJSON(context.proto, name, obj));
};
export interface TelescopeParseContext {
    options: TelescopeOptions;
    generic: GenericParseContext;
    proto: ProtoParseContext;
    amino: AminoParseContext;
    store: ProtoStore;
    ref: ProtoRef;
    parsedImports: Record<string, any>;
    body: any[];
    mutations: ServiceMutation[];
    queries: any[];
    services: any[];
    types: any[];
}
export class TelescopeParseContext implements TelescopeParseContext {
    constructor(ref: ProtoRef, store: ProtoStore, options: TelescopeOptions) {
        this.generic = new GenericParseContext(
            ref, store, options
        );
        this.proto = new ProtoParseContext(
            ref, store, options
        );
        this.amino = new AminoParseContext(
            ref, store, options
        );
        this.options = options;
        this.ref = ref;
        this.store = store;
        this.parsedImports = {};
        this.body = [];
        this.queries = [];
        this.services = [];
        this.mutations = [];
        this.types = [];
    }

    hasMutations() {
        return this.mutations.length > 0;
    }

    addType(name: string, obj: any, isNested: boolean) {
        this.types.push({
            name,
            obj,
            isNested
        });
    }
    addMutation(mutation: ServiceMutation) {
        this.mutations.push(mutation);
    }
    addQuery(query: ServiceQuery) {
        this.queries.push(query);
    }
    addService(query: any) {
        this.services.push(query);
    }
    // build main Class with methods
    buildBase() {
        this.types.forEach(typeReg => {
            const { name, obj } = typeReg;
            if (obj.type === 'Enum') {
                buildEnums(this, name, obj);
            }
        });
        this.types.forEach(typeReg => {
            const { name, obj } = typeReg;
            if (obj.type === 'Type') {
                buildBaseTypeScriptInterface(this, name, obj);
            }
        });
        this.types.forEach(typeReg => {
            const { name, obj } = typeReg;
            if (obj.type === 'Type') {
                buildBaseTypeScriptClass(this, name, obj);
            }
        });

        // interfaces
        if (this.options.interfaces.enabled && !this.options.interfaces.useGlobalDecoderRegistry) {
            const interfaces = Object.keys(this.ref.traversed.acceptsInterface ?? {});
            if (interfaces.length) {
                interfaces.forEach(interfaceName => {
                    this.body.push(createInterfaceDecoder(this.proto, this.ref, interfaceName));
                    if (
                        this.options.aminoEncoding?.enabled &&
                        !this.options.aminoEncoding?.useLegacyInlineEncoding
                    ) {
                        this.body.push(createInterfaceFromAmino(this.proto, this.ref, interfaceName));
                        this.body.push(createInterfaceToAmino(this.proto, this.ref, interfaceName));
                    }
                })
            }
        }

    }

    buildRegistry() {
        this.body.push(createTypeRegistry(this.amino, getMutations(this.mutations)));
    }
    buildRegistryLoader() {
        if (!this.options?.prototypes?.enableRegistryLoader) {
          return
        }

        this.body.push(createRegistryLoader(this.amino));
    }
    buildAminoInterfaces() {
        if (!this.options?.aminoEncoding?.enabled || !this.options?.aminoEncoding?.useLegacyInlineEncoding) return;
        //
        const protos = getAminoProtos(this.mutations, this.store);
        protos.forEach(proto => {
            this.body.push(makeAminoTypeInterface({
                context: this.amino,
                proto
            }));
        });
    }
    buildAminoConverter() {
        this.body.push(createAminoConverter({
            name: 'AminoConverter',
            context: this.amino,
            root: this.ref.traversed,
            protos: getAminoProtos(this.mutations, this.store)
        }));
    }
    buildHelperObject() {
        if (!this.options?.prototypes?.enableMessageComposer) {
          return
        }
        // add methods
        this.body.push(createHelperObject({
            context: this.amino,
            name: 'MessageComposer',
            mutations: getMutations(this.mutations)
        }));
    }
}
