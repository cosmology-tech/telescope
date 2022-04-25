import { MsgCreateCertificate, MsgRevokeCertificate } from "./cert";
export declare const toJSON: {
    createCertificate(value: MsgCreateCertificate): {
        typeUrl: string;
        value: unknown;
    };
    revokeCertificate(value: MsgRevokeCertificate): {
        typeUrl: string;
        value: unknown;
    };
};
