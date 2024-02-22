import { generateMnemonic } from "@confio/relayer/build/lib/helpers";
import { assertIsDeliverTxSuccess } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import BigNumber from "bignumber.js";

import { cosmos, getSigningOsmosisClient } from "../../src/codegen1";
import { useChain, waitUntil } from "../../src";
import "./setup.test";

describe("Governance tests for osmosis", () => {
  let protoSigner, denom, address;
  let chainInfo, getCoin, getRpcEndpoint, creditFromFaucet;

  // Variables used accross testcases
  let proposalId;
  let validatorAddress;

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain("osmosis"));
    denom = getCoin().base;

    // Initialize wallet
    protoSigner = await DirectSecp256k1HdWallet.fromMnemonic(
      generateMnemonic(),
      {
        prefix: chainInfo.chain.bech32_prefix,
      }
    );
    address = (await protoSigner.getAccounts())[0].address;

    // Transfer osmosis to address
    await creditFromFaucet(address);
  }, 200000);

  it("check address has tokens", async () => {
    const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: getRpcEndpoint(),
    });

    const { balance } = await queryClient.cosmos.bank.v1beta1.balance({
      address,
      denom,
    });

    expect(balance?.amount).toEqual("10000000000");
  }, 200000);

  it("query validator address", async () => {
    const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: getRpcEndpoint(),
    });

    const { validators } = await queryClient.cosmos.staking.v1beta1.validators({
      status: cosmos.staking.v1beta1.bondStatusToJSON(
        cosmos.staking.v1beta1.BondStatus.BOND_STATUS_BONDED
      ),
    });
    let allValidators = validators;
    if (validators.length > 1) {
      allValidators = validators.sort((a, b) =>
        new BigNumber(b.tokens).minus(new BigNumber(a.tokens)).toNumber()
      );
    }

    expect(allValidators.length).toBeGreaterThan(0);

    // set validator address to the first one
    validatorAddress = allValidators[0].operatorAddress;
  }, 200000);

  it("stake tokens to genesis validator", async () => {
    const msgClient = await cosmos.ClientFactory.createRPCMsgExtensions({
      rpcEndpoint: getRpcEndpoint(),
      signer: protoSigner,
    });

    const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: getRpcEndpoint(),
    });

    const { balance } = await queryClient.cosmos.bank.v1beta1.balance({
      address,
      denom,
    });

    // Stake half of the tokens
    // eslint-disable-next-line no-undef
    const delegationAmount = (BigInt(balance!.amount) / BigInt(2)).toString();

    const fee = {
      amount: [
        {
          denom,
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    // const result = await (address, [msg], fee);
    const result = await msgClient.cosmos.staking.v1beta1.delegate(
      address,
      {
        delegatorAddress: address,
        validatorAddress: validatorAddress,
        amount: {
          amount: delegationAmount,
          denom: balance!.denom,
        },
      },
      fee
    );
    assertIsDeliverTxSuccess(result);
  }, 200000);

  it("submit a txt proposal", async () => {
    const msgClient = await cosmos.ClientFactory.createRPCMsgExtensions({
      rpcEndpoint: getRpcEndpoint(),
      signer: protoSigner,
    });

    const contentMsg = cosmos.gov.v1beta1.TextProposal.fromPartial({
      title: "Test Proposal",
      description: "Test text proposal for the e2e testing",
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

    const result = await msgClient.cosmos.gov.v1beta1.submitProposal(
      address,
      {
        proposer: address,
        initialDeposit: [
          {
            amount: "1000000",
            denom: denom,
          },
        ],
        content: contentMsg,
      },
      fee
    );
    assertIsDeliverTxSuccess(result);

    // Get proposal id from log events
    const proposalIdEvent = result.events.find(
      (event) => event.type === "submit_proposal"
    );
    proposalId = proposalIdEvent!.attributes.find(
      (attr) => attr.key === "proposal_id"
    )!.value;

    // eslint-disable-next-line no-undef
    expect(BigInt(proposalId)).toBeGreaterThan(BigInt(0));
  }, 200000);

  it("query proposal", async () => {
    const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: getRpcEndpoint(),
    });

    const result = await queryClient.cosmos.gov.v1beta1.proposal({
      proposalId: BigInt(proposalId),
    });

    expect(result.proposal.proposalId.toString()).toEqual(proposalId);
  }, 200000);

  it("vote on proposal from genesis address", async () => {
    // create genesis address signing client
    const msgClient = await cosmos.ClientFactory.createRPCMsgExtensions({
      rpcEndpoint: getRpcEndpoint(),
      signer: protoSigner,
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

    // Vote on proposal from genesis mnemonic address
    const result = await msgClient.cosmos.gov.v1beta1.vote(
      address,
      {
        proposalId: BigInt(proposalId),
        voter: address,
        option: cosmos.gov.v1beta1.VoteOption.VOTE_OPTION_YES,
      },
      fee
    );

    assertIsDeliverTxSuccess(result);
  }, 200000);

  it("verify vote", async () => {
    const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: getRpcEndpoint(),
    });

    const { vote } = await queryClient.cosmos.gov.v1beta1.vote({
      proposalId: BigInt(proposalId),
      voter: address,
    });

    expect(vote.proposalId.toString()).toEqual(proposalId);
    expect(vote.voter).toEqual(address);
  }, 200000);

  it("wait for voting period to end", async () => {
    const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: getRpcEndpoint(),
    });

    // wait for the voting period to end
    const { proposal } = await queryClient.cosmos.gov.v1beta1.proposal({
      proposalId: BigInt(proposalId),
    });

    await expect(waitUntil(proposal.votingEndTime)).resolves.not.toThrow();
  }, 200000);

  it("verify proposal passed", async () => {
    const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: getRpcEndpoint(),
    });

    const { proposal } = await queryClient.cosmos.gov.v1beta1.proposal({
      proposalId: BigInt(proposalId),
    });

    expect(proposal.status).toEqual(
      cosmos.gov.v1beta1.ProposalStatus.PROPOSAL_STATUS_PASSED
    );
  }, 200000);
});
