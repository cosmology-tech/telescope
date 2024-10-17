import { expectCode } from "../../../test-utils";
import { createMsgHelperCreator } from "./msg-funcs";

it('works', async () => {
  expectCode(createMsgHelperCreator({} as any, {} as any, 'balance', 'createGetBalance'));
});