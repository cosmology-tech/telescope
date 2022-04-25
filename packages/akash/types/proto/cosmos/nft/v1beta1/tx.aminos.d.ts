import { AminoMsg } from "@cosmjs/amino";
import { MsgSend } from "./tx";
export interface AminoMsgSend extends AminoMsg {
    type: "cosmos-sdk/MsgSend";
    value: {
        from_address: string;
        to_address: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/cosmos.nft.v1beta1.MsgSend": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, amount }: MsgSend) => AminoMsgSend["value"];
        fromAmino: ({ from_address, to_address, amount }: AminoMsgSend["value"]) => MsgSend;
    };
};
