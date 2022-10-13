import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterDevFeeInfo, MsgCancelDevFeeInfo, MsgUpdateDevFeeInfo } from "./tx";
export interface AminoMsgRegisterDevFeeInfo extends AminoMsg {
  type: "/evmos.fees.v1.MsgRegisterDevFeeInfo";
  value: {
    contract_address: string;
    deployer_address: string;
    withdraw_address: string;
    nonces: Long[];
  };
}
export interface AminoMsgCancelDevFeeInfo extends AminoMsg {
  type: "/evmos.fees.v1.MsgCancelDevFeeInfo";
  value: {
    contract_address: string;
    deployer_address: string;
  };
}
export interface AminoMsgUpdateDevFeeInfo extends AminoMsg {
  type: "/evmos.fees.v1.MsgUpdateDevFeeInfo";
  value: {
    contract_address: string;
    deployer_address: string;
    withdraw_address: string;
  };
}
export const AminoConverter = {
  "/evmos.fees.v1.MsgRegisterDevFeeInfo": {
    aminoType: "/evmos.fees.v1.MsgRegisterDevFeeInfo",
    toAmino: ({
      contractAddress,
      deployerAddress,
      withdrawAddress,
      nonces
    }: MsgRegisterDevFeeInfo): AminoMsgRegisterDevFeeInfo["value"] => {
      return {
        contract_address: contractAddress,
        deployer_address: deployerAddress,
        withdraw_address: withdrawAddress,
        nonces: nonces.map(el0 => el0.toString())
      };
    },
    fromAmino: ({
      contract_address,
      deployer_address,
      withdraw_address,
      nonces
    }: AminoMsgRegisterDevFeeInfo["value"]): MsgRegisterDevFeeInfo => {
      return {
        contractAddress: contract_address,
        deployerAddress: deployer_address,
        withdrawAddress: withdraw_address,
        nonces: nonces.map(el0 => Long.fromString(el0))
      };
    }
  },
  "/evmos.fees.v1.MsgCancelDevFeeInfo": {
    aminoType: "/evmos.fees.v1.MsgCancelDevFeeInfo",
    toAmino: ({
      contractAddress,
      deployerAddress
    }: MsgCancelDevFeeInfo): AminoMsgCancelDevFeeInfo["value"] => {
      return {
        contract_address: contractAddress,
        deployer_address: deployerAddress
      };
    },
    fromAmino: ({
      contract_address,
      deployer_address
    }: AminoMsgCancelDevFeeInfo["value"]): MsgCancelDevFeeInfo => {
      return {
        contractAddress: contract_address,
        deployerAddress: deployer_address
      };
    }
  },
  "/evmos.fees.v1.MsgUpdateDevFeeInfo": {
    aminoType: "/evmos.fees.v1.MsgUpdateDevFeeInfo",
    toAmino: ({
      contractAddress,
      deployerAddress,
      withdrawAddress
    }: MsgUpdateDevFeeInfo): AminoMsgUpdateDevFeeInfo["value"] => {
      return {
        contract_address: contractAddress,
        deployer_address: deployerAddress,
        withdraw_address: withdrawAddress
      };
    },
    fromAmino: ({
      contract_address,
      deployer_address,
      withdraw_address
    }: AminoMsgUpdateDevFeeInfo["value"]): MsgUpdateDevFeeInfo => {
      return {
        contractAddress: contract_address,
        deployerAddress: deployer_address,
        withdrawAddress: withdraw_address
      };
    }
  }
};