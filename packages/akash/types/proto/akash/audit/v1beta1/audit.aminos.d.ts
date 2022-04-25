import { AminoMsg } from "@cosmjs/amino";
import { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./audit";
export interface AminoMsgSignProviderAttributes extends AminoMsg {
    type: "/akash.audit.v1beta1.MsgSignProviderAttributes";
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
    type: "/akash.audit.v1beta1.MsgDeleteProviderAttributes";
    value: {
        owner: string;
        auditor: string;
        keys: string[];
    };
}
export declare const AminoConverter: {
    "/akash.audit.v1beta1.MsgSignProviderAttributes": {
        aminoType: string;
        toAmino: ({ owner, auditor, attributes }: MsgSignProviderAttributes) => AminoMsgSignProviderAttributes["value"];
        fromAmino: ({ owner, auditor, attributes }: AminoMsgSignProviderAttributes["value"]) => MsgSignProviderAttributes;
    };
    "/akash.audit.v1beta1.MsgDeleteProviderAttributes": {
        aminoType: string;
        toAmino: ({ owner, auditor, keys }: MsgDeleteProviderAttributes) => AminoMsgDeleteProviderAttributes["value"];
        fromAmino: ({ owner, auditor, keys }: AminoMsgDeleteProviderAttributes["value"]) => MsgDeleteProviderAttributes;
    };
};
