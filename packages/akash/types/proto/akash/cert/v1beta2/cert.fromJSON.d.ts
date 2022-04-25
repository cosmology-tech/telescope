import { MsgCreateCertificate, MsgRevokeCertificate } from "./cert";
export declare const fromJSON: {
    createCertificate(value: any): {
        typeUrl: string;
        value: MsgCreateCertificate;
    };
    revokeCertificate(value: any): {
        typeUrl: string;
        value: MsgRevokeCertificate;
    };
};
