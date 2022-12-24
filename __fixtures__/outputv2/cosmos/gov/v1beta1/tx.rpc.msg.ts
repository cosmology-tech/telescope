import { Any, AnyAmino, AnyAminoType, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, VoteOptionAmino, VoteOptionAminoType, VoteOptionSDKType, WeightedVoteOption, WeightedVoteOptionAmino, WeightedVoteOptionAminoType, WeightedVoteOptionSDKType, TextProposal, TextProposalAmino, TextProposalAminoType, TextProposalSDKType } from "./gov";
import { RegisterIncentiveProposal, RegisterIncentiveProposalAmino, RegisterIncentiveProposalAminoType, RegisterIncentiveProposalSDKType } from "../../../evmos/incentives/v1/incentives";
import { ClientUpdateProposal, ClientUpdateProposalAmino, ClientUpdateProposalAminoType, ClientUpdateProposalSDKType, UpgradeProposal, UpgradeProposalAmino, UpgradeProposalAminoType, UpgradeProposalSDKType } from "../../../ibc/core/client/v1/client";
import { ReplacePoolIncentivesProposal, ReplacePoolIncentivesProposalAmino, ReplacePoolIncentivesProposalAminoType, ReplacePoolIncentivesProposalSDKType, UpdatePoolIncentivesProposal, UpdatePoolIncentivesProposalAmino, UpdatePoolIncentivesProposalAminoType, UpdatePoolIncentivesProposalSDKType } from "../../../osmosis/pool-incentives/v1beta1/gov";
import { SetSuperfluidAssetsProposal, SetSuperfluidAssetsProposalAmino, SetSuperfluidAssetsProposalAminoType, SetSuperfluidAssetsProposalSDKType, RemoveSuperfluidAssetsProposal, RemoveSuperfluidAssetsProposalAmino, RemoveSuperfluidAssetsProposalAminoType, RemoveSuperfluidAssetsProposalSDKType, UpdateUnpoolWhiteListProposal, UpdateUnpoolWhiteListProposalAmino, UpdateUnpoolWhiteListProposalAminoType, UpdateUnpoolWhiteListProposalSDKType } from "../../../osmosis/superfluid/v1beta1/gov";
import { UpdateFeeTokenProposal, UpdateFeeTokenProposalAmino, UpdateFeeTokenProposalAminoType, UpdateFeeTokenProposalSDKType } from "../../../osmosis/txfees/v1beta1/gov";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSubmitProposal, MsgSubmitProposalAmino, MsgSubmitProposalAminoType, MsgSubmitProposalSDKType, MsgSubmitProposalResponse, MsgSubmitProposalResponseAmino, MsgSubmitProposalResponseAminoType, MsgSubmitProposalResponseSDKType, MsgVote, MsgVoteAmino, MsgVoteAminoType, MsgVoteSDKType, MsgVoteResponse, MsgVoteResponseAmino, MsgVoteResponseAminoType, MsgVoteResponseSDKType, MsgVoteWeighted, MsgVoteWeightedAmino, MsgVoteWeightedAminoType, MsgVoteWeightedSDKType, MsgVoteWeightedResponse, MsgVoteWeightedResponseAmino, MsgVoteWeightedResponseAminoType, MsgVoteWeightedResponseSDKType, MsgDeposit, MsgDepositAmino, MsgDepositAminoType, MsgDepositSDKType, MsgDepositResponse, MsgDepositResponseAmino, MsgDepositResponseAminoType, MsgDepositResponseSDKType } from "./tx";

/** Msg defines the bank Msg service. */
export interface Msg {
  /** SubmitProposal defines a method to create new proposal given a content. */
  submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;

  /** Vote defines a method to add a vote on a specific proposal. */
  vote(request: MsgVote): Promise<MsgVoteResponse>;

  /**
   * VoteWeighted defines a method to add a weighted vote on a specific proposal.
   * 
   * Since: cosmos-sdk 0.43
   */
  voteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse>;

  /** Deposit defines a method to add deposit on a specific proposal. */
  deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.submitProposal = this.submitProposal.bind(this);
    this.vote = this.vote.bind(this);
    this.voteWeighted = this.voteWeighted.bind(this);
    this.deposit = this.deposit.bind(this);
  }

  submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse> {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "SubmitProposal", data);
    return promise.then(data => MsgSubmitProposalResponse.decode(new _m0.Reader(data)));
  }

  vote(request: MsgVote): Promise<MsgVoteResponse> {
    const data = MsgVote.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "Vote", data);
    return promise.then(data => MsgVoteResponse.decode(new _m0.Reader(data)));
  }

  voteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse> {
    const data = MsgVoteWeighted.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "VoteWeighted", data);
    return promise.then(data => MsgVoteWeightedResponse.decode(new _m0.Reader(data)));
  }

  deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
  }

}