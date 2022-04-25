import { MsgCreateCertificate, MsgRevokeCertificate } from "./cert";
export declare const json: {
    createCertificate(value: MsgCreateCertificate): {
        typeUrl: string;
        value: MsgCreateCertificate;
    };
    revokeCertificate(value: MsgRevokeCertificate): {
        typeUrl: string;
        value: MsgRevokeCertificate;
    };
};
