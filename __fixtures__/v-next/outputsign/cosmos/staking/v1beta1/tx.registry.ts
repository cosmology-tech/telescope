import { Description, DescriptionSDKType, CommissionRates, CommissionRatesSDKType } from "./staking";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { TelescopeGeneratedType } from "../../../types";
import { MsgCreateValidator, MsgCreateValidatorSDKType, MsgEditValidator, MsgEditValidatorSDKType, MsgDelegate, MsgDelegateSDKType, MsgBeginRedelegate, MsgBeginRedelegateSDKType, MsgUndelegate, MsgUndelegateSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType]> = [["/cosmos.staking.v1beta1.MsgCreateValidator", MsgCreateValidator], ["/cosmos.staking.v1beta1.MsgEditValidator", MsgEditValidator], ["/cosmos.staking.v1beta1.MsgDelegate", MsgDelegate], ["/cosmos.staking.v1beta1.MsgBeginRedelegate", MsgBeginRedelegate], ["/cosmos.staking.v1beta1.MsgUndelegate", MsgUndelegate]];