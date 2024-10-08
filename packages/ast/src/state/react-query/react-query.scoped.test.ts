import {
  expectCode,
  getGenericParseContext,
  getTestProtoStore,
} from "../../../test-utils";
import * as t from "@babel/types";
import { createScopedRpcHookFactory } from "./scoped-bundle";

const store = getTestProtoStore();
store.traverseAll();

it("createScopedRpcHookFactory", async () => {
  const context = getGenericParseContext();
  expectCode(
    t.program(
      createScopedRpcHookFactory(
        context,
        {
          cosmos: {
            bank: {
              v1beta1: "./proto/cosmos/bank/v1beta1/a.lcd",
            },
            gov: {
              v1beta1: "./proto/cosmos/bank/v1beta1/b.lcd",
            },
          },
          osmosis: {
            gamm: {
              v1beta1: "./proto/cosmos/bank/v1beta1/c.lcd",
            },
          },
        },
        "createRpcFactorizzle",
        {
          useBankBalance: {
            useHookName: "useBalance",
            importedVarName: "_CosmosBankV1beta1Queryrpc",
            comment: "Get Balance for bank"
          },
          useNftBalance: {
            useHookName: "useBalance",
            importedVarName: "_CosmosNftV1beta1Queryrpc",
            comment: "Get Balance for nft"
          },
          useAccount: {
            useHookName: "useAccount",
            importedVarName: "_CosmosAuthV1beta1Queryrpc",
            comment: "Get Account"
          },
        }
      ) as t.Statement[]
    )
  );
});
