import { coin } from "@cosmjs/proto-signing";
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
    it("works for MsgSwapExactAmountIn", () => {
      const msg: MsgSwapExactAmountIn = {
        sender: "osmo1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        routes: [
          {
            poolId: Long.fromNumber(1),
            tokenOutDenom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
          }
        ],
        tokenIn: {
          denom: 'uosmo',
          amount: '25652'
        },
        tokenOutMinAmount: '6036'
      };
      const aminoTypes = new AminoTypes({ additions: AminoConverter });
      const aminoMsg = aminoTypes.toAmino({
        typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
        value: msg,
      });
      const expected: AminoMsgSwapExactAmountIn = {
        type: "osmosis/gamm/swap-exact-amount-in",
        value: {
          sender: "osmo1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          routes: [
            {
              poolId: "1",
              tokenOutDenom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
            }
          ],
          tokenIn: {
            denom: 'uosmo',
            amount: '25652'
          },
          tokenOutMinAmount: '6036'
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
          sender: "osmo1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          poolId: "3",
          shareOutAmount: "1000",
          tokenInMaxs: [
            coin(1234, "uosmo")
          ]
        },
      };
      const msg = new AminoTypes({ additions: AminoConverter }).fromAmino(aminoMsg);
      const expectedValue: MsgJoinPool = {
        sender: "osmo1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        poolId: Long.fromNumber(3),
        shareOutAmount: "1000",
        tokenInMaxs: [
          coin(1234, "uosmo")
        ]
      };
      expect(msg).toEqual({
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
        value: expectedValue,
      });
    });
    it("works for MsgSwapExactAmountIn", () => {
      const aminoMsg: AminoMsgSwapExactAmountIn = {
        type: "osmosis/gamm/swap-exact-amount-in",
        value: {
          sender: "osmo1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          routes: [
            {
              poolId: "1",
              tokenOutDenom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
            }
          ],
          tokenIn: {
            denom: 'uosmo',
            amount: '25652'
          },
          tokenOutMinAmount: '6036'
        },
      };
      const msg = new AminoTypes({ additions: AminoConverter }).fromAmino(aminoMsg);
      const expectedValue: MsgSwapExactAmountIn = {
        sender: "osmo1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        routes: [
          {
            poolId: Long.fromNumber(1),
            tokenOutDenom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
          }
        ],
        tokenIn: {
          denom: 'uosmo',
          amount: '25652'
        },
        tokenOutMinAmount: '6036'
      };
      expect(msg).toEqual({
        typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
        value: expectedValue,
      });
    });
  });
});
