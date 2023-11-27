import { Rpc } from "./helpers";
import * as _OsmosisClaimV1beta1Queryrpc from "./osmosis/claim/v1beta1/query.rpc.Query";
import * as _CosmosAuthV1beta1Queryrpc from "./cosmos/auth/v1beta1/query.rpc.Query";
export interface OsmosisClaim extends _OsmosisClaimV1beta1Queryrpc.OsmosisClaim {}
export class OsmosisClaim {
  readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.claimRecord = _OsmosisClaimV1beta1Queryrpc.createClientImpl(rpc).claimRecord;
    this.claimableForAction = _OsmosisClaimV1beta1Queryrpc.createClientImpl(rpc).claimableForAction;
  }
}
export interface CosmosAuthAccount extends _CosmosAuthV1beta1Queryrpc.CosmosAuthAccount {}
export class CosmosAuthAccount {
  readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.accounts = _CosmosAuthV1beta1Queryrpc.createClientImpl(rpc).accounts;
    this.account = _CosmosAuthV1beta1Queryrpc.createClientImpl(rpc).account;
    this.authModuleAccounts = _CosmosAuthV1beta1Queryrpc.createClientImpl(rpc).moduleAccounts;
  }
}