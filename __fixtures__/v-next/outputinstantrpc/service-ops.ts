import { TxRpc } from "./types";
import * as _OsmosisClaimV1beta1Queryrpc from "./osmosis/claim/v1beta1/query.rpc.Query";
import * as _CosmosAuthV1beta1Queryrpc from "./cosmos/auth/v1beta1/query.rpc.Query";
import * as _CosmosGovV1beta1Queryrpc from "./cosmos/gov/v1beta1/query.rpc.Query";
import * as _CosmosGovV1beta1Txrpc from "./cosmos/gov/v1beta1/tx.rpc.msg";
export interface OsmosisClaim extends _OsmosisClaimV1beta1Queryrpc.OsmosisClaim {}
export class OsmosisClaim {
  rpc: TxRpc;
  init(rpc: TxRpc) {
    this.rpc = rpc;
    this.claimRecord = _OsmosisClaimV1beta1Queryrpc.createClientImpl(rpc).claimRecord;
    this.claimableForAction = _OsmosisClaimV1beta1Queryrpc.createClientImpl(rpc).claimableForAction;
  }
}
export interface CosmosAuthQueryAccount extends _CosmosAuthV1beta1Queryrpc.CosmosAuthQueryAccount, _CosmosGovV1beta1Queryrpc.CosmosAuthQueryAccount {}
export class CosmosAuthQueryAccount {
  rpc: TxRpc;
  init(rpc: TxRpc) {
    this.rpc = rpc;
    this.accounts = _CosmosAuthV1beta1Queryrpc.createClientImpl(rpc).accounts;
    this.account = _CosmosAuthV1beta1Queryrpc.createClientImpl(rpc).account;
    this.authModuleAccounts = _CosmosAuthV1beta1Queryrpc.createClientImpl(rpc).moduleAccounts;
    this.proposal = _CosmosGovV1beta1Queryrpc.createClientImpl(rpc).proposal;
    this.proposals = _CosmosGovV1beta1Queryrpc.createClientImpl(rpc).proposals;
    this.vote = _CosmosGovV1beta1Queryrpc.createClientImpl(rpc).vote;
    this.votes = _CosmosGovV1beta1Queryrpc.createClientImpl(rpc).votes;
    this.params = _CosmosGovV1beta1Queryrpc.createClientImpl(rpc).params;
    this.deposit = _CosmosGovV1beta1Queryrpc.createClientImpl(rpc).deposit;
    this.deposits = _CosmosGovV1beta1Queryrpc.createClientImpl(rpc).deposits;
    this.tallyResult = _CosmosGovV1beta1Queryrpc.createClientImpl(rpc).tallyResult;
  }
}
export interface CosmosAuthTxAccount extends _CosmosGovV1beta1Txrpc.CosmosAuthTxAccount {}
export class CosmosAuthTxAccount {
  rpc: TxRpc;
  init(rpc: TxRpc) {
    this.rpc = rpc;
    this.submitProposal = _CosmosGovV1beta1Txrpc.createClientImpl(rpc).submitProposal;
    this.txVote = _CosmosGovV1beta1Txrpc.createClientImpl(rpc).vote;
    this.voteWeighted = _CosmosGovV1beta1Txrpc.createClientImpl(rpc).voteWeighted;
    this.txDeposit = _CosmosGovV1beta1Txrpc.createClientImpl(rpc).deposit;
  }
}