import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateCertificate, MsgCreateCertificateSDKType, MsgCreateCertificateResponse, MsgCreateCertificateResponseSDKType, MsgRevokeCertificate, MsgRevokeCertificateSDKType, MsgRevokeCertificateResponse, MsgRevokeCertificateResponseSDKType } from "./cert";
/** Msg defines the provider Msg service */
export interface Msg {
  /** CreateCertificate defines a method to create new certificate given proper inputs. */
  createCertificate(request: BroadcastTxReq<MsgCreateCertificate>): Promise<BroadcastTxRes<MsgCreateCertificateResponse>>;
  /** RevokeCertificate defines a method to revoke the certificate */
  revokeCertificate(request: BroadcastTxReq<MsgRevokeCertificate>): Promise<BroadcastTxRes<MsgRevokeCertificateResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateCertificate defines a method to create new certificate given proper inputs. */
  createCertificate = async (request: BroadcastTxReq<MsgCreateCertificate>): Promise<BroadcastTxRes<MsgCreateCertificateResponse>> => {
    const data = [{
      typeUrl: MsgCreateCertificate.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCreateCertificateResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* RevokeCertificate defines a method to revoke the certificate */
  revokeCertificate = async (request: BroadcastTxReq<MsgRevokeCertificate>): Promise<BroadcastTxRes<MsgRevokeCertificateResponse>> => {
    const data = [{
      typeUrl: MsgRevokeCertificate.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgRevokeCertificateResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}
export const createMsgClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};