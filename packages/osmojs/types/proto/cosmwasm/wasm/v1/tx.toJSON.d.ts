import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin } from "./tx";
export declare const toJSON: {
    storeCode(value: MsgStoreCode): {
        typeUrl: string;
        value: unknown;
    };
    instantiateContract(value: MsgInstantiateContract): {
        typeUrl: string;
        value: unknown;
    };
    executeContract(value: MsgExecuteContract): {
        typeUrl: string;
        value: unknown;
    };
    migrateContract(value: MsgMigrateContract): {
        typeUrl: string;
        value: unknown;
    };
    updateAdmin(value: MsgUpdateAdmin): {
        typeUrl: string;
        value: unknown;
    };
    clearAdmin(value: MsgClearAdmin): {
        typeUrl: string;
        value: unknown;
    };
};
