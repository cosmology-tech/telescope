import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin } from "./tx";
export declare const fromJSON: {
    storeCode(value: any): {
        typeUrl: string;
        value: MsgStoreCode;
    };
    instantiateContract(value: any): {
        typeUrl: string;
        value: MsgInstantiateContract;
    };
    executeContract(value: any): {
        typeUrl: string;
        value: MsgExecuteContract;
    };
    migrateContract(value: any): {
        typeUrl: string;
        value: MsgMigrateContract;
    };
    updateAdmin(value: any): {
        typeUrl: string;
        value: MsgUpdateAdmin;
    };
    clearAdmin(value: any): {
        typeUrl: string;
        value: MsgClearAdmin;
    };
};
