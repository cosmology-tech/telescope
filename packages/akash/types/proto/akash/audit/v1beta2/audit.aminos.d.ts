import { AminoMsg } from "@cosmjs/amino";
import { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./audit";
export interface AminoMsgSignProviderAttributes extends AminoMsg {
    type: "/akash.audit.v1beta2.MsgSignProviderAttributes";
    value: {
        owner: string;
        auditor: string;
        attributes: {
            key: string;
            value: string;
        }[];
    };
}
export interface AminoMsgDeleteProviderAttributes extends AminoMsg {
    type: "/akash.audit.v1beta2.MsgDeleteProviderAttributes";
    value: {
        owner: string;
        auditor: string;
        keys: string[];
    };
}
export declare const AminoConverter: {
    "/akash.audit.v1beta2.MsgSignProviderAttributes": {
        aminoType: string;
        toAmino: ({ owner, auditor, attributes }: MsgSignProviderAttributes) => AminoMsgSignProviderAttributes["value"];
        fromAmino: ({ owner, auditor, attributes }: AminoMsgSignProviderAttributes["value"]) => MsgSignProviderAttributes;
    };
    "/akash.audit.v1beta2.MsgDeleteProviderAttributes": {
        aminoType: string;
        toAmino: ({ owner, auditor, keys }: MsgDeleteProviderAttributes) => AminoMsgDeleteProviderAttributes["value"];
        fromAmino: ({ owner, auditor, keys }: AminoMsgDeleteProviderAttributes["value"]) => MsgDeleteProviderAttributes;
    };
};
