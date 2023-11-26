import * as _AkashCertV1beta2Queryrpc from "./akash/cert/v1beta2/query.rpc.Query";
import * as _CosmosAuthV1beta1Queryrpc from "./cosmos/auth/v1beta1/query.rpc.Query";
import * as _CosmosBankV1beta1Queryrpc from "./cosmos/bank/v1beta1/query.rpc.Query";
import * as _CosmosNftV1beta1Queryrpc from "./cosmos/nft/v1beta1/query.rpc.Query";
import { Rpc } from "./helpers";
import * as _OsmosisGammV1beta1Queryrpc from "./osmosis/gamm/v1beta1/query.rpc.Query";
import * as _OsmosisGammV2Queryrpc from "./osmosis/gamm/v2/query.rpc.Query";

export interface CosmosAuthAccount extends _CosmosAuthV1beta1Queryrpc.CosmosAuthAccountQuery {

}

export class CosmosAuthAccount {
  readonly rpc: Rpc

  constructor(rpc: Rpc) {
    this.rpc = rpc;

    this.account = _CosmosAuthV1beta1Queryrpc.createClientImpl(rpc).account;
    this.accounts = _CosmosAuthV1beta1Queryrpc.createClientImpl(rpc).accounts;
  }
}
