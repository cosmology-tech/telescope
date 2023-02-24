import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, VoteOptionSDKType, WeightedVoteOption, WeightedVoteOptionSDKType } from "./gov";
import { TextProposal, TextProposalSDKType } from "../v1beta1/gov";
import { RegisterIncentiveProposal, RegisterIncentiveProposalSDKType } from "../../../evmos/incentives/v1/incentives";
import { ClientUpdateProposal, ClientUpdateProposalSDKType, UpgradeProposal, UpgradeProposalSDKType } from "../../../ibc/core/client/v1/client";
import { ReplacePoolIncentivesProposal, ReplacePoolIncentivesProposalSDKType, UpdatePoolIncentivesProposal, UpdatePoolIncentivesProposalSDKType } from "../../../osmosis/pool-incentives/v1beta1/gov";
import { SetSuperfluidAssetsProposal, SetSuperfluidAssetsProposalSDKType, RemoveSuperfluidAssetsProposal, RemoveSuperfluidAssetsProposalSDKType, UpdateUnpoolWhiteListProposal, UpdateUnpoolWhiteListProposalSDKType } from "../../../osmosis/superfluid/v1beta1/gov";
import { UpdateFeeTokenProposal, UpdateFeeTokenProposalSDKType } from "../../../osmosis/txfees/v1beta1/gov";
import * as fm from "../../../grpc-gateway";
import { MsgSubmitProposal, MsgSubmitProposalSDKType, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, MsgExecLegacyContent, MsgExecLegacyContentSDKType, MsgExecLegacyContentResponse, MsgExecLegacyContentResponseSDKType, MsgVote, MsgVoteSDKType, MsgVoteResponse, MsgVoteResponseSDKType, MsgVoteWeighted, MsgVoteWeightedSDKType, MsgVoteWeightedResponse, MsgVoteWeightedResponseSDKType, MsgDeposit, MsgDepositSDKType, MsgDepositResponse, MsgDepositResponseSDKType } from "./tx";
export class Msg {
  /** SubmitProposal defines a method to create new proposal given a content. */
  static SubmitProposal(request: MsgSubmitProposal, initRequest?: fm.InitReq): Promise<MsgSubmitProposalResponse> {
    return fm.fetchReq(`/cosmos.gov.v1/SubmitProposal`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  /**
   * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
   * to execute a legacy content-based proposal.
   */
  static ExecLegacyContent(request: MsgExecLegacyContent, initRequest?: fm.InitReq): Promise<MsgExecLegacyContentResponse> {
    return fm.fetchReq(`/cosmos.gov.v1/ExecLegacyContent`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  /** Vote defines a method to add a vote on a specific proposal. */
  static Vote(request: MsgVote, initRequest?: fm.InitReq): Promise<MsgVoteResponse> {
    return fm.fetchReq(`/cosmos.gov.v1/Vote`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  /** VoteWeighted defines a method to add a weighted vote on a specific proposal. */
  static VoteWeighted(request: MsgVoteWeighted, initRequest?: fm.InitReq): Promise<MsgVoteWeightedResponse> {
    return fm.fetchReq(`/cosmos.gov.v1/VoteWeighted`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  /** Deposit defines a method to add deposit on a specific proposal. */
  static Deposit(request: MsgDeposit, initRequest?: fm.InitReq): Promise<MsgDepositResponse> {
    return fm.fetchReq(`/cosmos.gov.v1/Deposit`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}