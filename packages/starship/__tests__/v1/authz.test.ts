import { generateMnemonic } from '@confio/relayer/build/lib/helpers';
import {
  assertIsDeliverTxSuccess,
} from '@cosmjs/stargate';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

import {
  cosmos,
  getSigningCosmosTxRpc,
} from '../../src/codegen1';
import { useChain } from '../../src';
import './setup.test';
import {
  Grant,
} from '../../src/codegen1/cosmos/authz/v1beta1/authz';
import { MsgGrant } from '../../src/codegen1/cosmos/authz/v1beta1/tx';
import { SendAuthorization } from '../../src/codegen1/cosmos/bank/v1beta1/authz';

describe('Authz testing', () => {
  let wallet1, address1, denom;
  let wallet2, address2;
  let chainInfo, getCoin, getRpcEndpoint, creditFromFaucet;

  // Variables used accross testcases
  let txRpc;

  beforeAll(async () => {
    ({
      chainInfo,
      getCoin,
      getRpcEndpoint,
      creditFromFaucet,
    } = useChain('cosmos'));
    denom = getCoin().base;

    // Initialize wallet
    wallet1 = await DirectSecp256k1HdWallet.fromMnemonic(generateMnemonic(), {
      prefix: chainInfo.chain.bech32_prefix,
    });
    address1 = (await wallet1.getAccounts())[0].address;

    wallet2 = await DirectSecp256k1HdWallet.fromMnemonic(generateMnemonic(), {
      prefix: chainInfo.chain.bech32_prefix,
    });
    address2 = (await wallet2.getAccounts())[0].address;

    txRpc = await getSigningCosmosTxRpc({
      rpcEndpoint: getRpcEndpoint(),
      signer: wallet1,
    });

    // Transfer osmosis and ibc tokens to address, send only osmo to address
    await creditFromFaucet(address1);
    await creditFromFaucet(address2);
  }, 200000);

  it('check address1 has tokens', async () => {
    const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: getRpcEndpoint(),
    });

    const { balance } = await queryClient.cosmos.bank.v1beta1.balance({
      address: address1,
      denom,
    });

    expect(balance?.amount).toEqual('10000000000');
  }, 10000);

  it('check address2 has tokens', async () => {
    const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: getRpcEndpoint(),
    });

    const { balance } = await queryClient.cosmos.bank.v1beta1.balance({
      address: address2,
      denom,
    });

    expect(balance?.amount).toEqual('10000000000');
  }, 10000);

  it('grant address2', async () => {
    const msgClient1 = await cosmos.ClientFactory.createRPCMsgClient({
      rpc: txRpc,
    });

    const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: getRpcEndpoint(),
    });

    const fee = {
      amount: [
        {
          denom,
          amount: '100000',
        },
      ],
      gas: '550000',
    };

    const msg = MsgGrant.fromPartial({
      granter: address1,
      grantee: address2,
      grant: Grant.fromPartial({
        authorization: SendAuthorization.fromPartial({
          spendLimit: [
            {
              denom: denom,
              amount: '100000',
            },
          ],
        }),
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
  }, 10000);
});
