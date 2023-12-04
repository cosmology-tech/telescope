import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, VoteOptionSDKType, WeightedVoteOption, WeightedVoteOptionSDKType } from "./gov";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSubmitProposal, MsgSubmitProposalSDKType, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, MsgExecLegacyContent, MsgExecLegacyContentSDKType, MsgExecLegacyContentResponse, MsgExecLegacyContentResponseSDKType, MsgVote, MsgVoteSDKType, MsgVoteResponse, MsgVoteResponseSDKType, MsgVoteWeighted, MsgVoteWeightedSDKType, MsgVoteWeightedResponse, MsgVoteWeightedResponseSDKType, MsgDeposit, MsgDepositSDKType, MsgDepositResponse, MsgDepositResponseSDKType } from "./tx";
/** Msg defines the gov Msg service. */
export interface Msg {
  /** SubmitProposal defines a method to create new proposal given a content. */
  submitProposal(request: BroadcastTxReq<MsgSubmitProposal>): Promise<DeliverTxResponse>;
  /**
   * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
   * to execute a legacy content-based proposal.
   */
  execLegacyContent(request: BroadcastTxReq<MsgExecLegacyContent>): Promise<DeliverTxResponse>;
  /** Vote defines a method to add a vote on a specific proposal. */
  vote(request: BroadcastTxReq<MsgVote>): Promise<DeliverTxResponse>;
  /** VoteWeighted defines a method to add a weighted vote on a specific proposal. */
  voteWeighted(request: BroadcastTxReq<MsgVoteWeighted>): Promise<DeliverTxResponse>;
  /** Deposit defines a method to add deposit on a specific proposal. */
  deposit(request: BroadcastTxReq<MsgDeposit>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* SubmitProposal defines a method to create new proposal given a content. */
  submitProposal = async (request: BroadcastTxReq<MsgSubmitProposal>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSubmitProposal.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
   to execute a legacy content-based proposal. */
  execLegacyContent = async (request: BroadcastTxReq<MsgExecLegacyContent>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgExecLegacyContent.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* Vote defines a method to add a vote on a specific proposal. */
  vote = async (request: BroadcastTxReq<MsgVote>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgVote.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* VoteWeighted defines a method to add a weighted vote on a specific proposal. */
  voteWeighted = async (request: BroadcastTxReq<MsgVoteWeighted>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgVoteWeighted.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* Deposit defines a method to add deposit on a specific proposal. */
  deposit = async (request: BroadcastTxReq<MsgDeposit>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgDeposit.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};