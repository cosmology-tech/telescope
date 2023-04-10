import * as fm from "../../../grpc-gateway";
import { MsgCreateCertificate, MsgCreateCertificateSDKType, MsgCreateCertificateResponse, MsgCreateCertificateResponseSDKType, MsgRevokeCertificate, MsgRevokeCertificateSDKType, MsgRevokeCertificateResponse, MsgRevokeCertificateResponseSDKType } from "./cert";
export class Msg {
  /** CreateCertificate defines a method to create new certificate given proper inputs. */
  static CreateCertificate(request: MsgCreateCertificate, initRequest?: fm.InitReq): Promise<MsgCreateCertificateResponse> {
    return fm.fetchReq(`/akash.cert.v1beta2/CreateCertificate`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** RevokeCertificate defines a method to revoke the certificate */
  static RevokeCertificate(request: MsgRevokeCertificate, initRequest?: fm.InitReq): Promise<MsgRevokeCertificateResponse> {
    return fm.fetchReq(`/akash.cert.v1beta2/RevokeCertificate`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}