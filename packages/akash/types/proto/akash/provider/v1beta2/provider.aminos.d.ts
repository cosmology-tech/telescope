import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
export interface AminoMsgCreateProvider extends AminoMsg {
    type: "/akash.provider.v1beta2.MsgCreateProvider";
    value: {
        owner: string;
        host_uri: string;
        attributes: {
            key: string;
            value: string;
        }[];
        info: {
            email: string;
            website: string;
        };
    };
}
export interface AminoMsgUpdateProvider extends AminoMsg {
    type: "/akash.provider.v1beta2.MsgUpdateProvider";
    value: {
        owner: string;
        host_uri: string;
        attributes: {
            key: string;
            value: string;
        }[];
        info: {
            email: string;
            website: string;
        };
    };
}
export interface AminoMsgDeleteProvider extends AminoMsg {
    type: "/akash.provider.v1beta2.MsgDeleteProvider";
    value: {
        owner: string;
    };
}
export declare const AminoConverter: {
    "/akash.provider.v1beta2.MsgCreateProvider": {
        aminoType: string;
        toAmino: ({ owner, hostUri, attributes, info }: MsgCreateProvider) => AminoMsgCreateProvider["value"];
        fromAmino: ({ owner, host_uri, attributes, info }: AminoMsgCreateProvider["value"]) => MsgCreateProvider;
    };
    "/akash.provider.v1beta2.MsgUpdateProvider": {
        aminoType: string;
        toAmino: ({ owner, hostUri, attributes, info }: MsgUpdateProvider) => AminoMsgUpdateProvider["value"];
        fromAmino: ({ owner, host_uri, attributes, info }: AminoMsgUpdateProvider["value"]) => MsgUpdateProvider;
    };
    "/akash.provider.v1beta2.MsgDeleteProvider": {
        aminoType: string;
        toAmino: ({ owner }: MsgDeleteProvider) => AminoMsgDeleteProvider["value"];
        fromAmino: ({ owner }: AminoMsgDeleteProvider["value"]) => MsgDeleteProvider;
    };
};
