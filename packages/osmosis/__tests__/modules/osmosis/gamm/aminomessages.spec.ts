import { coins, coin } from "@cosmjs/proto-signing";
import { MsgJoinPool, MsgSwapExactAmountIn } from "../../../../src/proto/osmosis/gamm/v1beta1/tx";
import Long from 'long';
import {
  AminoTypes,
} from '@cosmjs/stargate';

import { AminoMsgJoinPool, AminoMsgSwapExactAmountIn, AminoConverter } from "../../../../src/proto/osmosis/gamm/v1beta1/tx.aminos";

describe("AminoTypes", () => {
  describe("toAmino", () => {
    it("works for MsgJoinPool", () => {
      const msg: MsgJoinPool = {
        sender: "osmo1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        poolId: Long.fromNumber(3),
        shareOutAmount: "1000",
        tokenInMaxs: [
          coin(1234, "uosmo")
        ]
      };
      const aminoTypes = new AminoTypes({ additions: AminoConverter });
      const aminoMsg = aminoTypes.toAmino({
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
        value: msg,
      });
      const expected: AminoMsgJoinPool = {
        type: "osmosis/gamm/join-pool",
        value: {
          sender: "osmo1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          poolId: "3",
          shareOutAmount: "1000",
          tokenInMaxs: [
            coin(1234, "uosmo")
          ]

        },
      };
      expect(aminoMsg).toEqual(expected);
    });
  });

  describe("fromAmino", () => {
    it("works for MsgJoinPool", () => {
      const aminoMsg: AminoMsgJoinPool = {
        type: "osmosis/gamm/join-pool",
        value: {
          from_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          to_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
          amount: coins(1234, "ucosm"),
        },
      };
      const msg = new AminoTypes({ additions: AminoConverter }).fromAmino(aminoMsg);
      const expectedValue: MsgJoinPool = {
        fromAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        toAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
        amount: coins(1234, "ucosm"),
      };
      expect(msg).toEqual({
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
        value: expectedValue,
      });
    });
  });
});
