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
import { MsgDelegate } from '../../src/codegen1/cosmos/staking/v1beta1/tx';

describe('Staking tokens testing', () => {
  let wallet1, address1, denom;
  let chainInfo, getCoin,  getRpcEndpoint, creditFromFaucet;

  // Variables used accross testcases
  let queryClient;
  let msgClient1;

  let validatorAddress;
  let delegationAmount;

  beforeAll(async () => {
    ({
      chainInfo,
      getCoin,
      getRpcEndpoint,
      creditFromFaucet,
    } = useChain('osmosis'));
    denom = getCoin().base;

    // Initialize wallet
    wallet1 = await DirectSecp256k1HdWallet.fromMnemonic(generateMnemonic(), {
      prefix: chainInfo.chain.bech32_prefix,
    });
    address1 = (await wallet1.getAccounts())[0].address;

    msgClient1 = await cosmos.ClientFactory.createRPCMsgExtensions({
      rpcEndpoint: getRpcEndpoint(),
      signer: wallet1
    });

    // Create custom cosmos interchain client
    queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: getRpcEndpoint(),
    });

    // Transfer osmosis and ibc tokens to address, send only osmo to address
    await creditFromFaucet(address1);
  }, 200000);

  it('check address has tokens', async () => {
    const { balance } = await queryClient.cosmos.bank.v1beta1.balance({
      address: address1,
      denom,
    });

    expect(balance.amount).toEqual('10000000000');
  }, 10000);

  it('query validator address', async () => {
    const { validators } = await queryClient.cosmos.staking.v1beta1.validators({
      status: cosmos.staking.v1beta1.bondStatusToJSON(
        cosmos.staking.v1beta1.BondStatus.BOND_STATUS_BONDED
      ),
    });
    let allValidators = validators;
    if (validators.length > 1) {
      allValidators = validators.sort((a, b) =>
        BigInt(b.tokens) - BigInt(a.tokens)
      );
    }

    expect(allValidators.length).toBeGreaterThan(0);

    // set validator address to the first one
    validatorAddress = allValidators[0].operatorAddress;
  });

  it('stake tokens to genesis validator', async () => {

    const { balance } = await queryClient.cosmos.bank.v1beta1.balance({
      address: address1,
      denom,
    });

    // Stake half of the tokens
    // eslint-disable-next-line no-undef
    delegationAmount = (BigInt(balance.amount) / BigInt(2)).toString();

    const fee = {
      amount: [
        {
          denom,
          amount: '1000000',
        },
      ],
      gas: '550000',
    };

    let msg = MsgDelegate.fromPartial({
      delegatorAddress: address1,
      validatorAddress: validatorAddress,
      amount: {
        denom,
        amount: delegationAmount,
      },
    });

    const result = await msgClient1.cosmos.staking.v1beta1.delegate(
      address1,
      msg,
      fee
    );

    assertIsDeliverTxSuccess(result);
  });

  it('query delegation', async () => {
    const { delegationResponse } =
      await queryClient.cosmos.staking.v1beta1.delegation({
        delegatorAddr: address1,
        validatorAddr: validatorAddress,
      });

    // Assert that the delegation amount is the set delegation amount
    // eslint-disable-next-line no-undef
    expect(BigInt(delegationResponse.balance.amount)).toBeGreaterThan(
      // eslint-disable-next-line no-undef
      BigInt(0)
    );
    expect(delegationResponse.balance.amount).toEqual(delegationAmount);
    expect(delegationResponse.balance.denom).toEqual(denom);
  });
});
