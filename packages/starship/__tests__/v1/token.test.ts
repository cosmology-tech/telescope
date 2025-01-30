import { generateMnemonic } from "@confio/relayer/build/lib/helpers";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { assertIsDeliverTxSuccess, StargateClient } from '@cosmjs/stargate';

import {
  ibc,
  getSigningOsmosisClient,
  getSigningOsmosisTxRpc,
  osmosis,
} from "../../src/codegen1";
import { useChain } from 'starshipjs';
import "./setup.test";
import { MsgSend } from "../../src/codegen1/cosmos/bank/v1beta1/tx";
import { MsgTransfer } from "../../src/codegen1/ibc/applications/transfer/v1/tx";
import { QueryBalanceRequest } from "../../src/codegen1/cosmos/bank/v1beta1/query";

describe("Token transfers", () => {
  let wallet, denom, address;
  let chainInfo, getCoin, getRpcEndpoint, creditFromFaucet;

  beforeAll(async () => {
    ({
      chainInfo,
      getCoin,
      getRpcEndpoint,
      creditFromFaucet,
    } = useChain("osmosis"));
    denom = getCoin().base;

    // Initialize wallet
    wallet = await DirectSecp256k1HdWallet.fromMnemonic(generateMnemonic(), {
      prefix: chainInfo.chain.bech32_prefix,
    });
    address = (await wallet.getAccounts())[0].address;

    await creditFromFaucet(address);
  }, 200000);

  it("send osmosis token to address", async () => {
    // Initialize wallet
    const wallet2 = await DirectSecp256k1HdWallet.fromMnemonic(
      generateMnemonic(),
      { prefix: chainInfo.chain.bech32_prefix }
    );
    const address2 = (await wallet2.getAccounts())[0].address;

    const queryClient = await osmosis.ClientFactory.createRPCQueryClient({
      rpcEndpoint: getRpcEndpoint(),
    });

    const msgClient = await osmosis.ClientFactory.createRPCMsgExtensions({
      rpcEndpoint: getRpcEndpoint(),
      signer: wallet
    });

    const fee = {
      amount: [
        {
          denom,
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    const token = {
      amount: "10000000",
      denom,
    };

    // Transfer uosmo tokens from faceut
    const txResult = await msgClient.cosmos.bank.v1beta1.send(
      address,
      MsgSend.fromPartial({
        fromAddress: address,
        toAddress: address2,
        amount: [token],
      }),
      fee,
      "send tokens test"
    );

    assertIsDeliverTxSuccess(txResult);

    const { balance } = await queryClient.cosmos.bank.v1beta1.balance(QueryBalanceRequest.fromPartial({
      address: address2,
      denom
    }));

    expect(balance?.amount).toEqual(token.amount);
    expect(balance?.denom).toEqual(denom);
  }, 200000);

  it("send ibc osmo tokens to address on cosmos chain", async () => {
    const msgClient = await ibc.ClientFactory.createRPCMsgExtensions({
      rpcEndpoint: getRpcEndpoint(),
      signer: wallet
    });

    const {
      chainInfo: cosmosChainInfo,
      getRpcEndpoint: cosmosRpcEndpoint,
    } = useChain("cosmoshub");

    // Initialize wallet address for cosmos chain
    const cosmosWallet = await DirectSecp256k1HdWallet.fromMnemonic(
      generateMnemonic(),
      { prefix: cosmosChainInfo.chain.bech32_prefix }
    );
    const cosmosAddress = (await cosmosWallet.getAccounts())[0].address;

    const ibcInfos = chainInfo.fetcher.getChainIbcData(
      chainInfo.chain.chain_id
    );
    const ibcInfo = ibcInfos.find(
      (i) =>
        i.chain_1.chain_name === chainInfo.chain.chain_id &&
        i.chain_2.chain_name === cosmosChainInfo.chain.chain_id
    );

    expect(ibcInfo).toBeTruthy();

    const { port_id: sourcePort, channel_id: sourceChannel } =
      ibcInfo.channels[0].chain_1;

    // Transfer osmosis tokens via IBC to cosmos chain

    // count timeoutStamp in nanosecond(1sec == 1000000000nano)
    const currentTime = Math.floor(Date.now()) * 1000000;
    const timeoutTime = currentTime + 300 * 1000000000; // 5 minutes

    const fee = {
      amount: [
        {
          denom,
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    const token = {
      denom,
      amount: "10000000",
    };

    // send ibc tokens
    const txResult = await msgClient.ibc.applications.transfer.v1.transfer(
      address,
      MsgTransfer.fromPartial({
        sourcePort,
        sourceChannel,
        token,
        sender: address,
        receiver: cosmosAddress,
        timeoutTimestamp: BigInt(timeoutTime),
      }),
      fee,
      "test ibc transfer"
    );

    assertIsDeliverTxSuccess(txResult);

    // Check osmos in address on cosmos chain
    const cosmosClient = await StargateClient.connect(await cosmosRpcEndpoint());
    const balances = await cosmosClient.getAllBalances(cosmosAddress);

    // check balances
    expect(balances.length).toEqual(1);
    const ibcBalance = balances.find((balance) => {
      return balance.denom.startsWith("ibc/");
    });
    expect(ibcBalance!.amount).toEqual(token.amount);
    expect(ibcBalance!.denom).toContain("ibc/");

    // check ibc denom trace of the same
    const queryClient = await ibc.ClientFactory.createRPCQueryClient({
      rpcEndpoint: await cosmosRpcEndpoint(),
    });
    const trace = await queryClient.ibc.applications.transfer.v1.denomTrace({
      hash: ibcBalance!.denom.replace("ibc/", ""),
    });
    expect(trace?.denomTrace?.baseDenom).toEqual(denom);
  }, 200000);
});
