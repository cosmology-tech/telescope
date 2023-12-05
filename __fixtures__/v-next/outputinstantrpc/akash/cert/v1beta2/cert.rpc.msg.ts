import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateCertificate, MsgCreateCertificateSDKType, MsgCreateCertificateResponse, MsgCreateCertificateResponseSDKType, MsgRevokeCertificate, MsgRevokeCertificateSDKType, MsgRevokeCertificateResponse, MsgRevokeCertificateResponseSDKType } from "./cert";
/** Msg defines the provider Msg service */
export interface Msg {
  /** CreateCertificate defines a method to create new certificate given proper inputs. */
  createCertificate(signerAddress: string, message: MsgCreateCertificate, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** RevokeCertificate defines a method to revoke the certificate */
  revokeCertificate(signerAddress: string, message: MsgRevokeCertificate, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateCertificate defines a method to create new certificate given proper inputs. */
  createCertificate = async (signerAddress: string, message: MsgCreateCertificate, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateCertificate.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* RevokeCertificate defines a method to revoke the certificate */
  revokeCertificate = async (signerAddress: string, message: MsgRevokeCertificate, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRevokeCertificate.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};