import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateCertificate, MsgRevokeCertificate } from "./cert";
export interface AminoMsgCreateCertificate extends AminoMsg {
    type: "/akash.cert.v1beta2.MsgCreateCertificate";
    value: {
        owner: string;
        cert: Uint8Array;
        pubkey: Uint8Array;
    };
}
export interface AminoMsgRevokeCertificate extends AminoMsg {
    type: "/akash.cert.v1beta2.MsgRevokeCertificate";
    value: {
        id: {
            owner: string;
            serial: string;
        };
    };
}
export declare const AminoConverter: {
    "/akash.cert.v1beta2.MsgCreateCertificate": {
        aminoType: string;
        toAmino: ({ owner, cert, pubkey }: MsgCreateCertificate) => AminoMsgCreateCertificate["value"];
        fromAmino: ({ owner, cert, pubkey }: AminoMsgCreateCertificate["value"]) => MsgCreateCertificate;
    };
    "/akash.cert.v1beta2.MsgRevokeCertificate": {
        aminoType: string;
        toAmino: ({ id }: MsgRevokeCertificate) => AminoMsgRevokeCertificate["value"];
        fromAmino: ({ id }: AminoMsgRevokeCertificate["value"]) => MsgRevokeCertificate;
    };
};
