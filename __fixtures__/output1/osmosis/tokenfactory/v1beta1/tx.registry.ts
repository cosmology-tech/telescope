import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/osmosis.tokenfactory.v1beta1.MsgCreateDenom", MsgCreateDenom], ["/osmosis.tokenfactory.v1beta1.MsgMint", MsgMint], ["/osmosis.tokenfactory.v1beta1.MsgBurn", MsgBurn], ["/osmosis.tokenfactory.v1beta1.MsgChangeAdmin", MsgChangeAdmin]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
        value: MsgCreateDenom.encode(value).finish()
      };
    },

    mint(value: MsgMint) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
        value: MsgMint.encode(value).finish()
      };
    },

    burn(value: MsgBurn) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    },

    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
        value: MsgChangeAdmin.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
        value
      };
    },

    mint(value: MsgMint) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
        value
      };
    },

    burn(value: MsgBurn) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
        value
      };
    },

    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
        value
      };
    }

  },
  toJSON: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
        value: MsgCreateDenom.toJSON(value)
      };
    },

    mint(value: MsgMint) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
        value: MsgMint.toJSON(value)
      };
    },

    burn(value: MsgBurn) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
        value: MsgBurn.toJSON(value)
      };
    },

    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
        value: MsgChangeAdmin.toJSON(value)
      };
    }

  },
  fromJSON: {
    createDenom(value: any) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
        value: MsgCreateDenom.fromJSON(value)
      };
    },

    mint(value: any) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
        value: MsgMint.fromJSON(value)
      };
    },

    burn(value: any) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
        value: MsgBurn.fromJSON(value)
      };
    },

    changeAdmin(value: any) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
        value: MsgChangeAdmin.fromJSON(value)
      };
    }

  },
  fromPartial: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
        value: MsgCreateDenom.fromPartial(value)
      };
    },

    mint(value: MsgMint) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
        value: MsgMint.fromPartial(value)
      };
    },

    burn(value: MsgBurn) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    },

    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
        value: MsgChangeAdmin.fromPartial(value)
      };
    }

  }
};