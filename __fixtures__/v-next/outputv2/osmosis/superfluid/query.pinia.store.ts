import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { SuperfluidAssetType, SuperfluidAssetTypeSDKType, SuperfluidAsset, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordSDKType, SuperfluidDelegationRecord, SuperfluidDelegationRecordSDKType } from "./superfluid";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock, SyntheticLockSDKType } from "../lockup/lock";
import { DelegationResponse, DelegationResponseSDKType } from "../../cosmos/staking/v1beta1/staking";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../pinia";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, AssetTypeRequest, AssetTypeRequestSDKType, AssetTypeResponse, AssetTypeResponseSDKType, AllAssetsRequest, AllAssetsRequestSDKType, AllAssetsResponse, AllAssetsResponseSDKType, AssetMultiplierRequest, AssetMultiplierRequestSDKType, AssetMultiplierResponse, AssetMultiplierResponseSDKType, AllIntermediaryAccountsRequest, AllIntermediaryAccountsRequestSDKType, AllIntermediaryAccountsResponse, AllIntermediaryAccountsResponseSDKType, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountRequestSDKType, ConnectedIntermediaryAccountResponse, ConnectedIntermediaryAccountResponseSDKType, QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomRequestSDKType, QueryTotalDelegationByValidatorForDenomResponse, QueryTotalDelegationByValidatorForDenomResponseSDKType, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsRequestSDKType, TotalSuperfluidDelegationsResponse, TotalSuperfluidDelegationsResponseSDKType, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountRequestSDKType, SuperfluidDelegationAmountResponse, SuperfluidDelegationAmountResponseSDKType, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorRequestSDKType, SuperfluidDelegationsByDelegatorResponse, SuperfluidDelegationsByDelegatorResponseSDKType, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorRequestSDKType, SuperfluidUndelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorResponseSDKType, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomRequestSDKType, SuperfluidDelegationsByValidatorDenomResponse, SuperfluidDelegationsByValidatorDenomResponseSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorRequestSDKType, QueryTotalDelegationByDelegatorResponse, QueryTotalDelegationByDelegatorResponseSDKType, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistRequestSDKType, QueryUnpoolWhitelistResponse, QueryUnpoolWhitelistResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('osmosis/superfluid/query.proto', {
  state: () => {
    return {
      params: ({} as QueryParamsResponse),
      assetType: ({} as AssetTypeResponse),
      allAssets: ({} as AllAssetsResponse),
      assetMultiplier: ({} as AssetMultiplierResponse),
      allIntermediaryAccounts: ({} as AllIntermediaryAccountsResponse),
      connectedIntermediaryAccount: ({} as ConnectedIntermediaryAccountResponse),
      totalDelegationByValidatorForDenom: ({} as QueryTotalDelegationByValidatorForDenomResponse),
      totalSuperfluidDelegations: ({} as TotalSuperfluidDelegationsResponse),
      superfluidDelegationAmount: ({} as SuperfluidDelegationAmountResponse),
      superfluidDelegationsByDelegator: ({} as SuperfluidDelegationsByDelegatorResponse),
      superfluidUndelegationsByDelegator: ({} as SuperfluidUndelegationsByDelegatorResponse),
      superfluidDelegationsByValidatorDenom: ({} as SuperfluidDelegationsByValidatorDenomResponse),
      estimateSuperfluidDelegatedAmountByValidatorDenom: ({} as EstimateSuperfluidDelegatedAmountByValidatorDenomResponse),
      totalDelegationByDelegator: ({} as QueryTotalDelegationByDelegatorResponse),
      unpoolWhitelist: ({} as QueryUnpoolWhitelistResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchParams(param : QueryParamsRequest) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    },

    async fetchAssetType(param : AssetTypeRequest) {
      this.assetType = await this.lcdClient.assetType(param);
      return this.assetType;
    },

    async fetchAllAssets(param : AllAssetsRequest) {
      this.allAssets = await this.lcdClient.allAssets(param);
      return this.allAssets;
    },

    async fetchAssetMultiplier(param : AssetMultiplierRequest) {
      this.assetMultiplier = await this.lcdClient.assetMultiplier(param);
      return this.assetMultiplier;
    },

    async fetchAllIntermediaryAccounts(param : AllIntermediaryAccountsRequest) {
      this.allIntermediaryAccounts = await this.lcdClient.allIntermediaryAccounts(param);
      return this.allIntermediaryAccounts;
    },

    async fetchConnectedIntermediaryAccount(param : ConnectedIntermediaryAccountRequest) {
      this.connectedIntermediaryAccount = await this.lcdClient.connectedIntermediaryAccount(param);
      return this.connectedIntermediaryAccount;
    },

    async fetchTotalDelegationByValidatorForDenom(param : QueryTotalDelegationByValidatorForDenomRequest) {
      this.totalDelegationByValidatorForDenom = await this.lcdClient.totalDelegationByValidatorForDenom(param);
      return this.totalDelegationByValidatorForDenom;
    },

    async fetchTotalSuperfluidDelegations(param : TotalSuperfluidDelegationsRequest) {
      this.totalSuperfluidDelegations = await this.lcdClient.totalSuperfluidDelegations(param);
      return this.totalSuperfluidDelegations;
    },

    async fetchSuperfluidDelegationAmount(param : SuperfluidDelegationAmountRequest) {
      this.superfluidDelegationAmount = await this.lcdClient.superfluidDelegationAmount(param);
      return this.superfluidDelegationAmount;
    },

    async fetchSuperfluidDelegationsByDelegator(param : SuperfluidDelegationsByDelegatorRequest) {
      this.superfluidDelegationsByDelegator = await this.lcdClient.superfluidDelegationsByDelegator(param);
      return this.superfluidDelegationsByDelegator;
    },

    async fetchSuperfluidUndelegationsByDelegator(param : SuperfluidUndelegationsByDelegatorRequest) {
      this.superfluidUndelegationsByDelegator = await this.lcdClient.superfluidUndelegationsByDelegator(param);
      return this.superfluidUndelegationsByDelegator;
    },

    async fetchSuperfluidDelegationsByValidatorDenom(param : SuperfluidDelegationsByValidatorDenomRequest) {
      this.superfluidDelegationsByValidatorDenom = await this.lcdClient.superfluidDelegationsByValidatorDenom(param);
      return this.superfluidDelegationsByValidatorDenom;
    },

    async fetchEstimateSuperfluidDelegatedAmountByValidatorDenom(param : EstimateSuperfluidDelegatedAmountByValidatorDenomRequest) {
      this.estimateSuperfluidDelegatedAmountByValidatorDenom = await this.lcdClient.estimateSuperfluidDelegatedAmountByValidatorDenom(param);
      return this.estimateSuperfluidDelegatedAmountByValidatorDenom;
    },

    async fetchTotalDelegationByDelegator(param : QueryTotalDelegationByDelegatorRequest) {
      this.totalDelegationByDelegator = await this.lcdClient.totalDelegationByDelegator(param);
      return this.totalDelegationByDelegator;
    },

    async fetchUnpoolWhitelist(param : QueryUnpoolWhitelistRequest) {
      this.unpoolWhitelist = await this.lcdClient.unpoolWhitelist(param);
      return this.unpoolWhitelist;
    }

  }
});