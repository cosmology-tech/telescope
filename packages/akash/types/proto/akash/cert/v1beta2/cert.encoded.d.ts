import { MsgCreateCertificate, MsgRevokeCertificate } from "./cert";
export declare const encoded: {
    createCertificate(value: MsgCreateCertificate): {
        type_url: string;
        value: Uint8Array;
    };
    revokeCertificate(value: MsgRevokeCertificate): {
        type_url: string;
        value: Uint8Array;
    };
};
