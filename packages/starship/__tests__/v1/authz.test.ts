import { generateMnemonic } from "@confio/relayer/build/lib/helpers";
import { assertIsDeliverTxSuccess } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

import { cosmos, getSigningCosmosClient, getSigningCosmosTxRpc } from "../../src/codegen1";
import { useChain } from 'starshipjs';
import "./setup.test";
import {
  GenericAuthorization,
  Grant,
} from "../../src/codegen1/cosmos/authz/v1beta1/authz";
import {
  MsgExec,
  MsgGrant,
  MsgRevoke,
} from "../../src/codegen1/cosmos/authz/v1beta1/tx";
import { SendAuthorization } from "../../src/codegen1/cosmos/bank/v1beta1/authz";
import { MsgVote } from "../../src/codegen1/cosmos/gov/v1beta1/tx";
import { QueryGrantsRequest } from "../../src/codegen1/cosmos/authz/v1beta1/query";
import { MsgSend } from "../../src/codegen1/cosmos/bank/v1beta1/tx";

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

describe("Authz testing", () => {
  let wallet1, address1, denom;
  let wallet2, address2;
  let wallet3, address3;
  let chainInfo, getCoin, getRpcEndpoint, creditFromFaucet;
  let expiration;

  // Variables used accross testcases

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain("cosmoshub"));
    denom = (await getCoin()).base;

    // Initialize wallet
    wallet1 = await DirectSecp256k1HdWallet.fromMnemonic(generateMnemonic(), {
      prefix: chainInfo.chain.bech32_prefix,
    });
    address1 = (await wallet1.getAccounts())[0].address;

    wallet2 = await DirectSecp256k1HdWallet.fromMnemonic(generateMnemonic(), {
      prefix: chainInfo.chain.bech32_prefix,
    });
    address2 = (await wallet2.getAccounts())[0].address;

    wallet3 = await DirectSecp256k1HdWallet.fromMnemonic(generateMnemonic(), {
      prefix: chainInfo.chain.bech32_prefix,
    });
    address3 = (await wallet3.getAccounts())[0].address;

    // Transfer osmosis and ibc tokens to address, send only osmo to address
    await creditFromFaucet(address1);
    await creditFromFaucet(address2);
    await creditFromFaucet(address3);

    expiration = new Date();
    expiration.setDate(expiration.getDate() + 1);

    console.log(`address1: ${address1}, address2: ${address2}, address3: ${address3}, expiration: ${expiration}`)
  }, 200000);

  it("check address1 has tokens", async () => {
    const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: await getRpcEndpoint(),
    });

    const { balance } = await queryClient.cosmos.bank.v1beta1.balance({
      address: address1,
      denom,
    });

    expect(balance?.amount).toEqual("10000000000");
  }, 200000);

  it("check address2 has tokens", async () => {
    const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: await getRpcEndpoint(),
    });

    const { balance } = await queryClient.cosmos.bank.v1beta1.balance({
      address: address2,
      denom,
    });

    expect(balance?.amount).toEqual("10000000000");
  }, 200000);

  it("check address3 has tokens", async () => {
    const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: await getRpcEndpoint(),
    });

    const { balance } = await queryClient.cosmos.bank.v1beta1.balance({
      address: address3,
      denom,
    });

    expect(balance?.amount).toEqual("10000000000");
  }, 200000);

  it("grant address2 Send Auth with limits", async () => {
    const msgClient1 = await cosmos.ClientFactory.createRPCMsgExtensions({
      rpcEndpoint: await getRpcEndpoint(),
      signer: wallet1,
    });

    const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: await getRpcEndpoint(),
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

    const msg = MsgGrant.fromPartial({
      granter: address1,
      grantee: address2,
      grant: Grant.fromPartial({
        authorization: SendAuthorization.fromPartial({
          spendLimit: [
            {
              denom: denom,
              amount: "1000000",
            },
          ],
        }),
        expiration: expiration,
      }),
    });

    const result = await msgClient1.cosmos.authz.v1beta1.grant(
      address1,
      msg,
      fee
    );

    assertIsDeliverTxSuccess(result);

    const authsResults = await queryClient.cosmos.authz.v1beta1.granteeGrants({
      grantee: address2,
    });

    expect(authsResults?.grants?.length).toBeGreaterThan(0);

    const auth = authsResults.grants[0].authorization;

    expect(SendAuthorization.is(auth)).toBeTruthy();

    if (SendAuthorization.is(auth)) {
      expect(auth.spendLimit[0].amount).toBe("1000000");
    }
  }, 200000);

  it("grant address3 Generic Send Auth", async () => {
    const msgClient1 = await cosmos.ClientFactory.createRPCMsgExtensions({
      rpcEndpoint: await getRpcEndpoint(),
      signer: wallet1,
    });

    const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: await getRpcEndpoint(),
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

    const msg = MsgGrant.fromPartial({
      granter: address1,
      grantee: address3,
      grant: Grant.fromPartial({
        authorization: GenericAuthorization.fromPartial({
          msg: MsgSend.typeUrl,
        }),
        expiration: expiration,
      }),
    });

    const result = await msgClient1.cosmos.authz.v1beta1.grant(
      address1,
      msg,
      fee
    );

    assertIsDeliverTxSuccess(result);

    const authsResults = await queryClient.cosmos.authz.v1beta1.granteeGrants({
      grantee: address3,
    });

    expect(authsResults?.grants?.length).toBeGreaterThan(0);

    const auth = authsResults.grants[0].authorization;

    expect(GenericAuthorization.is(auth)).toBeTruthy();

    if (GenericAuthorization.is(auth)) {
      expect(auth.msg).toBe(MsgSend.typeUrl);
    }
  }, 200000);

  it("grant address2 Generic Vote Auth", async () => {
    const msgClient1 = await cosmos.ClientFactory.createRPCMsgExtensions({
      rpcEndpoint: await getRpcEndpoint(),
      signer: wallet1,
    });

    const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: await getRpcEndpoint(),
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

    const msg = MsgGrant.fromPartial({
      granter: address1,
      grantee: address2,
      grant: Grant.fromPartial({
        authorization: GenericAuthorization.fromPartial({
          msg: MsgVote.typeUrl,
        }),
        expiration: expiration,
      }),
    });

    const result = await msgClient1.cosmos.authz.v1beta1.grant(
      address1,
      msg,
      fee
    );

    assertIsDeliverTxSuccess(result);

    const authsResults = await queryClient.cosmos.authz.v1beta1.granteeGrants({
      grantee: address2,
    });

    expect(authsResults?.grants?.length).toBeGreaterThan(0);

    const auth = authsResults.grants[1].authorization;

    expect(GenericAuthorization.is(auth)).toBeTruthy();

    if (GenericAuthorization.is(auth)) {
      expect(auth.msg).toBe(MsgVote.typeUrl);
    }
  }, 200000);

  it("get address2 auths", async () => {
    await sleep(1000)
    const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: await getRpcEndpoint(),
    });

    console.log(`granter: ${address1}, grantee: ${address2}, msg: ${MsgVote.typeUrl}`)
    await sleep(1000)
    const authsResults = await queryClient.cosmos.authz.v1beta1.grants(QueryGrantsRequest.fromPartial({
      granter: address1,
      grantee: address2,
      msgTypeUrl: MsgVote.typeUrl
    }));

    console.log(authsResults);

  }, 2000000);

  it("exec address2 send", async () => {
    const msgClient2 = await cosmos.ClientFactory.createRPCMsgExtensions({
      rpcEndpoint: await getRpcEndpoint(),
      signer: wallet2,
    });

    const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: await getRpcEndpoint(),
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

    const msg = MsgExec.fromPartial({
      grantee: address2,
      msgs: [
        MsgSend.toProtoMsg(
          MsgSend.fromPartial({
            fromAddress: address1,
            toAddress: address2,
            amount: [
              {
                denom,
                amount: "90000",
              },
            ],
          })
        ),
      ],
    });

    const result = await msgClient2.cosmos.authz.v1beta1.exec(
      address2,
      msg,
      fee
    );

    assertIsDeliverTxSuccess(result);

    const { balance } = await queryClient.cosmos.bank.v1beta1.balance({
      address: address2,
      denom,
    });

    console.log(balance)

    expect(balance?.amount).toEqual("9999990000"); // not 10000000000, due to fees deduction
  }, 2000000);

  it("revoke address2 vote auth", async () => {
    const msgClient1 = await cosmos.ClientFactory.createRPCMsgExtensions({
      rpcEndpoint: await getRpcEndpoint(),
      signer: wallet1,
    });

    const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: await getRpcEndpoint(),
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

    const msg = MsgRevoke.fromPartial({
      granter: address1,
      grantee: address2,
      msgTypeUrl: MsgVote.typeUrl,
    });

    const result = await msgClient1.cosmos.authz.v1beta1.revoke(
      address1,
      msg,
      fee
    );

    assertIsDeliverTxSuccess(result);

    const authsResults = await queryClient.cosmos.authz.v1beta1.granteeGrants({
      grantee: address2,
    });

    expect(authsResults?.grants?.length).toBe(1);

    const auth = authsResults.grants[0].authorization;

    expect(SendAuthorization.is(auth)).toBeTruthy();

    if (SendAuthorization.is(auth)) {
      expect(auth.spendLimit[0].amount).toBe("910000"); // not 1000000 due to fees
    }
  }, 200000);

  it("revoke address3 generic send auth", async () => {
    const msgClient1 = await cosmos.ClientFactory.createRPCMsgExtensions({
      rpcEndpoint: await getRpcEndpoint(),
      signer: wallet1,
    });

    const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: await getRpcEndpoint(),
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

    const msg = MsgRevoke.fromPartial({
      granter: address1,
      grantee: address3,
      msgTypeUrl: MsgSend.typeUrl,
    });

    const result = await msgClient1.cosmos.authz.v1beta1.revoke(
      address1,
      msg,
      fee
    );

    assertIsDeliverTxSuccess(result);

    const authsResults = await queryClient.cosmos.authz.v1beta1.granteeGrants({
      grantee: address3,
    });

    expect(authsResults?.grants?.length).toBe(0);
  }, 200000);

  it("revoke address2 send auth", async () => {
    const msgClient1 = await cosmos.ClientFactory.createRPCMsgExtensions({
      rpcEndpoint: await getRpcEndpoint(),
      signer: wallet1,
    });

    const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: await getRpcEndpoint(),
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

    const msg = MsgRevoke.fromPartial({
      granter: address1,
      grantee: address2,
      msgTypeUrl: MsgSend.typeUrl,
    });

    const result = await msgClient1.cosmos.authz.v1beta1.revoke(
      address1,
      msg,
      fee
    );

    assertIsDeliverTxSuccess(result);

    const authsResults = await queryClient.cosmos.authz.v1beta1.granteeGrants({
      grantee: address2,
    });

    expect(authsResults?.grants?.length).toBe(0);
  }, 200000);
});
