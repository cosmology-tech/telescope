import * as fm from "../../../grpc-gateway";
import { MsgCreateCertificate, MsgCreateCertificateSDKType, MsgCreateCertificateResponse, MsgCreateCertificateResponseSDKType, MsgRevokeCertificate, MsgRevokeCertificateSDKType, MsgRevokeCertificateResponse, MsgRevokeCertificateResponseSDKType } from "./cert";
export class Msg {
  static CreateCertificate(request: MsgCreateCertificate, initRequest?: fm.InitReq): Promise<MsgCreateCertificateResponse> {
    return fm.fetchReq(`/akash.cert.v1beta2/CreateCertificate`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static RevokeCertificate(request: MsgRevokeCertificate, initRequest?: fm.InitReq): Promise<MsgRevokeCertificateResponse> {
    return fm.fetchReq(`/akash.cert.v1beta2/RevokeCertificate`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}