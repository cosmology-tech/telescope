import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateCertificate, MsgCreateCertificateSDKType, MsgCreateCertificateResponse, MsgCreateCertificateResponseSDKType, MsgRevokeCertificate, MsgRevokeCertificateSDKType, MsgRevokeCertificateResponse, MsgRevokeCertificateResponseSDKType } from "./cert";
/** Msg defines the provider Msg service */
export interface Msg {
  /** CreateCertificate defines a method to create new certificate given proper inputs. */
  createCertificate(request: BroadcastTxReq<MsgCreateCertificate>): Promise<DeliverTxResponse>;
  /** RevokeCertificate defines a method to revoke the certificate */
  revokeCertificate(request: BroadcastTxReq<MsgRevokeCertificate>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateCertificate defines a method to create new certificate given proper inputs. */
  createCertificate = async (request: BroadcastTxReq<MsgCreateCertificate>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateCertificate.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* RevokeCertificate defines a method to revoke the certificate */
  revokeCertificate = async (request: BroadcastTxReq<MsgRevokeCertificate>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRevokeCertificate.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};