import { Rpc } from "../helpers.js";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  akash: {
    audit: {
      v1beta1: new (await import("./audit/v1beta1/audit.rpc.msg.js")).MsgClientImpl(rpc),
      v1beta2: new (await import("./audit/v1beta2/audit.rpc.msg.js")).MsgClientImpl(rpc)
    },
    cert: {
      v1beta2: new (await import("./cert/v1beta2/cert.rpc.msg.js")).MsgClientImpl(rpc)
    },
    deployment: {
      v1beta2: new (await import("./deployment/v1beta2/service.rpc.msg.js")).MsgClientImpl(rpc)
    },
    market: {
      v1beta2: new (await import("./market/v1beta2/service.rpc.msg.js")).MsgClientImpl(rpc)
    },
    provider: {
      v1beta1: new (await import("./provider/v1beta1/provider.rpc.msg.js")).MsgClientImpl(rpc),
      v1beta2: new (await import("./provider/v1beta2/provider.rpc.msg.js")).MsgClientImpl(rpc)
    }
  },
  cosmos: {
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc)
    },
    crisis: {
      v1beta1: new (await import("../cosmos/crisis/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc)
    },
    evidence: {
      v1beta1: new (await import("../cosmos/evidence/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc)
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc)
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/tx.rpc.msg.js")).MsgClientImpl(rpc),
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc)
    },
    group: {
      v1: new (await import("../cosmos/group/v1/tx.rpc.msg.js")).MsgClientImpl(rpc)
    },
    nft: {
      v1beta1: new (await import("../cosmos/nft/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc)
    },
    slashing: {
      v1beta1: new (await import("../cosmos/slashing/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc)
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc)
    },
    vesting: {
      v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc)
    }
  }
});