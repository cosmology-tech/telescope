import { Counterparty, CounterpartySDKType, Version, VersionSDKType } from "./connection";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType } from "../../client/v1/client";
import { TelescopeGeneratedType } from "../../../../types";
import { MsgConnectionOpenInit, MsgConnectionOpenInitSDKType, MsgConnectionOpenTry, MsgConnectionOpenTrySDKType, MsgConnectionOpenAck, MsgConnectionOpenAckSDKType, MsgConnectionOpenConfirm, MsgConnectionOpenConfirmSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/ibc.core.connection.v1.MsgConnectionOpenInit", MsgConnectionOpenInit], ["/ibc.core.connection.v1.MsgConnectionOpenTry", MsgConnectionOpenTry], ["/ibc.core.connection.v1.MsgConnectionOpenAck", MsgConnectionOpenAck], ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", MsgConnectionOpenConfirm]];