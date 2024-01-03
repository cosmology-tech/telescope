import { Description, DescriptionSDKType, CommissionRates, CommissionRatesSDKType } from "./staking";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { AminoMsg, Pubkey } from "@cosmjs/amino";
import { omitDefault, padDecimal } from "../../../helpers";
import { decodePubkey, encodePubkey } from "@cosmjs/proto-signing";
import { MsgCreateValidator, MsgCreateValidatorSDKType, MsgEditValidator, MsgEditValidatorSDKType, MsgDelegate, MsgDelegateSDKType, MsgBeginRedelegate, MsgBeginRedelegateSDKType, MsgUndelegate, MsgUndelegateSDKType } from "./tx";
export interface MsgCreateValidatorAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCreateValidator";
  value: {
    description: {
      moniker: string;
      identity: string;
      website: string;
      security_contact: string;
      details: string;
    };
    commission: {
      rate: string;
      max_rate: string;
      max_change_rate: string;
    };
    min_self_delegation: string;
    delegator_address: string;
    validator_address: string;
    pubkey: Pubkey;
    value: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgEditValidatorAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgEditValidator";
  value: {
    description: {
      moniker: string;
      identity: string;
      website: string;
      security_contact: string;
      details: string;
    };
    validator_address: string;
    commission_rate: string;
    min_self_delegation: string;
  };
}
export interface MsgDelegateAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgDelegate";
  value: {
    delegator_address: string;
    validator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgBeginRedelegateAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgBeginRedelegate";
  value: {
    delegator_address: string;
    validator_src_address: string;
    validator_dst_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgUndelegateAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUndelegate";
  value: {
    delegator_address: string;
    validator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export const AminoConverter = {
  "/cosmos.staking.v1beta1.MsgCreateValidator": {
    aminoType: "cosmos-sdk/MsgCreateValidator",
    toAmino: ({
      description,
      commission,
      minSelfDelegation,
      delegatorAddress,
      validatorAddress,
      pubkey,
      value
    }: MsgCreateValidator): MsgCreateValidatorAminoType["value"] => {
      return {
        description: {
          moniker: omitDefault(description.moniker),
          identity: omitDefault(description.identity),
          website: omitDefault(description.website),
          security_contact: omitDefault(description.securityContact),
          details: omitDefault(description.details)
        },
        commission: {
          rate: padDecimal(commission.rate),
          max_rate: padDecimal(commission.maxRate),
          max_change_rate: padDecimal(commission.maxChangeRate)
        },
        min_self_delegation: omitDefault(minSelfDelegation),
        delegator_address: omitDefault(delegatorAddress),
        validator_address: omitDefault(validatorAddress),
        pubkey: decodePubkey(pubkey)!,
        value: {
          denom: value.denom,
          amount: value.amount
        }
      };
    },
    fromAmino: ({
      description,
      commission,
      min_self_delegation,
      delegator_address,
      validator_address,
      pubkey,
      value
    }: MsgCreateValidatorAminoType["value"]): MsgCreateValidator => {
      return {
        description: description == null ? description : {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          securityContact: description.security_contact,
          details: description.details
        },
        commission: commission == null ? commission : {
          rate: commission.rate,
          maxRate: commission.max_rate,
          maxChangeRate: commission.max_change_rate
        },
        minSelfDelegation: min_self_delegation,
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        pubkey: encodePubkey(pubkey),
        value: value == null ? value : {
          denom: value.denom,
          amount: value.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgEditValidator": {
    aminoType: "cosmos-sdk/MsgEditValidator",
    toAmino: ({
      description,
      validatorAddress,
      commissionRate,
      minSelfDelegation
    }: MsgEditValidator): MsgEditValidatorAminoType["value"] => {
      return {
        description: {
          moniker: omitDefault(description.moniker),
          identity: omitDefault(description.identity),
          website: omitDefault(description.website),
          security_contact: omitDefault(description.securityContact),
          details: omitDefault(description.details)
        },
        validator_address: omitDefault(validatorAddress),
        commission_rate: padDecimal(commissionRate),
        min_self_delegation: omitDefault(minSelfDelegation)
      };
    },
    fromAmino: ({
      description,
      validator_address,
      commission_rate,
      min_self_delegation
    }: MsgEditValidatorAminoType["value"]): MsgEditValidator => {
      return {
        description: description == null ? description : {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          securityContact: description.security_contact,
          details: description.details
        },
        validatorAddress: validator_address,
        commissionRate: commission_rate,
        minSelfDelegation: min_self_delegation
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgDelegate": {
    aminoType: "cosmos-sdk/MsgDelegate",
    toAmino: ({
      delegatorAddress,
      validatorAddress,
      amount
    }: MsgDelegate): MsgDelegateAminoType["value"] => {
      return {
        delegator_address: omitDefault(delegatorAddress),
        validator_address: omitDefault(validatorAddress),
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      amount
    }: MsgDelegateAminoType["value"]): MsgDelegate => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        amount: amount == null ? amount : {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
    aminoType: "cosmos-sdk/MsgBeginRedelegate",
    toAmino: ({
      delegatorAddress,
      validatorSrcAddress,
      validatorDstAddress,
      amount
    }: MsgBeginRedelegate): MsgBeginRedelegateAminoType["value"] => {
      return {
        delegator_address: omitDefault(delegatorAddress),
        validator_src_address: omitDefault(validatorSrcAddress),
        validator_dst_address: omitDefault(validatorDstAddress),
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    },
    fromAmino: ({
      delegator_address,
      validator_src_address,
      validator_dst_address,
      amount
    }: MsgBeginRedelegateAminoType["value"]): MsgBeginRedelegate => {
      return {
        delegatorAddress: delegator_address,
        validatorSrcAddress: validator_src_address,
        validatorDstAddress: validator_dst_address,
        amount: amount == null ? amount : {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgUndelegate": {
    aminoType: "cosmos-sdk/MsgUndelegate",
    toAmino: ({
      delegatorAddress,
      validatorAddress,
      amount
    }: MsgUndelegate): MsgUndelegateAminoType["value"] => {
      return {
        delegator_address: omitDefault(delegatorAddress),
        validator_address: omitDefault(validatorAddress),
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      amount
    }: MsgUndelegateAminoType["value"]): MsgUndelegate => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        amount: amount == null ? amount : {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  }
};