import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin } from "./tx";
export declare const encoded: {
    storeCode(value: MsgStoreCode): {
        type_url: string;
        value: Uint8Array;
    };
    instantiateContract(value: MsgInstantiateContract): {
        type_url: string;
        value: Uint8Array;
    };
    executeContract(value: MsgExecuteContract): {
        type_url: string;
        value: Uint8Array;
    };
    migrateContract(value: MsgMigrateContract): {
        type_url: string;
        value: Uint8Array;
    };
    updateAdmin(value: MsgUpdateAdmin): {
        type_url: string;
        value: Uint8Array;
    };
    clearAdmin(value: MsgClearAdmin): {
        type_url: string;
        value: Uint8Array;
    };
};
