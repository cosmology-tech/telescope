import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin } from "./tx";
export declare const json: {
    storeCode(value: MsgStoreCode): {
        typeUrl: string;
        value: MsgStoreCode;
    };
    instantiateContract(value: MsgInstantiateContract): {
        typeUrl: string;
        value: MsgInstantiateContract;
    };
    executeContract(value: MsgExecuteContract): {
        typeUrl: string;
        value: MsgExecuteContract;
    };
    migrateContract(value: MsgMigrateContract): {
        typeUrl: string;
        value: MsgMigrateContract;
    };
    updateAdmin(value: MsgUpdateAdmin): {
        typeUrl: string;
        value: MsgUpdateAdmin;
    };
    clearAdmin(value: MsgClearAdmin): {
        typeUrl: string;
        value: MsgClearAdmin;
    };
};
