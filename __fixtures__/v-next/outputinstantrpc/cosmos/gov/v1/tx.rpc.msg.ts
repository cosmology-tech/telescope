import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, VoteOptionSDKType, WeightedVoteOption, WeightedVoteOptionSDKType } from "./gov";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSubmitProposal, MsgSubmitProposalSDKType, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, MsgExecLegacyContent, MsgExecLegacyContentSDKType, MsgExecLegacyContentResponse, MsgExecLegacyContentResponseSDKType, MsgVote, MsgVoteSDKType, MsgVoteResponse, MsgVoteResponseSDKType, MsgVoteWeighted, MsgVoteWeightedSDKType, MsgVoteWeightedResponse, MsgVoteWeightedResponseSDKType, MsgDeposit, MsgDepositSDKType, MsgDepositResponse, MsgDepositResponseSDKType } from "./tx";
/** Msg defines the gov Msg service. */
export interface Msg {
  /** SubmitProposal defines a method to create new proposal given a content. */
  submitProposal(request: BroadcastTxReq<MsgSubmitProposal>): Promise<BroadcastTxRes<MsgSubmitProposalResponse>>;
  /**
   * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
   * to execute a legacy content-based proposal.
   */
  execLegacyContent(request: BroadcastTxReq<MsgExecLegacyContent>): Promise<BroadcastTxRes<MsgExecLegacyContentResponse>>;
  /** Vote defines a method to add a vote on a specific proposal. */
  vote(request: BroadcastTxReq<MsgVote>): Promise<BroadcastTxRes<MsgVoteResponse>>;
  /** VoteWeighted defines a method to add a weighted vote on a specific proposal. */
  voteWeighted(request: BroadcastTxReq<MsgVoteWeighted>): Promise<BroadcastTxRes<MsgVoteWeightedResponse>>;
  /** Deposit defines a method to add deposit on a specific proposal. */
  deposit(request: BroadcastTxReq<MsgDeposit>): Promise<BroadcastTxRes<MsgDepositResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* SubmitProposal defines a method to create new proposal given a content. */
  submitProposal = async (request: BroadcastTxReq<MsgSubmitProposal>): Promise<BroadcastTxRes<MsgSubmitProposalResponse>> => {
    const data = [{
      typeUrl: MsgSubmitProposal.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgSubmitProposalResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
   to execute a legacy content-based proposal. */
  execLegacyContent = async (request: BroadcastTxReq<MsgExecLegacyContent>): Promise<BroadcastTxRes<MsgExecLegacyContentResponse>> => {
    const data = [{
      typeUrl: MsgExecLegacyContent.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgExecLegacyContentResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* Vote defines a method to add a vote on a specific proposal. */
  vote = async (request: BroadcastTxReq<MsgVote>): Promise<BroadcastTxRes<MsgVoteResponse>> => {
    const data = [{
      typeUrl: MsgVote.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgVoteResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* VoteWeighted defines a method to add a weighted vote on a specific proposal. */
  voteWeighted = async (request: BroadcastTxReq<MsgVoteWeighted>): Promise<BroadcastTxRes<MsgVoteWeightedResponse>> => {
    const data = [{
      typeUrl: MsgVoteWeighted.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgVoteWeightedResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* Deposit defines a method to add deposit on a specific proposal. */
  deposit = async (request: BroadcastTxReq<MsgDeposit>): Promise<BroadcastTxRes<MsgDepositResponse>> => {
    const data = [{
      typeUrl: MsgDeposit.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgDepositResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}
export const createMsgClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};